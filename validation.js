const valid = ['-h', '--init'];

function isValid() {
  // trick
  const [exec, path, ...rest] = process.argv;
  
  for (const arg of rest) {
    if (!valid.includes(arg)) {
      console.log('Invalid argument', arg);
      return false;
    }
  }

  return true;
}

export default isValid;
