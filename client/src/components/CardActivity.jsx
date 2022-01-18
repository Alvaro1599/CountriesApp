import React from 'react';
import CardStyle from '../style/CardActivity.module.css';
function CardActivity(props) {
	return (
		<div className={CardStyle.container}>
			<label className={CardStyle.name}>{props.name}</label>
			<div className={CardStyle.information}>
				<p>
					<label>Difficulty:</label> {props.difficulty}
				</p>
				<p>
					<label>Season:</label> {props.season}
				</p>
				<p>
					<label>Duration:</label> {props.duration}
				</p>
			</div>
		</div>
	);
}
export default CardActivity;
