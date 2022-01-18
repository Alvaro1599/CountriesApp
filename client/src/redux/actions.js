import axios from 'axios';
//creando una acción para llamar a la api
export const getData = (cb) => async (dispatch) => {
	console.time('getData');
	const data = await axios.get('http://localhost:3001/countries/');
	console.timeEnd('getData');
	dispatch({
		type: 'GET_DATA',
		data: data.data
	});
};

export const getDataById = (id) => async (dispatch) => {
	const data = await axios.get('http://localhost:3001/countries/' + id);
	dispatch({
		type: 'GET_DATA_BY_ID',
		filterID: data.data
	});
};
const filterArray = { name: '', continent: '', activity: '' };

export const filterData = (classForm, value) => async (dispatch) => {
	filterArray[classForm] = value;
	console.log(filterArray, 'filterArray');
	const filterData = await axios.get(
		`http://localhost:3001/countries?name=${filterArray.name}&continent=${filterArray.continent}&activity=${filterArray.activity}`
	);
	console.log(filterData.data, 'filteeeeeeer');
	dispatch({
		type: 'FILTER_DATA',
		filter: filterData.data
	});
};

export const orderData = (order) => (dispatch) => {
	console.log(order, 'order');
	dispatch({
		type: 'ORDER_DATA',
		order: order
	});
};

export const postActivity = (activity) => async (dispatch) => {
	console.log(activity, 'activity');
	const data = await axios.post('http://localhost:3001/activities', activity);
	console.log(data, 'dataPost');
	dispatch({
		type: 'POST_ACTIVITY',
		data: data.data
	});
};
