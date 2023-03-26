import { useEffect, useRef, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Toggler from './components/Toggler';

export default function App() {
	const body = useRef(document.body);
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('darkMode') || 'disabled'
	);

	function enableDarkModeWithTransition(): void {
		localStorage.setItem('darkMode', 'enabled');

		body.current.classList.add('dark');
		// body.current.style.transition = '0.2s';
	}

	function disableDarkModeWithTransition(): void {
		localStorage.setItem('darkMode', 'disabled');

		body.current.classList.remove('dark');
		// body.current.style.transition = '0.2s';
	}

	function toggle(): void {
		setDarkMode((prev) => (prev === 'enabled' ? 'disabled' : 'enabled'));
	}

	useEffect(() => {
		if (darkMode === 'enabled') {
			enableDarkModeWithTransition();
		} else {
			disableDarkModeWithTransition();
		}
	}, [darkMode]);

	return (
		<>
			<Toggler toggle={toggle} />
			<Header />
			<Main />
			<Footer />
		</>
	);
}
