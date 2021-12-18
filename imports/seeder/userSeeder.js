import { Users } from './../api/users.js'
export const UserSeeder = {
  
    seed : async function() {
      const tom = new Users();
      tom.set('name', 'Tom')
      await tom.create()
      console.log('Tom ID: ', tom.id)

      Array.from({ length: 9 }, async function (x, i){
        const user = new Users();
        user.set('name', (Math.random() + 1).toString(36).substring(7))
        await user.create()
      });
    }
}