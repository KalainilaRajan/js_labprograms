function add(){
    var num_1=parseInt(document.getElementById("number_1").value)
    var num_2=parseInt(document.getElementById("number_2").value)
    
   
    document.getElementById("result").innerHTML=num_1+num_2
}
function subtract(){
    var num_1=parseInt(document.getElementById("number_1").value)
    var num_2=parseInt(document.getElementById("number_2").value)
    
    
    document.getElementById("result").innerHTML=num_1-num_2 
}
function mult(){
    var num_1=parseInt(document.getElementById("number_1").value)
    var num_2=parseInt(document.getElementById("number_2").value)
    
    
    document.getElementById("result").innerHTML=num_1*num_2
}
function div(){
    var num_1=parseInt(document.getElementById("number_1").value)
    var num_2=parseInt(document.getElementById("number_2").value)
    
    
    document.getElementById("result").innerHTML=num_1/num_2
}
add()
subtract()
mult()
div()

