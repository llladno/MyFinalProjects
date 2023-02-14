let input1 = document.querySelector(".input1");
let button1 = document.querySelector(".button1");
document.querySelector("#elastic").oninput = function(){
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.headimgrest p');
    if (val != ''){
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1){
                elem.innerText.add("hide");
            }
            else {
                elem.classList.remove("hide");
            }
        });
    }
}
button1.onclick = function (){ 

    let pol = input1.value;
    let x = +input1.value.length;
    console.log(pol);
    console.log(x);
    if (x >= 10){
        alert("Слишком длинное название. Ошибка!\n Введите меньше символов");
    }
    else{
        console.log("Всё ок.")
    }
}
let a = 5;
console.log(a);