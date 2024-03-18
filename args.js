const args = process.argv;

function help() {
  console.log('Help ui display');
}

function init() {
  console.log('Init command ui....');
}

function run() {
  if (args[2] === '-h') {
    help();
    return;
  }

  if (args[2] === '--init') {
    init();
    return;
  }
}

export default run;
