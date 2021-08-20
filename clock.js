
var tZoneIndex = 0;
function getTZ() {
    var a = document.getElementById("Select").value;
    tZoneIndex = Number(a);
    console.log(a);
}

let worldHour = setInterval(() => {
    var hour;
    var min;
    switch (tZoneIndex) {
        case 0:
            {
                hour = 7;
                min = 0;
                break;
            }
        case 1:
            {
                hour = 4;
                min = 30;
                break;
            }
        case 2:
            {
                hour = 1;
                min = 0;
                break;
            }
        case 3:
            {
                hour = 1;
                min = 0;
                break;
            }
        case 4:
            {
                hour = 8;
                min = 0;
                break;
            }
    }

    let UTCday = new Date();
    let UtcHourDeg = (UTCday.getUTCHours() + hour) * 30;
    let UtcMinDeg = (UTCday.getUTCMinutes() + min) * 6;
    let UtcSecDeg = UTCday.getSeconds() * 6;
    document.getElementById("hr").style.transform = `rotateZ(${(UtcHourDeg) + (UtcMinDeg / 12)}deg)`;
    document.getElementById("mn").style.transform = `rotateZ(${UtcMinDeg}deg)`;
    document.getElementById("ss").style.transform = `rotateZ(${UtcSecDeg}deg)`;
});


