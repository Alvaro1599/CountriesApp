import React from 'react';
import { filterData, orderData } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import FilterStyle from '../style/Filter.module.css';
import { Link } from 'react-router-dom';
function Filter(props) {
	const dispatch = useDispatch();
	//filtrando continentes para el filtrado por medio de Select
	const { continents, arr } = useSelector((state) => {
		let arr = [];
		return {
			continents: [
				...new Set(state.data.filterData ? state.data.filterData.map((item) => item.continent) : [])
			],
			activities: [
				state.data.filterData
					? state.data.filterData.map((item) => item.activities).forEach((z) => {
							if (z.length > 0) {
								arr.push(z.map((x) => x.nameAc));
							}
						})
					: []
			],
			arr: [ ...new Set(arr.reduce((a, b) => a.concat(b), [])) ]
		};
	});

	//extrayendo los continentes para su renderizado en el Select
	// mapeando componentes para continents
	function mapContinents() {
		return continents.map((item) => {
			return <option key={item}>{item}</option>;
		});
	}

	function mapActivities() {
		return arr.map((item) => {
			return (
				<option value={item} key={item}>
					{item}
				</option>
			);
		});
	}
	function handleChanges(evt) {
		if (evt.target.className === 'order') {
			console.log('aasdasd');
			dispatch(orderData(evt.target.value));
			props.setOrder(evt.target.value);
			props.setRen(1);
		}
		dispatch(filterData(evt.target.className, evt.target.value));
		props.setRen(1);
	}
	function handleSubmit(evt) {
		evt.preventDefault();
	}
	return (
		<div className={FilterStyle.container}>
			<form className={FilterStyle.form} onSubmit={handleSubmit}>
				<input
					placeholder="country's name"
					id={FilterStyle.input}
					className="name"
					type={'text'}
					onChange={handleChanges}
				/>

				<div className={FilterStyle.containerSelect}>
					<div className={FilterStyle.selectContainer}>
						<label> Continent:</label>
						<select id={FilterStyle.select} className="continent" onChange={handleChanges}>
							<option value={''}>All</option>

							{mapContinents()}
						</select>
					</div>
					<div className={FilterStyle.selectContainer}>
						<label> Activity: </label>
						<select id={FilterStyle.select} className="activity" onChange={handleChanges}>
							<option value={''}>All</option>
							{mapActivities()}
						</select>
					</div>
					<div className={FilterStyle.selectContainer}>
						<label> Order: </label>
						<select id={FilterStyle.order} className="order" onChange={handleChanges}>
							<option disabled>Order by character:</option>
							<option value={'azAlp'}>A-Z</option>
							<option value={'desAlp'}>Z-A</option>
							<option disabled>Order by population:</option>
							<option value={'azPop'}>Higher to lower</option>
							<option value={'desPop'}>Lower to higher</option>
						</select>
					</div>
					<Link to="/addActivity" className={FilterStyle.buttonAdd}>
						Add Activity
					</Link>
				</div>
			</form>
		</div>
	);
}

export default Filter;
