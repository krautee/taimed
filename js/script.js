function bmDebugShowDetailsFor(element,hash){
	if (typeof element == 'string')
		element = document.getElementById(element+'-'+hash);
	
	var panelElements = document.getElementsByClassName('bmDebugTop');
	for (var i = 0; i < panelElements.length; ++i){
		if (panelElements[i] != element){
			panelElements[i].style.display = 'none';
		}
	}
	
	bmDebugToggle(element,hash);
}

function bmDebugToggle(element,hash){
	if (typeof element == 'string')
		element = document.getElementById(element+'-'+hash);
	
	if (element)
		element.style.display = element.style.display == 'none' ? '' : 'none';
}
// for enter form submit with action
function submitenter(myfield,e,act){
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13) {
	   if(act){jQuery('#act').val(act);}
	   myfield.form.submit();
	   return false;
   }
   else return true;
}

$(document).ready(function(){
	MoveBannerPics();
	
	$('.dwn-btns a').on("click", function(e){
		e.stopPropagation();
	});
	
	// $(document).mouseup(function (e) {
	$(document).ready(function (e) {
		var container = $(".accordion");

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$('.accordion').accordion({
			collapsible: true,
			active: false
		});

		$('.accordion .ui-accordion-header').next().slideUp();

		return false;
		}
	});
});

function MoveBannerPics() {
	var speed = 400;
	$(".banner-btn").mouseenter(function(){
		$(this).find(".b-img").animate({
			left: "-=201px"
		}, speed, function() {
			// Animation complete.
		});
		$(this).find(".qm").animate({
			left: "-=201px"
		}, speed, function() {
			// Animation complete.
		}); 
	});
	$(".banner-btn").mouseleave(function(){
		$(this).find(".b-img").animate({
			left: "+=201px"
		}, speed, function() {
			// Animation complete.
		});
		$(this).find(".qm").animate({
			left: "+=201px"
		}, speed, function() {
			// Animation complete.
		}); 
	});
}

// cleans session from previous search
function openPageFromSearch(link) {
        window.location = link;
		
}


function navPage(currentPage, newPage){
    document.getElementById('page_'+currentPage).style.display = 'none';
    document.getElementById('page_'+newPage).style.display = 'block';
}
