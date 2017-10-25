import {config} from '../config/global';
import {MongoClient,Db} from 'mongodb';

class DBConnection{

    db:Db;

    constructor(){
        const connection = config.database.host+":"+config.database.port+"/"+config.database.database;
        MongoClient.connect(connection)

        MongoClient.connect(connection)
            .then(db => {
                this.db = db;
                db.collection("restaurants").createIndex({localizacion:"2dsphere"});//cerar los indices para usar buscquedad por localizacion
            })
            .catch(err => console.log(err))
    }//por cada servicio se hace un sigleton

}
export const Con = new DBConnection();// este es un sigleton, crea una variable constancia y la instancia a la base de datos
