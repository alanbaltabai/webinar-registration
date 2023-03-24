interface InputProps {
	type: string;
	id?: string;
	spellCheck?: boolean | 'true' | 'false';
}

export default function Input(props: InputProps) {
	switch (props.type) {
		case 'text':
			return <input type='text' id='name' spellCheck='false' />;

		case 'email':
			return <input type='email' id='email' />;

		default:
			return <input type='text' />;
	}
}
