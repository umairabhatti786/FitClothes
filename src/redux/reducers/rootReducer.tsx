import {combineReducers} from 'redux';
import sectionsReducer from './sectionsReducer';

const rootReducer = combineReducers({
  sections: sectionsReducer,

});

export default rootReducer;
