$(document).ready(function(){
	const amenities = {};
	
	$("input[type=checkbox]").on('change', function(){
		let amenityId = $(this).data('id');
		let amenityName = $(this).data('name');

		if (this.checked) {
			amenities[amenityId] = amenityName;
		} else {
			delete amenities[amenityId];
		}
		$('.amenities h4').text(Object.values(amenities).join(', '));
	});
});
