const square = document.querySelector('.squares');
const toggleGrid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const color = document.querySelector('.color');
const sixteen = document.querySelector('.sixteen');
const thiryTwo = document.querySelector('.thirty-two');
square.setAttribute('style', 'display:flex; flex-wrap: wrap;');
sixteen.checked = true;
let innerdivs;
createDivs(16);


sixteen.addEventListener('click', ()=>{
 
  innerdivs.forEach((div)=>{
  div.classList.remove('squaresquare')})
  square.innerHTML = '';
  if (thiryTwo.checked) {
    thiryTwo.checked = false;
  }
  //createDivs(16);
  console.log(innerdivs)
  });

thiryTwo.addEventListener('click', ()=>{
  innerdivs.forEach((div)=>{
    div.classList.remove('squaresquare')})
  square.innerHTML = '';

  if (sixteen.checked) {
    sixteen.checked = false;  
  }
  colors();

  //createDivs(32);
  console.log(innerdivs)
});


 

function createDivs(gridLength) {
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {   
      ;
      if (gridLength >16) {
        const create = document.createElement('div')
        create.setAttribute('style', 'height:3.125%; width:3.125%;');
        create.setAttribute('class', 'squareclass')
        square.appendChild(create);
      }
      else{
        const create = document.createElement('div')
        create.setAttribute('style', 'height:6.25%; width:6.25%;');
        create.setAttribute('class', 'squareclass')
        square.appendChild(create);
      }  
    }  
   
   }
   innerdivs = document.querySelectorAll('.squareclass')  
  }

  console.log(innerdivs)
   function changeColor(e) {
  if (eraser.classList.contains('active')) {
    e.target.style.backgroundColor = 'white';
    
  }
  else {e.target.style.backgroundColor = 'black';}
}

function colors()
 {
   innerdivs.forEach((div)=>{
  div.addEventListener('mouseover', changeColor, false);
})
  }

// innerdivs.forEach((div)=>{
//   div.addEventListener("mouseover", ()=>{
//     if (eraser.active == true) {
//       div.style.backgroundColor = 'white';
//     }
//     else if (color.active == true) {
//       div.backgroundColor = 'black';
//     }
//     else{
//       div.style.backgroundColor = 'black';
//     }    
//   });
//   })



toggleGrid.addEventListener('mouseover', ()=>{
  if (toggleGrid.active = true) {
    innerdivs.forEach((div)=>{
      div.style.outline = '1px solid';
    }) 
  } 
  })
  toggleGrid.addEventListener('mouseout', ()=>{
    if (toggleGrid.active = true) {
      innerdivs.forEach((div)=>{
        div.style.outline = '0px';
      }) 
    } 
    })

clear.addEventListener('click', ()=>{
  innerdivs.forEach((div)=>{
    div.style.backgroundColor = 'white';
  })
})

eraser.addEventListener('click', ()=>{
  eraser.classList.add('active');
  color.classList.remove('active');
  console.log(color.className);
  console.log(eraser.className);
    });


color.addEventListener('click', ()=>{
 color.classList.add('active');
 eraser.classList.remove('active');
 console.log(color.className);
 console.log(eraser.className);

    });



  





