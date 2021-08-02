let myStr = '';
let result;

let normalsList = document.querySelectorAll('.normal');
let displayEl = document.querySelector('.display');
let cEl = document.querySelector('#C');
let equalsEl = document.querySelector('#equals');
let backEl = document.querySelector('#back');



let clickFunc = function(e){
    // console.log(e.target);
    myStr += e.target.textContent;
    // console.log(myStr);
    displayEl.value = myStr;
};


// Code for clicking any button apart from C and =
for(let i=0; i<normalsList.length; i++){
    normalsList[i].addEventListener("click", clickFunc);
}

// Code for clicking C
cEl.addEventListener('click', () => {
    myStr = '';
    displayEl.value = myStr;
});

// Code for clicking =
equalsEl.addEventListener('click', () => {
    try{
        result = eval(myStr);
    }
    catch(err){
        result = 'ERROR';
    }
    displayEl.value = result;
    myStr = result;
});

// Code for clicking back
backEl.addEventListener('click', () => {
    try{
        myStr =myStr.slice(0,myStr.length-1);
     }
     catch(err){
         myStr = '';
     }
     displayEl.value = myStr;
});


// Code for clicking Enter and Backspace
document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        try{
            result = eval(myStr);
        }
        catch(err){
            result = 'ERROR';
        }
        console.log(result);
        displayEl.value = result;
        myStr = result;
    }

    if(e.key === 'Backspace'){
        try{
           myStr =myStr.slice(0,myStr.length-1);
        }
        catch(err){
            myStr = '';
        }
        displayEl.value = myStr;
    }
});