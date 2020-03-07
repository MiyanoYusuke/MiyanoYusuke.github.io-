var num = 2;
$(function() {
    setInterval(function(){
        if(num < 3){
            $('.slide').css(
                'background-image','url("img/top'+ num +'.jpg")'
            );
            num++;
        }else{
            $('.slide').css(
                'background-image','url("img/top'+ num +'.jpg")'
            );
            num = 1;
        }
    },2000);
});