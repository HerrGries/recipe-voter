import { UserSeeder } from './userSeeder.js'
import { Seeds } from './../api/seeds.js'

export const SeederController = class {
    seeder = {
        'testiii': UserSeeder
    }

    async seed() {
        const seeds = new Seeds();
        Object.keys(this.seeder).forEach(async function (name) {
            const seed = await seeds.findByAttribute('name', name);
            if (!seed.exist()) {
                seed.set('name', name)
                seed.create()
                await this.seeder[name].seed()
            }
        }.bind(this));
    }
}