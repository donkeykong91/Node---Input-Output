var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write("  >  ");
}

process.stdin.on('data', function (data) {
  process.stdout.write('\n' + data.toString().trim() + '\n');
});

ask(0);
