const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();

    // 年を取得
    var year = d.getFullYear();
    // 月を取得
    var month = d.getMonth() + 1;
    // 日を取得
    var date = d.getDate();
    // 曜日を取得
    var dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var day = weekday[dayNum];
    // 時を取得
    var hour = d.getHours();
    // 分を取得
    var min = d.getMinutes();
    // 秒を取得
    var sec = d.getSeconds();

    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // 日付・時刻の文字列を作成
    var today = `${year}.${month}.${date} ${day}`;
    var time = `${hour}:${min}:${sec}`;
    var title = `${month}.${date} ${day} |  ${hour}:${min}:${sec}`;

    // 文字列を出力
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
    document.querySelector("title").innerText = title;
}

  // 1秒ごとにclock関数を呼び出す
setInterval(clock, 500)
