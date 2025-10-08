const image=document.querySelector(".carousel img");
const arr_imag=["https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg","https://tinypng.com/static/images/boat.png","https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?fm=jpg","https://s3.amazonaws.com/fathom_media/photos/italy-amalfi-coast-ricardo-gomez-angel-unsplash.jpg.1200x800_q85_crop.jpg"];
let img_id=0;
function next(){
    if(img_id==arr_imag.length-1){
       img_id++;
    }
    else{
        img_id=0;
    
    image.src=arr_imag[img_id];
    }
}
function Prev(){
    if(0<img_id){
        img_id--;
    }
    else{
        img_id=arr_imag.length-1;
    }
    image.src=arr_imag[img_id];
}

document.querySelectorAll(".btn button")[0].addEventListener("click",Prev);
document.querySelectorAll(".btn button")[1].addEventListener("clicl",next);

setInterval(next,3000)