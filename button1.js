//Grab DOM - select all DOM element 
//Background color: white to blue
console.log(document.querySelectorAll('*').length); 

for(let i=0; i<document.querySelectorAll('*').length; i++){
    document.querySelectorAll('*')[i].style.background = 'rgba(0, 0, 255, 0.05)'
};
