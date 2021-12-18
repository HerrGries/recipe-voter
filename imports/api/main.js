import moment from 'moment'

export const Main = class {
    attributes = {}
    id = null

    async create() {
        this.attributes = this.schema.clean(this.attributes)
        this.id = await this.collection.insert(this.attributes)
        return this;
    }

    async save() {
        this.attributes = this.schema.clean(this.attributes)
        await this.collection.update(this.id, { $set: this.attributes })
        return this;
    }

    async raw() {
        return await this.collection.find({ _id: this.id }).fetch()[0]
    }

    async findByAttribute(name, value) {
        const query = {}
        query[name] = value
        const instance = await this.collection.find(query).fetch()[0]
        this.id = instance?._id ?? null
        this.attributes = this.schema.clean(instance ?? {})
        return this
    }

    async findAllByAttribute(name, value) {
        const query = {}
        query[name] = value
        const instances = await this.collection.find(query).fetch()
        
        return instances.map(instance => {
            const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
            clone.attributes = this.schema.clean(instance ?? {})
            clone.id = instance?._id ?? null
            return clone;
        });
    }

    async createIfNotExsist(attributes) {
        if (!this.id) {
            this.attributes = attributes ?? null
            await this.create()
        }
        return this
    }

    async touch() {
        this.set('updatedAt', moment().format())
        await this.save()
        return this;
    }

    set(name, value) {
        this.attributes[name] = value
        return this
    }

    get(name) {
        return this.attributes[name]
    }
}