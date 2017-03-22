var Alexa = require('alexa-sdk');

var mainStateHandlers = require('./handlers/mainStateHandlers');
var cmStateHandlers = require('./handlers/cmStateHandlers');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(
    mainStateHandlers,
    cmStateHandlers
    );
  alexa.execute();
};
