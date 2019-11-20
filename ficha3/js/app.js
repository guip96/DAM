function modifyText(value) { //função do evento
    value.preventDefault();
    const switch_index=Array.from(switches).indexOf(value.target); //indice do switch
    const button=switches.item(switch_index);
    const image=switch_images.item(switch_index);

    if (button.classList.contains("fa-toggle-off")){
        button.classList.remove("fa-toggle-off");
        button.classList.add("fa-toggle-on");

        image.classList.add("fas");
        image.classList.remove("far");
        image.classList.toggle("on")
        image.classList.toggle("off")
    }else{
        button.classList.remove("fa-toggle-on");
        button.classList.add("fa-toggle-off");

        image.classList.remove("fas");
        image.classList.add("far");
        image.classList.toggle("off")
        image.classList.toggle("on")
    }

}
function colapse_box(value) {
    value.preventDefault();
    const colapse_index=Array.from(colapses).indexOf(value.target);
    // const box = colapses.item(colapse_index).parentNode.parentNode.parentNode.parentNode.parentNode;
    // const box = document.getElementById(this.dataset.target)
    // box.classList.toggle("colapsed");
    document.getElementById(this.dataset.target).classList.toggle("colapsed")
    if(colapses.item(colapse_index).classList.contains("fa-caret-square-up")){
        colapses.item(colapse_index).classList.remove("fa-caret-square-up");
        colapses.item(colapse_index).classList.add("fa-caret-square-down");
    }else{
        colapses.item(colapse_index).classList.remove("fa-caret-square-down");
        colapses.item(colapse_index).classList.add("fa-caret-square-up");
    }

}
function modifyhours() {
  setInterval(function()
      {
          let date = new Date();
          let hours = String(date.getHours()).padStart(2, '0');
          let minutes = String(date.getMinutes()).padStart(2, '0');
          let time = hours + ":" + minutes;
          hour2write.childNodes.item(1).textContent = time;
      }, 60000);
}

function load() {
    modifyhours();
    switches = document.getElementsByClassName("switch"); //vai buscar todos os switches
    switch_images = document.getElementsByClassName("switch_image");
    colapses = document.getElementsByClassName("button_colapse");
    for (let i=0; i<switches.length; i++){
        switches.item(i).addEventListener("click",modifyText,false); //cria os eventos
    }
    for (let j=0; j<colapses.length; j++){
        colapses.item(j).addEventListener("click",colapse_box,false);
    }
}

document.addEventListener("DOMContentLoaded", load, false);

let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = date.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');

let time = hours + ":" + minutes;
data2write = document.getElementById("date");

data2write.childNodes.item(1).textContent = today;
hour2write = document.getElementById("hours");

hour2write.childNodes.item(1).textContent = time;











// ********************THIS WORKS ******************
// my_switches_off=document.getElementsByClassName("container_box");
// my_switches_on=document.getElementsByClassName("switch").item(0).parentNode.parentNode.parentNode;
// asd=my_switches_off.item(0).getElementsByClassName("item_box_left_images");
// image=my_switches_on.childNodes.item(1).childNodes.item(1)
// image.classList.remove('far')
// image.classList.add('fas')
// asd.item(0).style.color = 'red'
// // console.log(my_switches_off.item(0));
// console.log(image);
// // console.log(asd);
// ****************************************************


// my_switches_off.item(0).classList.
// my_switches.item(0).classList.remove("switch")


// myswitches=document.getElementsByClassName("fa-toogle-off")
// document.eleme
// for (let i=0; i<myswitches.length; i++){
//     myswitches.
// }
