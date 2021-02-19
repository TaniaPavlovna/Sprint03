function unique(arr) { //функцыя которая убирает повторения
	let result = [];
	for (let str of arr) {
	  if (!result.includes(str)) {
		result.push(str);
	  }
	}
	return result;
  }
  function addWords(obj, newObj){ // функцыя добавляет строку со словами в свойство обьекта
  obj.words += ' ' + newObj; //обьединяем строки
  obj.words = obj.words.split(re); //делаем масив убирая пробелы
  obj.words = unique(obj.words); //вызов функцыя убрать повторения
  obj.words = obj.words.join(' '); //переводим снова в строку
  return obj.words
  }
  function removeWords(obj, rem){ //функцыя удаляет указанные слова у свойства обьекта
	rem = rem.split(re);
	obj.words = obj.words.split(re); //делаем масив убирая пробелы
	for (let i = 0; i < obj.words.length; ++i){ //перебераем елементы масива
	  for (let j = 0; j < rem.length; ++j){
		if (obj.words[i] == rem[j]) {
		  obj.words.splice(i,1);
		}
	  }
	}
	obj.words = obj.words.join(' '); //переводим снова в строку
	return obj.words
  }
  function changeWords(obj, oldWrds, newWrds){ //функцыя изменяет одно или несколько слов в свойстве обьекта
	oldWrds = oldWrds.split(re);
	newWrds = newWrds.split(re);
	obj.words = obj.words.split(re) ;//делаем масив убирая пробелы
	for (let i = 0; i < obj.words.length; ++i){ //перебераем елементы масива
	  for (let j = 0; j < oldWrds.length; ++j){
		if (obj.words[i] == oldWrds[j]) { //ищем совпадения
		  obj.words[i] = newWrds[i]; //заменяем на новый елемент
		}
	  }
	}
	obj.words = obj.words.join(' '); //переводим снова в строку
	return obj.words
  }

  //Тестирование
	const obj = {
		words: 'newspapers newspapers  books magazines'
	};
	let re = /\s* \s*/;;
	console.log(obj); // {words: "newspapers newspapers books magazines"}
	addWords(obj, 'radio newspapers');
	console.log(obj); // {words: "newspapers books magazines radio"}
	removeWords(obj, 'newspapers   radio');
	console.log(obj); // {words: "books magazines"}
	changeWords(obj, 'books radio  magazines', 'tv internet');
	console.log(obj); // {words: "tv internet"}
