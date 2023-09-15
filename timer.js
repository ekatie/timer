const args = process.argv;

/**
 * This function takes CLI arguments and beeps at the indicated intervals (arguments as seconds).
 * @param {array} args - Array of strings input via the CLI
 */

const timer = function(args) {
  for (let i = 2; i < args.length; i++) {
    let interval = parseInt(args[i]);
    if (!isNaN(interval) && interval > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, interval * 1000);
    }
  }
};

timer(args);