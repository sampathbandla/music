document.queue = []

function addtoqueue(id,name,moviename,year,url,imgurl)
{
    if(document.queue.length == 0)
    {
        $("#empty").hide()
    }
    if(document.queue.includes(id + " - " + name) == false)
    {
        $("#queue").prepend(`<div onclick="changesong(this)" datasongname="${name}" datamoviename="${moviename}" dataurl="${url}" datayear="${year}" dataimg="${imgurl}" dataid="${id}" class="song">
        <div class="imgwithheart">
            <img src="${imgurl}" alt="">
        </div>
        <div class="details">
            <p class="songname">${name}</p>
            <p class="movie">${moviename} - ${year}</p>
        </div>
        <div class="menubtn">
        <a onclick="event.stopPropagation();" style="text-decoration:none;color:white" href="${url}"><i class="fas fa-download"></i></a>
        </div>
        </div>`)
        document.queue.push(id + " - " + name)
    }
    
}
function registerfunction()
{
    register()
    return false;
}
function loginsumbit()
{
    login()
    return false;
}

function register()
{
    var username = $("#username").val();
    var password = $("#password").val();
    if(username!= "" && password != "")
    {
        $.post("/user/register",{username:username,password:password}, function(data, status){
            if(data == 1)
            {
                alert("Username already exist!")
            }
            else
            {
               updateplayer();
            }
        });
    }
    else
    {
        alert("Enter all details!")
    }

    

}

function login()
{
    var username = $("#username").val();
    var password = $("#password").val();
    if(username!= "" && password != "")
    {
        $.post("/user/login",{username:username,password:password}, function(data, status){
            if(data == 1)
            {
                alert("Check Details!")
            }
            else
            {
                if(data == 36)
                {
                    window.location.href = '/redirect';
                }
                else
                {
                    updateplayer()
                }
            }
        });
    }
    else
    {
        alert("Enter all details!")
    }

    

}

function changevolume(value)
{
    document.player.volume = value
}

function getmovie(id)
{

    $.ajax({url: "/song/movie?id=" + id, success: function(result){
        $("#mainbody").html(result)
    }});
}

function index()
{
    $.ajax({url: "/dashboard", success: function(result){
        $("#mainbody").html(result)
    }});
}