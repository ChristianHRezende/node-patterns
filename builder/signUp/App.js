const SignUp = require('./Signup')
const SignupBuilder = require('./SignupBuilder')

// Maneira antiga sem o builder
SignUp.create('Jorge','jorge@mail.com',21,'https://image','Xooorge',['Rock'],true,true,true)

// Nova maneira com o Builder
// Uma abstracao bem menos verbosa e mais legivel
// o usuario pode ou n ter todos esses atributos com excessao do construtor
 new SignupBuilder('Jorge','jorge@mail.com',21)
    .setPhoto('https://image')   
    .setNick('Xooorge')
    .setTopics(['Rock'])
    .setSME(true)
    .setModerator(true)
    .setAdmin(true)
    .create()