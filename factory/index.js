
const executeFactoryExample = () => {
    //Example using just Factory
    console.log('Factory example\n')

    const iPhoneXR = require('./iPhoneXR')
    const iPhoneX = require('./iPhoneX')

    const myNewiPhoneXR = new iPhoneXR('XR-0001')
    const myNewiPhoneX = new iPhoneX('X-0001')

    myNewiPhoneXR.displayConfig()
    myNewiPhoneX.displayConfig()

    console.log('=============================\n')
}

const executeAbsctractFactoryExample = () => {
    //Example using Abstract Factory
    console.log('Abstract Factory example\n')

    const iPhoneFactory = require('./iPhoneFactory')

    const iPhoneXR = iPhoneFactory.create('iPhone XR','xr-0001');
    const iPhoneX = iPhoneFactory.create('iPhone X','x-0001');

    iPhoneXR.displayConfig()
    iPhoneX.displayConfig()

    console.log('=============================\n')
}

executeFactoryExample()

executeAbsctractFactoryExample()