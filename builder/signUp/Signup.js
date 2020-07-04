const User = require('./User')
const UserPref = require('./UserPref')

class Signup{
    async create({name,email,age,photo,nickname,favoriteTopics,isSME,isModerator,isAdmin}){
        const newUser = new User(name,email,age,photo);
        const newUserPref = await new UserPref(newUser,nickname,favoriteTopics,isSME,isModerator,isAdmin)
        console.log(newUserPref)
    }
}
module.exports = new Signup()

