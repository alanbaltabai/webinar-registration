interface FooterProps {
	pathname: string;
}

interface TogglerProps {
	toggle(): void;
}

interface InputProps {
	type: string;
	id?: string;
	spellCheck?: boolean | 'true' | 'false';
}

interface CTAProps {
	formRef: React.RefObject<HTMLElement>;
}

export type { TogglerProps, FooterProps, InputProps, CTAProps };
