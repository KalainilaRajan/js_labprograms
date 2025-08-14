let result=document.getElementById("result") 
function handleBox(){
    let input=document.getElementById("maintext").value;
    let word_count=input.split(" ").length; //count of the word
    let char_count=input.split("").length; //count of char

    result.innerHTML=`<h1>Word Count: ${word_count}</h1>
                      <h1>Char Count: ${char_count}</h1>`
}

document.addEventListener("keyup",handleBox)