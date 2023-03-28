let taskBar=document.querySelector(".taskBar");
let startMenue=document.querySelector(".startMenue");
let taskBarBottom="-480px";
taskBar.addEventListener("click",()=>{
    console.log(taskBar.style.bottom);
    if(taskBarBottom=="-480px"){
        taskBarBottom="50px";
        startMenue.style.bottom = "52px";
    }
    else{
        taskBarBottom="-480px";
        startMenue.style.bottom = "-480px"
    }
})