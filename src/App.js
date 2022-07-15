import express, { urlencoded, json } from "express";
import { engine } from "express-handlebars";
import router from "./router.js";
import path from "path"

export default class App {

    server;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    middleware() {

        this.server.set('views', path.resolve('src' , 'app' , 'views'));
        this.server.engine('.hbs', engine({ 

            defaultLayout: 'main', 

            extname: '.hbs' ,
        
        }));
        this.server.set('view engine', '.hbs');

        this.server.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
        this.server.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
        this.server.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
        this.server.use('/hbs', express.static('./node_modules/handlebars/dist/'));
        this.server.use('/public', express.static(path.join('src' , 'app' , 'public')));

        this.server.use(urlencoded({ extended: true }));
        this.server.use(json());
    }

    router() {
        this.server.use(router);
    }

}