$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});




var menu = $('overlay');

var watcher = scrollMonitor.create( menu );

watcher.lock();

watcher.stateChange(function() {
  $(menu).toggleClass('scrolled', this.isAboveViewport)
});