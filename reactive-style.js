class ReactiveStyle {
    constructor(element) {
        this.element = element;
        this.classes = new Set();
        this.styles = {};
    }

    // Метод для добавления класса
    addClass(className) {
        this.classes.add(className);
        this.update();
    }

    // Метод для удаления класса
    removeClass(className) {
        this.classes.delete(className);
        this.update();
    }

    // Метод для установки стиля
    setStyle(property, value) {
        this.styles[property] = value;
        this.update();
    }

    // Метод для удаления стиля
    removeStyle(property) {
        delete this.styles[property];
        this.update();
    }

    // Метод для обновления элемента с помощью текущих стилей и классов
    update() {
        this.element.className = Array.from(this.classes).join(' ');
        Object.keys(this.styles).forEach(property => {
            this.element.style[property] = this.styles[property];
        });
    }

    // Метод для очистки всех классов и стилей
    reset() {
        this.classes.clear();
        this.styles = {};

        // Удаление всех инлайновых стилей из элемента
        Array.from(this.element.style).forEach(property => {
            this.element.style.removeProperty(property);
        });

        this.update(); // Обновляем элемент, чтобы отобразить изменения
    }
}