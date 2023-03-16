import haqnazar from '../assets/haqnazar.jpg';
import haqnazarLarge from '../assets/haqnazar-large.jpg';
import longTrail from '../assets/long-trail.svg';

export default function Author() {
	return (
		<article className='about wrapper'>
			<img
				className='smallImage'
				src={haqnazar}
				alt='Ведущий вебинара смотрит задумчиво в сторону с мыслями о своих учениках'
				loading='lazy'
			/>
			<img
				src={haqnazarLarge}
				alt='Ведущий вебинара смотрит задумчиво в сторону с мыслями о своих учениках'
				loading='lazy'
			/>
			<div>
				<section>
					<header>О ВЕДУЩЕМ</header>
					<p>
						"Меня зовут Нурдаулет Хакназар, и уже 3-й год я работаю частным
						репетитором и преподавателем учеников младших классов. <br /> Только
						за прошлый год 4 ученика поступили в БИЛ, в НИШ, и в РФМШ по моей
						методике, а в этом году с вами их будет ещё больше!"
					</p>
				</section>

				<img src={longTrail} alt='' />
			</div>
		</article>
	);
}
