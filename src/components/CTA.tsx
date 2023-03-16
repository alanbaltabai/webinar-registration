import mainPic from '../assets/mainPic.svg';

export default function CTA() {
	function smoothScroll() {
		console.log('g');

		document.querySelector('#formSection')!.scrollIntoView({
			behavior: 'smooth',
		});
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
				<a /* href='#formSection' */ onClick={smoothScroll}>
					Зарегистрироваться
				</a>
			</section>

			<img
				src={mainPic}
				alt='Учебное помещение с полками книг и со столами со стульями заготовленные для семинара'
			/>
		</article>
	);
}
