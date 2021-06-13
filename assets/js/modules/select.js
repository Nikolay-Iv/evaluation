export default function() {
    let selectHeaedr = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeaedr.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        if (this.parentElement.classList.contains('select--open')) {
            this.parentElement.classList.remove('select--open');
        } else {
            selectHeaedr.forEach(item => item.parentElement.classList.remove('select--open'));
            this.parentElement.classList.add('select--open');
        }
    }

    function selectChoose() {
        let text = this.innerText;
        let select = this.closest('.select');
        let currentText = select.querySelector('.select__current');

        currentText.innerText = text;
        currentText.classList.remove('select__current--light');
        select.classList.remove('select--open');
    }
}
