var end = new Date('2/26/2016 9:0 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var _month = _day * 31;
var timer;

function showRemaining() {
    var now = new Date();
    var offset = end - now;
    
    if (offset < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = '';
        return;
    }
    
    var months = Math.floor(offset / _month);
    var days = Math.floor((offset % _month) / _day);
    var hours = Math.floor((offset % _day) / _hour);
    var minutes = Math.floor((offset % _hour) / _minute);
    var seconds = Math.floor((offset % _minute) / _second);
    
    var m = "";
    var d = "";
    var h = "";
    var min = "";
    var s = "";
    
    if(months > 1) {
        m = months + ' months ';
    }
    else if(months === 1) {
        m = months + ' month ';
    }
    
    if(days > 1) {
        d = days + ' days ';
    }
    else if(days === 1) {
        d = days + ' day ';
    }
    
    if(hours > 1) {
        h = hours + ' hours ';
    }
    else if(hours === 1) {
        h = hours + ' hour ';
    }
    
    if(minutes > 1 || minutes === 0) {
        min = minutes + ' minutes ';
    }
    else if(minutes === 1) {
        min = minutes + ' minute ';
    }
    
    if(seconds > 1 || seconds === 0) {
        s = seconds + ' seconds'
    }
    else if(seconds === 1) {
        s = seconds + ' second'
    }
    
    var output = m + d + h + min + s;
    
    document.getElementById('countdown').innerHTML = output;
}

timer = setInterval(showRemaining, 1000);