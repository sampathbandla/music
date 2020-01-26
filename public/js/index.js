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
                updateplayer()
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
                updateplayer()
            }
        });
    }
    else
    {
        alert("Enter all details!")
    }

    

}
function updateplayer()
{
    $.ajax({url: "/user/getusername", success: function(result){
        $("#account").html(`<p class="username" id="username">${result}</p>
        <a href="#" class="register" onclick="logout()" id="logout">Logout</a>`)
    }});
    $.ajax({url: "/dashboard", success: function(result){
        $("#mainbody").html(result)
    }});
    document.login = "YES"
}

function logout()
{
    $.ajax({url:"/user/logout",success:function(result){
        if(result == true)
        {
            $.ajax({url: "/user/getusername", success: function(result){
                $("#account").html(`
                <a href="#" id="login" class="login">Login</a>
                <a href="#" id="register" class="register">Register</a>`)
            }});
            $.ajax({url: "/dashboard", success: function(result){
                $("#mainbody").html(result)
            }});
        }
        else
        {
            alert("Something went wrong!")
        }
    }});
}