import Author from './Author';
import CTA from './CTA';
import Details from './Details';
import { ForwardedForm } from './Form';

import { MainProps } from '../interfaces';

function Main({ formRef }: MainProps) {
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
