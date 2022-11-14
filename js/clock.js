function set2fig(num) {
      // 桁数が1桁だったら先頭に0を加えて2桁に調整する
        var ret;
        if( num < 10 ) { ret = "0" + num; }
        else { ret = num; }
        return ret;
      }
再構築
      function showClock() {
        var nowTime = new Date();
        var nowHour = set2fig( nowTime.getHours() );
        var nowMin = set2fig( nowTime.getMinutes() );
        var nowSec = set2fig( nowTime.getSeconds() );
        var msg = nowHour + "h " + nowMin + "m " + nowSec + "s"


        if(nowHour == 0 && nowMin == 48 && nowSec == 00) {
            alert("4時間目終了");
            document.getElementById("chime").innerHTML = msg;
        }
        setInterval('showClock()' ,1000)
        

        document.getElementById("RealtimeClockArea").innerHTML = msg;



      }
      setInterval('showClock()' ,1000)