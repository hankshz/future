var Alexa = require('alexa-sdk');
var constants = require('../constants/constants');

var cmStateHandlers = Alexa.CreateStateHandler(constants.states.CM, {
    'BackToMainIntent': function () {
        this.handler.state = constants.states.MAIN;
        this.emitWithState('LaunchRequest');
    },

    'CMProgressIntent': function () {
        var date = this.event.request.intent.slots.Date.value;
        if (date)
        {
            this.emit(':askWithCard', `Since ${date}, we have 55 NewYork V5 passed <say-as interpret-as="characters">BI</say-as>, 10 are still running <say-as interpret-as="characters">BI</say-as> and 0 failed <say-as interpret-as="characters">BI</say-as>. Please click the link to review the details.`, `What else do you want to know`, 'Inventory Report', 'www.future.com');
        } else {
            this.emit(':ask', `We have 555 NewYork V5 passed <say-as interpret-as="characters">BI</say-as>, 25 are still running <say-as interpret-as="characters">BI</say-as> and 0 failed <say-as interpret-as="characters">BI</say-as>.`, `What else do you want to know`);
        }
    },

    'CMReleaseIntent': function () {
        var asy = this.event.request.intent.slots.ASY.value;
        if (asy)
        {
            this.emit(':askWithCard', `Currently, ${asy} is using MFG 9.9.9. Please review the details of the firmwares we are using.`, `What else do you want to know`, 'Firmware Inventory', 'OS aef14ae5\nBIOS ae4f123g');
        } else {
            this.emit(':ask', `Sorry, I don't understand which assembly you want. Please repeat.`, `Please repeat with the assembly you want.`);
        }
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', `Have a nice day!`);
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', `Have a nice day!`);
    },
});

module.exports = cmStateHandlers;
