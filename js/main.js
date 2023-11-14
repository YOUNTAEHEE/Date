const now = new Date();
const year = now.getFullYear();
const month = now.getMonth(); //월의 값이 아닌 순서가 표기
const monthName = [
	'January',
	'Feburuary',
	'March',
	'April',
	'May',
	'J',
	'J',
	'A',
	'S',
	'O',
	'N',
	'D',
];
const time = now.getTime();
console.log(monthName[month]);
const timeGerman = time - 1000 * 60 * 60 * 8;
const nowGerman = new Date(timeGerman);
console.log('한국시', now);
console.log('독일시', nowGerman);
