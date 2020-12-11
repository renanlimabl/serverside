// Rotas: Receber uma requisição, chamar outro arquivo e devolver uma resposta
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import CreateUserService from '../services/CreateUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

interface RequestDTO {
  name: string;
  email: string;
  password?: string;
}

/**
 * Repositories
 * Services
 */

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user: RequestDTO = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    console.log(request.file);
    return response.json({ ok: true });
  },
);

export default usersRouter;
