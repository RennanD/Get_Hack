[x] nodemon + sucrase
[x] sequelize + posgres
[x] Realize a validação dos dados de entrada;
[x] Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.
[x] A autenticação deve ser feita utilizando JWT.
[x] Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.
[x] Criptografe a senha do usuário para segurança.
[x] Realize a validação dos dados de entrada;

[x] Criar rota para upload de arquivos e salvar no banco de dados
[x] Cadastrar hacakthons com titulo, descrição, data e hora, premiação e banner (Campos obrigatórios) e um campo user_id se relacionando com o organizador do hackathon
[x] Não será possivel cadastrar hacakthons em datas que ja passaram
[x] Hackathons que ainda não aconteceram poderam ser editados pelo organizador
[x] Criar rota pra listar hackathons do usuário logado
[x] Hackathons que ainda não aconteceram podem ser cancelados (e deletados do banco de dados)

[x] O usuário pode se inscrever em hackathons que não organiza.
[x] O usuário não pode se inscrever em hackathons que já aconteceram
[x] O usuario não pode se inscrer no mesmo hackton duas vezes
[x] O usuário não pode se casdatrar em hackathons que aconteceram no mesmo horário
[] Enviar um e-mail ao organizador toda vez que um usuário novo se inscrever em
um hackathon
[] Enviar ao usuário um notificação toda vez que um hackathon for cancelado.

[] Criar rota para listar hackathons com filtro por data (não por hora),
sendo retornado 10 itens por página, mostrando dados do organizador
[] Criar rotas para listar hackathons em que o usuário logado está inscrito
[] Listar apenas hackathons que não passaram ordenados por data
