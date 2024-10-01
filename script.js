// Пример использования
const myElement = document.getElementById('myElement');
const reactiveStyle = new ReactiveStyle(myElement);

// Изменение классов и стилей
reactiveStyle.addClass('active');
reactiveStyle.setStyle('color', 'red');
reactiveStyle.setStyle('fontSize', '30px');

clearAll = () => {
    reactiveStyle.reset();
}
