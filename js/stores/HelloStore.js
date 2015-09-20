var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var CHANGE_EVENT = "change";
var _currentCount = 0;

function hello() {
  _currentCount++;
}

var HelloStore = objectAssign({}, EventEmitter.prototype, {
  getCurrentCount: function() {
    return _currentCount;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case 'hello':
      hello();
      HelloStore.emitChange();
      break;

    default:

  }
});

module.exports = HelloStore;
