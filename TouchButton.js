var pin = null;
var touch = null;

expots.init = function(pin) {
	pin = pin;
	touch = new (require("jsupm_ttp223").TTP223)(pin);
}

exports.isPressed = function() {
  return touch.isPressed();
}

