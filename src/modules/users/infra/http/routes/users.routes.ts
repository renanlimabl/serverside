// Rotas: Receber uma requisição, chamar outro arquivo e devolver uma resposta
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import sharpConfig from '@config/sharp';
// import tmp from '@tmp/';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
/**
 * Repositories
 * Services
 */

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  sharpConfig,
  // (request: Request, response: Response) => {
  //   const compressedImagefileSavePath = path.join(__dirname, '../', 'teste');

  //   sharp(request.file.path)
  //     .resize(40, 40)
  //     .jpeg()
  //     .toFile(compressedImagefileSavePath, (err, info) => {
  //       if (err) {
  //         response.json({ err });
  //       } else {
  //         response.json({ info });
  //       }
  //     });
  // },
  userAvatarController.update,
);

export default usersRouter;
