import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postActivity } from '../redux/actions';

import { Link } from 'react-router-dom';
import Activity from '../style/AddActivity.module.css';
function AddActivity() {
	const dispatch = useDispatch();
	const countries = useSelector(
		(state) =>
			state.data.filterData
				? state.data.filterData.map((x) => {
						return { name: x.name, id: x.ID };
					})
				: []
	);
	const [ filter, setfilter ] = useState();
	const [ temp, settemp ] = useState([]);
	console.log(temp, 'temp');
	const [ form, setForm ] = useState({ season: 'Summer', difficulty: '10' });
	useEffect(
		() => {
			//rellenando filter con todos los paises
			setfilter(countries);
			//eliminando los paises que son seleccionados
			setfilter((x) => (x ? x.filter((y) => !temp.includes(y.id)) : []));
			console.log(temp.length, 'length');
			if (temp.length !== 0) {
				setForm({ ...form, countryId: temp.join(',') });
			}
		},
		[ setfilter, temp ]
	);
	function handleSubmit(evt) {
		evt.preventDefault();
	}

	function onClickFilter(evt) {
		handleChangeForm();
		settemp((data) => {
			console.log(data);
			return [ ...data, evt.target.className ];
		});
	}
	function onClickDelete(evt) {
		handleChangeForm();
		settemp(temp.filter((x) => x !== evt.target.id));
		console.log(evt.target.id, 'deleteeee');
	}
	console.log(temp, 'temp');
	function renderCountries() {
		return filter ? (
			filter.map((item) => {
				return (
					<a id={Activity.add} className={item.id} onClick={onClickFilter}>
						{item.name}
					</a>
				);
			})
		) : (
			<a id={Activity.add}>No have countries</a>
		);
	}
	console.log(filter, 'asdasd');

	function countriesSelected() {
		return temp.length == 0 ? (
			<a id={Activity.addnew}>No have countries</a>
		) : (
			temp.map((x) => {
				return (
					<div id={Activity.add} key={x} className={x}>
						<a key={x}>{countries.filter((item) => item.id === x)[0].name}</a>
						<button id={x} onClick={onClickDelete} className={Activity.eliminate}>
							x
						</button>
					</div>
				);
			})
		);
	}
	function submit(evt) {
		console.log(
			form.season,
			form.difficulty,
			form.countryId,
			form.name,
			form.duration,
			temp.length,
			'verificattionnnn'
		);
		if (
			form.season &&
			form.countryId &&
			(form.name || form.name === '') &&
			form.difficulty &&
			form.duration &&
			temp.length !== 0
		) {
			dispatch(postActivity(form));
		} else {
			alert('Complete all fields');
		}
	}
	console.log(form, 'form');
	function handleChangeForm(evt) {
		if (evt) {
			setForm({ ...form, [evt.target.id]: evt.target.value });
		}
	}
	return (
		<form className={Activity.containerForm} onSubmit={handleSubmit}>
			<div className={Activity.containerLabel}>
				<div className={Activity.divLabel}>
					<label>Activity name:</label>
					<input
						required
						id={'name'}
						className={Activity.input}
						onChange={handleChangeForm}
						type="text"
						placeholder="Activity name"
					/>
				</div>
				<div className={Activity.divLabel}>
					<label>Activity difficulty:</label>
					<input
						id={'difficulty'}
						className={Activity.range}
						type="range"
						min={1}
						max={5}
						onChange={handleChangeForm}
						placeholder="activity difficulty"
					/>
				</div>
				<div className={Activity.divLabel}>
					<label>Activity Duration (hrs):</label>
					<input
						required
						id="duration"
						className={Activity.input}
						type="number"
						maxLength={24}
						onChange={handleChangeForm}
						placeholder="activity duration"
					/>
				</div>
				<div className={Activity.divLabel}>
					<label>Activity season: </label>
					<select id={'season'} onChange={handleChangeForm} className={Activity.input}>
						<option disabled> you must select a season: </option>
						<option>Summer</option>
						<option>Fall</option>
						<option>Winter</option>
						<option>Spring</option>
					</select>
				</div>
			</div>
			<div className={Activity.containerCountries}>
				<div className={Activity.containerLabelCountries}>
					<label className={Activity.title}>Choose one o more countries: </label>
					<div className={Activity.containerSelect}>{renderCountries()}</div>
				</div>
				<div className={Activity.containerLabelCountries}>
					<label>Countries selected:</label>
					<div className={Activity.containerSelect}>{countriesSelected()}</div>
				</div>
			</div>

			<button type="submit" className={Activity.button} onClick={submit}>
				Create Activity
			</button>
			<Link to={'/countries'} className={Activity.button}>
				Back
			</Link>
		</form>
	);
}
export default AddActivity;
