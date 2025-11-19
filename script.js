words = {
    "en-US": ["by", "nostalgiaTok", "FM Da$ani","what's your name?","(next)"],
    "en": ["by", "nostalgiaTok", "FM Da$ani"],
    "ar": ["من", "FM Da$ani", "nostalgiaTok", "ما اسمك؟", "(التالي)"],
    "he": ["מִן", "FM Da$ani", "nostalgiaTok", "מה השם שלך?","(בא)"],
    "es": ["por", "nostalgiaTok", "FM Da$ani", "¿Cómo te llamas?", "(siguiente)"],
    "fr": ["par", "nostalgiaTok", "FM Da$ani", "Comment tu t'appelles ?", "(suivant)"],
    "ja": ["〜によって", "nostalgiaTok", "FM Da$ani", "あなたの名前は何ですか？", "(次)"]
}
additions = {
    "en-US": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "en": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "ar": [" ", "<a>&nbsp;  </a>", "<b> </b>"],
    "he": [" ", "<a>&nbsp;  </a>", "<b> </b>"],
    "es": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "fr": [" ", "<b>&nbsp;  </b>", "<a> </a>"]
}
function jumpLogo(){
  var logo = document.querySelector("#titleBar");
  for(var i of logo.children[0].children){
    i.style.display="none";
  }
  logo.style.transition = "0.5s";
  logo.style.transitionTimingFunction= "ease-in";
  var l = logo.style.top;
  logo.style.top = "20vh";
  setTimeout(function(l){ logo.style.transform = "rotate(360deg)";},400,l);
    setTimeout(function () {
        logo.style.transitionTimingFunction = "ease-out";
        logo.style.top = l;
        
        for (let j = 0; j < 4; j++) {
            setTimeout(function () {
                var ll = logo.getBoundingClientRect().width;
                var x = logo.children[0].children[j];
                x.style.transition = "0.5s"
                x.style.display = "";
                x.style.opacity = 0;
                logo.style.width = ll + "px";
                setTimeout(function () {
                    x.style.opacity = 1;
                    logo.style.width = "max-content";
                }, 50 * j);
            }, 100 * j);
        }
    }, 900);
    setTimeout(function () {
        logo.style.transition = "1s";
        logo.style.top = 0;
        logo.style.transition = "1s";
        var ll = logo.getBoundingClientRect().width;
        logo.style.width = ll + "px";
        document.querySelector("#textEnter").style.left = "10vw";
        setTimeout(function () {
            logo.style.left = 0;
            setTimeout(function () {
                logo.style.width = "100vw";
            },500)
        }, 1000)
    }, 2600)

}

window.onload = function () {
    for (var i of [...document.querySelectorAll('[words]')]) {
        try {
            ah = additions[this.navigator.language][i.getAttribute('words')].split(" ")
        }
        catch (e) {
            console.log(e);
            ah = ["",""]
        }
        try {
            i.innerHTML = ah[0] + words[this.navigator.language][i.getAttribute('words')] + ah[1];
        }
        catch (e) {
            console.log(e);
            i.innerHTML = ah[0] + words["en-US"][i.getAttribute('words')] + ah[1];
        }
    }

   jumpLogo();
};