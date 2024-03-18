const args = process.argv;

function help() {
  console.log('Help ui display');
}

function run() {
  if (args[2] === '-h') {
    help();
  }
}

export default run;
