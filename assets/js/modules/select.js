const getTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ?? 'Не выбрано'
    
    const items = data.map(item => {
      let cls = ''
      if (item.id === selectedId) {
        text = item.value
        cls = 'select__item--selected'
      }
        return `
        <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `
    });
    
    return `
        <header class="select__header" data-type="input">
            <div class="select__current select__current--light" data-type="value">
                ${text}
            </div>

            <div class="select__icon" data-type="arrow">
                <svg class="select__icon-pic icon icon--arrow" data-type="arrow">
                    <use xlink:href="public/images/icons/sprite.svg#icon-arrow"></use>
                </svg>
            </div>                                                        
        </header>

        <div class="select__body">
            <ul class="select__list">
                ${items.join('')}
            </ul>
        </div>
    `
}

export class Select {
    
    constructor(selector, options) {
      this.$el = document.querySelector(selector)
      this.options = options
      this.selectedId = options.selectedId
  
      this.#render()
      this.#setup()
    }
  
    #render() {
      const {placeholder, data} = this.options
      this.$el.classList.add('select')
      this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
    }
  
    #setup() {
      this.clickHandler = this.clickHandler.bind(this)
      this.$el.addEventListener('click', this.clickHandler)
      this.$value = this.$el.querySelector('[data-type="value"]')
    }
  
    clickHandler(event) {
      const {type} = event.target.dataset
  
      if (type === 'input' || type === 'value' || type === 'arrow') {
        this.toggle()
      }  else if (type === 'item') {
        const id = event.target.dataset.id
        this.select(id)
      } else if (type === 'backdrop') {
        this.close()
      }
    }
  
    get isOpen() {
      return this.$el.classList.contains('select--open')
    }
  
    get current() {
      return this.options.data.find(item => item.id === this.selectedId)
    }
  
    select(id) {
      this.selectedId = id
      this.$value.textContent = this.current.value
  
      this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
        el.classList.remove('select__item--selected')
      })
      this.$el.querySelector(`[data-id="${id}"]`).classList.add('select__item--selected')
  
      this.options.onSelect ? this.options.onSelect(this.current) : null
  
      this.close()
    }
  
    toggle() {
      this.isOpen ? this.close() : this.open()
    }
  
    open() {
      this.$el.classList.add('select--open')
    }
  
    close() {
      this.$el.classList.remove('select--open')
    }
  
    destroy() {
      this.$el.removeEventListener('click', this.clickHandler)
      this.$el.innerHTML = ''
    }
}
