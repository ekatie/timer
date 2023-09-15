const args = process.argv;

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