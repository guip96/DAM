function modifyText(value) { //função do evento
    const switch_index=Array.from(switches).indexOf(value.target); //indice do switch
    const container_box=document.getElementsByClassName("switch").item(switch_index).parentNode.parentNode.parentNode; //linha (container) onde está o switch e a imagem
    const button=document.getElementsByClassName("switch").item(switch_index); //switch clicado
    const image=container_box.childNodes.item(1).childNodes.item(1); //imagem da mesma linha do switch
    if (button.classList.contains("fa-toggle-off")){
        button.classList.remove("fa-toggle-off");
        button.classList.add("fa-toggle-on");

        image.classList.add("fas");
        image.classList.remove("far");
        image.style.color = '#f8da4c';
    }else{
        button.classList.remove("fa-toggle-on");
        button.classList.add("fa-toggle-off");

        image.classList.remove("fas");
        image.classList.add("far");
        image.style.color = '#4d719b';
    }
}

function load() {
    switches = document.getElementsByClassName("switch"); //vai buscar todos os switches
    for (let i=0; i<switches.length; i++){
        switches.item(i).addEventListener("click",modifyText,false) //cria os eventos
    }
}
document.addEventListener("DOMContentLoaded", load, false);



// ********************THIS WORKS ******************
// my_switches_off=document.getElementsByClassName("container_box");
// my_switches_on=document.getElementsByClassName("switch").item(0).parentNode.parentNode.parentNode;
// asd=my_switches_off.item(0).getElementsByClassName("item_box_left_images");
// image=my_switches_on.childNodes.item(1).childNodes.item(1)
// image.classList.remove('far')
//
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
