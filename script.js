const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('minutes');
const secondsE1=document.getElementById('seconds');

const newYears="1 Jan 2021";

countdown=()=>{
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    let total=Date.parse(newYearsDate)-Date.parse(currentDate);
    
    const totalSeconds=(newYearsDate-currentDate)/1000;

    const days=Math.ceil(totalSeconds/3600/24);

    const hours=Math.ceil(totalSeconds/3600)%24;

    const minutes=Math.ceil(totalSeconds/60)%60;
   
    const seconds=Math.ceil(totalSeconds)%60;
     
    
    daysE1.innerHTML=days;
    hoursE1.innerHTML=formatTime(hours);
    minsE1.innerHTML=formatTime(minutes);
    secondsE1.innerHTML=formatTime(seconds);
    console.log(days)

    console.log(days, hours, minutes, seconds)
}
function formatTime(time){
    return time<10?`0${time}`:time;
}

countdown();
setInterval(countdown,1000)