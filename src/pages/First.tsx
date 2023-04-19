import { useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Toggler from '../components/Toggler';

function First() {
	const body = useRef(document.body);
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('darkMode') || 'disabled'
	);

	function enableDarkMode(): void {
		localStorage.setItem('darkMode', 'enabled');

		body.current.classList.add('dark');
	}

	function disableDarkMode(): void {
		localStorage.setItem('darkMode', 'disabled');

		body.current.classList.remove('dark');
	}

	function toggle(): void {
		setDarkMode((prev) => (prev === 'enabled' ? 'disabled' : 'enabled'));
	}

	useEffect(() => {
		if (darkMode === 'enabled') enableDarkMode();
		else disableDarkMode();
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

export { First };
