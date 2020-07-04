const Signup = require("./Signup")

class SignupBuilder{
    constructor(name,email,age){
        this.name= name
        this.email = email
        this.age = age
    }
    setNick(nickname){
        this.nickname = nickname
        return this
    }

    setPhoto(photo){
        this.photo = photo
        return this
    }

    setTopics(topics){
        this.favoriteTopics = topics
        return this
    }

    setSME(sme){
        this.isSME = sme
        return this
    }

    setModerator(isModerator){
        this.isModerator = isModerator
        return this
    }

    setAdmin(isAdmin){
        this.isAdmin =isAdmin
        return this
    }

    create(){
        return Signup.create(this)
    }

}

module.exports = SignupBuilder