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

const allPasangers = document.getElementById("all_pasangers")
const allBorders = document.getElementById("all_borders")
const atack = document.getElementById("atack")
const loseAlert = document.getElementById("lose_alert")
const restartLV1 = document.getElementById("restart_lv1")
const atackUp1 = document.getElementById("atack_up-1")
const atackUp2 = document.getElementById("atack_up-2")

const winAlert = document.getElementById("win_alert")
const winBtn = document.getElementById("Win_btn")
const audioAlert = document.getElementById("audio_alert")

setTimeout(() =>{
    audioAlert.classList.add("audio_alert_finish")
}, 4000)

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

//snow
const snowCanvas = document.createElement("canvas");
snowCanvas.id = "snow_canvas";
allGame.prepend(snowCanvas);

const snowCtx = snowCanvas.getContext("2d");
let snowflakes = [];
const snowCount = 110;

function resizeSnowCanvas() {
    snowCanvas.width = allGame.clientWidth;
    snowCanvas.height = allGame.clientHeight;
}

function createSnowflakes() {
    snowflakes = [];

    for (let i = 0; i < snowCount; i++) {
        snowflakes.push({
            x: Math.random() * snowCanvas.width,
            y: Math.random() * snowCanvas.height,
            radius: Math.random() * 2.5 + 1,
            speed: Math.random() * 1.5 + 0.6,
            drift: Math.random() * 0.8 - 0.4,
            opacity: Math.random() * 0.5 + 0.4
        });
    }
}

function drawSnow() {
    snowCtx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);

    snowflakes.forEach((flake) => {
        snowCtx.beginPath();
        snowCtx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        snowCtx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        snowCtx.fill();

        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > snowCanvas.height + flake.radius) {
            flake.y = -flake.radius;
            flake.x = Math.random() * snowCanvas.width;
        }

        if (flake.x > snowCanvas.width + flake.radius) {
            flake.x = -flake.radius;
        } else if (flake.x < -flake.radius) {
            flake.x = snowCanvas.width + flake.radius;
        }
    });

    requestAnimationFrame(drawSnow);
}

resizeSnowCanvas();
createSnowflakes();
drawSnow();

window.addEventListener("resize", () => {
    resizeSnowCanvas();
    createSnowflakes();
});
//snow


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
    atack.style.display = "flex"
    playClick = true
})

let playAnimation = allPasangers.animate([
    {
        transform: "translateX(0)"
    },
    {
        transform: "translateX(69px)"
    },
    {
        transform: "translateX(100px) translateY(-30px)"
    },
    {
        transform: "translateX(130px) translateY(-60px)"
    },
    {
        transform: "translateX(160px) translateY(-90px)"
    },
    {
        transform: "translateX(180px) translateY(-105px)"
    },
    {
        transform: "translateX(230px) translateY(-105px)"
    },
    {
        transform: "translateX(270px) translateY(-105px)"
    },
    {
        transform: "translateX(300px) translateY(-105px)"
    },
    {
        transform: "translateX(325px) translateY(-105px)"
    },
    {
        transform: "translateX(335px) translateY(-135px)"
    },
    {
        transform: "translateX(345px) translateY(-150px)"
    },
    {
        transform: "translateX(355px) translateY(-160px)"
    },
    {
        transform: "translateX(365px) translateY(-165px)"
    },
    {
        transform: "translateX(375px) translateY(-170px)"
    },
    {
        transform: "translateX(385px) translateY(-172px)"
    },
    {
        transform: "translateX(400px) translateY(-172px)"
    },
    {
        transform: "translateX(420px) translateY(-172px)"
    },
    {
        transform: "translateX(440px) translateY(-172px)"
    },
    {
        transform: "translateX(460px) translateY(-172px)"
    },
    {
        transform: "translateX(480px) translateY(-172px)"
    },
    {
        transform: "translateX(500px) translateY(-172px)"
    },
    {
        transform: "translateX(520px) translateY(-172px)"
    },
    {
        transform: "translateX(540px) translateY(-172px)"
    },
    {
        transform: "translateX(560px) translateY(-172px)"
    },
    {
        transform: "translateX(580px) translateY(-172px)"
    },
    {
        transform: "translateX(600px) translateY(-172px)"
    },
    {
        transform: "translateX(620px) translateY(-166px)"
    },
    {
        transform: "translateX(640px) translateY(-160px)"
    },
    {
        transform: "translateX(660px) translateY(-140px)"
    },
    {
        transform: "translateX(670px) translateY(-80px)"
    },
    {
        transform: "translateX(670px) translateY(-60px)"
    },
    {
        transform: "translateX(670px) translateY(-40px)"
    },
    {
        transform: "translateX(670px) translateY(-20px)"
    },
    {
        transform: "translateX(670px) translateY(1px)"
    },
    {
        transform: "translateX(670px) translateY(20px)"
    },
    {
        transform: "translateX(670px) translateY(40px)"
    },
    {
        transform: "translateX(670px) translateY(60px)"
    },
    {
        transform: "translateX(670px) translateY(80px)"
    },
    {
        transform: "translateX(670px) translateY(100px)"
    },
    {
        transform: "translateX(660px) translateY(130px)"
    },
    {
        transform: "translateX(650px) translateY(142px)"
    },
    {
        transform: "translateX(630px) translateY(142px)"
    },
    {
        transform: "translateX(610px) translateY(142px)"
    },
    {
        transform: "translateX(590px) translateY(142px)"
    },
    {
        transform: "translateX(570px) translateY(142px)"
    },
    {
        transform: "translateX(550px) translateY(142px)"
    },
    {
        transform: "translateX(530px) translateY(142px)"
    },
    {
        transform: "translateX(510px) translateY(142px)"
    },
    {
        transform: "translateX(490px) translateY(142px)"
    },
    {
        transform: "translateX(470px) translateY(142px)"
    },
    {
        transform: "translateX(450px) translateY(135px)"
    },
    {
        transform: "translateX(430px) translateY(120px)"
    },
    {
        transform: "translateX(425px) translateY(115px)"
    },
    {
        transform: "translateX(425px) translateY(100px)"
    },
    {
        transform: "translateX(425px) translateY(80px)"
    },
    {
        transform: "translateX(425px) translateY(60px)"
    },
    {
        transform: "translateX(425px) translateY(40px)"
    },
    {
        transform: "translateX(425px) translateY(20px)"
    },
    {
        transform: "translateX(425px) translateY(0px)"
    },
    {
        transform: "translateX(425px) translateY(-20px)"
    },
    {
        transform: "translateX(425px) translateY(-40px)"
    },
    {
        transform: "translateX(425px) translateY(-60px)"
    },
    {
        transform: "translateX(425px) translateY(-80px)"
    },
    {
        transform: "translateX(425px) translateY(-104px)"
    },
    {
        transform: "translateX(445px) translateY(-104px)"
    },
    {
        transform: "translateX(465px) translateY(-104px)"
    },
    {
        transform: "translateX(485px) translateY(-104px)"
    },
    {
        transform: "translateX(500px) translateY(-104px)"
    },
    {
        transform: "translateX(520px) translateY(-104px)"
    },
    {
        transform: "translateX(540px) translateY(-104px)"
    },
    {
        transform: "translateX(560px) translateY(-104px)"
    },
    {
        transform: "translateX(580px) translateY(-104px)"
    },
    {
        transform: "translateX(600px) translateY(-104px)"
    },
    {
        transform: "translateX(620px) translateY(-104px)"
    },
    {
        transform: "translateX(640px) translateY(-104px)"
    },
    {
        transform: "translateX(660px) translateY(-104px)"
    },
    {
        transform: "translateX(680px) translateY(-104px)"
    },
    {
        transform: "translateX(700px) translateY(-104px)"
    },
    {
        transform: "translateX(715px) translateY(-104px)"
    },
    {
        transform: "translateX(720px) translateY(-105px)"
    },
    {
        transform: "translateX(725px) translateY(-120px)"
    },
    {
        transform: "translateX(735px) translateY(-145px)"
    },
    {
        transform: "translateX(745px) translateY(-160px)"
    },
    {
        transform: "translateX(755px) translateY(-170px)"
    },
    {
        transform: "translateX(765px) translateY(-173px)"
    },
    {
        transform: "translateX(785px) translateY(-173px)"
    },
    {
        transform: "translateX(800px) translateY(-173px)"
    },
    {
        transform: "translateX(820px) translateY(-173px)"
    },
    {
        transform: "translateX(840px) translateY(-173px)"
    },
    {
        transform: "translateX(860px) translateY(-173px)"
    },
    {
        transform: "translateX(880px) translateY(-173px)"
    },
    {
        transform: "translateX(900px) translateY(-173px)"
    },
    {
        transform: "translateX(920px) translateY(-173px)"
    },
    {
        transform: "translateX(940px) translateY(-173px)"
    },
    {
        transform: "translateX(960px) translateY(-173px)"
    },
    {
        transform: "translateX(980px) translateY(-173px)"
    },
    {
        transform: "translateX(1000px) translateY(-173px)"
    },
    {
        transform: "translateX(1020px) translateY(-165px)"
    },
    {
        transform: "translateX(1035px) translateY(-160px)"
    },
    {
        transform: "translateX(1045px) translateY(-150px)"
    },
    {
        transform: "translateX(1055px) translateY(-140px)"
    },
    {
        transform: "translateX(1060px) translateY(-130px)"
    },
    {
        transform: "translateX(1060px) translateY(-110px)"
    },
    {
        transform: "translateX(1060px) translateY(-90px)"
    },
    {
        transform: "translateX(1060px) translateY(-70px)"
    },
    {
        transform: "translateX(1060px) translateY(-50px)"
    },
    {
        transform: "translateX(1060px) translateY(-30px)"
    },
    {
        transform: "translateX(1060px) translateY(-10px)"
    },
    {
        transform: "translateX(1060px) translateY(10px)"
    },
    {
        transform: "translateX(1060px) translateY(30px)"
    },
    {
        transform: "translateX(1060px) translateY(41px)"
    },
    {
        transform: "translateX(1080px) translateY(41px)"
    },
    {
        transform: "translateX(1100px) translateY(41px)"
    },
    {
        transform: "translateX(1120px) translateY(41px)"
    },
    {
        transform: "translateX(1140px) translateY(41px)"
    },
    {
        transform: "translateX(1160px) translateY(41px)"
    },
    {
        transform: "translateX(1180px) translateY(41px)"
    },
    {
        transform: "translateX(1200px) translateY(41px)"
    },
    {
        transform: "translateX(1220px) translateY(41px)"
    },
], {
    duration: 20000,
    fill: "forwards",
})

playAnimation.pause()

let playClick = false

document.addEventListener("keydown", (event) => {
    if (playClick === false) {
        playAnimation.pause()
    } else {
        if (event.key === "ArrowRight") {
            playAnimation.playbackRate = 1;
            playAnimation.play();
        }

        if (event.key === "ArrowLeft") {
            if (playAnimation.currentTime === 14000) {
                playAnimation.currentTime = 0;
            }

            playAnimation.playbackRate = -1;
            playAnimation.play();
        }
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        playAnimation.pause();
    }
});

playAnimation.addEventListener("finish", () =>{
    winAlert.style.display = "flex"
})

atack.animate([
    {
        transform: "translateX(-1500px)"
    },

],
    {
        duration: 7000,
        fill: "forwards",
        iterations: Infinity,
    })

atackUp1.animate([
    {
        transform: "translateY(700px)"
    },
],

{
    duration: 4000,
    fill: "forwards",
    iterations: Infinity,
})

atackUp2.animate([
    {
        transform: "translateY(700px)"
    },
],

{
    duration: 2000,
    fill: "forwards",
    iterations: Infinity,
})



let hasCollided = false

function lose() {
    let atackCoords = atack.getBoundingClientRect()
    let passangersCoords = allPasangers.getBoundingClientRect()
    let upAtackCoords = atackUp1.getBoundingClientRect()
    let up2AtackCoords = atackUp2.getBoundingClientRect()

    if (atackCoords.left < passangersCoords.right && atackCoords.right > passangersCoords.left && atackCoords.top < passangersCoords.bottom && atackCoords.bottom > passangersCoords.top) {
        if (hasCollided === false) {
            loseAlert.style.display = "flex"
            hasCollided = true
        }
    }else if(upAtackCoords.left < passangersCoords.right && upAtackCoords.right > passangersCoords.left && upAtackCoords.top < passangersCoords.bottom && upAtackCoords.bottom > passangersCoords.top){
        if (hasCollided === false) {
            loseAlert.style.display = "flex"
            hasCollided = true
        }
    }else if(up2AtackCoords.left < passangersCoords.right && up2AtackCoords.right > passangersCoords.left && up2AtackCoords.top < passangersCoords.bottom && up2AtackCoords.bottom > passangersCoords.top){
        if (hasCollided === false) {
            loseAlert.style.display = "flex"
            hasCollided = true
        }
    }
    
    else {
        hasCollided = false
    }
    requestAnimationFrame(lose)

}
lose()

restartLV1.addEventListener("click", () =>{
    location.reload()
})


winBtn.addEventListener("click", () =>{
    location.reload()
})



closeLevel.addEventListener("click", () => {
    levelOneMap.style.display = "none"
    allGame.style.display = "flex"
    playMenu.style.display = "none"
    playClick = false
})

//level 1