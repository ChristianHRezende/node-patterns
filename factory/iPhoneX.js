const Phone  =  require('./iPhone')
//Factory IphoneX
class IphoneX {
    constructor(serialNum){
        return new Phone(serialNum,'Iphone X','A12 Bionic','2 Gb',63.7,180.9,8.3,'728 x 1492')
    }
}

module.exports =  IphoneX