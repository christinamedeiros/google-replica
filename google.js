  $('.button').hover(function(){
  var self = this;
  var pos = -(Math.floor(Math.random() * 5) + 1) * 2.1

  setTimeout(function(){
    $(self).find("ul").css("margin-top", pos + "em");
  }, 600);
}, function(){
  $(this).find("ul").css("margin-top", "0px");
})
