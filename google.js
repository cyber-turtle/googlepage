
   let box = document.querySelector('.box');
   let searchbutton = document.querySelector('.searchbutton');

searchbutton.onclick = function(){
let url = 'https://www.google.com/search?q='+box.value;
window.open(url,'_self');
}
