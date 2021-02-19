// функция которая принимает дату и форматирует ее.
function getFormattedDate(date) {
	let dd = date.getDate();
  	if (dd < 10) dd = '0' + dd;

	let mm = date.getMonth() + 1;
	if (mm < 10) mm = '0' + mm;

	let yy = date.getFullYear();
	if (yy < 10) yy = '0' + yy;

	let hh = date.getHours();
	if (hh < 10) hh = '0' + hh;

	let min = date.getMinutes();
	if (min < 10) min = '0' + min;

// отображаем название дня с учетом даты.
	let day = date.getDay();
// создаем массив с именем для названий дней
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	day = days[day];

	return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + min + ' ' + day;
}

const date0= new Date(1993, 11, 1);
const date1= new Date(1998, 0, -33);
const date2= new Date('42 03:24:00');
console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday
