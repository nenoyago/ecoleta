import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import { errors } from 'celebrate'

// Rota: Endereco completo da requisicao
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informacoes do back-end
// POST: Criar uma nova informacao no back-end
// PUT: Atualizar uma informacao existente no back-end
// DELETE: Remover uma informacao do back-end

// POST http://localhost:3333/users = Criar um usuario
// GET http://localhost:3333/users = Listar usuarios
// GET http://localhost:3333/users/5 = Buscar dados do usuario com ID 5

// Request Param: Parametros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginacao...
// Request Body: Parametros para criacao/atualizacao de informacoes

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333)