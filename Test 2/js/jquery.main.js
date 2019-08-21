jQuery(function() {
	$('.navbar-toggler').burgerMenu();
	jsonFileAPI();
});

function jsonFileAPI() {
	var jsonData;

	$.getJSON('../assets/json/menu.json', function(data) {
		jsonData = data.links;
		for(var i = 0; i < jsonData.length; i++) {
			$('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="#' + (i + 1) + '">' + jsonData[i].linkTitle + '</a></li>');
		}
		$('.nav-link').on('click', customTabs);
	});

	function customTabs(e) {
		e.preventDefault();
		var id = this.getAttribute("href");
		id = id.slice(1, id.length);
		$('.main-text-box').empty().append('<p>' + jsonData[id-1].mainText + '</p>');
	}
}

/* burger menu */
(function($) {
	$.fn.burgerMenu = function() {
		$(this).click(function() {
			$('body').toggleClass('nav-active');
		});

		return this;
	};
}(jQuery));