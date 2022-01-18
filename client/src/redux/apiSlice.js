//creando los reducers
export function dataReducer(state = { payload: [] }, action) {
	switch (action.type) {
		case 'GET_DATA':
			return {
				...state,
				filterData: action.data
			};
		case 'GET_DATA_BY_ID':
			return {
				...state,
				filterID: action.filterID
			};
		case 'FILTER_DATA':
			console.log(action);
			return {
				...state,
				filterData: action.filter
			};
		//en el payload se almacena el array de paises filtrados, el filterData sirve como una copia del array payload para que el filtrado por nombre no se vea afectado
		case 'POST_ACTIVITY':
			return {
				...state,
				filterData: action.data
			};
		default:
			return state;
	}
}
