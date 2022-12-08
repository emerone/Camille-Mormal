const elements = document.querySelectorAll('.bg-container > *'),
odd = document.querySelectorAll('.loading > :nth-child(2n) > *'),
nOdd = document.querySelectorAll('.loading > :nth-child(2n+1) > *')


let i = 1

const startAnimation = () => {
    console.log('clicked')
    if (i == 1){
        nOdd.forEach(element => {
            element.style.translate = "0px"
        });
        odd.forEach(element => {
            element.style.translate = "0% 10vmax"
        });
        i = Math.random()
    }else{
        elements.forEach(element => {
            element.style.translate = ""
        });
        i = 1
    }
}

document.addEventListener('click', startAnimation)