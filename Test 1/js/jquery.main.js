jQuery(function() {
	initTimeCounter();
	alertsVisible();
});

function initTimeCounter() {
	setInterval(function() {
		var currentdate = new Date();
		$('.hours').html(23 - currentdate.getHours());
		$('.minutes').html(59 - currentdate.getMinutes());
		$('.seconds').html(59 - currentdate.getSeconds());
	}, 1000);
}

function alertsVisible() {
	var interval;
	var time = 5000;
	var intervalReset;

	interval = setInterval(getMessage, time);
	intervalReset = setInterval(function() {
		obj.top = 15;
	}, time * $('.alert').length);

	$('.alert .close').click(function() {
		$(this).closest('.alert').removeClass('show');
	});
}

function randomize(a, b) {
	return Math.floor(Math.random() * (b - a) + a);
}

var obj = {
	top: 15
};

function getMessage() {
	var randNum = randomize(0, $('.alert:not(.show)').length);
	var message;

	$('.alert:not(.show)').each(function(i) {
		if(i === randNum) {
			message = $(this).addClass('show');
			message.css('top', obj.top);
			obj.top += parseFloat(message.css('height')) + 10;

			setTimeout(function() {
				message.removeClass('show');
			}, 10000);
		}
	});
};

(function($) {
}(jQuery));