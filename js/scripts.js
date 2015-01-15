$(document).ready(function() {
	var currentSection = "";
	init();

	$('a').on('click', function(e) {
		e.preventDefault();
		var previousSection = currentSection;
		currentSection = $(this).attr("href");
		//$(previousSection).removeClass('specta-page-current');
		$(previousSection).addClass('specta-page-previous');
		$(previousSection).on('animationend webkitAnimationEnd', function(e) {
			$(previousSection).addClass('specta-page-hidden');
			$(previousSection).removeClass('specta-page-current');
			alert("Hello");
			console.log(e.originalEvent);
			$(currentSection).addClass('specta-page-current');
		});
	});

	/**
	 * Assign the current section to the currentSection variable.
	 * This variable is used to track the navigation.
	 */
	function init() {
		var href = window.location.href;
		var hrefArray = href.split("#");
		currentSection = "#".concat(hrefArray.length > 1 ? hrefArray[1] : "home");
		console.log(currentSection);
		$(currentSection).addClass('specta-page-hidden');
		$(currentSection).addClass('specta-page-current');
	}
});