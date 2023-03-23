import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Toggler from './components/Toggler';

export default function App() {
	const body = document.body;
	const [isDark, setIsDark] = useState(false);

	function toggle(): void {
		setIsDark((prev) => !prev);
	}

	useEffect(() => {
		body.classList.toggle('dark');
	}, [isDark]);

	return (
		<>
			<Toggler toggle={toggle} />
			<Header />
			<Main />
			<Footer />
		</>
	);
}
