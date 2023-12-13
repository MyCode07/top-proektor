document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_show-all') && targetEl.closest('.catalog-tags')) {
        const tags = document.querySelector('.tags');
        tags.classList.toggle('_active');

        if (tags.classList.contains('_active')) targetEl.querySelector('span').textContent = 'Скрыть';
        else targetEl.querySelector('span').textContent = 'Показать все';

        targetEl.classList.toggle('_active');
    }

    if (targetEl.classList.contains('sort') && targetEl.closest('.sidebar')) {
        const cats = document.querySelector('.sidebar-categories');
        cats.classList.toggle('_active');
        targetEl.classList.toggle('_active');
    }

    if (targetEl.closest('.sidebar-categories') && targetEl.hasAttribute('data-cat') && !targetEl.classList.contains('_active')) {
        e.preventDefault();
        toggleElem(targetEl, document.querySelectorAll('[data-cat]'))
    }

    if (targetEl.closest('.tags') && targetEl.hasAttribute('data-tag') && !targetEl.classList.contains('_active')) {
        e.preventDefault();
        toggleElem(targetEl, document.querySelectorAll('[data-tag]'))
    }

    if (targetEl.classList.contains('slide-tabs__tab') && !targetEl.classList.contains('_active')) {
        e.preventDefault();

        const tabId = targetEl.dataset.tab;
        const slideSection = targetEl.closest('section.slide');
        const allTabs = slideSection.querySelectorAll('.slide-tabs__tab');
        const allTabsContnet = slideSection.querySelectorAll('.slide-item');

        allTabsContnet.forEach(contnet => {
            if (contnet.dataset.tabContent == tabId)
                contnet.classList.add('_active')
            else
                contnet.classList.remove('_active')
        })

        allTabs.forEach(tab => {
            if (tab.dataset.tab == tabId)
                tab.classList.add('_active')
            else
                tab.classList.remove('_active')
        })
    }

    const personVideo = document.querySelector('._person');
    if (personVideo) {
        if (targetEl.closest('._person') && !targetEl.closest('._person._active')) {
            e.preventDefault();
            targetEl.classList.add('_active');
        } else {
            personVideo.classList.remove('_active');
        }
    }

    if (targetEl.hasAttribute('data-open-popup') && targetEl.hasAttribute('data-id') && targetEl.dataset.id == 'request') {
        getProducTInfo(targetEl.closest('[data-product]'))
    }
})

function toggleElem(elem, selector) {
    selector.forEach(item => {
        item.classList.remove('_active')
    })
    elem.classList.add('_active');
}


const requestProductName = document.querySelector('#request .basket-card__name');
const requestProductImage = document.querySelector('#request .basket-card__img img');
const requestProductPrice = document.querySelector('#request .basket-card__price span');
const formProductNameField = document.querySelector('#request input[name="product_name"]');
const formProductPriceField = document.querySelector('#request input[name="product_price"]');
const formPaymnetField = document.querySelector('#request input[name="billing"]');

function getProducTInfo(product) {
    if (!product) return;

    const checkedpayment = [...document.querySelectorAll('#request input[name="payment"]')].filter(item => { return item.checked });
    const name = product.querySelector('[data-product-name]').textContent
    const image = product.querySelector('[data-product-img]').src
    let price = product.querySelector('[data-product-price]').textContent

    price = price.replace(/[р₽.]/gi, '');

    requestProductName.textContent = name;
    requestProductPrice.textContent = price;
    requestProductImage.src = image;

    console.log(checkedpayment);

    formProductNameField.value = name
    formProductPriceField.value = price + ' ₽';
    formPaymnetField.value = checkedpayment[0].value
}


const paymentTypeCheckboxes = document.querySelectorAll('#request input[name="payment"]');
if (paymentTypeCheckboxes.length) {
    paymentTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('input', () => {
            if (checkbox.checked) formPaymnetField.value = checkbox.value
        })
    })
}