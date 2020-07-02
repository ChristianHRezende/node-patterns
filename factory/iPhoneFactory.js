const iPhoneXR = require('./iPhoneXR')
const iPhoneX = require('./iPhoneX')

//Abstract Factory
class iPhoneFactory {
    create(type,serialNum){
        switch(type){
            case 'iPhone XR':
                return  new iPhoneXR(serialNum)
            case 'iPhone X':
                return  new iPhoneX(serialNum)
            default: {
                console.log('Unknown iPhone type...')
            }
        }
    }
}
//Just one instance for all phones
module.exports = new iPhoneFactory()