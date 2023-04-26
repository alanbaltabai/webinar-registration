import { forwardRef } from 'react';
import { Form } from 'react-router-dom';

import Input from '../components/form-components/Input';

// first type argument is a ref type
const ForwardedForm = forwardRef<HTMLElement>(function (props, ref) {
	return (
		<article className='formSection wrapper' id='formSection' ref={ref}>
			<header>Запишись на вебинар!</header>
			<p>
				И получи бесплатный гайд “5 способов не стрессовать перед экзаменом” 💜
			</p>

			<Form id='form' method='post'>
				<fieldset form='form'>
					<label htmlFor='name'>Имя</label>
					<Input type='text' id='name' spellCheck='false'></Input>

					<label htmlFor='email'>Электронная почта</label>
					<Input type='email' id='email'></Input>

					<button>Зарегистрироваться</button>
				</fieldset>
			</Form>
		</article>
	);
});

export { ForwardedForm };
