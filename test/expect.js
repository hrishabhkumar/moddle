import chai from 'chai';
import matchers from './matchers';

// add matchers
chai.use(matchers);

// expose expect as global
global.expect = chai.expect;