var Alexa = require('alexa-sdk');
var constants = require('../constants/constants');

var mainStateHandlers = Alexa.CreateStateHandler(constants.states.MAIN, {
    'LaunchRequest': function () {
        this.emit(':ask', `Welcome to the future of manufacturing! How can I help you?`,  `What can I do for you?`);
    },

    'ListCMIntent': function () {
        this.emit(':ask', `Currently, we are running three sites. Foxconn Shengzhen, Foxconn Beijing and Foxconn Shanghai. Do you want to check one of them?`, `Do you want to check any site?`);
    },

    'SelectCMIntent': function () {
        var site = this.event.request.intent.slots.Site.value;
        if (site) {
            this.attributes['site'] = site;
            this.handler.state = constants.states.CM;
            this.emit(':ask', `Okay. What do you want to know about ${site}?`, `Do you want to check ${site}?`);
        } else {
            this.emit(':ask', `Sorry, I didn't recognize that site.`, `Select a site by saying select followed by the site name`);
        }
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', `Have a nice day!`);
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', `Have a nice day!`);
    },
});

module.exports = mainStateHandlers;
