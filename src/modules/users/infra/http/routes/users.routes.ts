// Rotas: Receber uma requisição, chamar outro arquivo e devolver uma resposta
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

interface IRequestDTO {
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
    // const usersRepository = new UsersRepository();
    // const createUser = new CreateUserService(usersRepository);
    const createUser = container.resolve(CreateUserService);

    const user: IRequestDTO = await createUser.execute({
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
    // const usersRepository = new UsersRepository();
    // const updateUserAvatar = new UpdateUserAvatarService(usersRepository);
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
