import Sound from "./sounds.js"
const sound = Sound()

let minutes = Number(document.querySelector('.minutes').innerText)
let timerTimeOut

document.querySelector('#btnPlay').addEventListener('click', function(){
    countDown()
    console.log('aqui')
})

document.querySelector('#btnStop').addEventListener('click', function(){
    clearTimeout(timerTimeOut)
    reset()
})


document.querySelector('.soma').addEventListener('click', function(){
    minutes = minutes + 5
    console.log(minutes)
    document.querySelector('.minutes').innerText = minutes
})

document.querySelector('.diminui').addEventListener('click', function(){
    if (minutes == 0) {
        alert('Cronometro zerado')
        return
    }
    minutes = minutes - 5
    console.log(minutes)
    document.querySelector('.minutes').innerText = minutes
    document.querySelector('.minutes').textContent = String(minutes).padStart(2, "0")
})


function countDown(){

  timerTimeOut =  setTimeout(function(){
        let minutes = Number(document.querySelector('.minutes').textContent)
        let seconds = Number(document.querySelector('.segundos').textContent)

        if(seconds <= 0 ){
            seconds = 60
            minutes --
        }

        updateDisplay(minutes, seconds - 1)

        countDown()
    },1000)
}


function updateDisplay(newMinutes, seconds){
    document.querySelector('.minutes').textContent = String(newMinutes).padStart(2, "0")
    document.querySelector('.segundos').textContent = String(seconds).padStart(2, "0")
}

function reset(){
    document.querySelector('.minutes').innerText = "25"
    document.querySelector('.segundos').innerText = "00"

}























document.querySelector('.forest').addEventListener('click', function(){
    sound.playFourestSound()
} )

document.querySelector('.chuva').addEventListener('click', function(){
    sound.playChuva()
} )

document.querySelector('.cafe').addEventListener('click', function(){
    sound.playCafe()
} )

document.querySelector('.fire').addEventListener('click', function(){
    sound.playFire()
})


