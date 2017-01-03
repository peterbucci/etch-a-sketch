(function ($) {

$(document).ready(function() {
    var currentSize = 14;
    var wrapper = $('#wrapper');
    var frame = $('#frame');
    function init(size) {
        
        var frameHeight = frame.height();
        frame.width(frameHeight);
        
        $('#currentSize').html('The current dimensions are ' + size + ' x ' + size);
        var htmlFrag = ''
        var dimensions = wrapper.height() / size + 'px';
        for(var i = 0; i < size * size; i++) {
            htmlFrag += '<div class="square-wrap" style="height:' + dimensions + '; width:' + dimensions + ';"><div class="square"></div></div>'
        }
        wrapper.html(htmlFrag);
        
        $('.square').mouseenter(function() {
            var $el = $(this)
            var opacity = $el.css('opacity')
            $el.css('opacity', +opacity + 0.2)
        });
        
    };
    
    init(currentSize);
    
    $(window).resize(function() {
        var frameHeight = frame.height();
        frame.width(frameHeight);
        var height = wrapper.height() / currentSize;
        $('.square-wrap').outerHeight(height);
        $('.square-wrap').outerWidth(height);
    });
    
    $('#shake').click(function() {
        $('#frame').effect('shake', {times:2});
        $('.square').css('opacity', function(){
            var $el = $(this)
            var opacity = $el.css('opacity')
            return +opacity - 0.2
        });
    });
    
    $("#dimensions").click(function(){
        var input = +$('#input').val();
        if(!input) {
            $('#error').html('This is not a valid number');
        } else if(input > 64) {
            $('#error').html('Pick a number between 1 and 64');
        } else {
            $('#error').empty();
            currentSize = input;
            init(input);
        }
    })
    
    $('.color').click(function() {
        $('.square').css('background-color', $(this).css('background-color'))
    });
    
    var menuTrigger = false;
    
    $('#menu').click(function() {
        
        if(!menuTrigger) {
            $('#controls').animate({top: '0px'});
            menuTrigger = true;
        } else {
            $('#controls').animate({top: '-100px'});
            menuTrigger = false;
        };
    })
    
});

})(jQuery)