// here we started for scripting 


// creating the variables for storing the data 
let bjpVote = 0;
let congressVote = 0;
let bspVote = 0;
let aapVote = 0;
let cpVote = 0;
let napVote = 0;
let stopfun = 0;


// this  function  reverses the String 
function reverse(str) {
    return [...str];
}

// let's take a count variable for stroring temporary data 
let count  = 0;


// function, when voting is closed 
function action (anas){
    if(stopfun>0){
      swal("The Election has been done ", "Plz refresh the page");
        return ;
    }
   
    // taking the elements from html to perform client side logic 
    let elm = document.getElementById(anas);
    function fun(){
        elm.style.background = "#48D1CC"
     }
    
     // taking the input form user ,Email
    let content = prompt("enter your Email");
    let arr = reverse(content);
    // Email Validation 
    if(arr[arr.length-1] =='m' && arr[arr.length-2] == 'o' && arr[arr.length-3] == 'c' &&  arr[arr.length-4] == '.' && arr[arr.length-5] == 'l' && arr[arr.length-6] == 'i' && arr[arr.length-7] == 'a' && arr[arr.length-8] == 'm' && arr[arr.length-9] == 'g' && arr[arr.length-10] == '@' ){
       
       count = 1+count;
        if(count > 0){
         swal("Thank's", "You have voted", "success");
            elm.style.backgroundColor = "#00FF00";
            setTimeout(fun,2000);
           
     // cheaking conditions and stor the data ;       
        }
        if(anas =='bjpbutton'){
            bjpVote = bjpVote+1;
         }
         if(anas == 'congressbutton'){
            congressVote = congressVote +1;
         }
         if(anas == 'bspbutton'){
            bspVote = bspVote+1;
            console.log(bspVote)
         }
         if(anas == 'aapbutton'){
            aapVote = aapVote +1;
         }
         if(anas == 'napbutton'){
            napVote = napVote +1;
         }
         if(anas == 'cpbutton'){
            cpVote = cpVote +1;
         }
            
        
        
    }
   
    else {
      swal("Please Enter Valid Email", "For Voting ");
        elm.style.background = "red"
         setTimeout(fun,2000);
         
      // starting further effects  
    } 
    if(count >0){
      let as = document.getElementsByClassName("as");
      for(let sc of as){
        sc.innerHTML = "Voting..";
      }
      
    }
    
}

let smalldiv = document.getElementById("small3");
let spandiv = document.getElementById("spandiv");
 
 // fires click event on button
    smalldiv.addEventListener("click",function(){
   
         let as = document.getElementsByClassName("as");
         for(let i of as){
            i.innerHTML = "Counting";
         }
         spandiv.innerHTML = "please Wait.."
         setTimeout(wait,4000);
            function wait(){  
             document.getElementById("bjpid").innerHTML=bjpVote;
             document.getElementById("aapid").innerHTML = aapVote;
             document.getElementById("congressid").innerHTML = congressVote;
             document.getElementById("napid").innerHTML = napVote;
             document.getElementById("cpid").innerHTML = cpVote;
             document.getElementById("bspid").innerHTML = bspVote;

            stopfun = stopfun+1;
            
            
 // victory decides after checking all of conditions
         if(bjpVote>bspVote && bjpVote>congressVote && bjpVote>cpVote && bjpVote>napVote && bjpVote>aapVote){
            spandiv.innerHTML = "Bjp Winner";
            document.getElementById("bjpid").style.background="#00FF00";
            
            
         }
         else if(bspVote>bjpVote && bspVote>congressVote && bspVote>cpVote && bspVote>napVote && bspVote>aapVote){
            spandiv.innerHTML = "Bsp Winner";
            document.getElementById("bspid").style.background="#00FF00";
            
         }
         else if(aapVote>bjpVote && aapVote>congressVote && aapVote>cpVote && aapVote>napVote && aapVote>bspVote){
            spandiv.innerHTML = "Aap Winner";
            document.getElementById("aapid").style.background="#00FF00";
            

         }
         else if(cpVote>bjpVote && cpVote>congressVote && cpVote>bspVote && cpVote>napVote && cpVote>aapVote){
            spandiv.innerHTML = "Cp Winner";
            document.getElementById("cpid").style.background="#00FF00";
            
         }
            else if(napVote>bjpVote && napVote>congressVote && napVote>bspVote && napVote>cpVote && napVote>aapVote){
                  spandiv.innerHTML = "Nap Winner";
                  document.getElementById("napid").style.background="#00FF00";
                  
         }
         else if(congressVote>bjpVote && congressVote>napVote && congressVote>bspVote && congressVote>cpVote && congressVote>aapVote){
            spandiv.innerHTML = "congress Winner";
            document.getElementById("congressid").style.background="#00FF00";
            
         }
         // if no one wins then further actions 
         else {
            console.log("winner")
            spandiv.innerHTML = "No Winner";
            smalldiv.style.background = "red"
            for(let i of as){
               i.style.background = "red"
            }
         }
      

         
         }
    
        
    })

