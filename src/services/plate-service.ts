import {Con} from './db-connection';
import{Collection, ObjectID} from 'mongodb';
import{Plate} from './common/plate';

class PlateService{
    db: Collection<Plate> = Con.db.collection("plates");

    insert(plate:Plate){
        return this.db.insertOne(plate);
    }

    update(id:string, plate:Plate){
        return this.db.updateOne({_id: new ObjectID(id)},{$set:plate});
    }

    delete(id:string){
        return this.db.find({"restaurante._id": id})
        .toArray();
    }
    allByIngredients(ingredientes: string[]){
        return this.db.find({
            ingredientes: {
                $in: ingredientes
            }
        }).toArray();
    }
    deleteAllIngredients(){
        return this.db.updateOne({_id: new ObjectID(id)},{$set: {ingredientes:[]}})
    }
    addIngredient(id: string, ingrdient:string){
        return this.db.updateOne({_id: new ObjectID(id)},{$push: {ingredientes: ingrdient}})
    }
}
export const plateService = new PlateService();