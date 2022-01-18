import React, { useState, useEffect } from 'react';
import { getData } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import ListButton from './ListButton';
import Card from './card';
import showCard from '../style/ShowCard.module.css';
function ShowCards() {
	const [ render, setRender ] = useState(1);
	const dispatch = useDispatch();
	const dat = useSelector((state) => {
		return state.data;
	});
	console.log(render, 'render111111111');
	useEffect(
		() => {
			dispatch(getData());
		},
		[ dispatch ]
	);
	const [ order, setOrder ] = React.useState('azAlp');
	function returnStateButton(state) {
		setRender(state.target.value);
	}
	function mapCards() {
		console.log(dat, 'Asdasdasd111');
		if (dat.filterData) {
			if (order === 'azAlp') {
				dat.filterData.sort((a, b) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				});
			}
			if (order === 'desAlp') {
				dat.filterData.sort((a, b) => {
					if (a.name > b.name) return -1;
					if (a.name < b.name) return 1;
					return 0;
				});
			}
			if (order === 'desPop') {
				dat.filterData.sort((a, b) => {
					if (a.population < b.population) return -1;
					if (a.population > b.population) return 1;
					return 0;
				});
			}
			if (order === 'azPop') {
				dat.filterData.sort((a, b) => {
					if (a.population > b.population) return -1;
					if (a.population < b.population) return 1;
					return 0;
				});
			}
		}

		if (dat.filterData) {
			console.log(render == 1, 'reeeeedddder');
			if (render == 1) {
				return dat.filterData.slice(0, 9).map((item) => {
					return (
						<Link className={showCard.link} to={`/countries/${item.ID}`} key={item.ID}>
							<Card key={item.ID + 'C'} img={item.img} name={item.name} continent={item.continent} />
						</Link>
					);
				});
			} else {
				return dat.filterData.slice((render - 1) * 9 + (render - 2), render * 9 + (render - 1)).map((item) => {
					return (
						<Link className={showCard.link} to={`/countries/${item.ID}`} key={item.ID}>
							<Card key={item.ID + 'C'} img={item.img} name={item.name} continent={item.continent} />
						</Link>
					);
				});
			}
		} else {
			return <h1>Cargando...</h1>;
		}

		/* return dat.filterData ? render === 1 ? (
			('aaaaa',
			dat.filterData.slice(0, 9).map((item) => {
				return (
					<Link className={showCard.link} to={`/countries/${item.ID}`} key={item.ID}>
						<Card key={item.ID + 'C'} img={item.img} name={item.name} continent={item.continent} />
					</Link>
				);
			}))
		) : (
			dat.filterData.slice((render - 1) * 9 + (render - 2), render * 9 + (render - 1)).map((item) => {
				return (
					<Link className={showCard.link} to={`/countries/${item.ID}`} key={item.ID}>
						<Card key={item.ID + 'C'} img={item.img} name={item.name} continent={item.continent} />
					</Link>
				);
			})
		) : (
			<h1>Cargando...</h1>
		); */
	}

	return (
		<div className={showCard.container}>
			<div className={showCard.cardContainer}>
				<div className={showCard.containerFilter}>
					<div className={showCard.filter}>
						<Filter setRen={setRender} setOrder={setOrder} />
						<ListButton func={returnStateButton} />
					</div>
				</div>

				{mapCards()}
			</div>
		</div>
	);
}

export default ShowCards;
