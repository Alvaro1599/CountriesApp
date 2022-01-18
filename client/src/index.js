import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './pages/Countries';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import store from './redux/store';
import Information from './pages/Information';
import AddActivity from './pages/AddActivity';
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Nav />
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="*" element={<App />} />
					<Route path="/countries" element={<Countries />} />
					<Route path="countries/:id" element={<Information />} />
					<Route path="/addActivity" element={<AddActivity />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
