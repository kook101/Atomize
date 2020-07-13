

let selectDOM = document.getElementById('selectDOM');
let breakDOM = document.getElementById('breakDOM');
let perspective = document.getElementById('perspective');
let mapDOM = document.getElementById('slider');

//Button 1
//Grab DOM - select all DOM element 
//Background color: white to blue
selectDOM.onclick = function() {
  chrome.tabs.executeScript(
   {file:"button1.js"});
};

//Button 2
//Delete All CSS
//Background color: blue to white
breakDOM.onclick = function(){
    chrome.tabs.executeScript(
      {file:"button2.js"});

};

//Button 3
//Make elements 3D
perspective.onclick = function(){
  // chrome.tabs.executeScript(
  //   {file:"js/three.js"});
    
  chrome.tabs.executeScript(
      {file:"button3.js"});
    
}



//document.querySelectorAll('div').offsetWidth
//document.querySelectorAll('div').clientWidth
