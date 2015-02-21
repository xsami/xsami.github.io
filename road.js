var go = function() {
    var a = [];
    var d = Math.round( Math.random() * 360);
    if( Math.random() < 0.5){
       d = a - d;
    }
    else{
        d = +a + +d;
    }
    console.log(d);
    $('img').rotate({animateTo:d});
};
setInterval( 'go()', 700);
