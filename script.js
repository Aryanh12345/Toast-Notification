let toastBox = document.querySelector("#toastBox");
let success = document.querySelector(".success");
let error = document.querySelector(".error");
let invalid = document.querySelector(".invalid");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

let i = document.querySelector("i");

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;

    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    } else 
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },4000);
}

success.addEventListener('click', (e)=>{
    showToast(successMsg);
})
error.addEventListener('click', (e)=>{
    showToast(errorMsg);
})
invalid.addEventListener('click', (e)=>{
    showToast(invalidMsg);
})

