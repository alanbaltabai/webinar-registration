import { InputProps } from '../../interfaces';

function Input(props: InputProps) {
	switch (props.type) {
		case 'text':
			return (
				<input
					type='text'
					id='name'
					name='username'
					spellCheck='false'
					// required
					autoComplete='off'
				/>
			);

		case 'email':
			return (
				<input
					type='email'
					id='email'
					name='email'
					required
					title='Введи существующую почту'
					autoComplete='off'
					pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}'
				/>
			);

		default:
			return <input type='text' />;
	}
}

export { Input };
