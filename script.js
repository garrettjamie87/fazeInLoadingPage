const loadingText = document.querySelector('.loading-text');
const backgroundImage = document.querySelector('.bg');

let load = 0

let int = setInterval(blurring, 30);

function blurring() {
      load++
      if(load > 99){
            clearInterval(int)
      }

loadingText.innerText =`${load}%`
loadingText.style.opacity = scale(load, 0, 100, 1, 0)


}

//cool function for this effect!!
const scale = (num, in_min, in_max, out_min, out_max) => {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }