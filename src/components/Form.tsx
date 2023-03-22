import { FormEvent, forwardRef } from 'react';

// first type argument is a ref
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
					<input type='text' name='' id='name' spellCheck='false' />

					<label htmlFor='name'>Электронная почта</label>
					<input type='email' name='' id='name' />

					<button>Зарегистрироваться</button>
				</fieldset>
			</form>
		</article>
	);
});
