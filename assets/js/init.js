$(function () {
	$('.image').imageLoader({
		'target' : $('.display'),
		'width' : '180px',
		callback: function () {
			console.log('done');
		}
	});

	$('button').click(function () {
		$('.display').imageLoader('remove');
	});
});