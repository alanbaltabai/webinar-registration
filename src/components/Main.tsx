import { useRef } from 'react';

import Author from './Author';
import CTA from './CTA';
import Details from './Details';
import Form from './Form';

export default function Main() {
	const formRef = useRef<HTMLElement | null>(null);

	return (
		<main>
			<CTA formRef={formRef} />
			<Details />
			<Author />
			<Form ref={formRef} />
		</main>
	);
}
