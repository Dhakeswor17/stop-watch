var display = document.getElementById('container');
var start = document.getElementById('btn1');
var stop = document.getElementById('btn2');
var reset = document.getElementById('btn3');
var appminute = document.getElementById('minutes');
var appnsecond = document.getElementById('seconds');
var appten = document.getElementById('tens');
var second = 0;
var ten = 0;
var minute = 0;
var interval;
 
function startTimer(){
    ten++;
    if(ten<9){
        appten.innerHTML= '0' + ten;
    }
    if(ten>9){
        appten.innerHTML= ten;
    }
    if(ten>99){
        second++;
       appnsecond.innerHTML= second;
        ten=0;
        appten.innerHTML ='0'+ 0;
        }
   if(second<9){
        appnsecond.innerHTML='0'+second;
    }
    if(second>9){
        appnsecond.innerHTML =second;
    }
    if(second>59){
        minute++;
        second=0;
        appminute.innerHTML='0'+ minute;
        if(minute>9){
          appminute.innerHTML=minute;
        }

    }

}
start.addEventListener('click',function(){
    interval=setInterval(startTimer);
    
});
stop.addEventListener('click',function(){
clearInterval(interval);
    
});
reset.onclick=function(){
    clearInterval(interval);
    ten='00';
    second='00';
    minute='00';
    appnsecond.innerHTML = second;
    appminute.innerHTML=minute;
    appten.innerHTML=ten;
}




