import zoomIcon from '../assets/zoom-icon.svg';
import instaIcon from '../assets/instagram-icon.svg';
import whIcon from '../assets/whatsapp-icon.svg';
import telegramIcon from '../assets/telegram-icon.svg';

export default function Footer() {
	return (
		<footer className='wrapper'>
			<a href='#'>
				<img src={whIcon} alt='ссылка на WhatsApp чат' loading='lazy' />
			</a>
			<a href='#'>
				<img
					src={instaIcon}
					alt='ссылка на Instagram страницу'
					loading='lazy'
				/>
			</a>
			<a href='#'>
				<img
					src={telegramIcon}
					alt='ссылка на Telegram группу'
					loading='lazy'
				/>
			</a>
			<a href='#'>
				<img src={zoomIcon} alt='ссылка на Zoom' loading='lazy' />
			</a>
		</footer>
	);
}
