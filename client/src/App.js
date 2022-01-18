import app from './style/App.module.css';
import { Link } from 'react-router-dom';
function App() {
	return (
		<div className={('App', app.err)}>
			<div className={app.container}>
				<div className={app.divLink}>
					<p className={app.text}>A simple app where you will found all countries</p>

					<Link className={app.link} to="/countries">
						Home
					</Link>
				</div>

				<div className={app.divImg}>
					<img
						className={app.img}
						src={
							'https://blush.design/api/download?shareUri=Q3TwfOoyBRJLyo51&c=Hair_0%7Ed5e1d5-0.11%7E150656-0.12%7Ed5e1d5_Skin_0%7Eef9e89-0.11%7E5e0606-0.12%7E8c72cb&w=800&h=800&fm=png'
						}
					/>
				</div>
			</div>
		</div>
	);
}
export default App;
