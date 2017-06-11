

//Check off Specific todos by clicking
// this allows you to add listener to li that are not yet created when you load the page
//(ul is on the page when it loads, the 2nd argument (li) is not necessary on the page)
$("ul").on("click", "li", function(){ 
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(800,function(){
		$(this).remove();  //the "this" here is already the parent!!!
	});
	event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
	if(event.which === 13){ //event.which gives us the code of the key being pressed
		// 13 is the code for the enter button.
		//grab input
	var todoText = $(this).val();
	//clear up the input
	$(this).val("");
	//create a new li
	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ todoText + "</li>");	
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});