jQuery(document).ready(function ($){
    $("#paypal_ec_button_product input").click(function(){
        var angelleye_action = $(this).data('action');
        $('form.cart').attr( 'action', angelleye_action );
        $(this).attr('disabled', 'disabled');
        $('form.cart').submit();
        return false;
    });
    $("a.paypal_checkout_button").click(function (){
        var angelleye_action = $(this).attr('href');
        $(this).removeAttr('href');
        window.location.href = angelleye_action ;
        return false;
    });
});