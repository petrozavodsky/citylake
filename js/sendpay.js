$(document).ready(function() {
$("#form-pay").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "/php/sendpay.php",
data: str,
success: function(msg) {

if(msg == 'OK') {
	result = noty({ layout: 'center',
    			theme: 'defaultTheme',
                type: 'success',
                timeout: 2000,
    			text: 'Сообщение успешно отправлено',
    			animation: {
        			open: {height: 'toggle'},
        			close: {height: 'toggle'},
        			easing: 'swing',
        			speed: 500 // opening & closing animation speed
    			},
                killer: true,
    		});
} 

$("#send-pay").on( "click", function() {

$.when( effect() ).done(function() {

});
});
}
});
return false;
});
});