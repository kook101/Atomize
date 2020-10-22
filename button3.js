//Three part
// var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer({alpha:true});
//         renderer.setClearColor( 0xffffff, 0 );
//         renderer.setSize( window.innerWidth, window.innerHeight );
//         	document.body.appendChild( renderer.domElement );

// //Test Plane
// var geometry = new THREE.PlaneGeometry( 20, 20, 32 );
// var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
// var plane = new THREE.Mesh( geometry, material );
// scene.add( plane );

// camera.position.z = 50;
// // camera.position.y = 10;

// var animate = function () {
// 		requestAnimationFrame( animate );

//         //animating the code
// 		// plane.rotation.x = 0.5;
// 		plane.rotation.y = -0.3;

// 		renderer.render( scene, camera );
// 		};

// animate();
        
// var style = document.createElement('style');
// style.innerHTML  = '.ato{transform-origin: center; position: absolute; transfrom: rotateY(45deg);}';
// style.innerHTML  = '.ato-'


// document.head.appendChild(style);




for(let i=0; i<document.querySelectorAll('div').length; i++){

    var domArr = [];
    var domdomdom = document.querySelectorAll('div')[i];
    domdomdom.setAttribute('id', 'ato-'+i);


    var domStyle = document.getElementById('ato-'+i);
    

    

//outline
    //domStyle.style.border = 'solid 0.1px';
    // domStyle.style.width = '50%';
    // domStyle.style.transformOrigin = 'center';
    // domStyle.style.backgroundColor = 'rgb(255,255,255)';
    
//perspective and rotate should go together    
    domStyle.style.perspective = '10px';
        // domStyle.style.transform = 'rotateX(60deg)';
       
        var degR = 0;
        var id = setInterval(frame, 10);
        function frame () {
            if(degR == 100) {
                clearInterval(id);
            }else{
                degR ++;  
        
       }
       domStyle.style.transform = `rotateY(${degR}deg)`;
    }
       console.log(id);
       // domStyle.style.transform = 
        // domStyle.style.transform = 'rotateZ(-45deg)'
        // domStyle.style.position = 'relative';

        domArr.push(domdomdom);
        // console.log(domArr);
};