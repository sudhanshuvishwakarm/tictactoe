let inputs = document.querySelectorAll("#inputbox");
let output = document.getElementById('output');
let arr = Array.from(inputs);
let count = 0;

arr.forEach(function (input) {
   input.addEventListener('click', function () {
      if(input.value=='X' || input.value=='0'){
         alert('It is alerady occupied by '+ input.value);
         return;
      }
      if (count % 2 === 0) {
         input.value = "X";
         input.style.fontSize = "70px";
         input.style.color = "white";
         input.style.textAlign = "center";
         count++;
         console.log(count);
         xwins();
      }
      else {
         input.value = "0";
         input.style.color = "white";
         input.style.fontSize = "70px";
         input.style.textAlign = "center";
         count++;
         console.log(count);
         owins();
      }

      if (count === 9 ) {

         showwin("Match Draw! ")
         setInterval(() => {
            location.reload();
         }, 5000);
      }


   })

})

function xwins() {
   if (arr[0].value === 'X' && arr[1].value === 'X' && arr[2].value === 'X') {
      console.log("X wins"); showwin("X wins !");

   }
   else if (arr[0].value === 'X' && arr[3].value === 'X' && arr[6].value === 'X') {
      console.log("X wins"); showwin("X wins !");
   }
   else if (arr[2].value === 'X' && arr[5].value === 'X' && arr[8].value === 'X') {
      console.log("X wins"); showwin("X wins !");
   }
   else if (arr[6].value === 'X' && arr[7].value === 'X' && arr[8].value === 'X') {
      console.log("X wins"); showwin("X wins !");
   }
   else if (arr[0].value === 'X' && arr[4].value === 'X' && arr[8].value === 'X') {
      console.log("X wins"); showwin("X wins !");
   }
   else if (arr[2].value === 'X' && arr[4].value === 'X' && arr[6].value === 'X') {
      console.log("X wins"); showwin("X wins !");
   }
   else if (arr[1].value === 'X' && arr[4].value === 'X' && arr[7].value === 'X') {
      console.log("X wins"); showwin("X wins !");
   }
   else if (arr[3].value === 'X' && arr[4].value === 'X' && arr[5].value === 'X') {
      console.log("X wins"); showwin("X wins !");
   }
   
}
function owins() {
   if (arr[0].value === '0' && arr[1].value === '0' && arr[2].value === '0') {
      console.log("0 wins"); showwin("0 wins !");

   }
   else if (arr[0].value === '0' && arr[3].value === '0' && arr[6].value === '0') {
      console.log("0 wins"); showwin("0 wins !");
   }
   else if (arr[2].value === '0' && arr[5].value === '0' && arr[8].value === '0') {
      console.log("0 wins"); showwin("0 wins !");
   }
   else if (arr[6].value === '0' && arr[7].value === '0' && arr[8].value === '0') {
      console.log("0 wins"); showwin("0 wins !");
   }
   else if (arr[0].value === '0' && arr[4].value === '0' && arr[8].value === '0') {
      console.log("0 wins"); showwin("0 wins !");
   }
   else if (arr[2].value === '0' && arr[4].value === '0' && arr[6].value === '0') {
      console.log("0 wins"); showwin("0 wins !");
   }
   else if (arr[1].value === '0' && arr[4].value === '0' && arr[7].value === '0') {
      console.log("0 wins"); showwin("0 wins !");
   }
   else if (arr[3].value === '0' && arr[4].value === '0' && arr[5].value === '0') {
      console.log("0 wins"); showwin("0 wins !");
   }
   

}


function showwin(message) {
   let newbox = document.createElement('div');
   newbox.textContent = message;
   newbox.style.backgroundColor = "black";
   newbox.style.fontSize = "30px";
   newbox.style.padding = "10px";
   newbox.style.color = "white";
   newbox.style.border = "2px solid white";
   newbox.style.textAlign = "center";
   output.appendChild(newbox);
   
   setInterval(() => {
      location.reload();
   }, 5000);
   
   
}



















