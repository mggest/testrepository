const clock = document.queryselector("#clock")

function zeroAdder(a){
    if (a < 10) {
        console.log ("0"+a)
    }else{
        console.log (a)
    }
}

const z = zeroAdder(a)

function gettime(){
    const date = Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    clock.innertext `${z(hours)}:${z(minutes)}:${z(seconds)}`
}

function init(){
    setInterval(gettime, 1000)
    gettime()
}

init();