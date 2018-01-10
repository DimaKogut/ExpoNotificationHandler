'use strict';

import test from './test';
import storage from './storage';
import { combineReducers } from 'redux';

export default combineReducers({
  test,
  storage
});