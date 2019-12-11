[x] nodemon + sucrase
[x] sequelize + posgres
[x] Realize a validação dos dados de entrada;
[x] Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.
[x] A autenticação deve ser feita utilizando JWT.
[x] Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.
[x] Criptografe a senha do usuário para segurança.
[x] Realize a validação dos dados de entrada;

[] Criar rota para upload de arquivos e salvar no banco de dados
[] Cadastrar hacktons com titulo, descrição, data e hora e banner (Campos obrigatórios) e um campo user_id se relacionando com o organizador do hackaton
[] Não será possivel cadastrar hacktons em datas que ja passaram
[] Hackatons que ainda não aconteceram poderam ser editados pelo organizador
[] Criar rota pra listar hackatons do usuário logado
[] Hackatons que ainda não aconteceram podem ser cancelados (e deletados do banco de dados)

[] O usuário pode se inscrever em hackatons que não organiza.
[] O usuário não pode se inscrever em hackatons que já aconteceram
[] O usuario não pode se inscrer no mesmo hackton duas vezes
[] O usuário não pode se casdatrar em hackatons que aconteceram no mesmo horário
[] Enviar um e-mail ao organizador toda vez que um usuário novo se inscrever em
um hackaton

[] Criar rota para listar hackatons com filtro por data (não por hora),
sendo retornado 10 itens por página, mostrando dados do organizador
[] Criar rotas para listar hackatons em que o usuário logado está inscrito
[] Listar apenas hackatons que não passaram ordenados por data
