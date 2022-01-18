import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataById, getData } from '../redux/actions';
import { Link } from 'react-router-dom';
import informationStyle from '../style/information.module.css';
import CardActivity from '../components/CardActivity';
function Information() {
	let id = useParams().id;
	const dispatch = useDispatch();
	React.useEffect(
		() => {
			dispatch(getDataById(id));
			dispatch(getData());
		},
		[ dispatch, id ]
	);
	const state = useSelector((state) => state.data.filterID);
	console.log(state);
	return !state ? (
		<h1>aaa</h1>
	) : (
		<div className={informationStyle.container}>
			<Link className={informationStyle.buttonBack} to="/countries">
				Regresar{' '}
			</Link>
			<div className={informationStyle.containerImg}>
				<img className={informationStyle.img} src={state.img} alt={state.ID} />
			</div>
			<div className={informationStyle.containerInfo}>
				<h1>
					{state.name} ({state.ID})
				</h1>
				<p>
					<label>Capital:</label> {state.capital}
				</p>
				<p>
					<label>Population:</label> {state.population}
				</p>

				<p>
					<label>Continent:</label> {state.continent}
				</p>
				<p>
					<label>SubRegion:</label> {state.subreg}
				</p>
			</div>
			<label className={informationStyle.label}>Activities:</label>{' '}
			<ul className={informationStyle.listContainer}>
				{state.activities.length === 0 ? (
					<h1>No hay actividades</h1>
				) : (
					state.activities.map((item) => {
						return (
							<CardActivity
								name={item.nameAc}
								difficulty={item.difficulty}
								season={item.season}
								duration={item.duration}
							/>
						);
					})
				)}
			</ul>
		</div>
	);
}

export default Information;
