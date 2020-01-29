function getmoviesbyalpha(alpha)
{
    loadstart()
    history.pushState('alpha.' + alpha,null,"?moviebyalpha=" + alpha)
    $.ajax({url: "/movies?alpha=" + alpha, success: function(result){
        $("#mainbody").html(result)
    }});
    loadend()
}
function getmoviesbyalphawithoutpush(alpha)
{
    loadstart()
    $.ajax({url: "/movies?alpha=" + alpha, success: function(result){
        $("#mainbody").html(result)
    }});
    loadend()
}
function getmoviesbyyear(year)
{
    loadstart()
    history.pushState('year.' + year,null,"?moviebyyear=" + year)
    $.ajax({url: "/movies?year=" + year, success: function(result){
        $("#mainbody").html(result)
    }});
    loadend()
}
function getmoviesbyyearwithoutpush(year)
{
    loadstart()
    $.ajax({url: "/movies?year=" + year, success: function(result){
        $("#mainbody").html(result)
    }});
    loadend()
}