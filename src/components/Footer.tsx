import instaIcon from '../assets/instagram-icon.svg';
import telegramIcon from '../assets/telegram-icon.svg';
import whIcon from '../assets/whatsapp-icon.svg';
import zoomIcon from '../assets/zoom-icon.svg';
import { FooterProps } from '../interfaces';

function Footer(props: FooterProps) {
	return (
		<footer
			className={`wrapper ${props.pathname === '/thankyou' && 'ty-footer'}`}
		>
			<a href='#wp'>
				<img
					src={whIcon}
					alt='ссылка на WhatsApp чат'
					loading='lazy'
					decoding='async'
				/>
			</a>
			<a href='#ins'>
				<img
					src={instaIcon}
					alt='ссылка на Instagram страницу'
					loading='lazy'
					decoding='async'
				/>
			</a>
			<a href='#tlg'>
				<img
					src={telegramIcon}
					alt='ссылка на Telegram группу'
					loading='lazy'
					decoding='async'
				/>
			</a>
			<a href='#zoom'>
				<img
					src={zoomIcon}
					alt='ссылка на Zoom'
					loading='lazy'
					decoding='async'
				/>
			</a>
		</footer>
	);
}

export { Footer };
