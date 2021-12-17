import { Mongo } from 'meteor/mongo'
import moment from 'moment'
import SimpleSchema from 'simpl-schema'
import { Main } from './main'

const Collection = new Mongo.Collection('users')

export const Users = class extends Main {
    constructor() {
        super()
        this.collection = Collection
        this.schema = new SimpleSchema({
            name: { type: String },
            createdAt: {
                type: Date,
                defaultValue: moment().format()
            },
            updatedAt: {
                type: Date,
                defaultValue: null
            }
        })
    }
}