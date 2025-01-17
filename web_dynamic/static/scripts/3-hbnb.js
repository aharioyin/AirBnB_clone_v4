$(document).ready(function() {
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

	//Fetch places
	$.ajax({
		url: "http://127.0.0.1:5001/api/v1/places_search",
		type: "POST",
		data: "{}",
		contentType: "application/json",
		success: function (data) {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				const place = data[i];
				$("section.places").append(`<article>
			<div class="title_box">
			<h2>${place.name}</h2>
			<div class="price_by_night">$${place.price_by_night}</div>
			</div>
			<div class="information">
			<div class="max_guest">${place.max_guest} Guest${
						place.max_guest !== 1 ? "s" : ""
					}</div>
			<div class="number_rooms">${place.number_rooms} Bedroom${
						place.number_rooms !== 1 ? "s" : ""
					}</div>
			<div class="number_bathrooms">${place.number_bathrooms} Bathroom${
						place.number_bathrooms !== 1 ? "s" : ""
					}</div>
			</div>
			<div class="description">
			${place.description}
			</div>
				</article>`
				);
			}
		}
	});
});
