'use strict';

import storage from './storage';
import tokens from './tokens';
import { combineReducers } from 'redux';

export default combineReducers({
  storage,
  tokens
});