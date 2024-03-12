let showtime = function () {
    const nowdate = new Date();
    let year = nowdate.getFullYear(),
        month = nowdate.getMonth() + 1,
        date = nowdate.getDate(),
        day = nowdate.getDay(),
        week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    let div = document.getElementById("showtime");
    setInterval (function() {
        div.innerHTML = showtime();
    }, 1000);
    return year + "年" + month + "月" + date + "日" + week[day] + " " + h + ":" + m + ":" + s;
};

let checkTime = function (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

