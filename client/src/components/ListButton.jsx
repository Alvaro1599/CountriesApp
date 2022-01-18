import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../style/ListButton.module.css';
function ListButton(props) {
	const dat = useSelector((state) => {
		return state.data.filterData;
	});
	function buttonRender(dat) {
		if (dat) {
			let num = Math.ceil(dat.length / 9);
			//length:num indica la cantidad de elementos, el callback modifica el array se le suma 1 para que no inicie desde 0
			const arr = Array.from({ length: num }, (v, i) => i + 1);
			return arr.map((item) => (
				<button className={Button.button} value={item} onClick={props.func} key={item}>
					{item}
				</button>
			));
		}
	}
	return <div className={Button.container}>{buttonRender(dat)}</div>;
}

export default ListButton;
