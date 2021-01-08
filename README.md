# RECUPERAÇÃO DE SENHA

** REQUISITOS FUNCIONAIS **

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

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
** REQUISITOS NÃO FUNCIONAIS **
** REGRAS DE NEGÓCIO **

# AGENDAMENTO DE SERVIÇOS

** REQUISITOS FUNCIONAIS **
** REQUISITOS NÃO FUNCIONAIS **
** REGRAS DE NEGÓCIO **
