
//Delete All CSS
console.log(document.getElementsByTagName('style').length); 
for(let i=0; i<document.getElementsByTagName('style').length; i++){
   domStyle =  document.getElementsByTagName('style')[i];
   domStyle.innerHTML =''
};


//Background color: blue to white
console.log(document.querySelectorAll('*').length); 

for(let i=0; i<document.querySelectorAll('*').length; i++){
    let domdom = document.querySelectorAll('*')[i];
   //  domdom.style.background = 'rgba(0, 0, 255, 0.1)'
    domdom.style.position = 'absolute';
    domdom.style.zIndex ='-' + i ;
 
    };

    // domImg = document.getElementsByTagName('img');
    // domImg.style.width = '30%';
    // console.log(domImg);
  
