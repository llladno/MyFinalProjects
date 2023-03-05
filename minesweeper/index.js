const place = document.getElementById("place")
let btnStart = document.getElementById("start")
const cell = document.getElementsByTagName("button")

const wight = 16;
const height = 16;
const mine = 40;

const cell2 = []
let game = false
let count2 = 0

let timer1 = document.getElementsByClassName("timer")

//Таймер
function startTimer(minutes) {
    let seconds = minutes * 60;

    const timer = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            place.style.pointerEvents = "none";
        } else {
            const minutesLeft = Math.floor(seconds / 60);
            const secondsLeft = seconds % 60;
            timer1[0].innerHTML = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
        }
    }, 1000);
}

startTimer(40)
gamePlace()

//Создание поля с координатами
function gamePlace() {
    for (let b = 0; b < wight; b++) {
        const row = []
        for (let b2 = 0; b2 < height; b2++) {
            const cel = document.createElement("div")
            cel.classList.add(`y[${b}]`)
            cel.classList.add(`x[${b2}]`)
            cel.classList.add(`cel`)
            place.appendChild(cel)
            row.push(cel)
        }
        cell2.push(row)
    }
}

//Начало игры и расставление мин
function start(sh, sw) {
    mineSpawn()
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < wight; w++) {
            if (h == sh && w == sw) {
                cell2[h][w].classList.add("show")
                cell2[h][w].classList.remove("mine")
            }
            if (cell2[h][w].classList.contains("mine")) {
                getMineCount(h, w - 1);
                getMineCount(h, w + 1)
                getMineCount(h - 1, w)
                getMineCount(h + 1, w)
                getMineCount(h - 1, w - 1)
                getMineCount(h - 1, w + 1)
                getMineCount(h + 1, w - 1)
                getMineCount(h + 1, w + 1)
            }
        }
    }
}

//Функция создания мин
function mineSpawn() {
    var count = 0;

    for (let c = 0; c != mine; c++) {
        const x = Math.floor(Math.random() * wight)
        const y = Math.floor(Math.random() * height)
        cell2[y][x].classList.remove("cel")
        cell2[y][x].classList.add("mine")
        count += 1;
    }
}

let chiclo = 0

//Функция определяет сколько мин вокруг
function getMineCount(h, w) {
    if (h >= 0 && h <= height - 1 && w >= 0 && w <= wight - 1) {
        let chiclo = 0
        if (!cell2[h][w].classList.contains("mine")) {
            cell2[h][w].innerHTML += `${chiclo}`
            if (cell2[h][w].textContent == "0") {
                cell2[h][w].innerHTML = `${1}`
            }
            else if (cell2[h][w].textContent == "10") {
                cell2[h][w].innerHTML = `${2}`
            }
            else if (cell2[h][w].textContent == "20") {
                cell2[h][w].innerHTML = `${3}`
            }
            else if (cell2[h][w].textContent == "30") {
                cell2[h][w].innerHTML = `${4}`
            }
            else if (cell2[h][w].textContent == "40") {
                cell2[h][w].innerHTML = `${5}`
            }
        }
    }
}

let restart = 0

//Изменение картинки при нажатии на поле
place.addEventListener("mousedown", (e) => {
    if (e.button == 0) {
        document.getElementsByTagName("img")[0].src = "img/pngwing.com.png"
    }
})
//Изменение картинки при нажатии на поле
place.addEventListener("mouseup", () => {
    document.getElementsByTagName("img")[0].src = "img/pngwing.com (1).png"
})

//Обработка нажатия по полю
place.addEventListener("click", (event) => {
    var pos = event.target
    let h1 = pos.classList[0]
    let w1 = pos.classList[1]
    var re = /\d{1,2}/;
    let h = +re.exec(h1)[0]
    let w = +re.exec(w1)[0]

    if (!game) {
        restart++;
        start(h, w)
        game = true
    }

    cell2[h][w].classList.remove("cel")

    if (pos.classList.contains("mine")) {
        pos.classList.remove("show")
        document.getElementsByTagName("img")[0].src = "img/pngwing.com (2).png"
        console.log('Time is up!');
        document.getElementsByClassName("time")[0].innerHTML = "loose"
        place.style.pointerEvents = "none";

        for (let h1 = 0; h1 < height; h1++) {
            for (let w1 = 0; w1 < wight; w1++) {
                if (cell2[h1][w1].classList.contains("mine")) {
                    cell2[h1][w1].classList.add("boom")
                }
            }
        }
    }
    else showblock(h, w);

    allGame()
})

//Функция отображает рядом стоящие элементы
function showblock(h, w) {
    cell2[h][w].classList.remove("cel")
    cell2[h][w].classList.add("show")

    if (!cell2[h][w].textContent == "") return;

    checkZero(h, w - 1);
    checkZero(h, w + 1)
    checkZero(h+1, w);
    checkZero(h-1, w)
    checkZero(h - 1, w - 1)
    checkZero(h - 1, w + 1)
    checkZero(h + 1, w - 1)
    checkZero(h + 1, w + 1)
}

function checkZero(h, w) {
    if (h >= 0 && h <= height - 1 && w >= 0 && w <= wight - 1) {
        if (cell2[h][w].classList.contains("cel")) showblock(h, w)
    }
}


//Функция конца игры
function allGame() {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < wight; w++) {
            if (cell2[h][w].classList.contains("show")) {
                count2++;
                if (count2 == wight * height - mine + restart) {
                    document.getElementsByClassName("time")[0].innerHTML = "win"
                    btnStart.innerHTML = "Старт"
                    document.getElementsByTagName("img")[0].src = "img/3.png"
                }

            }
        }
    }
    count2 = 0
}

//Обработка нажатия правой кнопки мыши
place.addEventListener("contextmenu", (event) => {
    var pos = event.target
    if (pos.classList.contains("cel") && !pos.classList.contains("flag") || pos.classList.contains("mine") && !pos.classList.contains("flag") && !pos.classList.contains("que")) {
        pos.classList.add("flag")
    }
    else if (pos.classList.contains("flag")) {
        pos.classList.remove("flag")
        pos.classList.remove("cel")
        pos.classList.add("que")
        pos.innerHTML = "?"
    }
    else if (pos.classList.contains("que")) {
        pos.classList.remove("flag")
        pos.classList.remove("que")
        if (pos.classList.contains("mine")) {
        }
        else {
            pos.classList.add("cel")
        }
        pos.innerHTML = ""
    }
})
document.getElementsByTagName("img")[0].src = "img/pngwing.com (1).png"