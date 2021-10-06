import express from 'express';
import cors from 'cors';
import database from '../database/database';
import { auth, users, songs, genders, artists } from '../routes';

class Server {
    constructor(){
        this.app  = express();
        this.port = process.env.PORT || 3000;
        this.path = {
            auth:    '/api/auth',
            users:   '/api/users',
            songs:   '/api/songs',
            genders: '/api/genders',
            artists: '/api/artists'
        }

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB(){
        await database();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use(this.path.auth,    auth);
        this.app.use(this.path.users,   users);
        this.app.use(this.path.songs,   songs);
        this.app.use(this.path.genders, genders);
        this.app.use(this.path.artists, artists);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server on port:', this.port);
        });
    }
}

export default Server;