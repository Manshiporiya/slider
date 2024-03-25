const click = document.getElementById('click')
const remove = document.getElementById('remove')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const flex1 = document.getElementById("flex1")
const img4 = document.getElementById('img4')
const img5 = document.getElementById('img5')
const img6 = document.getElementById('img6')
const flex2 = document.getElementById("flex2")
const img7 = document.getElementById('img7')
const img8 = document.getElementById('img8')
const img9 = document.getElementById('img9')
const flex3 = document.getElementById("flex3")
const img10 = document.getElementById('img10')
const img11 = document.getElementById('img11')
const img12 = document.getElementById('img12')
const flex4 = document.getElementById("flex4")
const img13 = document.getElementById('img13')
const img14 = document.getElementById('img14')
const img15 = document.getElementById('img15')
const flex5 = document.getElementById("flex5")


let count = 0;

click.addEventListener("click", function(){
  count++
  console.log(count);
    if(count==1){
    flex1.style.backgroundColor = "red"
    flex1.style.padding = "20px"
    flex1.style.paddingTop = "20px"
    flex1.style.display="flex"
    flex1.style.justifyContent="space-evenly"
    img1.style.height="200px"
    img1.style.width="300px"
    img2.style.height="200px"
    img2.style.width="300px"
    img3.style.height="200px"
    img3.style.width="300px"
    img1.style.backgroundImage = "url('image1.jpg')"
    img2.style.backgroundImage = "url('image2.jpg')"
    img3.style.backgroundImage = "url('image3.jpg')"
    }

    if(count==2){
    flex2.style.backgroundColor = "orange"
    flex2.style.padding = "20px"
    flex2.style.paddingTop = "20px"
    flex2.style.display="flex"
    flex2.style.justifyContent="space-evenly"
    img4.style.height="200px"
    img4.style.width="300px"
    img5.style.height="200px"
    img5.style.width="300px"
    img6.style.height="200px"
    img6.style.width="300px"
    img4.style.backgroundImage = "url('image4.jpg')"
    img5.style.backgroundImage = "url('image5.jpg')"
    img6.style.backgroundImage = "url('image6.jpg')"
    }
   
    if(count==3){
    flex3.style.backgroundColor = "blue"
    flex3.style.padding = "20px"
    flex3.style.paddingTop = "20px"
    flex3.style.display="flex"
    flex3.style.justifyContent="space-evenly"
    img7.style.height="200px"
    img7.style.width="300px"
    img8.style.height="200px"
    img8.style.width="300px"
    img9.style.height="200px"
    img9.style.width="300px"
    img7.style.backgroundImage = "url('image7.jpg')"
    img8.style.backgroundImage = "url('image8.jpg')"
    img9.style.backgroundImage = "url('image9.jpg')"
    }


    if(count==4){
    flex4.style.backgroundColor = "pink"
    flex4.style.padding = "20px"
    flex4.style.paddingTop = "20px"
    flex4.style.display="flex"
    flex4.style.justifyContent="space-evenly"
    img10.style.height="200px"
    img10.style.width="300px"
    img11.style.height="200px"
    img11.style.width="300px"
    img12.style.height="200px"
    img12.style.width="300px"
    img10.style.backgroundImage = "url('image10.jpg')"
    img11.style.backgroundImage = "url('image11.jpg')"
    img12.style.backgroundImage = "url('image12.jpg')"
    }

    if(count==5){
    flex5.style.backgroundColor = "yellow"
    flex5.style.padding = "20px"
    flex5.style.paddingTop = "20px"
    flex5.style.display="flex"
    flex5.style.justifyContent="space-evenly"
    img13.style.height="200px"
    img13.style.width="300px"
    img14.style.height="200px"
    img14.style.width="300px"
    img15.style.height="200px"
    img15.style.width="300px"
    img13.style.backgroundImage = "url('image13.jpg')"
    img14.style.backgroundImage = "url('image14.jpg')"
    img15.style.backgroundImage = "url('image15.jpg')"
    count=0;
    }

})



remove.addEventListener("click", function(){
 console.log(count)
    count++;
    if(count==5){
    flex1.style.display="none"
    }
    if(count==4){
        flex2.style.display="none"
    }
    if(count==3){
        flex3.style.display="none"
    }
    if(count==2){
        flex4.style.display="none"
    }
    if(count==1){
        flex5.style.display="none"
    }
})