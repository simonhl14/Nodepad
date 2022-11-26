import express from 'express';
import router from '../routes/index.js';
import cookieParser from 'cookie-parser';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080
        this.path = '/'
        this.middlewares();
        this.routes();
        this.engine();
    }

    routes(){

        this.app.use(this.path, router)

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en puerto", this.port);
        });
    }

    middlewares(){
        this.app.use(cookieParser());
        this.app.use(express.static('views'));
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    engine(){
        this.app.set('view engine','ejs')
    }
}

export default Server;