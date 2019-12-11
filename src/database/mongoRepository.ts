import { IRepository } from "./IRepository";
import mongoose from "mongoose";
import { injectable, inject, unmanaged } from "inversify";

@injectable()
export class MongoRepository<T extends mongoose.Document> implements IRepository<T> {

    private _model!: mongoose.Model<mongoose.Document>;

    constructor(@unmanaged() model: mongoose.Model<mongoose.Document>) {
        this._model = model;
    }

    async create(item: T): Promise<boolean> {
        console.log(item);
        var result = await this._model.create(item).catch(error => console.log(error));
        return result != null;
    }
    update(item: T): Promise<boolean> {
        this._model.update({}, item);
        return Promise.resolve(true);
    }
    async find(query: any): Promise<T[]> {
        const results = await this._model.find(query).exec();
        return results as T[];
    }
    async findOne(query: any): Promise<T> {
        return await this._model.findOne(query).exec() as T;
    }
    async findById(id: string): Promise<T> {
        return await this._model.findOne({ id: id }).exec() as T;
    }
}