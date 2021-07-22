const h1 = document.querySelector('h1');
const input = document.querySelector('#nameinp');
const container = document.querySelector("#list");

input.addEventListener('input', e => {
    if (input.value) {
        h1.innerText = `Hello, ${input.value}`;
    }
    else {
        h1.innerText = "Enter Your Name";
    }
});

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const prod = form.elements.product;
    const q = form.elements.qty;
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = "Delete"
    li.innerHTML = ` ${q.value} ${prod.value}        `;
    li.appendChild(btn);
    container.appendChild(li);
    prod.value = '';
    q.value = '';
})

container.addEventListener('click', function (e) {
    e.target.nodeName === "BUTTON" && e.target.parentElement.remove();
});
