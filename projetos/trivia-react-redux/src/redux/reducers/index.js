import { combineReducers } from 'redux';
import login from './login';
import game from './game';
import header from './header';

export default combineReducers({ login, game, header });
