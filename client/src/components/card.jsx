import React from 'react';
import card from '../style/Card.module.css';
function Card(props) {
	return props.img == undefined && props.name == undefined && props.continent == undefined ? (
		<div>cargando</div>
	) : (
		<div className={card.container}>
			<div className={card.imgContainer}>
				<img className={card.img} src={props.img} alt={props.name} />
			</div>
			<h2 className={card.name}>{props.name}</h2>
			<h3 className={card.continent}>{props.continent}</h3>
		</div>
	);
}

export default Card;

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
