import { startOfHour } from 'date-fns';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequestDTO {
  provider_id: string;
  date: Date;
}

/**
 * (S)olid
 * - Single Resposability Principle
 * Cada arquivo tem uma única responsabilidade.
 * so(L)id
 * - Liskov Substituion Principle
 * soli(D)
 * - Dependecy Inversion Principe
 * Espera um repositório,
 * então no constructor ele irá receber como parâmetro o arquivo que ele espera,
 * no caso o repository.
 * O arquivo que precisar utilizar o service (nesse projeto são as rotas) que vai ser responsável por mostrar qual repositório esse service vai receber.
 */
class CreateAppointmentService {
  // prettier-ignore
  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  public async execute({
    date,
    provider_id,
  }: IRequestDTO): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
