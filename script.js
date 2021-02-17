const loadingText = document.querySelector('.loading-text');
const backgroundImage = document.querySelector('.bg');

let load = 0

let int = setInterval(blurring, 30);

function blurring() {
      load++
      if(load > 99){
            clearInterval(int)
      }

      console.log(load)
}