import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';//para a pasta publica
import mainRoutes from './routes/index';

dotenv.config();

const server = express();//servidor

server.set('view engine', 'mustache');//mustache
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));//pasta de arquivos estaticos

//Rotas
server.use(mainRoutes);

server.use((req, res)=>{
    res.render('pages/404');
});

console.log(`Servidor rodando na porta: ${process.env.PORT}`);
server.listen(process.env.PORT);