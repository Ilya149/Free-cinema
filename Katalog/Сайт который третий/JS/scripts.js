const starList = document.querySelectorAll('.star');
const starArray = Array.prototype.slice.call(starList);

starArray.forEach( item =>
    item.addEventListener('click', () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
);