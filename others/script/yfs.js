//改变窗口大小时调整图片大小
window.onload = resizeImages;
window.onresize = resizeImages;

function resizeImages() {
    $(function (e) {
        let screenWeight = document.documentElement.clientWidth;
        let screenHeight = document.documentElement.clientHeight;
        $("[name=pageImg]").css("width", screenWeight).css("height", screenHeight);
    });
}

let index = 1;
let curIndex = 1;
let wrap = document.getElementById("wrap");
let main = document.getElementById("main");
let hei = document.body.clientHeight;
wrap.style.height = hei + "px";
let obj = document.getElementsByTagName("div");
for (let i = 0; i < obj.length; i++) {
    if (obj[i].className === 'page') {
        obj[i].style.height = hei + "px";
    }
}

let pageNum = document.querySelectorAll(".page").length;
//如果不加时间控制，滚动会过度灵敏，一次翻好几屏
let startTime = 0, //翻屏起始时间
    endTime = 0,
    now = 0;
//浏览器兼容
if ((navigator.userAgent.toLowerCase().indexOf("firefox") !== -1)) {
    document.addEventListener("DOMMouseScroll", scrollFun, false);
} else if (document.addEventListener) {
    document.addEventListener("mousewheel", scrollFun, false);
} else if (document.attachEvent) {
    document.attachEvent("onmousewheel", scrollFun);
} else {
    document.onmousewheel = scrollFun;
}

//滚动事件处理函数
function scrollFun(event) {
    startTime = new Date().getTime();
    let delta = event.detail || (-event.wheelDelta);
    //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
    //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
    if ((endTime - startTime) < -1000) {
        if (delta > 0 && parseInt(main.offsetTop) > -(hei * (pageNum - 1))) {
            //向下滚动
            index++;
            toPage(index);
        }
        if (delta < 0 && parseInt(main.offsetTop) < 0) {
            //向上滚动
            index--;
            toPage(index);
        }
        endTime = new Date().getTime();
    } else {
        event.preventDefault();
    }
}

function toPage(index) {
    //jquery实现动画效果
    if(index!==curIndex){
        let delta=index - curIndex;
        now = now - delta * hei;
        $("#main").animate({
            top: (now + 'px')
        }, 1000);
        curIndex = index;
    }
}

//鼠标悬停翻页
document.getElementById("pageUlLi1").onmouseover = function () {
    toPage(1);
}
document.getElementById("pageUlLi2").onmouseover = function () {
    toPage(2);
}
document.getElementById("pageUlLi3").onmouseover = function () {
    toPage(3);
}
document.getElementById("pageUlLi4").onmouseover = function () {
    toPage(4);
}
document.getElementById("pageUlLi5").onmouseover = function () {
    toPage(5);
}

