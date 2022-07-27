    //Create a function that increases the size of "figure" on click
    var lollipop = document.getElementById('figure');
    var shadow = document.getElementById('figure-shadow');
    var text  = document.getElementById('text');
    function myFunction(){
      lollipop.style.width = '150px'
      lollipop.style.height ='150px'
      lollipop.style.transitionDuration = '2s'
      lollipop.appendChild(text);
      text.style.visibility = "visible"
      text.style.transition 
      //for the shadow

      shadow.style.width = '100px'
      shadow.style.height ='100px'
      shadow.style.transitionDuration = '2s'

      //for the stick
      var stick = document.getElementById('stick');
      stick.style.display = "block"
      stick.style.transition = '0.3s'
      //stick.style.transitionDelay = '1s'
      stick.style.opacity = '0.9';
        lollipop.addEventListener('click', function(){

    var randomColor = [];
    randomColor[0] = 'red';
    randomColor[1] = 'yellow';
    randomColor[2] = 'purple';
    randomColor[3] = 'indigo';
    randomColor[4] = 'hotpink';
    randomColor[5] = 'magenta';
    randomColor[6] = 'darkbrown';
    randomColor[7] = 'black';
    randomColor[8] = 'blue';
    randomColor[9] = 'green';
    randomColor[10] = 'cadetblue'
    randomColor[11] = 'orange';
    var returnColor = Math.floor(Math.random()*randomColor.length);
            lollipop.style.backgroundColor = randomColor[returnColor];
            lollipop.style.transitionDuration = '0.5s'
       })
      }
      function change(){
        var randomColor = [];
    randomColor[0] = 'red';
    randomColor[1] = 'yellow';
    randomColor[2] = 'purple';
    randomColor[3] = 'indigo';
    randomColor[4] = 'hotpink';
    randomColor[5] = 'magenta';
    randomColor[6] = 'darkbrown';
    randomColor[7] = 'black';
    randomColor[8] = 'blue';
    randomColor[9] = 'green';
    randomColor[10] = 'orange';
    randomColor[11] = 'cadetblue';
    var returnColor = Math.floor(Math.random()*randomColor.length);
        lollipop.style.backgroundColor = randomColor[returnColor];
      }