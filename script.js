words = {
    "en-US": [
        "by", "nostalgiaTok", "FM Da$ani", "what's your name?", "(next)",
        "Your", "nostalgia", "what time period are you nostalgic for?",
        "what creators (if any) (use commas)?",
        "what topics (if any) (use commas)?",
        "'s ", "", "", "video pool", "a whole lot of 'em", "player", "ts plays videos"
    ],

    "en": [
        "by", "nostalgiaTok", "FM Da$ani", "what's your name?", "(next)",
        "Your", "nostalgia", "what time period are you nostalgic for?",
        "what creators (if any) (use commas)?",
        "what topics (if any) (use commas)?",
        "'s ", "", ""
    ],

    "fr": [
        "par", "nostalgiaTok", "FM Da$ani", "Comment tu t'appelles ?", "(suivant)",
        "Ton", "nostalgie", "Pour quelle période ressens-tu de la nostalgie ?",
        "Quels créateurs (le cas échéant) (sépare par des virgules) ?",
        "Quels sujets (le cas échéant) (sépare par des virgules) ?",
        "de ", "", ""
    ],

    "es": [
        "por", "nostalgiaTok", "FM Da$ani", "¿Cómo te llamas?", "(siguiente)",
        "Tu", "", "¿De qué época sientes nostalgia?",
        "¿Qué creadores (si los hay) (usa comas)?",
        "¿Qué temas (si los hay) (usa comas)?",
        "", "nostalgia", " de "
    ],

    "ja": [
        "〜によって", "nostalgiaTok", "FM Da$ani", "あなたの名前は何ですか？", "(次)",
        "あなたの", "", "どの時代にノスタルジーを感じますか？",
        "どのクリエイター（いる場合）（カンマで区切って）？",
        "どのトピック（ある場合）（カンマで区切って）？",
        "", "ノスタルジア", " の "
    ],

    "ar": [
        "من", "FM Da$ani", "nostalgiaTok", "ما اسمك؟", "(التالي)",
        "لك", "", "ما الفترة الزمنية التي تشعر بالحنين إليها؟",
        "ما المبدعين (إن وجد) (استخدم الفواصل)؟",
        "ما المواضيع (إن وجد) (استخدم الفواصل)؟",
        "", "الحنين", " لـ "
    ],

    "he": [
        "מִן", "FM Da$ani", "nostalgiaTok", "מה השם שלך?", "(בא)",
        "שלך", "", "לאיזו תקופה אתה מתגעגע?",
        "אילו יוצרים (אם בכלל) (השתמש בפסיקים)?",
        "אילו נושאים (אם בכלל) (השתמש בפסיקים)?",
        "", "נוסטלגיה", " של "
    ]
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
    pendulum = document.querySelector("#uvula");
    wiggleNumber = 1;
    funnyN = 0;
    funnyC = 1;
    let wiggle; // store interval ID

    function startPendulum() {
        wiggle = setInterval(function () {
            if (funnyC !== 0) {
                pendulum.style.transform = "rotate(" +
                    50 * Math.cos((Math.PI / 180) * Math.sqrt(6 / 50) * funnyN) + "deg)";
                funnyN += 3 * (funnyC / wiggleNumber);
                if (funnyN > (60000 / 16)) {
                    funnyN = 0;
                }
            }
        }, 16); // ~60fps
    }

    function stopPendulum() {
        clearInterval(wiggle);
    }

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            stopPendulum();   // pause when tab is hidden
        } else {
            startPendulum();  // resume when tab is visible
        }
    });

    document.querySelector("#teInput").addEventListener("keyup", function (e) {
        slowLimit = 5;
        wiggleNumber = 10;
        canCount = true;
        if (e.keyCode == 13) {
            enterName();
        }
    });
    document.querySelector("#teInput").addEventListener("click", function (e) {
        document.querySelector("#uvula").style.opacity = "1";
        startPendulum()
    });
    document.querySelector("#teButton").addEventListener("click", function (e) {
            enterName();
    });
};
ns = 0;
slowLimit = 0;
canCount = false;
canWiggleMore = false;
canWiggleLess = false;
slow = setInterval(function () {
    if (canCount) {
        ns+=1;
    }
    if (ns > slowLimit) {
        wiggleNumber = 1; 
        ns = 0;
        canCount = false;
    }
}, 100)
function swapTe(n, f, m, g, t) {
    var ne = document.querySelector("#textEnter");
    var nee = ne.cloneNode(true);
    nee.style.left = "100vw";
    nee.querySelector("b").innerHTML = words[navigator.language][n];
    if (n == 13 || n == 15) {
        if (nee.querySelector("input") !== null) {
            nee.querySelector("input").remove();
        }
    } else {
        nee.querySelector("input").addEventListener("keyup", function (e) { if (e.keyCode == 13) { f() } });
        nee.querySelector("input").value = "";
    }
    if (t) {
        nee.style.height = "calc(var(--ballSize) + 1em) !important";
    }
    nee.querySelector("span").innerHTML = words[navigator.language][m];
    nee.querySelector("span").addEventListener("click", g);
    document.body.append(nee);
    ne.style.left = "-100vw";
    setTimeout(function () {
        nee.style.left = "10vw";
        ne.remove();
        if (t) {
            nee.style.height = "calc(var(--ballSize) + 1em) !important";
        }
        if (n == 13 || n == 15) {
            if (nee.querySelector("input") !== null) {
        nee.querySelector("input").addEventListener("keyup", function (e) {
            slowLimit += 1;
            wiggleNumber = 10;
            canCount = true;
        });
            }
        }
    }, 1000);
}
var userName = ""
function generatePreferences() {
    user.preferences = document.querySelector("#teInput").value;
    makeShapes(user.preferences, ',', 'p', true);  
    swapTe(9, function () {
        swapTe(13, function () { }, 14, function () { }, true)
        user.topics = document.querySelector("#teInput").value;
        makeShapes(user.topics, ',', 't', true);
        runAnimation()
    }, 4, function() {
        swapTe(13, function () { }, 14, function () { }, true)
        user.topics = document.querySelector("#teInput").value;
        makeShapes(user.topics, ',', 't', true);
        runAnimation()
});
    
}
user = {
    year: '',
    preferences: '',
    topics: '',

}
function runAnimation() {
    funnyC = 0;
    funnyN = 0;
    var q = document.querySelector('#uvula');
    document.querySelector('#uvula').style.transition = "0.1s";
    document.querySelector('#uvula').style.transform = "rotate(0deg)";
    setTimeout(function () {
        q.style.top = "calc(-10vh - 1.5em)";
        funnyC = 0;
        funnyN = 0;
        document.querySelector('#uvula').style.transform = "rotate(0deg)";
        setTimeout(function () {
            q.style.top = "calc(-50vh + 1.5em)";
            document.querySelector('#uvula').style.transform = "rotate(0deg)";
            var n = document.querySelectorAll(".teShape");
            var nn = n[Math.floor(Math.random() * [...n].length)]
            nn.style.backgroundColor = "var(--oj)";
            nn.style.opacity = "1";
            setTimeout(function () {
                q.style.top = "calc(-10vh + 1.5em)";
                setTimeout(function () {
                    q.style.top = "calc(-50vh + 1.5em)";
                    for (var i of document.querySelectorAll(".teShape")) {
                        var r = Math.floor(Math.random() * 3);
                        if (r == 0) {
                            i.style.backgroundColor = "var(--oj)";
                            i.style.opacity = "1";
                            var three = i.getBoundingClientRect().width * 0.3;
                            var tee = document.createElement('div');
                            tee.setAttribute('style', `
  width: 0; 
  height: 0; 
  border-top: `+three+`px solid var(--oj);
  border-bottom: `+ three +`px solid var(--oj);
  
  border-left: `+ three +`px solid var(--accent);
`);
                            i.append(tee);
                        }
                        if (r == 1) {
                            i.style.backgroundColor = "var(--oj)";
                            i.style.opacity = "0.5";
                            if (i.children.length == 0) {
                                var three = i.getBoundingClientRect().width * 0.3;
                                var tee = document.createElement('div');
                                tee.setAttribute('style', `
  width: 0; 
  height: 0; 
  border-top: `+ three + `px solid var(--oj);
  border-bottom: `+ three + `px solid var(--oj);
  
  border-left: `+ three + `px solid var(--accent);
`);
                                i.append(tee);
                            }
                        }
                    }
                    setTimeout(function () {
                        q.style.top = "calc(-10vh + 1.5em)";
                        setTimeout(function () {
                            q.style.top = "calc(-50vh + 1.5em)";
                            for (var i of document.querySelectorAll(".teShape")) {
                                if (i.style.backgroundColor != "var(--oj)") {
                                    i.style.backgroundColor = "var(--oj)";
                                    i.style.opacity = "0.5";
                                    if (i.children.length == 0) {
                                        var three = i.getBoundingClientRect().width * 0.3;
                                        var tee = document.createElement('div');
                                        tee.setAttribute('style', `
  width: 0; 
  height: 0; 
  border-top: `+ three + `px solid var(--oj);
  border-bottom: `+ three + `px solid var(--oj);
  
  border-left: `+ three + `px solid var(--accent);
`);
                                        i.append(tee);
                                    }
                                    break;
                                }
                            }
                            setTimeout(function () {
                                q.style.top = "calc(-10vh + 1.5em)";
                                setTimeout(function () {
                                    q.style.top = "calc(-50vh + 1.5em)";
                                    for (var i of document.querySelectorAll(".teShape")) {
                                        i.style.backgroundColor = "var(--oj)";
                                        i.style.opacity = "1";
                                        if (i.children.length == 0) {
                                            var three = i.getBoundingClientRect().width * 0.3;
                                            var tee = document.createElement('div');
                                            tee.setAttribute('style', `
  width: 0; 
  height: 0; 
  border-top: `+ three + `px solid var(--oj);
  border-bottom: `+ three + `px solid var(--oj);
  
  border-left: `+ three + `px solid var(--accent);
`);
                                            i.append(tee);
                                        }
                                    }
                                    swapTe(15, function () { }, 16, function () { }, true);
                                    
                                    setTimeout(function () {
                                        q.style.top = "calc(-10vh + 1.5em)";
                                        setTimeout(function () {
                                            document.querySelector('#uLine').style.backgroundColor = "var(--oj)";
                                            document.querySelector('#uMiniball').style.backgroundColor = "var(--oj)";
                                            setTimeout(function () {
                                                var t = document.querySelector('#textEnter');
                                                t.style.bottom = 0;
                                                setTimeout(function () {
                                                    t.style.height = "calc(100vh - 4em)";
                                                    setTimeout(function () {
                                                        t.style.left = 0;
                                                        t.style.width = "100vw";
                                                    }, 100)
                                                }, 100)
                                            }, 250)
                                        }, 500)
                                    }, 1500)
                                }, 500)
                            }, 500)
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    },1100)
}
function enterName() {
    var i = document.querySelector("#teInput");
    userName = i.value;
    if (userName == "") {
        userName = words[navigator.language][5]
    }
    var ni = document.querySelector("#uNameplate");
    ni.innerText = words[navigator.language][11] + words[navigator.language][12] + userName + words[navigator.language][10] + words[navigator.language][6];
    var ll = ni.getBoundingClientRect().width;
    ni.style.color = "var(--accent)";
    ni.style.transition = "1s";
    ni.style.width = ll + "px";
    setTimeout(function () {
        ni.style.color = "var(--text)";
        ni.style.width = "max-content";
    }, 1000);
    swapTe(7, function () {
        user.year = document.querySelector("#teInput").value;
        makeShapes(user.year,' ','y',true);  
        swapTe(8, generatePreferences, 4, generatePreferences)

    }, 4, {})
}
var shapes = ['circle', 'square', 'triangle', 'rounded square'];
function makeShapes(n, y, extra, t) {
    var properties = [];
    for (var i of n.split(y)) {
        var m = new Math.seedrandom(i + (n.split(y).indexOf(i)) * Math.random() + extra);
        q = Math.floor(m() * 1000000000).toString();
        q = q.toString()
        switch (shapes[Math.round(parseInt(q[0]) / 2.5)]) {
            case "circle":
                properties[0] = "border-radius: 50%;"
                break;
            case "square":
                properties[0] = "";
                break;
            case "triangle":
                properties[0] = `transform: skew(20deg);`
                break;
            case "rounded square":
                properties[0] = "border-radius: 5px";
                break;
        }
        pp = ((parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.70) / 999 - (0.02 / 999) + (parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.15) / 999);
        properties = [properties[0], (parseInt(q.slice(1, 4)) * pp + 0.01 / 999), (parseInt(q.slice(4, 7)) * pp + 0.01 / 999), ((0.5 * parseInt(q.slice(7, 8))) + 0.5) + "em", parseInt(q.slice(7, 8)) + "deg"];
        var sh = document.createElement('div');
        funnyC = 0;
        funnyN = 0;
        document.querySelector('#uvula').style.transform = "rotate(0deg)";
        document.body.append(sh);
        document.querySelector('#uvula').style.transition = "0.1s";
        sh.setAttribute('style', properties[0]);
        sh.setAttribute('class', 'teShape');
        sh.style.top = "90vh";
        sh.style.left = "50vw";
        sh.style.height = "0vh";
        sh.style.left = "0vw";
        sh.style.position = "absolute";
        let twin1 = sh;
        let ppy1 = properties;
        setTimeout(function () { 
            twin1.style.left = "calc(50vw - var(--ballSize)/2 + " + ppy1[1] + "em)";
            twin1.style.opacity = "1";
        twin1.style.top = "calc(" + ppy1[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
        twin1.style.height = ppy1[3];
        twin1.style.width = ppy1[3];
        twin1.style.zIndex = "50";
        twin1.style.transform = "rotate(" + ppy1[4] + "deg)"
        let twin = twin1;
        let ppy = ppy1;
        setTimeout(
            function (twin, ppy) {
                document.querySelector('#uvula').style.transition = "1s";
                twin.style.transition = "0s";
                document.querySelector("#uBall").append(twin);
                twin.style.left = "calc(0% + " + ppy[1] + "em)";
                twin.style.top = "calc(0% + " + ppy[2] + "em)";
                twin.style.height = ppy[3];
                twin.style.width = ppy[3];
                twin.style.transform = "rotate(" + ppy[4] + "deg)";
                twin.style.transition = "1s";
                twin.style.zIndex = "5";
                twin.style.border = "0px solid black"
                funnyC = 1;
            }, 1000, twin, ppy)
        }, 50, twin1, ppy1)
    }
}