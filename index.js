$('head').append(
    '<style>#container{display:none;}'
);
$(window).on("load", function() {   
     $('#container').fadeIn(1500);
});
