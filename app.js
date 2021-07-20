const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const prod = form.elements.product;
    const q = form.elements.qty;
    const li = document.createElement('li');
    li.innerHTML = ` ${q.value} ${prod.value} `;
    document.querySelector('#list').appendChild(li);
    prod.value = '';
    q.value = '';
})
