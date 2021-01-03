import { container } from 'tsyringe';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmetsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// register = Toda vez que um arquivo utilizar, ele vai instanciar do 0,
// registerSingleton = Ele instacia apenas 1 vez no ciclo da aplicação.
container.registerSingleton<IAppointmentsRepository>(
  'AppointmetsRepository',
  AppointmetsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
