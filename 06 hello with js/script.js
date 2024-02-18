const btnelem = document.querySelector('button');
const spanelem = document.querySelector('span');

btnelem.addEventListener('click' , ()=>{
   const yourname = prompt('please enter your name : ')
   spanelem.textContent = yourname;
});