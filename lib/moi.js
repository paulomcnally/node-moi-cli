var colors = require('colors');
var wol = require('wake_on_lan');

var Moi = function() {
  var self = this;

  /**
   * Show defined error message
   */
  self.error = function(code) {
    var message = '';
    switch (code){
      case 0:
        message = 'Command is required!';
        break;
      case 1:
        message = 'Command dont\' exists!';
        break;
      case 2:
        message = 'Undefined server!';
        break;
    }
    console.log(colors.red('Error: ' + message)) ;
  }

  /**
   * Show custom error message
   */
  self.errorMessage = function(message) {
    console.log(colors.red('Error: ' + message)) ;
  }

  /**
   * Show custom ok message
   */
  self.okMessage = function(message) {
    console.log(colors.green('Ok: ' + message)) ;
  }

  /**
   * Wake on LAN servers
   * http://es.wikipedia.org/wiki/Wake_on_LAN
   */
  self.wol = function(argv) {
    switch (argv[0]) {
      // 192.168.88.98
      case 'development':
        wol.wake('00:14:D1:22:D7:FE', function(error) {
          if (error) {
            self.errorMessage(error);
          } else {
            self.okMessage('Done sending packets');
          }
        });
        break;
      default:
        self.error(2);
    }
  }
}

module.exports = Moi;
