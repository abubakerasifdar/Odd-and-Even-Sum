 
         document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
         function myFunction() {
            let input = document.getElementById('input').value;
            let result = "";
            let sum = 0;
            let odd = 0;
            let i = 0;
            while(i<=input){
               if(i%2==0){
                sum+=i;
            }
               if(i%2!=0){
                odd+=i;
                console.log(odd, "This is the odd");
            }
                  i++;
            }
            result = `The Sum of Even Number is ${sum} <br> 
            The Sum of Odd Number is ${odd}`
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
}   

    