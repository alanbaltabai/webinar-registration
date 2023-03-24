import { FormEvent, forwardRef } from 'react';

import Input from '../components/form-components/Input';

// first type argument is a ref type
export default forwardRef<HTMLElement>(function Form(props, ref) {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
	}

	return (
		<article className='formSection wrapper' id='formSection' ref={ref}>
			<header>Запишись на вебинар!</header>
			<p>
				И получи бесплатный гайд “5 способов не стрессовать перед экзаменом” 💜
			</p>

			<form id='form' onSubmit={handleSubmit}>
				<fieldset form='form'>
					<label htmlFor='name'>Имя</label>
					<Input type='text' id='name' spellCheck='false'></Input>

					<label htmlFor='email'>Электронная почта</label>
					<Input type='email' id='email'></Input>

					<button>Зарегистрироваться</button>
				</fieldset>
			</form>
		</article>
	);
});
