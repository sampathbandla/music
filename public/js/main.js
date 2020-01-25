$(document).ready(function(){

$(".whitelistbtn").hover(function(){
    $(this).removeClass("far fa-heart")
    $(this).addClass("fas fa-heart")
},function(){
    $(this).removeClass("fas fa-heart")
    $(this).addClass("far fa-heart")
})

});