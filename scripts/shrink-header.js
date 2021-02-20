$(window).scroll(function(){
    if
    ($(document).scrollTop() < 125){
        document.getElementById("header-inner").classList.remove("minimize");
    }
    else
    {
        document.getElementById("header-inner").classList.add("minimize");
    }
    var body = document.body,
        html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    if ($(document).scrollTop() > 125 && $(document).scrollTop() > height - 750) {
        document.getElementById("header-inner").classList.add("hide");
    } else {
        document.getElementById("header-inner").classList.remove("hide");
    }
})