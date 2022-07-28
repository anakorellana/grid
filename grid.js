let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells


  function createGrid(){
            for (let i=1; i<=gridSize; i++){
                var div = document.createElement("div");
                div.id = 'n' + i;
                div.innerText = i;
                document.getElementById("target").appendChild(div);
            }
        }

let timer = null;
// let position1 = 0;

function move() {
  timer = setTimeout(() => {
    if (position > 100) return;
    toggle(position);
    toggle(position -1);
    position += 1; 
    move();
    // if(position1 > 0)
    //   stop(position1)
    //   position1 += 1;
      

    }, 100);
            
}
             
 function toggle(position){
            if (position < 1) return;            
            const name = 'n' + position;            
            const element = document.getElementById(name);
            element.classList.toggle('on');

}
