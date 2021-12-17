import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
import { Main } from './main'

const Collection = new Mongo.Collection('messages')

export const Recipes = class extends Main {
    constructor() {
        super()
        this.collection = Collection
        this.schema = new SimpleSchema({})
    }
}