const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/result-aync.txt', `Here is the result: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with task');
      },
    )
  })
})
console.log('starting next task')
