'use strict';

var f = function () {
	this.x = 5;
	(function () {
		this.x = 3;
	})();
	console.log(this.x);
};

f();

dog