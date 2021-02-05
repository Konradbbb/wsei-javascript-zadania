// Zadanie 1

const el = document.createElement("div");
el.innerText = "To jest nowy element";
document.body.appendChild(el);



// Zadanie 2

const favFruits = ['ogórek', 'liczi', 'mango', 'banan', 'borówki', 'pomarańcza', 'awokado'];
const ul = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
});
document.body.appendChild(ul);



// Zadanie 3

document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});



// Zadanie 4

const button = document.createElement('button');
button.innerText = 'Click to remove';
button.addEventListener('click', (e) => {
    e.target.remove();
});

document.body.appendChild(button);



// Zadanie 5

const rand = Math.floor(Math.random() * 20);
for (let i = 0; i < rand; i++) {
    const randDiv = document.createElement('div');
    randDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randDiv);
}



// Zadanie 6

const object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span' };
function htmlFromObj(obj, parent = document.body) {
    Object.getOwnPropertyNames(obj).forEach(id => {
        if (typeof (obj[id]) !== 'string') {
            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            htmlFromObj(obj[id], innerParent);
            return;
        }
        const elTag = id.replace(/[0-9]/g, '');
        const newEl = document.createElement(elTag);
        newEl.innerText = obj[id];
        newEl.id = id;
        parent.appendChild(newEl);
    })
}

htmlFromObj(object);



// Zadanie 7

const favFruits = ['ogórek', 'liczi', 'mango', 'banan', 'borówki', 'pomarańcza', 'awokado'];
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul1.appendChild(li);
});

const lists = [ul1, ul2];
const buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {
    lists.forEach((ul, i) => {
        if (ul.childElementCount <= 1) {
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

lists.forEach((ul, i) => {
    buttons[i].innerText = 'MOVE';
    buttons[i].addEventListener('click', () => {
        const listItems = ul.querySelectorAll('li');
        const childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            ul2.insertBefore(childToTransfer, buttons[1]);
        } else {
            ul1.insertBefore(childToTransfer, buttons[0]);
        }
        checkButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

checkButtonDisabled();
