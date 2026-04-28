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
function newConsoleLog(message) {

}
words = {
    "en-US": [
        "by", //0
        "nostalgiaTok", //1
        "peiLamed", //2
        "what's your name?", //3
        "next", //4
        "Your", //5
        "nostalgia", //6
        "what time period are you nostalgic for?", //7
        "what creators?<br><span class='nstLower'>(use double spaces)</span>", //8
        "what topics?<br><span class='nstLower'>(use double spaces)</span>", //9
        "'s ", //10
        "", //11
        "", //12
        "if you wanna save your nostalgia for later, name it here", //13
        "or not, thats ok", //14
        "fishing out your videos", //15
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
        "nvm", //36
		"Last time you used nostalgiaTok" //37
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
var secondFunnyN = 41.23;
var funnyN = 0;
funnyN = secondFunnyN;
var doNow = false;
doNow = true;
var happeningNow = false;
var editMode = false;
function jumpLogo() {
    var logo = document.querySelector("#titleBar");
    for (var i of logo.children[0].children) {
        i.style.display = "none";
    }
    logo.style.transition = "0.25s";
    logo.style.transitionTimingFunction = "ease-in";
    var l = logo.style.top;
    logo.style.top = "20dvh";
    setTimeout(function (l) { logo.style.transform = "rotateZ(360deg)"; }, 200, l);
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
                }, 25 * nsTimesNumber * j);
            }, 50 * nsTimesNumber * j);
        }
    }, 450 * nsTimesNumber);
    setTimeout(function () {
        logo.style.transition = "0.5s";
        logo.style.top = 0;
        logo.style.transition = "0.5s";
        var ll = logo.getBoundingClientRect().width;
        logo.style.width = ll + "px";
        document.querySelector("#textEnter").style.left = "calc(2 * var(--margin))";
        setTimeout(function () {
            logo.style.left = 0;
            setTimeout(function () {
                logo.style.width = "100vw";
            }, 250 * nsTimesNumber)
        }, 500 * nsTimesNumber)
    }, 1000 * nsTimesNumber)

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
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerHTML = words[navigator.language][31];
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = "";
    SF = true;
  //  document.querySelector('#swDrag').style.width = "calc(100vw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";

}
function endFollow() {
    SF = false;
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#swDiff')) {
        editModeAnimation();
    }
    document.querySelector('#touchOverlay').style.display = "block";
    setTimeout(function () {
        document.querySelector('#touchOverlay').style.display = "block";
    },100)
    document.querySelector('#swipeScreen').style.opacity = 0;
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = "";
    setTimeout(function () { document.querySelector('#swipeScreen').style.display = "none"; }, 100)
}
var Arr = [];
var posinar = 0;
var whatYouScrolled = [];
var oldSearches = [];
var canEMAog = true;
function openAh() {
    var ah = document.querySelector('#allHold');
    ah.style.transition = "0.5s";
    ah.style.top = "0";
    ah.style.left = "0";
    ah.style.width = "100vw";
    ah.style.height = "100dvh";
    ah.setAttribute('onclick', '');
    document.querySelector('#playground').style.opacity = 0;
    document.querySelector('#uvula').style.opacity = 0;
    document.querySelector('#uvula').style.display = "none";
}
function editModeAnimation() {
    document.querySelector('#pgTitle').style.opacity = 1;
    document.querySelector('#pgTitle').querySelector('b').innerText = "Search History";
    document.querySelector('#pgTitle').querySelector('button').innerText = "X";
    setTimeout(function () {
        document.querySelector('#pgTitle').style.display = "flex";
    }, 500);
    oldUser.year = user.year;
    oldUser.preferences = user.preferences;
    oldUser.topics = user.topics;
    onScroll = true;
    if (canEMAog) {
        canEMAog = false;
         //Step 1, shrink body
        var ah = document.querySelector('#allHold');
        ah.setAttribute('onclick','openAh();')
        ah.style.transition = "0.5s";
        var pg = document.querySelector('#playground');
        pg.scrollTo(0, pg.scrollHeight);
        var pg1 = pg.querySelectorAll('.pgMain')[pg.querySelectorAll('.pgMain').length - 1];
        if ([...pg.querySelectorAll('.pgMain')].length > 1) {
            var pqb = [...pg.querySelectorAll('.pgMain')[0].querySelectorAll('button')];
            pqb[0].style.display = "block";
            pqb[1].innerText = "search simmilar";
        }
        var swr = window.innerWidth / window.innerHeight;
        // Source - https://stackoverflow.com/a/41371037
        // Posted by Brett DeWoody, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-04-15, License - CC BY-SA 4.0

        document.documentElement.style.setProperty("--screenWidthRatio", swr);
        var pgData = [...pg1.querySelectorAll('.pgData')];
        for (var i in pgData) {
            pgData[i].innerText = pgFormat(user[['year', 'preferences', 'topics'][i]])
        }
        var ahBcr = pg1.querySelector('.pgCover').getBoundingClientRect();
        ah.style.width = ahBcr.width + "px";
        ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";
        ah.style.left = ahBcr.x + "px";
        ah.style.height = ahBcr.height + "px";
        ah.style.borderRadius = "5px";
        ah.style.zIndex = 300;
        pg.style.opacity = 1;
        ah.style.border = "1px solid var(--swText)";
        setTimeout(function () {
            ah.style.transition = "0s";
            pg1.append(ah);
            ah.style.top = "calc(" + (pg1.offsetTop) + "px + 1em)";
            canEMAog = true;
        }, 500)
    }
}
var canEMA = true;
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
function pgFormat(text) {
    var tbr = text.split(',');
    for (var i in tbr) {
        tbr[i].replace(/ /g, '');
        tbr[i] = toTitleCase(tbr[i]);
    }
    if (i == "") {
        tbr.splice(i, 1)
    }
    tbr = tbr.join(', ');
    return tbr;
}
var oldUser = {};
function eMA2(simmilar, pgGivenData, neww) {
    var pg = document.querySelector('#playground');
    pg.scrollTo(0, pg.scrollHeight);
    if (canEMA) {
        canEMA = false;
        var ah = document.querySelector('#allHold');
        var pg = document.querySelector('#playground');
        var pg1 = pg.querySelectorAll('.pgMain')[pg.querySelectorAll('.pgMain').length - 1];
        //Step 2, make animation
        pg.scrollTop = 0;
        //to put in a timeout
        var pg2 = pg1.cloneNode(true);
        var button = pg1.querySelector('#pgSN');
        button.style.transition = "0.5s";
        button.style.opacity = "0";
        setTimeout(function () {
            button.remove()
        }, 1000)
        var pqb = [...pg2.querySelectorAll('button')];
        pqb[0].style.display = "block";
        pqb[1].innerText = "search simmilar";
        var pqb2 = [...pg1.querySelectorAll('button')];
        pqb2[0].setAttribute('class', 'special');
        pqb2[1].setAttribute('class', 'special');
        
        var pg = document.querySelector('#playground');
        pg.scrollTo(0, pg.scrollHeight);
        pg.append(pg2);
        // Source - https://stackoverflow.com/a/11715670
        // Posted by Zhihao, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-04-16, License - CC BY-SA 4.0

        pg.scrollTo(0, pg.scrollHeight);

        pg2.style.transition = "0s";
        pg2.style.opacity = 0;
        //switch the directions
        if (pg2.getAttribute('dir') == 'right') {
            pg2.querySelector('.pgP').style.left = "calc(100vw - var(--margin) - " + pg2.querySelector('.pgP').getBoundingClientRect().width + "px)";
            pg2.querySelector('.pgCover').style.left = "var(--margin)";
            pg2.setAttribute('dir', 'left');
        } else {
            pg2.querySelector('.pgP').style.left = "var(--margin)";
            pg2.querySelector('.pgCover').style.left = "calc(100vw - var(--margin) - (2*var(--margin) * var(--screenWidthRatio)))";
            pg2.setAttribute('dir', 'right');
        }
        pg.scrollTo(0, pg.scrollHeight);

        setTimeout(function () {
            pg.scrollTo(0, pg.scrollHeight);

            pg2.style.transition = "0.5s";
            pg2.style.opacity = 1;
            setTimeout(function () {
                //pg2.style.marginTop = "-6em";
                pg2.querySelector('#allHold').remove();
                var pg = document.querySelector('#playground');
                pg.scrollTo(0, pg.scrollHeight);
                //add the data
                var pg2Data = [...pg2.querySelectorAll('.pgData')];
                for (var i in pg2Data) {
                    pg2Data[i].innerText = pgFormat(user[['year', 'preferences', 'topics'][i]])
                }
                //animate the allHold
                ah.style.transition = "0s";
                ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";
                document.body.append(pg1.querySelector('#allHold'));
                ah = document.querySelector('#allHold');

                var ahBcr = ah.getBoundingClientRect();
                ah.style.width = ahBcr.width;
                var pg = document.querySelector('#playground');
                pg.scrollTo(0, pg.scrollHeight);
                ah.style.transition = "0.3s";
                //kghghj
                // ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";

                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height;
                ah.style.transition = "0.5s";

                pg.scrollTo(0, pg.scrollHeight);
                ahBcr = pg2.querySelector('.pgCover').getBoundingClientRect();
                var ahBcrOG = pg1.querySelector('.pgCover').getBoundingClientRect();
                ah.style.width = ahBcr.width + "px";
                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height + "px";
                editModeFunction(simmilar, pgGivenData, neww);
            }, 500);
            setTimeout(function () {
                ah.style.transition = "0s";
                ah = document.querySelector('#allHold');
                var ahBcr = ah.getBoundingClientRect();
                ah.style.width = ahBcr.width;
                pg.scrollTo(0, pg.scrollHeight);
                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height;
                ah.style.transition = "0.5s";
                ah.style.top = "0";
                ah.style.left = "0";
                ah.style.width = "100vw";
                ah.style.height = "100dvh";
                canEMA = true;
            }, 1000)
        }, 50)
    }

}
function pgCancel(text) {
    var ah = document.querySelector('#allHold');
    var pg = document.querySelector('#playground');
    var pg1 = pg.querySelectorAll('.pgMain')[pg.querySelectorAll('.pgMain').length - 1];
    user.year = oldUser.year;
    user.preferences = oldUser.preferences;
    user.topics = oldUser.topics;
    if (text == "X") {
        ah.style.transition = "0s";
        ah = document.querySelector('#allHold');
        var ahBcr = ah.getBoundingClientRect();
        ah.style.width = ahBcr.width;
        pg.scrollTo(0, pg.scrollHeight);
        ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";
        ah.style.left = ahBcr.x + "px";
        ah.style.height = ahBcr.height + "px";
        ah.style.width = ahBcr.width + "px";
        document.body.append(ah);
        ah.style.transition = "0.5s";
        setTimeout(function () {
            ah.style.top = "0";
            ah.style.left = "0";
            ah.style.width = "100vw";
            ah.style.height = "100dvh";
            canEMA = true;
           document.querySelector('#pgTitle').style.opacity = 0;
            setTimeout(function () {
                document.querySelector('#pgTitle').style.display = "none";
            }, 500);
        }, 100);
    } else {
        document.querySelector('#uvula').style.display = "none";
        pg1.remove();
        if ([...document.querySelectorAll('.pgButtonHold')].length < 2) {
            document.querySelector('.pgButtonHold').innerHTML = `<button style="display:none" onclick="eMA2(false, this)">search this now</button><button onclick="eMA2(true, this)">search again!</button><button id="pgSN" onclick="eMA2(true, this, true)">search new</button>`;
        }
       
        document.querySelector('.uBall').innerHTML = `<div class='teShape'></div><div class='teShape'></div>`;
        swapTe(17, function () { }, 18, function () { }, true);
        document.querySelector('#textEnter').innerHTML += ` <div id="displayVideos">
            <iframe id="videoFrame" src="" frameborder="0" allow="autoplay">
            </iframe>
            <div id="buttonHolder">
                <div id="leftButton" class="sideButton" words="25"></div>
                <div id="saveButton" class="sideButton" words="26"></div>
                <div id="rightButton" class="sideButton" words="27"></div>
            </div>
        </div>`;

        document.querySelector('#fullscreenButton').style.display = "block";
        runAnimation(true);
        editModeAnimation();
        var pgt = document.querySelector('#pgTitle');
        pgt.querySelector('button').innerText = "X";
        
        pgt.querySelector('b').innerText = "Search History";
    }
}

function editModeFunction(simmilar, pgGivenData, neww) {
    //document.querySelector('#playground').scrollTo(0, 0);
    onScroll = false;
    var ah = document.querySelector('#allHold');
    ah.setAttribute('onclick', '');
    var pggd = [...pgGivenData.parentNode.parentNode.querySelectorAll('.pgData')];
    for (var i in pggd) {
        user[['year', 'preferences', 'topics'][i]] = pggd[i].innerText;
    }
    for (var j of [...document.querySelectorAll('.videoOrbit')]) {
        j.remove();
    }
    //
    
    //
    if (simmilar) {
        document.querySelector('#uvula').style.display = "block";
        document.querySelector('.uBall').innerHTML = "";
        var pg = document.querySelector('#pgTitle');
        pg.querySelector('button').innerText = "<";
        pg.querySelector('b').innerText = "Searching...";

        var teTee = document.querySelector('#textEnter');
        var uv = document.querySelector('#uvula');
        var ul = document.querySelector('#uLine');

        teTee.style.left = "100vw";
        setTimeout(function () {
            teTee.innerHTML = `
<b id="teTitle" words="7">what time period are you nostalgic for?</b>
        <input n="0" type="text" class="hasBorder" id="teInput" />
<button id="teButton" words="4" onclick="var raeleigh = function () {
                 document.querySelector('#teButton').remove();
                    user.year = document.querySelector(&quot;#teInput&quot;).value;
                    makeShapes(user.year, ' ', 'y', true);
                    swapTe(8, generatePreferences, 4, generatePreferences)
             
            }; raeleigh();" style="display: block; opacity: 1;">next</button>
<button id="viewSaved"></button>
        <button id="teButton" words="4" onclick='if(doneAnimation && is8){user.year = document.querySelector("#teInput").value;makeShapes(user.year,"","y",true); swapTe(8, generatePreferences, 4, generatePreferences); document.querySelector("#teButton").removeAttribute("onclick","");}'></button>

        <button id="saveThis"></button>
    `;
            var dv = document.createElement('div');
            dv.setAttribute('id', 'displayVideos');
            dv.innerHTML = ` <iframe id="videoFrame" src="" frameborder="0" allow="autoplay">
            </iframe>
            <div id="buttonHolder">
                <div id="leftButton" class="sideButton" words="25"></div>
                <div id="saveButton" class="sideButton" words="26"></div>
                <div id="rightButton" class="sideButton" words="27"></div>
            </div>`;
            document.body.querySelector('#allHold').append(dv);
            document.querySelector("#leftButton").setAttribute("onclick", "displaySwipe('l')");
            document.querySelector("#rightButton").setAttribute("onclick", "displaySwipe('r')");
            setTimeout(function () {
                document.documentElement.scrollTop = 0;
                document.documentElement.scrollLeft = 0;
                document.querySelector("#allHold").style.overflow = "hidden";
            }, 100);
            teTee.style.height = "";
            teTee.style.bottom = "";
            teTee.style.left = "";
            teTee.style.width = "";
            teTee.style.backgroundColor = "";
            try {
                document.querySelector('#displayVideos').style.display = "none";
            }
            catch (e) {
                console.log(e);
            }
            try {
                document.querySelector('#touchOverlay').style.display = "none";
            }
            catch (e) {
                console.log(e);
            }
                try {
                    document.querySelector("#teTitle").style.opacity = 1;
                }
                catch (e) {
                    console.log(e);
                }
                    try {
                        document.querySelector("#teButton").style.opacity = 1;
                    }
                    catch (e) {
                        console.log(e);
                    }
            doneAnimation = true;
            uv.style.top = "";
            uv.style.display = "block";
            ul.style.height = "";
            ul.style.top = "";
            document.querySelector('#fullscreenButton').style.display = "none";
            if (!neww) {
                editMode = true;
                swapTe(7, function () {
                    if (doneAnimation) {
                        user.year = document.querySelector("#teInput").value;
                        makeShapes(user.year, ' ', 'y', true);
                        swapTe(8, generatePreferences, 4, generatePreferences)
                        setTimeout(function () { document.querySelector('#teInput').value = user.preferences; }, 1000)
                    }
                }, 4, function () {
                    if (doneAnimation) {
                        user.year = document.querySelector("#teInput").value;
                        makeShapes(user.year, ' ', 'y', true);
                        swapTe(8, generatePreferences, 4, generatePreferences)
                        setTimeout(function () { document.querySelector('#teInput').value = user.preferences; }, 1000)
                    }
                });
            } else {
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
            }
            setTimeout(function () {
                if (!neww) {
                    document.querySelector('#teInput').value = user.year;
                } else {
                    editMode = false;
                }
            }, 1000)
            for (var i of [...document.querySelectorAll('[words]')]) {
                try {
                    ah = additions[this.navigator.language][i.getAttribute('words')].split(" ")
                }
                catch (e) {
                    newConsoleLog(e);
                    ah = ["", ""]
                }
                try {
                    i.innerHTML = ah[0] + words[this.navigator.language][i.getAttribute('words')] + ah[1];
                }
                catch (e) {
                    newConsoleLog(e);
                    i.innerHTML = ah[0] + words["en-US"][i.getAttribute('words')] + ah[1];
                }
            }
        }, 1000)
        
    }
}
var sVl;
var sVt;
var fullsc;
var itzLater = false;
var onScroll = false;
var nsTimesNumber = 1;

window.addEventListener('scroll', () => {
    if (onScroll) {
        // Get the current vertical scroll position (in pixels)
        var sht = document.querySelector('#pgTitle');
        var tb = document.querySelector('#titleBar');
        if (tb.getBoundingClientRect().top + tb.getBoundingClientRect().height > 0) { sht.style.top = "calc(1em + " + tb.getBoundingClientRect().top + tb.getBoundingClientRect().height + "px)" } else { sht.style.top = 0 }
    }
});
window.addEventListener('touchmove', function (e) {
    if (!e.target.closest('.scrollable')) {
        e.preventDefault(); // Prevents page scrolling
    }
}, { passive: false });
window.onload = function () {
    if (localStorage.getItem('nostalgiaTokName') !== null) {
        nsTimesNumber = 1;
    }
    let root = document.documentElement;

  
        root.style.setProperty('--screenWidthRatio',(screen.width/screen.height));

 

    fullsc = 'no';
    sVl = {
        no: ["calc(((100vw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)))", "calc(((100vw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)", "calc(((100vw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)))"],
        yes: ["calc(100vw - 0.25em)", "-0.25em", "calc(100vw - 0.25em)"]
    }
    sVt = {
        no: ["calc(100dvh - 10em + 4em)", "3.5em"],
        yes: ["calc(100dvh - 0.25em)", "0.25em"]
    }
    var Arr = [];
    var posinar = 0;
    var whatYouScrolled = [];
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode
        newConsoleLog('Dark mode is preferred');
        const root = document.documentElement;
        root.style.setProperty('--bg', 'HSL(60, 2%, 2%)');
        root.style.setProperty('--accent', 'HSL(152, 6%, 15%)');
        root.style.setProperty('--second', 'HSL(340, 100%, 10%)');
        root.style.setProperty('--text', 'HSL(60, 10%, 60%)');
        root.style.setProperty('--oj', ' HSL(11, 42%, 20%)');
        root.style.setProperty('--swText', 'HSL(152, 6%, 50%)');
        root.style.setProperty('--lightText', 'HSL(60, 56%, 10%)');
        root.style.setProperty('--lightText', 'HSL(60, 56%, 10%)');
        root.style.setProperty('--emphText', 'HSL(152, 6%, 40%)');
        root.style.setProperty('--emphBg', 'HSL(60, 2%, 96%)');
        root.style.setProperty('--contrast', 'HSL(60, 2%, 5%)');
        /*
         * :root {
    --bg: HSL(60, 56%, 90%);
    --accent: HSL(152, 6%, 70%);
    --second: HSL(340, 85%, 60%);
    --text: HSL(60, 56%, 90%);
    --font: 'GlacialIndifference';
    --ballSize: 10em;
    --oj: HSL(11, 42%, 58%);
    --swText: HSL(152, 6%, 50%);
    --lightTxt: HSL(60, 56%, 90%);
}
*/
    }
    newConsoleLog(1);
    for (var ii of jintArr) {
        var fg = Array.from(words[navigator.language][33]);
        fg[ii] = words[this.navigator.language][34][Math.floor(Math.random() * words[this.navigator.language][34].length)];
        words[navigator.language][33] = fg.join('');
    }
    newConsoleLog(2);
    document.querySelector("#allHold").onpointermove = event => {
      //  document.querySelector('#touchOverlay').style.display = "none";
        const { clientX, clientY } = event;
        if (SF) {
            newConsoleLog('q')
            lilWidth = clientY
            var closest = [10000000, '']; for (var i of list) { var Aa = document.querySelector(i).getBoundingClientRect(); var Aaa = Aa.y + Aa.height / 2; if (closest[0] > Math.abs(lilWidth - Aaa)) { closest[0] = Math.abs(lilWidth - Aaa); closest[1] = i; newConsoleLog(closest) } }
            if (closest[1] == "#creator") {
                document.querySelector('#swDrag').innerText = tsVideo.creator;
               // document.querySelector('#touchOverlay').style.display = "block";
            }
            if (closest[1] == "#swTopic") {
                document.querySelector('#swDrag').innerText = tsVideo.topic;
               // document.querySelector('#touchOverlay').style.display = "block";
            }
            if (closest[1] == "#swDiff") {
                document.querySelector('#swDrag').innerText = "search";
               // document.querySelector('#touchOverlay').style.display = "block";
                //eMA2();
            }
            if (closest[1] == "#exitsw") {
                document.querySelector('#swDrag').innerText = "-->";
               
            }
            document.querySelector('#swDrag').style.width = "calc(100vw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";
            document.querySelector(closest[1]).append(document.querySelector('#swDrag'))

        }
    }
    newConsoleLog(3);
    if (localStorage.getItem('nostalgiaTokName') !== null) {
        document.querySelector('#teInput').setAttribute('class', 'noBorder')
        document.querySelector('#teTitle').style.textDecoration = "none";
        document.querySelector('#textEnter').style.left = "calc(2 * var(--margin))";
        document.querySelector('#textEnter').style.width = " calc(100vw - (4 * var(--margin)) - 2em)";
        document.querySelector('#teButton').style.display = "none";
        userName = localStorage.getItem('nostalgiaTokName');
        document.querySelector('#teTitle').innerHTML = words[navigator.language][32] + localStorage.getItem('nostalgiaTokName') + "?";
        setTimeout(function () {
            var ni = document.querySelector("#uNameplate");
            ni.style.color = "var(--accent)";
            ni.style.transition = "0.5s";
            ni.style.width = "0px";
            setTimeout(function () {
                ni.innerText = words[navigator.language][11] + words[navigator.language][12] + userName + words[navigator.language][10] + words[navigator.language][6];
                ni.style.color = "var(--text)";
                ni.style.width = "max-content";
                ni.style.left = "calc(50% + 0.5em)"
                setTimeout(function () {
                    ni.style.transition = "1s";
                    ni.style.left = "calc(50% - " + (ni.getBoundingClientRect().width / 2) +"px + 0.5em)"
                }, 500);
            }, 500);
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
            newConsoleLog(4);
            setTimeout(function () {
                fkAround();
            }, 500);
            document.querySelector("#uvula").style.opacity = "1";
            startPendulum();
            document.documentElement.scrollTop = 0;
            document.documentElement.scrollLeft = 0;
            document.querySelector("#allHold").style.overflow = "hidden";
        }, 2000, {})
        newConsoleLog(5);
        this.setTimeout(function () {
            document.querySelector('#teTitle').innerHTML = words[navigator.language][32] + localStorage.getItem('nostalgiaTokName') + "?";
            document.querySelector('#textEnter').style.left = "calc(2 * var(--margin))";
            document.querySelector('#textEnter').style.width = " calc(100vw - (4 * var(--margin)) - 2em)";
        }, 1000);
    }
    newConsoleLog(6);
    for (var i of [...document.querySelectorAll('[words]')]) {
        try {
            ah = additions[this.navigator.language][i.getAttribute('words')].split(" ")
        }
        catch (e) {
            newConsoleLog(e);
            ah = ["", ""]
        }
        try {
            i.innerHTML = ah[0] + words[this.navigator.language][i.getAttribute('words')] + ah[1];
        }
        catch (e) {
            newConsoleLog(e);
            i.innerHTML = ah[0] + words["en-US"][i.getAttribute('words')] + ah[1];
        }
    }
    newConsoleLog(7);

    if (!itzLater) {
        jumpLogo();
    }
    pendulum = document.querySelector("#uvula");
    wiggleNumber = 1;
    funnyC = 1; newConsoleLog('HERE');
  
    newConsoleLog(8);
    function startPendulum() {
      //  var start = performance.now();
        wiggle = setInterval(function () {
            if (funnyC !== 0) {
                pendulum.style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN*30) * 0.5)))) + "deg)";
				if(doNow){
					newConsoleLog(pendulum.style.transform);
					doNow = false;
				}
				funnyN +=1;
            }
        }, 18); // ~60fps
    }
    newConsoleLog(9);
    function stopPendulum() {
        clearInterval(wiggle);
        var UVU = document.querySelector('#uvula');
        UVU.style.transition = "0s";
        UVU.style.transform = "";
        UVU.style.transform = "0.5s";
    }
    newConsoleLog(10);

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            stopPendulum();   // pause when tab is hidden
        } else {
            startPendulum();  // resume when tab is visible
        }
    });
    newConsoleLog(11);
    document.querySelector("#teInput").addEventListener("keyup", function (e) {
        slowLimit = 5;
        wiggleNumber = 10;
        canCount = true;
        if (e.keyCode == 13) {
            enterName();
        }
    });
    newConsoleLog(12);
    document.querySelector("#teInput").addEventListener("click", function (e) {
        document.querySelector("#uvula").style.opacity = "1";
        startPendulum()
    });
    newConsoleLog(13);
    document.querySelector("#teButton").addEventListener("click", function (e) {
        enterName();
    });
    newConsoleLog(14);
    document.querySelector("#leftButton").setAttribute("onclick", "displaySwipe('l')");
    document.querySelector("#rightButton").setAttribute("onclick", "displaySwipe('r')");
    setTimeout(function () {
        document.documentElement.scrollTop = 0;
        document.documentElement.scrollLeft = 0;
        document.querySelector("#allHold").style.overflow = "hidden";
    }, 100);
    newConsoleLog(15);
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
    newConsoleLog('NNN' + n)
    newConsoleLog(['numa', n, f, m, g, t])
    if (n == 8) {
        is8 = false;
    }
    var ne = document.querySelector("#textEnter");
    var nee = ne.cloneNode(true);
    nee.style.left = "100vw";
    if (n == 15 || n == 17) {
        nee.innerHTML = `<b id='teTitle'></b><button id='teButton'></button>`
    }
    nee.querySelector("#teTitle").innerHTML = words[navigator.language][n];
    if (n == 15 || n == 17 || n == 19 || n == 20) {
        if (nee.querySelector("input") !== null) {
            nee.querySelector("input").remove();
        }
    } else {
        const inputEl = nee.querySelector("input");
        inputEl.value = '';
       
        inputEl.setAttribute("onkeyup", "if (event.keyCode == 13) { var raeleigh = " + f + "; this.blur(); setTimeout(function(){raeleigh()},100)}");
    }
    if (t) {
        nee.style.height = "calc(var(--ballSize) + 1em)  ";
    }
    nee.querySelector("button").innerHTML = words[navigator.language][m];
    //nee.querySelector("button").addEventListener("click", g);
    if (n == 19 || n >= 19) {
        if (nee.querySelector("button") !== null) {
            nee.querySelector("button").remove();
        }
    }
    if (!([...document.querySelector("#allHold").querySelectorAll('.teTextEnter')].length > 1) && !([...document.querySelector("#allHold").querySelectorAll('.te2')].length > 1)) {
        var inputEl = nee.querySelector("input");
        if (editMode) {
            if (n == 7) {
                inputEl.value = user.year;
            }
            if (n == 8) {
                inputEl.value = user.preferences;
            }
            if (n == 9) {
                inputEl.value = user.topics;
            }
        }
        document.querySelector("#allHold").append(nee);
    }
    var inputEl = nee.querySelector("input");
    if (editMode) {
        if (n == 7) {
            inputEl.value = user.year;
        }
        if (n == 8) {
            inputEl.value = user.preferences;
        }
        if (n == 9) {
            inputEl.value = user.topics;
        }
    }
    ne.style.left = "-100vw";
    document.querySelector('#teButton').setAttribute('onclick', "var raeleigh = " + g + "; raeleigh();");
    if (n !== 7 && document.querySelector('#teButton') !== "undefined") {
        document.querySelector('#teButton').style.display = "block";
    } else {
        document.querySelector('#teButton').style.display = "none";
    }
    tmo.push(setTimeout(function () {
        if (n >= 19) {
            newConsoleLog("made it >=19");
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
            var b1 = document.createElement('button');
            b1.setAttribute('onclick', 'nextSaved()');
            b1.setAttribute('id', 'b1');
            b1.innerHTML = words[navigator.language][24];
            var b2 = document.createElement('button');
            b2.setAttribute('onclick', 'chooseSaved()');
            b2.setAttribute('id', 'b2');
            b2.innerHTML = words[navigator.language][21];
            var b3 = document.createElement('button');
            b3.setAttribute('onclick', 'delSaved()');
            b3.setAttribute('id', 'b3');
            b3.innerHTML = words[navigator.language][22];
            var b4 = document.createElement('button');
            b4.setAttribute('onclick', 'nvm()');
            b4.setAttribute('id', 'b4');
            b4.innerHTML = words[navigator.language][36];
            setTimeout(function () {
                nee.append(b1);
                nee.append(b2);
                nee.append(b3);
                nee.append(b4);
            }, 50);

        }

        ne.style.backgroundColor = "blue";
        newConsoleLog(ne);
        ne.remove();
        if (document.querySelectorAll('.teTextEnter').length > 1) {
            document.querySelectorAll('.teTextEnter')[1].remove();
            try {
                document.querySelectorAll('.teTextEnter')[1].remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
        }
        nee.style.left = "calc(2 * var(--margin))";
        if (n >= 15 && n <= 18) {
            newConsoleLog(n);
            nee.style.left = "0em";
            nee.style.width = "100vw";
            nee.style.bottom = "0"
            nee.style.height = "calc(2 * var(--ballSize))  "
            nee.setAttribute('class', 'te2');
        }
        try {
            document.querySelector('#teInput').setAttribute('class', 'hasBorder');
            document.querySelector('#teTitle').style.textDecoration = "";
            if (n !== 7 && document.querySelector('#teButton') !== "undefined") {
                document.querySelector('#teButton').style.display = "block";
            } else {
                document.querySelector('#teButton').style.display = "none";
            }
        }
        catch (e) { newConsoleLog(e) }
        newConsoleLog('NNN' + n)
        if (n !== 7 ) {
            document.querySelector('#teButton').style.display = "block";
        } else {
            document.querySelector('#teButton').style.display = "none";
        }
        if (t) {
            nee.style.height = "calc(var(--ballSize) + 1em)  ";
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
                nee.innerHTML += `<button style="display: block" id="viewSaved" class = "vs2" onclick="swapTe(19,function(){},25,function(){}); getSaved();">` + words[navigator.language][23] + `</button>`
            }
            var inputEl = nee.querySelector("input");
            if (editMode) {
                if (n == 7) {
                    inputEl.value = user.year;
                }
                if (n == 8) {
                    inputEl.value = user.preferences;
                }
                if (n == 9) {
                    inputEl.value = user.topics;
                }
            }
        } else {
            newConsoleLog('>=8')
            try {
                document.querySelector("#viewSaved").remove();
                document.querySelector("#viewSaved").remove();
            } catch (e) {
                newConsoleLog('errr' + e);
            }
        }
        document.querySelector('#teButton').setAttribute('onclick', "var raeleigh = " + g + "; raeleigh();");
        stopdouble = false;
    }, 250));
    // }
}
var userName = "";
async function saveNew(val) {
    //  newConsoleLog(val);
    if (isPWA()) {
        await appendToStringStore('[NOSTALGIATOKSPLIT]' + val + '[NTS2]' + JSON.stringify(user))
    } else {
        var jsu = localStorage.getItem('nostalgiaTokSaved');
        if (jsu !== null) {
            localStorage.setItem('nostalgiaTokSaved', jsu + '[NOSTALGIATOKSPLIT]' + val + '[NTS2]' + JSON.stringify(user));
        }
        else {
            localStorage.setItem('nostalgiaTokSaved', val + '[NTS2]' + JSON.stringify(user));
        }
       
    }
}

function nextSaved() {
    console.warn("1 cleanup:", document.querySelector('#textEnter').innerHTML);
    if (!happeningNow) {
        happeningNow = true;
        funnyC = 0;
        savefunnyn = funnyN;
        var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075))) * 18;
            //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
            const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075));
            
        newConsoleLog(savefunnyn + 'soupppppppppp');
        var msi = setInterval(function () {
            document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
            if (funnyN >= closest0) {
                funnyN -= 1;
                if (funnyN < closest0) {
                    clearInterval(msi);
                }
            } else {
                funnyN += 1;
                if (funnyN > closest0) {
                    clearInterval(msi);
                }
            }

        }, 18);
    } else {
        var tempvar = 0;
    }
    setTimeout(function () {
        console.warn("2 cleanup:", document.querySelector('#textEnter').innerHTML);
        // funnyN = 0;
        posinar += 1;
        //document.getElementById('uvula').style.transform = ""
        document.getElementById('uvula').style.transition = "opacity 0.1s, top 0.1s, z-index 0.1s, background-color 0.1s, margin-top 0.1s, width 1s, height 0.1s, position 0.1s, left 0.1s, margin-left 0.1s, filter 0.1s";
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
                console.warn("3 cleanup:", document.querySelector('#textEnter').innerHTML);
                q = mH.children[0];
                q.style.filter = "blur(0.25em)";
                console.error(q);
                qq = q.getBoundingClientRect();
                qqq = document.querySelector('.uBall').getBoundingClientRect();
                q4 = document.querySelector('.uBall');
                q4.style.transition = "2s";
                /*document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0.1s, filter 1s  ";
                document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0.1s, filter 1s  ";
                setTimeout(function () {
                    document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, transform 0s, margin-left 1s, filter 1s  ";
                    document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, transform 0s, margin-left 1s, filter 1s  ";

                }, 1500);
                */
               // document.getElementById('uvula').style.transform = "rotateZ(0deg)"
                //funnyN = secondFunnyN;
                document.querySelector("#allHold").append(q);
                q.setAttribute('style', 'left:' + (qq.x) + 'px; top:' + (qq.y) + 'px; opacity: 1; background-color: var(--accent); width:' + (qq.width) + 'px; height:' + (qq.height) + 'px; filter: blur(0.25em);');
            }, 50)
            setTimeout(function () {
                console.warn("4 cleanup:", document.querySelector('#textEnter').innerHTML);
                q.setAttribute('style', 'transition: 2s; left:' + (qqq.x) + 'px; top:' + (qqq.y) + 'px; opacity: 1; background-color: var(--accent); width:' + (qqq.width) + 'px; height:' + (qqq.height) + 'px; z-index: 1000; filter: blur(0.25em);');
                document.querySelector('.uBall').setAttribute('style', 'position: fixed; opacity: 0; left: -70vw; top:-20dvh; width: 180vw; height: 180vw; filter: blur(0.25em);');
              //  document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, transform 0s, margin-left 1s, filter 1s  ";
            }, 100);
            setTimeout(function () {
                console.warn("5 cleanup:", document.querySelector('#textEnter').innerHTML);
                q.setAttribute('style', '');
                document.querySelector('#uvula').append(q);
                document.querySelector('.uBall').setAttribute('class', 'palestine');
                var Gaza = document.querySelector('.palestine');
                document.querySelector("#allHold").append(Gaza);
                Gaza.style.opacity = 0;
                Gaza.style.position = "absolute";
                Gaza.style.backgroundColor = "var(--bg)";
                Gaza.style.top = "-150dvh";
                Gaza.style.filter = "blur(0.25em)";
                Gaza.style.width = "100vw";
                Gaza.style.height = "100dvh";
                genNext(false, false, true);
                var nBb = document.createElement('button'); nBb.setAttribute('id', 'teButton'); document.querySelector('#textEnter').append(nBb);
                // document.querySelector('.uBall').style.filter = "";
                swapTe(20, function () { }, 25, function () { });
                document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
                setTimeout(function () {
                    console.warn("6 cleanup:", document.querySelector('#textEnter').innerHTML);
                    funnyC = 1; newConsoleLog('HERE');
                    happeningNow = false;
                }, 50);
            }, 900);
        }, 10);
        setTimeout(function () {
            var ooh = document.querySelector('#uLine');
            var mem = document.querySelector('#uNameplate');
            mem.style.marginTop = "calc(-50dvh + 1.5em + 10dvh - (var(--ballSize) / 2))";
            ooh.style.height = "calc(10dvh - (var(--ballSize) / 2))";
            setTimeout(function () {
                mem.style.marginTop = "";
                ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
                console.warn("7 cleanup:", document.querySelector('#textEnter').innerHTML);
            }, 500);
        }, 50)
        //document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
    }, tempvar)
}
function genNext(t, two, x) {
    console.warn("8 cleanup:", document.querySelector('#textEnter').innerHTML);
    // Select all elements that have an 'id' attribute
    const allElementsWithIds = document.querySelectorAll('[id]');

    // Create a Set to store unique IDs encountered
    const seenIds = new Set();

    // Iterate through the selected elements
    allElementsWithIds.forEach(element => {
        const id = element.id;

        // If the ID has been seen before, remove the current element
        if (seenIds.has(id) && element.getAttribute('special') !== "true") {
           // newConsoleLog(element.getAttribute('special'))
            element.remove();
        } else {
            // If the ID is new, add it to the Set
            seenIds.add(id);
        }
    });

    document.querySelector('#uvula').append(document.querySelector('.uBall'));
    var clone = document.querySelector('.uBall').cloneNode();
    clone.style.zIndex = "1000";
    words[navigator.language][20] = Arr[posinar % Arr.length].split('[NTS2]')[0].replace('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]',words[navigator.language][37]) + "<br><span class='nstLower'>(" + (parseFloat(posinar % Arr.length) + 1) + " / " + Arr.length + ")</span>";
    var obj = JSON.parse(Arr[posinar % Arr.length].split('[NTS2]')[1]);
    makeShapes(obj.year, ' ', 'y', false, clone);
    makeShapes(obj.preferences, ',', 'p', false, clone);
    makeShapes(obj.topics, ',', 't', false, clone);
   // posinar += 1;
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
                console.warn("9 cleanup:", document.querySelector('#textEnter').innerHTML);
                newConsoleLog([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').children])
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
                clone.style.width = "0px";
                clone.style.length = "0px";
                clone.style.opacity = "0";
                clone.style.transition = "0.5s";
                    mH.append(clone);
                    clone.setAttribute('id', 'clonedUball' + Math.random());
                    //document.querySelector("#allHold").append(clone);
                    console.warn([mH, clone]);
                    clone.style.width = "50%";
                    clone.style.height = "50%"
                    clone.style.top = "25%";
                    clone.style.opacity = "1";
                    clone.style.left = "25%";
                    clone.setAttribute("special", "true");
                    for (var i of clone.querySelectorAll('.teShape')) {
                        i.style.transition = "0s";
                        i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.top = (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                    }
            }, 1100);
        } else {
            setTimeout(function () {
                console.warn("9 cleanup:", document.querySelector('#textEnter').innerHTML);
                newConsoleLog([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').querySelector('.teShape')])
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
                clone.style.width = "0px";
                clone.style.length = "0px";
                clone.style.opacity = "0";
                clone.style.transition = "0.5s";
                    console.warn([mH, clone]);
                    clone.setAttribute('id', 'clonedUball');
                    clone.style.width = "50%";
                    clone.style.opacity = "1";
                    clone.style.height = "50%";
                    clone.style.top = "25%";
                    clone.style.left = "25%";
                    clone.setAttribute("special", "true");
                    for (var i of clone.querySelectorAll('.teShape')) {
                        i.style.transition = "0s";
                        i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.top = (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                    }
            }, 1100);
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
        pl.style.top = "-150dvh";
        pl.style.width = "100vw";
        pl.style.height = "100dvh";
        document.querySelector("#allHold").append(pl);
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

list = ['#creator', '#swTopic', '#swDiff','#exitsw'];
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
            runAnimation()
        })
    }, 4, function () {
        user.topics = document.querySelector('input').value;

        makeShapes(user.topics, ',', 't', true);
        swapTe(13, function () {
            saveNew(document.querySelector('input').value);
            swapTe(15, function () { }, 16, function () { }, true)
            runAnimation()
        }, 14, function () {
            swapTe(15, function () { }, 16, function () { }, true)
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
function runAnimation(bypass) {
    document.querySelector('#pgTitle').style.opacity = 0;
    setTimeout(function () {
        document.querySelector('#pgTitle').style.display = "none";
    }, 500);
    var multiplier = 1;
    if (bypass) {
        multiplier = 0.1
    }
 if (isPWA()) {
      //  await appendToStringStore('[NOSTALGIATOKSPLIT][NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
 } else {
     if (localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]') !== undefined) {
         var totalNST = localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]');
     } else {
         var totalNST = "";
     }
     if (totalNST[0].includes('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]')) {
         totalNST[0] = '[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user)
     }
     else {
             totalNST.unshift('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
     }
     localStorage.setItem('nostalgiaTokSaved', totalNST.join('[NOSTALGIATOKSPLIT]'));
    }
    ra = true;
    setTimeout(function () {
try{
        if (!happeningNow) {
            happeningNow = true;
            funnyC = 0;
            savefunnyn = funnyN;
            var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075))) * 18;
            //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
            const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075));
            newConsoleLog(savefunnyn + 'soupppppppppp');
            var msi = setInterval(function () {
                document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
                if (funnyN >= closest0) {
                    funnyN -= 1;
                    if (funnyN < closest0) {
                        clearInterval(msi);
                    }
                } else {
                    funnyN += 1;
                    if (funnyN > closest0) {
                        clearInterval(msi);
                    }
                }
            
            

            }, 18);
        
            
        } else {
            var tempvar = 0;
        }
        } catch(e){
            alert(e);
            newConsoleLog(e);
        }
        var q = document.querySelector('#uvula');
     //   document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
      //  document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
        setTimeout(function () {
            //document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform: 0s, filter 1s";
            //document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform: 0s, filter 1s";

        }, tempvar);
        //document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
        var ooh = document.querySelector('#uLine');
        var mem = document.querySelector('#uMiniball');
        setTimeout(function () {
            q.style.top = "calc(1em)";
            ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
            ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
            mem.style.top = "calc(50% - var(--margin) + 20dvh)";
            funnyC = 0;
            setTimeout(function () {

                //funnyN = 0;


                //document.querySelector('#uvula').style.transform = "rotateZ(0deg)";

                setTimeout(function () {
                    q.style.top = "calc(-50dvh + 4em)";
                    ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                    ooh.style.top = "calc(50%)"
                    mem.style.top = "calc(50% - 0.5em)";

                   // document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
                    var n = document.querySelectorAll(".teShape");
                    var nn = n[Math.floor(Math.random() * [...n].length)]
                    nn.style.backgroundColor = "var(--oj)";
                    nn.style.opacity = "1";
                    // nn.style.filter = "";
                    setTimeout(function () {
                        q.style.top = "calc(1em)";
                        ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                        ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                        mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                        for (var i of document.querySelectorAll(".teShape")) {
                            if (Math.random() < 0.5) {
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
                        }
                        setTimeout(function () {
                            q.style.top = "calc(-50dvh + 4em)";
                            ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                            ooh.style.top = "calc(50%)"
                            mem.style.top = "calc(50% - 0.5em)";
                          /*  for (var i of document.querySelectorAll(".teShape")) {
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
                                     
                                }
                                if (r == 1) {
                                    i.style.backgroundColor = "var(--oj)";
                                    i.style.opacity = "0.5";
                                    //i.innerHTML="";
                                    //i.style.filter = "blur(0.25em)";
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
                                           
                                }
                    }
                        */
                            setTimeout(function () {
                                q.style.top = "calc(1em)";
                                ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                                mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                                for (var ayi of document.querySelectorAll(".teShape")) {

                                    ayi.style.backgroundColor = "var(--oj)";
                                    ayi.style.opacity = "1";

                                    //  i.innerHTML = "";
                                    ayi.style.filter = "";
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
                                setTimeout(function () {
                                    q.style.top = "calc(-50dvh + 4em)";
                                    ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                                    ooh.style.top = "calc(50%)"
                                    mem.style.top = "calc(50% - 0.5em)";
                                   /* for (var i of document.querySelectorAll(".teShape")) {
                                        if (i.style.backgroundColor != "var(--oj)") {
                                            i.style.backgroundColor = "var(--oj)";
                                            i.style.opacity = "0.5";
                                            // i.innerHTML = "";
                                            // i.style.filter = "blur(0.25em)";
                                            if (i.children.length == 0) {
                                                var three = i.getBoundingClientRect().width * 0.3;
                                            }
                                            break;
                                        }
                                    }*/
                                    setTimeout(function () {
                                        q.style.top = "calc(1em)";
                                        ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                        ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                                        mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                                       
                                        setTimeout(function () {
                                            q.style.top = "calc(-50dvh + 4em)";
                                            ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                                            ooh.style.top = "calc(50%)"
                                            mem.style.top = "calc(50% - 0.5em)";
                                            if (!bypass) {
                                                swapTe(17, function () { }, 18, function () { }, true);
                                            }

                                            setTimeout(function () {
                                                q.style.top = "calc(1em)";
                                                ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                                ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                                                mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                                                document.querySelector('#textEnter').style.background = "";
                                               
                                                

                                                /* setTimeout(function(){var v = q.getBoundingClientRect()
                                                 for(var j of [...document.querySelector('.uBall').children]){
                                                         if(j.getBoundingClientRect().height+j.getBoundingClientRect().y > v.y+v.height){
                                                             j.style.transition = "0.1s";
                                                             j.style.opacity = "0";
                                                         }
                                                     }}, 600) */
                                                setTimeout(function () {
                                                    document.querySelector('.uBall').style.overflow = "visible";
                                                    for (var ji of document.querySelectorAll(".teShape")) {
                                                        ji.style.transition = "1s";
                                                        ji.style.width = "calc(2 * var(--ballSize))";
                                                        ji.style.height = "calc(2 * var(--ballSize))";
                                                        ji.style.marginLeft = "calc(-1 * var(--ballSize))";
                                                        ji.style.marginTop = "calc(-1 * var(--ballSize))"
                                                        //ji.style.filter = "blur(2em)";
                                                        ji.style.opacity = "0"
                                                        ji.style.borderRadius = "50%";
                                                    }
                                                    setTimeout(function () {

                                                        for (var jji of document.querySelectorAll(".teShape")) {
                                                            jji.remove();

                                                        }
                                                    }, 1000)
                                                }, 500);
                                                
                                                setTimeout(function () {
                                                    
                                                    var t = document.querySelector('#textEnter')
                                                   t.style.backgroundColor = "var(--bg)";
                                                    t.style.color = "var(--bg)";
                                                  
                                                    
                                                    t.style.background = "radial-gradient( circle at 100%, var(--bg), rgba(0,0,0,0.2) 50%, var(--bg) 75%, rgba(0,0,0,0.05) 75% );";
                                                   
                                                    setTimeout(function () {
                                                        t.style.bottom = 0;
                                                        setTimeout(function () {
                                                            t.style.height = "calc(100dvh - 4em)";
                                                            t.style.maxHeight = "calc(100dvh - 4em)";
                                                            t.style.opacity = "1";
                                                            setTimeout(function () {
                                                                t.style.left = 0;
                                                                t.style.width = "100vw";
                                                                setTimeout(function () {
                                                                    t.style.height = "100dvh";
                                                                    t.style.maxHeight = "100dvh"
                                                                    t.style.bottom = "-var(--margin)";
                                                                    var v = document.querySelector('#displayVideos');
                                                                    v.style.opacity = "1";
                                                                    v.style.display = "block";
                                                                    document.querySelector('#leftButton').style.width = "calc(" + document.querySelector('#rightButton').getBoundingClientRect().width + "px - 1em)";
                                                                    t.append(v);
                                                                    funnyC = 1; newConsoleLog('HERE');
                                                                    v.style.top = "6em";
                                                                    var tOo = document.querySelector('#touchOverlay');
                                                                    tOo.style.top = "4em";
                                                                    tOo.style.display = "block";
                                                                    v.style.bottom = "2em";
                                                                    happeningNow = false;
                                                                    var TOOO = document.querySelector('#touchOverlay');
                                                                    document.querySelector('#teTitle').style = "opacity:0; transition: 1s;";
                                                                    TOOO.addEventListener('touchstart', function (event) {
                                                                        newConsoleLog("ts");
                                                                        initialTouchX = event.touches[0].clientX;
                                                                        initialTouchY = event.touches[0].clientY;
                                                                    });

                                                                    // TOUCH END
                                                                    TOOO.addEventListener('touchend', function (event) {
                                                                        newConsoleLog("te");
                                                                        finalTouchX = event.changedTouches[0].clientX;
                                                                        finalTouchY = event.changedTouches[0].clientY;
                                                                        handleTouch(initialTouchX, finalTouchX, swipeUp, swipeDown);
                                                                    });

                                                                    // MOUSE DOWN
                                                                    TOOO.addEventListener('mousedown', function (event) {
                                                                        newConsoleLog("md");
                                                                        initialTouchX = event.clientX;
                                                                        initialTouchY = event.clientY;
                                                                    });

                                                                    // MOUSE UP
                                                                    TOOO.addEventListener('mouseup', function (event) {
                                                                        newConsoleLog("mu");
                                                                        finalTouchX = event.clientX;
                                                                        finalTouchY = event.clientY;
                                                                        handleTouch(initialTouchX, finalTouchX, swipeUp, swipeDown);
                                                                    });
                                                                }, 500 * multiplier)
                                                            }, 50 * multiplier)
                                                        }, 50 * multiplier)
                                                    }, 625 * multiplier)
                                                }, 950 * multiplier)
                                            }, 850 * multiplier)
                                        }, 250 * multiplier)
                                    }, 250 * multiplier)
                                }, 250 * multiplier)
                            }, 250 * multiplier)
                        }, 250 * multiplier)
                    }, 250 * multiplier)
                }, 250 * multiplier)
            }, 550 * multiplier)
        }, tempvar);


    }, 500);
}
function requestTheFullscreen(a) {
    var video = document.querySelector('iframe');
    var touchOverlay = document.querySelector('#touchOverlay');
    var fullscreenButton = document.querySelector('#fullscreenButton');
    var Tee = document.querySelector('#textEnter');
    Tee.style.transition = "0s";
    if (a) {
        fullsc = 'yes';
		document.querySelector('#uvula').style.display = "none";
    video.style.width = "100vw";
    video.style.height = "100dvh";
    video.style.left = "0";
    video.style.top = "-4em";
     touchOverlay.style.width = "100vw";
    touchOverlay.style.height = "100dvh";
    touchOverlay.style.left = "0";
    touchOverlay.style.top = "0";
    Tee.style.zIndex = "152";
    video.style.zIndex = "152";
    touchOverlay.style.zIndex = "153";
        fullscreenButton.setAttribute('onclick', 'requestTheFullscreen(false)');
        fullscreenButton.innerText = '↖';
        for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 1;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 0;
        }
    } else {
        fullsc = 'no';
        video.style.width = "calc(calc(100dvh - 10em) * (9/16))";
        video.style.height = "calc(-10em + 100dvh)";
        video.style.left = "calc((100vw - ((100dvh - 10em) * (9/16)))/2)";
        video.style.top = "0em";
        touchOverlay.style.width = "calc(calc(100dvh - 10em) * (9/16))";
        touchOverlay.style.height = "calc(100dvh - 10em)";
        touchOverlay.style.left = "calc((100vw - ((100dvh - 10em) * (9/16)))/2)"
        touchOverlay.style.top = "4em";
        fullscreenButton.setAttribute('onclick', 'requestTheFullscreen(true)')
        fullscreenButton.innerText = '↘';
         Tee.style.zIndex = "0";
    video.style.zIndex = "0";
        touchOverlay.style.zIndex = "1";
        for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 0;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 1;
        }
    }
}
function removeAllEventListeners(element) {
    if (!(element instanceof Element)) {
        throw new Error("Provided argument is not a DOM element.");
    }
    const newElement = element.cloneNode(true); // true = clone children
    element.parentNode.replaceChild(newElement, element);
    return newElement; // Return the new element reference
}
var dontRun = false;
function reverseUball() {
    if (!happeningNow) {
        happeningNow = true;
        funnyC = 0;
        savefunnyn = funnyN;
         var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075))) * 18;
            //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
            const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075));
            
        newConsoleLog(savefunnyn + 'soupppppppppp');
        var msi = setInterval(function () {
            document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
            if (funnyN >= closest0) {
                funnyN -= 1;
                if (funnyN < closest0) {
                    clearInterval(msi);
                }
            } else {
                funnyN += 1;
                if (funnyN > closest0) {
                    clearInterval(msi);
                }
            }

        }, 18);
    } else {
        var tempvar = 0;
    }
    setTimeout(function () {
        // funnyN = 0;
       // document.querySelector('#uvula').style.transform = "";
        var countt = 0;
        var plLength = document.querySelectorAll(".palestine").length;
        var plList = [...document.querySelectorAll(".palestine")].reverse().slice(-5);
        for (let el of plList) { el.style.transition = "0.5s"; el.style.opacity = "0"; el.style.top = "0px"; }
        // 2. Force browser to commit the initial state
        void document.querySelector("#allHold").offsetHeight;
        var count2 = 0;
        for (var ie = 0; ie < plLength; ie++) {
            countt = ie;
            let i = plList[ie];
            setTimeout(function () {
                try {
                    i.style.transition = "0.5s";
                    newConsoleLog('GAZA' + i);
                    var juheeValues = document.querySelector('.uBall').getBoundingClientRect();
                    i.setAttribute('style', '');
                    i.style.transition = "0.5s";
                    i.style.top = "0";
                    i.style.left = "0";
                    i.style.width = "calc(40vw + 100vw)";
                    i.style.height = "calc(40vw + 100dvh)";
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
                        i.style.filter = "";
                        i.style.backgroundColor = "var(--accent)";
                        count2++;
                        i.style.zIndex = (100 * count2)
                    }, 50);
                }
                catch (ee) {
                    newConsoleLog(ee);
                }
            }, ((1000 / plList.length) * countt) + 500)
        }
        setTimeout(function () {
            document.querySelector('#background').style.top = "-50dvh";
            setTimeout(function () {
                document.querySelector('.uBall').innerHTML = "";
                funnyC = 1; newConsoleLog('HERE');
                funnyN = 20.94395;
                doNow = true;
                for (var jh of document.querySelectorAll('.palestine')) {
                    jh.remove();
                }
                funnyC = 1; newConsoleLog('HERE');
                happeningNow = false;
            }, (1000));
            var e1 = document.createElement('button');
            e1.setAttribute('id', 'teButton');
            e1.style.opacity = 1;
            var e2 = document.createElement('input');
            e2.setAttribute('id', 'teInput');
            document.querySelector('#textEnter').append(e2);
            document.querySelector('#textEnter').append(e1);
            document.querySelector('#textEnter').querySelector('button').remove();
            document.querySelector('#textEnter').querySelector('button').remove();
            document.querySelector('#textEnter').querySelector('button').remove();
            //.querySelector('#textEnter').querySelector('input').remove();
            try {
                document.querySelector('#textEnter').querySelector('button').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b4').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b3').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b2').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b1').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            //document.querySelector('#textEnter').append(document.querySelector('#textEnter').querySelector('button'));

            swapTe(7, function () {
                user.year = document.querySelector("#teInput").value;
                makeShapes(user.year, ' ', 'y', true);
                swapTe(8, generatePreferences, 4, generatePreferences)

            }, 4, function () {
                user.year = document.querySelector("#teInput").value;
                makeShapes(user.year, ' ', 'y', true);
                swapTe(8, generatePreferences, 4, generatePreferences)
            });
            setTimeout(function () {
                removeAllEventListeners(document.querySelector('#teInput'));
                document.querySelector('#teInput').addEventListener('keyup', fkAround2);
                dontRun = false;
            }, 505);
        }, (1000))
    }, tempvar);
}
function nvm() {
    if (!dontRun) {
        posinar = 0;
        document.querySelector('#b4').innerText += "✅";
        dontRun = true;
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
        }, 250)

    }
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
    user = JSON.parse((Arr[posinar % Arr.length].split('[NTS2]')[1]))
    runAnimation();
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
    mH.children[0].style.width = "0";
    mH.children[0].style.height = "0";
    mH.children[0].style.transition = "0.5s";
    setTimeout(function () {
        mH.children[0].remove();
    },1000)
}
var jint = true;
var jintArr = words[navigator.language][35].split(',').reverse();
var jintI = 0;
var doneAnimation = false;
function fkAround2() {
    document.querySelector('#teInput').removeEventListener('keyup', fkAround2);
    var newH = 0;
    if (document.querySelector('.vs2') == null) {
        var newW = document.createElement('button');
        newW.innerText = words[navigator.language][33];
        document.querySelector('#textEnter').append(newW);
        newH = newW.getBoundingClientRect().height;
        newW.remove();
        document.querySelector('#teInput').style.marginBottom = "calc(var(--margin) + 5px + " + newH + "px)";
        document.querySelector('#teInput').style.transition = "0s";
    } else {
        document.querySelector('#teInput').style.marginBottom = "calc(var(--margin) + 5px + " + document.querySelector('.vs2').getBoundingClientRect.height + "px)";
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


        newConsoleLog('palestine1');
        var a = true;
        let jintt = setInterval(function () {
            newConsoleLog('palestine');
            newConsoleLog([
                jintI,
                document.querySelector("#teButton").innerText
            ])
            var amharic = Array.from(document.querySelector("#teButton").innerText)
            amharic.splice(jintArr[jintI], 1);
            document.querySelector("#teButton").innerText = amharic.join('');
            if (a === true) {
                newConsoleLog(a);
                jintI++;
            }
            if (jintI > 17) { a = false; doneAnimation = true; clearInterval(jintt) }
        }, 30);

    }, 30);
}
var secondfunnyN = 20.94395;
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
    ni.style.transition = "0.5s";
    ni.style.width = "0px";
    setTimeout(function () {
        ni.style.color = "var(--text)";
        ni.style.width = "max-content";
        ni.style.left = "calc(50% + 0.5em)";
        ni.innerText = words[navigator.language][11] + words[navigator.language][12] + userName + words[navigator.language][10] + words[navigator.language][6];
        setTimeout(function () {
            ni.style.transition = "1s";
            ni.style.left = "calc(50% - " + (ni.getBoundingClientRect().width / 2) + "px + 0.5em)"
        }, 500);
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
    }, 2000 * nsTimesNumber)
    localStorage.setItem('nostalgiaTokName', userName);
}
var shapes = ['circle', 'rounded square'];
var savefunnyn = 0;
function makeShapes(n, y, extra, t, c) {
    var newShi = true;
    var a;
    if (t) {
        a = document.querySelector('.uBall');
    } else {
        a = c;
    }
    var properties = [];
    newConsoleLog([a.innerHTML, t]);
    var Shapez = [];
    var Shapez2 = [];
    var tempvar;
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
        //newConsoleLog(properties)
        pp = ((parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.70) / 999 - (0.02 / 999) + (parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.17) / 999);
        properties = [properties[0], (parseInt(q.slice(1, 4)) * pp + 0.01 / 999), (parseInt(q.slice(4, 7)) * pp + 0.01 / 999), ((0.5 * parseInt(q.slice(7, 8))) + 0.5) + "em", (parseInt(q.slice(7, 8)) * 50) - 100 + "deg"];
        Shapez2.push(properties);
        var sh = document.createElement('div');
        sh.setAttribute('style', 'border-radius:' + properties[0])
        newConsoleLog(properties);
        Shapez.push(sh);
        console.warn(Shapez);
        // if (t) {
        if (posinar == 0) {
            if (!happeningNow) {
                happeningNow = true;
                funnyC = 0;
                savefunnyn = funnyN;
                var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI) / 0.075)) * ((Math.PI) / 0.075))) * 18;
                //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
                const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI) / 0.075)) * ((Math.PI) / 0.075));

                newConsoleLog(savefunnyn + 'soupppppppppp');
                var msi = setInterval(function () {
                    document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
                    if (funnyN >= closest0) {
                        funnyN -= 1;
                        if (funnyN < closest0) {
                            clearInterval(msi);
                        }
                    } else {
                        funnyN += 1;
                        if (funnyN > closest0) {
                            clearInterval(msi);
                        }
                    }

                }, 18);
            } else {
                tempvar = 5
            }
            /*document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
            document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
            setTimeout(function () {
                document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0s, filter 1s";
                document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0s, filter 1s";
 
            }, 1000);
            */
            //document.querySelector('#uvula').style.transform = "rotateZ(0deg)";

        } else {
            console.log('HERE');

            a.append(sh);
            sh.style.left = properties[1] + "em";
            sh.style.opacity = "1";
            sh.style.top = properties[2] + "em";
            sh.style.height = properties[3];
            sh.style.width = properties[3];
            sh.style.zIndex = "50";
            sh.style.transform = "rotateZ(" + properties[4] + ")";
            sh.style.border = "0px solid black";
            sh.setAttribute('class', 'teShape');
            funnyC = 1;
            newShi = false;
        }
        // }
        if (newShi) {
            setTimeout(function () {
                let twin1 = sh;
                let ppy1 = properties;
                if (posinar > 0) {
                    if (t) {
                        document.querySelector('.uBall').style.filter = "blur(0.25em)";
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
                            newConsoleLog(properties[0])
                            let twin = twin1;
                            let ppy = ppy1;
                            setTimeout(
                                function (twin, ppy) {
                                    document.querySelector('.uBall').style.filter = "";
                                    a.append(twin);
                                    // document.querySelector('#uvula').style.transition = "0.5s";
                                    //twin.style.transition = "0s";


                                    twin.style.left = ppy[1] + "em";
                                    twin.style.top = ppy[2] + "em";
                                    twin.style.height = ppy[3];
                                    twin.style.width = ppy[3];
                                    twin.style.transform = "rotate(" + ppy[4] + ")";
                                    newConsoleLog([twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]])
                                    twin.style.transition = "0.5s";
                                    twin.style.zIndex = "5";
                                    twin.style.border = "0px solid black"
                                    twin.setAttribute('class', 'teShape');
                                    twin1.style.borderRadius = properties[0];
                                    newConsoleLog(properties[0])
                                    // funnyC = 0;


                                    //funnyN = secondFunnyN;
                                    doNow = true;
                                    for (var yi of document.querySelector('.uBall').children) {
                                        yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                                    }


                                }, 500, twin, ppy)
                        }, 50, twin1, ppy1)
                    }
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
                        newConsoleLog(properties[0])
                        let twin = twin1;
                        let ppy = ppy1;
                        setTimeout(
                            function (twin, ppy) {
                                a.append(twin);
                                // document.querySelector('#uvula').style.transition = "0.5s";

                                twin.style.transition = "0s";
                                twin.style.left = ppy[1] + "em";
                                twin.style.top = ppy[2] + "em";
                                twin.style.height = ppy[3];
                                twin.style.width = ppy[3];
                                twin.style.transform = "rotateZ(" + ppy[4] + ")";
                                newConsoleLog[twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]]
                                twin.style.transition = "0.5s";
                                twin.style.zIndex = "5";
                                twin.style.border = "0px solid black"
                                twin.setAttribute('class', 'teShape');
                                twin1.style.borderRadius = properties[0];
                                newConsoleLog(properties[0])
                                setTimeout(function () {
                                    funnyC = 1; newConsoleLog('HERE');
                                    happeningNow = false;
                                    doNow = true;
                                }, Math.abs(tempvar - 1000 + 500))
                                for (var yi of document.querySelector('.uBall').children) {
                                    yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                                }
                            }, 500, twin, ppy)
                    }, 50, twin1, ppy1)
                }
            }, tempvar)

        }
        if (t && posinar == 0) {
            var sh3 = [...Shapez];
            setTimeout(function () {
                for (var j of Shapez) {
                    let sh = j
                    var sh2 = j.style;
                    document.querySelector("#allHold").append(sh);
                    sh.style.borderRadius = properties[0];
                    sh.setAttribute('class', 'teShape');
                    sh.style.top = "90dvh";
                    sh.style.left = "50vw";
                    sh.style.height = "0dvh";
                    sh.style.left = "0vw";
                    sh.style.transition = "0.5s";
                    sh.style.position = "absolute";
                    sh.style.transform = "rotate(" + properties[4] + ")";
                    sh.style.borderRadius = properties[0];

                }
            }, tempvar); setTimeout(function () {
                setTimeout(function () {
                    for (sh of Shapez) {
                        let ppyy = Shapez2[Shapez.indexOf(sh)]
                        sh.style.left = "calc(50vw - var(--ballSize)/2 + " + ppyy[1] + "em)";
                        sh.style.opacity = "1";
                        sh.style.top = "calc(" + ppyy[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                        sh.style.height = ppyy[3];
                        sh.style.width = ppyy[3];
                        sh.style.zIndex = "50";
                        sh.style.transform = "rotateZ(" + ppyy[4] + ")";
                        sh.setAttribute('class', 'teShape');
                        sh.style.borderRadius = properties[0];
                        newConsoleLog(properties[0])
                        let twin = sh;
                        let ppy = ppyy;
                        setTimeout(
                            function (twin, ppy) {
                                document.querySelector('.uBall').style.filter = "";
                                a.append(twin);
                                // document.querySelector('#uvula').style.transition = "0.5s";
                                //twin.style.transition = "0s";


                                twin.style.left = ppy[1] + "em";
                                twin.style.top = ppy[2] + "em";
                                twin.style.height = ppy[3];
                                twin.style.width = ppy[3];
                                twin.style.transform = "rotate(" + ppy[4] + ")";
                                newConsoleLog([twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]])
                                twin.style.transition = "0.5s";
                                twin.style.zIndex = "5";
                                twin.style.border = "0px solid black"
                                twin.setAttribute('class', 'teShape');
                                sh.style.borderRadius = properties[0];
                                newConsoleLog(properties[0])
                                // funnyC = 0;


                                //funnyN = secondFunnyN;
                                doNow = true;
                                for (var yi of document.querySelector('.uBall').children) {
                                    yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                                }


                            }, 500, twin, ppy)
                    }
                }, 50)

            }, tempvar)
        }
    }
}

function displaySwipe(lr) {
    document.querySelector('#touchOverlay').style.display = "none";
    var swsc = document.querySelector('#swipeScreen');
    swsc.setAttribute('style', `
    opacity: 1;
    left: 0;
    top: var(--margin);
    position: absolute;
    z-index: 500;
    width: 100vw;
    height: calc(100dvh - var(--margin));
    padding: calc(var(--margin));
   `)
    swsc.style.display = "block";
    // document.querySelector('#swDrag').style.width = "calc(100vw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";
   
    setTimeout(function () {
        swsc.style.opacity = 1;

        if (lr == "l") {
            swsc.querySelector('p').innerText = words[navigator.language][25].replace('(', '').replace(')', '') + "↓";
        } else {
            swsc.querySelector('p').innerText = words[navigator.language][27].replace('(', '').replace(')', '') + "↓";
        }
    }, 100);
}

var tsMTs = [];
var tsMT = 0;
var canSwipe = true;
var initialTouchX, initialTouchY,
    finalTouchX, finalTouchY;
var swipeThreshold = 100;
var dynamicStyle =
    document.createElement("style");
document.querySelector("#allHold").
    appendChild(dynamicStyle);


function handleTouch(startX, endX,
    onSwipeLeft, onSwipeRight) {
    var horizontalDistance =
        finalTouchX - initialTouchX;
    var verticalDistance =
        finalTouchY - initialTouchY;
    console.log([finalTouchX, initialTouchX, (finalTouchX - initialTouchX), horizontalDistance, swipeThreshold, (horizontalDistance < (-1 * swipeThreshold))])

    if (Math.abs(verticalDistance) >
        Math.abs(horizontalDistance) &&
        Math.abs(verticalDistance) >
        swipeThreshold) {
        if (finalTouchY -
            initialTouchY < 0) {
            swipeUp();
        } else {
            swipeDown();
        }
    } else {
        if (horizontalDistance < (-1 * swipeThreshold)) {
            alert('left');
            editMode = true;
            editModeFunction()
        }
    }
}

function swipeUp() {
    if (canSwipe) {
        //var bcr = document.querySelector('#videoFrame').boundingClientRect();
        canSwipe = false;

        var orbit = document.createElement('div');
        var orbitf = document.createElement('div');
        if (fullsc == 'yes') {
            orbit.style.opacity = "0";
            orbitf.style.opacity = "0.25";
        } else {
            orbitf.style.opacity = "0";
            orbit.style.opacity = "0.25";
        }
        orbit.setAttribute('class', 'videoOrbit no');
        orbit.style.borderRadius = "5px";
        orbit.style.zIndex = "200";
        orbit.style.width = "0.5em";
        orbit.style.height = "0.5em";
        // orbit.style.opacity = "1";
        orbit.style.backgroundColor = "var(--swText)";
        orbit.style.position = "absolute";
        orbit.style.left = sVl['no'][0];
        orbit.style.top = sVt['no'][1];
        orbitf.setAttribute('class', 'videoOrbit yes');
        orbitf.style.borderRadius = "5px";
        orbitf.style.zIndex = "200";
        orbitf.style.width = "0.5em";
        orbitf.style.height = "0.5em";
        // orbitf.style.opacity = "1";
        orbitf.style.backgroundColor = "var(--swText)";
        orbitf.style.position = "absolute";
        orbitf.style.left = sVl['yes'][0];
        orbitf.style.top = sVt['yes'][1];
        tsMT = Math.random();
        orbit.style.transition = "0.25s";
        // orbit.setAttribute('class', "videoOrbit");
        document.querySelector("#allHold").append(orbit);
        orbitf.style.transition = "0.25s";
        // orbitf.setAttribute('class', "videoOrbit");
        document.querySelector("#allHold").append(orbitf);
        tsMTs.push(tsMT);
        setTimeout(function () {
            // Move RIGHT
            orbit.style.left = sVl['no'][0];
            orbit.style.top = sVt['no'][0];
            orbitf.style.left = sVl['yes'][0];
            orbitf.style.top = sVt['yes'][0];
            setTimeout(function () {
                // Move UP
                //  orbit.style.transform = "rotate(90deg)";
                orbit.style.left = sVl['no'][1];
                orbit.style.top = sVt['no'][0];
                orbitf.style.left = sVl['yes'][1];
                orbitf.style.top = sVt['yes'][0];

                setTimeout(function () {
                    // Move LEFT
                    //   orbit.style.transform = "rotate(180deg)";
                    orbit.style.left = sVl['no'][1];
                    orbit.style.top = sVt['no'][1];
                    orbitf.style.left = sVl['yes'][1];
                    orbitf.style.top = sVt['yes'][1];

                    setTimeout(function () {
                        // Move DOWN
                        //  orbit.style.transform = "rotate(270deg)";
                        orbit.style.left = sVl['no'][2];
                        orbit.style.top = sVt['no'][1];
                        orbitf.style.left = sVl['yes'][2];
                        orbitf.style.top = sVt['yes'][1];

                        setTimeout(function () {
                            //    orbit.style.transform = "rotate(360deg)";
                        }, 125);

                    }, 250);

                }, 250);

            }, 250);

        }, 250);

        setTimeout(function () {
                var bigJuf = orbitf.cloneNode();
                var theBigJuf = orbitf.getBoundingClientRect();

                var bigJu = orbit.cloneNode();
                var theBigJu = orbit.getBoundingClientRect();

                bigJu.style.left = theBigJu.x + "px";
                newConsoleLog(theBigJu.left);
                bigJu.style.top = theBigJu.y + "px";
                newConsoleLog(theBigJu.top);
                document.querySelector("#allHold").append(bigJu);
                newConsoleLog([theBigJu, tsMT]);
                bigJu.style.backgroundColor = "var(--swText)";
                var bigJu2 = orbit.cloneNode();
                bigJu2.style.left = theBigJu.x + "px";
                document.querySelector("#allHold").append(bigJu2);
                bigJu2.style.top = theBigJu.y + "px";
                bigJu2.style.backgroundColor = "var(--swText)";
                // bigJu2.style.opacity = "0.2";
                bigJu2.setAttribute('id', 'j' + tsMT.toString().replace('.', 'o'));
                orbit.remove();
                bigJu.style.transition = "0.1s";

                bigJuf.style.left = theBigJuf.x + "px";
                newConsoleLog(theBigJuf.left);
                bigJuf.style.top = theBigJuf.y + "px";
                newConsoleLog(theBigJuf.top);
                document.querySelector("#allHold").append(bigJuf);
                newConsoleLog([theBigJuf, tsMT]);
                bigJuf.style.backgroundColor = "var(--swText)";
                var bigJu2f = orbitf.cloneNode();
                bigJu2f.style.left = theBigJuf.x + "px";
                document.querySelector("#allHold").append(bigJu2f);
                bigJu2f.style.top = theBigJuf.y + "px";
                bigJu2f.style.backgroundColor = "var(--swText)";
                //bigJu2f.style.opacity = "0.2";
                bigJu2f.setAttribute('id', 'j' + tsMT.toString().replace('.', 'o'));
                orbitf.remove();
                bigJuf.style.transition = "0.1s";
                if (fullsc == 'yes') {
                    bigJu2f.style.opacity = "0.25";
                    bigJu2.style.opacity = "0";
                } else {
                    bigJu2.style.opacity = "0.25";
                    bigJu2f.style.opacity = "0";

                }

                setTimeout(function () {
                    if (fullsc == 'no') {
                        bigJu.style.opacity = 1;
                        bigJu.style.width = "calc((100dvh - 10em) * (9/16))";
                        bigJu.style.height = "calc(100dvh - 10em)";
                        bigJu.style.left = "calc((100vw - ((100dvh - 10em) * (9/16)))/2)";
                        bigJu.style.borderRadius = "5px";
                        bigJu.style.top = "4em";
                        bigJu.style.transform = "rotate(360deg)";
                        bigJu.style.backgroundColor = "var(--swText)";
                        bigJu.style.opacity = 0.5;
                        setTimeout(function () {
                            bigJu.style.transition = "0.1s";
                            setTimeout(function () {
                                bigJu.style.backgroundColor = "var(--accent)";

                                setTimeout(function () {
                                    bigJu.remove();
                                    bigJuf.remove();
                                }, 100);
                            }, 100)
                            canSwipe = true;
                        }, 200)
                    } else {
                        bigJuf.style.opacity = 1;
                        bigJuf.style.width = "100vw";
                        bigJuf.style.height = "100dvh";
                        bigJuf.style.left = "0";
                        bigJuf.style.borderRadius = "5px";
                        bigJuf.style.top = "0";
                        bigJuf.style.transform = "rotate(360deg)";
                        bigJuf.style.backgroundColor = "var(--swText)";
                        bigJuf.style.opacity = 0.5;
                        setTimeout(function () {
                            bigJuf.style.transition = "0.1s";
                            setTimeout(function () {
                                bigJuf.style.backgroundColor = "var(--accent)";

                                setTimeout(function () {
                                    bigJuf.remove();
                                    bigJu.remove();
                                }, 100);
                            }, 100)
                            canSwipe = true;
                        }, 200)
                    }
                }, 100)

            }, (tsMT * 1000))
}
};
function swipeDown() {
    if (canSwipe) {
        canSwipe = false;
        if (fullsc == 'yes') {
            var orbit = [...document.querySelectorAll('.yes')];
            orbit = orbit[orbit.length - 1];
            var otherOrbit = [...document.querySelectorAll('.no')];
            otherOrbit = otherOrbit[otherOrbit.length - 1];
            otherOrbit.remove();
        } else {
            var orbit = [...document.querySelectorAll('.no')];
            orbit = orbit[orbit.length - 1];
            var otherOrbit = [...document.querySelectorAll('.yes')];
            otherOrbit = otherOrbit[otherOrbit.length - 1];
            otherOrbit.remove();
        }
       
        orbit.style.transition = "0.25s";
        var o2 = orbit.getBoundingClientRect();
        var bj = document.createElement('div');
        if (fullsc == "no") {
            bj.style.width = "calc((100dvh - 10em) * (9/16))";
            bj.style.height = "calc(100dvh - 10em)";
            bj.style.left = "calc((100vw - ((100dvh - 10em) * (9/16)))/2)";
            bj.style.borderRadius = "5px";
            bj.style.top = "4em";
        } else {
            bj.style.width = "100vw";
            bj.style.height = "100dvh";
            bj.style.left = "0";
            bj.style.borderRadius = "5px";
            bj.style.top = "var(--margin)";
        }
        bj.style.transform = "rotate(360deg)";
        bj.style.transition = "0.125s";
        bj.style.backgroundColor = "var(--swText)";
        bj.style.position = "absolute";
        bj.style.zIndex = 10000;
        bj.style.opacity = 0.5;
        document.querySelector("#allHold").append(bj);
       // orbit.style.opacity = 0;
        setTimeout(function () {
            bj.style.left = o2.left + "px";
            bj.style.top = o2.top + "px";
            bj.style.width = o2.width + "px";
            bj.style.height = o2.height + "px";
            bj.style.transform = "rotate(0deg)";
            bj.style.borderRadius = "5px";
            setTimeout(function () { bj.remove();},255)
            if (o2.x >= window.innerWidth / 2 && o2.y < (window.innerHeight - (6 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
               // bj.remove();
                setTimeout(function () {
                    orbit.style.left = sVl[fullsc][2];
                    orbit.style.top = sVt[fullsc][1];
                }, 125);
                
                setTimeout(function () {
                    orbit.remove();
                    canSwipe = true;
                   // bj.remove();
                }, 250)
            }
            if (o2.x < window.innerWidth / 2 && o2.y < (window.innerHeight - (6 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
                setTimeout(function () {
                   // bj.remove();
                    orbit.style.transform = "rotate(90deg)";
                    orbit.style.left = sVl[fullsc][1];
                    orbit.style.top = sVt[fullsc][0];
                   
                    setTimeout(function () {

                        orbit.style.left = sVl[fullsc][0];
                        orbit.style.top = sVt[fullsc][0];
                        setTimeout(function () {

                            orbit.style.left = sVl[fullsc][2];
                            orbit.style.top = sVt[fullsc][1];
                            
                            setTimeout(function () {
                                orbit.remove();
                                canSwipe = true;
                                //bj.remove();
                            }, 125)
                        }, 125);
                    }, 125);
                }, 125);
            }

            if (o2.y >= (window.innerHeight - (6.1 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
                setTimeout(function () {
                   // bj.remove();

                    orbit.style.left = sVl[fullsc][0];
                    orbit.style.top = sVt[fullsc][0];
                    
                    setTimeout(function () {
                        
                        orbit.style.left = sVl[fullsc][2];
                        orbit.style.top = sVt[fullsc][1];
                       
                        setTimeout(function () {
                            orbit.remove();
                            canSwipe = true;
                           // bj.remove();
                        }, 125)
                    }, 125);
                }, 125);
            }
        }, 125);

        /*
        canSwipe = false;
        //var bcr = document.querySelector('#videoFrame').boundingClientRect();
        var orbit = document.createElement('div');
        orbit.style.borderRadius = "50%";
        orbit.style.width = "0.5em";
        orbit.style.height = "0.5em";
        orbit.style.backgroundColor = "var(--swText)";
        orbit.style.position = "absolute";
        orbit.style.left = sV[0];
        newConsoleLog('svo' + sV[0]);
        orbit.style.top = sV[1];
        orbit.style.zIndex = "100";
        tsMT = (tsMTs[tsMTs.length - 1]);
        tsMTs.pop();
        orbit.style.transition = (tsMT) + "s";
        newConsoleLog(orbit.style.transition);
        document.querySelector("#allHold").append(orbit);
        setTimeout(function () {
            // Move LEFT
            orbit.style.left = "calc(((100vw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)";
            orbit.style.top = "calc(100dvh - 10em + 4em + 0.5em)";

            setTimeout(function () {
                // Move UP
                orbit.style.transform = "rotate(-90deg)";
                orbit.style.left = "calc(((100vw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)";
                orbit.style.top = "3.5em";

                setTimeout(function () {
                    // Move RIGHT
                    orbit.style.transform = "rotate(-180deg)";
                    orbit.style.left = "calc(((100vw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)) + 0.5em)";
                    orbit.style.top = "3.5em";

                    setTimeout(function () {
                        // Move DOWN
                        orbit.style.transform = "rotate(-270deg)";
                        orbit.style.left = "calc(((100vw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)) + 0.5em)";
                        orbit.style.top = "calc(100dvh - 10em + 4em + 0.5em)";

                        setTimeout(function () {
                            orbit.style.transform = "rotate(-360deg)";
                        }, 250);

                    }, 250);

                }, 250);

            }, 250);

        }, 250);

        setTimeout(function () {
            var bigJu = orbit.cloneNode();
            var theBigJu = orbit.getBoundingClientRect();
            bigJu.style.left = theBigJu.left;
            bigJu.style.top = theBigJu.top;
            document.querySelector("#allHold").append(bigJu);
            bigJu.style.backgroundColor = "var(--swText)";
            orbit.remove();
            bigJu.style.transition = "0.1s";
            document.querySelector('#j' + tsMTs[tsMTs.length - 1].toString().replace('.', 'o')).remove();
            tsMTs.pop();
            setTimeout(function () {
                bigJu.style.width = sV[6];
                bigJu.style.height = sV[7];
                bigJu.style.left = sV[8];
                bigJu.style.top = sV[9];
                bigJu.style.transform = "rotate(360deg)";
                bigJu.style.backgroundColor = "var(--swText)";
                setTimeout(function () {
                    bigJu.remove();
                    canSwipe = true;
                }, 100)
            }, 100)
        }, (tsMT * 1000))
        */
    }
};