import { cleanup, render, screen } from '@testing-library/react';
import Information from './pages/Information';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import ShowCards from './components/showCards';
afterEach(cleanup);

test('render with redux', () => {
	const container = render(
		<Provider store={store}>
			<Information />
		</Provider>
	);
	console.log(container.container.innerHTML);
});

/* test('renders content', () => {
	const component = render(<Information />);
	console.log('component', component);
}); */
