import { useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Main } from '../components/Main';
import Toggler from '../components/Toggler';

import { enableDarkMode, disableDarkMode } from '../utils';

function First() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('darkMode') || 'disabled'
	);

	const body = useRef(document.body);

	function toggle(): void {
		setDarkMode((prev) => (prev === 'enabled' ? 'disabled' : 'enabled'));
	}

	useEffect(
		() =>
			darkMode === 'enabled' ? enableDarkMode(body) : disableDarkMode(body),
		[darkMode]
	);

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
