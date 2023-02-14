var list = document.getElementsByTagName("li")
let i;

for (i = 0;i<list.length;i++){
    let close_kr = document.createElement("p")
    var txt = document.createTextNode("\u00D7");
    close_kr.className = "kr";
    close_kr.appendChild(txt)
    list[i].appendChild(close_kr)
}
let close_button = document.getElementsByClassName("kr")
function udal(){//Удаление задачи
    for(i = 0; i < close_button.length; i++){
        close_button[i].onclick = function(){
            var par = this.parentElement
            console.log("Код тут")
            par.style.display = "none"
        }
    }
}
udal()
function adding(){   //Добавление новой задачи
    let ul= document.getElementById("ul")
    let inpu = document.getElementById("myInput")
    let butt = document.querySelector('.butt1')
    console.log(inpu.value)

    if (inpu.value === ''){
        alert("Вы ничего не ввели :(")
    }
    else{
        var li = document.createElement("li")
        li.innerHTML = `
        <input type="checkbox" class ="checkbox" value="" >${inpu.value}
    </li>`
        ul.appendChild(li)
    }
    document.getElementById("myInput").value = "";
    
    let close_kr = document.createElement("p")
    var txt = document.createTextNode("\u00D7");
    close_kr.className = "kr";
    close_kr.appendChild(txt)
    li.appendChild(close_kr)

    for(let b = 0;b<list.length;b++){
        document.getElementsByClassName("checkbox")[b].onclick = function(){
        if (document.getElementsByClassName("checkbox")[b].checked){
            let par1 =this.parentElement
            par1.style.textDecoration = "line-through";
            //this.style.visibility = "hidden"
        }
        else{
            let par1 =this.parentElement
            par1.style.textDecoration = "none"; 
        }
        }}
        udal()
        for (let c = 0;c<list.length;c++){
            let les = document.querySelectorAll("li")
            if (c % 2 == 0){
                les[c].style.background = "#3b3b3b";
            }
            else{
                les[c].style.background = "#202020";
            }
        }
}
document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        adding();
    }
})

function zach(){//зачёркивание
    for(let b = 0;b<list.length;b++){
    document.getElementsByClassName("checkbox")[b].onclick = function(){
    if (document.getElementsByClassName("checkbox")[b].checked){
        let par1 =this.parentElement
        par1.style.textDecoration = "line-through";
        //this.style.visibility = "hidden"
    }
    else{
        let par1 =this.parentElement
        par1.style.textDecoration = "none"; 
    }
    }}
    }
zach()

let butt2 = document.querySelector(".butt2")
butt2.onclick = function (){
    for(let b = 0;b<list.length;b++){  
            if(document.getElementsByClassName("checkbox")[b].checked){
                let a = document.getElementsByClassName ("checkbox")[b];
                let parr = a.parentElement
                let par1 =this.parentElement
                parr.style.display = "none"; 
                parr.style.visibility = "hidden";
                console.log("Код дошёл до сюда");
                
        }    
    }
}
let butt3 = document.querySelector(".butt3")//Выбрать всё
butt3.onclick = function(){
    for (let b = 0; b<list.length;b++){
        document.getElementsByClassName("checkbox")[b].checked = true
        let par1 = document.getElementsByClassName ("checkbox")[b].parentElement
        par1.style.textDecoration = "line-through";
        //document.getElementsByClassName ("checkbox")[b].style.visibility = "hidden"
    }
}
let butt4 = document.querySelector(".butt4")//Очистить выбор
butt4.onclick = function(){
    for (let b = 0; b<list.length;b++){
        document.getElementsByClassName("checkbox")[b].checked = false;
        let par1 = document.getElementsByClassName ("checkbox")[b].parentElement
        par1.style.textDecoration = "none";
        document.getElementsByClassName ("checkbox")[b].style.visibility = "visible"}
}


