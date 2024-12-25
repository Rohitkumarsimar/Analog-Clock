const tick = new Audio("assets/tick.mp3");
tick.volume = 0.1;


setInterval(()=>{
    d= new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    sec = d.getSeconds();

    hrot = 30 * htime + mtime/2;
    mrot = 6*mtime;
    srot = 6*sec;

    hour.style.transform = `rotate(${hrot}deg)`
    minutes.style.transform = `rotate(${mrot}deg)`
    seconds.style.transform = `rotate(${srot}deg)`
    
},1000);

setInterval(()=>{
    tick.play().catch((e) => {
        console.error('Error playing audio file:', e);
    });
}, 1000);

