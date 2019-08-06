function Build(img){
    $("body").prepend("<div id='blog-show'><div class='blog-text'></div></div>");
    $(".blog-text").prepend("<img src='" + img + "' alt='blog_photo'>");
    $(".blog-text").prepend("<span class='icon-cancel'></span>");
}

function Add(result){
    $(".blog-text").append(result);
}

$(document).ready(function(){
    $('.blog-button').click(function(){
        var img = $(this).attr('data-img-src');
        Build(img);
        var page = $(this).attr("data-path");
        if(localStorage.getItem(page)){
            Add(localStorage.getItem(page));
        }else{
            $.ajax({
                url: page,
                success: function(result){
                    Add(result);
                    localStorage.setItem(page, result);
                }
            });
        }
        $("#blog-show").css("display", "flex");

        $(".blog-text > span").click(function(){
            $("#blog-show").remove();
        });
    });
});