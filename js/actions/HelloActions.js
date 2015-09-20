var AppDispatcher = require('../dispatcher/AppDispatcher');

var HelloActions = {
  hello: function() {
    AppDispatcher.dispatch({
      actionType: "hello"
    });
  }
};

module.exports = HelloActions;
