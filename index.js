import run from './args';
import isValid from './validation';

if (!isValid()) {
  process.exit(1);
}

run();