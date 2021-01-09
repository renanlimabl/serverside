# RECUPERAÇÃO DE SENHA

** REQUISITOS FUNCIONAIS **

- O usuário deve poder recuperar sua senha informando seu e-mail [X];
- O usuário deve receber um e-mail com instruções de recuperação de senha [];
- O usuário deve poder resetar sua senha [];

** REQUISITOS NÃO FUNCIONAIS **

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento.
- Utilizar Amazon SES para envios em produção.
- O envio de e-mails deve acontecer em segundo plano (background job) "Fila";

** REGRAS DE NEGÓCIO **

- O link enviado por email para resetar senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;
# ATUALIZAÇÃO DO PERFIL

** REQUISITOS FUNCIONAIS **

- O usuário deve poder atualizar seu nome, e-mail e senha.

** REQUISITOS NÃO FUNCIONAIS **

- Null

** REGRAS DE NEGÓCIO **

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar sua senha antiga;
# PAINEL DO PRESTADOR

** REQUISITOS FUNCIONAIS **

- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento.
- O prestador deve poder visualizar as notificações não lidas.

** REQUISITOS NÃO FUNCIONAIS **

- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

** REGRAS DE NEGÓCIO **

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar.

# AGENDAMENTO DE SERVIÇOS

** REQUISITOS FUNCIONAIS **

- O usuário deve poder listar poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuaŕio deve poder listar os horários disponíveis de um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

** REQUISITOS NÃO FUNCIONAIS **

- A listagem de prestadores deve ser armazenada em cache;

** REGRAS DE NEGÓCIO **

- Cada agendamento deve durar uma hora;
- Os agendamentos devem estar disponíveis entre as 8h as 18h. (último agendamento às 17);
- O usuário não pode agendar em um horário já ocupado.
- O usuário não pode agendar em um horário que já passou.
- O usuário não pode agendar serviços consigo mesmo.
