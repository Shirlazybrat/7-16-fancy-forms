console.dir($);
$(document).ready(function(){
	//Add alistener for the form submission... when we want the for to be submitted
	$('.sign-up-form').submit(function(event){
		event.preventDefault();
		//console.log("Submitted!");
		// 1. Pasword must be 6 charachers
		var password = $('.password').val();
		var password2 = $('.password2').val();
		var checkbox = true;
		var email = $('input').val();
		var phone = $('.phone').val();
		var phone = $('.phone').val();

		if(password.length < 6){
			$('.password').focus();
			$('.pass-error').html('Your password must be 6 characters');
		}
		// 2. Fields must be non emppty
		$('input').each(function(){
            if($(this).val() == ''){
                console.log("You can't leave a field empty!!!!")
                var currentElemClass = ($(this).attr('class'));
                var errorClass = '.'+currentElemClass + '-error';
                $(errorClass).html("Field must not be empty")
            }
        })

		// 3. Agree to terms checkbox
		if (!$('.submit').is(":checked")){
			// $('input').focus();
			$('.submit-error').html('Please check if you agree to the terms.');
		}
		// 4. valid email address
		if(email == 'input' + '@' + 'input' + '.com'){
			$('.email').focus();
			$('.email-error').html('Please enter a valid email address');
		}
		// 5. make sure phone number is a number
		if(phone == NaN){
			$('.phone').focus();
			$('.phone-error').html('Please enter a valid phone number');
		}
		// 6. paswords must be the same
		if(password !== password2){
			$('.password2').focus();
			$('.password2-error').html('Please make sure the emails are the came');
		}
	});
});