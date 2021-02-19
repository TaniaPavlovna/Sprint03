function hero() {
    document.getElementsByTagName('li').innerHTML += '<br>'; //для каждого li добавляем абзац
    let li = document.querySelectorAll('li');
    li.forEach(el=>el.classList == '' && el.classList.add('unknown')); //перебирает каждый клас, и если он отсуствует добавляет клас unknown
    li.forEach(el=>!el.hasAttribute('data-element') && el.setAttribute('data-element', 'none')); //проверяет каждое значение на наличие data-element и если его нету устанавливает значение none

    for (let i = 0; i < li.length; i++) {
        li[i].innerHTML += '<br>'; //делает отступи между li
        if (li[i].dataset.element.includes('air')) { //определяем, содержит ли массив элемент air, если есть то
            li[i].appendChild(document.createElement('div')); //создаем новый div и добавляем его в конец списка дочерних элементов
            for (let j = 0; j < document.querySelectorAll('div').length; j++){
                if (document.querySelectorAll('div')[j].classList == ''){
                    document.querySelectorAll('div')[j].classList.add('elem', 'air'); //добавляем к каждому кругу два имени класса: elem и air(соответствующий атрибут элемента данных)
                }
            }
        }
        if (li[i].dataset.element.includes('water')) { //определяем, содержит ли массив элемент water, если есть то
            li[i].appendChild(document.createElement('div')); //создаем новый div и добавляем его в конец списка дочерних элементов
            for (let j = 0; j < document.querySelectorAll('div').length; j++){
                if (document.querySelectorAll('div')[j].classList == ''){
                    document.querySelectorAll('div')[j].classList.add('elem', 'water');
                }
            }
        }
        if (li[i].dataset.element.includes('earth')) {
            li[i].appendChild(document.createElement('div'));
            for (let j = 0; j < document.querySelectorAll('div').length; j++){
                if (document.querySelectorAll('div')[j].classList == ''){
                    document.querySelectorAll('div')[j].classList.add('elem', 'earth');
                }
            }
        }
        if (li[i].dataset.element.includes('fire')) {
            li[i].appendChild(document.createElement('div'));
            for (let j = 0; j < document.querySelectorAll('div').length; j++){
                if (document.querySelectorAll('div')[j].classList == ''){
                    document.querySelectorAll('div')[j].classList.add('elem', 'fire');
                }
            }
        }
        if (li[i].dataset.element.includes('none')) {
            li[i].appendChild(document.createElement('div'));
            for (let j = 0; j < document.querySelectorAll('div').length; j++){
                if (document.querySelectorAll('div')[j].classList == ''){
                    document.querySelectorAll('div')[j].classList.add('elem', 'none');
                }
            }
            li[i].appendChild(document.createElement('div'));
            for (let j = 0; j < document.querySelectorAll('div').length; j++){
                if (document.querySelectorAll('div')[j].classList == ''){
                    document.querySelectorAll('div')[j].classList.add('line');
                   document.querySelectorAll('div')[j].style.left = '50px';
                   document.querySelectorAll('div')[j].style.top = '-20px';
                }
            }
        }

    }
}
hero();
