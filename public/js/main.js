$(document).ready(function(){

    // $.ajax({url: "/gettopsong", success: function(result){
        document.player = document.getElementById("player");
        document.player.setAttribute("src", "http://mp3teluguwap.net/mp3/2019/Saaho%20(2019)/Saaho%20(2019)/Bad%20Boy%20-%20SenSongsMp3.Co.mp3");
        document.player.load();

        document.player.onloadeddata = function(){
            var duration = Math.round(document.player.duration)
            minutes = Math.floor(duration/60)
            seconds = duration - minutes*60
            $("#songduration").html(minutes + ":" + seconds)
            document.getElementById("progress").max = ""+duration+""
        }
    // }});

$(".whitelistbtn").hover(function(){
    $(this).removeClass("far fa-heart")
    $(this).addClass("fas fa-heart")
},function(){
    $(this).removeClass("fas fa-heart")
    $(this).addClass("far fa-heart")
})

$("#login").on("click",function(){

    $.ajax({url: "/login", success: function(result){
        $("#mainbody").html(result);
    }});

});
$("#register").on("click",function(){

    $.ajax({url: "/register", success: function(result){
        $("#mainbody").html(result);
    }});

});



});

function pause()
{
    document.player.pause();
    $("#playpausestatus").html(`<svg onclick="play()"  width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-140.96875 0-256 115.050781-256 256 0 140.96875 115.050781 256 256 256 140.96875 0 256-115.050781 256-256 0-140.96875-115.050781-256-256-256zm0 482c-124.617188 0-226-101.382812-226-226s101.382812-226 226-226 226 101.382812 226 226-101.382812 226-226 226zm0 0"/><path d="m181 404.027344 222.042969-148.027344-222.042969-148.027344zm30-240 137.957031 91.972656-137.957031 91.972656zm0 0"/></svg>`)
}

function play()
{
    document.player.play();
    $("#playpausestatus").html(`<svg onclick="pause()" width="24" height="24" id="Layer_1" enable-background="new 0 0 511.448 511.448" viewBox="0 0 511.448 511.448" xmlns="http://www.w3.org/2000/svg"><path d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z"/><path d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/><path d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/></svg>`)
}

function rangechanged(seconds)
{
    console.log(seconds)
    document.player.currentTime = seconds;
}

function playing()
{
    currenttime = Math.round(document.player.currentTime);
    minutes = Math.floor(currenttime/60)
    minutes = minutes > 9 ? "" + minutes: "0" + minutes
    seconds = currenttime - minutes*60
    seconds = seconds > 9 ? "" + seconds: "0" + seconds
    $("#presentduration").html(minutes + ":" + seconds)
    document.getElementById("progress").value = ""+currenttime+""
    console.log(currenttime)
}


function changesong(id)
{
    // $.ajax({url: "/song/getsongurlbyid", success: function(result){
        if(!document.player.paused)
        {
            pause();
            rangechanged(0);
            document.player.setAttribute("src", id);
            document.player.load();
            play();
        }
    // }});
}