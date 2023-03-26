import instaIcon from '../assets/instagram-icon.svg';
import telegramIcon from '../assets/telegram-icon.svg';
import whIcon from '../assets/whatsapp-icon.svg';
import zoomIcon from '../assets/zoom-icon.svg';

export default function Footer() {
	return (
		<footer className='wrapper'>
			<a href='#'>
				<img
					src={whIcon}
					alt='ссылка на WhatsApp чат'
					loading='lazy'
					decoding='async'
				/>
			</a>
			<a href='#'>
				<img
					src={instaIcon}
					alt='ссылка на Instagram страницу'
					loading='lazy'
					decoding='async'
				/>
			</a>
			<a href='#'>
				<img
					src={telegramIcon}
					alt='ссылка на Telegram группу'
					loading='lazy'
					decoding='async'
				/>
			</a>
			<a href='#'>
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
