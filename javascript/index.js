//timer 12 hours
function timer12(){
    var timezone='Am'
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    hh>12 ? hh=hh-12: hh;
    hh>12? timezone='PM' : timezone='AM';
    hh <10 ? hh='0'+hh : hh;
    mm <10 ? mm='0'+mm : mm;
    ss <10 ? ss='0'+ss : ss;
    var alarmTime12=`${hh}:${mm} ${timezone}`
    document.querySelector('#hr12').innerHTML=alarmTime12;

}
setInterval(timer12,1000)
// timer 24 hours
function time24(){
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    hh <10 ? hh='0'+hh : hh;
    mm <10 ? mm='0'+mm : mm;
    ss <10 ? ss='0'+ss : ss;
    document.querySelector('#hr24').innerHTML= `${hh}:${mm}`;
    document.querySelector('#sec').innerHTML=ss
}
setInterval(time24,1000)

//  Date 
function currentDate(){
    var monthName = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October","November", "December"];
    var date = new Date();
    var dd= date.getDate();
    var mm = date.getMonth();
    var yy = date.getFullYear();
    dd<10?dd='0'+dd:dd;
    mm = monthName[mm]
    document.getElementById('date').innerHTML=`${dd}/${mm}/${yy}`
    var day= date.getDay();
    var dayName=['ఆదివారం','సోమవారం','మంగళవారం','బుధవారం','గురువారం','శుక్రవారం','శనివారం'];
    day = dayName[day];
    document.querySelector('#day').innerHTML=day;   
}
setInterval(currentDate,1000);

var num=0;
function togglebtn(){
    num++;
    if(num%2==0){
       document.getElementById('btn').style.background='white';
       document.getElementById('toggle').style.background='black'
       document.getElementById('btn').style.left="0vw"
       document.getElementById('hr12').style.display='block'
       document.getElementById('hr24').style.display='none'
    }
    else{
        document.getElementById('btn').style.background='black'
        document.getElementById('toggle').style.background='white'
        document.getElementById('btn').style.right='0px'
        document.getElementById('hr12').style.display='none'
        document.getElementById('hr24').style.display='block'
    }
}
// backgroud Images 
function bgImage(){
    var date = new Date();
    var day = date.getDay();
    var images = ['img1.png','img2.png','img3.png','img4.jpg','img6.jpg','img8.jpg','img9.png'];
    document.body.style.background=`url(../images/${images[day]})`
    document.body.style.backgroundSize='100% 100vh'
    document.body.style.backgroundRepeat='no-repeat'
    document.body.style.backgroundPosition='100%'
}
bgImage();

// alarm time 
function alarmTimeDate(){
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var dd = date.getDate()
    var mm = date.getMonth()+1;
    var yy = date.getFullYear();
    hh <10 ? hh='0'+hh : hh;
    mm <10 ? mm='0'+mm : mm;
    var currentTime = `${hh}:${mm}`
    var userTime= document.getElementById('alarmTime').value;
    var userDate = document.getElementById('alarmDate').value;
    dd<10?dd='0'+dd:dd;
     var currentDate=`${dd}-${mm}-${yy}`
     console.log(currentDate);
    console.log(userDate);

    //Alarm audio
    var alarm = new Audio('./audio/alarm-26620.mp3');
    if(userTime==currentTime){
       alarm.play()
    }
}
alarmTimeDate();
function alarmBtn(){
    document.querySelector('#containerAlarm').style.display='flex'
}

function closeBtn(){
    document.querySelector('#containerAlarm').style.display='none'
}
closeBtn()


