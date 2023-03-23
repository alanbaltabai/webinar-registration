import { RefObject } from 'react';
import mainPic from '../assets/mainPic.svg';

interface CTAProps {
	formRef: RefObject<HTMLElement>;
}

export default function CTA(props: CTAProps) {
	function smoothScroll() {
		if (props.formRef.current) {
			props.formRef.current.scrollIntoView({
				behavior: 'smooth',
			});
		}
	}

	return (
		<article className='cta wrapper'>
			<section>
				<header>ПОСТУПИ В ШКОЛУ МЕЧТЫ!</header>
				<p>
					КТЛ и РФМШ являются одними из самых топовых школ в Казахстане. <br />Я
					составил 8 инструментов которые помогут тебе поступить в эти школы и
					расскажу о них тебе на этом вебинаре, бесплатно! 🫰
				</p>
				<button onClick={smoothScroll}>Зарегистрироваться</button>
			</section>

			<img
				src={mainPic}
				alt='Учебное помещение с полками книг и со столами со стульями заготовленные для семинара'
			/>
		</article>
	);
}
