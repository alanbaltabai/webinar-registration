import { FormEvent } from 'react';

export default function Form() {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log('Qabildadim');
	}

	return (
		<article className='formSection wrapper' id='formSection'>
			<header>Запишись на вебинар!</header>
			<p>
				И получи бесплатный гайд “5 способов не стрессовать перед экзаменом” 💜
			</p>

			<form id='form' onSubmit={handleSubmit}>
				<fieldset form='form'>
					<label htmlFor='name'>Имя</label>
					<input type='text' name='' id='name' spellCheck='false' />

					<label htmlFor='name'>Электронная почта</label>
					<input type='email' name='' id='name' />

					<button>Зарегистрироваться</button>
				</fieldset>
			</form>
		</article>
	);
}
