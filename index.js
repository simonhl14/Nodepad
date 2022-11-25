import * as dotenv from 'dotenv'
import express from 'express';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';

dotenv.config()
const app = express();

// //conectar a la bd
// db.authenticate()
//     .then( ()=> console.log('Base de datos conectada'))
//     .catch( error => console.log(error) )

const port = process.env.PORT;

app.set('view engine','ejs');
app.use(cookieParser());

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/', router); 

app.listen(port ,() =>{
    console.log(`el servidor esta corriendo en el puerto ${port}`);
});
