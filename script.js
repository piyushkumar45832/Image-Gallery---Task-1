let overlay=document.querySelector(".galleryOverlay");
let imageBox=document.querySelector(".imgBox");
var img=document.querySelector(".imgBox img")
let close =document.querySelector(".imgBox span");

let gallery = document.querySelector("#gallery")
gallery.addEventListener("click",(Event)=>{
  let currentImagePath=Event.target.src; //imagepath

  if(currentImagePath !== undefined){
      overlay.classList.add('galleryOverlayShow')
     imageBox.classList.add('imgBoxShow')
     img.src=currentImagePath;

      console.log(currentImagePath)
  }
})
close.addEventListener("click",()=>{
   overlay.classList.remove('galleryOverlayShow')
     imageBox.classList.remove('imgBoxShow')

})