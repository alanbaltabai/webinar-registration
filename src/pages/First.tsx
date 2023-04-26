import { useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Main } from '../components/Main';
import Toggler from '../components/Toggler';

import { enableDarkMode, disableDarkMode } from '../utils';

const formRef = useRef<HTMLFormElement>(null);

async function action() {
	if (formRef.current) {
		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				formRef.current,
				'YOUR_PUBLIC_KEY'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return null;
}

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
			<Main formRef={formRef} />
			<Footer />
		</>
	);
}

export { First, action };
