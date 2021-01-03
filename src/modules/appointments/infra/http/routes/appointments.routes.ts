// Rotas: Receber uma requisição, chamar outro arquivo e devolver uma resposta
import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

/**
 * SoC: Separation of Concerns (Separação de Preocupações)
 * Cada parte do código se preocupa com algo específico.
 */
appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  /**
   * O Service espera como parâmetro = o repositório, que já foi instânciado na
   * const = appointmentsRepository.
   * Então basta instanciar o Service e passar o appointmentsRepository como parâmetro
   */

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
