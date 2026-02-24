// =======================================================
// Self-contained IndexedDB Helper Functions
// =======================================================
/**
 * Checks if the current browser session is running in a PWA-like display mode.
 * @returns {boolean} True if installed (standalone, fullscreen, or minimal-ui), false otherwise (browser tab).
 */
function isPWA() {
    const displayModes = ["fullscreen", "standalone", "minimal-ui"];

    // Check modern browsers (Chrome, Edge, Firefox, modern Safari on iOS)
    if (window.matchMedia) {
        const anyMatch = displayModes.some((mode) => window.matchMedia(`(display-mode: ${mode})`).matches);
        if (anyMatch) {
            return true;
        }
    }

    // Fallback for older iOS Safari before matchMedia support was reliable
    // navigator.standalone is an iOS-specific property
    if (('standalone' in navigator) && (navigator.standalone)) {
        return true;
    }

    // If none of the above are true, it's likely a normal browser tab
    return false;
}

// --- Example Usage ---



const DB_NAME = 'MyStringBuilderDB';
const STORE_NAME = 'StringStore';
const RECORD_KEY = 'theOneAndOnlyString';
let db = null;

// Helper to open the DB connection (must run first)
function openTheDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = (event) => {
            const dbRef = event.target.result;
            if (!dbRef.objectStoreNames.contains(STORE_NAME)) {
                dbRef.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            resolve();
        };

        request.onerror = (event) => reject('Database error: ' + event.target.error);
    });
}

// Function 1: Reads, modifies (appends), and saves the string
async function appendToStringStore(newValueToAppend) {
    if (!db) await openTheDatabase(); // Ensure DB is open

    // We need a readwrite transaction to append
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    // 1. Get the current value
    const getRequest = store.get(RECORD_KEY);

    getRequest.onsuccess = (event) => {
        let currentValue = event.target.result || ""; // Default to empty string if no data found

        // 2. Modify (append the new value and a newline)
        currentValue += newValueToAppend + "\n";

        // 3. Put the modified value back with the same key
        store.put(currentValue, RECORD_KEY);
    };

    getRequest.onerror = (event) => console.error("Error reading data for append:", event.target.error);

    // Wait for the entire transaction to complete
    return new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve("Append successful");
        transaction.onerror = (event) => reject("Transaction error: " + event.target.error);
    });
}

// Function 2: Reads the long string
async function readStringStore() {
    if (!db) await openTheDatabase(); // Ensure DB is open

    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
        const request = store.get(RECORD_KEY);

        request.onsuccess = (event) => {
            // Resolve the promise with the string data, or an empty string if null
            resolve(event.target.result || "");
        };

        request.onerror = (event) => reject("Error reading string:", event.target.error);
    });
}

// =======================================================
// How to use these functions in your app:
// =======================================================

// Example:


// Run the example function to see it work:
// usageExample();

words = {
    "en-US": [
        "by", //0
        "nostalgiaTok", //1
        "FM Da$ani", //2
        "what's your name?", //3
        "next", //4
        "Your", //5
        "nostalgia", //6
        "what time period are you nostalgic for?", //7
        "what creators (if any) (use commas)?", //8
        "what topics (if any) (use commas)?", //9
        "'s ", //10
        "", //11
        "", //12
        "if you wanna save your nostalgia for later, name it here", //13
        "or not, thats ok", //14
        "video pool", //15
        "a whole lot of 'em", //16
        "player", //17
        "ts plays videos", //18
        "loading...", //19
        "", //20
        "choose this one&nbsp;-&nbsp;", //21
        "delete this one&nbsp;", //22
        "view saved nostalgias", //23
        "next one&nbsp;-&nbsp;", //24
        "less of ts", //25
        "➢", //26
        "more of ts", //27
        "creator", //28
        "topic", //29
        "drag ts down", //30
        "exit ts menu", //31
        "what's good, ", //32
        "anqrzfeubxkmlpwhdvocty", //33
        "abcd_efghijklmn_opqrstuvwxyz_", //34
        "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", //35
        "nvm" //36
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
function jumpLogo() {
    var logo = document.querySelector("#titleBar");
    for (var i of logo.children[0].children) {
        i.style.display = "none";
    }
    logo.style.transition = "0.5s";
    logo.style.transitionTimingFunction = "ease-in";
    var l = logo.style.top;
    logo.style.top = "20vh";
    setTimeout(function (l) { logo.style.transform = "rotateZ(360deg)"; }, 400, l);
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
        document.querySelector("#textEnter").style.left = "4em";
        setTimeout(function () {
            logo.style.left = 0;
            setTimeout(function () {
                logo.style.width = "100vw";
            }, 500)
        }, 1000)
    }, 2600)

}
var stopdouble = false;
var wiggle = "";
var SF = false;
var nostalgiaTokVideos = [];
var tsVideo = {
    creator: "theragingitalian",
    topic: "funny",
    link: "www.tiktok.com/xyz"
}
var newPref = {
    reduced: "",
    excluded: "",
    increased: ""
}
function startFollow() {
    SF = false;
    setTimeout(function () {
        document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
        SF = true;
    }, 100);
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerHTML = words[navigator.language][31];
}
function endFollow() {
    SF = false;
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#exitsw')) {



    }
    document.querySelector('#swipeScreen').style.opacity = 0;
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    setTimeout(function () { document.querySelector('#swipeScreen').style.display = "none"; }, 100)
}
window.onload = function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode
        console.log('Dark mode is preferred');
        const root = document.documentElement;
        root.style.setProperty('--bg', '#002A22');
        root.style.setProperty('--accent', '#4c061d');
        root.style.setProperty('--second', '#4c061d');
        root.style.setProperty('--text', '#A5978B');
        root.style.setProperty('--oj', '#A5978B');
    }
    for (var ii of jintArr) {
        var fg = Array.from(words[navigator.language][33]);
        fg[ii] = words[this.navigator.language][34][Math.floor(Math.random() * words[this.navigator.language][34].length)];
        words[navigator.language][33] = fg.join('');
    }
    document.body.onpointermove = event => {
        const { clientX, clientY } = event;
        if (SF) {
            console.log('q')
            lilWidth = clientY
        } var closest = [10000000, '']; for (var i of list) { var Aa = document.querySelector(i).getBoundingClientRect(); var Aaa = Aa.y + Aa.height / 2; if (closest[0] > Math.abs(lilWidth - Aaa)) { closest[0] = Math.abs(lilWidth - Aaa); closest[1] = i; console.log(closest) } }
        if (closest[1] == "#creator") {
            document.querySelector('#swDrag').innerText = tsVideo.creator;
        }
        if (closest[1] == "#swTopic") {
            document.querySelector('#swDrag').innerText = tsVideo.topic;
        }
        if (closest[1] == "#exitsw") {
            document.querySelector('#swDrag').innerText = "-->";
        }
        document.querySelector(closest[1]).append(document.querySelector('#swDrag'))
    }
    if (localStorage.getItem('nostalgiaTokName') !== null) {
        document.querySelector('#teInput').setAttribute('class', 'noBorder')
        document.querySelector('#teTitle').style.textDecoration = "none";
        document.querySelector('#teButton').style.display = "none";
        userName = localStorage.getItem('nostalgiaTokName');
        document.querySelector('#teTitle').innerHTML = words[navigator.language][32] + localStorage.getItem('nostalgiaTokName') + "?";
        setTimeout(function () {
            var ni = document.querySelector("#uNameplate");

            ni.style.color = "var(--accent)";
            ni.style.transition = "1s";
            ni.style.width = "0px";
            setTimeout(function () {
                ni.innerText = words[navigator.language][11] + words[navigator.language][12] + userName + words[navigator.language][10] + words[navigator.language][6];
                ni.style.color = "var(--text)";
                ni.style.width = "max-content";
                ni.style.left = "calc(50% + 0.5em)"
            }, 1000);
            swapTe(7, function () {
                if (doneAnimation) {
                    user.year = document.querySelector("#teInput").value;
                    makeShapes(user.year, ' ', 'y', true);
                    swapTe(8, generatePreferences, 4, generatePreferences)
                }
            }, 4, function () {
                if (doneAnimation) {
                    user.year = document.querySelector("#teInput").value;
                    makeShapes(user.year, ' ', 'y', true);
                    swapTe(8, generatePreferences, 4, generatePreferences)
                }
            });

            setTimeout(function () {
                fkAround();
            }, 1000);
            document.querySelector("#uvula").style.opacity = "1";
            startPendulum();
            document.documentElement.scrollTop = 0;
            document.documentElement.scrollLeft = 0;
            document.body.style.overflow = "hidden";
        }, 4000, {})
        this.setTimeout(function () { document.querySelector('#teTitle').innerHTML = words[navigator.language][32] + localStorage.getItem('nostalgiaTokName') + "?"; }, 1000);
    }
    for (var i of [...document.querySelectorAll('[words]')]) {
        try {
            ah = additions[this.navigator.language][i.getAttribute('words')].split(" ")
        }
        catch (e) {
            console.log(e);
            ah = ["", ""]
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
        var start = performance.now();
        var UVU = document.querySelector('#uvula');
        UVU.style.transition = "0s";
        UVU.style.transform = "";
        UVU.style.transform = "1s";
        wiggle = setInterval(function () {
            if (funnyC !== 0) {
                pendulum.style.transform = "rotateZ(" + (25 * (Math.cos(0.005 * ((performance.now() - start) * 0.5)))) + "deg)";
            }
        }, 18); // ~60fps
    }

    function stopPendulum() {
        clearInterval(wiggle);
        var UVU = document.querySelector('#uvula');
        UVU.style.transition = "0s";
        UVU.style.transform = "";
        UVU.style.transform = "1s";
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
    document.querySelector("#leftButton").addEventListener("click", function (e) {
        displaySwipe("l");
    });
    document.querySelector("#rightButton").addEventListener("click", function (e) {
        displaySwipe("r");
    });
    this.setTimeout(function () {
        document.documentElement.scrollTop = 0;
        document.documentElement.scrollLeft = 0;
        document.body.style.overflow = "hidden";
    }, 100);
};
ns = 0;
var is8 = true;
slowLimit = 0;
canCount = false;
canWiggleMore = false;
canWiggleLess = false;
slow = setInterval(function () {
    if (canCount) {
        ns += 1;
    }
    if (ns > slowLimit) {
        wiggleNumber = 1;
        ns = 0;
        canCount = false;
    }
}, 10);
var tmo = [];
function swapTe(n, f, m, g, t) {
    //  if (!stopdouble || n >= 19) {
    stopdouble = true;
    console.log('NNN' + n)
    console.log(['numa', n, f, m, g, t])
    if (n == 8) {
        is8 = false;
    }
    var ne = document.querySelector("#textEnter");
    var nee = ne.cloneNode(true);
    nee.style.left = "100vw";
    if (n == 15 || n == 17) {
        nee.innerHTML = `<b id='teTitle'></b><span id='teButton'></span>`
    }
    nee.querySelector("#teTitle").innerHTML = words[navigator.language][n];
    if (nee.querySelector('#b1') !== null) {
        b1.remove();
    }
    if (nee.querySelector('#b2') !== null) {
        b2.remove();
    }
    if (nee.querySelector('#b3') !== null) {
        b3.remove();
    }
    if (nee.querySelector('#b4') !== null) {
        b4.remove();
    }
    if (n == 15 || n == 17 || n == 19 || n == 20) {
        if (nee.querySelector("input") !== null) {
            nee.querySelector("input").remove();
        }
    } else {
        const inputEl = nee.querySelector("input");
        inputEl.value = '';
        inputEl.setAttribute("onkeyup", "if (event.keyCode == 13) { var raeleigh = " + f + "; raeleigh();}");
    }
    if (t) {
        nee.style.height = "calc(var(--ballSize) + 1em) !important";
    }
    nee.querySelector("span").innerHTML = words[navigator.language][m];
    nee.querySelector("span").addEventListener("click", g);
    if (n == 19 || n >= 19) {
        if (nee.querySelector("span") !== null) {
            nee.querySelector("span").remove();
        }
    }
    document.body.append(nee);
    ne.style.left = "-100vw";
    document.querySelector('#teButton').setAttribute('onclick', "var raeleigh = " + f + "; raeleigh();");
    if (n !== 7) {
        document.querySelector('#teButton').style.display = "block";
    } else {
        document.querySelector('#teButton').style.display = "none";
    }
    tmo.push(setTimeout(function () {
        if (n >= 19) {
            console.log("made it >=19");
            try {
                nee.querySelector("#b1").remove();
            } catch (e) {
            }
            try {
                nee.querySelector("#b2").remove();
            } catch (e) {
            }
            try {
                nee.querySelector("#b3").remove();
            } catch (e) {
            }
            try {
                nee.querySelector("#b4").remove();
            } catch (e) {
            }
            if (nee.querySelector('#viewSaved') !== null) {
                nee.querySelector('#viewSaved').remove();
            }
            var b1 = document.createElement('span');
            b1.setAttribute('onclick', 'nextSaved()');
            b1.setAttribute('id', 'b1');
            b1.innerHTML = words[navigator.language][24];
            var b2 = document.createElement('span');
            b2.setAttribute('onclick', 'chooseSaved()');
            b2.setAttribute('id', 'b2');
            b2.innerHTML = words[navigator.language][21];
            var b3 = document.createElement('span');
            b3.setAttribute('onclick', 'delSaved()');
            b3.setAttribute('id', 'b3');
            b3.innerHTML = words[navigator.language][22];
            var b4 = document.createElement('span');
            b4.setAttribute('onclick', 'nvm()');
            b4.setAttribute('id', 'b4');
            b4.innerHTML = words[navigator.language][36];
            setTimeout(function () {
                nee.append(b1);
                nee.append(b2);
                nee.append(b3);
                nee.append(b4);
            }, 100);

        }

        ne.style.backgroundColor = "blue";
        console.log(ne);
        ne.remove();
        nee.style.left = "4em";
        if (n >= 15 && n <= 18) {
            console.log(n);
            nee.style.left = "0em";
            nee.style.width = "100vw";
            nee.style.bottom = "0"
            nee.style.height = "calc(2 * var(--ballSize)) !important"
            nee.setAttribute('class', 'te2');
        }
        try {
            document.querySelector('#teInput').setAttribute('class', 'hasBorder');
            document.querySelector('#teTitle').style.textDecoration = "underline";
            if (n !== 7) {
                document.querySelector('#teButton').style.display = "block";
            } else {
                document.querySelector('#teButton').style.display = "none";
            }
        }
        catch (e) { console.log(e) }
        console.log('NNN' + n)
        if (n !== 7) {
            document.querySelector('#teButton').style.display = "block";
        } else {
            document.querySelector('#teButton').style.display = "none";
        }
        if (t) {
            nee.style.height = "calc(var(--ballSize) + 1em) !important";
        }
        if (n == 15 || n == 17) {
            if (nee.querySelector("input") !== null) {
                nee.querySelector("input").addEventListener("keyup", function (e) {
                    slowLimit += 1;
                    wiggleNumber = 10;
                    canCount = true;
                });
            }

        }

        if (n < 8) {
            if (window.localStorage.getItem('nostalgiaTokSaved') !== null) {
                nee.innerHTML += `<span style="display: block" id="viewSaved" class = "vs2" onclick="swapTe(19,function(){},25,function(){}); getSaved();">` + words[navigator.language][23] + `</span>`
            }
        } else {
            console.log('>=8')
            try {
                document.querySelector("#viewSaved").remove();
                document.querySelector("#viewSaved").remove();
            } catch (e) {
                console.log('errr' + e);
            }
        }
        document.querySelector('#teButton').setAttribute('onclick', "var raeleigh = " + f + "; raeleigh();");
        stopdouble = false;
    }, 500));
    // }
}
var userName = "";
async function saveNew(val) {
    //  alert(val);
    if (isPWA()) {
        await appendToStringStore('[NOSTALGIATOKSPLIT]' + val + '[NTS2]' + JSON.stringify(user))
    } else {
        localStorage.setItem('nostalgiaTokSaved', localStorage.getItem('nostalgiaTokSaved') + '[NOSTALGIATOKSPLIT]' + val + '[NTS2]' + JSON.stringify(user))
    }
}
var Arr = [];
var posinar = 0;
var whatYouScrolled = [];
function nextSaved() {
    funnyC = 0;
    funnyN = 0;
    posinar += 1;
    document.getElementById('uvula').style.transform = ""
    document.getElementById('uvula').style.transition = "0.1s";
    //var uvuPlace = document.getElementById('uBall').getBoundingClientRect();
    setTimeout(function () {
        var minHeight;
        var mH;
        for (var Yuval of document.querySelector('.uBall').children) {
            if ([...document.querySelector('.uBall').children].indexOf(Yuval) == 0) {
                minHeight = parseFloat(Yuval.style.top);
                mH = Yuval;
            } else {
                if ((parseFloat(Yuval.style.top) < minHeight) && Yuval.getBoundingClientRect().width >= 1) {
                    minHeight = parseFloat(Yuval.style.top);
                    mH = Yuval;
                }
            }
        }
        var q;
        var qq;
        var qqq;
        var q4;
        setTimeout(function () {
            q = mH.children[0];
            console.error(q);
            qq = q.getBoundingClientRect();
            qqq = document.querySelector('.uBall').getBoundingClientRect();
            q4 = document.querySelector('.uBall');
            q4.style.transition = "2s";
            document.getElementById('uvula').style.transform = "rotateZ(0deg)"
            document.body.append(q);
            q.setAttribute('style', 'left:' + (qq.x) + 'px; top:' + (qq.y) + 'px; opacity: 1; background-color: var(--accent); width:' + (qq.width) + 'px; height:' + (qq.height) + 'px;');
        },100)
            setTimeout(function () {
                q.setAttribute('style', 'transition: 2s; left:' + (qqq.x) + 'px; top:' + (qqq.y) + 'px; opacity: 1; background-color: var(--accent); width:' + (qqq.width) + 'px; height:' + (qqq.height) + 'px;');
            document.querySelector('.uBall').setAttribute('style', 'position: fixed; transition: 1s; opacity: 0; left: -70vw; top:-20vh; width: 180vw; height: 180vw;');
                document.getElementById('uvula').style.transition = "0s";
            }, 200);
        setTimeout(function () {
            q.setAttribute('style', '');
            document.querySelector('#uvula').append(q);
            document.querySelector('.uBall').setAttribute('class', 'palestine');
            var Gaza = document.querySelector('.palestine');
            document.body.append(Gaza);
            Gaza.style.opacity = 0;
            Gaza.style.position = "absolute";
            Gaza.style.backgroundColor = "var(--bg)";
            Gaza.style.top = "-150vh";
            Gaza.style.width = "100vw";
            Gaza.style.height = "100vh";
            genNext(false, false, true); var nBb = document.createElement('button'); nBb.setAttribute('id', 'teButton'); document.querySelector('#textEnter').append(nBb);
            swapTe(20, function () { }, 25, function () { });
            document.getElementById('uvula').style.transition = "0s";
        }, 2200);
    }, 20);
    setTimeout(function () {
    var ooh = document.querySelector('#uLine');
    var mem = document.querySelector('#uNameplate');
    mem.style.marginTop = "calc(-50vh + 1.5em + 10vh - (var(--ballSize) / 2))";
    ooh.style.height = "calc(10vh - (var(--ballSize) / 2))";
    setTimeout(function () {
        mem.style.marginTop = "";
        ooh.style.height = "calc(50vh - (var(--ballSize) / 2))";
        document.getElementById('uvula').style.transition = "0s";
    }, 1000);
    }, 100)
    document.getElementById('uvula').style.transition = "0s";

}
function genNext(t, two, x) {
    // Select all elements that have an 'id' attribute
    const allElementsWithIds = document.querySelectorAll('[id]');

    // Create a Set to store unique IDs encountered
    const seenIds = new Set();

    // Iterate through the selected elements
    allElementsWithIds.forEach(element => {
        const id = element.id;

        // If the ID has been seen before, remove the current element
        if (seenIds.has(id) && element.getAttribute('special') !== "true") {
           // alert(element.getAttribute('special'))
            element.remove();
        } else {
            // If the ID is new, add it to the Set
            seenIds.add(id);
        }
    });

    document.querySelector('#uvula').append(document.querySelector('.uBall'));
    var clone = document.querySelector('.uBall').cloneNode();
    clone.style.zIndex = "1000";
    words[navigator.language][20] = Arr[posinar % Arr.length].split('[NTS2]')[0] + "(" + (parseFloat(posinar % Arr.length) + 1) + "/" + Arr.length + ")";
    var obj = JSON.parse(Arr[posinar % Arr.length].split('[NTS2]')[1]);
    makeShapes(obj.year, ' ', 'y', false, clone);
    makeShapes(obj.preferences, ',', 'p', false, clone);
    makeShapes(obj.topics, ',', 't', false, clone);
    posinar += 1;
    if (!t) {
        genNext(true, clone, x);
        console.warn(clone);
    } else {
        if (!x) {
          document.querySelector('.uBall').remove();
            document.querySelector('#uvula').append(two);
            console.warn(two);
        }
        if (posinar) {
            setTimeout(function () {
                console.log([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').children])
                var minHeight;
                var mH;
                for (var Yuval of document.querySelector('.uBall').children) {
                    if ([...document.querySelector('.uBall').children].indexOf(Yuval) == 0) {
                        minHeight = parseFloat(Yuval.style.top);
                        mH = Yuval;
                    } else {
                        if ((parseFloat(Yuval.style.top) < minHeight) && Yuval.getBoundingClientRect().width >= 1) {
                            minHeight = parseFloat(Yuval.style.top);
                            mH = Yuval;
                        }
                    }
                }
                mH.append(clone);
                clone.setAttribute('id', 'clonedUball' + Math.random());
//document.body.append(clone);
                console.warn([mH, clone]);
                clone.style.width = "50%";
                clone.style.height = "50%"
                clone.style.top = "25%";
                clone.style.left = "25%";
                clone.setAttribute("special", "true");
                for (var i of clone.querySelectorAll('.teShape')) {
                    i.style.transition = "0s";
                    i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                    i.style.top = (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                    i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                    i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                }
            }, 1500);
        } else {
            setTimeout(function () {
                console.log([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').querySelector('.teShape')])
                var minHeight;
                var mH;
                for (var Yuval of document.querySelector('.uBall').querySelectorAll('.teShape')) {
                    if ([...document.querySelector('.uBall').querySelectorAll('.teShape')].indexOf(Yuval) == 0) {
                        minHeight = parseFloat(Yuval.style.top);
                        mH = Yuval;
                    } else {
                        if ((parseFloat(Yuval.style.top) < minHeight) && Yuval.getBoundingClientRect().width >= 1) {
                            minHeight = parseFloat(Yuval.style.top);
                            mH = Yuval;
                        }
                    }
                }
                mH.append(clone);
                console.warn([mH, clone]);
                clone.setAttribute('id', 'clonedUball');
                clone.style.width = "50%";
                clone.style.height = "50%";
                clone.style.top = "25%";
                clone.style.left = "25%";
                clone.setAttribute("special", "true");
                for (var i of clone.querySelectorAll('.teShape')) {
                    i.style.transition = "0s";
                    i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                    i.style.top = (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                    i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                    i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.body).getPropertyValue('--ballSize'))) * 100 + "%";
                }
            }, 2000);
        }
    }
}
async function getSaved() {
    if (!isPWA()) {
        Arr = localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]');
        if (Arr[0] == "null") {
            Arr.shift();
        }
       genNext(false);
        var pl = document.createElement('div');
        pl.setAttribute('class', 'palestine');
        pl.style.opacity = 0;
        pl.style.position = "absolute";
        pl.style.backgroundColor = "var(--bg)";
        pl.style.top = "-150vh";
        pl.style.width = "100vw";
        pl.style.height = "100vh";
        document.body.append(pl);
        swapTe(20, function () { }, 25, function () { });
       // setTimeout(function () { nextSaved();},1000)
    } else {
        var nArr = await readStringStore();
        Arr = nArr.split('[NOSTALGIATOKSPLIT]');
        Arr.shift();
        genNext(false);
        swapTe(20, function () { }, 25, function () { });
    }
}

list = ['#creator', '#swTopic', '#exitsw'];
function generatePreferences() {
    user.preferences = document.querySelector("#teInput").value;
    makeShapes(user.preferences, ',', 'p', true);
    swapTe(9, function () {
        user.topics = document.querySelector("#teInput").value;
        makeShapes(user.topics, ',', 't', true);
        swapTe(13, function () {
            saveNew(document.querySelector('input').value);
            swapTe(15, function () { }, 16, function () { }, true)

            runAnimation()
        }, 14, function () {
            swapTe(15, function () { }, 16, function () { }, true)
            user.topics = document.querySelector("#teInput").value;
            runAnimation()
        })
    }, 4, function () {
        user.topics = document.querySelector("#teInput").value;
        makeShapes(user.topics, ',', 't', true);
        swapTe(13, function () {
            swapTe(15, function () { }, 16, function () { }, true)

            runAnimation()
        }, 14, function () {
            swapTe(15, function () { }, 16, function () { }, true)
            user.topics = document.querySelector("#teInput").value;
            runAnimation()
        })
    });


}
user = {
    year: '',
    preferences: '',
    topics: '',

}
var ra = false;
function runAnimation() {
    ra = true;
    setTimeout(function () {
        funnyC = 0;
        for (var j of document.querySelector('.uBall').children) {
            try {
                j.children[0].remove();
            } catch (e) {
                console.log(e);
            }
        }
        funnyN = 0;
        var q = document.querySelector('#uvula');
        document.querySelector('#uvula').style.transition = "0.1s";
        document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
        var ooh = document.querySelector('#uLine');
        var mem = document.querySelector('#uMiniball');
        setTimeout(function () {
            q.style.top = "calc(1em)";
            ooh.style.height = "calc(20vh - (var(--ballSize) / 2))";
            ooh.style.top = "calc(50% + 30vh - (var(--ballSize) / 2))";
            mem.style.top = "calc(50% - 2em + 20vh)";
            funnyC = 0;
            funnyN = 0;
            document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
            setTimeout(function () {
                q.style.top = "calc(-50vh + 4em)";
                ooh.style.height = "calc(50vh - (var(--ballSize) / 2))";
                ooh.style.top = "calc(50%)"
                mem.style.top = "calc(50% - 0.5em)";
                document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
                var n = document.querySelectorAll(".teShape");
                var nn = n[Math.floor(Math.random() * [...n].length)]
                nn.style.backgroundColor = "var(--oj)";
                nn.style.opacity = "1";
                nn.style.filter = "";
                setTimeout(function () {
                    q.style.top = "calc(1em)";
                    ooh.style.height = "calc(20vh - (var(--ballSize) / 2))";
                    ooh.style.top = "calc(50% + 30vh - (var(--ballSize) / 2))";
                    mem.style.top = "calc(50% - 2em + 20vh)";
                    setTimeout(function () {
                        q.style.top = "calc(-50vh + 4em)";
                        ooh.style.height = "calc(50vh - (var(--ballSize) / 2))";
                        ooh.style.top = "calc(50%)"
                        mem.style.top = "calc(50% - 0.5em)";
                        for (var i of document.querySelectorAll(".teShape")) {
                            var r = Math.floor(Math.random() * 3);
                            if (r == 0) {
                                i.style.backgroundColor = "var(--oj)";
                                i.style.opacity = "1";
                                i.style.filter = "";
                                /* var three = i.getBoundingClientRect().width * 0.3;
                                 var tee = document.createElement('div');
                                 tee.setAttribute('style', `
       width: 0; 
       height: 0; 
       border-top: `+three+`px solid var(--oj);
       border-bottom: `+ three +`px solid var(--oj);
       
       border-left: `+ three +`px solid var(--accent);
     `);
     
                                 i.append(tee);
                                 */
                            }
                            if (r == 1) {
                                i.style.backgroundColor = "var(--oj)";
                                i.style.opacity = "0.5";
                                //i.innerHTML="";
                                i.style.filter = "blur(5px)";
                                /*   if (i.children.length == 0) {
                                       var three = i.getBoundingClientRect().width * 0.3;
                                       var tee = document.createElement('div');
                                       tee.setAttribute('style', `
         width: 0; 
         height: 0; 
         opacity: 50%;
         border-top: `+ three + `px solid var(--oj);
         border-bottom: `+ three + `px solid var(--oj);
         
         border-left: `+ three + `px solid var(--accent);
       `);
                                       i.append(tee);
                                   }
                                       */
                            }
                        }
                        setTimeout(function () {
                            q.style.top = "calc(1em)";
                            ooh.style.height = "calc(20vh - (var(--ballSize) / 2))";
                            ooh.style.top = "calc(50% + 30vh - (var(--ballSize) / 2))";
                            mem.style.top = "calc(50% - 2em + 20vh)";
                            setTimeout(function () {
                                q.style.top = "calc(-50vh + 4em)";
                                ooh.style.height = "calc(50vh - (var(--ballSize) / 2))";
                                ooh.style.top = "calc(50%)"
                                mem.style.top = "calc(50% - 0.5em)";
                                for (var i of document.querySelectorAll(".teShape")) {
                                    if (i.style.backgroundColor != "var(--oj)") {
                                        i.style.backgroundColor = "var(--oj)";
                                        i.style.opacity = "0.5";
                                        // i.innerHTML = "";
                                        i.style.filter = "blur(5px)";
                                        if (i.children.length == 0) {
                                            var three = i.getBoundingClientRect().width * 0.3;
                                            var tee = document.createElement('div');
                                            tee.setAttribute('style', `
  width: 0; 
  height: 0; 
  opacity: 50%;
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
                                    q.style.top = "calc(1em)";
                                    ooh.style.height = "calc(20vh - (var(--ballSize) / 2))";
                                    ooh.style.top = "calc(50% + 30vh - (var(--ballSize) / 2))";
                                    mem.style.top = "calc(50% - 2em + 20vh)";
                                    setTimeout(function () {
                                        q.style.top = "calc(-50vh + 4em)";
                                        ooh.style.height = "calc(50vh - (var(--ballSize) / 2))";
                                        ooh.style.top = "calc(50%)"
                                        mem.style.top = "calc(50% - 0.5em)";
                                        for (var i of document.querySelectorAll(".teShape")) {
                                            i.style.backgroundColor = "var(--oj)";
                                            i.style.opacity = "1";
                                            //  i.innerHTML = "";
                                            i.style.filter = "";
                                            /*  if (i.children.length == 0) {
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
                                                  */
                                        }
                                        swapTe(17, function () { }, 18, function () { }, true);

                                        setTimeout(function () {
                                            q.style.top = "calc(1em)";
                                            ooh.style.height = "calc(20vh - (var(--ballSize) / 2))";
                                            ooh.style.top = "calc(50% + 30vh - (var(--ballSize) / 2))";
                                            mem.style.top = "calc(50% - 2em + 20vh)";

                                            /* setTimeout(function(){var v = q.getBoundingClientRect()
                                             for(var j of [...document.querySelector('.uBall').children]){
                                                     if(j.getBoundingClientRect().height+j.getBoundingClientRect().y > v.y+v.height){
                                                         j.style.transition = "0.1s";
                                                         j.style.opacity = "0";
                                                     }
                                                 }}, 600) */

                                            setTimeout(function () {
                                                var t = document.querySelector('#textEnter')
                                                t.style.backgroundColor = "var(--bg)";
                                                t.style.color = "var(--bg)";
                                                setTimeout(function () {
                                                    t.style.bottom = 0;
                                                    setTimeout(function () {
                                                        t.style.height = "calc(100vh - 4em)";
                                                        t.style.maxHeight = "calc(100vh - 4em)";
                                                        setTimeout(function () {
                                                            t.style.left = 0;
                                                            t.style.width = "100vw";
                                                            setTimeout(function () {
                                                                t.style.height = "100vh";
                                                                t.style.maxHeight = "100vh"
                                                                t.style.bottom = "-2em";
                                                                var v = document.querySelector('#displayVideos');
                                                                v.style.opacity = "1";
                                                                v.style.display = "block";
                                                                document.querySelector('#leftButton').style.width = "calc(" + document.querySelector('#rightButton').getBoundingClientRect().width + "px - 1em)";
                                                                t.append(v);
                                                            }, 1000)
                                                        }, 100)
                                                    }, 100)
                                                }, 1250)
                                            }, 1700)
                                        }, 1700)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 1100)
    }, 1000);
}
function reverseUball() {
    funnyC = 0;
    funnyN = 0;
    document.querySelector('#uvula').style.transform = "";
    var countt = 0;
    var plLength = document.querySelectorAll(".palestine").length;
    var plList = [...document.querySelectorAll(".palestine")].reverse();
    for (let el of plList) { el.style.transition = "0.5s"; el.style.opacity = "0"; el.style.top = "0px"; }
    // 2. Force browser to commit the initial state
    void document.body.offsetHeight;
    var count2 = 0;
    for (var ie = 0; ie < plLength; ie++) {
        countt = ie;
        let i = plList[ie];
       setTimeout(function () {
            try {
                i.style.transition = "0.5s";
                console.log('GAZA' + i);
                var juheeValues = document.querySelector('.uBall').getBoundingClientRect();
                i.setAttribute('style', '');
                i.style.transition = "0.5s";
                i.style.top = "-20vh";
                i.style.left = "-20vw";
                i.style.width = "calc(40vw + 100vw)";
                i.style.height = "calc(40vw + 100vh)";
                i.style.opacity = 0;
                i.style.backgroundColor = "var(--bg)";
                i.style.zIndex = "100";
                setTimeout(function () {
                    i.style.transition = "0.5s";
                    i.style.top = juheeValues.y + "px";
                    i.style.left = juheeValues.x + "px";
                    i.style.width = juheeValues.width + "px";
                    i.style.height = juheeValues.height + "px";
                    i.style.opacity = 1;
                    i.style.backgroundColor = "var(--accent)";
                    count2++;
                    i.style.zIndex = (100*count2)
                }, 100);
            }
            catch (ee) {
                alert(ee);
            }
   }, ((600 * countt) + 1000))
    }
    setTimeout(function () {
        document.querySelector('#background').style.top = "-50vh";
         setTimeout(function () {
             document.querySelector('.uBall').innerHTML = "";
             funnyC = 1;
             funnyN = 1;
             for (var jh of document.querySelectorAll('.palestine')) {
                 jh.remove();
             }
         }, ((500 * plLength) + 100));
    var e1 = document.createElement('span');
    e1.setAttribute('id', 'teButton');
    e1.style.opacity = 1;
    var e2 = document.createElement('input');
    e2.setAttribute('id', 'teInput');
    document.querySelector('#textEnter').append(e2);
        document.querySelector('#textEnter').append(e1);
        document.querySelector('#textEnter').querySelector('span').remove();
        document.querySelector('#textEnter').querySelector('span').remove();
        document.querySelector('#textEnter').querySelector('span').remove();
        //.querySelector('#textEnter').querySelector('input').remove();
        try {
            //document.querySelector('#textEnter').querySelector('span').remove();
        }
        catch (e) {
            console.log(e);
        }
    swapTe(7, function () {
        user.year = document.querySelector("#teInput").value;
        makeShapes(user.year, ' ', 'y', true);
        swapTe(8, generatePreferences, 4, generatePreferences)

    }, 4, function () {
        user.year = document.querySelector("#teInput").value;
        makeShapes(user.year, ' ', 'y', true);
        swapTe(8, generatePreferences, 4, generatePreferences)
    });
    }, ((1000 * plLength) + 700))
}
function nvm() {
   /* var biggest = 0;
    for (var k of [...document.querySelector('.uBall').children]) {
        if (k.getBoundingClientRect().width > biggest) {
            biggest = k.getBoundingClientRect().width;
        }
    }
    for (var j of [...document.querySelector('.uBall').children]) {
        j.style.transition = ((j.getBoundingClientRect().width / biggest)*30) + "s";
    }
    for (var i of [...document.querySelector('.uBall').children]) {
        i.style.marginLeft = (i.getBoundingClientRect().width / 2);
        i.style.marginTop = (i.getBoundingClientRect().height / 2);
        i.style.opacity = "0";
        i.style.width = "0";
        i.style.height = "0px";
    }
   */
    var bg = document.querySelector('#background');
    bg.style.top = "0px";
    setTimeout(function () {
        reverseUball();
    }, 500)

  
}
function delSaved() {
    Arr.splice((posinar - 1) % Arr.length, 1);
    if (!isPWA()) {
        localStorage.setItem('nostalgiaTokSaved', Arr.join('[NOSTALGIATOKSPLIT]'));
    } else {
        var nArr = Arr.join('[NOSTALGIATOKSPLIT]');
        openTheDatabase().then(async function () {
            await appendToStringStore(nArr);
        });
    }
    nextSaved();
}
function chooseSaved() {
    ra = true;
    swapTe(15, function () { }, 16, function () { }, true);
    runAnimation();
}
var jint = true;
var jintArr = words[navigator.language][35].split(',').reverse();
var jintI = 0;
var doneAnimation = false;
function fkAround2() {
    document.querySelector('#teInput').removeEventListener('keyup', fkAround2);
    var newH = 0;
    if (document.querySelector('.vs2') == null) {
        var newW = document.createElement('span');
        newW.innerText = words[navigator.language][33];
        document.querySelector('#textEnter').append(newW);
        newH = newW.getBoundingClientRect().height;
        newW.remove();
        document.querySelector('#teInput').style.marginBottom = "calc(2em + 5px + " + newH + "px)";
        document.querySelector('#teInput').style.transition = "0s";
    } else {
        document.querySelector('#teInput').style.marginBottom = "calc(2em + 5px + " + document.querySelector('.vs2').getBoundingClientRect.height + "px)";
        document.querySelector('#teInput').style.transition = "0s";
    }
    setTimeout(function () {
        document.querySelector('#teInput').style.transition = "0s";
        document.querySelector('#teInput').style.marginBottom = "1em";
        document.querySelector("#teButton").style.display = "block";
        document.querySelector("#teButton").innerText = words[navigator.language][33];
        setTimeout(function () {
            document.querySelector("#teButton").style.opacity = "1";
            document.querySelector('#teInput').style.transition = 0;
        }, 30);


        console.log('palestine1');
        var a = true;
        let jintt = setInterval(function () {
            console.log('palestine');
            console.log([
                jintI,
                document.querySelector("#teButton").innerText
            ])
            var amharic = Array.from(document.querySelector("#teButton").innerText)
            amharic.splice(jintArr[jintI], 1);
            document.querySelector("#teButton").innerText = amharic.join('');
            if (a === true) {
                console.log(a);
                jintI++;
            }
            if (jintI > 17) { a = false; doneAnimation = true; clearInterval(jintt) }
        }, 100);

    }, 100);
}
function fkAround() {
    jintI = 0;
    document.querySelector("#teButton").style.display = "none";
    document.querySelector('#teInput').addEventListener('keyup', fkAround2)
}
function enterName() {
    var i = document.querySelector("#teInput");
    userName = i.value;
    if (userName == "") {
        userName = words[navigator.language][5]
    } else {

    }
    var ni = document.querySelector("#uNameplate");
    ni.style.color = "var(--accent)";
    ni.style.transition = "1s";
    ni.style.width = "0px";
    setTimeout(function () {
        ni.style.color = "var(--text)";
        ni.style.width = "max-content";
        ni.style.left = "calc(50% + 0.5em)";
        ni.innerText = words[navigator.language][11] + words[navigator.language][12] + userName + words[navigator.language][10] + words[navigator.language][6];
    }, 1000);
    swapTe(7, function () {
        if (doneAnimation) {
            user.year = document.querySelector("#teInput").value;
            makeShapes(user.year, ' ', 'y', true);
            swapTe(8, generatePreferences, 4, generatePreferences)
        }

    }, 4, function () {
        if (doneAnimation) {
            user.year = document.querySelector("#teInput").value;
            makeShapes(user.year, ' ', 'y', true);
            swapTe(8, generatePreferences, 4, generatePreferences)
        }
    });
    setTimeout(function () {
        fkAround();
    }, 2000)
    localStorage.setItem('nostalgiaTokName', userName);
}
var shapes = ['circle', 'rounded square'];
function makeShapes(n, y, extra, t, c) {
    var a;
    if (t) {
        a = document.querySelector('.uBall');
    } else {
        a = c;
    }
    var properties = [];
    console.log([a.innerHTML, t]);
    for (var i of n.split(y)) {
        var m = new Math.seedrandom(i + (n.split(y).indexOf(i)) + extra);
        var Mm = m().toString();
        q = Math.floor(m() * 1000000000).toString();
        for (var k of Mm) {
            if (k == "0") {
                k = "1"
            }
        }
        Mm = parseFloat(Mm);
        console.error(m())
        q = q.toString();
        switch (shapes[Math.floor(parseInt(q[0]) / 5)]) {
            case "circle":
                properties[0] = "50%;"
                break;
            /*case "square":
                properties[0] = "";
                break;
            case "triangle":
                properties[0] = `transform: skew(20deg);`
                break;*/
            case "rounded square":
                properties[0] = "5px";
                break;
        }
        //alert(properties)
        pp = ((parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.70) / 999 - (0.02 / 999) + (parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.17) / 999);
        properties = [properties[0], (parseInt(q.slice(1, 4)) * pp + 0.01 / 999), (parseInt(q.slice(4, 7)) * pp + 0.01 / 999), ((0.5 * parseInt(q.slice(7, 8))) + 0.5) + "em", (parseInt(q.slice(7, 8)) * 50) - 100 + "deg"];
        var sh = document.createElement('div');
        sh.setAttribute('style', 'border-radius:' + properties[0])
        console.log(properties);
        if (t) {
            funnyC = 0;
            funnyN = 0;
            document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
            document.body.append(sh);
            document.querySelector('#uvula').style.transition = "0.1s";
            sh.style.borderRadius = properties[0];
            sh.setAttribute('class', 'teShape');
            sh.style.top = "90vh";
            sh.style.left = "50vw";
            sh.style.height = "0vh";
            sh.style.left = "0vw";
            sh.style.transition = "1s";
            sh.style.position = "absolute";
            sh.style.borderRadius = properties[0]
        }
        let twin1 = sh;
        let ppy1 = properties;
        if (posinar > 0) {

            setTimeout(function () {
                twin1.style.left = "calc(50vw - var(--ballSize)/2 + " + ppy1[1] + "em)";
                twin1.style.opacity = "1";
                twin1.style.top = "calc(" + ppy1[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                twin1.style.height = ppy1[3];
                twin1.style.width = ppy1[3];
                twin1.style.zIndex = "50";
                twin1.style.transform = "rotateZ(" + ppy1[4] + ")";
                twin1.setAttribute('class', 'teShape');
                twin1.style.borderRadius = properties[0];
                console.log(properties[0])
                let twin = twin1;
                let ppy = ppy1;
                setTimeout(
                    function (twin, ppy) {
                        a.append(twin);
                        document.querySelector('#uvula').style.transition = "1s";
                        //twin.style.transition = "0s";

                        twin.style.left = ppy[1] + "em";
                        twin.style.top = ppy[2] + "em";
                        twin.style.height = ppy[3];
                        twin.style.width = ppy[3];
                        twin.style.transform = "rotate(" + ppy[4] + ")";
                        console.log([twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]])
                        twin.style.transition = "1s";
                        twin.style.zIndex = "5";
                        twin.style.border = "0px solid black"
                        twin.setAttribute('class', 'teShape');
                        twin1.style.borderRadius = properties[0];
                        console.log(properties[0])
                        funnyC = 1;
                        for (var yi of document.querySelector('.uBall').children) {
                            yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                        }

                        
                    }, 1000, twin, ppy)
            }, 50, twin1, ppy1)
        } else {

            setTimeout(function () {
                twin1.style.left = "calc(50vw - var(--ballSize)/2 + " + ppy1[1] + "em)";
                twin1.style.opacity = "1";
                twin1.style.top = "calc(" + ppy1[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                twin1.style.height = ppy1[3];
                twin1.style.width = ppy1[3];
                twin1.style.zIndex = "50";
                twin1.style.transform = "rotateZ(" + ppy1[4] + "deg)"
                twin1.setAttribute('class', 'teShape');
                twin1.style.borderRadius = properties[0];
                console.log(properties[0])
                let twin = twin1;
                let ppy = ppy1;
                setTimeout(
                    function (twin, ppy) {
                        a.append(twin);
                        document.querySelector('#uvula').style.transition = "1s";
                        twin.style.transition = "0s";
                        twin.style.left = ppy[1] + "em";
                        twin.style.top = ppy[2] + "em";
                        twin.style.height = ppy[3];
                        twin.style.width = ppy[3];
                        twin.style.transform = "rotateZ(" + ppy[4] + ")";
                        console.log[twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]]
                        twin.style.transition = "1s";
                        twin.style.zIndex = "5";
                        twin.style.border = "0px solid black"
                        twin.setAttribute('class', 'teShape');
                        twin1.style.borderRadius = properties[0];
                        console.log(properties[0])
                        funnyC = 1;
                        for (var yi of document.querySelector('.uBall').children) {
                            yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                        }  
                    }, 1000, twin, ppy)
            }, 50, twin1, ppy1)
        }
    }
}

function displaySwipe(lr) {
    var swsc = document.querySelector('#swipeScreen');
    swsc.setAttribute('style', `
    opacity: 1;
    left: 0;
    top: 2em;
    position: absolute;
    z-index: 500;
    width: 100vw;
    height: calc(100vh - 2em);
    padding: 4em;
   `)
    swsc.style.display = "block";
    setTimeout(function () {
        swsc.style.opacity = 1;

        if (lr == "l") {
            swsc.querySelector('p').innerText = words[navigator.language][25].replace('(', '').replace(')', '') + "↓";
        } else {
            swsc.querySelector('p').innerText = words[navigator.language][27].replace('(', '').replace(')', '') + "↓";
        }
    }, 100);
}