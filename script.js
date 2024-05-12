 let boxes=document.querySelectorAll(".box");
 console.log(boxes);

 let turnO=true;
 let msgshow=document.querySelector("#msg");
 let msgcontainer=document.querySelector(".msg-container");

 let patterns=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
 ]

 const reset=()=>{
   for(box of boxes)
          {
            box.disabled=false;
            box.innerText="";
          }
          msgcontainer.classList.add("hide");
   
 };
const showwinner=(winner)=>{
msgshow.innerText="Winner is   "+ winner;
msgcontainer.classList.remove("hide");
};
 let checkWinner=()=>{
   for(let pattern of patterns)   {
      console.log("pattern");

     let pos1value= boxes[pattern[0]].innerText;
     let pos2value= boxes[pattern[1]].innerText;
     let pos3value= boxes[pattern[2]].innerText;

if(pos1value!=""&&pos2value!=""&&pos3value!=""){
     if(pos1value===pos2value&&pos2value===pos3value){
          console.log("winner is" +pos1value);
          for(box of boxes)
          {
            box.disabled=true;
          }
          showwinner(pos1value);

   }
}
}
};

 boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
      if(turnO){
      box.innerText="O";
      box.disabled=true;
      turnO=false;
      
   }else{
      box.innerText="X";
      box.disabled=true;
      turnO=true;
   }
   checkWinner();

   });
 });

let newgame=document.querySelector("#new-button");
let resetgame=document.querySelector("#reset-button");
newgame.addEventListener("click",reset);
resetgame.addEventListener("click",reset);