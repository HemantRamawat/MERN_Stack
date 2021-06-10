let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
const dotButton = document.getElementById('.');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText)
        
        if(buttonText=='*'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue="";
            screen.value= screenValue;
            location.reload();
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        
       else if(buttonText=='<'){
           screenValue=screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
            // console.log(screen.value);
        }


            
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        
       
               
            
       
    })
}
