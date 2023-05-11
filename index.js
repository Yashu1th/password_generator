// const charecters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';
// let output=document.getElementById("output");


// function randomValue(value){
//     return Math.floor(Math.random()*value);
// }
// function genPassword(){
//     let length=document.getElementById('length').value;
//     document.getElementById("length-val").textContent=length;
//     let str='';

//     for( let i=0; i<length; i++){
//         let random=randomValue(charecters.length);
//         str +=charecters.charAt(random);
//     }
//     output.value=str;
// }
// genPassword();
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';
let output = document.getElementById("output");

function randomValue(value){
    return Math.floor(Math.random()*value);
}

function genPassword(){
    let length = document.getElementById('length').value;
    document.getElementById("length-val").textContent = length;
    let str = '';

    for(let i=0; i<length ; i++){
        let random = randomValue(characters.length);
        str += characters.charAt(random);
    }
    output.value = str;

}

function copyClipboard(){
    var copyText = document.getElementById("output");
    output.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
genPassword();