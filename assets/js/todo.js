//check Off todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete todos
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//type a todo title than press enter to add new todo
$("input[type='text'").keypress(function (event) {
    if (event.which === 13) {
        var todoTitle = $(this).val();
        $(this).val("");

        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTitle + "</li>");
    }
});