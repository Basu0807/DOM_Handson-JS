// question-1
let element1 = document.getElementById("text")
console.log(element1);

// question-2
let element2= document.getElementsByTagName("h1")
console.log(element2);

// question-3
let element3 = document.getElementsByClassName("box")
console.log(element3);

// question-4
let newheading = element2[2].innerHTML=  ("Hello World")
console.log(element2[2])

// question-5
 function newtext(){
    let newword = document.getElementById("replacetext")
    newword.innerHTML ="Welcome to Elevation academy"
    
    
    }
    console.log(replacetext)

    // question-6

    let newstyle =element2[3].style.color = ("red")
    let newattribute = element2[3].setAttribute("id", "heading")
    console.log( element2[3])

    // question-7
    let count =true
    let container=document.querySelector(".container");
     function direction(){
      if(count){
      container.style.display="flex"
      count=false;
      }

      else{
         container.style.display="block"
         count=true;
      }
        

   }
   // question-9
   
function getTime(){
   let date = new Date();
   let HH=date.getHours()
   let MM=date.getMinutes()
   let SS=date.getSeconds()
   if(HH>12)
   HH-=12
   if(HH<10)
   HH="0"+HH
   if(MM<10)
   MM="0"+MM
   if(SS<10)
   SS="0"+SS
   document.getElementById("HH").innerText=HH
   document.getElementById("MM").innerText=MM
   document.getElementById("SS").innerText=SS
   setTimeout(getTime,1000)

}
   getTime();
