import { combineReducers } from 'redux';
import { dataReducer } from './apiSlice';

const rootReducer = combineReducers(
	//combinando los reducers
	{
		data: dataReducer
	}
);
//exportando el rootReducer
export default rootReducer;
