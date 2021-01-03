// Rotas: Receber uma requisição, chamar outro arquivo e devolver uma resposta
import { Router } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserServices from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  // const usersRepository = new UsersRepository();
  // const authenticateUser = new AuthenticateUserServices(usersRepository);
  const authenticateUser = container.resolve(AuthenticateUserServices);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
