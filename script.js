//Hello! most of this code is mine, some is from StackOverflow and other helpful websites
var swipeXx = 0;
var swipeInterval = true;
function ssmd(event){ if(swipeInterval){
        swipeInterval = false;swipeXx = event.clientX} setTimeout(function(){swipeInterval = true;}, 1000)}
function ssmu(event){
        var swipeX2 = event.x; var swd = swipeX2-swipeXx; console.log([event.x, swd]); if(Math.abs(swd)>5){ if(swd<0){nextSaved();}else{backSaved();}}}
function sskd(event){if(swipeInterval){
        swipeInterval = false;if(event.keyCode == 39){nextSaved();} if(event.keyCode == 37){backSaved();}} setTimeout(function(){swipeInterval = true;},1000)}
function ssts(event){ if(swipeInterval){
        swipeInterval = false;swipeXx = event.x; console.log(event.x)} setTimeout(function(){swipeInterval = true;}, 1000)}
function ssw(event) {
    if(swipeInterval){
        swipeInterval = false;
    
    const deltaY = Math.sign(event.deltaY);
    const deltaX = Math.sign(event.deltaX);
    if(deltaY > 0 || deltaX > 0){
        nextSaved();
    }else{
        backSaved();
    }
}
setTimeout(function(){swipeInterval = true;}, 1000)
}
function setSavedSwipe(){
document.body.addEventListener('mousedown',ssmd);
    document.body.addEventListener('pointerup',ssmu);
    document.body.addEventListener('keydown', sskd);
    document.body.addEventListener('pointerdown',ssts);
document.body.addEventListener("wheel", ssw);
}

function endSavedSwipe(){
    document.body.removeEventListener('mousedown',ssmd);
    document.body.removeEventListener('pointerup',ssmu);
    document.body.removeEventListener('keydown', sskd);
    document.body.removeEventListener('pointerdown',ssts);
document.body.removeEventListener("wheel", ssw);
}

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
try{
if(isPWA()){
    document.querySelector("#nstFs").remove();
    }
    }
    catch(e){} 




var clearItInterval = setInterval(function(){
    try{
    if(!document.querySelector('#touchOverlay').checkVisibility() || parseInt(document.querySelector('#allHold').width)<90){
        player.pauseVideo();
       }
    }catch(e){
        console.log(e);
    }
    try{
    if(true){
		try{
            var TE = document.querySelector('#textEnter');
            if(TE.innerHTML.includes("null")){
                var TEQ = "";
                try{
                TEQ = TE.querySelector('input').value;
                }catch(e){

                }
                TE.innerHTML=TE.innerHTML.replace(/null/g,'');
                try{
                TE.querySelector('input').value = TEQ;
                }catch(e){}
            }
            try{
                for(var iy of TE.querySelectorAll('button')){
                    if(document.querySelectorAll('#'+iy.getAttribute('id')).length > 1){
                     //   iy.remove();
                    }
                }
            }catch(e){

            }
			for(var iIi of document.querySelector('#textEnter').children){if(iIi.innerText.includes('null')){iIi.remove()}}}
		catch(e){}
        if((document.querySelector('.teFlexx').querySelector('input') && document.querySelector('.teFlexx').querySelector('input').checkVisibility()) && !document.querySelector('.teFlexx').querySelector('#teClear')){
            var teClear = document.createElement('div');
            teClear.setAttribute('id','teClear');
            teClear.innerText = "X";
            teClear.setAttribute('onclick','this.parentNode.querySelector("input").value=""; this.parentNode.querySelector("input").focus()');
            document.body.append(teClear);
            document.querySelector('.teFlexx').insertBefore(teClear, document.querySelector('.teFlexx').querySelector('input'));
        }
        if((!document.querySelector('.teFlexx').querySelector('input') || !document.querySelector('.teFlexx').querySelector('input').checkVisibility()) && document.querySelector('.teFlexx').querySelector('#teClear')){
            document.querySelector('.teFlexx').querySelector('#teClear').remove();
        }
    }
}
catch(e){

}
    if(document.querySelector('#playground').checkVisibility()){
        for(var i of document.querySelectorAll('.pgButtonHold')){
            try{
                i.children[1].remove();
            }
            catch(e){
                newConsoleLog(e);
            }
        }
    }

},500)
function newConsoleLog(message) {
console.log('old'+message)
}
var allowAd = true;
var rateLimit = true;
var tetVar = false;
var words = {
  "en-US": [
    "by", //0
    "nostalgiaWave", //1
    "peiLamed", //2
    "what should i call u? <br><span class='nstLower'>hit enter afterwards ☺️</span>", //3
    "--->", //4
    "your", //5
    "nostalgia", //6
    "what time period are you nostalgic for?<br><span class='nstLower'>(ex 2022, summer 2023, mar 2019 - spring 2023)</span>", //7
    "what creator?<br><span class='nstLower'>(optional, can be changed later)</span>", //8
    "what topic?<br><span class='nstLower'>(optional, can be changed later)</span>", //9
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
    "choose this one", //21
    "delete this one", //22
    "view saved nostalgias", //23
    "next one", //24
    "options", //25
    "➢", //26
    "more of ts", //27
    "search again", //28
    "open video", //29
    "change name", //30
    "unseen vids only", //31
    "what's good, ", //32
    "a-qrzf-ub-kmlpwhdvoc>y", //33
    "abcd_efghijklmn_opqrstudvwxyz_", //34
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", //35
    "nevermind", //36
    "last time you used nostalgiaWave", //37
    "drag me to the option you want", //38
    "spring", //39
    "summer", //40
    "fall", //41
    "winter", //42
    "early", //43
    "mid", //44
    "late", //45
    "jan", //46
    "feb", //47
    "mar", //48
    "apr", //49
    "may", //50
    "jun", //51
    "jul", //52
    "aug", //53
    "sep", //54
    "oct", //55
    "nov", //56
    "dec", //57
    "january", //58
    "february", //59
    "march", //60
    "april", //61
    "may", //62
    "june", //63
    "july", //64
    "august", //65
    "september", //66
    "october", //67
    "november", //68
    "december", //69
    "past 2019 plzz", //70
    "earlier, please :)", //71
    "between 2019 - now plzz", //72
    "sorry, try again plzz", //73
    "tysm btw ☺", //74
    "oopsie!", //75
    `something didn't work<br>try searching again`, //76
    "all watched", //77
    "you watched all the videos for this search", //78
    "still loading", //79
    "more videos will arrive soon, try scrolling to see them", //80
    "✅ -> ❌", //81
    "❌ -> ✅", //82
    "hold again to toggle 2x speed", //83
    "advertisement", //84
    "product of 🇸🇱", //85
    "go fullscreen", //86
    "exit this menu", //87
    "credits", //88
    "or click the '𐄛' menu --> 'install app'", //89
    "or click the '𐄛' menu --> 'apps' --> 'install this site as an app'", //90
    "or click the '𐄛' menu --> 'cast, save, and share' --> 'install app'", //91
    "or click the share menu --> 'add to dock'", //92
    "or click the share menu --> 'install app' or 'add to home screen' ", //93
    "click the share menu --> add to home screen", //94
    "i'm not exactly sure how to do it on your browser <br> but look for an 'add to homescreen'-esque or 'install app'-esque button in the share menu or browser menu and click that", //95
    "click 'install nostalgiaWave'<br>", //96
    "hit this button <br> <button id='nstFirefoxFullscreen'>「 」</button>", //97 
    "made by dice b (aka peiLamed / פילמד) <br><br> help from stack overflow & a little bit of ai debugging <br><br> designed by peiLamed <br><br> product of sierra leone 🇸🇱 <br><br> free palestine 🇵🇸🇸🇩🇨🇩", //98
    "see directions", //99
    "「」 | 『』 | fullscreen available", //100
    "use me instead :)", //101
    "share video", //102
    "your video is loading", //103
    "thx btw :)", //104
    "copied, thx 4 sharing :)", //105
    "enjoy this blast from the past", //106
    "sharing doesn't work on your browser <br> use 'open video' and then share from there", //107
    "search similar", //108
    "search history", //109
    "search again", //110
    "searching...", //111
    "sharing didn't work", //112
    "select this link and copy it :)", //113
    "btw these will go away if u (___). <br> to save ur data permanently, hit the &quot;export&quot; button and read the filename :)", //114
    "delete this app", //115
    "clear your browsing data", //116
    "export",//117
    "copy the data within this text file and paste it in the name entry bar", //118
    "when you clear your browsing data or install/reinstall nostalgiaWave, copy the data of the file that just downloaded (including the word &quot;NOSTALGIAWAVE&quot;) and paste in in the input box when it asks your name<br>", //119
    "got it", //120
"export nostalgiaWave", //121
"for permanent saving", //122
"storage full :(", //123
"try deleting some saved nostalgias to free up space.", //124
"year:", //125
"creator:", //126
"topic:", //127
"swipe this box to cycle thru saves" //128
  ],
  "ru": [
"от", //0
"nostalgiaWave", //1
"peiLamed", //2
"kак мне тебя называть? <br><span class='nstLower'>После этого нажмите Enter ☺️</span>", //3
"далее", //4
"твоя", //5
"nostalgia", //6
"по какому периоду времени ты испытываешь ностальгию?<br><span class='nstLower'>(например, 2022, лето 2023, март 2019 - весна 2023)</span>", //7
"kакой автор?<br><span class='nstLower'>(необязательный параметр, можно изменить позже)</span>", //8
"kакая тема?<br><span class='nstLower'>(необязательный параметр, можно изменить позже)</span>", //9
"'s ", //10
"", //11
"", //12
"eсли хотите сохранить свою ностальгию на потом, назовите её здесь", //13

"Или нет, это нормально".toLowerCase(), //14
"Поиск ваших видео".toLowerCase(), //15
"Их очень много".toLowerCase(), //16
"плеер", //17
"TS воспроизводит видео", //18
"Загрузка...", //19
"", //20
"Выберите это, -".toLowerCase(), //21
"Удалить это".toLowerCase(), //22
"Просмотреть сохранённые ностальгии", //23
"Следующее, -".toLowerCase(), //24
"Параметры".toLowerCase(), //25
"➢", //26
"побольше такого", //27
"Поиск снова".toLowerCase(), //28
"Открыть видео".toLowerCase(), //29
"Изменить имя".toLowerCase(), //30
"Только непросмотренные видео".toLowerCase(), //31
"Что хорошего, ".toLowerCase(), //32
"a-qrzf-ub-kmlpwhdvoc>y", //33
"abcd_efghijklmn_opqrstudvwxyz_", //34
"0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", //35
"неважно", //36
"в прошлый раз, когда вы использовали nostalgiaWave", //37
"перетащите меня к нужному варианту", //38
"весна", //39
"лето", //40
"осень", //41
"зима", //42
"начало", //43
"середина", //44
"конец", //45
"январь", //46
"февраль", //47
"март", //48
"апрель", //49
"май", //50
"июнь", //51
"июль", //52
"авг", //53
"сент", //54
"окт", //55
"ноя", //56
"дек", //57
"январь", //58
"февраль", //59
"март", //60
"апрель", //61
"май", //62
"июнь", //63
"июль", //64
"август", //65
"сентябрь", //66
"октябрь", //67
"ноябрь", //68
"декабрь", //69
"после 2019 года, пожалуйста", //70
"пораннее время, пожалуйста :)", //71
"между 2019 годом - сейчас, пожалуйста", //72
"извините, попробуйте еще раз, пожалуйста", //73
"большое спасибо, кстати ☺", //74
"ой!", //75
`что-то не получилось работа<br>попробуйте выполнить поиск снова`, //76
"все просмотрено", //77
"вы просмотрели все видео для этого поиска", //78

"все еще загружается", //79

"cкоро появятся новые видео, попробуйте пролистать их", //80

"✅ -> ❌", //81

"❌ -> ✅", //82

"удерживайте еще раз, чтобы переключить скорость в 2 раза", //83

"реклама", //84

"продукт 🇸🇱", //85

"перейти в полноэкранный режим", //86

"выйти из этого меню", //87

"титры", //88
"или нажмите меню '𐄛' --> 'установить приложение'", //89
"или нажмите меню '𐄛' --> 'приложения' --> 'установить этот сайт как приложение'", //90
"или нажмите меню '𐄛' --> 'транслировать, сохранять и делиться' --> 'установить приложение'", //91
"или нажмите меню 'Поделиться' --> 'Добавить в док'", //92
"или нажмите меню 'Поделиться' --> 'Установить приложение' или 'Добавить на главный экран'", //93

"нажмите меню 'Поделиться' --> 'Добавить на главный экран'", //94
"я не совсем уверен, как это сделать в вашем браузере, <br> но найдите кнопку, похожую на 'Добавить на главный экран' или 'Установить приложение', в меню 'Поделиться' или меню браузера и нажмите на нее'", //95
"нажмите 'Установить nostalgiaWave'<br>", //96
"нажмите эту кнопку <br> <button id='nstFirefoxFullscreen'>「 」</button>", //97
"создано dice b (aka peiLamed / פילמד) <br><br> помощь со Stack Overflow и немного отладки ИИ <br><br> разработано peiLamed <br><br> продукт из Сьерра-Леоне 🇸🇱 <br><br> свободная Палестина 🇵🇸🇸🇩🇨🇩", //98
"см. указания", //99
"「」 | 『』 | доступен полноэкранный режим", //100
"используйте меня вместо :)", //101
"поделиться видео", //102
"ваше видео загружается", //103
"спасибо, кстати :)", //104
"скопировано, спасибо за то, что поделились :)", //105
"наслаждайтесь этим приветом из прошлого", //106
"совместное использование не работает в вашем браузере <br> используйте 'открыть видео', а затем поделитесь оттуда", //107

"поиск похожих", //108
"история поиска", //109
"поиск новых", //110
"поиск...", //111
"совместное использование не сработало", //112
"Выделите эту ссылку и скопируйте её :)", //113
"кстати, эти данные исчезнут, если вы (___). <br> чтобы сохранить данные навсегда, нажмите кнопку «экспорт» и запомните имя файла :)", //114
"удалите это приложение", //115
"очистите историю браузера", //116
"экспорт",//117
"скопируйте содержимое этого текстового файла и вставьте его в поле ввода имени", //118
"когда вы очистите историю браузера или установите/переустановите nostalgiaWave, скопируйте данные из только что скачанного файла (включая слово «NOSTALGIAWAVE») и вставьте их в поле ввода, когда приложение запросит ваше имя<br>", //119
"понятно", //120
"экспорт nostalgiaWave",
"cохранить навсегда", "память переполнена :(",
"попробуйте удалить часть сохраненных воспоминаний, чтобы освободить место.", "год:", //125
"создатель:", //126
"тема:", //127
"Проведите пальцем по экрану, чтобы переключаться между сохранениями.".toLowerCase()

],
  "ja": [
    "によって", "nostalgiaWave", "peiLamed",
    "あなたのことを何と呼べばいいですか？ <br><span class='nstLower'>その後、Enterキーを押してください ☺️</span>", //3
    "次へ", "あなたの", "ノスタルジー",
    "どの時代にノスタルジーを感じますか？<br><span class='nstLower'>(例: 2022年、2023年夏、2019年3月 - 2023年春)</span>",
    "どのクリエイターですか？<br><span class='nstLower'>(任意項目であり、後で変更可能です)</span>",
    "どのトピックですか？<br><span class='nstLower'>(任意項目であり、後で変更可能です)</span>",
    "の ", "", "", "後で見るためにノスタルジーを保存したい場合は、ここに名前を入力してください", "入力しなくても大丈夫です",
    "動画を読み込み中", "大量の動画", "プレイヤー", "動画を再生中", "読み込み中...", "", "これを選択&nbsp;-&nbsp;",
    "これを削除&nbsp;", "保存したノスタルジーを表示", "次へ&nbsp;-&nbsp;", "オプション", "➢", "詳細情報", "再検索",
    "動画を開く", "名前変更", "未視聴のみ", "調子はどう、", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "気にしないで", "最後にnostalgiaWaveを使用した日時",
    "希望するオプションにドラッグしてください", "春", "夏", "秋", "冬", "上旬", "中旬", "下旬", "1月", "2月", 
    "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月",
    "9月", "10月", "11月", "12月", "2019年以降でお願いします", "というか、今年より前でお願いします",
    "2019年から現在までの間でお願いします", "もっと早くお願いします :)", "ありがとう ☺", "おっと！",
    "正常に動作しませんでした<br>もう一度検索してください", "すべて視聴済み", "この検索の動画をすべて視聴しました",
    "まだ読み込み中", "さらに多くの動画が近日公開されますので、スクロールしてご覧ください", "✅ -> ❌", "❌ -> ✅",
    "長押しで2倍速を切り替え", "広告", "シエラレオネ産 🇸🇱", "全画面表示", "メニューを閉じる", "クレジット",
    "または「𐄛」メニュー --> 「アプリをインストール」をクリック",
    "または「𐄛」メニュー --> 「アプリ」 --> 「このサイトをアプリとしてインストール」をクリック",
    "または「𐄛」メニュー --> 「キャスト、保存、共有」 --> 「アプリをインストール」をクリック",
    "または共有メニュー --> 「ドックに追加」をクリック",
    "または共有メニュー --> 「アプリをインストール」または「ホーム画面に追加」をクリック",
    "共有メニューをクリック --> ホーム画面に追加",
    "お使いのブラウザでの方法が正確にわかりません<br>共有メニューやブラウザメニューにある「ホーム画面に追加」または「アプリをインストール」のようなボタンを探してクリックしてください",
    "「nostalgiaWaveをインストール」をクリック<br>",
    "このボタンを押してください <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "制作：dice b (別名 peiLamed / פילמד) <br><br> 協力：stack overflow ＆ aiデバッグ少々 <br><br> デザイン：peiLamed <br><br> シエラレオネ産 🇸🇱 <br><br> パレスチナに自由を 🇵🇸🇸🇩🇨🇩",
    "手順を見る", "「」 | 『』 | 全画面表示が利用可能です", "代わりにこちらを使ってください :)", "動画を共有",
    "動画を読み込み中", "ありがとう :)", "コピーしました、共有ありがとう :)", "懐かしい過去をお楽しみください",
    "お使いのブラウザでは共有機能が動作しないため、代わりにリンクをコピーしました。いずれにせよ、共有してくれてありがとう！", //107
    "類似の検索", "検索履歴", "新しく検索", "検索中...", "うまくいきませんでした", "このリンクを選択してコピーしてください :)", "ちなみに、(___)するとこれらは消えてしまいます。<br>データを永続的に保存するには、「エクスポート」ボタンを押してファイル名を確認してください :)", //114
"このアプリを削除する", //115
"ブラウザのデータを消去する", //116
"エクスポート",//117
"このテキストファイル内のデータをコピーして、名前入力欄に貼り付けてください", //118
"ブラウザのデータを消去したり、nostalgiaWaveをインストール（または再インストール）したりする際は、ダウンロードされたファイル内のデータ（「NOSTALGIAWAVE」という文字列を含む）をコピーし、名前の入力が求められた際にその入力ボックスへ貼り付けてください<br>", //119
"了解", //120
"エクスポート nostalgiaWave",
"永久に保存", "ストレージがいっぱいです :(",
"保存された『思い出』をいくつか削除して、空き容量を確保してみてください。",
"年:", //125
"作成者:", //126
"トピック:",
"スワイプして保存先を切り替える"
  ],
  "ar": [
    "بواسطة", "nostalgiaWave", "peiLamed",
    "ماذا أناديكِ؟ <br><span class='nstLower'>اضغط على enter بعد ذلك ☺️</span>", //3
    "التالي", "الخاص بك", "الحنين",
    "ما الفترة الزمنية التي تشعر بالحنين إليها؟<br><span class='nstLower'>(مثال: 2022، صيف 2023، مارس 2019 - ربيع 2023)</span>",
    "أي منشئ محتوى؟<br><span class='nstLower'>(اختياري، ويمكن تغييره لاحقاً)</span>",
    "أي موضوع؟<br><span class='nstLower'>(اختياري، ويمكن تغييره لاحقاً)</span>",
    " لـ ", "", "", "إذا كنت تريد حفظ الحنين لوقت لاحق، فقم بتسميته هنا", "أو لا، لا بأس بذلك", "نستخرج مقاطع الفيديو الخاصة بك",
    "الكثير منها", "المشغل", "المشغل يعرض مقاطع الفيديو", "جارٍ التحميل...", "", "اختر this&nbsp;-&nbsp;", "احذف this&nbsp;",
    "عرض الحنين المحفوظ", "التالي&nbsp;-&nbsp;", "الخيارات", "➢", "المزيد من المشغل", "ابحث مجدداً", "افتح الفيديو",
    "تغيير الاسم", "الفيديوهات غير المشاهدة فقط", "ما الأخبار، ", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "لا يهم", "آخر مرة استخدمت فيها nostalgiaWave",
    "اسحبني إلى الخيار الذي تريده", "الربيع", "الصيف", "الخريف", "الشتاء", "مبكر", "منتصف", "أواخر", "يناير", "فبراير",
    "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "يناير", "فبراير", "مارس",
    "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "بعد 2019 رجاءً",
    "حسنًا، قبل هذه السنة رجاءً", "بين 2019 والآن رجاءً", "عذرًا، حاول مرة أخرى رجاءً", "شكراً جزيلاً على أي حال ☺", "أوبس!",
    "حدث خطأ ما<br>حاول البحث مجدداً", "تمت مشاهدة الكل", "لقد شاهدت جميع مقاطع الفيديو لهذا البحث", "لا يزال يحمل",
    "سيقوم المشغل بالتمرير التلقائي عند وصول مقاطع الفيديوالمزيد من الفيديوهات ستصل قريبا، جرب التمرير لمشاهدتهاالمزيد من الفيديوهات ستصل قريبا، جرب التمرير لمشاهدتها", "✅ -> ❌", "❌ -> ✅", "اضغط مطولاً للتبديل إلى السرعة 2x",
    "إعلان", "منتج من 🇸🇱", "شاشة كاملة", "الخروج من القائمة", "الحقوق", "أو انقر على قائمة '𐄛' --> 'تثبيت التطبيق'",
    "أو انقر على قائمة '𐄛' --> 'التطبيقات' --> 'تثبيت هذا الموقع كتطبيق'",
    "أو انقر على قائمة '𐄛' --> 'البث والحفظ والمشاركة' --> 'تثبيت التطبيق'", "أو انقر على قائمة المشاركة --> 'إضافة إلى dock'",
    "أو انقر على قائمة المشاركة --> 'تثبيت التطبيق' أو 'إضافة إلى الشاشة الرئيسية'", "انقر على قائمة المشاركة --> إضافة إلى الشاشة الرئيسية",
    "لست متأكداً تماماً من كيفية القيام بذلك على متصفحك <br> მაგრამ ابحث عن زر يشبه 'إضافة إلى الشاشة الرئيسية' أو 'تثبيت التطبيق' في قائمة المشاركة أو قائمة المتصفح وانقر عليه",
    "انقر فوق 'تثبيت nostalgiaWave'<br>", "اضغط على هذا الزر <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "صنع بواسطة dice b (المعروف بـ peiLamed / פילמד) <br><br> مساعدة من stack overflow وقليل من تصحيح الأخطاء بالذكاء الاصطناعي <br><br> تصميم peiLamed <br><br> منتج من سيراليون 🇸🇱 <br><br> الحرية لفلسطين 🇵🇸🇸🇩🇨🇩",
    "انظر التوجيهات", "「」 | 『』 | الشاشة الكاملة متوفرة", "استخدم هذا بدلاً من ذلك :)", "مشاركة الفيديو",
    "الفيديو الخاص بك قيد التحميل", "شكراً على أي حال :)", "تم النسخ، شكراً للمشاركة :)", "استمتع بلمحة من الماضي",
    "المشاركة لا تعمل على متصفحك، لذلك قمت بنسخ الرابط بدلاً من ذلك. شكراً للمشاركة على أي حال!", //107
    "بحث عن مماثل", "سجل البحث", "بحث جديد", "جاري البحث...", "لم ينجح الأمر", "حدد هذا الرابط وانسخه :)", "بالمناسبة، ستختفي هذه البيانات إذا قمت بـ (___). <br> لحفظ بياناتك بشكل دائم، اضغط على زر &quot;تصدير&quot; (export) واطلع على اسم الملف :)", //114
"حذف هذا التطبيق", //115
"مسح بيانات التصفح", //116
"تصدير",//117
"انسخ البيانات الموجودة داخل هذا الملف النصي وألصقها في خانة إدخال الاسم", //118
"عند مسح بيانات التصفح أو تثبيت/إعادة تثبيت تطبيق nostalgiaWave، انسخ بيانات الملف الذي تم تنزيله للتو (بما في ذلك كلمة 'NOSTALGIAWAVE') وألصقها في مربع الإدخال عند طلب اسمك<br>", //119
 "فهمت" //120

  ],
  "es": [
    "por", "nostalgiaWave", "peiLamed",
    "¿cómo debería llamarte? <br><span class='nstLower'>presiona enter después ☺️</span>", //3
    "siguiente", "tu", "nostalgia",
    "¿de qué época sientes nostalgia?<br><span class='nstLower'>(ej. 2022, verano 2023, mar 2019 - primavera 2023)</span>",
    "¿qué creador?<br><span class='nstLower'>(opcional, se puede modificar posteriormente)</span>",
    "¿qué tema?<br><span class='nstLower'>(opcional, se puede modificar posteriormente)</span>",
    "de ", "", "", "si quieres guardar tu nostalgia para luego, dale un nombre aquí", "o no, está bien", "buscando tus videos",
    "un montón de ellos", "reproductor", "este reproduce videos", "cargando...", "", "elige este&nbsp;-&nbsp;", "elimina este&nbsp;",
    "ver nostalgias guardadas", "siguiente&nbsp;-&nbsp;", "opciones", "➢", "más de este", "buscar de nuevo", "abrir video",
    "cambiar nombre", "solo videos no vistos", "¿qué tal, ", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "olvídalo", "última vez que usaste nostalgiaWave",
    "arrástrame a la option que quieras", "primavera", "verano", "otoño", "invierno", "principios de", "mediados de",
    "finales de", "ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic", "enero", "febrero",
    "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", "pasado el 2019 porfa",
    "bueno, antes de este año porfa", "entre 2019 y ahora porfa", "antes, por favor :)", "gracias de todos modos ☺",
    "¡oops!", "algo no funcionó<br>intenta buscar de nuevo", "todo visto", "ya viste todos los videos de esta búsqueda",
    "todavía cargando", "pronto llegarán más vídeos, prueba a desplazarte para verlos", "✅ -> ❌", "❌ -> ✅",
    "mantén presionado de nuevo para cambiar a velocidad 2x", "anuncio", "producto de 🇸🇱", "pantalla completa", "salir de este menú",
    "créditos", "o haz clic en el menú '𐄛' --> 'instalar aplicación'",
    "o haz clic en el menú '𐄛' --> 'aplicaciones' --> 'instalar este sitio como una aplicación'",
    "o haz clic en el menú '𐄛' --> 'transmitir, guardar y compartir' --> 'instalar aplicación'",
    "o haz clic en el menú compartir --> 'añadir al dock'",
    "o haz clic en el menú compartir --> 'instalar aplicación' o 'añadir a la pantalla de inicio'",
    "haz clic en el menú compartir --> añadir a la pantalla de inicio",
    "no estoy seguro de cómo hacerlo en tu navegador <br> pero busca un botón tipo 'añadir a la pantalla de inicio' o 'instalar aplicación' en el menú de compartir o del navegador y haz clic en él",
    "haz clic en 'instalar nostalgiaWave'<br>", "presiona este botón <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "hecho por dice b (alias peiLamed / פילמד) <br><br> ayuda de stack overflow y un poco de depuración con ia <br><br> diseñado por peiLamed <br><br> producto de sierra leona 🇸🇱 <br><br> palestina libre 🇵🇸🇸🇩🇨🇩",
    "ver instrucciones", "「」 | 『』 | pantalla completa disponible", "usa este en su lugar :)", "compartir video",
    "tu video se está cargando", "gracias por cierto :)", "copiado, gracias por compartir :)", "disfruta de este viaje al pasado",
    "Compartir no funciona en tu navegador, así que copié el enlace en su lugar. ¡Gracias por compartir de todos modos!", //107
    "buscar similares", "historial de búsqueda", "nueva búsqueda", "buscando...", "No funcionó", "Selecciona este enlace y cópialo :)", "por cierto, esto desaparecerá si tú (___). <br> para guardar tus datos permanentemente, pulsa el botón «exportar» y lee el nombre del archivo :)", //114
"eliminas esta aplicación", //115
"borras tus datos de navegación", //116
"exportar",//117
"copia los datos de este archivo de texto y pégalos en la barra de entrada de nombre", //118
"cuando borres tus datos de navegación o instales/reinstales nostalgiaWave, copia los datos del archivo que se acaba de descargar (incluida la palabra «NOSTALGIAWAVE») y pégalos en el campo de entrada cuando se te pida el nombre<br>", //119
"entendido", "exportar nostalgiaWave", "guardar permanentemente", "almacenamiento lleno :(", "intenta borrar algunos recuerdos guardados para liberar espacio.", "año:", //125
"creador:", //126
"tema:",
"desliza para alternar entre las nostalgias guardadas"
  ],
  "fr": [
    "par", "nostalgiaWave", "peiLamed",
    "comment dois-je vous appeler? <br><span class='nstLower'>appuie sur entrée ensuite ☺️</span>", //3
    "suivant", "ton", "nostalgie",
    "de quelle période es-tu nostalgique ?<br><span class='nstLower'>(ex: 2022, été 2023, mars 2019 - printemps 2023)</span>",
    "quel créateur ?<br><span class='nstLower'>(facultatif, peut être modifié ultérieurement.)</span>",
    "quel sujet ?<br><span class='nstLower'>(facultatif, peut être modifié ultérieurement.)</span>",
    "de ", "", "", "si tu veux sauvegarder ta nostalgie pour plus tard, nomme-la ici", "ou pas, c'est pas grave",
    "on récupère tes vidéos", "un sacré paquet", "lecteur", "ceci lit des vidéos", "chargement...", "", "choisis celle-ci&nbsp;-&nbsp;",
    "supprime celle-ci&nbsp;", "voir les nostalgies sauvegardées", "suivante&nbsp;-&nbsp;", "options", "➢", "plus de ceci",
    "rechercher à nouveau", "ouvrir la vidéo", "changer de nom", "vidéos non vues uniquement", "quoi de neuf, ",
    "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_", "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21",
    "laisse tomber", "dernière fois que tu as utilisé nostalgiaWave", "glisse-moi vers l'option de ton choix", "printemps",
    "été", "automne", "hiver", "début", "milieu", "fin", "janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août",
    "sept.", "oct.", "nov.", "déc.", "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre",
    "octobre", "novembre", "décembre", "après 2019 stp", "plus tôt, s'il vous plaît :)", "entre 2019 et maintenant stp",
    "désolé, réessaie stp", "merci bcp au fait ☺", "oups !", "un problème est survenu<br>essaie de rechercher à nouveau",
    "tout est vu", "tu as vu toutes les vidéos de cette recherche", "toujours en cours de chargement",
    "d'autres vidéos arriveront bientôt, essayez de faire défiler pour les voir", "✅ -> ❌", "❌ -> ✅",
    "maintiens enfoncé pour basculer en vitesse 2x", "publicité", "produit de 🇸🇱", "plein écran", "quitter ce menu", "crédits",
    "ou clique sur le menu '𐄛' --> 'installer l'application'",
    "ou clique sur le menu '𐄛' --> 'applications' --> 'installer ce site en tant qu'application'",
    "ou clique sur le menu '𐄛' --> 'diffuser, enregistrer et partager' --> 'installer l'application'",
    "ou clique sur le menu de partage --> 'ajouter au dock'",
    "ou clique sur le menu de partage --> 'installer l'application' ou 'ajouter à l'écran d'accueil'",
    "clique sur le menu de partage --> ajouter à l'écran d'accueil",
    "je ne sais pas exactement comment faire sur ton navigateur <br> mais cherche un bouton du style 'ajouter à l'écran d'accueil' ou 'installer l'app' dans le menu de partage ou du navigateur",
    "clique sur 'installer nostalgiaWave'<br>", "appuie sur ce bouton <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "fait par dice b (alias peiLamed / פילמד) <br><br> aide de stack overflow & un peu de débogage par ia <br><br> conçu par peiLamed <br><br> produit de sierra leone 🇸🇱 <br><br> palestine libre 🇵🇸🇸🇩🇨🇩",
    "voir les instructions", "「」 | 『』 | plein écran disponible", "utilise-moi plutôt :)", "partager la vidéo",
    "ta vidéo est en cours de chargement", "merci au fait :)", "copié, merci pour le partage :)", "profite de ce retour dans le passé",
    "Le partage ne fonctionne pas sur votre navigateur, j'ai donc copié le lien à la place. Merci pour le partage en tout cas !", //107
    "rechercher similaire", "historique de recherche", "nouvelle recherche", "recherche en cours...", "Ça n'a pas marché", "Sélectionnez ce lien et copiez-le :)", "au fait, ces éléments disparaîtront si vous (___). <br> pour sauvegarder vos données de façon permanente, cliquez sur le bouton « exporter » et notez le nom du fichier :)", //114
"supprimez cette application", //115
"effacez vos données de navigation", //116
"exporter",//117
"copiez les données contenues dans ce fichier texte et collez-les dans le champ de saisie du nom", //118
"lorsque vous effacez vos données de navigation ou que vous installez/réinstallez nostalgiaWave, copiez les données du fichier qui vient d'être téléchargé (y compris le mot « NOSTALGIAWAVE ») et collez-les dans la zone de saisie lorsque votre nom est demandé<br>", //119
"compris", "exporter nostalgiaWave", "enregistrer définitivement", "espace de stockage plein :(",
"essayez de supprimer quelques souvenirs enregistrés pour libérer de l'espace.", "année :", //125
"créateur :", //126
"sujet :",
"faites glisser votre doigt pour passer d'une sauvegarde à l'autre."
  ],
  "de": [
    "von", "nostalgiaWave", "peiLamed",
    "wie soll ich dich nennen? <br><span class='nstLower'>drücke danach enter ☺️</span>", //3
    "weiter", "dein", "nostalgie",
    "nach welchem zeitraum bist du nostalgisch?<br><span class='nstLower'>(z.b. 2022, sommer 2023, märz 2019 - frühjahr 2023)</span>",
    "welcher creator?<br><span class='nstLower'>(optional, kann später geändert werden)</span>",
    "welches thema?<br><span class='nstLower'>(optional, kann später geändert werden)</span>",
    "von ", "", "", "wenn du deine nostalgie für später speichern willst, benenne sie hier", "oder nicht, auch okay",
    "deine videos werden herausgefischt", "eine ganze menge davon", "player", "dieser spielt videos ab", "lädt...", "",
    "dieses auswählen&nbsp;-&nbsp;", "dieses löschen&nbsp;", "gespeicherte nostalgien anzeigen", "nächstes&nbsp;-&nbsp;",
    "optionen", "➢", "mehr davon", "erneut suchen", "video öffnen", "name ändern", "nur ungesehene videos", "was geht, ",
    "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_", "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "egal",
    "letztes mal, als du nostalgiaWave benutzt hast", "zieh mich auf die gewünschte option", "frühling", "sommer", "herbst",
    "winter", "anfang", "mitte", "ende", "jan", "feb", "mär", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "dez",
    "januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember",
    "nach 2019 bitte", "na ja, vor diesem jahr bitte", "between 2019 und jetzt bitte", "früher, bitte :)",
    "vielen dank übrigens ☺", "ups!", "etwas hat nicht funktioniert<br>versuche es erneut zu suchen", "alle angesehen",
    "du hast alle videos für diese suche angesehen", "lädt noch", "weitere videos werden bald erscheinen, versuch mal zu scrollen, um sie zu sehen",
    "✅ -> ❌", "❌ -> ✅", "erneut gedrückt halten für 2x geschwindigkeit", "werbung", "produkt aus 🇸🇱", "vollbild",
    "menü verlassen", "credits", "oder klicke auf das '𐄛'-menü --> 'app installieren'",
    "oder klicke auf das '𐄛'-menü --> 'apps' --> 'diese website als app installieren'",
    "oder klicke auf das '𐄛'-menü --> 'streamen, speichern und teilen' --> 'app installieren'",
    "oder klicke auf das teilen-menü --> 'zum dock hinzufügen'",
    "oder klicke auf das teilen-menü --> 'app installieren' oder 'zum startbildschirm hinzufügen'",
    "klicke auf das teilen-menü --> zum startbildschirm hinzufügen",
    "ich bin mir nicht sicher, wie das auf deinem browser geht <br> aber suche nach einer option wie 'zum startbildschirm hinzufügen' oder 'app installieren' im teilen- oder browsermenü",
    "klicke auf 'nostalgiaWave installieren'<br>", "klicke diesen button <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "erstellt von dice b (alias peiLamed / פילמד) <br><br> hilfe von stack overflow & ein bisschen ki-debugging <br><br> design von peiLamed <br><br> produkt aus sierra leone 🇸🇱 <br><br> freies palästina 🇵🇸🇸🇩🇨🇩",
    "anleitung anzeigen", "「」 | 『』 | vollbild verfügbar", "nutz mich stattdessen :)", "video teilen",
    "dein video lädt", "danke übrigens :)", "kopiert, danke fürs teilen :)", "genieße diesen blick in die vergangenheit",
    "Teilen funktioniert in deinem Browser nicht, deshalb habe ich stattdessen den Link kopiert. Danke fürs Teilen übrigens!", //107
    "ähnliche suchen", "suchverlauf", "neu suchen", "sucht...", "Es hat nicht funktioniert", "Wähle diesen Link aus und kopiere ihn :)", "übrigens: diese daten gehen verloren, wenn du (___). <br> um deine daten dauerhaft zu speichern, klicke auf die schaltfläche „exportieren“ und merke dir den dateinamen :)", //114
"diese app löschst", //115
"deine browserdaten löschst", //116
"exportieren",//117
"kopiere den inhalt dieser textdatei und füge ihn in das namenseingabefeld ein", //118
"wenn du deine browserdaten löschst oder nostalgiawave (neu) installierst: kopiere den inhalt der gerade heruntergeladenen datei (einschließlich des wortes &quot;NOSTALGIAWAVE&quot;) und füge ihn in das eingabefeld ein, wenn nach deinem namen gefragt wird<br>", //119
"verstanden", "exportieren nostalgiaWave", "dauerhaft speichern", "speicher voll :(",
"versuche, einige gespeicherte erinnerungen zu löschen, um speicherplatz freizugeben.",
"Jahr:", //125
"Ersteller:", //126
"Thema:",
"Wischen Sie, um zwischen den Speicherständen zu wechseln.".toLowerCase()
  ],
  "pt": [
    "por", "nostalgiaWave", "peiLamed",
    "como devo te chamar? <br><span class='nstLower'>aperte enter depois ☺️</span>", //3
    "seguinte", "seu", "nostalgia",
    "de qual época você tem nostalgia?<br><span class='nstLower'>(ex: 2022, verão de 2023, mar de 2019 - primavera de 2023)</span>",
    "qual criador?<br><span class='nstLower'>(opcional, pode ser alterado posteriormente)</span>",
    "qual tema?<br><span class='nstLower'>(opcional, pode ser alterado posteriormente)</span>",
    "de ", "", "", "se quiser salvar sua nostalgia para mais tarde, dê um nome aqui", "ou não, tudo bem", "pescando seus vídeos",
    "um monte deles", "player", "este reproduz vídeos", "carregando...", "", "escolha este&nbsp;-&nbsp;", "exclua este&nbsp;",
    "ver nostalgias salvas", "próximo&nbsp;-&nbsp;", "opções", "➢", "mais deste", "buscar de novo", "abrir vídeo",
    "alterar nome", "apenas vídeos não vistos", "e aí, ", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "deixa para lá", "última vez que você usou o nostalgiaWave",
    "arraste-me para a opção que deseja", "primavera", "verão", "outono", "inverno", "início de", "meados de", "final de",
    "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez", "janeiro", "fevereiro", "março",
    "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", "depois de 2019 por favor",
    "bem, antes deste ano por favor", "entre 2019 e agora por favor", "mais cedo, por favor :)",
    "muito obrigado aliás ☺", "opa!", "algo não funcionou<br>tente buscar de novo", "todos assistidos",
    "você assistiu a todos os vídeos desta busca", "ainda carregando", "mais vídeos vão chegar em breve, tente rolar para ver",
    "✅ -> ❌", "❌ -> ✅", "segure novamente para alternar para velocidade 2x", "anúncio", "produto de 🇸🇱", "tela cheia",
    "sair deste menu", "créditos", "ou clique no menu '𐄛' --> 'instalar aplicativo'",
    "ou clique no menu '𐄛' --> 'aplicativos' --> 'instalar este site como aplicativo'",
    "ou clique no menu '𐄛' --> 'transmitir, salvar e compartilhar' --> 'instalar aplicativo'",
    "ou clique no menu de compartilhamento --> 'adicionar ao dock'",
    "ou clique no menu de compartilhamento --> 'instalar aplicativo' ou 'adicionar à tela inicial'",
    "clique no menu de compartilhamento --> adicionar à tela inicial",
    "não tenho certeza de como fazer no seu navegador <br> mais procure por um botão como 'adicionar à tela inicial' ou 'instalar aplicativo' no menu de compartilhamento ou do navegador",
    "clique em 'instalar nostalgiaWave'<br>", "pressione este botão <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "feito por dice b (vulgo peiLamed / פילמד) <br><br> ajuda do stack overflow & um pouco de depuração por ia <br><br> projetado por peiLamed <br><br> produto de serra leoa 🇸🇱 <br><br> palestina livre 🇵🇸🇸🇩🇨🇩",
    "ver instruções", "「」 | 『』 | tela cheia disponível", "use-me em vez disso :)", "compartir vídeo",
    "seu vídeo está carregando", "obrigado aliás :)", "copiado, obrigado por compartilhar :)", "aproveite essa viagem ao passado",
    "O compartilhamento não funciona no seu navegador, então copiei o link. Obrigado por compartilhar de qualquer forma!", //107
    "buscar semelhantes", "histórico de buscas", "nova busca", "buscando...", "não funcionou", "Selecione este link e copie-o :)", "aliás, isso será apagado se você (___). <br> para salvar seus dados permanentemente, clique no botão 'exportar' e anote o nome do arquivo :)", //114
"apagar este aplicativo", //115
"limpar seus dados de navegação", //116
"exportar",//117
"copie os dados deste arquivo de texto e cole-os no campo de nome", //118
"ao limpar seus dados de navegação ou instalar/reinstalar o nostalgiaWave, copie os dados do arquivo que acabou de ser baixado (incluindo a palavra 'NOSTALGIAWAVE') e cole-os no campo de entrada quando o aplicativo pedir seu nome<br>", //119
"entendido", "exportar nostalgiaWave", "salvar permanentemente", "armazenamento cheio :(",
"tente excluir alguns itens nostálgicos salvos para liberar espaço.", "ano:", //125
"criador:", //126
"tópico:", //127
"deslize para alternar entre as lembranças salvas."
  ],
  "zh": [
    "由", "nostalgiaWave", "peiLamed",
    "我该怎么称呼你？ <br><span class='nstLower'>完成后请按回车键 ☺️</span>", //3
    "下一个", "你的", "怀旧",
    "你怀念哪个时期？<br><span class='nstLower'>(例如 2022、2023夏季、2019年3月 - 2023年春季)</span>",
    "哪位创作者？<br><span class='nstLower'>(可选，之后可以更改)</span>",
    "什么主题？<br><span class='nstLower'>(可选，之后可以更改)</span>",
    "的 ", "", "", "如果你想把这段怀旧留到以后，请在这里命名", "不命名也行，没关系", "正在为你搜寻视频",
    "超多好视频", "播放器", "这个正在播放视频", "加载中...", "", "选择这一个&nbsp;-&nbsp;", "删除这一个&nbsp;",
    "查看已保存的怀旧", "下一个&nbsp;-&nbsp;", "选项", "➢", "更多关于这个", "重新搜索", "打开视频", "更改名称",
    "仅看未看过的视频", "嗨，最近怎么样，", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "算了吧", "上一次你使用 nostalgiaWave",
    "请将我拖动到你想要的选项", "春季", "夏季", "秋季", "冬季", "上旬/初", "中旬/中", "下旬/末", "1月", 
    "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月", "求2019年之后的吧", "请早点儿 :)", "求2019年到现在之间的吧",
    "抱歉，求再试一次吧", "顺便非常感谢 ☺", "哎呀！", "有些东西没正常运行<br>请尝试重新搜索", "已全部看完",
    "你已看完了此搜索下的所有视频", "还在加载中", "更多视频很快会陆续发布，试着浏览看看", "✅ -> ❌", "❌ -> ✅",
    "再次长按可切换2倍速", "广告", "🇸🇱 的产品", "进入全屏", "退出此菜单", "致谢", "或点击 '𐄛' 菜单 --> '安装应用'",
    "或点击 '𐄛' 菜单 --> '应用' --> '将此站点安装为应用'", "或点击 '𐄛' 菜单 --> '投放、保存和分享' --> '安装应用'",
    "或点击分享菜单 --> '添加到 dock'", "或点击分享菜单 --> '安装应用' 或 '添加到主屏幕'", "点击分享菜单 --> 添加到主屏幕",
    "我不确定在您的浏览器上具体如何操作 <br> 但请在分享菜单或浏览器菜单中寻找类似“添加到主屏幕”或“安装应用”的按钮并点击它",
    "点击“安装 nostalgiaWave”<br>", "点击此按钮 <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "制作者：dice b (又名 peiLamed / פילמד) <br><br> 得到了来自 stack overflow 的帮助以及少许 ai 调试 <br><br> 设计者：peiLamed <br><br> 塞拉利昂产品 🇸🇱 <br><br> 自由巴勒斯坦 🇵🇸🇸🇩🇨🇩",
    "查看指南", "「」 | 『』 | 全屏可用", "用我替代吧 :)", "分享视频", "您的视频正在加载", "顺便谢啦 :)",
    "已复制，顺便谢谢分享 :)", "享受这段来自过去的旧时光吧", "分享功能在您的浏览器上无法使用，因此我复制了链接。无论如何，谢谢您的分享！", //107
    "搜索相似", "搜索历史", "搜索全新", "正在搜索...", "没用", "选中此链接并复制 :)", "顺便说一下，如果你 (___)，这些数据就会消失。<br>若要永久保存数据，请点击“导出”按钮并查看文件名 :)", //114
"删除此应用", //115
"清除浏览数据", //116
"导出",//117
"复制该文本文件中的数据，并将其粘贴到名称输入栏中", //118
"当你清除浏览数据或安装/重新安装 nostalgiaWave 时，请复制刚才下载的文件中的数据（包含“NOSTALGIAWAVE”字样），并在系统要求输入名称时将其粘贴到输入框中<br>", //119
"明白了", "导出 nostalgiaWave", "永久保存", "存储空间已满 :(", "尝试删除一些已保存的怀旧内容来释放空间。", "年份：", //125
"创建者：", //126
"主题：",
"滑动切换保存"
  ],
  "hi": [
    "द्वारा", "nostalgiaWave", "peiLamed",
    "क्या कहकर बुलाऊँ तुम्हें? <br><span class='nstLower'>बाद में एंटर दबाएं ☺️</span>", //3
    "आगे", "आपका", "पुरानी यादें",
    "आप किस समय अवधि के लिए पुरानी यादों में खोए हैं?<br><span class='nstLower'>(उदा. 2022, गर्मी 2023, मार्च 2019 - वसंत 2023)</span>",
    "कौन सा क्रिएटर?<br><span class='nstLower'>(ऑप्शनल, बाद में बदला जा सकता है)</span>",
    "कौन सा विषय?<br><span class='nstLower'>(ऑप्शनल, बाद में बदला जा सकता है)</span>",
    " का ", "", "", "यदि आप अपनी पुरानी यादों को बाद के लिए सहेजना चाहते हैं, तो इसे यहाँ नाम दें", "या नहीं, कोई बात नहीं",
    "आपके वीडियो निकाले जा रहे हैं", "बहुत सारे वीडियो हैं", "प्लेयर", "यह वीडियो चलाता है", "लोड हो रहा है...", "",
    "इसे चुनें&nbsp;-&nbsp;", "इसे हटाएं&nbsp;", "सहेजी गई पुरानी यादें देखें", "अगला वाला&nbsp;-&nbsp;", "विकल्प", "➢",
    "इसके बारे में और जानें", "फिर से खोजें", "वीडियो खोलें", "नाम बदलें", "केवल अनदेखे वीडियो", "क्या चल रहा है, ",
    "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_", "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21",
    "रहने दो", "पिछली बार आपने nostalgiaWave का उपयोग किया था", "मुझे अपनी पसंद के विकल्प पर खींचें", "वसंत", "गर्मी",
    "पतझड़", "सर्दियाँ", "शुरुआत", "मध्य", "अंत", "जन", "फर", "मार्च", "अप्रैल", "मई", "जून", "जुल", "अगस्त", "सित", 
    "अक्तू", "नव", "दिस", "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
    "कृपया 2019 के बाद का दें", "पहले, कृपया :)", "कृपया 2019 और अब के बीच का दें",
    "क्षमा करें, कृपया पुनः प्रयास करें", "वैसे बहुत-बहुत धन्यवाद ☺", "ओह!", "कुछ काम नहीं कर पाया<br>फिर से खोजने का प्रयास करें",
    "सभी देख लिए", "आपने इस खोज के सभी वीडियो देख लिए हैं", "अभी भी लोड हो रहा है",
    "जल्द ही और भी वीडियो आएंगे, उन्हें देखने के लिए स्क्रॉल करने का प्रयास करें", "✅ -> ❌", "❌ -> ✅", "2x स्पीड चालू/बंद करने के लिए फिर से दबाकर रखें",
    "विज्ञापन", "🇸🇱 का उत्पाद", "पूर्ण स्क्रीन करें", "इस मेनू से बाहर निकलें", "क्रेडिट",
    "या '𐄛' मेनू पर क्लिक करें --> 'ऐप इंस्टॉल करें'",
    "या '𐄛' मेनू पर क्लिक करें --> 'ऐप्स' --> 'इस साइट को ऐप के रूप में इंस्टॉल करें'",
    "या '𐄛' मेनू पर क्लिक करें --> 'कास्ट, सहेजें और साझा करें' --> 'ऐप इंस्टॉल करें'",
    "या साझा करें मेनू पर क्लिक करें --> 'डॉक में जोड़ें'",
    "या साझा करें मेनू पर क्लिक करें --> 'ऐप इंस्टॉल करें' या 'होम स्क्रीन पर जोड़ें'",
    "साझा करें मेनू पर क्लिक करें --> होम स्क्रीन पर जोड़ें",
    "मुझे पक्का नहीं पता कि आपके ब्राउज़र पर यह कैसे करना है <br> लेकिन साझा करें मेनू या ब्राउज़र मेनू में 'होम स्क्रीन पर जोड़ें' या 'ऐप इंस्टॉल करें' जैसा बटन ढूंढें और उस पर क्लिक करें",
    "'nostalgiaWave इंस्टॉल करें' पर क्लिक करें<br>", "इस बटन को दबाएं <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "dice b (उर्फ peiLamed / פילמד) द्वारा निर्मित <br><br> स्टैक ओवरफ़्लो और थोड़ी एआई डिबगिंग से मदद मिली <br><br> peiLamed द्वारा डिज़ाइन किया गया <br><br> सिएरा लियोन का उत्पाद 🇸🇱 <br><br> स्वतंत्र फ़िलिस्तीन 🇵🇸🇸🇩🇨🇩",
    "निर्देश देखें", "「」 | 『』 | पूर्ण स्क्रीन उपलब्ध है", "इसके बजाय मेरा उपयोग करें :)", "वीडियो साझा करें",
    "आपका वीडियो लोड हो रहा है", "वैसे धन्यवाद :)", "कॉपी कर लिया गया, साझा करने के लिए धन्यवाद :)", "अतीत के इस झोंके का आनंद लें",
    "साझा करना आपके ब्राउज़र पर काम नहीं करता है, इसलिए मैंने इसकी जगह लिंक कॉपी कर लिया है। फिर भी साझा करने के लिए धन्यवाद!", //107
    "समान खोजें", "खोज इतिहास", "नया खोजें", "खोज रहा है...", "काम नहीं किया", "इस लिंक को चुनें और कॉपी करें :)", "वैसे, अगर आप (___) करेंगे तो ये हट जाएंगे। <br> अपना डेटा हमेशा के लिए सेव करने के लिए, 'एक्सपोर्ट' बटन दबाएं और फ़ाइल का नाम देखें :)", //114
"इस ऐप को डिलीट करें", //115
"अपना ब्राउज़िंग डेटा क्लियर करें", //116
"एक्सपोर्ट",//117
"इस टेक्स्ट फ़ाइल के डेटा को कॉपी करें और नाम डालने वाली जगह पर पेस्ट करें", //118
"जब आप अपना ब्राउज़िंग डेटा क्लियर करते हैं या nostalgiaWave को इंस्टॉल/रीइंस्टॉल करते हैं, तो अभी डाउनलोड हुई फ़ाइल का डेटा कॉपी करें ('NOSTALGIAWAVE' शब्द सहित) और जब ऐप आपका नाम पूछे तो उसे इनपुट बॉक्स में पेस्ट करें<br>", //119
"समझ गया", "एक्सपोर्ट nostalgiaWave", "स्थायी रूप से बचाएं", "स्टोरेज फुल :(",
"जगह खाली करने के लिए कुछ सेव की हुई पुरानी यादें डिलीट करके देखें।", "वर्ष:", //125
"निर्माता:", //126
"विषय:",
"सेव के बीच स्विच करने के लिए स्वाइप करें"
  ],
  "am": [
    "በ", "nostalgiaWave", "peiLamed",
    "ምን ልበልህ? <br><span class='nstLower'>ከዚያ በኋላ enterን ይጫኑ ☺️</span>", //3
    "ቀጣይ", "የእርስዎ", "ትዝታ",
    "ለየትኛው የጊዜ ወቅት ነው ትዝታ የሚሰማህ?<br><span class='nstLower'>(ምሳሌ፡ 2022፣ በጋ 2023፣ መጋቢት 2019 - ጸደይ 2023)</span>",
    "የትኛው ፈጣሪ?<br><span class='nstLower'>(አማራጭ፣ በኋላ ላይ ሊቀየር ይችላል)</span>",
    "ምን ርዕስ?<br><span class='nstlower'>(አማራጭ፣ በኋላ ላይ ሊቀየር ይችላል)</span>",
    " የ ", "", "", "ትዝታህን ለበኋላ ማስቀመጥ ከፈለግህ እዚህ ሰይምው", "ካልሆነም ችግር የለውም", "ቪዲዮዎችህን በማውጣት ላይ",
    "በጣም ብዙ ናቸው", "ተጫዋች", "ይህ ቪዲዮዎችን ያጫውታል", "በመጫን ላይ...", "", "ይህንን ምረጥ&nbsp;-&nbsp;", "ይህንን ሰርዝ&nbsp;",
    "የተቀመጡ ትዝታዎችን እይ", "ቀጣዩ&nbsp;-&nbsp;", "አማራጮች", "➢", "ተጨማሪ የዚህ", "እንደገና ፈልግ", "ቪዲዮ ክፈት",
    "ስም ቀይር", "ያልታዩ ቪዲዮዎች ብቻ", "እንዴት ነህ፣ ", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "ተውት", "nostalgiaWaveን ለመጨረሻ ጊዜ የተጠቀሙበት",
    "ወደሚፈልጉት አማራጭ ይጎትቱኝ", "ጸደይ", "በጋ", "በልግ", "ክረምት", "መጀመሪያ", "አጋማሽ", "መጨረሻ", "ጥር", "የካ",
    "መጋ", "ሚያ", "ግን", "ሰኔ", "ሐምሌ", "ነሐሴ", "መስ", "ጥቅ", "ህዳ", "ታህ", "ጃንዋሪ", "ፌብሩዋሪ", "ማርች", "ኤፕሪል",
    "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክቶበር", "ኖቬምበር", "ዲሴምበር", "ከ2019 በኋላ ይሁን እባክህ",
    "ደህና፣ ከዚህ ዓመት በፊት ይሁን እባክህ", "በ2019 እና አሁን መካከል ይሁን እባክህ", "ቀደም ብሎ፣ እባክዎን :)",
    "ለማንኛውም በጣም አመሰግናለሁ ☺", "ውይ!", "የሆነ ነገር አልሰራም<br>እባክህ እንደገና ለመፈለግ ሞክር", "ሁሉም ታይተዋል",
    "ለዚህ ፍለጋ ሁሉንም ቪዲዮዎች አይተሃል", "አሁንም በመጫን ላይ ነው", "ተጨማሪ ቪዲዮዎች በቅርቡ ይመጣሉ፣ እነሱን ለማየት ለማሸብለል ይሞክሩ", "✅ -> ❌",
    "❌ -> ✅", "ወደ 2 እጥፍ ፍጥነት ለመቀየር እንደገና ተጭነው ይቆዩ", "ማስታወቂያ", "የ 🇸🇱 ምርት", "ሙሉ ማያ ገጽ አድርግ",
    "ከዚህ ምናሌ ውጣ", "ምስጋናዎች", "ወይም '𐄛' ምናሌን ጠቅ ያድርጉ --> 'መተግበሪያ ጫን'",
    "ወይም '𐄛' ምናሌን ጠቅ ያድርጉ --> 'መተግበሪያዎች' --> 'ይህንን ጣቢያ እንደ መተግበሪያ ጫን'",
    "ወይም '𐄛' ምናሌን ጠቅ ያድርጉ --> 'አስተላልፍ፣ አስቀምጥ እና አጋራ' --> 'መተግበሪያ ጫን'",
    "ወይም የማጋሪያ ምናሌውን ጠቅ ያድርጉ --> 'ወደ ዶክ አክል'",
    "ወይም የማጋሪያ ምናሌውን ጠቅ ያድርጉ --> 'መተግበሪያ ጫን' ወይም 'ወደ መነሻ ማያ ገጽ አክል'",
    "የማጋሪያ ምናሌውን ጠቅ ያድርጉ --> ወደ መነሻ ማያ ገጽ አክል",
    "በእርስዎ አሳሽ ላይ እንዴት እንደሚያደርጉት እርግጠኛ አይደለሁም <br> ነገር ግን በማጋሪያ ምናሌው ወይም በአሳሽ ምናሌው ውስጥ 'ወደ መነሻ ማያ ገጽ አክል' ወይም 'መተግበሪያ ጫን' የሚል ቁልፍ ይፈልጉ እና ጠቅ ያድርጉት",
    "'nostalgiaWave ጫን' የሚለውን ጠቅ ያድርጉ<br>", "ይህንን ቁልፍ ይጫኑ <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "በ dice b (በቅጽል ስሙ peiLamed / פילמד) የተሰራ <br><br> ከ stack overflow እና ጥቂት የ ai ማረሚያ እገዛ የተገኘ <br><br> በ peiLamed የተነደፈ <br><br> የሴራሊዮን ምርት 🇸🇱 <br><br> ነፃ ፍልስጤም 🇵🇸🇸🇩🇨🇩",
    "መመሪያዎችን ይመልከቱ", "「」 | 『』 | ሙሉ ማያ ገጽ ይገኛል", "በምትኩ እኔን ተጠቀም :)", "ቪዲዮ አጋራ",
    "ቪዲዮዎ በመጫን ላይ ነው", "ለማንኛውም አመሰግናለሁ :)", "ተቀድቷል፣ ስላጋሩ እናመሰግናለን :)", "ከቀደመው ጊዜ በዚህ አስደሳች ጊዜ ይደሰቱ",
    "ማጋራት በእርስዎ አሳሽ ላይ አይሰራም፣ ስለዚህ በምትኩ ሊንኩን ቀድቼዋለሁ። ለማንኛውም ስላጋሩ እናመሰግናለን!", //107
    "ተመሳሳይ ፈልግ", "የፍለጋ ታሪክ", "አዲስ ፍለጋ", "በመፈለግ ላይ...", "አልሰራም", "ይህንን ሊንክ ምረጥና ኮፒ አድርገው :)", "እነዚህ (____) ከሆኑ ይጠፋሉ። <br> ውሂብዎን በቋሚነት ለማስቀመጥ የ&quot;ላክ&quot; አዝራሩን ይጫኑ እና የፋይል ስሙን ያንብቡ :)", //114
"ይህንን መተግበሪያ ይሰርዙ", //115
"የአሰሳ ውሂብዎን ያጽዱ", //116
"ላክ", //117
"በዚህ የጽሑፍ ፋይል ውስጥ ያለውን ውሂብ ይቅዱ እና በስም ግቤት አሞሌ ውስጥ ይለጥፉት", //118
"ⵎⵉ ⴰⵔⴰ ⵜⴻⵙⴼⴻⴹ ⵉⵙⴻⴼⴽⴰⵉⵏⴻⴽ ⵏ ⵓⴼⴻⵔⴷⵉⵙ ⵏⴻⵖ ⴰⴷ ⵜⴻⵙⴱⴻⴷⴷⴻⴹ/ⴰⴷ ⵜⴻⵙⴱⴻⴷⴷⴻⴹ nostalgiaWave, ⵙⵏⵓⵍⴼⵓⴷ ⵉⵙⴻⴼⴽⴰ ⵏ ⵓⴼⴰⵢⵍⵓ ⵉ ⴷⵢⴻⴼⴼⵖⴻⵏ ⵜⵓⵔⴰ ⴽⴰⵏ (ⴷⴻⴳⵙⴻⵏ ⴰⵡⴰⵍ &quot;NOSTALGIAWAVE&quot;) ⵓ ⵙⴱⴻⴷⴷⵉⵜⴻⵏ ⴷⴻⴳ ⵜⴼⴻⵍⵡⵉⵜ ⵏ ⵓⵙⵎⴻⵍ ⵎⵉ ⴰⵔⴰ ⴷⵢⴻⵙⵜⴻⵇⵙⵉ ⵉⵙⴻⵎⵉⴽ<ⴱⵔ>", //119
"ገባኝ", "ላክ nostalgiaWave", "ለዘላለም ያቆዩት", "ማከማቻ ሙሉ ነው :(",
"ቦታ ለማስለቀቅ የተቀመጡ አንዳንድ የናፍቆት ስሜቶችን ለመሰረዝ ይሞክሩ።", "ዓመት:", //125
"ፈጣሪ:", //126
"ርዕስ:", //127
"በተቀመጡት የናፍቆት ትዝታዎች መካከል ለመቀያየር ያንሸራትቱ"
  ],
  "zgh": [
    "ⵙ", "nostalgiaWave", "peiLamed",
    "ⴰⵎⴻⴽ ⴰⵔⴰ ⴰⴽⵉⵏⵉⵖ? <br><span class='nstLower'>تكሊክⵢ ⴼ enter ⴱⵄⴷ ☺️</span>", //3
    "ⴰⴼⵔⴰⵏ", "ⵏⵏⴽ", "ⵜⴰⵡարգⵉⵜ",
    "ⵎⴰⵏ ⴰⵣⵎⵣ ⵉⴳⴰⵏ ⵜⴰⵡարգⵉⵜ ⵏⵏⴽ?<br><span class='nstLower'>(ⴰⵎⴷⵢⴰ: 2022, ⴰⵏⴱⴷⵓ 2023, ⵎⴰⵕⵚ 2019 - ⵜⴰⴼⵙⵓⵜ 2023)</span>",
    "ⵎⴰⵏ ⴰⵎⵙⵏⴼⵍⵓⵍ?<br><span class='nstLower'>(ⴷ ⴰⴼⵔⴰⵏ, ⵢⴻⵣⵎⴻⵔ ⴰⴷ ⵢⴻⵜⵜⵡⴰⴱⴻⴷⴷⴻⵍ ⵎⴱⴻⵄⴷ)</span>",
    "ⵎⴰⵏ ⴰⵙⵏⵜⵍ?<br><span class='nstLower'>(ⴷ ⴰⴼⵔⴰⵏ, ⵢⴻⵣⵎⴻⵔ ⴰⴷ ⵢⴻⵜⵜⵡⴰⴱⴻⴷⴷⴻⵍ ⵎⴱⴻⵄⴷ)</span>",
    " ⵏ ", "", "", "ⵉⴳ ⵜⵅⵙⴷ ⴰⴷ ⵜⵃⴼⴹⴷ ⵜⴰⵡարգⵉⵜ ⵏⵏⴽ, ⵉⵙⵎ ⴰⵙ ⴷⵖⵉ", "ⵏⵖ ⵓⵔⵓ, ⵎⴰⵛⵉ ⵎⵓⵛⴽⵉⵍ", "ⵏⵙⵙⵓⴼⵖ ⴷ ⵉⴼⵉⴷⵢⵓⵜⵏ ⵏⵏⴽ",
    "ⴱⵣⵣⴰⴼ ⴷⵉⴳⵙⵏ", "ⴰⵎⵓⵔⴰⵔ", "ⵡⴰ ⵉⵜⵜⵓⵔⴰⵔ ⵉⴼⵉⴷⵢⵓⵜⵏ", "ⴰⵙⴰⵍⵉ...", "", "ⴰⴼⵔ ⵡⴰ&nbsp;-&nbsp;", "ⴽⴽⵙ ⵡⴰ&nbsp;",
    "ⵥⵕ ⵜⵉⵡարգⵉⵡⵉⵏ ⵜⵢⵓⵃⴼⴹⵏ", "ⵡⴰ ⴷⵉⴳⵙⵏ ⴱⵄⴷ&nbsp;-&nbsp;", "ⵉⵙⵜⵉⵢⵏ", "➢", "ⵓⴳⴳⴰⵔ ⵏ ⵡⴰ", "ⴰⵔⵣⵣⵓ ⴷⴰⵖ", "ⴰⵔⵥⵎ ⵉⴼⵉⴷⵢⵓ",
    "ⴱⴷⴷⵍ ⵉⵙⵎ", "ⵉⴼⵉⴷⵢⵓⵜⵏ ⵓⵔ ⵜⵢⵓⵥⵕⴰⵏ  wale ⴷ", "ⵎⴰⵅ ⵉⵅⴱⴰⵔⵏ, ", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "ⴱⵍⴰⵛ", "ⴰⴱⵔⵉⴷ ⴰⵏⴳⴳⴰⵔⵓ ⵍⵍⵉⴳ ⵜⵙⵡⵓⵔⵉⴷ ⵙ nostalgiaWave",
    "ⵊⴱⴷ ⵉⵢⵉ ⵙ ⵓⵙⵜⵉ ⵍⵍⵉ ⵜⵅⵙⴷ", "ⵜⴰⴼⵙⵓⵜ", "ⴰⵏⴱⴷⵓ", "ⴰⵎⵡⴰⵏ", "ⵜⴰⴳⵔⵙⵜ", "ⵜⵉⵣⵡⵉⵔⵉ ⵏ", "ⵜⵓⵣⵓⵎⵜ ⵏ", "ⵜⴰⴳⴰⵔⴰ ⵏ", "ⵢⵏⵏ", "ⴱⵕⴰ",
    "ⵎⴰⵕ", "ⵉⴱⵔ", "ⵎⴰⵢ", "ⵢⵓⵏ", "ⵢⵓⵍ", "ⵖⵓⵛ", "ⵛⵓⵜ", "ⴽⵜⵓ", "ⵏⵓⵡ", "ⴷⵓⵊ", "ⵢⵏⵏⴰⵢⵔ", "ⴱⵕⴰⵢⵕ", "ⵎⴰⵕⵚ", "ⵉⴱⵔⵉⵍ", "ⵎⴰⵢⵓ",
    "ⵢⵓⵏⵢⵓ", "ⵢⵓⵍⵢⵓⵣ", "ⵖⵓⵛⵜ", "ⵛⵓⵜⴰⵏⴱⵉⵔ", "ⴽⵜⵓⴱⵔ", "ⵏⵓⵡⴰⵏⴱⵉⵔ", "ⴷⵓⵊⴰⵏⴱⵉⵔ", "ⴱⵄⴷ 2019 ⵄⴰⴼⴰⴽ", "ⵣⵉⴽ, ⵄⴰⴼⴰⴽ :)",
    "ⴱⵉⵏ 2019 ⴷ ⴷⵖⵉ ⵄⴰⴼⴰⴽ", "ⵙⴰⵎⵃ ⵉⵢⵉ, ⵄⴰⵡⴷ ⴷⴰⵖ ⵄⴰⴼⴰⴽ", "ⵜⴰⵏⵎⵎⵉⵔⵜ ⴱⵣⵣⴰⴼ ⵄⵍⴰ ⴰⵢⴽⴽⴰⵏ ☺", "ⵓⵅ!", "ⵉⵍⵍⴰ ⵎⴰ ⵓⵔ ⵉⵙⵡⵓⵔⵉⵏ<br>ⵄⴰⵡⴷ ⴰⵔⵣⵣⵓ ⴷⴰⵖ",
    "ⵜⵢⵓⵥⵕⴰ ⴽⵓⵍⵍⵓ", "ⵜⵥⵔⵉⴷ ⴽⵓⵍⵍⵓ ⵉⴼⵉⴷⵢⵓⵜⵏ ⵏ ⵓⵔⵣⵣⵓ ⵡⴰ", "ⵙⵓⵍ ⵉⵙⴰⵍⴰⵢ", "ⵓⴳⴰⵔ ⵏ yividyuten ⴰⵔⴰ ⴷⵢⴰⵙⴻⵏ ⵙ ⵍⵇⴻⵔⴱ, ⵜⵜⵅⵉⵍⴽ ⴹⴻⴳⴳⴻⵔ ⵖⴻⵔ ⴷⴷⴰⵡ ⵉⵡⴰⴽⴽⴻⵏ ⴰⴷ ⵜⵜⵡⴰⵍⵉⴹ",
    "✅ -> ❌", "❌ -> ✅", "ⵄⴰⵡⴷ ⴹⵕⵥ ⴰⴷ ⵜⴱⴷⴷⵍⴷ ⵙ ⵜⵉⵣⵣⵍⴰ 2x", "ⴰⴼⵙⴰⵔ", "ⴰⴼⴰⵔⵉⵙ ⵏ 🇸🇱", "ⴰⵙⴽⵔⵉⵏ ⴽⵓⵍⵍⵓ", "ⴼⴼⵖ ⵙⴳ ⵜⵍⴳⴰⵎⵜ ⴰ",
    "ⵉⵙⵎⴰⵡⵏ", "ⵏⵖ ⵜⴽⵍⵉⴽⵢⴷ ⴼ ⵜⵍⴳⴰⵎⵜ '𐄛' --> 'ⵙⴱⴷⴷ ⴰⵙⵉⵜ'", "ⵏⵖ ⵜⴽⵍⵉⴽⵢⴷ ⴼ ⵜⵍⴳⴰⵎⵜ '𐄛' --> 'ⵉⵙⵉⵜⵏ' --> 'ⵙⴱⴷⴷ ⴰⵙⵉⵜ ⵡⴰ ⴰⵎ ⴰⵙⵉⵜ'",
    "ⵏⵖ ⵜⴽⵍⵉⴽⵢⴷ ⴼ ⵜⵍⴳⴰⵎⵜ '𐄛' --> 'ⴰⵣⵓⵣⵣⵡ, ⴰⵃⴼⴰⴹ ⴷ ⵓⴱⴹⴰ' --> 'ⵙⴱⴷⴷ ⴰⵙⵉⵜ'", "ⵏⵖ ⵜⴽⵍⵉⴽⵢⴷ ⴼ ⵜⵍⴳⴰⵎⵜ ⵓⴱⴹⴰ --> 'ⴰⵔⵏⵓ ⵙ dock'",
    "ⵏⵖ ⵜⴽⵍⵉⴽⵢⴷ ⴼ ⵜⵍⴳⴰⵎⵜ ⵓⴱⴹⴰ --> 'ⵙⴱⴷⴷ ⴰⵙⵉⵜ' ⵏⵖ 'ⴰⵔⵏⵓ ⵙ ⵓⵙⴽⵔⵉⵏ ⴰⵎⵣⵡⴰⵔⵓ'", "ⵜⴽⵍⵉⴽⵢ ⴼ ⵜⵍⴳⴰⵎⵜ ⵓⴱⴹⴰ --> ⴰⵔⵏⵓ ⵙ ⵓⵙⴽⵔⵉⵏ ⴰⵎⵣⵡⴰⵔⵓ",
    "ⵓⵔ ⵙⵙⵉⵏⵅ ⵎⴰⵏⵎⴽ ⴰⴷ ⵜ ⵜⴳⴷ ⴳ ⵓⵎⵙⵏⴼﻠⵓﻠ ⵏⵏⴽ <br> ⵎⴰⵛⴰ ⴰⵔⵣⴰ ⴼ ⵓⵇⴼⵍ ⴰⵎ 'ⴰⵔⵏⵓ ⵙ ⵓⵙⴽⵔⵉⵏ ⴰⵎⵣⵡⴰⵔⵓ' ⵏⵖ 'ⵙⴱⴷⴷ ⴰⵙⵉⵜ' ⴳ ⵜⵍⴳⴰⵎⵜ ⵓⴱⴹⴰ ⵏⵖ ⵓⵎⵙⵏⴼﻠول ⵜⴽⵍⵉⴽⵢⴷ ⴼⵍⴰⵙ",
    "ⵜⴽⵍⵉⴽⵢ ⴼ 'ⵙⴱⴷⴷ nostalgiaWave'<br>", "ⵜⴽⵍⵉⴽⵢ ⴼ ⵓⵇⴼⵍ ⵡⴰ <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "ⵉⵜⵢⵓⵙⴽⴰⵔ ⵙ ⵓⴼⵓⵙ ⵏ dice b (ⵉⵙⵎ ⵏⵏⵙ ⵢⴰⴹⵏ peiLamed / פילמד) <br><br> ⵜⴰⵡⵉⵣⴰ ⵙⴳ stack overflow ⴷ ⵉⵎⵉⴽ ⵏ ⵓⵙⴳⴳⴷ ⵙ ai <br><br> ⴰⵙⵓⵏⴼⵔ ⵏ peiLamed <br><br> ⴰⴼⴰⵔⵉⵙ ⵏ ⵙⵉⵔⴰⵍⵢⵓⵏ 🇸🇱 <br><br> ⴼⴰⵍⴰⵙⵟⵉⵏ ⵜⴰⴷⵔⴼⵉⵜ 🇵🇸🇸🇩🇨🇩",
    "ⵥⵕ ⵉⵙⵡⴰⵍⴰⵜⵏ", "「」 | 『』 | ⴰⵙⴽⵔⵉⵏ ⴽⵓⵍⵍⵓ ⵉⵍⵍⴰ", "ⵙⵡⵓⵔⵉ ⵙⵉⵙ ⴳ ⵡⴰⵙⴰ :)", "ⴱⴹⴰ ⵉⴼⵉⴷⵢⵓ", "ⵉⴼⵉⴷⵢⵓ ⵏⵏⴽ ⵉⵙⴰⵍⴰⵢ",
    "ⵜⴰནⵎⵎⵉⵔⵜ ⴱⵄⴷ :)", "ⵜⵢⵓⵙⴰⵖⵅ, ⵜⴰ難ⵎⵉⵔⵜ ⴼ ⵓⴱⴹⴰ :)", "ⵜⵙⵜⵎⵜⵄ ⵙ ⵜⴰⵡարգⵉⵜ ⴰ ⵙⴳ ⵓⵎⵣⵔⵓⵢ",
    "ⴰⴱⴹⴰ ⵓⵔ ⵉⵙⵡⵓⵔⵉ ⴳ ⵓⵎⵙⵏⴼﻠⵓﻠ ⵏⵏⴽ, ⴰይⴰ ଖⴼ ⵏⵙⴰⵖⵅ ⴰⵙⵖⵏ. ⵜⴰⵏⵎⵎⵉⵔⵜ ⴼ ⵓⴱⴹⴰ!", //107
    "ⴰⵔⵣⵣⵓ ⴼ ⵡⴰ ⵉⵔⵡⴰⵏ", "ⴰⵎⵣⵔⵓⵢ ⵏ ⵓⵔⵣⵣⵓ", "ⴰⵔⵣⵣⵓ ⴰⵎⴰⵢⵏⵓ", "ⴰⵔⵣⵣⵓ ⵉⵙⴰⵍⴰⵢ...", "ⵓⵔ ⵉⵅⴻⴷⴷⴻⵎ ⴰⵔⴰ", "ⴼⵔⴻⵏ ⴰⵙⴻⵏⵇⴻⴷⴰ ⵓ ⵙⵏⵓⵍⴼⵓⵜ :)", "ⴱⵜⵡ ⵡⵉⴳⵉ ⴰⴷ ⴼⴼⵖⴻⵏ ⵎⴰ ⵢⴻⵍⵍⴰ ⵓ (___). <ⴱⵔ> ⴰⴽⴽⴻⵏ ⴰⴷ ⵜⴻⵙⵙⴻⴽⵍⴻⵙⴹ ⵉⵙⴻⴼⴽⴰⵉⵏⴻⴽ ⵉ ⵍⴻⴱⴷⴰ, ⴹⴻⴳⴳⴻⵔ ⵜⴰⵖⴻⵛⵜ &quot;ⴰⵙⴻⴽⵛⴻⵎ&quot; ⵓ ⵖⴻⵔ ⵉⵙⴻⵎ ⵏ ⵓⴼⴰⵢⵍⵓ :)", //114 
"ⴽⴽⴻⵙ ⴰⵀⵉⵍⴰ", //115 
"ⵙⴼⴻⴹ ⵉⵙⴻⴼⴽⴰⵉⵏⴻⴽ ⵏ ⵓⴼⴻⵔⴷⵉⵙ", //116 
"ⴰⵙⵓⴼⴻⵖ",//117 
"ⵙⵏⵓⵍⴼⵓⴷ ⵉⵙⴻⴼⴽⴰ ⵢⴻⵍⵍⴰⵏ ⴷⴰⵅⴻⵍ ⵏ ⵓⴼⴰⵢⵍⵓⴰⴳⵉ ⵏ ⵓⴹⵔⵉⵙ ⵓ ⵙⴱⴻⴷⴷⵉⵜⴻⵏ ⴷⴻⴳ ⵜⴼⴻⵍⵡⵉⵜ ⵏ ⵓⵙⴻⴽⵛⴻⵎ ⵏ ⵢⵉⵙⴻⵎ", //118 
"ⵎⵉ ⴰⵔⴰ ⵜⴻⵙⴼⴻⴹ ⵉⵙⴻⴼⴽⴰⵉⵏⴻⴽ ⵏ ⵓⴼⴻⵔⴷⵉⵙ ⵏⴻⵖ ⴰⴷ ⵜⴻⵙⴱⴻⴷⴷⴻⴹ/ⴰⴷ ⵜⴻⵙⴱⴻⴷⴷⴻⴹ nostalgiaWave, ⵙⵇⴻⴷⵛⴻⴹ ⵉⵙⴻⴼⴽⴰ ⵏ ⵓⴼⴰⵢⵍⵓ ⵉ ⴷⵢⴻⴼⴼⵖⴻⵏ ⵜⵓⵔⴰ ⴽⴰⵏ (ⴷⴻⴳⵙ ⴰⵡⴰⵍ &quot;NOSTALGIAWAVE&quot;) ⵓ ⵙⴱⴻⴷⴷⵉⵜⴻⵏ ⴷⴻⴳ ⵜⴼⴻⵍⵡⵉⵜ ⵏ ⵓⵙⵎⴻⵍ ⵎⵉ ⴰⵔⴰ ⴷⵢⴻⵙⵜⴻⵇⵙⵉ ⵉⵙⴻⵎⵉⴽ<ⴱⵔ>", //119 
"ⵓⴼⵉⵖⵜ",
"ⴰⵙⵓⴼⴻⵖ nostalgiaWave", "ⵃⵔⴻⵣ ⵉ ⵍⴻⴱⴷⴰ", "ⴰⵃⴻⵣⵣⴻⴱ ⵢⴻⵞⵞⵓⵔ :(",
"ⵄⵔⴻⴹ ⴰⴷ ⵜⴻⵙⴼⴻⴹ ⴽⵔⴰ ⵏ ⵜⵎⵓⵖⵍⵉⵡⵉⵏ ⵢⴻⵜⵜⵡⴰⵃⴻⵔⵣⴻⵏ ⴰⴽⴽⴻⵏ ⴰⴷ ⵜⴻⵙⵙⵓⴼⵖⴻⴹ ⴰⵎⴹⵉⵇ.", "ⴰⵙⴻⴳⴳⴰⵙ:", //125
"ⴰⵙⵏⵓⵍⴼⵓ:", //126
"ⴰⵙⴻⵏⵜⴻⵍ:",
"ⵙⵡⵉⴼ ⵉⵡⴰⴽⴽⴻⵏ ⴰⴷ ⵜⴱⴻⴷⴷⴻⵍⴻⴹ ⴳⴰⵔ ⵜⵎⴻⵖⵔⵉⵡⵉⵏ ⵢⴻⵜⵜⵡⴰⵃⴻⵔⵣⴻⵏ"
  ],
 "kri": [ 
"bay", //0 
"nostaljiaWev", //1 
"peiLamed", //2 
"wetin a fɔ kɔl yu? <br><span class='nstLower'>hit enta afta ☺️</span>", //3 
"nɛks", //4 
"yu", //5 
"nɔstaljia", //6 
"wetin tɛm yu de nostaljik fɔ?<br><span class='nstLower'>(ex 2022, sɔma 2023, mar 2019 - spring 2023)</span>", //7 
"wetin krieta?<br><span class='nstLower'>(opshɔnal, dɛn kin chenj am leta)</span>", //8 
"wetin tɔpik?<br><span class='nstLower'>(opshɔnal, dɛn kin chenj am leta)</span>", //9 
"'s ", //10 
"", //11 
"", //12 
"if yu wan sev yu nostaljia fo leta, nem am ya", //13 
"ɔ nɔto, dats ok", //14 
"fishin out yu vidio dem", //15 
"wan ol lot of 'em", //16 
"plɛya", //17 
"ts de ple vidio", //18 
"we de lod...", //19 
"", //20 
"chuz dis wan&nbsp;-&nbsp;", //21 
"dilit dis wan&nbsp;", //22 
"luk sev nostaljia", //23 
"nɛks wan&nbsp;-&nbsp;", //24 
"opshɔn dɛn", //25 
"➢", //26 
"mɔ pan ts", //27 
"sɔch bak", //28 
"opin vidio", //29 
"chenj nem", //30 
"vids we nɔ de si nɔmɔ", //31 
"wetin gud, ", //32 
"a-qrzf-ub-kmlpwhdvoc>y", //33 
"abcd_efghijklmn_opqrstudvwxyz_", //34 
"0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", //35 
"kɔmɔt", //36 
"las tɛm we yu yuz nostalgiaWave", //37 
"drag mi to di opshɔn we yu want", //38 
"spring", //39 
"sɔm", //40 
"fɔdɔm", //41 
"winta", //42 
"ali", //43 
"mid", //44 
"let", //45 
"jan", //46 
"feb", //47 
"mar", //48 
"apr", //49 we de tɔk bɔt 
"may", //50 
"jun", //51 
"jul", //52 
"ɔg", //53 
"sɛp", //54 
"ɔkt", //55 
"nɔv", //56 
"dɛk", //57 
"janwari", //58 
"februari", //59 
"mach", //60 
"epril", //61 
"may", //62 
"jun", //63 
"julay", //64 
"ɔgɔst", //65 
"sɛptɛmba", //66 
"ɔktoba", //67 
"nɔvemba", //68 
"disɛmba", //69 
"pas 2019 plzz", //70 
"bifo dat, duya :)", //71 
"bitwin 2019 - naw plzz", //72 
"sɔri, tray bak plzz", //73 
"tysm btw ☺", //74 we de sho aw fɔ du am 
"oopsie!", //75 we de tɔk bɔt 
`sɔntin nɔ bin wok<br>tray fɔ fɛn bak`, //76 
"ɔl dɛn bin de wach", //77 
"yu wach ol di vidio dem fo dis sach", //78 
"stil de lod", //79 
"mɔ fim dɛn go kam jisnɔ, tray fɔ skrol fɔ si dɛn", //80 
"✅ -> ❌", //81 
"❌ -> ✅", //82 
"hold bak fɔ toggle 2x spid", //83 
"advatayzmɛnt", //84 
"prɔdakt fɔ 🇸🇱", //85 
"go fulskrin", //86 
"kɔmɔt na dis mɛnyu", //87 
"krɛdit dɛn", //88 
"ɔ klik di '𐄛' mɛnyu --> 'instɔl ap'", //89 
"ɔ klik di '𐄛' mɛnyu --> 'apps' --> 'instɔl dis sayt as ap'", //90 
"ɔ klik di '𐄛' mɛnyu --> 'kas, sev, ɛn sheb' --> 'instɔl ap'", //91 
"ɔ klik di sheri mɛnyu --> 'ad to dock'", //92 
"ɔ klik di sheri mɛnyu --> 'instɔl ap' ɔ 'ad to hom skrin' ", //93 
"klik di sheri mɛnyu --> ad to hom skrin", //94 
"a nɔ rili shɔ aw fɔ du am na yu brawza <br> bɔt luk fɔ wan 'add to homescreen'-esque ɔ 'install app'-esque bɔtin na di sheri mɛnyu ɔ brawza mɛnyu ɛn klik dat", //95 
"klik 'instɔl nostaljiaWev'<br>", //96 
"hit dis bɔtin <br> <bɔtin id='nstFirefoxFullscreen'>「 」</bɔtin>", //97 
"we dice b (aka peiLamed / פילמד) mek am <br><br> ɛp frɔm stak ɔvaflɔ & smɔl bit fɔ ai dibɔg <br><br> we peiLamed disayn am <br><br> prodakt fɔ siera liɔn 🇸🇱 <br><br> fri palestayn 🇵🇸🇸🇩🇨🇩", //98 
"luk di dairekshɔn dɛn", //99 
"「」 | 『』 | fulskrin de", //100 
"yuz mi insted :)", //101 
"shɛri vidio", //102 
"yu vidio de lod", //103 
"thx btw :)", //104 we de sho aw fɔ du am 
"kɔpi, thx 4 sheb :)", //105 
"ɛnjɔy dis blast frɔm di past", //106 
"shɛrin nɔ de wok na yu brawza <br> yuz 'opin vidio' ɛn afta dat sheri frɔm de", //107 
"suk we fiba am", //108 
"sech istri", //109 
"sɔch nyu", //110 
"we de luk fɔ...", //111 
"sharing nɔ bin wok", //112 
"tiise link raus suuche un kopiire :)", "btw dis go go if u (___). <br> fɔ sev yu data fɔ ɔltɛm, hit di &quot;ɛkspɔt&quot; bɔtin ɛn rid di fayl nem :)", //114 
"dilit dis ap", //115 
"kliar yu browsing data", //116 
"ɛkspɔt",//117 
"kɔpi di data insay dis tɛks fayl ɛn pas am na di nem ɛntri bar", //118 
"we yu klia yu brawzin data ɔ dawnlod/riinstɔl nostalgiaWave, kɔpi di data fɔ di fayl we yu jɔs dawnlod (inklud di wɔd &quot;NOSTALGIAWAVE&quot;) ɛn pas insay di input bɔks we i aks yu nem<br>", //119 
"gɛt am",
"ɛkspɔt nostalgiaWave",
"sev fɔ ɔltɛm",
"stɔrɔj ​​ful :(",
"tray fɔ dilit sɔm sev nostaljia fɔ fri ples.", "ia:", //125
"krieta:", //126
"tɔpik:",
"swip fɔ chenj bitwin nostaljia dɛn we yu dɔn sev"
],
  "ko": [
    "에 의해", "nostalgiaWave", "peiLamed",
    "당신을 뭐라고 불러야 할까요? <br><span class='nstLower'>입력 후 엔터를 눌러주세요 ☺️</span>", //3
    "다음", "당신의", "향수",
    "어떤 시기의 향수를 느끼시나요?<br><span class='nstLower'>(예: 2022, 2023년 여름, 2019년 3월 - 2023년 봄)</span>",
    "어떤 크리에이터인가요?<br><span class='nstLower'>(선택 사항이며, 나중에 변경할 수 있습니다)</span>",
    "어떤 주제인가요?<br><span class='nstLower'>(선택 사항이며, 나중에 변경할 수 있습니다)</span>",
    "의 ", "", "", "나중에 보려고 향수를 저장하고 싶다면 여기에 이름을 입력하세요", "아니어도 괜찮습니다", "동영상을 가져오는 중",
    "엄청나게 많네요", "플레이어", "동영상을 재생하는 중", "로딩 중...", "", "이것을 선택&nbsp;-&nbsp;", "이것을 삭제&nbsp;",
    "저장된 향수 보기", "다음&nbsp;-&nbsp;", "옵션", "➢", "자세히 보기", "다시 검색", "동영상 열기", "이름 변경",
    "시청하지 않은 동영상만", "잘 지냈어요, ", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "신경 쓰지 마세요", "마지막으로 nostalgiaWave을 사용한 시간",
    "원하는 옵션으로 저를 드래그하세요", "봄", "여름", "가을", "겨울", "초", "중순", "말", "1월", "2월", "3월", "4월",
    "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월", "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월",
    "9월", "10월", "11월", "12월", "2019년 이후로 해주세요", "좀 더 일찍 부탁드립니다 :)", "2019년에서 현재 사이로 해주세요",
    "죄송합니다, 다시 시도해 주세요", "어쨌든 정말 고마워요 ☺", "이런!", "문제가 발생했습니다<br>다시 검색해 보세요", "모두 시청함",
    "이 검색에 대한 모든 동영상을 시청하셨습니다", "아직 로딩 중", "곧 더 많은 영상이 올라올 예정이니, 스크롤해서 보시면 됩니다",
    "✅ -> ❌", "❌ -> ✅", "다시 길게 누르면 2배속 전환", "광고", "🇸🇱의 제품", "전체 화면", "이 메뉴 나가기", "크레딧",
    "또는 '𐄛' 메뉴 --> '앱 설치'를 클릭하세요",
    "또는 '𐄛' 메뉴 --> '앱' --> '이 사이트를 앱으로 설치'를 클릭하세요",
    "또는 '𐄛' 메뉴 --> '이용, 저장 및 공유' --> '앱 설치'를 클릭하세요", "또는 공유 메뉴 --> 'dock에 추가'를 클릭하세요",
    "또는 공유 메뉴 --> '앱 설치' 또는 '홈 화면에 추가'를 클릭하세요", "공유 메뉴 클릭 --> 홈 화면에 추가",
    "사용 중인 브라우저에서 어떻게 하는지 정확히 모르겠습니다 <br> 하지만 공유 메뉴나 브라우저 메뉴에서 '홈 화면에 추가' 또는 '앱 설치'와 같은 버튼을 찾아 클릭해 보세요",
    "'nostalgiaWave 설치'를 클릭하세요<br>", "이 버튼을 누르세요 <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "제작: dice b (별명 peiLamed / פילמד) <br><br> stack overflow의 도움 및 약간의 AI 디버깅 <br><br> 디자인: peiLamed <br><br> 시에라리온의 제품 🇸🇱 <br><br> 자유 팔레스타인 🇵🇸🇸🇩🇨🇩",
    "안내 보기", "「」 | 『』 | 전체 화면 이용 가능", "대신 저를 사용하세요 :)", "동영상 공유",
    "동영상을 로딩 중입니다", "어쨌든 고마워요 :)", "복사되었습니다, 공유해 주셔서 고마워요 :)", "지나간 추억을 즐겨보세요",
    "사용 중인 브라우저에서는 공유 기능이 작동하지 않아 대신 링크를 복사했습니다. 어쨌든 공유해 주셔서 고마워요!", //107
    "유사한 검색", "검색 기록", "새로 검색", "검색 중...", "작동하지 않았습니다", "이 링크를 선택해서 복사하세요 :)", "참고로 (___)하면 이 데이터는 사라집니다. <br> 데이터를 영구적으로 저장하려면 '내보내기(export)' 버튼을 누르고 파일 이름을 확인하세요 :)", //114
"이 앱을 삭제", //115
"브라우징 데이터 삭제", //116
"내보내기",//117
"이 텍스트 파일의 데이터를 복사하여 이름 입력란에 붙여넣으세요", //118
"브라우징 데이터를 삭제하거나 nostalgiaWave를 설치/재설치할 때, 방금 다운로드한 파일의 데이터('NOSTALGIAWAVE'라는 단어 포함)를 복사하여 이름을 묻는 입력란에 붙여넣으세요<br>", //119
"알겠습니다",
"내보내기 nostalgiaWave", "영구적으로 저장", "저장 공간이 부족해요 :(",
"저장된 추억이 담긴 사진들을 삭제해서 공간을 확보해 보세요.",
"연도:", //125
"제작자:", //126
"주제:", //127
"스와이프하여 저장된 파일을 전환하세요"
  ],
  "he": [
    "על ידי", "nostalgiaWave", "peiLamed",
    "איך אני אמור לקרוא לך? <br><span class='nstLower'>לחץ אנטר לאחר מכן ☺️</span>", //3
    "הבא", "שלך", "נוסטלגיה",
    "לאיזו תקופת זמן אתה נוסטלגי?<br><span class='nstLower'>(דוגמה: 2022, קיץ 2023, מרץ 2019 - אביב 2023)</span>",
    "איזה יוצר?<br><span class='nstLower'>(אופציונלי, ניתן לשינוי מאוחר יותר)</span>",
    "איזה נושא?<br><span class='nstLower'>(אופציונלי, ניתן לשינוי מאוחר יותר)</span>",
    " של ", "", "", "אם אתה רוצה לשמור את הנוסטלגיה שלך למאוחר יותר, תן לה שם כאן", "או שלא, זה בסדר", "דגים את הסרטונים שלך",
    "המון מהם", "נגן", "זה מנגן סרטונים", "טוען...", "", "בחר את זה&nbsp;-&nbsp;", "מחק את זה&nbsp;",
    "הצג נוסטלגיות שמורות", "הבא&nbsp;-&nbsp;", "אפשרויות", "➢", "עוד מזה", "חפש שוב", "פתח סרטון", "שנה שם",
    "סרטונים שלא נצפו בלבד", "מה קורה, ", "a-qrzf-ub-kmlpwhdvoc>y", "abcd_efghijklmn_opqrstudvwxyz_",
    "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", "לא משנה", "הפעם האחרונה שהשתמשת ב-nostalgiaWave",
    "גרור אותי לאפשרות שאתה רוצה", "אביב", "קיץ", "סתיו", "חורף", "תחילת", "אמצע", "סוף", "ינו׳", "פבר׳", "מרץ", "אפר׳",
    "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳", "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
    "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר", "אחרי 2019 בבקשה", "ובכן, לפני השנה הזו בבקשה",
    "בין 2019 לעכשיו בבקשה", "סליחה, נסה שוב בבקשה", "תודה רבה בכל מקרה ☺", "אופסי!", "משהו לא עבד<br>נסה לחפש שוב", "הכל נצפה",
    "צפית בכל הסרטונים עבור חיפוש זה", "עדיין טוען", "הנגן יגלול אוטומטית כשהסרטונים יגיעועוד סרטונים יגיעו בקרוב, נסו לגלול כדי לראות אותם", "✅ -> ❌", "❌ -> ✅",
    "החזק שוב כדי להעביר למהירות כפולה x2", "פרסומת", "מוצר של 🇸🇱", "מסך מלא", "צא מתפריט זה", "קרדיטים",
    "או לחץ על תפריט '𐄛' --> 'התקן אפליקציה'", "או לחץ על תפריט '𐄛' --> 'אפליקציות' --> 'התקן אתר זה כאפליקציה'",
    "או לחץ על תפריט '𐄛' --> 'הזרמה, שמירה ושיתוף' --> 'התקן אפליקציה'", "או לחץ על תפריט השיתוף --> 'הוסף ל-Dock'",
    "או לחץ על תפריט השיתוף --> 'התקן אפליקציה' או 'הוסף למסך הבית'", "לחץ על תפריט השיתוף --> הוסף למסך הבית",
    "אני לא לגמרי בטוח איך עושים את זה בדפדפן שלך <br> אבל חפש כפתור בסגנון 'הוסף למסך הבית' או 'התקן אפליקציה' בתפריט השיתוף או הדפדפן ולחץ עליו",
    "לחץ על 'התקן את nostalgiaWave'<br>", "לחץ על כפתור זה <br> <button id='nstFirefoxFullscreen'>「 」</button>",
    "נוצר על ידי dice b (ידוע גם כ-peiLamed / פילמד) <br><br> עזרה מ-stack overflow וקצת ניקוי באגים של ai <br><br> עוצב על ידי peiLamed <br><br> מוצר של סיירה לאון 🇸🇱 <br><br> פלסטין חופשית 🇵🇸🇸🇩🇨🇩 <br> עם פלשתינה חי",
    "ראה הנחיות", "「」 | 『』 | מסך מלא זמין :)", "השתמש בי במקום :)", "שתף סרטון", "הסרטון שלך נטען",
    "תודה בכל מקרה", "הועתק, תודה על השיתוף :)", "תהנה מההבזק הזה מהעבר",
    "שיתוף לא עובד בדפדפן שלך, אז העתקתי את הקישור במקום. תודה על השיתוף בכל מקרה!", //107
    "חפש דומה", "היסטוריית חיפושים", "חיפוש חדש", "מחפש...", "לא עבד", "תבחרו את הקישור הזה ותעתיקו אותו :)","דרך אגב, אלה ייעלמו אם ת (___). <br> כדי לשמור את הנתונים שלך לצמיתות, לחץ על כפתור 'ייצוא' וקרא את שם הקובץ :)", //114
"מחק אפליקציה זו", //115
"נקה את נתוני הגלישה שלך", //116
"ייצוא", //117
"העתק את הנתונים בתוך קובץ הטקסט הזה והדבק אותם בשורת הזנת השם", //118
"כאשר אתה מנקה את נתוני הגלישה שלך או מתקין/מתקין מחדש את nostalgiaWave, העתק את הנתונים של הקובץ שהורדת זה עתה (כולל המילה 'NOSTALGIAWAVE') והדבק אותם בתיבת הקלט כאשר היא מבקשת את שמך<br>", //119
"הבנתי" //120
  ]
};
for(var WORDKEY of Object.keys(words)){
words[WORDKEY][4] = "--->";
}
words["ar"][71] = "من فضلك، في وقت سابق :)";
words["he"][71] = "מוקדם יותר, בבקשה :)";
words["ar"].push("nostalgiaWave تصدير ");
words["ar"].push("احفظ بشكل دائم");
words["ar"].push(" مساحة التخزين ممتلئة :(");
words["ar"].push("حاول حذف بعض الذكريات المحفوظة لتوفير مساحة.");
words["ar"].push("السنة:");
words["ar"].push("المُنشِئ:");
words["ar"].push("الموضوع:");
words["ar"].push("اسحب للتنقل بين عمليات الحفظ");
words["he"].push("nostalgiaWave ייצוא");
words["he"].push("שמור לצמיתות");
words["he"].push("אחסון מלא :(");
words["he"].push("נסה למחוק כמה נוסטלגיות שנשמרו כדי לפנות מקום.");
words["he"].push("שנה:")
words["he"].push("יוצר:")
words["he"].push("נושא:")
words["he"].push("החלק כדי לעבור בין שמירות");
for(var WORDX of Object.keys(words)){
    words[WORDX][25] = words[WORDX][25] + " + 🔎";
}
var navLang = navigator.language;
if(words[navLang] == undefined){
    try{
        navLang = navLang.split('-')[0];
         if(navLang == "ber"){
            navLang = "zgh";
        }
        if(words[navLang] == undefined){
            navLang = "en-US";
        }
    }catch(e){
        navLang = "en-US";
    }
    }
    var savePerm = false;
try{
    var nstsp = localStorage.getItem('nst_sp');
    if(!nstsp || nstsp !== 'nstStop'){
        savePerm = true;
        }
}
catch(e){
    savePerm = true;
}
try{
// Source - https://stackoverflow.com/a/43116397
// Posted by dmoo
// Retrieved 2026-07-10, License - CC BY-SA 3.0
//Additions by peiLamed
var numberR = Math.random();
try {
  localStorage.setItem(numberR, "Hello World!"); //saves to the database, "key", "value"
} catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
    howToFullscreen(true,[123,124]);
    localStorage.setItem('nostalgiaTokOldVideos','');
  }
}
localStorage.removeItem(numberR, "Hello World!");

}
catch(e){

}
 async function reqA() {
    let urli ="https://script.google.com/macros/s/AKfycbzZFj_09O6q6EQpHZepUbUbiOe8aO-6eWEQT92VJ1wshJiu-3TdlSpXPsrVTFniNbykxw/exec";

    try {
        const response = await fetch(urli);

        if (!response.ok) {
            return [6,'Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg']
        }
       

        const result = await response.text();
        return result.split('\n');   
    } catch (error) {
       return [error,'Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg']
    }
}
var Ads;
async function setA(){
 Ads = await reqA();
}
setA();
var isStarted = false;
var canYT = false;
var player;
var playPause = 0;
var autoplay = 1;
var withinSpeedUp = false;
var currentPlace = 0;
var allVideos = [];
var additions = {
    "en-US": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "en": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "ar": [" ", "<a>&nbsp;  </a>", "<b> </b>"],
    "he": [" ", "<a>&nbsp;  </a>", "<b> </b>"],
    "es": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "fr": [" ", "<b>&nbsp;  </b>", "<a> </a>"]
}
var touchMe = false;
var nextToken = "";
var currentToken = "";
var gE3mode;
var secondFunnyN = 41.23;
var funnyN = 0;
funnyN = secondFunnyN;
var doNow = false;
doNow = true;
var happeningNow = false;
var editMode = false;
function reloadName(){
            var ni = document.querySelector("#uNameplate");
           // ni.innerText = userName.trim();
            ni.style.color = "var(--accent)";
            ni.style.transition = "0.5s";
            ni.style.width = "0px";
            setTimeout(function () {
                ni.innerText = words[navLang][11] + words[navLang][12] + userName + words[navLang][10] + words[navLang][6];
                ni.style.color = "var(--text)";
                ni.style.width = "max-content";
                ni.style.left = "calc(50% + 0.5em)"
                setTimeout(function () {
                    ni.style.transition = "1s";
                    ni.style.left = "calc(50% - " + (ni.getBoundingClientRect().width / 2) +"px + 0.5em)"
                }, 500);
            }, 500);
}
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
        logo.style.top = "0px";
        logo.style.transition = "0.5s";
        var ll = logo.getBoundingClientRect().width;
        logo.style.width = ll + "px";
        document.querySelector("#textEnter").style.left = "calc(2 * var(--margin))";
        setTimeout(function () {
            logo.style.left = 0;
            setTimeout(function () {
                logo.style.width = "100dvw";
                logo.style.borderRadius = "0px";
            }, 250 * nsTimesNumber)
        }, 500 * nsTimesNumber)
    }, 1000 * nsTimesNumber)

}
var stopdouble = false;
var wiggle = "";
var SF = false;
var isTE = false;
var speedVar = 0;
var isPD = false;
var handleSpeed = [1,2];
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
    document.querySelector('#swDrag').innerHTML = words[navLang][38];
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = "";
    SF = true;
  //  document.querySelector('#swDrag').style.width = "calc(100dvw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";

}
function fallbackShare(data) {
    shareWorks = false;
  // Example: Fallback to copying the link to the clipboard
  try{
    evaluateFullscreenReminder(112);
  }catch(e){

  }
}
function endFollow() {
    if(document.querySelector("#swDrag").checkVisibility()){
    if(document.querySelector('#swipeScreen').style.opacity == "1"){
    SF = false;
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#creator')) {
        editModeAnimation();
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#swTopic')) {
        window.open("https://youtube.com/shorts/" + allVideos[currentPlace].replace('📺',''));
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#exitsw')) {
       //change name
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#sharenos')) {
           if(false){

                }else{
                    var bool = localStorage.getItem('nostalgiaTokAllowOldVideos');
                    if(bool == "false"){
                       localStorage.setItem('nostalgiaTokAllowOldVideos','true');    
                      // words[navLang][31] = (localStorage.getItem('nostalgiaTokAllowOldVideos')=="true"?"✅":"❌") + words[navLang][31].replace('✅','').replace('❌','');
                    }else{
                        localStorage.setItem('nostalgiaTokAllowOldVideos','false');
                        //words[navLang][31] = (localStorage.getItem('nostalgiaTokAllowOldVideos')=="true"?"✅":"❌") + words[navLang][31].replace('✅','').replace('❌','');
                           }
                    
                }
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstFs')) {
       howToFullscreen();
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#exportData')) {
        if(document.querySelector('#swDrag').innerText=="-->"){

        }else{
       nstExport();
        }
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstCredits')) {
       howToFullscreen(true, [88,98]);
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstExit') || document.querySelector('#swDrag').parentNode == document.querySelector('#nstex2') ) {
      
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstShare')) {
        if(shareWorks){
        var Bbb = document.createElement('button');
        Bbb.addEventListener('click', async () => {
  const shareData = {
    title: 'nostalgiaWave',
    text: words[navLang][106],
    url: window.location.href.split('?')[0]+"?share="+encodeURIComponent(allVideos[currentPlace].replace('📺',''))+"&user="+encodeURIComponent(JSON.stringify(user)) 
  };

  // 1. Check if the browser supports the Web Share API
  if (navigator.share) {
    try {
      // 2. Invoke the native sharing menu
      await navigator.share(shareData);
      console.log('Content shared successfully!');
    } catch (error) {
      // Handles user cancellation or system errors
      console.log('Sharing failed or was canceled:', error.message);
       
    }
  } else {
    // 3. Fallback behavior if Web Share API is missing
    fallbackShare(shareData);
  }
});


        document.body.append(Bbb);
        Bbb.click();
}else{
    prompt(words[navLang][113],window.location.href.split('?')[0]+"?share="+encodeURIComponent(allVideos[currentPlace].replace('📺',''))+"&user="+encodeURIComponent(JSON.stringify(user)));
}
    }
    }
    if(document.querySelector('#swDrag').parentNode == document.querySelector('#creator') || document.querySelector('#swDrag').parentNode == document.querySelector('#swTopic') || document.querySelector('#swDrag').parentNode == document.querySelector('#sharenos')|| document.querySelector('#swDrag').parentNode == document.querySelector('#nstCredits')|| document.querySelector('#swDrag').parentNode == document.querySelector('#nstFs')|| document.querySelector('#swDrag').parentNode == document.querySelector('#nstExit')|| document.querySelector('#swDrag').parentNode == document.querySelector('#nstShare') || document.querySelector('#swDrag').parentNode == document.querySelector('#exportData') || document.querySelector('#swDrag').parentNode == document.querySelector('#nstex2')){
    document.querySelector('#touchOverlay').style.display = "block";
    setTimeout(function () {
        document.querySelector('#touchOverlay').style.display = "block";
    },100)
    document.querySelector('#swipeScreen').style.opacity = 0;
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = words[navLang][38].split('+')[0];
    document.querySelector('#swipeScreen').style.opacity = "0";
    setTimeout(function () {  document.querySelector('#swipeScreen').style.display = "none";}, 500)
}
    }
}
var Arr = [];
var posinar = -1;
var whatYouScrolled = [];
var oldSearches = [];
var canEMAog = true;
function openAh() {
    var ah = document.querySelector('#allHold');
    ah.style.transition = "0.5s";
    ah.style.top = "calc(0em"
    ah.style.left = "0";
    ah.style.width = "100dvw";
    ah.style.height = "100dvh";
    ah.setAttribute('onclick', '');
    document.querySelector('#playground').style.opacity = 0;
    document.querySelector('#uvula').style.opacity = 0;
    document.querySelector('#uvula').style.display = "none";
}
function endSwipeFunc(){
     document.querySelector('#touchOverlay').style.display = "block";
    setTimeout(function () {
        document.querySelector('#touchOverlay').style.display = "block";
    },100)
    document.querySelector('#swipeScreen').style.opacity = 0;
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = "";
    setTimeout(function () { document.querySelector('#swipeScreen').style.display = "none"; }, 500)
}
var hTFInterval;
var hTFInt = 0;
var hTFCurrPlace;
var hTFallVideos = [];
var hTFCover;
var hTFMessage;
const isMobile = () => {
  // Check if the new API is supported
  if (navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  }
  
  // Fallback for Safari/Firefox (see Solution 3)
  return /Mobi|Android/i.test(navigator.userAgent);
};
function hTFEnd(){
    try{
   player.unMute();
    }catch(e){

    }
   for(var i of document.querySelectorAll('.hTFMessage')){
    try{
document.querySelectorAll('.hTFCover')[0].style.opacity = "0";
setTimeout(function(){
    document.querySelectorAll('.hTFCover')[0].remove()
}, 500)
    }catch(e){}
    try{
document.querySelectorAll('.hTFMessage')[0].style.opacity = "0";
setTimeout(function(){
    document.querySelectorAll('.hTFMessage')[0].remove()
}, 500)
    }catch(e){}
document.querySelector('#allHold').style.marginLeft = "0vw";
   }


}
function howToFullscreen(a,b,searchError){
    setTimeout(function(){
        try{
    player.mute();
        }catch(e){}
    document.querySelector('#allHold').style.marginLeft = "-50vw";
    hTFCover = document.createElement('div');
    hTFCover.setAttribute('class','hTFCover');
    hTFCover.style.mask = "linear-gradient(to right, black 1%, transparent 99%)";
    hTFCover.style.width = "50dvw";
    hTFCover.style.height = "100dvh";
    hTFCover.style.left = "0";
    hTFCover.style.top = "0em";
    hTFCover.style.zIndex = "100000";
    hTFCover.style.position = "absolute";
    hTFCover.style.opacity = "0";
    hTFCover.style.transition = "0.5s";
    setTimeout(function(){
    hTFCover.style.opacity = "1";
    },50)
    document.body.append(hTFCover);
    hTFMessage = document.createElement('div');
    hTFMessage.setAttribute('class','hTFMessage');
    hTFMessage.append(document.createElement('b'));
    hTFMessage.append(document.createElement('p'));
    hTFMessage.querySelector('p').setAttribute('class','scrollable');
    if(a){
        hTFMessage.querySelector('b').innerText = words[navLang][b[0]];
        if(!searchError){
        hTFMessage.querySelector('p').innerHTML = words[navLang][b[1]];
        }else{
             hTFMessage.querySelector('p').innerHTML = words[navLang][b[1]].split('<br>')[0];
        }
    }else{
         hTFMessage.querySelector('b').innerText = words[navLang][86];
       var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
       // Source - https://stackoverflow.com/a/19176790
// Posted by Havaligi Sathish, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-02, License - CC BY-SA 4.0
var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
// Source - https://stackoverflow.com/a/26358856
// Posted by Nimesh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-02, License - CC BY-SA 4.0
var bowserr = "unknown";
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    bowserr = ('Opera');
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    bowserr = ('Edge');
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    bowserr = ('Chrome');
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    bowserr = ('Safari');
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    bowserr = ('Firefox');
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
    bowserr = ('IE');
  } else {
    bowserr = ('unknown');
  }

  //From David Adams @ codeshack.io
const isMobile = () => {
  // Check if the new API is supported
  if (navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  }
  
  // Fallback for Safari/Firefox (see Solution 3)
  return /Mobi|Android/i.test(navigator.userAgent);
};
var numberToBeSeen = 95;
if(OSName.includes('Windows') && bowserr == "Chrome" && isMobile() == false){
    numberToBeSeen = 89;
}
if(OSName.includes('Windows') && bowserr == "Edge" && isMobile() == false){
    numberToBeSeen = 90;
}
if((OSName == "Mac/iOS" || OSName == "Unix") && bowserr == "Chrome" && isMobile() == false){
    numberToBeSeen = 91;
}
if((OSName == "Mac/iOS" || OSName == "Unix") && bowserr == "Safari" && isMobile() == false){
    numberToBeSeen = 92;
}
if(isMobile() && bowserr == "Chrome" && iOS == false){
    numberToBeSeen = 93;
}
if(isMobile() && iOS){
    numberToBeSeen = 94;
}
if(bowserr == "Firefox"){
    numberToBeSeen == 97
}
if(numberToBeSeen < 94){
hTFMessage.querySelector('p').innerHTML = words[navLang][96] + words[navLang][numberToBeSeen];
}else{
    hTFMessage.querySelector('p').innerHTML = words[navLang][numberToBeSeen];
}
    }
    var Bb = document.createElement('button');
    Bb.setAttribute("class","Bbbutt");
    Bb.innerText = words[navLang][120] + " ✅";

    var extraPress = "";
    if(a && (b[0] == 77 || b[0] == 75) && !searchError){
        
        extraPress = "; evaluateFullscreenReminder(28);"
    }
    Bb.setAttribute('onclick','hTFEnd()'+extraPress)
    hTFMessage.append(Bb);
    document.body.append(hTFMessage);
    hTFCover.style.opacity = "0";
    hTFCover.style.transition = "0.5s";
    setTimeout(function(){
    hTFCover.style.opacity = "1";
    },50)
},100)
try{document.querySelector('#nstFirefoxFullscreen').addEventListener('click','firefoxFullsc()')}catch(e){}
}
function firefoxFullsc() {
  var doc = document.documentElement; // Targets the entire page
  
  if (doc.requestFullscreen) {
    doc.requestFullscreen().catch(err => {
      evaluateFullscreenReminder(112);
    });
  }else{
    evaluateFullscreenReminder(112);
  }
  hTFEnd();
}
function editModeAnimation() {
    try{
        document.querySelector('#uMiniball').style.display = "none";
        document.querySelector('#uMiniball').style.opacity = "0";
        document.querySelector('#uMiniball').style.transform = "scale(0)";
    }catch(e){

    }
    posinar = -1;
     var bB = [...document.querySelector('#playground').querySelectorAll('button')];
    for(var iIii of bB){
        iIii.setAttribute('class','notspecial');
    }
            bB[bB.length - 1].setAttribute('class','primaryButton special');
    for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 0;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 0;
        }
        try{
    player.pauseVideo();
        }
        catch(e){

        }
    document.querySelector('#pgTitle').style.opacity = 1;
    document.querySelector('#pgTitle').querySelector('b').innerText = words[navLang][109];
    document.querySelector('#pgTitle').querySelector('button').innerText = "X";
    setTimeout(function () {
        document.querySelector('#pgTitle').style.display = "flex";
        document.querySelector("#allHold").style.border = "1px solid var(--accent)"
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
            //pqb[1].innerText = words[navLang][108];
            //pqb[1].setAttribute('class', 'primaryButton');
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
            ah.style.top = "calc(" + (pg1.offsetTop) + "px + 1em + 0em)";
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
    if(allVideos.length < 1){
        allVideos.push(Ads[1]);
        allVideos.push(Ads[1]);
    }
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
       //var button = pg1.querySelector('#pgSN');
       // button.style.transition = "0.5s";
       // button.style.opacity = "0";
        setTimeout(function () {
           // button.remove()
        }, 1000)
        var pqb = [...pg2.querySelectorAll('button')];
        pqb[0].style.display = "block";
        //pqb[1].innerText = words[navLang][108];
        //pqb[1].setAttribute('class', 'primaryButton');
        var pqb2 = [...pg1.querySelectorAll('button')];
        pqb2[0].setAttribute('class', 'special');
        //pqb2[1].setAttribute('class', 'special');
        
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
            pg2.querySelector('.pgP').style.left = "calc(100dvw - var(--margin) - " + pg2.querySelector('.pgP').getBoundingClientRect().width + "px)";
            pg2.querySelector('.pgCover').style.left = "var(--margin)";
            pg2.setAttribute('dir', 'left');
        } else {
            pg2.querySelector('.pgP').style.left = "var(--margin)";
            pg2.querySelector('.pgCover').style.left = "calc(100dvw - var(--margin) - (2*var(--margin) * var(--screenWidthRatio)))";
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
                ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em";
                document.body.append(pg1.querySelector('#allHold'));
                ah = document.querySelector('#allHold');

                var ahBcr = ah.getBoundingClientRect();
                ah.style.width = ahBcr.width;
                var pg = document.querySelector('#playground');
                pg.scrollTo(0, pg.scrollHeight);
                ah.style.transition = "0.3s";
                //kghghj
                // ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";

                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em + 0em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height;
                ah.style.transition = "0.5s";

                pg.scrollTo(0, pg.scrollHeight);
                ahBcr = pg2.querySelector('.pgCover').getBoundingClientRect();
                var ahBcrOG = pg1.querySelector('.pgCover').getBoundingClientRect();
                ah.style.width = ahBcr.width + "px";
                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em + 0em)";
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
                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em + 0em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height;
                ah.style.transition = "0.5s";
                ah.style.top = "calc(0px + 0em)";
                ah.style.left = "0";
                ah.style.width = "100dvw";
                ah.style.height = "100dvh";
                document.querySelector('#uvula').style.opacity = "1";
                document.querySelector('.uBall').style.overflow = "hidden";
                document.querySelector('#uvula').style.zIndex = "1";
                document.querySelector('#textEnter').style.opacity = "0.8";
                reloadName();
                canEMA = true;
            }, 1000)
        }, 50)
    }

}
function pgCancel(text) {
    try{
    endSavedSwipe();
    }
    catch(e){
        console.log(e);
        }
    tetVar = true;
    //var bB = [...document.querySelector('#playground').querySelectorAll('button')];
   // bB[bB.length - 1].setAttribute('class','primaryButton');
    
    var oldPlayer;
       for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 1;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 1;
        }
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
        ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em + 0em)";
        ah.style.left = ahBcr.x + "px";
        ah.style.height = ahBcr.height + "px";
        ah.style.width = ahBcr.width + "px";
        document.body.append(ah);
        ah.style.transition = "0.5s";
        setTimeout(function () {
            ah.style.top = "calc(0px + 0em)";
            ah.style.left = "0";
            ah.style.width = "100dvw";
            ah.style.height = "100dvh";
            canEMA = true;
           document.querySelector('#pgTitle').style.opacity = 0;
            setTimeout(function () {
                document.querySelector('#pgTitle').style.display = "none";
                document.querySelector("#allHold").style.border = "";
                requestTheFullscreen({'yes':true,'no':false}[fullsc]);
				document.querySelector('#touchOverlay').style.display="block";
            }, 500);
        }, 100);
    } else {
        var voHold = [];
        for(var Aiy of [...document.querySelectorAll('.videoOrbit')]){
            voHold.push(Aiy);
        }
        document.querySelector('#uvula').style.display = "none";
        pg1.remove();
        if ([...document.querySelectorAll('.pgButtonHold')].length < 2) {
            document.querySelector('.pgButtonHold').innerHTML = `<button class="notspecial primaryButton" onclick="eMA2(true, this)">`+words[navLang][110]+`</button><button id="pgSN" class="notspecial pgButton" onclick="eMA2(true, this, true)">`+words[navLang][110]+`</button>`
        } else {
            var bB = [...document.querySelector('#playground').querySelectorAll('button')];
    for(var iIii of bB){
        iIii.setAttribute('class','notspecial');
    }
            bB[bB.length - 1].setAttribute('class','primaryButton special');
   
            document.querySelector('.primaryButton').setAttribute('class', '');
        }
       oldPlayer = document.querySelector('#vfCrop');
        document.querySelector('.uBall').innerHTML = `<div class='teShape'></div><div class='teShape'></div>`;
        swapTe(17, function () { }, 18, function () { }, true);
        document.querySelector('#textEnter').innerHTML += ` <div id="displayVideos">
            <div id="buttonHolder">
                <div id="leftButton" class="sideButton" words="25"></div>
            </div>
        </div>`;
        document.querySelector('#displayVideos').append(oldPlayer);
         var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navLang][84]+({'no': '↘','yes': '↖'})[fullsc];
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                          
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                            }
                                  if(avcp.length < 7){
avcp = Ads[1];
											}
                                      // console     
                                      //player.destroy();
        if (typeof YT !== 'undefined' && YT.Player) {
            createOrReloadYouTubePlayer(avcp);
        } else {
            onYouTubeIframeAPIReady();
        }
        //player.loadVideoById(allVideos[currentPlace]);
        document.querySelector('#fullscreenButton').style.display = "block";
        runAnimation(true, true);
        editModeAnimation();
        var pgt = document.querySelector('#pgTitle');
        pgt.querySelector('button').innerText = "X";
        
        pgt.querySelector('b').innerText = words[navLang][109];
         if ([...document.querySelectorAll('.pgButtonHold')].length <= 1) {
            document.querySelector('.pgButtonHold').innerHTML = `<button  class="notspecial primaryButton" onclick="eMA2(true, this)">`+words[navLang][110]+`</button><button id="pgSN" class="notspecial pgButton" onclick="eMA2(true, this, true)">`+words[navLang][110]+`</button>`
                }
    }
  setTimeout(function(){  if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                            try{
                                            for(var Aiyy of voHold){
                                                ah.append(Aiyy);
                                            }
                                            requestTheFullscreen({'yes':true,'no':false}[fullsc]);
                                        }catch(e){

                                        }
                                        }  else {
                                            try{
                                            for(var Aiyy of voHold){
                                                ah.append(Aiyy);
                                            }
                                            requestTheFullscreen({'yes':true,'no':false}[fullsc]);
                                        }catch(e){

                                        }
                                              var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navLang][84]+({'no': '↘','yes': '↖'})[fullsc];
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                            }
                                            setTimeout(function(){
                                            var TOOO = document.querySelector('#touchOverlay');
                                            TOOO.style.transition ="0";
                                            TOOO.style.marginLeft = "-1000vw";
												if(avcp.length < 7){
            avcp = Ads[1];
        }
                                            try{
                                            player.loadVideoById(avcp)
                                            }catch(e){}
                                            setTimeout(function(){ TOOO.style.marginLeft = "";},600)
                                            try{
                                             player.loadVideoById(avcp);
                                            }catch(e){}
                                            },100);
                                          // alert([allVideos[currentPlace], currentPlace])
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)].replace('📺',''));
                                          }
                                          catch(e){
                                            console.log(e);
                                          }
                                           // alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')])
                                         console.error(allVideos);
                                        }},600)
                                       // document.querySelector('#videoOverlay').style.marginLeft="0"
}

function editModeFunction(simmilar, pgGivenData, neww) {
    tetVar = true;
    try{
         for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 0;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 0;
        }
    }catch(e){

    }
try{
    document.querySelector('#uvula').style.zIndex = "1";
    //document.querySelector('#playground').scrollTo(0, 0);
    onScroll = false;
    var ah = document.querySelector('#allHold');
    ah.setAttribute('onclick', '');
    var pggd = [...pgGivenData.parentNode.parentNode.querySelectorAll('.pgData')];
    for (var i in pggd) {
        user[['year', 'preferences', 'topics'][i]] = pggd[i].innerText;
    }
    //
    
    //
}
catch(e){
    console.log(e);
}
document.querySelector('#playground').style.opacity = 0;
    if (simmilar) {
         document.querySelector('#uvula').style.zIndex = "1";
        document.querySelector('#uvula').style.display = "block";
        document.querySelector('.uBall').innerHTML = "";
        var pg = document.querySelector('#pgTitle');
        pg.querySelector('button').innerText = "<";
        pg.querySelector('b').innerText = words[navLang][111];
        var teTee = document.querySelector('#textEnter');
        var uv = document.querySelector('#uvula');
        var ul = document.querySelector('#uLine');

        teTee.style.left = "100dvw";
        setTimeout(function () {
            teTee.innerHTML = `
<b id="teTitle" words="7">what time period are you nostalgic for?</b>
<div class="teFlexx">
        <input n="0" type="text" class="hasBorder" id="teInput" />
        </div>
<button id="teButton" words="4" onclick='  if (doneAnimation) {
      var thisVall = validateDate(document.querySelector("#teInput").value);
      if (!thisVall.includes("Year Error")) {
          user.year = thisVall;
          makeShapes(user.year, "       ", "y", true);
          swapTe(8, generatePreferences, 4, generatePreferences);
          document.querySelector("#teButton").removeAttribute("onclick", "");
      } else {
          handleError(thisVall)
      }
  }' style="display: block; opacity: 1;">next</button>
<button id="viewSaved"></button>
        <button id="teButton" words="4" onclick='  if (doneAnimation) {
      var thisVall = validateDate(document.querySelector("#teInput").value);
      if (!thisVall.includes("Year Error")) {
          user.year = thisVall;
          makeShapes(user.year, "       ", "y", true);
          swapTe(8, generatePreferences, 4, generatePreferences);
          document.querySelector("#teButton").removeAttribute("onclick", "");
      } else {
          handleError(thisVall)
      }
  }'></button>

        <button id="saveThis"></button>
    `;
            var dv = document.createElement('div');
            dv.setAttribute('id', 'displayVideos');
            dv.innerHTML = ` <div id="vfCrop"><div id="videoFrame" src="" frameborder="0" allow="autoplay">
            </div></div>
            <div id="buttonHolder">
                <div id="leftButton" class="sideButton" words="25"></div>
            </div>`;
            document.body.querySelector('#allHold').append(dv);
            
            document.querySelector("#leftButton").setAttribute("onclick", "displaySwipe('l')");
         //   document.querySelector("#rightButton").setAttribute("onclick", "displaySwipe('r')");
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
                    console.error(e);
                }
                    try {
                        document.querySelector("#teButton").style.opacity = 1;
                    }
                    catch (e) {
                        console.error(e);
                    }
            doneAnimation = true;
            uv.style.top = "calc(-50dvh + 1.5em)";
            uv.style.display = "block";
            ul.style.height = "calc(50dvh - (var(--ballSize) / 2))";
            ul.style.top = "50%";
            //document.querySelector('#fullscreenButton').style.display = "none";
            if (!neww) {
                 try {
                    document.querySelector("#teTitle").style.opacity = 1;
                }
                catch (e) {
                    console.error(e);
                }
                    try {
                        document.querySelector("#teButton").style.opacity = 1;
                    }
                    catch (e) {
                        console.error(e);
                    }
                editMode = true;
                swapTe(shVar[isSharing][0], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");

                        } else {
                            handleError(thisVall)
                        }
                    }
                }, shVar[isSharing][1], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");

                        } else {
                            handleError(thisVall)
                        }
                    }
                });
                setTimeout(function () { jintI = 0; fkAround2() }, 550);
             
            } else {
                swapTe(shVar[isSharing][0], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");
                        } else {
                            handleError(thisVall)
                        }
                    }
                }, shVar[isSharing][1], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");
                        } else {
                            handleError(thisVall)
                        }
                    }
                });
                setTimeout(function () { document.querySelector('#teInput').value = ""}, 300);
               
            }
            setTimeout(function () {
                if (!neww) {
                    document.querySelector('#teInput').value = backValidateDate(user.year);
                } else {
                    editMode = false;
                }
                 document.querySelector('#uvula').style.zIndex = "1";
            }, 1000)
            for (var i of [...document.querySelectorAll('[words]')]) {
                try {
                    ah = additions[this.navLang][i.getAttribute('words')].split(" ")
                }
                catch (e) {
                    newConsoleLog(e);
                    ah = ["", ""]
                }
                try {
                    i.innerHTML = ah[0] + words[this.navLang][i.getAttribute('words')] + ah[1];
					if(i.getAttribute('words') == "25" || parseInt(i.getAttribute('words')) == 25){
i.innerHTML = words[navLang][i.getAttribute('words')]+ "";
					}
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
        if (tb.getBoundingClientRect().top + tb.getBoundingClientRect().height > 0) { sht.style.top = "calc(0em + 1em + " + tb.getBoundingClientRect().top + tb.getBoundingClientRect().height + "px)" } else { sht.style.top = "0em" }
    }
});
window.addEventListener('touchmove', function (e) {
    if (!e.target.closest('.scrollable')) {
        e.preventDefault(); // Prevents page scrolling
    }
}, { passive: false });
var isSharing = "false";
var shVar = {
    "true": [15,0,15,0],
    "false": [7,4,8,4]
}
function nameClick(a){
    if(a == "false"){
        evaluateFullscreenReminder(101);
    }else{
        window.open('nostalgiawave.me')
    }
}
var shareVarr;
var teby = 0;
var shareWorks = true;
window.onload = function () {
    try{
        document.head.innerHTML +=`   <!-- Add this line to the <head> of your index.html file -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8V9LC1BD89"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8V9LC1BD89');
</script>
    <link rel="icon" type="image/png" href="logo.png" />`;
    }
    catch(e){}
   
    document.body.addEventListener('keypress',function(event){
        if(event.keyCode == "32"){
             if(player.getPlayerState() === 1){
                                                                         player.pauseVideo();
                                                                          try{
                                                                        if(fullsc == 'yes'){
                                                                        document.querySelector('#titleBar').style.zIndex = "0";
                                                                        }
                                                                    }
                                                                    catch(e){
                                                                    }
                                                                     }else{
                                                                         player.playVideo();
                                                                          try{
                                                                       
                                                                         document.querySelector('#titleBar').style.zIndex = "2000";
                                                                        
                                                                    }
                                                                    catch(e){

                                                                    }
                                                                    }
        }
    })
    document.body.addEventListener('keydown',function(event){
        if(document.querySelector('#displayVideos').style.display == "block" && document.querySelector('#swipeScreen').style.opacity == 0 && (document.querySelector('#playground').style.opacity == "0" || document.querySelector('#playground').style.opacity == "")){
       console.error(event.key == "ArrowUp");
            if(event.key == "ArrowUp"){
            swipeDown();
        }
        if(event.key == "ArrowDown"){
            swipeUp();
        }
        }
    })
    // Source - https://stackoverflow.com/a/51276012
// Posted by Lucio Paiva, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-27, License - CC BY-SA 4.0



    setInterval(function(){
    try{
        //remove the false when i turn this back on
        allowAd = false;
        if(allowAd){
        var adBar = document.querySelector("#adBar")
       /* adBar.innerHTML = `<script>
  atOptions = {
    'key' : '4f35bc4a63f00c2de9cba85b89f94959',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/4f35bc4a63f00c2de9cba85b89f94959/invoke.js"></script>`;
*/
 adBar.style.opacity = "1";
 adBar.style.width = "100vw";
adBar.style.height = "2em";
setTimeout(function(){
    adBar.style.opacity = "0";
 adBar.style.width = "0";
},10000);
        
       } }catch(e){alert(e);}
        },20000);
	
    try{
setTimeout(
    function(){
        document.querySelector('body').style.backgroundColor="var(--bg)";
    },200)
    }catch(e){
console.log(e);
    }
    try{
        setInterval(function(){
             if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode
        newConsoleLog('Dark mode is preferred');
        var root = document.documentElement;
      root.style.setProperty('--bg', '#5E3023')
    root.style.setProperty('--accent', '#5E3023')
    root.style.setProperty('--second', '#5D675B')
    root.style.setProperty('--text', 'hsl(330, 8.33%, 85%)')
    root.style.setProperty('--font', 'Elms Sans')
    root.style.setProperty('--ballSize', '10em')
    root.style.setProperty('--oj', '#5D675B')
    root.style.setProperty('--swText', '#5E3023')
    root.style.setProperty('--lightTxt', '#5E3023')
    root.style.setProperty('--emphText', '#5E3023')
    root.style.setProperty('--emphBg', '#5E3023')
    root.style.setProperty('--contrast', '#000000')
    root.style.setProperty('--margin', '1em')
    root.style.setProperty('--emphasizedText', '#f4f2f3')
    root.style.setProperty('--lighterText', '18px')
    root.style.setProperty('--pgText', '#5E3023')
    root.style.setProperty('--pgButtonText', '#f4f2f3d7')
    root.style.setProperty('--uvulaColor','hsl(13.22, 45.74%, 45.29%)');
       
    }else{
 // User prefers dark mode
        newConsoleLog('Light mode is preferred');
        var root = document.documentElement;
       root.style.setProperty('--bg', '#9EBC9F')
    root.style.setProperty('--accent', '#9EBC9F')
    root.style.setProperty('--second', '#5E3023')
    root.style.setProperty('--text', 'hsl(330, 8.33%, 85%)')
    root.style.setProperty('--font', 'Elms Sans')
    root.style.setProperty('--ballSize', '10em')
    root.style.setProperty('--oj', '#5E3023')
    root.style.setProperty('--swText', '#9EBC9F')
    root.style.setProperty('--lightTxt', '#9EBC9F')
    root.style.setProperty('--emphText', '#9EBC9F')
    root.style.setProperty('--emphBg', '#9EBC9F')
    root.style.setProperty('--contrast', '#F4F2F3')
    root.style.setProperty('--margin', '1em')
    root.style.setProperty('--emphasizedText', '#F4F2F3')
    root.style.setProperty('--lighterText', '18px')
    root.style.setProperty('--pgText', '#9EBC9F')
    root.style.setProperty('--pgButtonText', '#f4f2f3d7');
     root.style.setProperty('--uvulaColor', 'hsl(122, 18.29%, 87.84%)')
    }
        }, 1000)
    }catch(e){

    }
    
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var shareUrl = decodeURIComponent(urlParams.get('share'));
if(shareUrl!=="null"){
     
     shareVarr = shareUrl;
     words[navLang][32] = " "+words[navLang][103]+ " ";;
     words[navLang][3] = " "+words[navLang][103]+" ";
     isSharing = "true";
     console.log(window.isSharing);
setTimeout(function(){
    
    document.querySelector('#uvula').style.display = "block";
    document.querySelector('#uvula').style.opacity = "1";
    user = JSON.parse(decodeURIComponent(urlParams.get('user')));
    makeShapes(user.year,'   ','y',true);
    makeShapes(user.topics,'   ','p',true);
    makeShapes(user.preferences,'   ','t',true);
    setTimeout(function(){runAnimation();},500);
},1000);
}



    if(localStorage.getItem('nostalgiaTokAllowOldVideos') == null){
        localStorage.setItem('nostalgiaTokAllowOldVideos',false);
    }
    if(localStorage.getItem('nostalgiaTokOldVideos') == null){
        localStorage.setItem('nostalgiaTokOldVideos','');
    }
    if (localStorage.getItem('nostalgiaTokName') !== null) {
        nsTimesNumber = 1;
    }
    let root = document.documentElement;

  
        root.style.setProperty('--screenWidthRatio',(screen.width/screen.height));

 

    fullsc = 'no';
    sVl = {
        no: ["calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)))", "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)", "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)))"],
        yes: ["calc(100dvw - 0.25em - 1em)", "0.75em", "calc(100dvw - 0.25em - 1em)"]
    }
    sVt = {
        no: ["calc(100dvh - 10em + 4em)", "3.5em"],
        yes: ["calc(100dvh - 0.25em - 1em)", "1.25em"]
    }
    var Arr = [];
    var posinar = -1;
    var whatYouScrolled = [];
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode
        newConsoleLog('Dark mode is preferred');
        const root = document.documentElement;
        root.style.setProperty('--bg', '#5E3023')
    root.style.setProperty('--accent', '#5E3023')
    root.style.setProperty('--second', '#5D675B')
    root.style.setProperty('--text', 'hsl(330, 8.33%, 85%)')
    root.style.setProperty('--font', 'Elms Sans')
    root.style.setProperty('--ballSize', '10em')
    root.style.setProperty('--oj', '#5D675B')
    root.style.setProperty('--swText', '#5E3023')
    root.style.setProperty('--lightTxt', '#5E3023')
    root.style.setProperty('--emphText', '#5E3023')
    root.style.setProperty('--emphBg', '#5E3023')
    root.style.setProperty('--contrast', '#000000')
    root.style.setProperty('--margin', '1em')
    root.style.setProperty('--emphasizedText', '#f4f2f3')
    root.style.setProperty('--lighterText', '18px')
    root.style.setProperty('--pgText', '#5E3023')
    root.style.setProperty('--pgButtonText', '#f4f2f3d7')
    root.style.setProperty('--uvulaColor','hsl(13.22, 45.74%, 45.29%)');
       
    } 
    newConsoleLog(1);
    for (var ii of jintArr) {
        var fg = Array.from(words[navLang][33]);
        fg[ii] = words[this.navLang][34][Math.floor(Math.random() * words[this.navLang][34].length)];
        words[navLang][33] = fg.join('');
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
                document.querySelector('#swDrag').innerText = "🔎";
               
               // document.querySelector('#touchOverlay').style.display = "block";
            }
            if (closest[1] == "#swTopic") {
                document.querySelector('#swDrag').innerText = allVideos[currentPlace];
              
               // document.querySelector('#touchOverlay').style.display = "block";
            }
            if (closest[1] == "#exitsw") {
                var inp = document.createElement('input');
                var exii = document.querySelector('#exitsw');
                exii.setAttribute('onmouseup','SF = false; this.querySelector("input").focus(); this.querySelector("input").click();');
                exii.setAttribute('ontouchend','SF = false; this.querySelector("input").focus(); this.querySelector("input").click();');
                inp.setAttribute('onkeyup',`if(event.keyCode == 13){ var vall = document.querySelector('#inpName').value; if(vall.startsWith('NOSTALGIAWAVE')){var localStoragei =JSON.parse(vall.split('NOSTALGIAWAVE')[1]); Object.entries(localStoragei).forEach(([key, value]) => {localStorage.setItem(key, value);});userName=localStorage.getItem('nostalgiaTokName');window.location.reload();}else{if(vall!==undefined && vall.length > 0 && vall!==""){if(false){}else{localStorage.setItem('nostalgiaTokName',vall.trim())}}; userName = vall.trim(); reloadName();} SF = true; endSwipeFunc();}`)
                inp.setAttribute('id','inpName');
                if(false){

                }else{
                   
                    
                inp.setAttribute('placeholder',localStorage.getItem('nostalgiaTokName'))
                }
               document.querySelector('#swDrag').innerHTML = '';
                document.querySelector('#swDrag').append(inp);
            }
            if (closest[1] == "#sharenos") {
                if(false){

                }else{
                    var bool = localStorage.getItem('nostalgiaTokAllowOldVideos');
                    if(bool == "true"){
                      document.querySelector('#swDrag').innerText = words[navLang][82];
                      
                    }else{
                       document.querySelector('#swDrag').innerText = words[navLang][81];
                          }
                    
                }
                
               
            }
            if (closest[1] == "#nstFs") {
                document.querySelector('#swDrag').innerText = words[navLang][99];
            }
            if (closest[1] == "#exportData") {
                document.querySelector('#swDrag').innerText = words[navLang][122];
            }
            if(closest[1] == "#nstCredits"){
                document.querySelector('#swDrag').innerText = words[navLang][85];
            }
            if(closest[1] == "#nstExit"){
                document.querySelector('#swDrag').innerText = "-->";
            }
            if(closest[1] == "#nstShare"){
                
          
                document.querySelector('#swDrag').innerText = words[navLang][104];
            
            }
            if(closest[1] == "#nstex2"){
                
          
               document.querySelector('#swDrag').innerText = "-->";
            
            }
            document.querySelector('#swDrag').style.width = "calc(100dvw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";
            document.querySelector(closest[1]).append(document.querySelector('#swDrag'))

        }
    }
    newConsoleLog(3);
    if (localStorage.getItem('nostalgiaTokName') !== null) {
        document.querySelector('#teInput').setAttribute('class', 'noBorder')
        document.querySelector('#teTitle').style.textDecoration = "none";
        document.querySelector('#textEnter').style.left = "calc(2 * var(--margin))";
        document.querySelector('#textEnter').style.width = " calc(100dvw - (4 * var(--margin)) - 2em)";
        document.querySelector('#teButton').style.display = "none";
        userName = localStorage.getItem('nostalgiaTokName');
        document.querySelector('#teTitle').innerHTML = words[navLang][32] + localStorage.getItem('nostalgiaTokName') + "?";
        setTimeout(function () {
            var ni = document.querySelector("#uNameplate");
            ni.style.color = "var(--accent)";
            ni.style.transition = "0.5s";
            ni.style.width = "0px";
            setTimeout(function () {
                ni.innerText = words[navLang][11] + words[navLang][12] + userName + words[navLang][10] + words[navLang][6];
                ni.style.color = "var(--text)";
                ni.style.width = "max-content";
                ni.style.left = "calc(50% + 0.5em)"
                setTimeout(function () {
                    ni.style.transition = "1s";
                    ni.style.left = "calc(50% - " + (ni.getBoundingClientRect().width / 2) +"px + 0.5em)"
                }, 500);
            }, 500);
            swapTe(shVar[isSharing][0], function () {
                if (doneAnimation) {
                    var thisVall = validateDate(document.querySelector("#teInput").value);
                    if (!thisVall.includes("Year Error")) {
                        user.year = thisVall;
                        makeShapes(user.year, "       ", "y", true);
                        swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                        document.querySelector("#teButton").removeAttribute("onclick", "");
                    } else {
                        handleError(thisVall)
                    }
                }
            }, shVar[isSharing][1], function () {
                if (doneAnimation) {
                    var thisVall = validateDate(document.querySelector("#teInput").value);
                    if (!thisVall.includes("Year Error")) {
                        user.year = thisVall;
                        makeShapes(user.year, "       ", "y", true);
                        swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                        document.querySelector("#teButton").removeAttribute("onclick", "");
                    } else {
                        handleError(thisVall)
                    }
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
            document.querySelector('#teTitle').innerHTML = words[navLang][32] + localStorage.getItem('nostalgiaTokName') + "?";
            document.querySelector('#textEnter').style.left = "calc(2 * var(--margin))";
            document.querySelector('#textEnter').style.width = " calc(100dvw - (4 * var(--margin)) - 2em)";
        }, 1000);
    }
    newConsoleLog(6);
    for (var i of [...document.querySelectorAll('[words]')]) {
        try {
            ah = additions[this.navLang][i.getAttribute('words')].split(" ")
        }
        catch (e) {
            newConsoleLog(e);
            ah = ["", ""]
        }
        try {
            i.innerHTML = ah[0] + words[this.navLang][i.getAttribute('words')] + ah[1];
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
        if(!isStarted){
            
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
        isStarted = true;
    }
    }
    newConsoleLog(9);
    function stopPendulum() {
        clearInterval(wiggle);
        var UVU = document.querySelector('#uvula');
        UVU.style.transform = "";
        UVU.style.transform = "0.5s";
    }
    newConsoleLog(10);
    newConsoleLog(11);
    document.querySelector("#teInput").addEventListener("keyup", function (e) {
      //  slowLimit = 5;
       // wiggleNumber = 10;
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
  //  document.querySelector("#rightButton").setAttribute("onclick", "displaySwipe('r')");
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
    ne.style.transition = (0.5*nextIntt)+"s";
    var nee = ne.cloneNode(true);
    nee.style.left = "100dvw";
    if (n == 15 || n == 17) {
        nee.innerHTML = `<b id='teTitle'></b><button id='teButton'></button>`
    }
    nee.querySelector("#teTitle").innerHTML = words[navLang][n];
    if (n == 15 || n == 17 || n == 19 || n == 20) {
        if (nee.querySelector("input") !== null) {
            nee.querySelector("input").remove();
        }
    } else {
        const inputEl = nee.querySelector("input");
        inputEl.value = '';
       
        inputEl.setAttribute("onkeyup", "if (event.keyCode == 13) { var jaeee = " + f + "; this.blur(); setTimeout(function(){jaeee()},100)}");
    }
    if (t) {
        nee.style.height = "calc(var(--ballSize) + 1em)  ";
    }
    nee.querySelector("button").innerHTML = words[navLang][m];
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
                inputEl.value = backValidateDate(user.year);
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
            inputEl.value = backValidateDate(user.year);
        }
        if (n == 8) {
            inputEl.value = user.preferences;
        }
        if (n == 9) {
            inputEl.value = user.topics;
        }
    }
    ne.style.left = "-100dvw";
    try{
    document.querySelector('#teButton').setAttribute('onclick', "var jaeee = " + g + "; jaeee();");
} catch(e){}
try{
    if (n !== 7 && document.querySelector('#teButton') !== "undefined") {
        document.querySelector('#teButton').style.display = "block";
    } else {
        document.querySelector('#teButton').style.display = "none";
    }
    }
    catch(e){};
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
            try {
                nee.querySelector("#b5").remove();
            } catch (e) {
            }
            if (nee.querySelector('#viewSaved') !== null) {
                nee.querySelector('#viewSaved').remove();
            }
            var b1 = document.createElement('button');
            b1.setAttribute('onclick', 'nextSaved()');
            b1.setAttribute('class', 'primaryButton');
            b1.setAttribute('id', 'b1');
            b1.innerHTML = words[navLang][24];
            b1.style.display = "none";
            var b2 = document.createElement('button');
            b2.setAttribute('onclick', 'chooseSaved()');
            b2.setAttribute('class', 'primaryButton');
            b2.setAttribute('id', 'b2');
            b2.innerHTML = words[navLang][21];
            var b4 = document.createElement('button');
            b4.setAttribute('onclick', 'nvm()');
            b4.setAttribute('class', 'primaryButton');
            b4.setAttribute('id', 'b4');
            b4.innerHTML = words[navLang][36];
            var b3 = document.createElement('button');
            b3.setAttribute('onclick', 'delSaved()');
            b3.setAttribute('id', 'b3');
            b3.innerHTML = words[navLang][22];
            
            var b5 = document.createElement('button');
            b5.setAttribute('onclick', 'nstExport()');
            b5.setAttribute('id', 'b5');
            b5.innerHTML = words[navLang][117];
            setTimeout(function () {
                nee.append(b2);
                nee.append(b4);
                nee.append(b1);
                nee.append(b3);
                nee.append(b5);
                setTimeout(function(){
                    if(savePerm && !(document.querySelector("#pgTitle").querySelector("button").checkVisibility())){
                         localStorage.setItem('nst_sp','nstStop');
                         savePerm = false;
                        var tEE = document.querySelector('#textEnter');
                        var tEEl = [tEE.getBoundingClientRect().y,tEE.getBoundingClientRect().x,tEE.getBoundingClientRect().width];
                        tEE.style.transition = "0.5s";
                        tEE.style.bottom = "-50vh";
                        setTimeout(function(){
                            var newMess = document.createElement('div');
                            newMess.setAttribute('style', "transition: 1s; max-width: calc("+tEEl[2]+"px - "+tEEl[1]+"px); z-index: 100; border-radius: 5px; position: absolute; opacity: 0; max-width: calc("+tEEl[2]+"px - "+tEEl[1]+"px); bottom: 2em; left:"+tEEl[1]+"px; background-color: var(--second); padding: 1em");
                            newMess.setAttribute('id','newMess');
                            var pwanumb = 1;
                            if(isPWA()){
                                pwanumb = 0;
                                }
                            newMess.innerHTML = words[navLang][114].replace("(___)",words[navLang][[115,116][pwanumb]]);
                            var nMb = document.createElement("button");
                            nMb.innerText = words[navLang][120];
                            nMb.setAttribute("onclick", "document.querySelector('#textEnter').style.bottom = '2em'; document.querySelector('#newMess').style.opacity = 0; setTimeout(function(){document.querySelector('#newMess').remove()},500)");
                           newMess.append(document.createElement('br'));
                            newMess.append(nMb);
                            document.body.append(newMess);
                            setTimeout(function(){
                            newMess.style.opacity = 1;
                            },250*nextIntt);
                        },500*nextIntt);
                        }
                },600*nextIntt);
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
            nee.style.width = "100dvw";
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
            try{
            document.querySelector('#teButton').style.display = "block";
            }
            catch(e){}
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
                nee.innerHTML += `<button style="display: block" id="viewSaved" class = "vs2" onclick="swapTe(19,function(){},25,function(){}); getSaved(); setSavedSwipe()">` + words[navLang][23] + `</button>`
            }
            var inputEl = nee.querySelector("input");
            if (editMode) {
                if (n == 7) {
                    inputEl.value = backValidateDate(user.year);
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
        document.querySelector('#teButton').setAttribute('onclick', "var jaeee = " + g + "; jaeee();");
        stopdouble = false;
    }, 250*nextIntt));
    // }
}
var userName = "";
async function saveNew(val) {
    try{
    //  newConsoleLog(val);
    if (false) {
        await appendToStringStore('[nostalgiaTokSPLIT]' + val + '[NTS2]' + JSON.stringify(user))
    } else {
        var jsu = localStorage.getItem('nostalgiaTokSaved');
        if (jsu !== null) {
        
            localStorage.setItem('nostalgiaTokSaved', jsu + '[nostalgiaTokSPLIT]' + val + '[NTS2]' + JSON.stringify(user));
       
        }
        else {
            localStorage.setItem('nostalgiaTokSaved', val + '[NTS2]' + JSON.stringify(user));
        }
       
    }
}
catch(e){}
}
var nextIntt = 1;
function nextSaved() {
    var nextIntt = 0.5;
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
            for(var iI of document.querySelector('.uBall').children){
                if(iI.children.length>0){
                    mH = iI;
                }
            }
            mH.style.zIndex = "1000";
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
                q.setAttribute('style', 'transition: 2s; left:' + (qqq.x) + 'px; top: calc(' + (qqq.y) + 'px + env(safe-area-inset-top)); opacity: 1; background-color: var(--accent); width:' + (qqq.width) + 'px; height:' + (qqq.height) + 'px; z-index: 1000; filter: blur(0.25em);');
                document.querySelector('.uBall').setAttribute('style', 'position: fixed; opacity: 0; left: -70dvw; top:-20dvh; width: 180dvw; height: 180dvw; filter: blur(0.25em);');
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
                Gaza.style.top = "calc(-150dvh + env(safe-area-inset-top))";
                Gaza.style.filter = "blur(0.25em)";
                Gaza.style.width = "100dvw";
                Gaza.style.height = "100dvh";
                genNext(false, false, true, true);
                var nBb = document.createElement('button'); nBb.setAttribute('id', 'teButton'); document.querySelector('#textEnter').append(nBb);
                // document.querySelector('.uBall').style.filter = "";
                swapTe(20, function () { }, 25, function () { });
                document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
                setTimeout(function () {
                    console.warn("6 cleanup:", document.querySelector('#textEnter').innerHTML);
                    funnyC = 1; newConsoleLog('HERE');
                    happeningNow = false;
                }, 50);
            }, 400);
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
            }, 250);
        }, 50)
        //document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
    }, tempvar)
}
function genNext(t, two, x,y) {
    if(y){
        for(var Ioiu of document.querySelectorAll('.teShape')){
            Ioiu.innerHTML =="";
        }
    }
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
if(Arr[posinar % Arr.length].split('[NTS2]').length < 2){
    Arr.splice(posinar % Arr.length, 1);
    try{
    localStorage.setItem('nostalgiaTokSaved',Arr.join('[nostalgiaTokSPLIT]'));
    }
    catch(e){

    }
}
    document.querySelector('#uvula').append(document.querySelector('.uBall'));
    var clone = document.querySelector('.uBall').cloneNode();
    clone.style.zIndex = "1000";
    words[navLang][20] = Arr[posinar % Arr.length].split('[NTS2]')[0].replace('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]',words[navLang][37]) + "<br><span class='nstLower'>(" + (parseFloat(posinar % Arr.length) + 1) + " / " + Arr.length + ") ~ " + words[navLang][128] +"</span>"
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
        if (posinar || swipe0var) {
            setTimeout(function () {
                console.warn("9 cleanup:", document.querySelector('#textEnter').innerHTML);
                newConsoleLog([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').children])
                var minHeight;
                 var mH = document.querySelector('.uBall').children[Math.ceil(document.querySelector('.uBall').children.length*Math.random())-1];
              mH.style.zIndex = "1000";
                 clone.style.width = "0px";
                clone.style.length = "0px";
                clone.style.opacity = "0";
                clone.style.transition = "1s";
                    mH.append(clone);
                    clone.setAttribute('id', 'clonedUball' + Math.random());
                    //document.querySelector("#allHold").append(clone);
                    console.warn([mH, clone]);
                    clone.style.width = "50%";
                    clone.style.height = "50%"
                    clone.style.top = "calc(25% + env(safe-area-inset-top))";
                    clone.style.opacity = "1";
                    clone.style.left = "25%";
                    var oldRot = clone.parentNode.style.transform;
    oldRot = oldRot.replace("rotate(","").replace(")","");
    
                    clone.style.transform="rotate(-"+oldRot+")";
                    
                    clone.setAttribute("special", "true");
                    for (var i of clone.querySelectorAll('.teShape')) {
                        i.style.transition = "0s";
                        i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.top = "calc(env(safe-area-inset-top) + " + (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%)";
                        i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                    }
            }, 600);
        } else {
            setTimeout(function () {
                console.warn("9 cleanup:", document.querySelector('#textEnter').innerHTML);
                newConsoleLog([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').querySelector('.teShape')])
                var minHeight;
                var mH = document.querySelector('.uBall').children[Math.ceil(document.querySelector('.uBall').children.length*Math.random())-1];
           mH.style.zIndex = "1000";
                mH.append(clone);
                clone.style.width = "0px";
                clone.style.length = "0px";
                clone.style.opacity = "0";
                clone.style.transition = "1s";
                    console.warn([mH, clone]);
                    clone.setAttribute('id', 'clonedUball');
                    clone.style.width = "50%";
                    clone.style.opacity = "1";
                    clone.style.height = "50%";
                    clone.style.top = "calc(25% + env(safe-area-inset-top))";
                    clone.style.left = "25%";
                    clone.setAttribute("special", "true");
                    for (var i of clone.querySelectorAll('.teShape')) {
                        i.style.transition = "0s";
                        i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.top = "calc(0em + " + (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%)";
                        i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                    }
            }, 600);
        }
    }
}
async function getSaved() {
posinar = 0;
    if (true) {
        Arr = localStorage.getItem('nostalgiaTokSaved').split('[nostalgiaTokSPLIT]');
        if (Arr[0] == "null") {
            Arr.shift();
        }
       genNext(false);
        var pl = document.createElement('div');
        pl.setAttribute('class', 'palestine');
        pl.style.opacity = 0;
        pl.style.position = "absolute";
        pl.style.backgroundColor = "var(--bg)";
        pl.style.top = "calc(-150dvh + 0em)";
        pl.style.width = "100dvw";
        pl.style.height = "100dvh";
        document.querySelector("#allHold").append(pl);
        swapTe(20, function () { }, 25, function () { });
       // setTimeout(function () { nextSaved();},1000)
    } else {
        var nArr = await readStringStore();
        Arr = nArr.split('[nostalgiaTokSPLIT]');
        Arr.shift();
        genNext(false);
        swapTe(20, function () { }, 25, function () { });
    }
}

list = ['#creator', '#swTopic', '#exitsw','#sharenos','#nstFs','#exportData','#nstCredits','#nstExit', '#nstShare', '#nstex2'];
function generatePreferences() {
    user.preferences = document.querySelector("#teInput").value;
    makeShapes(user.preferences, ',', 'p', true);
   

    swapTe(9, function () {

        user.topics = document.querySelector("#teInput").value;
        makeShapes(user.topics, ',', 't', true);
        allVideos = [];
        
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
function runAnimation(bypass, bypass2) {
    tetVar = false;
    teby = document.querySelector('#textEnter').getBoundingClientRect().y;
     for (var j of [...document.querySelectorAll('.videoOrbit')]) {
        j.remove();
    }
    if(!bypass2){
    currentPlace = 0;
    }
    //if(document.querySelector('iframe#videoFrame') == null){
    if(!bypass && !bypass2){
        allVideos = [];
    requestVideos(currentToken);  
    }                    
   
    //}              
    document.querySelector('#pgTitle').style.opacity = 0;
    setTimeout(function () {
        document.querySelector('#pgTitle').style.display = "none";
        document.querySelector("#allHold").style.border = ""
    }, 500);
    var multiplier = 1;
    if (bypass) {
        multiplier = 0.1
    }
    if(bypass || bypass2){
     multiplier = 0.5;
    } 
 if (false) {
      //  await appendToStringStore('[nostalgiaTokSPLIT][NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
 } else {
    if(localStorage.getItem('nostalgiaTokSaved')){
     if (localStorage.getItem('nostalgiaTokSaved').split('[nostalgiaTokSPLIT]') !== undefined) {
         var totalNST = localStorage.getItem('nostalgiaTokSaved').split('[nostalgiaTokSPLIT]');
     } else {
         var totalNST = "";
     }
     if (totalNST[0].includes('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]')) {
         totalNST[0] = '[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user)
     }
     else {
             totalNST.unshift('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
     }
     try{
     localStorage.setItem('nostalgiaTokSaved', totalNST.join('[nostalgiaTokSPLIT]'));
     }
     catch(e){}
    }else{
        localStorage.setItem('nostalgiaTokSaved', '""');
        if (localStorage.getItem('nostalgiaTokSaved').split('[nostalgiaTokSPLIT]') !== undefined) {
         var totalNST = localStorage.getItem('nostalgiaTokSaved').split('[nostalgiaTokSPLIT]');
     } else {
         var totalNST = "";
     }
     if (totalNST[0].includes('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]')) {
         totalNST[0] = '[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user)
     }
     else {
             totalNST.unshift('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
     }
     try{
     localStorage.setItem('nostalgiaTokSaved', totalNST.join('[nostalgiaTokSPLIT]'));
     }
     catch(e){}
    }
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
            //alert(e);
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
            q.style.top = "calc(1em + 0em)";
            ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
            ooh.style.top = "calc(50% + 0em + 30dvh - (var(--ballSize) / 2))";
            mem.style.top = "calc(50% + 0em - var(--margin) + 20dvh)";
            funnyC = 0;
            setTimeout(function () {

                //funnyN = 0;


                //document.querySelector('#uvula').style.transform = "rotateZ(0deg)";

                setTimeout(function () {
                    q.style.top = "calc(-50dvh + 0em + 4em)";
                    ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                    ooh.style.top = "calc(50% + 0em)"
                    mem.style.top = "calc(50% - 0.5em + 0em)";

                   // document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
                    var n = document.querySelectorAll(".teShape");
                    var nn = n[Math.floor(Math.random() * [...n].length)]
                    nn.style.backgroundColor = "var(--oj)";
                    nn.style.opacity = "1";
                    // nn.style.filter = "";
                    setTimeout(function () {
                        q.style.top = "calc(1em + 0em)";
                        ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                        ooh.style.top = "calc(50% + 0em + 30dvh - (var(--ballSize) / 2))";
                        mem.style.top = "calc(50% + 0em - var(--margin) + 20dvh)";
                        
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
                            q.style.top = "calc(-50dvh + 0em + 4em)";
                            ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                            ooh.style.top = "calc(50% + 0em)"
                            mem.style.top = "calc(50% - 0.5em + 0em)";
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
                                q.style.top = "calc(1em + 0em)";
                                ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                ooh.style.top = "calc(50% + 0em + 30dvh - (var(--ballSize) / 2))";
                                mem.style.top = "calc(50% + 0em - var(--margin) + 20dvh)";
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
                                    q.style.top = "calc(-50dvh + 0em + 4em)";
                                    ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                                    ooh.style.top = "calc(50% + 0em)"
                                    mem.style.top = "calc(50% - 0.5em + 0em)";
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
                                   document.querySelector('.uBall').style.overflow = "visible";
                                    setTimeout(function () {
                                        q.style.top = "calc(1em + 0em)";
                                        ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                        ooh.style.top = "calc(50% + 30dvh + 0em - (var(--ballSize) / 2))";
                                        mem.style.top = "calc(50% + 0em - var(--margin) + 20dvh)";
                                       
                                        setTimeout(function () {
                                            q.style.top = "calc(-50dvh + 0em + 4em)";
                                            ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                                            ooh.style.top = "calc(50% + 0em)"
                                            mem.style.top = "calc(50% - 0.5em + 0em)";
                                            if (!bypass) {
                                                swapTe(17, function () { }, 18, function () { }, true);
                                            }

                                            setTimeout(function () {
                                                q.style.top = "calc(1em + 0em)";
                                                ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                                ooh.style.top = "calc(50% + 30dvh - 0em + (var(--ballSize) / 2))";
                                                mem.style.top = "calc(50% - 0em + var(--margin) + 20dvh)";
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
                                                                t.style.width = "100dvw";
                                                                setTimeout(function () {
                                                                    t.style.height = "100dvh";
                                                                    t.style.maxHeight = "100dvh"
                                                                    t.style.bottom = "-var(--margin)";
                                                                    document.querySelector('#uvula').style.zIndex = 1;
                                                                    var v = document.querySelector('#displayVideos');
                                                                    v.style.opacity = "1";
                                                                    v.style.display = "block";
                                                                   // document.querySelector('#leftButton').style.width = "calc(" + document.querySelector('#rightButton').getBoundingClientRect().width + "px - 1em)";
                                                                    t.append(v);
                                                                    funnyC = 1; newConsoleLog('HERE');
                                                                    v.style.top = "calc(6em + 0em)";
                                                                    var tOo = document.querySelector('#touchOverlay');
                                                                    tOo.style.top = "calc(4em + 0em)";
                                                                    tOo.style.display = "block";
                                                                    v.style.bottom = "2em";
                                                                    happeningNow = false;
                                                                    var TOOO = document.querySelector('#touchOverlay');
                                                                    var TOOO2 = TOOO.cloneNode(true);
                                                                    TOOO.replaceWith(TOOO2);
                                                                    TOOO = document.querySelector('#touchOverlay');
                                                                    if(tetVar){
                                                                        TOOO.style.display = "none";
                                                                    }
document.querySelector('.uBall').style.overflow = "hidden";

                                                                    document.querySelector('#teTitle').style = "opacity:0; transition: 1s;";
                                                                    if(tetVar){
                                                                         document.querySelector('#teTitle').style = "opacity:1; transition: 1s;";
                                                                        setTimeout(function(){
                                                                            TOOO.style.display = "block";
                                                                            },1000);
                                                                    }
                                                                    document.querySelector("#leftButton").setAttribute("onclick", "displaySwipe('l')");
                                                                  TOOO.addEventListener('touchstart', function (event) {
                                                                    if(event.touches.length > 1) {
                                                        rateLimit = false;
                                                        setTimeout(function(){rateLimit = true}, 2500);
    if(document.querySelector('#videoFrame').style.transform !== "scale(3.161)"){
document.querySelector('#videoFrame').style.transform = "scale(3.161)";
    }else{
        document.querySelector('#videoFrame').style.transform = "scale(1)";
    }
  }else{
                                                                        isTE = false;
                                                                        console.log("ts");
                                                                        initialTouchX = event.touches[0].clientX;
                                                                        initialTouchY = event.touches[0].clientY;
                                                                        setTimeout(function(){if(isTE == false){
                                                                    isPD = true;
                                                                    withinSpeedUp = true;
                                                                            speedVar++;
                                                                             document.querySelector('#fullscreenButton').innerHTML = `<p id="riseup">`+words[navLang][83]+`</p>`;
                                                                            //document.querySelector('#fullscreenButton').style.backdropFilter = "blur(10px)";
                                                                            document.querySelector('#fullscreenButton').style.width = "calc(calc(100dvh - 10em) * (9/16))";
                                                                            document.querySelector('#riseup').style.marginTop = "3em";
                                                                            document.querySelector('#riseup').style.opacity = "0";
                                                                            setTimeout(function(){document.querySelector('#riseup').style.marginTop = "0em"; document.querySelector('#riseup').style.opacity = "1";},500);
                                                                            setTimeout(function(){document.querySelector('#riseup').remove(); document.querySelector('#fullscreenButton').style.width = "max-content";},1500)
                                                                           var playbackRate = handleSpeed[speedVar%2];
var data = {event: 'command', func: 'setPlaybackRate', args: [playbackRate, true]};
var message = JSON.stringify(data);
document.querySelector('#videoFrame').contentWindow.postMessage(message, '*');
                                                                        }},500);
                                                                    }
                                                                    });

                                                                    // TOUCH END
                                                                   TOOO.addEventListener('touchend', function (event) {
                                                                    if(event.touches.length > 1){
                                                                        }else{
                                                                        autoplay = 0; 
                                                                        isTE = true;
                                                                            if(!isPD){
                                                                               
                                                                          const element = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                                                                if (!(element && element.getAttribute('id') == 'fullscreenButton')) {
                                                                      //playPause +=1; 
                                                                
                                                                }else{
                                                                    document.getElementById('fullscreenButton').click();
                                                                }
                                                                withinSpeedUp = false;
                                                            }
                                                            isPD = false;
                                                                        console.log("te");
                                                                        finalTouchX = event.changedTouches[0].clientX;
                                                                        finalTouchY = event.changedTouches[0].clientY;
                                                                    try{
                                                                     document.querySelector('#riseup').remove();
                                                                        }catch(e){console.log(e)}
                                                                     document.querySelector('#fullscreenButton').setAttribute('style','');
                                                                      document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                                                      handleTouch(initialTouchX, finalTouchX, swipeUp, swipeDown);
                                                                    }
                                                                    });

                                                                    // MOUSE DOWN
                                                                    TOOO.addEventListener('mousedown', function (event) {
                                                                       
                                                                        isTE = false;
                                                                        console.log("ts");
                                                                        initialTouchX = event.clientX;
                                                                        initialTouchY = event.clientY;
                                                                        setTimeout(function(){if(isTE == false){
                                                                            withinSpeedUp = true;
                                                                    isPD = true;
                                                                            speedVar++;
                                                                             document.querySelector('#fullscreenButton').innerHTML = `<p id="riseup">`+words[navLang][83]+`</p>`;
                                                                            //document.querySelector('#fullscreenButton').style.backdropFilter = "blur(10px)";
                                                                            document.querySelector('#fullscreenButton').style.width = "calc(calc(100dvh - 10em) * (9/16))";
                                                                            document.querySelector('#riseup').style.marginTop = "3em";
                                                                            document.querySelector('#riseup').style.opacity = "0";
                                                                            setTimeout(function(){document.querySelector('#riseup').style.marginTop = "0em"; document.querySelector('#riseup').style.opacity = "1";},500);
                                                                            setTimeout(function(){document.querySelector('#riseup').remove(); document.querySelector('#fullscreenButton').style.width = "max-content";},1500);
                                                                          var playbackRate = handleSpeed[speedVar%2];
                                                                            console.log([handleSpeed[speedVar%2],speedVar, speedVar%2])
var data = {event: 'command', func: 'setPlaybackRate', args: [playbackRate, true]};
var message = JSON.stringify(data);
document.querySelector('#videoFrame').contentWindow.postMessage(message, '*');
                                                                        }},1000);
                                                                    });
document.body.addEventListener("wheel", event => {
    if(document.querySelector('#leftButton').checkVisibility()){
    const delta = Math.sign(event.deltaY);
    if(delta > 0){
        swipeUp();
    }else{
        swipeDown();
    }
}
});
                                                                    // TOUCH END
                                                                    TOOO.addEventListener('mouseup', function (event) {
                                                                     
                                                                      autoplay = 0; 
                                                                        isTE = true;
                                                                          if(!isPD){
                                                                            
                                                                          const element = document.elementFromPoint(event.clientX, event.clientY);
                                                                          console.log([!(element && element.getAttribute('id') == 'fullscreenButton'), element.getAttribute('id')])
                                                                if (!(element && element.getAttribute('id') == 'fullscreenButton')) {
                                                                     playPause +=1; 
                                                                     if(!withinSpeedUp){
																		 try{
                                                                    if(player.getPlayerState() === 1){
                                                                         player.pauseVideo();
                                                                          try{
                                                                        if(fullsc == 'yes'){
                                                                        document.querySelector('#titleBar').style.zIndex = "0";
                                                                        }
                                                                    }
                                                                    catch(e){
                                                                    }
                                                                     }else{
                                                                         player.playVideo();
                                                                          try{
                                                                       
                                                                        document.querySelector('#titleBar').style.zIndex = "2000";
                                                                        
                                                                    }
                                                                    catch(e){

                                                                    }
                                                                    }
																		 }
																		 catch(e){
																				console.log(e);
																			 if(playPause % 2 == 1){
                                                                         player.pauseVideo();
                                                                          try{
                                                                        if(fullsc == 'yes'){
                                                                        document.querySelector('#titleBar').style.zIndex = "0";
                                                                        }
                                                                    }
                                                                    catch(e){
                                                                    }
                                                                     }else{
                                                                         player.playVideo();
                                                                          try{
                                                                       
                                                                        document.querySelector('#titleBar').style.zIndex = "2000";
                                                                        
                                                                    }
                                                                    catch(e){

                                                                    }
                                                                    }
																		 }
                                                                }
                                                                }else{
                                                                    console.log('yes');
                                                                    //console.log(document.getElementById('fullscreenButton').click());
                                                                    document.getElementById('fullscreenButton').click();
                                                                     document.querySelector('#titleBar').style.zIndex = "2000";
                                                                }
                                                                withinSpeedUp = false;
                                                            }
                                                            isPD = false;
                                                                        console.log("te");
                                                                        finalTouchX = event.clientX;
                                                                        finalTouchY = event.clientY;
                                                                        try{
                                                                     document.querySelector('#riseup').remove();
                                                                        }catch(e){console.log(e)}
                                                                      document.querySelector('#fullscreenButton').setAttribute('style','');
                                                                       document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                                                        handleTouch(initialTouchX, finalTouchX, swipeUp, swipeDown);
                                                                    
                                                                    });

 isSharing = "false";
                                                                  
                                                                    try{
                                                                    player.loadVideoById(allVideos[currentPlace].replace('📺',''))
                                                                    var dv = document.querySelector('#vfCrop');
            dv.innerHTML = ` <div id="videoFrame" src="" frameborder="0" allow="autoplay">
            </div>`;
            onYouTubeIframeAPIReady();
            player.playVideo();
            player.playVideo();
                                                                    }
                                                                    catch(e){}
                                                            player.playVideo();
                                                            setTimeout(function(){player.playVideo()},500);
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
	try{
	if(player.getPlayerState() == 1){
                                                                        
                                                                          
                                                                        if(fullsc == 'yes'){
                                                                        document.querySelector('#titleBar').style.zIndex = "2000";
                                                                        }
                                                                    }
	}
	catch(e){
		console.log(e)
	}
    var video = document.querySelector('#videoFrame');
    var v2 = document.querySelector('#vfCrop');
    var touchOverlay = document.querySelector('#touchOverlay');
    var fullscreenButton = document.querySelector('#fullscreenButton');
    var Tee = document.querySelector('#textEnter');
    if (a) {
        allowAd = false;
        fullsc = 'yes';
        player.playVideo();
        document.querySelector('#titleBar').style.zIndex = "2000";
		document.querySelector('#uvula').style.display = "none";
    video.style.width = "100dvw";
    v2.style.width = "100dvw";
    video.style.height = "100dvh";
    v2.style.height = "100dvh";
    video.style.left = "0";
    v2.style.left = "0";
    video.style.top = "0";
    v2.style.top = "-4em";
     touchOverlay.style.width = "100dvw";
    touchOverlay.style.height = "85dvh";
    touchOverlay.style.marginTop = "5dvh";
    touchOverlay.style.left = "0";
    touchOverlay.style.top = "0";
    Tee.style.zIndex = "152";
    video.style.zIndex = "152";
    v2.style.zIndex = "152";
    document.querySelector('#titleBar').style.zIndex = "0";
    touchOverlay.style.zIndex = "155";
        fullscreenButton.setAttribute('onclick', 'requestTheFullscreen(false)');
        fullscreenButton.innerText = ({'no': '↘','yes': '↖'})[fullsc];
        for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 1;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 0;
        }
    } else {
        allowAd = true;
        fullsc = 'no';
        video.style.width = "calc(calc(100dvh - 10em) * (9/16))";
        video.style.height = "calc(-10em + 100dvh)";
        video.style.left = "0";
        video.style.top = "0em";

v2.style.width = "calc(calc(100dvh - 10em) * (9/16))";
        v2.style.height = "calc(-10em + 100dvh)";
        v2.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)";
        v2.style.top = "0em";

        touchOverlay.style.width = "calc(calc(100dvh - 10em) * (9/16))";
        touchOverlay.style.height = "calc(calc(100dvh - 10em) * 0.75)";
        touchOverlay.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)";
        //alert(touchOverlay.style.marginTop);
        touchOverlay.style.marginTop = "calc(calc(100dvh - 10em) * 0.05)";
        //alert(touchOverlay.style.marginTop);
        touchOverlay.style.top = "4em";
        fullscreenButton.setAttribute('onclick', 'requestTheFullscreen(true)')
        fullscreenButton.innerText = ({'no': '↘','yes': '↖'})[fullsc];
         Tee.style.zIndex = "";
    video.style.zIndex = "0";
    v2.style.zIndex = "0";
    document.querySelector('#titleBar').style.zIndex = "2000";
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
swipe0var = false;
function backSaved(){
    if(posinar%Arr.length < 1){
         happeningNow = false;
            nvm();
        }else{
        var ytt = false;
        for(var IU of document.querySelectorAll('.teShape')){
            if(IU.children.length>0){
                ytt = true;
            }
        }
        if(ytt){
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
    setTimeout(function(){
        document.querySelector('#background').style.top = "env(safe-area-inset-top)";
         happeningNow = false;
        var countt = 0;
        var plLength = document.querySelectorAll(".palestine").length;
        var plList = [...document.querySelectorAll(".palestine")].reverse();
        var pal = plList[0];
        var ubb = document.querySelector('.uBall').getBoundingClientRect();
        pal.style.transition = "0.5s";
		pal.zIndex="99";
        pal.style.position = "absolute";
        pal.style.top = "-2em";
        pal.style.left = "-2em";
        pal.style.width ="calc(4em+100vw)";
        pal.style.height = "calc(4em+100vh)";
        pal.style.opacity = 0;
		  pal.style.filter = "blur(0.25em)";
        setTimeout(function(){
			pal.zIndex="99";
            pal.style.opacity = 1;
            pal.style.filter = "blur(0px)";
			pal.style.transition = "0.5s";
        pal.style.position = "absolute";
        pal.style.top = ubb.top + "px";
        pal.style.left = ubb.left + "px";
        pal.style.width = ubb.width + "px";
        pal.style.height = ubb.height + "px";
            }, 10);
                        pal.style.backgroundColor = "var(--accent)";
                        posinar -= 1;
                       
                        
    setTimeout(function(){
        words[navLang][20] = Arr[posinar % Arr.length].split('[NTS2]')[0].replace('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]',words[navLang][37]) + "<br><span class='nstLower'>(" + (parseFloat(posinar % Arr.length) + 1) + " / " + Arr.length + ") ~ " + words[navLang][128] +"</span>";
    var obj = JSON.parse(Arr[posinar % Arr.length].split('[NTS2]')[1]);
    var dqsu = document.querySelector(".uBall");
    dqsu.innerHTML = "";
    makeShapes(obj.year, ' ', 'y', false, dqsu);
    makeShapes(obj.preferences, ',', 'p', false, dqsu);
    makeShapes(obj.topics, ',', 't', false, dqsu);
     swapTe(20, function () { }, 25, function () { });
     var opp = posinar;
         swipe0var = true;
         setTimeout(function(){
    genNext(false, false, true,true); swipe0var = false;
    },500);
       console.error(posinar);
    pal.remove();
     happeningNow = false;
      
		document.querySelector('#background').style.top = "calc(-50dvh + 0em)";
   },500);
                     
        
    },tempvar + 100);
}
}
    }
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
        for (let el of plList) { el.style.transition = "0.5s"; el.style.opacity = "0"; el.style.top = "0em"; }
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
                    var jaeValues = document.querySelector('.uBall').getBoundingClientRect();
                    i.setAttribute('style', '');
                    i.style.transition = "0.5s";
                    i.style.top = "calc(-1 * env(safe-area-inset-top))";
                    i.style.left = "0";
                    i.style.width = "calc(40dvw + 100dvw)";
                    i.style.height = "calc(40dvw + 100dvh)";
                    i.style.opacity = 0;
                    i.style.backgroundColor = "var(--bg)";
                    i.style.zIndex = "100";
                    setTimeout(function () {
                        i.style.transition = "0.5s";
                        i.style.top = "calc((-1 * env(safe-area-inset-top)) + " + jaeValues.y + "px)";
                        i.style.left = jaeValues.x + "px";
                        i.style.width = jaeValues.width + "px";
                        i.style.height = jaeValues.height + "px";
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
            document.querySelector('#background').style.top = "calc(-50dvh + 0em)";
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
            document.querySelector('#textEnter').querySelector('.teFlexx').append(e2);
            document.querySelector('#textEnter').append(e1);
            document.querySelector('#textEnter').querySelector('button').remove();
            document.querySelector('#textEnter').querySelector('button').remove();
            document.querySelector('#textEnter').querySelector('button').remove();
            //.querySelector('#textEnter').querySelector('input').remove();
            
            try {
                jIntI = 0;
                fkAround();
                document.querySelector('#textEnter').querySelector('#b5').remove();
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

             swapTe(shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
        }

    }, shVar[isSharing][1], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
        }
    });
            setTimeout(function () {
                removeAllEventListeners(document.querySelector('#teInput'));
                document.querySelector('#teInput').addEventListener('keyup', fkAround2);
                dontRun = false;
            }, 505);
        }, (1000))
    }, tempvar);
}
function nstExport(){
  // 1. Create a Blob with your data and specify the MIME type
  const blob = new Blob(['NOSTALGIAWAVE'+JSON.stringify(localStorage)], { type: 'textXYZW' });
  
  // 2. Generate a temporary object URL representing the file
  const url = URL.createObjectURL(blob);
  
  // 3. Create a hidden link and simulate a click
  const link = document.createElement('a');
  link.href = url;
  link.download = words[navLang][118]+'.txt';
  
  document.body.appendChild(link);
  link.click();
  
  // 4. Clean up the DOM and release the object URL from browser memory
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
howToFullscreen(true, [117,119]);

// Example usage: Exporting JSON data

}
function nvm() {
    endSavedSwipe();
    nextIntt = 1;
    if (!dontRun) {
        posinar = -1;
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
        bg.style.top = "env(safe-area-inset-top)";
        setTimeout(function () {
            reverseUball();
        }, 250)

    }
}
function delSaved() {
    try{
    Arr.splice((posinar) % Arr.length, 1);
    if (true) {
        localStorage.setItem('nostalgiaTokSaved', Arr.join('[nostalgiaTokSPLIT]'));
    } else {
        var nArr = Arr.join('[nostalgiaTokSPLIT]');
        openTheDatabase().then(async function () {
            await appendToStringStore(nArr);
        });
    }
    posinar -= 1;
    nextSaved();
}catch(e){}
}
function chooseSaved() {
    endSavedSwipe();
    ra = true;
    swapTe(15, function () { }, 16, function () { }, true);
    user = JSON.parse((Arr[posinar % Arr.length].split('[NTS2]')[1]))
    //smart re-arrange technology, were the last used one comes first
    var toBeMoved = Arr[posinar % Arr.length];
    if(!toBeMoved.includes('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]')){
    Arr.splice((posinar) % Arr.length, 1);
    Arr.splice(1, 0, toBeMoved);
}
    localStorage.setItem('nostalgiaTokSaved', Arr.join('[nostalgiaTokSPLIT]'));
    runAnimation();
    var minHeight;
    var mH = document.querySelector('.uBall').children[Math.ceil(document.querySelector('.uBall').children.length*Math.random())-1];
           mH.style.zIndex = "1000";
   
    mH.children[0].style.width = "0";
    mH.children[0].style.height = "0";
    mH.children[0].style.transition = "0.5s";
    setTimeout(function () {
        mH.children[0].remove();
    },1000)
}
var jint = true;
var jintArr = words[navLang][35].split(',').reverse();
var jintI = 0;
var doneAnimation = false;
function fkAround2() {
    try {
        document.querySelector('#teInput').removeEventListener('keyup', fkAround2);
    } catch (e) {
        console.log(e);
    }
    var newH = 0;
    if(!document.querySelector('#textEnter').innerHTML.includes("--->")){
    if (document.querySelector('.vs2') == null) {
        var newW = document.createElement('button');
        newW.innerText = words[navLang][33];
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
        document.querySelector("#teButton").innerText = words[navLang][33];
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
}
var secondfunnyN = 20.94395;
function fkAround() {
    jintI = 0;
    document.querySelector("#teButton").style.display = "none";
    document.querySelector('#teInput').addEventListener('keyup', fkAround2)
}
function enterName() {
    var i = document.querySelector("#teInput");
    if(i.value.startsWith('NOSTALGIAWAVE')){var localStoragei =JSON.parse(i.value.split('NOSTALGIAWAVE')[1]); Object.entries(localStoragei).forEach(([key, value]) => {localStorage.setItem(key, value);});userName=localStorage.getItem('nostalgiaTokName');window.location.reload();}else{
    userName = i.value;
	try{
		userName = i.value.trim();
	}catch(e){
		console.log(e);
	}
}
    if (userName == "") {
        userName = words[navLang][5]
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
        ni.innerText = words[navLang][11] + words[navLang][12] + userName + words[navLang][10] + words[navLang][6];
        setTimeout(function () {
            ni.style.transition = "1s";
            ni.style.left = "calc(50% - " + (ni.getBoundingClientRect().width / 2) + "px + 0.5em)"
        }, 500);
    }, 1000);
    swapTe(shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
        }

    }, shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
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
   // alert([n,y,extra,t,c]);
setTimeout(function(){document.querySelector("input").focus()},1000);
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
        console.log(['QQQ'+q, (0.1*parseInt(q.slice(7,8))*2) + 3 + "em"])
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
        properties = [properties[0], (parseInt(q.slice(1, 4)) * pp + 0.01 / 999), (parseInt(q.slice(4, 7)) * pp + 0.006 / 999), (0.1*parseInt(q.slice(7,8))*2) + 3 + "em", (parseInt(q.slice(7, 8)) * 50) - 100 + "deg"];
     // alert([properties[1]+properties[3] > parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")),properties[1]+properties[3],parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", ""))])
        while(properties[1]+parseInt((properties[3]).replace('em','')) > parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", ""))){
        properties[1] = properties[1]-0.2;
       }
       while(properties[2]+parseInt((properties[3]).replace('em','')) > parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", ""))){
        properties[2] = properties[2]-0.2;
       }
        Shapez2.push(properties);
        var sh = document.createElement('div');
        sh.setAttribute('style', 'border-radius:' + properties[0])
        newConsoleLog(properties);
        Shapez.push(sh);
        console.warn(Shapez);
        // if (t) {
        if (posinar < 0) {
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
           // alert(properties[2])
            console.log('HERE');

            a.append(sh);
            sh.style.left = properties[1] + "em";
            sh.style.opacity = "0.5";
            sh.style.top = properties[2] + "em";
            sh.style.height = properties[3];
            sh.style.width = properties[3];
            sh.style.zIndex = "50";
            sh.style.transform = "rotateZ(0deg)";
            sh.style.transform = "rotateZ(" + properties[4] + ")";
            sh.style.border = "0px solid black";
            sh.setAttribute('class', 'teShape');
            funnyC = 1;
            newShi = false;
        }
        // }
       // alert(newShi);
        if (newShi) {
            setTimeout(function () {
                let twin1 = sh;
                let ppy1 = properties;
                if (posinar > 0) {
                    if (t) {
                        document.querySelector('.uBall').style.filter = "blur(0.25em)";
                        setTimeout(function () {
                            twin1.style.left = "calc(50dvw - var(--ballSize)/2 + " + ppy1[1] + "em)";
                            twin1.style.opacity = "0.5";
                            twin1.style.top = "calc(" + ppy1[2] + "em + env(safe-area-inset-top) + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                            twin1.style.height = ppy1[3];
                            twin1.style.width = ppy1[3];
                            twin1.style.zIndex = "50";
                            twin1.style.transform = "rotateZ(0deg)";
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
                                    twin.style.top = "calc(env(safe-area-inset-top) + " + ppy[2] + "em)";
                                    twin.style.height = ppy[3];
                                    twin.style.width = ppy[3];
                                    twin.style.transform = "rotateZ(0deg)";
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
                        twin1.style.left = "calc(50dvw - var(--ballSize)/2 + " + ppy1[1] + "em)";
                        twin1.style.opacity = "1";
                        twin1.style.top = "calc(" + ppy1[2] + "em + env(safe-area-inset-top) + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                        twin1.style.height = ppy1[3];
                        twin1.style.width = ppy1[3];
                        twin1.style.zIndex = "50";
                        twin1.style.transform = "rotateZ(0deg)";
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
                                twin.style.top = "calc(env(safe-area-inset-top) + " + ppy[2] + "em)";
                                twin.style.height = ppy[3];
                                twin.style.width = ppy[3];
                                twin.style.transform = "rotateZ(0deg)";
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
        if (t && posinar < 0) {
            var sh3 = [...Shapez];
            setTimeout(function () {
                for (var j of Shapez) {
                    let sh = j
                    var sh2 = j.style;
                    document.querySelector("#allHold").append(sh);
                    sh.style.borderRadius = properties[0];
                    sh.setAttribute('class', 'teShape');
                    sh.style.top = "calc(90dvh + env(safe-area-inset-top))";
                    sh.style.left = "50dvw";
                    sh.style.height = "0dvh";
                    sh.style.left = "0dvw";
                    sh.style.transition = "0.5s";
                    sh.style.position = "absolute";
                    sh.style.transform = "rotateZ(0deg)";
                    sh.style.transform = "rotate(" + properties[4] + ")";
                    sh.style.borderRadius = properties[0];

                }
            }, tempvar); setTimeout(function () {
                setTimeout(function () {
                    for (sh of Shapez) {
                        let ppyy = Shapez2[Shapez.indexOf(sh)]
                        sh.style.left = "calc(50dvw - var(--ballSize)/2 + " + ppyy[1] + "em)";
                        sh.style.opacity = "0.5";
                        sh.style.top = "calc(" + ppyy[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                        sh.style.height = ppyy[3];
                        sh.style.width = ppyy[3];
                        sh.style.zIndex = "50";
                        sh.style.transform = "rotateZ(0deg)";
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
                                twin.style.top = "calc(env(safe-area-inset-top) + " + ppy[2] + "em)";
                                twin.style.height = ppy[3];
                                twin.style.width = ppy[3];
                                twin.style.transform = "rotateZ(0deg)";
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
    swsc.style.display = "block";
    setTimeout(function(){
    swsc.setAttribute('style', `
        display: block;
    opacity: 1;
    left: 0;
    top: var(--margin);
    position: absolute;
    z-index: 500;
    width: 100dvw;
    height: calc(100dvh - var(--margin));
    padding: calc(var(--margin));
    transition: 0.5s;
   `)
    },500);
   
    // document.querySelector('#swDrag').style.width = "calc(100dvw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";
   
    setTimeout(function () {
        swsc.style.opacity = 1;

        if (lr == "l") {
            swsc.querySelector('p').innerText = words[navLang][25].split('+')[0].replace('(', '').replace(')', '') + "↓";
        } else {
            swsc.querySelector('p').innerText = words[navLang][27].split('+')[0].replace('(', '').replace(')', '') + "↓";
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
        swipeThreshold) {
        if ((finalTouchY -
            initialTouchY) < 0) {
            swipeUp();
        } else {
            swipeDown();
        }
    } else {
        if (horizontalDistance < (-1 * swipeThreshold)) {
           // alert('left');
          //  editMode = true;
            // editModeFunction()
        }
    }
}
function evaluateFullscreenReminder(n){
    var fsNumber = 0;
    try{
        if(localStorage.getItem("nstFSRN") == null){
            localStorage.setItem("nstFSRN",0);
        }
        fsNumber = parseInt(localStorage.getItem("nstFSRN"));
    }
    catch(e){
        localStorage.setItem("nstFSRN",0);
    }
    if((fsNumber % 15 == 0 && fsNumber !== 0) || fsNumber == 3 || currentPlace == 1 || n){
        var activeItem = document.querySelector('#leftButton');
        var valueOg = words[navLang][25] + "";
        activeItem.style.color = "var(--second)";
        var wnl100 = words[navLang][100].split('|');

        setTimeout(function(){
            activeItem.style.color = "var(--text)";
            if(!n){
            activeItem.innerText = [wnl100[0],wnl100[1]][Math.round(Math.random()) % 2] + wnl100[2];
            }else{
                activeItem.innerText = words[navLang][n];
            }
            activeItem.style.borderBottom = "0.1em solid var(--second)";
            setTimeout(function(){
                activeItem.style.borderBottom = "0.1em solid var(--text)";
                setTimeout(function(){
                    activeItem.style.borderBottom = "0.1em solid var(--emphasizedText)";
                     setTimeout(function(){
            activeItem.style.borderBottom = "0.1em solid var(--second)";
            setTimeout(function(){
                activeItem.style.borderBottom = "0.1em solid var(--text)";
                setTimeout(function(){
                    activeItem.style.borderBottom = "0.1em solid var(--emphasizedText)";
                    setTimeout(function(){ activeItem.style.borderBottom = "0.1em solid var(--second)"; activeItem.style.color = "var(--second)";  
                    setTimeout(function(){activeItem.style.color = "var(--text)"; activeItem.innerText = valueOg;},500);
                    },500)
                    },500)
                },500)
            },500);
                    },500)
                },500)
            },500);
    }
    fsNumber++;
    localStorage.setItem("nstFSRN",fsNumber);
}
function swipeUp() {
    if(rateLimit){
        setTimeout(function(){rateLimit = true}, 2000);
        rateLimit = false;
    if((currentPlace >= allVideos.length - 3) || (currentPlace >= allVideos.length - 1)){
        if(nextToken!=="" && !nextToken.includes("undefined") && nextToken.includes("null")){
            giveError2();
            rateLimit = true;
        }else{
            giveError3();
            rateLimit = true;
        }
        /*document.querySelector('.giveError').style.borderBottom="1px dotted var(--emphasizedText)";
        setTimeout(function(){document.querySelector('.giveError').style.border=""},250)*/
    }else{
        if(!isPWA()){
        evaluateFullscreenReminder();
        }
     for(var i of document.querySelectorAll('.giveError')){
        i.remove();
    }
    currentPlace += 1;
    try{
    document.querySelector('#giveError').remove();
    }
    catch(e){

    }
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
        orbit.style.borderRadius = "50%";
        orbit.style.zIndex = "200";
        orbit.style.width = "0.5em";
        orbit.style.height = "0.5em";
        // orbit.style.opacity = "1";
        orbit.style.backgroundColor = "var(--emphasizedText)";
        orbit.style.position = "absolute";
        orbit.style.left = sVl['no'][0];
        orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt['no'][1] +")";
        orbitf.setAttribute('class', 'videoOrbit yes');
        orbitf.style.borderRadius = "5px";
        orbitf.style.zIndex = "200";
        orbitf.style.width = "0.5em";
        orbitf.style.height = "0.5em";
        // orbitf.style.opacity = "1";
        orbitf.style.backgroundColor = "var(--emphasizedText)";
        orbitf.style.position = "absolute";
        orbitf.style.left = sVl['yes'][0];
        orbitf.style.top = "calc(env(safe-area-inset-top) + " + sVt['yes'][1] + ")";
        tsMT = Math.random();
        if(tsMT < 0.3){
            tsMT = 0.3;
        }
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
            orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt['no'][0] + ")";
            orbitf.style.left = sVl['yes'][0];
            orbitf.style.top = "calc(env(safe-area-inset-top) + " + sVt['yes'][0] +")";
            orbit.style.width="2em";
        orbit.style.height="2em";
        orbitf.style.width="2em";
        orbitf.style.height="2em";
            setTimeout(function () {
                // Move UP
                orbit.style.transform = "rotate(90deg)";
                orbit.style.left = sVl['no'][1];
                orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt['no'][0]+")";
                orbitf.style.left = sVl['yes'][1];
                orbitf.style.top = "calc(env(safe-area-inset-top) + " + sVt['yes'][0] +")";

                setTimeout(function () {
                    // Move LEFT
                    orbit.style.transform = "rotate(180deg)";
                    orbit.style.left = sVl['no'][1];
                    orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt['no'][1]+")";
                    orbitf.style.left = sVl['yes'][1];
                    orbitf.style.top = "calc(env(safe-area-inset-top) + " + sVt['yes'][1]+")";

                    setTimeout(function () {
                        // Move DOWN
                        orbit.style.transform = "rotate(270deg)";
                        orbit.style.left = sVl['no'][2];
                        orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt['no'][1] +")";
                        orbitf.style.left = sVl['yes'][2];
                        orbitf.style.top = "calc(env(safe-area-inset-top) + " + sVt['yes'][1] +")";
                        setTimeout(function () {
                            orbit.style.transform = "rotate(360deg)";
                           
                                              
                        }, 125);

                    }, 250);

                }, 250);

            }, 250);

        }, 250);

        setTimeout(function () {
             orbit.style.width="0.5em";
                        orbit.style.height="0.5em";
                        orbitf.style.width="0.5em";
                         orbitf.style.height="0.5em";
                var bigjaef = orbitf.cloneNode();
                bigjaef.style.width = "0.5em";
                var thebigjaef = orbitf.getBoundingClientRect();

                var bigjae = orbit.cloneNode();
                bigjae.style.width="0.5em";
                var thebigjae = orbit.getBoundingClientRect();
                bigjae.style.left = thebigjae.x + "px";
                newConsoleLog(thebigjae.left);
                bigjae.style.top = "calc(env(safe-area-inset-top) + " + thebigjae.y + "px)";
                newConsoleLog(thebigjae.top);
                document.querySelector("#allHold").append(bigjae);
                newConsoleLog([thebigjae, tsMT]);
                bigjae.style.backgroundColor = "var(--emphasizedText)";
                var bigjae2 = orbit.cloneNode();
                bigjae2.style.left = thebigjae.x + "px";
                document.querySelector("#allHold").append(bigjae2);
                bigjae2.style.top = "calc(env(safe-area-inset-top) + " + thebigjae.y + "px)";
                bigjae2.style.backgroundColor = "var(--emphasizedText)";
                // bigjae2.style.opacity = "0.2";
                bigjae2.setAttribute('id', 'j' + tsMT.toString().replace('.', 'o'));
                orbit.remove();
                bigjae.style.transition = "0.1s";

                bigjaef.style.left = thebigjaef.x + "px";
                newConsoleLog(thebigjaef.left);
                bigjaef.style.top = "calc(env(safe-area-inset-top) + " + thebigjaef.y + "px)";
                newConsoleLog(thebigjaef.top);
                document.querySelector("#allHold").append(bigjaef);
                newConsoleLog([thebigjaef, tsMT]);
                bigjaef.style.backgroundColor = "var(--emphasizedText)";
                var bigjae2f = orbitf.cloneNode();
                bigjae2f.style.left = thebigjaef.x + "px";
                document.querySelector("#allHold").append(bigjae2f);
                bigjae2f.style.top = "calc(env(safe-area-inset-top) + " + thebigjaef.y + "px)";
                bigjae2f.style.backgroundColor = "var(--emphasizedText)";
                //bigjae2f.style.opacity = "0.2";
                bigjae2f.setAttribute('id', 'j' + tsMT.toString().replace('.', 'o'));
                orbitf.remove();
                bigjaef.style.transition = "0.1s";
                if (fullsc == 'yes') {
                    bigjae2f.style.opacity = "0.25";
                    bigjae2.style.opacity = "0";
                } else {
                    bigjae2.style.opacity = "0.25";
                    bigjae2f.style.opacity = "0";

                }

                setTimeout(function () {
                    if (fullsc == 'no') {
                        bigjae.style.opacity = 0.6;
                         bigjae.style.width = "0.5em";
                        bigjae.style.height = "0.5em";
                        bigjae.style.transition = "0.5s";
                        bigjae.setAttribute('class','glass');
                        bigjae.style.width = "calc((100dvh - 10em) * (9/16))";
                        bigjae.style.height = "calc(100dvh - 10em)";
                        bigjae.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)";
                        bigjae.style.borderRadius = "5px";
                        bigjae.style.top = "calc(env(safe-area-inset-top) + " + "4em)";
                        bigjae.style.transform = "rotate(360deg)";
                        bigjae.style.backgroundColor = "var(--emphasizedText)";
                       
                        setTimeout(function () {
                            
                            setTimeout(function () {
                                bigjae.style.backgroundColor = "var(--emphasizedText)";
if (currentPlace < allVideos.length-3) {
                                        
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        }  else {
                                            var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navLang][84]+({'no': '↘','yes': '↖'})[fullsc];
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                            }
                                
                                             setTimeout(function(){
                                            var TOOO = document.querySelector('#touchOverlay');
                                            TOOO.style.transition ="0";
                                            TOOO.style.marginLeft = "-1000vw";
												 if(avcp.length < 7){
            avcp = Ads[1];
        }
                                            try{
                                            player.loadVideoById(avcp);
                                            localStorage.setItem('nostalgiaTokOldVideos', localStorage.getItem('nostalgiaTokOldVideos') + "|SPLIT|"+allVideos[currentPlace]);
                                            }
                                            catch(e){}
                                            setTimeout(function(){ TOOO.style.marginLeft = "";},600)
                                            try{
                                             player.loadVideoById(avcp);
                                            }
                                            catch(e){}
                                            },100);
                                          // alert([allVideos[currentPlace], currentPlace])
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)].replace('📺',''));
                                          }
                                          catch(e){
                                            console.log(e);
                                          }
                                           // alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')])
                                         console.error(allVideos);
                                        }
                                    } else {
                                       // alert(5);
                                    if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        }  else {
                                            var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navLang][84]+({'no': '↘','yes': '↖'})[fullsc];
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                            }
                                
                                             setTimeout(function(){
                                            var TOOO = document.querySelector('#touchOverlay');
                                            TOOO.style.transition ="0";
                                            TOOO.style.marginLeft = "-1000vw";
												 if(avcp.length < 7){
            avcp = Ads[1];
        }
                                            try{
                                            player.loadVideoById(avcp)
                                            }
                                            catch(e){}
                                            setTimeout(function(){ TOOO.style.marginLeft = "";},600)
                                            try{
                                             player.loadVideoById(avcp);
                                              localStorage.setItem('nostalgiaTokOldVideos', localStorage.getItem('nostalgiaTokOldVideos') + "|SPLIT|"+allVideos[currentPlace]);
                                            }
                                            catch(e){}
                                            },100);
                                          // alert([allVideos[currentPlace], currentPlace])
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)].replace('📺',''));
                                          }
                                          catch(e){
                                            console.log(e);
                                          }
                                           // alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')])
                                         console.error(allVideos);
                                        }
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        } else {
                                           // alert(6);
                                            //document.querySelector('#videoFrame').setAttribute('src', "https://youtube.com/embed/" + allVideos[currentPlace] + `?autoplay=`+autoplay);
                                          
                                          currentToken = nextToken;
                                                requestVideos(currentToken);
                                            
                                        }
                                    }
                                setTimeout(function () {
                                    
                                    bigjae.remove();
                                    bigjaef.remove();
                                }, 100);
                            }, 500)
                            canSwipe = true;
                        }, 200)
                    } else {
                         bigjaef.style.width = "0.5em";
                        bigjaef.style.height = "0.5em";
                        bigjaef.style.transition = "0.5s";
                        bigjaef.style.opacity = 0.6;
                        bigjaef.setAttribute('class','glass');
                        bigjaef.style.width = "100dvw";
                        bigjaef.style.height = "100dvh";
                        bigjaef.style.left = "0";
                        bigjaef.style.borderRadius = "5px";
                        bigjaef.style.top = "env(safe-area-inset-top)"
                        bigjaef.style.transform = "rotate(360deg)";
                        bigjaef.style.backgroundColor = "var(--emphasizedText)";
                        
                        setTimeout(function () {
                           
                            setTimeout(function () {
                               // alert(1);
                                bigjaef.style.backgroundColor = "var(--emphasizedText)";
//alert(2);
  if (currentPlace < allVideos.length - 3) {
                                        
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        }  else {
                                            
                                           var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navLang][84]+({'no': '↘','yes': '↖'})[fullsc];
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                            }
                                
                                             
                                             setTimeout(function(){
                                            var TOOO = document.querySelector('#touchOverlay');
                                            TOOO.style.transition ="0";
                                            TOOO.style.marginLeft = "-1000vw";
												 if(avcp.length < 7){
            avcp = Ads[1];
        }
                                            try{
                                            player.loadVideoById(avcp)
                                            }catch(e){}
                                            setTimeout(function(){ TOOO.style.marginLeft = "";},600)
                                            try{
                                             player.loadVideoById(avcp);
                                            }catch(e){}
                                            },100);
                                          // alert([allVideos[currentPlace], currentPlace])
                                          try{
                                            
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)].replace('📺',''));
                                          }
                                          catch(e){
                                            console.log(e);
                                          }
                                          // alert([allVideos[currentPlace], currentPlace])
                                           // alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')])
                                         console.error(allVideos);
                                        }
                                    } else {
                                       // alert(5);
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        } else {
                                           // alert(6);
                                            //document.querySelector('#videoFrame').setAttribute('src', "https://youtube.com/embed/" + allVideos[currentPlace] + `?autoplay=`+autoplay);
                                          
                                         currentToken = nextToken;
                                                requestVideos(currentToken);
                                            
                                        }
                                    }
                                setTimeout(function () {
                                   // alert(3);
                                    
                                   // alert(4);
                                  
                                    bigjaef.remove();
                                    bigjae.remove();
                                }, 100);
                            }, 500)
                            canSwipe = true;
                        }, 200)
                    }
                }, 100)

            }, (tsMT * 1000))
}
    }
     
}

};
function swipeDown() {
    if(rateLimit){
        setTimeout(function(){rateLimit = true}, 2000);
        rateLimit = false;
        if(currentPlace > 0){
     try{
    document.querySelector('#giveError').remove();
    }
    catch(e){

    }
    currentPlace -= 1;
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
            bj.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)";
            bj.style.borderRadius = "5px";
            bj.style.top = "calc(4em + env(safe-area-inset-top))";
        } else {
            bj.style.width = "100dvw";
            bj.style.height = "100dvh";
            bj.style.left = "0";
            bj.style.borderRadius = "5px";
            bj.style.top = "calc(env(safe-area-inset-top) + var(--margin))";
        }
        bj.style.transform = "rotate(360deg)";
        bj.style.transition = "0.125s";
        bj.style.backgroundColor = "var(--emphasizedText)";
        bj.style.position = "absolute";
        bj.style.zIndex = 10000;
        bj.style.opacity = 0.5;
        document.querySelector("#allHold").append(bj);
          bj.style.width="2em";
                        bj.style.height="2em";
                        
       // orbit.style.opacity = 0;
        setTimeout(function () {
            bj.style.left = o2.left + "px";
            bj.style.top = "calc(env(safe-area-inset-top) + " + o2.top + "px)";
            bj.style.width = o2.width + "px";
            bj.style.height = o2.height + "px";
            bj.style.transform = "rotate(0deg)";
            bj.style.borderRadius = "5px";
            setTimeout(function () {
                bj.remove(); if (currentPlace == -1) { currentPlace = 0; } else {
                    if (allVideos[currentPlace] == "Error") {
                        giveError();
                    } else {
						var avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
						if(avcp.length < 7){
            avcp = Ads[1];
        }
                        //document.querySelector('#videoFrame').setAttribute('src', "https://youtube.com/embed/" + allVideos[currentPlace] + `?autoplay=`+autoplay);
                        player.loadVideoById(allVideos[currentPlace]);
                        
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)]);
                                          }
                                          catch(e){
                                            console.log(e);
                                          }//   alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')]);
                                       console.error(allVideos);   
                                           
                    }
                }}, 255)
            if (o2.x >= window.innerWidth / 2 && o2.y < (window.innerHeight - (6 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
               // bj.remove();
                setTimeout(function () {
                    orbit.style.left = sVl[fullsc][2];
                    orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt[fullsc][1] + ")";
                }, 125*2);
                
                setTimeout(function () {
                    orbit.remove();
                    canSwipe = true;
 bj.style.width="2em";
                        bj.style.height="2em";
                   // bj.remove();
                }, 250)
            }
            if (o2.x < window.innerWidth / 2 && o2.y < (window.innerHeight - (6 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
                setTimeout(function () {
                   // bj.remove();
                    orbit.style.transform = "rotate(90deg)";
                    orbit.style.left = sVl[fullsc][1];
                    orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt[fullsc][0] +")";
                   
                    setTimeout(function () {

                        orbit.style.left = sVl[fullsc][0];
                        orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt[fullsc][0] +")";
                        setTimeout(function () {

                            orbit.style.left = sVl[fullsc][2];
                            orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt[fullsc][1] +")";
                            
                            setTimeout(function () {
                                orbit.remove();
                                canSwipe = true;
                                 bj.style.width="2em";
                        bj.style.height="2em";
                                //bj.remove();
                            }, 125*2)
                        }, 125*2);
                    }, 125*2);
                }, 125*2);
            }

            if (o2.y >= (window.innerHeight - (6.1 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
                setTimeout(function () {
                   // bj.remove();

                    orbit.style.left = sVl[fullsc][0];
                    orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt[fullsc][0] +")";
                    
                    setTimeout(function () {
                        
                        orbit.style.left = sVl[fullsc][2];
                        orbit.style.top = "calc(env(safe-area-inset-top) + " + sVt[fullsc][1] +")";
                       
                        setTimeout(function () {
                            orbit.remove();
                            canSwipe = true;
                             bj.style.width="2em";
                        bj.style.height="2em";
                           // bj.remove();
                        }, 125*2)
                    }, 125*2);
                }, 125*2);
            }
        }, 125*2);

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
            orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)";
            orbit.style.top = "calc(100dvh - 10em + 4em + 0.5em)";

            setTimeout(function () {
                // Move UP
                orbit.style.transform = "rotate(-90deg)";
                orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)";
                orbit.style.top = "3.5em";

                setTimeout(function () {
                    // Move RIGHT
                    orbit.style.transform = "rotate(-180deg)";
                    orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)) + 0.5em)";
                    orbit.style.top = "3.5em";

                    setTimeout(function () {
                        // Move DOWN
                        orbit.style.transform = "rotate(-270deg)";
                        orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)) + 0.5em)";
                        orbit.style.top = "calc(100dvh - 10em + 4em + 0.5em)";

                        setTimeout(function () {
                            orbit.style.transform = "rotate(-360deg)";
                        }, 250);

                    }, 250);

                }, 250);

            }, 250);

        }, 250);

        setTimeout(function () {
            var bigjae = orbit.cloneNode();
            var thebigjae = orbit.getBoundingClientRect();
            bigjae.style.left = thebigjae.left;
            bigjae.style.top = thebigjae.top;
            document.querySelector("#allHold").append(bigjae);
            bigjae.style.backgroundColor = "var(--swText)";
            orbit.remove();
            bigjae.style.transition = "0.1s";
            document.querySelector('#j' + tsMTs[tsMTs.length - 1].toString().replace('.', 'o')).remove();
            tsMTs.pop();
            setTimeout(function () {
                bigjae.style.width = sV[6];
                bigjae.style.height = sV[7];
                bigjae.style.left = sV[8];
                bigjae.style.top = sV[9];
                bigjae.style.transform = "rotate(360deg)";
                bigjae.style.backgroundColor = "var(--swText)";
                setTimeout(function () {
                    bigjae.remove();
                    canSwipe = true;
                }, 100)
            }, 100)
        }, (tsMT * 1000))
        */
    }
 
}
}

};

function validateDate(tex) {
	if(tex.includes("~")){
		return tex;
	}else{
    var text = tex.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (text.includes("-")) {
        var retText = text.split('-');
        var retValue = validateDate(retText[0]).split('~')[0] + "~" + validateDate(retText[1]).split('~')[1];
        console.log([retText[0], retText[1]])
        if (retValue.includes('Year Error: Out of bounds')) {
            return ("Year Error: Out of bounds");
        }
        if (retValue.includes("Year Error: Too low") && !retValue.includes("Year Error: Too high")) {
            console.log(retValue);
            return ("Year Error: Too low");
        }
        if (retValue.includes("Year Error: Too high") && !retValue.includes("Year Error: Too low")) {
            return ("Year Error: Too high");
        }
        if (retValue.includes("Year Error: Too low") && retValue.includes("Year Error: Too high")) {
            return ("Year Error: Both outta bounds");
        }
        var retValue2 = validateDate(retText[0]).split('~')[1] + "~" + validateDate(retText[1]).split('~')[0];
        var firstOne = new Date(retValue2.split('~')[0]);
        var secondOne = new Date(retValue2.split('~')[1]);
        console.log([validateDate(retText[0]).split('~')[1] + "~" + validateDate(retText[1]).split('~')[0], firstOne, secondOne])
        if (firstOne.getTime() > secondOne.getTime()) {
            retValue = retValue2.split('~')[1] + "~" + retValue2.split('~')[0]
        }
        return retValue;
    } else {
        try { 
        var tbr = "";
        var theYear = parseFloat(text.match(/(\d+)/)[0]);
        if (theYear.toString().length < 3) {
            theYear = 2000 + theYear;
        }
        var d = new Date();
            if (theYear < 2019) {
                return ("Year Error: Too low~Year Error: Too low")
            }
            if (theYear > d.getFullYear()) {
                return ("Year Error: Too high~Year Error: Too high")
            }
    }
        catch (e) {
            return ("Year Error: Can't read data~Year Error: Can't read data")
        }
        //spring
        if (text.includes(words[navLang][39])) {
            tbr = "03/01/XXXX ~ 06/01/XXXX"
        }
        //summer
        if (text.includes(words[navLang][40])) {
            tbr = "06/01/XXXX ~ 09/01/XXXX"
        }
        //fall
        if (text.includes(words[navLang][41])) {
            tbr = "09/01/XXXX ~ 12/01/XXXX"
        }
        //winter
        if (text.includes(words[navLang][42])) {
            tbr = "12/01/XXXX ~ 03/01/XXXY"
        }
        if (text.includes(words[navLang][43])) {
            tbr = "01/01/XXXX ~ 04/01/XXXX"
        }
        if (text.includes(words[navLang][44])) {
            tbr = "04/01/XXXX ~ 10/01/XXXX"
        }
        if (text.includes(words[navLang][45])) {
            tbr = "10/01/XXXX ~ 01/01/XXXY"
        }
        //jan 
        if (text.toLowerCase().includes(words[navLang][46]) || text.includes(words[navLang][46+12])) {
            tbr = "01/01/XXXX ~ 02/01/XXXX"
        }
        //feb
        if (text.includes(words[navLang][47]) || text.includes(words[navLang][47 + 12])) {
            tbr = "02/01/XXXX ~ 03/01/XXXX"
        }
        //mar
        if (text.includes(words[navLang][48]) || text.includes(words[navLang][48 + 12])) {
            tbr = "03/01/XXXX ~ 04/01/XXXX"
        }
        //apr
        if (text.includes(words[navLang][49]) || text.includes(words[navLang][49 + 12])) {
            tbr = "04/01/XXXX ~ 05/01/XXXX"
        }
        //may
        if (text.includes(words[navLang][50]) || text.includes(words[navLang][50 + 12])) {
            tbr = "05/01/XXXX ~ 06/01/XXXX"
        }
        //jun
        if (text.includes(words[navLang][51]) || text.includes(words[navLang][51 + 12])) {
            tbr = "06/01/XXXX ~ 07/01/XXXX"
        }
        //july
        if (text.includes(words[navLang][52]) || text.includes(words[navLang][52 + 12])) {
            tbr = "07/01/XXXX ~ 08/01/XXXX"
        }
        //aug
        if (text.includes(words[navLang][53]) || text.includes(words[navLang][53 + 12])) {
            tbr = "08/01/XXXX ~ 09/01/XXXX"
        }
        //sep
        if (text.includes(words[navLang][54]) || text.includes(words[navLang][54 + 12])) {
            tbr = "09/01/XXXX ~ 10/01/XXXX"
        }
        //oct
        if (text.includes(words[navLang][55]) || text.includes(words[navLang][55 + 12])) {
            tbr = "10/01/XXXX ~ 11/01/XXXX"
        }
        //nov
        if (text.includes(words[navLang][56]) || text.includes(words[navLang][56 + 12])) {
            tbr = "11/01/XXXX ~ 12/01/XXXX"
        }
        //dec
        if (text.includes(words[navLang][57]) || text.includes(words[navLang][57 + 12])) {
            tbr = "12/01/XXXX ~ 1/01/XXXY"
        }
        //quarantine
        if (text.includes(words[navLang][58 + 12])) {
            tbr = "03/17/2020 ~ 01/01/2022"
        }
        if (tbr == '') {
            tbr = "01/01/XXXX ~ 01/01/XXXY";
        }
        if(text.trim() == d.getFullYear() || text.trim() == d.getFullYear().toString().substr(-2)){
            return ("Year Error: Too high~Year Error: Too high")
            }
		
        tbr = tbr.replace(/XXXX/g, theYear).replace(/XXXY/g, theYear + 1);
		for(var XXY of tbr.split('~')){
		if(((XXY.replace(/0/g,'').split('/')[0] >= (d.getMonth()+1)) && (d.getFullYear() == XXY.split('/')[2]))){
			return ("Year Error: Too high~Year Error: Too high")
		}
		}
        return tbr;
    }
    return tbr;
}
}
/*var words = {
    "en-US": [
        "by", //0
        "nostalgiaTok", //1
        "peiLamed", //2
        "what's your name?", //3
        "next", //4
        "Your", //5
        "nostalgia", //6
        "what time period are you nostalgic for?<br><span class='nstLower'>(ex 2022, summer 2023, mar 2019 - spring 2023)</span>", //7
        "what creator?<br><span class='nstLower'>(stick to one, can be changed later)</span>", //8
        "what topic?<br><span class='nstLower'>(stick to one, can be changed later)</span>", //9
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
        "options", //25
        "➢", //26
        "more of ts", //27
        "search again", //28
        "share video", //29
        "open video", //30
        "share nostalgiaTok", //31
        "what's good, ", //32
        "anqrzfeubxkmlpwhdvocty", //33
        "abcd_efghijklmn_opqrstudvwxyz_", //34
        "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", //35
        "nvm", //36
        "Last time you used nostalgiaTok", //37
        "search this now", //38
        "spring", //39
        "summer", //40
        "winter", //41
        "fall", //42
        "early", //43
        "mid", //44
        "late", //45
        "jan", //46
        "feb", //47
        "mar", //48
        "apr", //49
        "may", //50
        "jun", //51
        "jul", //52
        "aug", //53
        "sep", //54
        "oct", //55
        "nov", //56
        "dec", //57
        "january", //58
        "february", //59
        "march", //60
        "april", //61
        "may", //62
        "june", //63
        "july", //64
        "august", //65
        "september", //66
        "october", //67
        "november", //68
        "december", //69
        "past 2019 plzz", //70
        "well, before this year plzz", //71
        "between 2019 - now plzz", //72
        "sorry, try again plzz", //73
        "tysm btw ☺", //74
        "oopsie!", //75
        `Something didn't work<br>Hit "options" and then drag the box to "search again" to do another search`, //76
        "thats it ngl", //77
        "you've watched all the videos for this query", //78
        "videos are still coming in", //79
        "this will automatically scroll when they arrive" //80
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
}*/
function backValidateDate(tex, first) {
    var text = tex.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
   console.log(text);
    if (text.includes("~")) {
      if((parseFloat(tex.split('~')[0].split('/')[2]) == (parseInt(tex.split('~')[1].split('/')[2])-1)) && tex.split('~')[0].includes('01/01/') && tex.split('~')[1].includes('01/01/')){
        return parseFloat(tex.split('~')[0].split('/')[2]);
      }
        var retValue = backValidateDate(tex.split('~')[0], true) + " - " + backValidateDate(tex.split('~')[1], false);
        return retValue;
    } else {
        var tbr = "";
        var theYear = text.split('/')[2];
        if (theYear.length < 3) {
            theYear = 2000 + theYear;
        }
       theYear = parseInt(theYear);
           
   
        //spring
        if(first){
        if (text.includes("03/15/"+theYear)) {
            tbr = words[navLang][48];
        }
        
        //jan 
        if (text.toLowerCase().includes("01/01/"+theYear)) {
            tbr = words[navLang][46];
        }
        //feb
        if (text.includes("02/01/"+theYear)) {
            tbr = words[navLang][47];
        }
        //mar
        if (text.includes("03/01/"+theYear)) {
            tbr = words[navLang][48];
        }
        //apr
        if (text.includes("04/01/"+theYear)) {
            tbr = words[navLang][49];
        }
        //may
        if (text.includes("05/01/"+theYear)) {
            tbr = words[navLang][50];
        }
        //jun
        if (text.includes("06/01/"+theYear)) {
            tbr = words[navLang][51];
        }
        //july
        if (text.includes("07/01/"+theYear)) {
            tbr = words[navLang][52];
        }
        //aug
        if (text.includes("08/01/"+theYear)) {
            tbr = words[navLang][53];
        }
        //sep
        if (text.includes("09/01/"+theYear)) {
            tbr = words[navLang][54]
        }
        //oct
        if (text.includes("10/01/"+theYear)) {
            tbr = words[navLang][55]
        }
        //nov
        if (text.includes("11/01/"+theYear)) {
            tbr = words[navLang][56];
        }
        //dec
        if (text.includes("12/01/"+theYear)) {
            tbr = words[navLang][57];
        }
        tbr+=" "+theYear;
        //quarantine
        if (text.includes("03/17/2020")) {
            tbr = words[navLang][48] + "2020";
        }
    }else{
         
        //jan 
        if (text.toLowerCase().includes("02/01/"+theYear)) {
            tbr = words[navLang][46];
        }
        //feb
        if (text.includes("03/01/"+theYear)) {
            tbr = words[navLang][47];
        }
        //mar
        if (text.includes("04/01/"+theYear)) {
            tbr = words[navLang][48];
        }
        //apr
        if (text.includes("05/01/"+theYear)) {
            tbr = words[navLang][49];
        }
        //may
        if (text.includes("06/01/"+theYear)) {
            tbr = words[navLang][50];
        }
        //jun
        if (text.includes("07/01/"+theYear)) {
            tbr = words[navLang][51];
        }
        //july
        if (text.includes("08/01/"+theYear)) {
            tbr = words[navLang][52];
        }
        //aug
        if (text.includes("09/01/"+theYear)) {
            tbr = words[navLang][53];
        }
        //sep
        if (text.includes("10/01/"+theYear)) {
            tbr = words[navLang][54];
        }
        //oct
        if (text.includes("11/01/"+theYear)) {
            tbr = words[navLang][55];
        }
        //nov
        if (text.includes("12/01/"+theYear)) {
            tbr = words[navLang][56];
        }
tbr+=" "+theYear;
        if (text.includes("01/01/"+(theYear))) {
            tbr = words[navLang][57];
             tbr+=" "+(theYear-1);
        }
        if (text.includes("1/01/"+(theYear))) {
            tbr = words[navLang][57];
             tbr+=" "+(theYear-1);
        }
     
        
    }
        return tbr.charAt(0).toUpperCase() + tbr.slice(1);
    }
}
function handleError(Error) {
    console.log(Error)
    if (Error.includes('Too low')) {
        console.log(['too low', 70])
        words[navLang][7] = words[navLang][70] + '<br>' + words[navLang][7].split('<br>')[1]
    }
    if (Error.includes('Too high')) {
        console.log(['too high', 71])
        words[navLang][7] = words[navLang][71] + '<br>' + words[navLang][7].split('<br>')[1]
    }
    if (Error.includes("Can't read data")) {
        console.log([' cant read', 73])
        words[navLang][7] = words[navLang][73] + '<br>' + words[navLang][7].split('<br>')[1]
    }
    if (Error.includes("Both outta bounds")) {
        console.log(['both', 72])
        words[navLang][7] = words[navLang][72] + '<br>' + words[navLang][7].split('<br>')[1]
    }
    swapTe(shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");

            } else {
                handleError(thisVall)
            }
        }
    }, shVar[isSharing][1], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");

            } else {
                handleError(thisVall)
            }
        }
    });
    setTimeout(
        function () {
            while ([...document.querySelectorAll('.vs2')].length > 1) {
                [...document.querySelectorAll('.vs2')][0].remove();
            };
            var QQ = document.querySelector('.vs2');
           /* var newButtonNext = document.createElement('button');
            newButtonNext.setAttribute('onclick', `var jaeee = function () {
                if (doneAnimation) {
                    var thisVall = validateDate(document.querySelector("#teInput").value);
                    if (!thisVall.includes("Year Error")) {
                        user.year = thisVall;
                        makeShapes(user.year, "       ", "y", true);
                        swapTe(8, generatePreferences, 4, generatePreferences);
                        document.querySelector("#teButton").removeAttribute("onclick", "");
                    } else {
                        handleError(thisVall)
                    }
                }
            }; jaeee();`);
            newButtonNext.setAttribute('words', 4);
            newButtonNext.setAttribute('id', 'teButton');
            newButtonNext.innerText = words[navLang][4];
            document.querySelector('#textEnter').append(newButtonNext);
            newButtonNext.style.opacity = "1";
            newButtonNext.style.display = "block";
            */
            jintI = 0;
            fkAround2();
            document.querySelector('#textEnter').append(QQ);
           while ([...document.querySelector('#textEnter').querySelectorAll('[words = "4"]')].length > 1) {
               [...document.querySelector('#textEnter').querySelectorAll('[words = "4"]')][0].remove();
           };
        }, 505
    )
}
var ogArr = [];
var ogArr2 = [];
var gotNew = false;
var rateLimit = {};
//text = text.toLowerCase();
async function requestVideos(value) {
	autoplay = 1;
    //alert('twinnn'+value);
    var getFromNet = true;
    var userEnc = encodeURIComponent(user.year)+encodeURIComponent(user.preferences)+encodeURIComponent(user.topics);

        var pages = [];
        try{
            nextToken = localStorage.getItem('next_'+userEnc);
        }
        catch(e){
            
        }
        try{
            pages = localStorage.getItem('pag_'+userEnc).split('[PAGSPLIT]');
        }
        catch(e){
            try{
            localStorage.setItem('pag_'+userEnc,value)
            }
            catch(e){}
        }
       // alert([currentToken,value])
        if(pages.includes(value)){
            try{
                
            allVideos = localStorage.getItem('nst_'+userEnc).split('[NSTSPLIT]');
            if(allVideos.length<1){
                localStorage.removeItem('next_'+userEnc);
                localStorage.removeItem('nst_'+userEnc);
                localStorage.removeItem('pag_'+userEnc);
                if(rateLimit[userEnc]){
                rateLimit[userEnc] +=1;
                }else{
                    rateLimit[userEnc] = 0;
                }
                if(rateLimit[userEnc] < 2){
                getFromNet = true;
                }
            }else{
                 getFromNet = false;
            }
            
           
            
                
            }
            catch(e){
                try{
                localStorage.setItem('nst_'+userEnc,'');
                }catch(e){}
            }
        }else{
            try{
            localStorage.getItem('nst_'+userEnc).split('[NSTSPLIT]');
            }
            catch(e){
                try{
                localStorage.setItem('nst_'+userEnc,'');
                }catch(e){}
            }
        }
        console.log[getFromNet,allVideos,'TWIZZZZYYYYY'];
        if(allVideos.length>0&&allVideos[0].includes('Error')){
            getFromNet = true;
        }
    if (getFromNet) {
        try {
            const result = await requestVideosInner(value);
            var sanitized = result.split('NEXT_TOKEN:')[0];
            sanitized = sanitized.replace(/\n/g,'');
            nextToken = result.split('NEXT_TOKEN:')[1];
            try{
				if(!sanitized.trim().startsWith('<') || allVideos[0] == "Error"){
            localStorage.setItem('next_'+userEnc,nextToken);
				}else{
					giveError();
				}
            }
            catch(e){}
            var tbaa = [];
                for (var i of sanitized.split(' ~ ')) {
                    tbaa.push(i);
                    console.log(i);
                }
                tbaa = [...tbaa.sort(() => Math.random() - 0.5)];
            allVideos = [...allVideos, ...tbaa];

try{
	if(!sanitized.trim().startsWith('<') || allVideos[0] == "Error"){
            localStorage.setItem('nst_'+userEnc,localStorage.getItem('nst_'+userEnc,'')+'[NSTSPLIT]'+allVideos.join('[NSTSPLIT]'));
            localStorage.setItem('pag_'+userEnc,localStorage.getItem('pag_'+userEnc,'')+'[PAGSPLIT]'+value);
	}else{
					giveError();
				}
}catch(e){}
            gotNew = true;
        } catch (err) {
            console.error(err);
            allVideos[0] = "ERROR";
            giveError();
        }
    }
    if(nextToken == "" || !gotNew){
            allVideos = [...allVideos.sort(() => Math.random() - 0.5)];
    }
    allVideos = allVideos.filter((item, index) => allVideos.indexOf(item) === index);
    const newArr = allVideos.filter(item => !item.startsWith("📺"));
    allVideos = [...newArr];
            var tbss = "";
            ogArr = [...allVideos];
            console.log(allVideos);
            var innerBool = true;
            if(false){

            }else{
                if(localStorage.getItem('nostalgiaTokAllowOldVideos') == "true"){
                    innerBool = false;
                }
            }
            if(innerBool){
                var innerValls = localStorage.getItem('nostalgiaTokOldVideos').split("|SPLIT|");
                var offset = 0;
            allVideos = [...allVideos.filter(n => !innerValls.includes(n))]
            }
            console.log(allVideos);
            ogArr2 = [...allVideos];
			var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			allVideos = [...new Set(allVideos)]
            console.log(result);
            if(isSharing!=="false"){
                console.log(allVideos);
allVideos.unshift(shareVarr);
console.log(allVideos);
            }
         try{
var interval = parseFloat(Ads[0]); // e.g. "5"
var offset = 3;                    // your +3 start
var position = 0;                  // counts items in the final stream
var result = [];

for (var i = 0; i < allVideos.length; i++) {
  // add the next video
  result.push(allVideos[i]);
  position++;

  // logical position with your +3 offset
  var logicalPos = position + offset;

  // time to insert an ad?
  if (logicalPos % interval == 0) {
    // pick a random ad (skip index 0)
    var inn = Math.floor(Math.random() * (Ads.length - 1)) + 1;
    result.push('📺' + Ads[inn]);
    offset++; // ad also takes a slot
  }
}

// replace original list
 var innerBool = true;
            if(false){

            }else{
                if(localStorage.getItem('nostalgiaTokAllowOldVideos') == "true"){
                    innerBool = false;
                }
            }
            if(innerBool){
                var innerValls = localStorage.getItem('nostalgiaTokOldVideos').split("|SPLIT|");
                var offset = 0;
            result = [...result.filter(n => !innerValls.includes(n))]
            }
allVideos = [...result];

}
catch(e){
  console.log(e);
}

     onYouTubeIframeAPIReady();
}

async function requestVideosInner(value) {
    let url =
        "https://script.google.com/macros/s/AKfycbyRGI3dRtizuTd9bAfHw6xu7VzwpBQobP9o6ULFSMht5laEduw5QtoHHRVoC_qAJHo/exec"
        + "?year=" + encodeURIComponent(user.year)
        + "&creator=" + encodeURIComponent(user.preferences)
        + "&topic=" + encodeURIComponent(user.topics);
    if (value!=="") {
        url = url + "&token=" + encodeURIComponent(nextToken);
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            allVideos[0] = "ERROR";
        }
        console.log(response);

        const result = await response.text();
        return result;   
    } catch (error) {
        console.error(error.message);
        allVideos[0] = "ERROR";
    }
}
function giveError(a) {
    howToFullscreen(true, [75,76], a)
}
function giveError2() {
    howToFullscreen(true, [79,80])
}
function giveError3() {
   howToFullscreen(true, [77,78])
}

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var ErrCount = 0;
      function onPlayerStateChange(event) {
      //  alert(1);
        //alert(5);
         if (event.data == 0) { 
          //  alert(2);
          player.seekTo(0);
          player.playVideo();
        }
    if (event.data == YT.PlayerState.PAUSED) {
       
        console.error(playPause)
        if(withinSpeedUp){
            player.playVideo();
        }
    }
     if (event.data == YT.PlayerState.PLAYING) {
       if(!document.querySelector('#touchOverlay').checkVisibility()){
        player.pauseVideo();
       }
        console.error(playPause)
    }
   
}
  
      function createOrReloadYouTubePlayer(avcp) {
        if(avcp.length < 7){
            avcp = Ads[1];
        }
        if(document.querySelector('div#videoFrame') != null){
        player = new YT.Player('videoFrame', {
          height: '390',
          width: '640',
          videoId: avcp,
          playerVars: {
            'playsinline': 1,
            'autoplay': [1,0][autoplay],
            'muted': autoplay,
            'loop': 1,
            'playlist': avcp,
            'showcontrols': 0
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': function(event) {
              console.log(event);
            }
          }
        });
    }
      }
    function onYouTubeIframeAPIReady() {
        try{
             requestTheFullscreen({'yes':true,'no':false}[fullsc]);
        }catch(e){
        }
       
        if(allVideos.length == 0){
            allVideos[0] = Ads[1];
        }
     var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navLang][84]+({'no': '↘','yes': '↖'})[fullsc];
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                            }
		    if(avcp.length < 7){
avcp = Ads[1];
											}
                                          
        try{
          createOrReloadYouTubePlayer(avcp);
        }
        catch(e){
            console.log(e);
            
        }
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
       // alert(5);
        if(allVideos.length == 0){
            allVideos[0] = Ads[1];
        }
          var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navLang][84]+({'no': '↘','yes': '↖'})[fullsc];
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = ({'no': '↘','yes': '↖'})[fullsc];
                                            }
                                            var TOOO = document.querySelector('#touchOverlay');
                                            TOOO.style.transition ="0";
                                            TOOO.style.marginLeft = "-1000vw";
		  if(avcp.length < 7){
            avcp = Ads[1];
        }
                                            try{
                                            player.loadVideoById(avcp)
                                            }catch(e){}
                                            setTimeout(function(){ TOOO.style.marginLeft = "";},600)
        readyy = true;
        player.playVideo();
                                        
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      
function incPlayPause(){
   // playPause++;
}
      
