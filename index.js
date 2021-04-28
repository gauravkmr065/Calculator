
const buttons = document.querySelectorAll('button');
let screen = document.querySelector('#input');
let screenValue='';

for(b of buttons){
    b.addEventListener('click',(ep)=>{
        butn =ep.target.innerText;
        // console.log(butn);
        if(butn=='x'){
           butn = '*';
           screenValue +=butn;
          screen.value = screenValue;
        }else if(butn=='c'){
            screenValue ="";
            screen.value=screenValue;
        } else if(butn=='=') {
           screen.value= eval(screenValue);
        } else{
         screenValue +=butn;
          screen.value = screenValue;
        }
      ep.preventDefault();
    })
}


        