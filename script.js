// Metric Enabled
$("#metric").click(function(){
   $(".weight").css({"display": "none"});
   $(".weight-metric").css({"display": "flex"});
   $(".height").css({"display": "none"});
   $(".height-metric").css({"display": "flex"});
});

//Imperial Enabled
$("#imperial").click(function(){
   $(".weight-metric").css({"display": "none"});
   $(".weight").css({"display": "flex"});
   $(".height-metric").css({"display": "none"});
   $(".height").css({"display": "flex"});
});

//Calculations

var message = " calories is your <br> Total Daily Energy Expenditure.";

$(".btn-success").click(function() {

   var level = parseFloat(document.calculate.activity.options[document.calculate.activity.selectedIndex].value);

   var goal = parseFloat(($('.goal > label.active')).data('value'));

   var age = parseFloat($('#age').val());

   var feet = parseFloat($('#feet').val() * 12);
   var inches = parseFloat($('#inches').val());
   var imperialHeight = feet + inches;

   var metricHeight = imperialHeight * 2.54 || parseFloat($('#height-metric').val());

   var pounds = parseFloat($("#weight").val());
   var kilo = pounds * 0.453592 || parseFloat($('#weight-metric').val());

   var formula = Math.round(level * ((10 * kilo) + (6.25 * metricHeight) - (5 * age))) + goal;

   if (isNaN(formula)) {
      $(".btn-lg").html("Please fill in the fields!");
   } else if ($('#male').hasClass('active')) {
      $(".btn-lg").html((formula + 5) + message);
   } else {
      $(".btn-lg").html((formula - 161) + message);
   }
});
