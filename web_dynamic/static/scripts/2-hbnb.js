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

	// Get status of API
        $.ajax({
                url: "http://0.0.0.0:5001/api/v1/status/",
                type: "GET",
                success: function(data) {
                        if (data.status === "OK") {
                                $("div#api_status").addClass("available");
                        } else {
                                $("#divapi_status").removeClass("available");
                        }

                }
        });

});
