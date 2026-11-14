const allGame = document.getElementById("all_game")

const optionBtn = document.getElementById("options_btn")
const optionFon = document.getElementById("option_fon")
const closeOptions = document.getElementById("close_options")
const audioIco = document.getElementById("audio_png")
const audioBtn = document.getElementById("audio_btn")
const noAudionline = document.getElementById("no_audion_line")

const playBtn = document.getElementById("play_btn")
const playMenu = document.getElementById("play_menu_fon")
const closePlayMenu = document.getElementById("close_play_menu")

const tramvai = document.getElementById("tramvai")

const levelOne = document.getElementById("LV-1")
const levelOneMap = document.getElementById("level-1_map")
const closeLevel = document.getElementById("close_level")


const music = new Audio("./audio/audio-1.mp3")
music.loop = true
music.volume = 0.7


//options
optionBtn.addEventListener("click", () => {
    optionFon.style.display = "flex"
})

closeOptions.addEventListener("click", () => {
    optionFon.style.display = "none"
})


let audioLine = false
audioBtn.addEventListener("click", () => {
    if (audioLine == false) {
        noAudionline.style.height = "250px"
        audioIco.style.color = "#c2beb2d2"
        audioLine = true
        music.pause()
    } else {
        noAudionline.style.height = "0px"
        audioLine = false
        audioIco.style.color = "#fdc920d2"
        music.play()
    }
})
//options

tramvai.animate([
    {
        transform: "translateX(-50px)"
    },
    {
        transform: "translateX(90px) translateY(30px)"
    },
    {
        transform: "translateX(190px) translateY(15px)"
    },
    {
        transform: "translateX(188px) translateY(-25px)"
    },
    {
        transform: "translateX(290px) translateY(-143px)"
    },
    {
        transform: "translateX(420px) translateY(-143px)"
    },
    {
        transform: "translateX(520px) translateY(-143px)"
    },
    {
        transform: "translateX(620px) translateY(-143px)"
    },
    {
        transform: "translateX(720px) translateY(-143px)"
    },
    {
        transform: "translateX(820px) translateY(-143px)"
    },
    {
        transform: "translateX(920px) translateY(-143px)"
    },
    {
        transform: "translateX(1000px) translateY(-113px)"
    },
    {
        transform: "translateX(1050px) translateY(-90px)"
    },
    {
        transform: "translateX(1150px) translateY(-10px)"
    },
    {
        transform: "translateX(1200px) translateY(63px)"
    },
    {
        transform: "translateX(1230px) translateY(203px)"
    },
    {
        transform: "translateX(1215px) translateY(323px)"
    },
    {
        transform: "translateX(1180px) translateY(393px)"
    },
    {
        transform: "translateX(1150px) translateY(423px)"
    },
    {
        transform: "translateX(1100px) translateY(553px)"
    },
], {
    duration: 15000,
    fill: "forwards",
    iterations: Infinity
})

//play Btn
playBtn.addEventListener("click", () => {
    playMenu.style.display = "flex"
})

closePlayMenu.addEventListener("click", () => {
    playMenu.style.display = "none"
})
//play Btn


//level 1

levelOne.addEventListener("click", () => {
    allGame.style.display = "none"
    levelOneMap.style.display = "flex"
})






const some = document.getElementById("some")

const animation = some.animate(
    [
        {transform: "translateX(0px)"},
        {transform: "translateX(2500px)"}
    ],
    {
        duration: 4500,
        iterations: Infinity,
        fill: "forwards"
    }
)

animation.pause()

document.addEventListener("keydown", (event) =>{

    if(event.key === "ArrowRight"){
        animation.playbackRate = 1
        animation.play();
    }

    if(event.key === "ArrowLeft"){
        animation.playbackRate = -1
        animation.play()

    }
})


document.addEventListener("keyup", (event) =>{
    if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
        animation.pause()
    }
})





let moveRight = false
let moveLeft = false

document.addEventListener("keydown", (event) =>{

    if(event.key === "ArrowRight"){
        moveRight = true
    }

    if(event.key === "ArrowLeft"){
        moveLeft = true
    }

})


document.addEventListener("keyup", (event) =>{

    if(event.key === "ArrowRight"){
        moveRight = false
    }

    if(event.key === "ArrowLeft"){
        moveLeft = false
    }

})

function movePage(){

    if(moveRight){
        window.scrollBy(4, 0)
    }

    if(moveLeft){
        window.scrollBy(-4, 0)
    }

    requestAnimationFrame(movePage)
}



movePage()



closeLevel.addEventListener("click", () =>{
    levelOneMap.style.display = "none"
    allGame.style.display = "flex"
    playMenu.style.display = "none"
})

//level 1



