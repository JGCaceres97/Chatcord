const moment = require('moment');

/**
 * Function to format messages.
 * @param {string} username Username to show
 * @param {string} text Message sended
 */
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm A')
  };
}

module.exports = formatMessage;
