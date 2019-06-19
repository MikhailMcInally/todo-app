$(function () {
    $('[data-toggle="popover"]').popover()
});
//check Off todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// edit content by clicking on todo
// $("ul").on("click", "span[class='edit']", function () {
//     $(this).parent()
// });

//Click on eraser icon to delete todos
$("ul").on("click", "span[class='erase']", function (event) {
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

        $("ul").append("<li><span class='erase'><i class='fas fa-eraser'></i></span><span class='edit' id='edit'><i class='fas fa-edit'></i></span> " + todoTitle + "</li>");
    }
});

$("#fade").click(function () {
    $("input[type='text']").fadeToggle();
});
