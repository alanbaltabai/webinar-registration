import { useRef } from 'react';
import Author from './Author';
import CTA from './CTA';
import Details from './Details';
import { ForwardedForm } from './Form';

function Main() {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<main>
			<CTA formRef={formRef} />
			<Details />
			<Author />
			<ForwardedForm ref={formRef} />
		</main>
	);
}

export { Main };
