// boshlash

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 3000); // 1000=1sec, 5000=5s
};

// to'xtatish

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 10000);
};

start();
stop();
