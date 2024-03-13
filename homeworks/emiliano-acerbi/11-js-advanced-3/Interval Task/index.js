let count = 0;

const interval = setInterval(() => {
  count++;
  console.log(`Elapsed time: ${count} sec`);

  if (count > 4) {
    clearInterval(interval);
  }
}, 1000);
