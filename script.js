const square = document.querySelector('.squares');
square.setAttribute('style', 'display:flex; flex-wrap: wrap;');
 


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {   
      const create = document.createElement('div');
      create.setAttribute('style', 'width:6.25%; height:6.25%;' );
      create.setAttribute('class', 'squareclass')
      square.appendChild(create);
    }    
   }
  
const innerdivs=document.querySelectorAll('.squareclass');

innerdivs.forEach((div)=>{
div.addEventListener("click", ()=>{
    div.style.backgroundColor = 'black';
});

})
console.log(innerdivs)





