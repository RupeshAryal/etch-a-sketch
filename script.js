const square = document.querySelector('.squares');
const toggleGrid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const color = document.querySelector('.color');
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
  div.addEventListener("mouseover", ()=>{
      div.style.backgroundColor = 'black';

  });
  })

color.addEventListener('onclick', ()=>{
  eraser.removeEventListener('click', false);
  
  innerdivs.forEach((div)=>{
    //div.removeEventListener('mouseover',()=>{

    //})
    div.addEventListener("mouseover", ()=>{
        div.style.backgroundColor = 'black';
    });
    })
})


toggleGrid.addEventListener('click', ()=>{
  if (toggleGrid.active = true) {
    innerdivs.forEach((div)=>{
      div.style.outline = '1px solid';
    
    }) 
  } 
  })

clear.addEventListener('click', ()=>{
  innerdivs.forEach((div)=>{
    div.style.backgroundColor = 'white';
  })
})

eraser.addEventListener('click', ()=>{
  innerdivs.forEach((div)=>{
    if (eraser.active = true) {
      div.addEventListener("mouseover", ()=>{
        div.style.backgroundColor = 'white';
    });
    }
    })
})




