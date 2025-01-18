setInterval(()=>{
    date=new Date();
    hr=date.getHours();
    mn=date.getMinutes();
    sc=date.getSeconds();
    hrotation=hr*30+mn/2;//60min=30degree hence total degree equals min into one by two
    mrotation=mn*6;
    srotation=sc*6;
    hour.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;

})