export default function() {
    let accordionHeader = document.querySelectorAll('.accordion__header');

    accordionHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    })


    function selectToggle() {
        if (this.parentElement.classList.contains('accordion--opened')) {
            this.parentElement.classList.remove('accordion--opened');
        } else {
            this.parentElement.classList.add('accordion--opened');
        }
    }
}