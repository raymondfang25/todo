//Check off todos by clicking

//Can only add event listeners to events loaded
$("ul").on('click', "li", function(){
    $(this).toggleClass('completed');
})

//Click on X to delete todo
$("ul").on('click', 'span',function(event){
    //Selects the parent li to fade out
    $(this).parent().fadeOut(500, function(){
        //Removes the parent
        $(this).remove()
    });
    //Stops Bubbling
    event.stopPropagation();
}) 

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabs new todo from input
        var todoText = $(this).val()
        $(this).val("")
        $("ul").append('<li><span><i class="fa fa-trash-alt"></i></span> ' + todoText + "</li>")
    }
})

$(".fa-plus").on("click", function(){
    $("input[type='text'").fadeToggle()
})

$(".clear").on('click', function(){
    $('li').fadeOut(function(){
        $(this).remove();
    })
})