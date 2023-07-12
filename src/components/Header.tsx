function Header() {
	let date = new Date(2023, 6, 11, 18);
	const currentDate = new Date();

	if (date.getTime() < currentDate.getTime()) {
		date = currentDate;
		date.setDate(date.getDate() + 3);
	}

	let monthOfYearString;
	switch (date.getMonth()) {
		case 0:
			monthOfYearString = 'января';
			break;

		case 1:
			monthOfYearString = 'февраля';
			break;

		case 2:
			monthOfYearString = 'марта';
			break;

		case 3:
			monthOfYearString = 'апреля';
			break;

		case 4:
			monthOfYearString = 'мая';
			break;

		case 5:
			monthOfYearString = 'июня';
			break;

		case 6:
			monthOfYearString = 'июля';
			break;

		case 7:
			monthOfYearString = 'августа';
			break;

		case 8:
			monthOfYearString = 'сентября';
			break;

		case 9:
			monthOfYearString = 'октября';
			break;

		case 10:
			monthOfYearString = 'ноября';
			break;

		default:
			monthOfYearString = 'декабря';
			break;
	}

	return (
		<header className='wrapper'>
			<p>
				{date.getDate()} {monthOfYearString} в 18:00 по алматинскому времени
				вебинар ...
			</p>
			<h1>8 Инструментов Которые Помогут Тебе Попасть в КТЛ или в РФМШ </h1>
		</header>
	);
}

export { Header };
