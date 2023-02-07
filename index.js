const imageContainerEl = document.querySelector(".imageContainer");
const btnEl = document.querySelector(".btn");


btnEl.addEventListener("click", () => {
    addImages();
});



function addImages() {
    for (let i = 0; i < 9; i++) {
        const newImageEl = document.createElement("img");
        newImageEl.src=`https://picsum.photos/300?random=${Math.random()}` 
       imageContainerEl.appendChild(newImageEl);        
    }

   
}