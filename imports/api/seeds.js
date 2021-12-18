import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
import { Main } from './main'

const Collection = new Mongo.Collection('seeds')

export const Seeds = class extends Main {
    constructor() {
        super()
        this.collection = Collection
        this.schema = new SimpleSchema({
            name: { type: String },
        })
    }
}