const elForm = document.querySelector('#form');
const elInput = elForm.querySelector('#input');
const elBtn = elForm.querySelector('#btn');
const elList = document.querySelector('#list');

elForm.addEventListener('submit', function(e){
    e.preventDefault();

    
    
    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    newLi.setAttribute('class', 'menu__link');
    
    let newBtn = document.createElement('button');
    newBtn.textContent = 'x';


    let newImg = document.createElement('img');
    newImg.textContent = '';
    newImg.setAttribute('src', 'https://picsum.photos/100');
    
    input.value = '';
    
    newLi.appendChild(newImg);

    newLi.appendChild(newBtn);

    list.appendChild(newLi);

})