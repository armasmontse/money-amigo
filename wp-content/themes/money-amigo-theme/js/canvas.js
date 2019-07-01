/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _simpleFunctions = __webpack_require__(1);

	var _circle = __webpack_require__(2);

	var _arrow = __webpack_require__(3);

	var _revolutionary = __webpack_require__(4);

	var _hola = __webpack_require__(5);

	var _sayyes = __webpack_require__(6);

	var _no = __webpack_require__(7);

	var _hidden = __webpack_require__(8);

	var _twocards = __webpack_require__(9);

	var _youchoose = __webpack_require__(10);

	var _moneyamigox = __webpack_require__(11);

	var _include = __webpack_require__(12);

	var _st = __webpack_require__(13);

	var _one = __webpack_require__(14);

	var _ever = __webpack_require__(15);

	var _debitcard = __webpack_require__(16);

	var _percentage = __webpack_require__(17);

	var _cashback = __webpack_require__(18);

	var _yourreal = __webpack_require__(19);

	var _fifty = __webpack_require__(20);

	var _discounts = __webpack_require__(21);

	var _onehundred = __webpack_require__(22);

	var _mobilesecure = __webpack_require__(23);

	var _muchmore = __webpack_require__(24);

	var _happy = __webpack_require__(25);

	var _logo = __webpack_require__(26);

	var _legal = __webpack_require__(27);

	var _notfound = __webpack_require__(28);

	var _loan = __webpack_require__(29);

	var $ = jQuery;

	var transparents = [_circle.circle, _revolutionary.holamoney, _revolutionary.holaamigo, _revolutionary.thenew, _revolutionary.manageyourmoney, _revolutionary.yourway, _revolutionary.seethemoney, _revolutionary.experience, _hola.hola, _sayyes.sayyes, _no.no, _hidden.hidden, _twocards.twocards, _twocards.twooptions, _youchoose.you, _youchoose.choose, _youchoose.cant, _youchoose.go, _youchoose.wrong, _moneyamigox.moneyamigox, _include.include, _st.st, _one.one, _ever.ever, _ever.metal, _ever.cashback, _debitcard.debit, _debitcard.card, _percentage.percentage, _cashback.cash, _cashback.onevery, _cashback.things, _cashback.youcashback, _cashback.buycashback, _yourreal.yourreal, _yourreal.realmetalcard, _yourreal.replaceyourplastic, _fifty.fifty, _discounts.discounts, _discounts.national, _discounts.manymany, _onehundred.onehundred, _mobilesecure.mobilesecure, _mobilesecure.ampersand, _mobilesecure.issafe, _mobilesecure.ensured, _muchmore.mouchmore, _muchmore.m, _muchmore.re, _muchmore.tocome, _muchmore.waitandsee, _happy.happy, _logo.logo, _logo.yourmoney, _logo.fastfairfriendly, _legal.and, _legal.the, _legal.legal, _legal.yada, _notfound.notfound, _notfound.notfoundnumber, _loan.onehundredmoney, _loan.loan, _loan.apr, _loan.interest];

	var whites = [_arrow.arrow];

	$(window).load(function () {

		$.each(transparents, function (key, object) {
			(0, _simpleFunctions.drawTransparent)(object);
		});

		whites.forEach(_simpleFunctions.draw);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var draw = exports.draw = function draw(drawCallback) {
		var transparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (!drawCallback) {
			return;
		}
		var elements = drawCallback.name !== undefined ? $('.canvas-' + drawCallback.name) : [];
		// console.log(elements);

		$.each(elements, function (key, canvas) {

			if (canvas == undefined) {
				return false;
			}

			if (!canvas.getContext) {
				return false;
			}

			var ctx = canvas.getContext('2d');

			if (transparent) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = 'white';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.globalCompositeOperation = 'destination-out';
			}

			ctx.save();
			drawCallback(ctx, canvas);
			ctx.restore();
		});

		return true;
	};

	var drawTransparent = exports.drawTransparent = function drawTransparent(drawCallback) {
		return draw(drawCallback, true);
	};

	var write = exports.write = function write(ctx, text) {
		var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 156;
		var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 16;
		var font = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "sans";
		var bold = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";

		var initial = fontSize;

		if (font == "comic") {
			font = "Gotham Rounded";
		} else {
			font = "Avenir LT Std";
		}

		ctx.font = bold + " " + fontSize + "px " + font;
		ctx.fillStyle = 'white';

		ctx.fillText(text, 0, fontSize);
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var circle = exports.circle = function circle(ctx, canvas) {

		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;
		var radius = canvas.height / 2;

		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		ctx.fill();
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var arrow = exports.arrow = function arrow(ctx) {
		ctx.beginPath();
		ctx.moveTo(77.43, 40.42);
		ctx.lineTo(8.8, 0.79);
		ctx.translate(5.869998927728548, 5.876451977212421);
		ctx.arc(0, 0, 5.87, -1.048180622377683, -3.142197086810171, 1);
		ctx.translate(-5.869998927728548, -5.876451977212421);
		ctx.lineTo(0, 85.12);
		ctx.translate(5.869996455736821, 85.11354944675512);
		ctx.arc(0, 0, 5.87, 3.1404937516234495, 1.0481801363824426, 1);
		ctx.translate(-5.869996455736821, -85.11354944675512);
		ctx.lineTo(77.43, 50.58);
		ctx.translate(74.48882676470767, 45.5);
		ctx.arc(0, 0, 5.87, 1.045982774288962, -1.0459827742889625, 1);
		ctx.translate(-74.48882676470767, -45.5);
		ctx.fillStyle = "white";
		ctx.fill();
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.experience = exports.seethemoney = exports.yourway = exports.manageyourmoney = exports.thenew = exports.holaamigo = exports.holamoney = undefined;

	var _simpleFunctions = __webpack_require__(1);

	var holamoney = exports.holamoney = function holamoney(ctx) {
		(0, _simpleFunctions.write)(ctx, 'money', 156, 16, "comic");
	};

	var holaamigo = exports.holaamigo = function holaamigo(ctx) {
		(0, _simpleFunctions.write)(ctx, 'amigo', 156, 16, "comic", "bold");
	};

	var thenew = exports.thenew = function thenew(ctx) {
		(0, _simpleFunctions.write)(ctx, '- the new revolutionary', 156, 16, "comic");
	};

	var manageyourmoney = exports.manageyourmoney = function manageyourmoney(ctx) {
		(0, _simpleFunctions.write)(ctx, 'way to manage', 156, 16, "comic");
	};

	var yourway = exports.yourway = function yourway(ctx) {
		(0, _simpleFunctions.write)(ctx, 'your money - your way', 156, 16, "comic");
	};

	var seethemoney = exports.seethemoney = function seethemoney(ctx) {
		(0, _simpleFunctions.write)(ctx, 'see the', 156, 16, "comic");
	};

	var experience = exports.experience = function experience(ctx) {
		(0, _simpleFunctions.write)(ctx, 'experience', 156, 16, "comic");
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var hola = exports.hola = function hola(ctx) {

		// h
		ctx.beginPath();
		ctx.moveTo(22.54, 110.45);
		ctx.translate(40.199440621409565, 110.30944062140958);
		ctx.arc(0, 0, 17.66, 3.1336333748425225, 4.720348259131977, 0);
		ctx.translate(-40.199440621409565, -110.30944062140958);
		ctx.translate(40.52033225012038, 110.55909211209678);
		ctx.arc(0, 0, 17.91, -1.580865299284946, -0.006091166202931264, 0);
		ctx.translate(-40.52033225012038, -110.55909211209678);
		ctx.lineTo(58.43000000000001, 178.07999999999998);
		ctx.bezierCurveTo(68.51, 163.54999999999998, 83.05000000000001, 150.79, 107.37, 150.79);
		ctx.bezierCurveTo(142.67000000000002, 150.79, 163.13, 174.51999999999998, 163.13, 210.7);
		ctx.lineTo(163.13, 294.34);
		ctx.translate(145.65298420194995, 294.66298420195);
		ctx.arc(0, 0, 17.48, -0.018478408653331637, 1.589274735448227, 0);
		ctx.translate(-145.65298420194995, -294.66298420195);
		ctx.translate(144.96984699465258, 294.41365830711993);
		ctx.arc(0, 0, 17.73, 1.550481731305259, 3.1457471103864507, 0);
		ctx.translate(-144.96984699465258, -294.41365830711993);
		ctx.lineTo(127.23999999999998, 221.67);
		ctx.bezierCurveTo(127.23999999999998, 197.35, 115.07999999999998, 183.41, 93.71999999999997, 183.41);
		ctx.bezierCurveTo(72.95999999999997, 183.41, 58.41999999999997, 197.94, 58.41999999999997, 222.26999999999998);
		ctx.lineTo(58.41999999999997, 294.34);
		ctx.translate(40.69015300534736, 294.41365830711993);
		ctx.arc(0, 0, 17.73, -0.004154456796638998, 1.5911109222845528, 0);
		ctx.translate(-40.69015300534736, -294.41365830711993);
		ctx.translate(40.18944062140953, 294.48055937859044);
		ctx.arc(0, 0, 17.66, 1.5628370480476177, 3.1495519323370726, 0);
		ctx.translate(-40.18944062140953, -294.48055937859044);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		// o
		ctx.beginPath();
		ctx.moveTo(197.83, 233.24);
		ctx.lineTo(197.83, 232.65);
		ctx.bezierCurveTo(197.83, 187.86, 233.42000000000002, 150.79000000000002, 281.47, 150.79000000000002);
		ctx.bezierCurveTo(329.52000000000004, 150.79000000000002, 364.82000000000005, 187.27, 364.82000000000005, 232.06);
		ctx.lineTo(364.82000000000005, 232.65);
		ctx.bezierCurveTo(364.82000000000005, 277.14, 329.23, 314.22, 280.88000000000005, 314.22);
		ctx.bezierCurveTo(233.13, 314.21, 197.83, 277.73, 197.83, 233.24);
		ctx.closePath();
		ctx.moveTo(328.93, 233.24);
		ctx.lineTo(328.93, 232.65);
		ctx.bezierCurveTo(328.93, 205.07, 309.06, 182.23000000000002, 280.93, 182.23000000000002);
		ctx.bezierCurveTo(252.16, 182.23000000000002, 233.77, 204.77, 233.77, 232.06);
		ctx.lineTo(233.77, 232.65);
		ctx.bezierCurveTo(233.77, 259.94, 253.64000000000001, 282.78000000000003, 281.52, 282.78000000000003);
		ctx.bezierCurveTo(310.54, 282.77, 328.93, 260.23, 328.93, 233.24);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		// l
		ctx.beginPath();
		ctx.moveTo(403.37, 110.45);
		ctx.translate(421.02944062140955, 110.30944062140958);
		ctx.arc(0, 0, 17.66, 3.1336333748425225, 4.720348259131978, 0);
		ctx.translate(-421.02944062140955, -110.30944062140958);
		ctx.translate(421.3503322501204, 110.55909211209678);
		ctx.arc(0, 0, 17.91, -1.5808652992849446, -0.006091166202931486, 0);
		ctx.translate(-421.3503322501204, -110.55909211209678);
		ctx.lineTo(439.26, 294.34);
		ctx.translate(421.315, 293.91635510152923);
		ctx.arc(0, 0, 17.95, 0.02360357874647354, 3.117989074843319, 0);
		ctx.translate(-421.315, -293.91635510152923);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		// a
		ctx.beginPath();
		ctx.moveTo(475.74, 265.57);
		ctx.lineTo(475.74, 265);
		ctx.bezierCurveTo(475.74, 231.19, 502.14, 214.57999999999998, 540.4, 214.57999999999998);
		ctx.translate(541.6841620445921, 345.4036975010385);
		ctx.arc(0, 0, 130.83, -1.5806119857853307, -1.2533631507922496, 0);
		ctx.translate(-541.6841620445921, -345.4036975010385);
		ctx.lineTo(582.52, 217.24999999999997);
		ctx.bezierCurveTo(582.52, 194.99999999999997, 568.88, 183.14, 543.66, 183.14);
		ctx.translate(542.4464328198935, 276.13208167741686);
		ctx.arc(0, 0, 93, -1.5577468469708944, -1.9391383623883014, 1);
		ctx.translate(-542.4464328198935, -276.13208167741686);
		ctx.translate(503.030850445571, 170.11207473373065);
		ctx.arc(0, 0, 20.15, 1.2721250187852373, 1.5564459804485118, 0);
		ctx.translate(-503.030850445571, -170.11207473373065);
		ctx.translate(503.13979158894, 175.3210868893154);
		ctx.arc(0, 0, 14.94, 1.5587338916370312, 3.136310626974719, 0);
		ctx.translate(-503.13979158894, -175.3210868893154);
		ctx.translate(503.8673146301327, 175.69009012466995);
		ctx.arc(0, 0, 15.67, -3.123079143906776, -1.954578068620099, 0);
		ctx.translate(-503.8673146301327, -175.69009012466995);
		ctx.translate(546.7636812990875, 286.2299043981445);
		ctx.arc(0, 0, 134.24, -1.9425581426855232, -1.5585320242549847, 0);
		ctx.translate(-546.7636812990875, -286.2299043981445);
		ctx.bezierCurveTo(571.8399999999999, 152, 589.3399999999999, 158.23, 600.3199999999999, 169.5);
		ctx.bezierCurveTo(611.89, 180.77, 617.2299999999999, 197.38, 617.2299999999999, 217.85);
		ctx.lineTo(617.2299999999999, 294.97);
		ctx.translate(600.1303204493197, 295.0746865036685);
		ctx.arc(0, 0, 17.1, -0.006122056000310042, 1.5942090182886475, 0);
		ctx.translate(-600.1303204493197, -295.0746865036685);
		ctx.bezierCurveTo(589.3499999999999, 312.17, 582.2299999999999, 305.05, 582.2299999999999, 297.04);
		ctx.lineTo(582.2299999999999, 291.11);
		ctx.bezierCurveTo(571.55, 303.86, 555.2299999999999, 313.95, 531.2299999999999, 313.95);
		ctx.bezierCurveTo(501.84, 313.92, 475.74, 297, 475.74, 265.57);
		ctx.closePath();
		ctx.moveTo(583.11, 254.3);
		ctx.lineTo(583.11, 243.62);
		ctx.translate(548.4453895052084, 336.8756962294764);
		ctx.arc(0, 0, 99.49, -1.214908108726445, -1.5800977927617121, 1);
		ctx.translate(-548.4453895052084, -336.8756962294764);
		ctx.bezierCurveTo(524.38, 237.39000000000001, 510.74, 247.18, 510.74, 263.49);
		ctx.lineTo(510.74, 264.08);
		ctx.bezierCurveTo(510.74, 279.21, 524.09, 287.81, 541.29, 287.81);
		ctx.bezierCurveTo(565, 287.81, 583.11, 274.17, 583.11, 254.3);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		// !
		ctx.beginPath();
		ctx.moveTo(661.41, 114.89);
		ctx.bezierCurveTo(660.8199999999999, 107.77, 664.9699999999999, 102.14, 671.79, 102.14);
		ctx.lineTo(693.15, 102.14);
		ctx.bezierCurveTo(699.97, 102.14, 704.42, 107.78, 703.8299999999999, 114.89);
		ctx.lineTo(693.4499999999999, 235.89);
		ctx.bezierCurveTo(692.8599999999999, 242.42, 688.4499999999999, 246.57, 682.4499999999999, 246.57);
		ctx.bezierCurveTo(676.4499999999999, 246.57, 672.3699999999999, 242.42, 671.77, 235.89);
		ctx.closePath();
		ctx.moveTo(682.4699999999999, 268.23);
		ctx.bezierCurveTo(694.6299999999999, 268.23, 703.5299999999999, 277.13, 703.5299999999999, 288.70000000000005);
		ctx.lineTo(703.5299999999999, 291.70000000000005);
		ctx.bezierCurveTo(703.5299999999999, 303.27000000000004, 694.6299999999999, 312.1700000000001, 682.4699999999999, 312.1700000000001);
		ctx.bezierCurveTo(670.6099999999999, 312.1700000000001, 661.41, 303.2700000000001, 661.41, 291.70000000000005);
		ctx.lineTo(661.41, 288.70000000000005);
		ctx.bezierCurveTo(661.41, 277.14, 670.61, 268.24, 682.47, 268.24);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		// :)
		ctx.beginPath();
		ctx.moveTo(282.31, 269.5);
		ctx.translate(282.27980325198337, 232.88001245007845);
		ctx.arc(0, 0, 36.62, 1.5699717295409727, 3.0051790460837817, 0);
		ctx.translate(-282.27980325198337, -232.88001245007845);
		ctx.translate(252.23, 237.04500000000002);
		ctx.arc(0, 0, 6.283082444151108, 3.0115127191210274, 6.1531053727108205, 0);
		ctx.translate(-252.23, -237.04500000000002);
		ctx.translate(282.2974656605231, 232.82094868278838);
		ctx.arc(0, 0, 24.08, 2.999543526627606, 0.1491844587033193, 1);
		ctx.translate(-282.2974656605231, -232.82094868278838);
		ctx.translate(312.2924066844458, 237.502836156516);
		ctx.arc(0, 0, 6.28, -2.96506642406253, 0.1016340917653773, 0);
		ctx.translate(-312.2924066844458, -237.502836156516);
		ctx.translate(282.5422211186599, 233.02047701341752);
		ctx.arc(0, 0, 36.36, 0.14127039002585842, 0.8547202673371325, 0);
		ctx.translate(-282.5422211186599, -233.02047701341752);
		ctx.translate(282.32016174983784, 232.71000553206568);
		ctx.arc(0, 0, 36.74, 0.8557078528612779, 1.5713450951903738, 0);
		ctx.translate(-282.32016174983784, -232.71000553206568);
		ctx.fill();
		ctx.stroke();
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var sayyes = exports.sayyes = function sayyes(ctx) {
		ctx.beginPath();
		ctx.moveTo(2.59, 56);
		ctx.translate(5.40993295410979, 51.38306615443478);
		ctx.arc(0, 0, 5.41, 2.119104946329979, 3.136614103344121, 0);
		ctx.translate(-5.40993295410979, -51.38306615443478);
		ctx.translate(5.259034327206632, 51.30921336764094);
		ctx.arc(0, 0, 5.26, 3.122430524207621, 4.729683696677414, 0);
		ctx.translate(-5.259034327206632, -51.30921336764094);
		ctx.translate(5.359983736068784, 51.2499904158579);
		ctx.arc(0, 0, 5.2, -1.57271627721845, -1.0382885981473735, 0);
		ctx.translate(-5.359983736068784, -51.2499904158579);
		ctx.bezierCurveTo(12.58, 49.62, 17.14, 51, 21, 51);
		ctx.bezierCurveTo(24.86, 51, 26.71, 49.57, 26.71, 47.43);
		ctx.lineTo(26.71, 47.3);
		ctx.bezierCurveTo(26.71, 44.349999999999994, 22.07, 43.37, 16.8, 41.769999999999996);
		ctx.bezierCurveTo(10.09, 39.8, 2.5, 36.68, 2.5, 27.4);
		ctx.lineTo(2.5, 27.22);
		ctx.bezierCurveTo(2.5, 17.49, 10.35, 12, 20, 12);
		ctx.translate(19.54947324598313, 45.616981209560066);
		ctx.arc(0, 0, 33.62, -1.5573953678718404, -1.0996453517082432, 0);
		ctx.translate(-19.54947324598313, -45.616981209560066);
		ctx.translate(32.471278040955006, 20.671115604162484);
		ctx.arc(0, 0, 5.53, -1.134136173431807, 0.021499738727097206, 0);
		ctx.translate(-32.471278040955006, -20.671115604162484);
		ctx.translate(32.67004190762051, 20.811136070552443);
		ctx.arc(0, 0, 5.33, -0.0039655020539104795, 1.5914435550564994, 0);
		ctx.translate(-32.67004190762051, -20.811136070552443);
		ctx.translate(32.4729319809148, 21.140758141472592);
		ctx.arc(0, 0, 5, 1.553381842792789, 2.074401663160692, 0);
		ctx.translate(-32.4729319809148, -21.140758141472592);
		ctx.bezierCurveTo(26.220000000000002, 23.65, 22.560000000000002, 22.52, 19.71, 22.52);
		ctx.bezierCurveTo(16.41, 22.52, 14.71, 23.95, 14.71, 25.82);
		ctx.lineTo(14.71, 26);
		ctx.bezierCurveTo(14.71, 28.68, 19.26, 29.93, 24.44, 31.71);
		ctx.bezierCurveTo(31.130000000000003, 33.94, 38.900000000000006, 37.15, 38.900000000000006, 45.9);
		ctx.lineTo(38.900000000000006, 46.08);
		ctx.bezierCurveTo(38.900000000000006, 56.699999999999996, 30.960000000000004, 61.519999999999996, 20.600000000000005, 61.519999999999996);
		ctx.translate(20.96704037697419, 28.18202043672006);
		ctx.arc(0, 0, 33.34, 1.581805558693205, 2.1545992519019004, 0);
		ctx.translate(-20.96704037697419, -28.18202043672006);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(45.79, 46.86);
		ctx.lineTo(45.79, 46.68);
		ctx.bezierCurveTo(45.79, 36.24, 53.73, 31.42, 65.07, 31.42);
		ctx.translate(65.26924873043183, 65.41941617062594);
		ctx.arc(0, 0, 34, -1.5766566171155734, -1.2260443347673569, 0);
		ctx.translate(-65.26924873043183, -65.41941617062594);
		ctx.lineTo(76.75999999999999, 32.620000000000005);
		ctx.bezierCurveTo(76.75999999999999, 27.000000000000004, 73.27999999999999, 23.870000000000005, 66.49999999999999, 23.870000000000005);
		ctx.translate(66.16652659625849, 54.96821209473299);
		ctx.arc(0, 0, 31.1, -1.5600735038293059, -1.8656120786289252, 1);
		ctx.translate(-66.16652659625849, -54.96821209473299);
		ctx.translate(55.12920001003458, 19.830000055747735);
		ctx.arc(0, 0, 5.74, 1.214749821407066, 1.5706569557203327, 0);
		ctx.translate(-55.12920001003458, -19.830000055747735);
		ctx.translate(55.059769480848736, 20.05044678672452);
		ctx.arc(0, 0, 5.52, 1.5580730633848963, 3.150731691446235, 0);
		ctx.translate(-55.059769480848736, -20.05044678672452);
		ctx.translate(55.159999274163525, 19.997143708432354);
		ctx.arc(0, 0, 5.62, 3.1410844166343392, 4.356147337335482, 0);
		ctx.translate(-55.159999274163525, -19.997143708432354);
		ctx.translate(67.44494531640223, 53.85762621131917);
		ctx.arc(0, 0, 41.64, -1.9199446381096432, -1.5464169982531941, 0);
		ctx.translate(-67.44494531640223, -53.85762621131917);
		ctx.bezierCurveTo(75.87, 12.23, 81.22000000000001, 14.23, 84.61000000000001, 17.59);
		ctx.bezierCurveTo(88.18, 21.16, 89.79000000000002, 26.43, 89.79000000000002, 32.85);
		ctx.lineTo(89.79000000000002, 54.62);
		ctx.translate(83.28000002972894, 54.62062214995559);
		ctx.arc(0, 0, 6.51, -0.00009556834961967806, 1.5846216565783782, 0);
		ctx.translate(-83.28000002972894, -54.62062214995559);
		ctx.bezierCurveTo(79.26000000000002, 61.129999999999995, 76.67000000000003, 58.35999999999999, 76.67000000000003, 55.51);
		ctx.lineTo(76.67000000000003, 55.419999999999995);
		ctx.bezierCurveTo(73.37000000000003, 59.08, 68.82000000000004, 61.489999999999995, 62.21000000000003, 61.489999999999995);
		ctx.bezierCurveTo(53.2, 61.49, 45.79, 56.32, 45.79, 46.86);
		ctx.closePath();
		ctx.moveTo(76.94, 43.74);
		ctx.lineTo(76.94, 41.32);
		ctx.translate(68.45449743011916, 60.52927500288716);
		ctx.arc(0, 0, 21, -1.1548327248303147, -1.579105823854146, 1);
		ctx.translate(-68.45449743011916, -60.52927500288716);
		ctx.bezierCurveTo(62.480000000000004, 39.53, 58.910000000000004, 41.85, 58.910000000000004, 46.13);
		ctx.lineTo(58.910000000000004, 46.31);
		ctx.bezierCurveTo(58.910000000000004, 49.97, 61.910000000000004, 52.11, 66.32000000000001, 52.11);
		ctx.bezierCurveTo(72.65, 52.12, 76.94, 48.64, 76.94, 43.73);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(103.09, 73.9);
		ctx.bezierCurveTo(101.09, 73.19000000000001, 98.81, 71.58000000000001, 98.81, 68.28);
		ctx.translate(104.21866190165596, 68.15968194825668);
		ctx.arc(0, 0, 5.41, 3.119350884187728, 4.701545532833318, 0);
		ctx.translate(-104.21866190165596, -68.15968194825668);
		ctx.translate(104.27264909752117, 69.13900697924393);
		ctx.arc(0, 0, 6.39, -1.5884262067939388, -1.233058232343685, 0);
		ctx.translate(-104.27264909752117, -69.13900697924393);
		ctx.translate(109.44149732484023, 54.79206972399426);
		ctx.arc(0, 0, 8.86, 1.9224095629429545, 1.5924117035097698, 1);
		ctx.translate(-109.44149732484023, -54.79206972399426);
		ctx.bezierCurveTo(111.66, 63.65, 112.82, 63.199999999999996, 114.07, 60.79);
		ctx.lineTo(114.52, 59.72);
		ctx.lineTo(98.18, 21.87);
		ctx.translate(107.34144103959395, 18.144399635220637);
		ctx.arc(0, 0, 9.89, 2.7553572952724292, 3.0803207162753394, 0);
		ctx.translate(-107.34144103959395, -18.144399635220637);
		ctx.translate(103.89929392052936, 18.654712627046212);
		ctx.arc(0, 0, 6.43, 3.126772924048859, 4.752945366434897, 0);
		ctx.translate(-103.89929392052936, -18.654712627046212);
		ctx.bezierCurveTo(107.55000000000001, 12.23, 109.52000000000001, 14.100000000000001, 110.68, 17.32);
		ctx.lineTo(121, 45.16);
		ctx.lineTo(131, 17.4);
		ctx.bezierCurveTo(132.07, 14.54, 134, 12.219999999999999, 137.52, 12.219999999999999);
		ctx.translate(137.69026383855774, 18.527702452183327);
		ctx.arc(0, 0, 6.31, -1.597782777922222, -0.009144731605362333, 0);
		ctx.translate(-137.69026383855774, -18.527702452183327);
		ctx.translate(133.76475500638256, 18.157974487214066);
		ctx.arc(0, 0, 10.24, 0.03047595886143384, 0.35111799185447584, 0);
		ctx.translate(-133.76475500638256, -18.157974487214066);
		ctx.lineTo(126.65, 61.76);
		ctx.bezierCurveTo(122.65, 71.49, 118.65, 75.15, 110.5, 75.15);
		ctx.translate(110.13029854002228, 54.75335025474796);
		ctx.arc(0, 0, 20.4, 1.552672714060949, 1.9231551584446942, 0);
		ctx.translate(-110.13029854002228, -54.75335025474796);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(182.17, 73.9);
		ctx.bezierCurveTo(180.17, 73.19000000000001, 177.89, 71.58000000000001, 177.89, 68.28);
		ctx.translate(183.29866190165598, 68.15968194825668);
		ctx.arc(0, 0, 5.41, 3.119350884187728, 4.701545532833318, 0);
		ctx.translate(-183.29866190165598, -68.15968194825668);
		ctx.translate(183.35264909752112, 69.13900697924393);
		ctx.arc(0, 0, 6.39, -1.5884262067939368, -1.233058232343685, 0);
		ctx.translate(-183.35264909752112, -69.13900697924393);
		ctx.translate(188.5214973248402, 54.79206972399426);
		ctx.arc(0, 0, 8.86, 1.9224095629429545, 1.5924117035097682, 1);
		ctx.translate(-188.5214973248402, -54.79206972399426);
		ctx.bezierCurveTo(190.73999999999998, 63.65, 191.89999999999998, 63.199999999999996, 193.14999999999998, 60.79);
		ctx.lineTo(193.59999999999997, 59.72);
		ctx.lineTo(177.26, 21.87);
		ctx.translate(186.4214410395939, 18.144399635220594);
		ctx.arc(0, 0, 9.89, 2.7553572952724252, 3.0803207162753354, 0);
		ctx.translate(-186.4214410395939, -18.144399635220594);
		ctx.translate(182.97929392052933, 18.654712627046212);
		ctx.arc(0, 0, 6.43, 3.126772924048859, 4.752945366434897, 0);
		ctx.translate(-182.97929392052933, -18.654712627046212);
		ctx.bezierCurveTo(186.62999999999997, 12.23, 188.58999999999997, 14.100000000000001, 189.76, 17.32);
		ctx.lineTo(200.10999999999999, 45.16);
		ctx.lineTo(210.10999999999999, 17.399999999999995);
		ctx.bezierCurveTo(211.17999999999998, 14.539999999999996, 213.10999999999999, 12.219999999999995, 216.63, 12.219999999999995);
		ctx.translate(216.69028253624683, 18.529712039057216);
		ctx.arc(0, 0, 6.31, -1.5803499643978227, -0.009463221916684361, 0);
		ctx.translate(-216.69028253624683, -18.529712039057216);
		ctx.translate(212.76475500638256, 18.157974487214066);
		ctx.arc(0, 0, 10.24, 0.03047595886143384, 0.35111799185447584, 0);
		ctx.translate(-212.76475500638256, -18.157974487214066);
		ctx.lineTo(205.73, 61.76);
		ctx.bezierCurveTo(201.73, 71.49, 197.73, 75.15, 189.57999999999998, 75.15);
		ctx.translate(189.21029854002228, 54.75335025474796);
		ctx.arc(0, 0, 20.4, 1.552672714060949, 1.9231551584446942, 0);
		ctx.translate(-189.21029854002228, -54.75335025474796);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(253, 61.67);
		ctx.bezierCurveTo(238.63, 61.67, 228, 51.58, 228, 36.95);
		ctx.lineTo(228, 36.77);
		ctx.bezierCurveTo(228, 23.110000000000003, 237.73, 11.870000000000005, 251.65, 11.870000000000005);
		ctx.bezierCurveTo(267.65, 11.870000000000005, 274.65, 24.990000000000002, 274.65, 34.870000000000005);
		ctx.translate(268.4689119620802, 35.2020401594461);
		ctx.arc(0, 0, 6.19, -0.05366714075303041, 1.5964715162871963, 0);
		ctx.translate(-268.4689119620802, -35.2020401594461);
		ctx.lineTo(241.52, 41.39);
		ctx.bezierCurveTo(242.86, 47.55, 247.14000000000001, 50.76, 253.21, 50.76);
		ctx.translate(253.35006854980873, 35.10062642372453);
		ctx.arc(0, 0, 15.66, 1.5797407978989821, 0.9189732180881349, 1);
		ctx.translate(-253.35006854980873, -35.10062642372453);
		ctx.translate(265.96611320784064, 51.53665755689164);
		ctx.arc(0, 0, 5.06, -2.234238684479403, -1.5344470595230097, 0);
		ctx.translate(-265.96611320784064, -51.53665755689164);
		ctx.translate(266.23280664056574, 51.66933936645872);
		ctx.arc(0, 0, 5.19, -1.5867520405178355, 0.03288851703263451, 0);
		ctx.translate(-266.23280664056574, -51.66933936645872);
		ctx.translate(266.10007733096694, 51.868684412280295);
		ctx.arc(0, 0, 5.32, -0.005391832944662937, 0.8427681358213923, 0);
		ctx.translate(-266.10007733096694, -51.868684412280295);
		ctx.translate(253.6624690640549, 36.89885681404327);
		ctx.arc(0, 0, 24.78, 0.870067099468002, 1.597533534277845, 0);
		ctx.translate(-253.6624690640549, -36.89885681404327);
		ctx.closePath();
		ctx.moveTo(261.75, 32.93000000000001);
		ctx.bezierCurveTo(260.95, 26.860000000000007, 257.38, 22.760000000000005, 251.67, 22.760000000000005);
		ctx.bezierCurveTo(245.95999999999998, 22.760000000000005, 242.39, 26.760000000000005, 241.32, 32.93000000000001);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(283.83, 56);
		ctx.translate(286.6499507807468, 51.38307704264351);
		ctx.arc(0, 0, 5.41, 2.1191088074764988, 3.145858293631831, 0);
		ctx.translate(-286.6499507807468, -51.38307704264351);
		ctx.translate(286.49903432720663, 51.259213367640946);
		ctx.arc(0, 0, 5.26, 3.122430524207621, 4.7296836966774185, 0);
		ctx.translate(-286.49903432720663, -51.259213367640946);
		ctx.translate(286.6465179392933, 51.19969284886503);
		ctx.arc(0, 0, 5.2, -1.5816653752778072, -1.0419752800533528, 0);
		ctx.translate(-286.6465179392933, -51.19969284886503);
		ctx.bezierCurveTo(293.82000000000005, 49.57, 298.37000000000006, 50.99, 302.21000000000004, 50.99);
		ctx.bezierCurveTo(306.05, 50.99, 307.92, 49.56, 307.92, 47.42);
		ctx.lineTo(307.92, 47.3);
		ctx.bezierCurveTo(307.92, 44.349999999999994, 303.28000000000003, 43.37, 298.01, 41.769999999999996);
		ctx.bezierCurveTo(291.32, 39.769999999999996, 283.73, 36.67999999999999, 283.73, 27.4);
		ctx.lineTo(283.73, 27.22);
		ctx.bezierCurveTo(283.73, 17.49, 291.58000000000004, 12.049999999999999, 301.22, 12.049999999999999);
		ctx.translate(300.7386341829988, 45.66655376373703);
		ctx.arc(0, 0, 33.62, -1.5564779964787154, -1.0996173425785984, 0);
		ctx.translate(-300.7386341829988, -45.66655376373703);
		ctx.translate(313.68044286071495, 20.730015406110994);
		ctx.arc(0, 0, 5.53, -1.1379572373621372, 0.012655779773636633, 0);
		ctx.translate(-313.68044286071495, -20.730015406110994);
		ctx.translate(313.8800419076205, 20.821136070552445);
		ctx.arc(0, 0, 5.33, -0.0039655020539104795, 1.5914435550564987, 0);
		ctx.translate(-313.8800419076205, -20.821136070552445);
		ctx.translate(313.68293198091476, 21.15075814147259);
		ctx.arc(0, 0, 5, 1.553381842792789, 2.074401663160692, 0);
		ctx.translate(-313.68293198091476, -21.15075814147259);
		ctx.bezierCurveTo(307.43, 23.659999999999997, 303.77, 22.529999999999998, 300.91999999999996, 22.529999999999998);
		ctx.bezierCurveTo(297.61999999999995, 22.529999999999998, 295.91999999999996, 23.959999999999997, 295.91999999999996, 25.83);
		ctx.lineTo(295.91999999999996, 26);
		ctx.bezierCurveTo(295.91999999999996, 28.68, 300.46999999999997, 29.93, 305.65, 31.71);
		ctx.bezierCurveTo(312.34, 33.94, 320.10999999999996, 37.15, 320.10999999999996, 45.9);
		ctx.lineTo(320.10999999999996, 46.08);
		ctx.bezierCurveTo(320.10999999999996, 56.699999999999996, 312.16999999999996, 61.519999999999996, 301.80999999999995, 61.519999999999996);
		ctx.translate(302.20757033393073, 28.182370542739868);
		ctx.arc(0, 0, 33.34, 1.5827213345000253, 2.154618302900566, 0);
		ctx.translate(-302.20757033393073, -28.182370542739868);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(358.89, 47);
		ctx.lineTo(358.89, 24.36);
		ctx.lineTo(358.44, 24.36);
		ctx.translate(358.44, 18.56);
		ctx.arc(0, 0, 5.8, 1.5707963267948966, 4.71238898038469, 0);
		ctx.translate(-358.44, -18.56);
		ctx.lineTo(358.89, 12.76);
		ctx.lineTo(358.89, 6.76);
		ctx.translate(365.67499999999995, 6.76);
		ctx.arc(0, 0, 6.784999999999997, 3.141592653589793, 6.283185307179586, 0);
		ctx.translate(-365.67499999999995, -6.76);
		ctx.lineTo(372.46, 12.76);
		ctx.lineTo(378.46, 12.76);
		ctx.translate(378.46, 18.56);
		ctx.arc(0, 0, 5.8, -1.5707963267948966, 1.5707963267948966, 0);
		ctx.translate(-378.46, -18.56);
		ctx.lineTo(372.46, 24.36);
		ctx.lineTo(372.46, 44.8);
		ctx.bezierCurveTo(372.46, 47.919999999999995, 373.79999999999995, 49.44, 376.83, 49.44);
		ctx.bezierCurveTo(377.28, 49.44, 378.16999999999996, 49.349999999999994, 378.44, 49.349999999999994);
		ctx.translate(378.400008586074, 55.00985871615292);
		ctx.arc(0, 0, 5.66, -1.5637306471691022, -0.0017418235226251966, 0);
		ctx.translate(-378.400008586074, -55.00985871615292);
		ctx.translate(378.54013965932637, 54.96073399105223);
		ctx.arc(0, 0, 5.52, 0.007113467409825802, 1.19228248601665, 0);
		ctx.translate(-378.54013965932637, -54.96073399105223);
		ctx.translate(373.3633624300551, 41.437382430766995);
		ctx.arc(0, 0, 20, 1.20163661738318, 1.5979677915708876, 0);
		ctx.translate(-373.3633624300551, -41.437382430766995);
		ctx.bezierCurveTo(364.51, 61.4, 358.89, 58.1, 358.89, 47);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(390, 36.95);
		ctx.lineTo(390, 36.77);
		ctx.bezierCurveTo(390, 23.03, 401.07, 11.870000000000005, 416, 11.870000000000005);
		ctx.bezierCurveTo(430.93, 11.870000000000005, 441.79, 22.870000000000005, 441.79, 36.59);
		ctx.lineTo(441.79, 36.77);
		ctx.bezierCurveTo(441.79, 50.510000000000005, 430.72, 61.67, 415.79, 61.67);
		ctx.bezierCurveTo(400.86, 61.67, 390, 50.69, 390, 36.95);
		ctx.closePath();
		ctx.moveTo(428.38, 36.95);
		ctx.lineTo(428.38, 36.77);
		ctx.bezierCurveTo(428.38, 29.720000000000002, 423.29, 23.560000000000002, 415.8, 23.560000000000002);
		ctx.bezierCurveTo(408.04, 23.560000000000002, 403.39, 29.560000000000002, 403.39, 36.56);
		ctx.lineTo(403.39, 36.74);
		ctx.bezierCurveTo(403.43, 43.82, 408.52, 50, 416, 50);
		ctx.bezierCurveTo(423.78, 50, 428.42, 44, 428.42, 36.95);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(478.4, 19);
		ctx.translate(485.2, 18.99999985975378);
		ctx.arc(0, 0, 6.800000000000012, 3.141592638688632, 6.283185328778666, 0);
		ctx.translate(-485.2, -18.99999985975378);
		ctx.lineTo(492, 19.54);
		ctx.bezierCurveTo(495.12, 15.54, 499.14, 11.87, 506, 11.87);
		ctx.bezierCurveTo(516.26, 11.87, 522.24, 18.65, 522.24, 29.630000000000003);
		ctx.lineTo(522.24, 54.35);
		ctx.translate(515.455, 54.35);
		ctx.arc(0, 0, 6.784999999999997, 0, 3.141592653589793, 0);
		ctx.translate(-515.455, -54.35);
		ctx.lineTo(508.67, 33.91);
		ctx.bezierCurveTo(508.67, 27.479999999999997, 505.67, 24.179999999999996, 500.46000000000004, 24.179999999999996);
		ctx.bezierCurveTo(495.25000000000006, 24.179999999999996, 492, 27.49, 492, 33.91);
		ctx.lineTo(492, 54.35);
		ctx.translate(485.21500000000003, 54.35);
		ctx.arc(0, 0, 6.784999999999997, 0, 3.141592653589793, 0);
		ctx.translate(-485.21500000000003, -54.35);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(531.69, 36.95);
		ctx.lineTo(531.69, 36.77);
		ctx.bezierCurveTo(531.69, 23.03, 542.7600000000001, 11.870000000000005, 557.69, 11.870000000000005);
		ctx.bezierCurveTo(572.62, 11.870000000000005, 583.48, 22.870000000000005, 583.48, 36.59);
		ctx.lineTo(583.48, 36.77);
		ctx.bezierCurveTo(583.48, 50.510000000000005, 572.41, 61.67, 557.48, 61.67);
		ctx.bezierCurveTo(542.5500000000001, 61.67, 531.69, 50.69, 531.69, 36.95);
		ctx.closePath();
		ctx.moveTo(570.07, 36.95);
		ctx.lineTo(570.07, 36.77);
		ctx.bezierCurveTo(570.07, 29.720000000000002, 564.98, 23.560000000000002, 557.49, 23.560000000000002);
		ctx.bezierCurveTo(549.73, 23.560000000000002, 545.08, 29.560000000000002, 545.08, 36.56);
		ctx.lineTo(545.08, 36.74);
		ctx.bezierCurveTo(545.08, 43.79, 550.1700000000001, 49.95, 557.6600000000001, 49.95);
		ctx.bezierCurveTo(565.42, 50, 570.06, 44, 570.06, 36.95);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var no = exports.no = function no(ctx, canvas) {

		ctx.beginPath();
		ctx.moveTo(58.51, 76.61);
		ctx.bezierCurveTo(58.51, 60.15, 71.1, 47.08, 87.50999999999999, 47.08);
		ctx.translate(87.70061922413167, 76.41938077586832);
		ctx.arc(0, 0, 29.34, -1.577293278572561, 0.006496951777664739, 0);
		ctx.translate(-87.70061922413167, -76.41938077586832);
		ctx.lineTo(117.03999999999999, 89.19);
		ctx.bezierCurveTo(133.54, 65.47, 157.27, 44.66, 197, 44.66);
		ctx.bezierCurveTo(254.61, 44.66, 288, 83.38999999999999, 288, 142.45);
		ctx.lineTo(288, 279);
		ctx.translate(259.4739367604449, 279.4739367604449);
		ctx.arc(0, 0, 28.53, -0.016612637947332018, 1.5874089647422296, 0);
		ctx.translate(-259.4739367604449, -279.4739367604449);
		ctx.bezierCurveTo(242.54, 308, 229.47, 295.41, 229.47, 279);
		ctx.lineTo(229.47, 160.35);
		ctx.bezierCurveTo(229.47, 120.64999999999999, 209.62, 97.89999999999999, 174.76999999999998, 97.89999999999999);
		ctx.bezierCurveTo(140.88, 97.89999999999999, 117.15999999999998, 121.61999999999999, 117.15999999999998, 161.32);
		ctx.lineTo(117.15999999999998, 279);
		ctx.bezierCurveTo(117.15999999999998, 295.46, 104.08999999999997, 308, 87.62999999999998, 308);
		ctx.translate(87.44943434636996, 279.18056565363);
		ctx.arc(0, 0, 28.82, 1.5645309959493974, 3.1478579844352925, 0);
		ctx.translate(-87.44943434636996, -279.18056565363);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(320.6, 179.23);
		ctx.lineTo(320.6, 178.23);
		ctx.bezierCurveTo(320.6, 105.13, 378.69000000000005, 44.619999999999976, 457.11, 44.619999999999976);
		ctx.bezierCurveTo(535.53, 44.619999999999976, 593.11, 104.15999999999997, 593.11, 177.25999999999996);
		ctx.lineTo(593.11, 178.25999999999996);
		ctx.bezierCurveTo(593.11, 250.86999999999995, 535.02, 311.38, 456.11, 311.38);
		ctx.bezierCurveTo(378.21, 311.39, 320.6, 251.85, 320.6, 179.23);
		ctx.closePath();
		ctx.moveTo(534.6, 179.23);
		ctx.lineTo(534.6, 178.23);
		ctx.bezierCurveTo(534.6, 133.23, 502.17, 95.93999999999998, 456.18, 95.93999999999998);
		ctx.bezierCurveTo(409.18, 95.93999999999998, 379.18, 132.73, 379.18, 177.26999999999998);
		ctx.lineTo(379.18, 178.26999999999998);
		ctx.bezierCurveTo(379.18, 222.80999999999997, 411.61, 260.08, 457.12, 260.08);
		ctx.bezierCurveTo(504.56, 260.08, 534.57, 223.28, 534.57, 179.23);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var hidden = exports.hidden = function hidden(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['hidden fees', 'minimum deposit', 'minimum balance', 'attitude', 'limits'];

		ctx.font = fontSize + "px Avenir LT Std";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var twocards = exports.twocards = function twocards(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['two cards.'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var twooptions = exports.twooptions = function twooptions(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['two options.'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.wrong = exports.go = exports.cant = exports.choose = exports.you = undefined;

	var _simpleFunctions = __webpack_require__(1);

	var $ = jQuery;

	var you = exports.you = function you(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'you');
	};

	var choose = exports.choose = function choose(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'choose.');
	};

	var cant = exports.cant = function cant(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'can´t');
	};

	var go = exports.go = function go(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'go');
	};

	var wrong = exports.wrong = function wrong(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'wrong');
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var moneyamigox = exports.moneyamigox = function moneyamigox(ctx, canvas) {

		// i
		ctx.beginPath();
		ctx.moveTo(293.32, 3.24);
		ctx.translate(290.0700153846517, 3.2499999999635865);
		ctx.arc(0, 0, 3.25, -0.0030769279208209314, 4.712384246645733, 0);
		ctx.translate(-290.0700153846517, -3.2499999999635865);
		ctx.translate(290.09001567251323, 3.229937982818531);
		ctx.arc(0, 0, 3.23, -1.576993169091165, 0.0031151806364431156, 0);
		ctx.translate(-290.09001567251323, -3.229937982818531);
		ctx.fill();
		ctx.stroke();

		// o
		ctx.beginPath();
		ctx.moveTo(71.55, 10.08);
		ctx.translate(71.55000302846788, 26.58999999999972);
		ctx.arc(0, 0, 16.51, -1.5707965102272332, -6.283791000735683, 1);
		ctx.translate(-71.55000302846788, -26.58999999999972);
		ctx.translate(71.5400121028869, 26.59999698068711);
		ctx.arc(0, 0, 16.52, -0.0012104712814190717, -1.5701917325017336, 1);
		ctx.translate(-71.5400121028869, -26.59999698068711);
		ctx.moveTo(71.55, 38.18);
		ctx.translate(71.60006841763787, 26.550107775497);
		ctx.arc(0, 0, 11.63, 1.5751014490907005, 6.286615427792651, 0);
		ctx.translate(-71.60006841763787, -26.550107775497);
		ctx.translate(71.58015430653765, 26.530039025052602);
		ctx.arc(0, 0, 11.65, 0.005146887526220683, 1.5733846821775523, 0);
		ctx.translate(-71.58015430653765, -26.530039025052602);
		ctx.fill();
		ctx.stroke();

		// o
		ctx.beginPath();
		ctx.moveTo(354.5, 10.08);
		ctx.translate(354.4900000000003, 26.58999697153213);
		ctx.arc(0, 0, 16.51, -1.5701906332387994, -6.283185123747249, 1);
		ctx.translate(-354.4900000000003, -26.58999697153213);
		ctx.translate(354.4800121028869, 26.609996980687114);
		ctx.arc(0, 0, 16.52, -0.0012104712814190717, -1.570191732501733, 1);
		ctx.translate(-354.4800121028869, -26.609996980687114);
		ctx.moveTo(354.49, 38.19);
		ctx.translate(354.530068550626, 26.560069023796792);
		ctx.arc(0, 0, 11.63, 1.5742416088150872, 6.2866187598587215, 0);
		ctx.translate(-354.530068550626, -26.560069023796792);
		ctx.translate(354.5102102754439, 26.53000447423797);
		ctx.arc(0, 0, 11.65, 0.006008235784592159, 1.5716727454001174, 0);
		ctx.translate(-354.5102102754439, -26.53000447423797);
		ctx.fill();
		ctx.stroke();

		// m
		ctx.beginPath();
		ctx.moveTo(266.79, 10.08);
		ctx.translate(266.7048374706627, 23.719734137570164);
		ctx.arc(0, 0, 13.64, -1.5645526990343845, -2.4556385574542325, 1);
		ctx.translate(-266.7048374706627, -23.719734137570164);
		ctx.lineTo(255.70000000000005, 15.61);
		ctx.lineTo(255.22000000000006, 15.08);
		ctx.translate(244.74139903582358, 23.559936428627285);
		ctx.arc(0, 0, 13.48, -0.6803632074186231, -1.57386747671349, 1);
		ctx.translate(-244.74139903582358, -23.559936428627285);
		ctx.translate(244.62867825119963, 23.709813395940095);
		ctx.arc(0, 0, 13.63, -1.565563599407997, -3.127666055511936, 1);
		ctx.translate(-244.62867825119963, -23.709813395940095);
		ctx.lineTo(231, 40);
		ctx.translate(233.615, 39.83821310312628);
		ctx.arc(0, 0, 2.62, 3.0798026179506253, 0.06179003563916918, 1);
		ctx.translate(-233.615, -39.83821310312628);
		ctx.lineTo(236.23, 23.52);
		ctx.translate(244.615, 23.52000016084665);
		ctx.arc(0, 0, 8.385000000000007, -3.141592638688632, -1.8418848224399653e-8, 0);
		ctx.translate(-244.615, -23.52000016084665);
		ctx.lineTo(253, 40);
		ctx.translate(255.62, 40);
		ctx.arc(0, 0, 2.620000000000004, 3.141592653589793, 0, 1);
		ctx.translate(-255.62, -40);
		ctx.lineTo(258.24, 23.52);
		ctx.translate(266.625, 23.52);
		ctx.arc(0, 0, 8.384999999999991, 3.141592653589793, 6.283185307179586, 0);
		ctx.translate(-266.625, -23.52);
		ctx.lineTo(275.01, 40.1);
		ctx.translate(277.625, 39.819509358444975);
		ctx.arc(0, 0, 2.63, 3.0347389983611444, 0.1068536552286492, 1);
		ctx.translate(-277.625, -39.819509358444975);
		ctx.lineTo(280.24, 23.52);
		ctx.translate(266.710299121309, 23.60996740047089);
		ctx.arc(0, 0, 13.53, -0.006649524277648038, -1.5686011381367186, 1);
		ctx.translate(-266.710299121309, -23.60996740047089);
		ctx.fill();
		ctx.stroke();

		// i
		ctx.beginPath();
		ctx.moveTo(292.69, 13.36);
		ctx.translate(290.07, 13.36);
		ctx.arc(0, 0, 2.620000000000004, 0, -3.141592653589793, 1);
		ctx.translate(-290.07, -13.36);
		ctx.bezierCurveTo(287.45, 13.36, 287.45, 13.45, 287.45, 13.5);
		ctx.lineTo(287.45, 13.5);
		ctx.lineTo(287.45, 39.93);
		ctx.lineTo(287.45, 39.93);
		ctx.translate(290.07, 39.93);
		ctx.arc(0, 0, 2.620000000000004, 3.141592653589793, 0, 1);
		ctx.translate(-290.07, -39.93);
		ctx.lineTo(292.69, 13.5);
		ctx.lineTo(292.69, 13.5);
		ctx.bezierCurveTo(292.69, 13.5, 292.69, 13.41, 292.69, 13.36);
		ctx.fill();
		ctx.stroke();

		// a
		ctx.beginPath();
		ctx.moveTo(224.06, 26.59);
		ctx.translate(207.61011013158475, 26.6501939947936);
		ctx.arc(0, 0, 16.45, -0.003659217576012989, -4.717245526431112, 1);
		ctx.translate(-207.61011013158475, -26.6501939947936);
		ctx.translate(208.03585616894836, 29.004242357702076);
		ctx.arc(0, 0, 14.1, 1.5953275934459787, 0.7142068025787592, 1);
		ctx.translate(-208.03585616894836, -29.004242357702076);
		ctx.lineTo(218.69, 39.86);
		ctx.translate(221.385, 39.69575932294332);
		ctx.arc(0, 0, 2.7, 3.08072519605315, 0.06086745753664413, 1);
		ctx.translate(-221.385, -39.69575932294332);
		ctx.lineTo(224.07999999999998, 26.59);
		ctx.closePath();
		ctx.moveTo(207.71, 38.26);
		ctx.translate(207.71000428082272, 26.580000000000787);
		ctx.arc(0, 0, 11.68, 1.5707966933036903, 6.284041471667678, 0);
		ctx.translate(-207.71000428082272, -26.580000000000787);
		ctx.translate(207.70001710136054, 26.5700042625442);
		ctx.arc(0, 0, 11.69, 0.001710500188685932, 1.5699423576029783, 0);
		ctx.translate(-207.70001710136054, -26.5700042625442);
		ctx.fill();
		ctx.stroke();

		// e
		ctx.beginPath();
		ctx.moveTo(157.47, 26.94);
		ctx.translate(138.41018784922662, 26.85537862426221);
		ctx.arc(0, 0, 19.06, 0.004439750983154952, -0.6336591665348794, 1);
		ctx.translate(-138.41018784922662, -26.85537862426221);
		ctx.translate(142.51049423105587, 23.890067898708146);
		ctx.arc(0, 0, 14, -0.6363832528046981, -1.0758724114483553, 1);
		ctx.translate(-142.51049423105587, -23.890067898708146);
		ctx.translate(142.91135207956873, 23.55936191656962);
		ctx.arc(0, 0, 13.52, -1.0903465251113935, -1.580511870139396, 1);
		ctx.translate(-142.91135207956873, -23.55936191656962);
		ctx.bezierCurveTo(134.27, 10.040000000000003, 127.6, 17.26, 127.6, 26.490000000000002);
		ctx.translate(144.59744586554342, 26.784676174674495);
		ctx.arc(0, 0, 17, -3.124257892809865, -3.887377401471395, 1);
		ctx.translate(-144.59744586554342, -26.784676174674495);
		ctx.translate(143.22067798888443, 27.670824697314863);
		ctx.arc(0, 0, 15.39, 2.377400217148641, 1.5604438344611329, 1);
		ctx.translate(-143.22067798888443, -27.670824697314863);
		ctx.translate(143.88506087787522, 27.067973439565584);
		ctx.arc(0, 0, 16, 1.6023678762913929, 0.7790822188128113, 1);
		ctx.translate(-143.88506087787522, -27.067973439565584);
		ctx.translate(153.825, 36.69);
		ctx.arc(0, 0, 2.170812060036516, 0.8424324881963158, -2.2991601653934772, 1);
		ctx.translate(-153.825, -36.69);
		ctx.lineTo(152.38, 35.07);
		ctx.bezierCurveTo(150.01999999999998, 37.24, 147.29, 38.21, 143.51999999999998, 38.21);
		ctx.translate(143.05750545696415, 26.38904408274601);
		ctx.arc(0, 0, 11.83, 1.5316913023876617, 2.1860122453033846, 0);
		ctx.translate(-143.05750545696415, -26.38904408274601);
		ctx.translate(142.1813317292571, 28.68368812441819);
		ctx.arc(0, 0, 9.47, 2.2503430715308945, 3.06376205358649, 0);
		ctx.translate(-142.1813317292571, -28.68368812441819);
		ctx.lineTo(132.73999999999998, 29.24);
		ctx.lineTo(155.15999999999997, 29.24);
		ctx.translate(155.16002118653535, 26.880000000095098);
		ctx.arc(0, 0, 2.36, 1.5708053041404002, 0.004237300775208119, 1);
		ctx.translate(-155.16002118653535, -26.880000000095098);
		ctx.moveTo(136.10999999999999, 17.33);
		ctx.translate(142.5824094506155, 24.119132190757718);
		ctx.arc(0, 0, 9.38, -2.3323162299560476, -1.5571935033093904, 0);
		ctx.translate(-142.5824094506155, -24.119132190757718);
		ctx.translate(143.0957794060443, 23.66166319975553);
		ctx.arc(0, 0, 8.93, -1.614010156792234, -0.7249796080249767, 0);
		ctx.translate(-143.0957794060443, -23.66166319975553);
		ctx.translate(140.28268338393033, 25.46130669602804);
		ctx.arc(0, 0, 12.24, -0.6826169151487241, -0.0835372159252884, 0);
		ctx.translate(-140.28268338393033, -25.46130669602804);
		ctx.lineTo(152.47999999999996, 24.619999999999997);
		ctx.lineTo(132.7, 24.619999999999997);
		ctx.lineTo(132.7, 24.439999999999998);
		ctx.translate(144.20851694255506, 25.52978795319237);
		ctx.arc(0, 0, 11.56, -3.0471801406405623, -2.3555050603754055, 0);
		ctx.translate(-144.20851694255506, -25.52978795319237);
		ctx.fill();
		ctx.stroke();

		// n
		ctx.beginPath();
		ctx.moveTo(107.92, 10.08);
		ctx.translate(107.9831472643824, 23.899855730904033);
		ctx.arc(0, 0, 13.82, -1.5753656092925792, -1.7133296252742933, 1);
		ctx.translate(-107.9831472643824, -23.899855730904033);
		ctx.lineTo(105.83999999999999, 10.22);
		ctx.translate(107.81872650173062, 23.897610954817686);
		ctx.arc(0, 0, 13.82, -1.7144685637471513, -3.1280169142448866, 1);
		ctx.translate(-107.81872650173062, -23.897610954817686);
		ctx.lineTo(94, 40.1);
		ctx.translate(96.525, 39.941018869044136);
		ctx.arc(0, 0, 2.53, 3.0787128336412253, 0.06287981994856917, 1);
		ctx.translate(-96.525, -39.941018869044136);
		ctx.lineTo(99.05, 40.1);
		ctx.bezierCurveTo(99.05, 40.1, 99.05, 24.64, 99.05, 23.790000000000003);
		ctx.lineTo(99.05, 23.6);
		ctx.bezierCurveTo(99.05, 23.6, 99.05, 23.540000000000003, 99.05, 23.51);
		ctx.translate(107.14926733196589, 23.401056503865572);
		ctx.arc(0, 0, 8.1, 3.1281424337128834, 3.9559591119596744, 0);
		ctx.translate(-107.14926733196589, -23.401056503865572);
		ctx.translate(107.785, 24.446279622391245);
		ctx.arc(0, 0, 9.3, -2.2998029032399736, -0.8417897503498197, 0);
		ctx.translate(-107.785, -24.446279622391245);
		ctx.translate(108.41067568579464, 23.405313959680274);
		ctx.arc(0, 0, 8.11, -0.8138248633668781, 0.012908624873903984, 0);
		ctx.translate(-108.41067568579464, -23.405313959680274);
		ctx.lineTo(116.52000000000001, 40.24);
		ctx.translate(119.01945703123896, 40.010185838142746);
		ctx.arc(0, 0, 2.51, 3.0499048158019275, 1.5586275130201233, 1);
		ctx.translate(-119.01945703123896, -40.010185838142746);
		ctx.translate(119.04788618900616, 39.98000087956648);
		ctx.arc(0, 0, 2.54, 1.569964117646138, 0.07882140295803275, 1);
		ctx.translate(-119.04788618900616, -39.98000087956648);
		ctx.lineTo(121.58000000000001, 23.71);
		ctx.translate(107.91009138742174, 23.75998523540357);
		ctx.arc(0, 0, 13.67, -0.0036565725524423005, -1.5722660703687912, 1);
		ctx.translate(-107.91009138742174, -23.75998523540357);
		ctx.fill();
		ctx.stroke();

		// G
		ctx.beginPath();
		ctx.moveTo(332, 26.6);
		ctx.translate(315.36043055221603, 26.7197020984472);
		ctx.arc(0, 0, 16.64, -0.007193697768608427, -1.5648125502337795, 1);
		ctx.translate(-315.36043055221603, -26.7197020984472);
		ctx.translate(316.03454329688896, 26.58);
		ctx.arc(0, 0, 16.51, -1.6056030696204966, -4.677582237559092, 1);
		ctx.translate(-316.03454329688896, -26.58);
		ctx.translate(315.16253794515745, 26.44265897668954);
		ctx.arc(0, 0, 16.64, 1.552919049144687, 0.8717639758223125, 1);
		ctx.translate(-315.16253794515745, -26.44265897668954);
		ctx.lineTo(326.61, 38.55);
		ctx.bezierCurveTo(326.61, 38.55, 327.11, 43.709999999999994, 325.94, 47.19);
		ctx.translate(315.64466760347153, 43.67140214787321);
		ctx.arc(0, 0, 10.88, 0.32932094386850114, 1.5868510241499159, 0);
		ctx.translate(-315.64466760347153, -43.67140214787321);
		ctx.translate(315.6963494213965, 43.282273257687095);
		ctx.arc(0, 0, 11.27, 1.5908819205403602, 2.551855531088385, 0);
		ctx.translate(-315.6963494213965, -43.282273257687095);
		ctx.translate(304.0499789179888, 50.93938974574615);
		ctx.arc(0, 0, 2.67, -0.5472849883074394, -3.145566542046616, 1);
		ctx.translate(-304.0499789179888, -50.93938974574615);
		ctx.translate(303.9499930592937, 50.94402712949556);
		ctx.arc(0, 0, 2.57, 3.139268577371409, 2.6619433930793357, 1);
		ctx.translate(-303.9499930592937, -50.94402712949556);
		ctx.lineTo(301.67, 52.129999999999995);
		ctx.translate(315.45054035281726, 44.000011833687765);
		ctx.arc(0, 0, 16, 2.608587107506815, 1.569580098546128, 1);
		ctx.translate(-315.45054035281726, -44.000011833687765);
		ctx.bezierCurveTo(320.68, 59.84, 324.73, 58.21, 327.56, 55);
		ctx.bezierCurveTo(331.98, 50, 332.01, 42.71, 332.01, 37.39);
		ctx.closePath();
		ctx.moveTo(315.49, 37.75);
		ctx.translate(315.370108666768, 26.540641139288304);
		ctx.arc(0, 0, 11.21, 1.5601010887080853, 6.287588431194116, 0);
		ctx.translate(-315.370108666768, -26.540641139288304);
		ctx.translate(315.4701125919425, 26.640017799699194);
		ctx.arc(0, 0, 11.11, -0.004502067386566042, 1.5690062801091929, 0);
		ctx.translate(-315.4701125919425, -26.640017799699194);
		ctx.fill();
		ctx.stroke();

		// y
		ctx.beginPath();
		ctx.moveTo(189.33, 13.26);
		ctx.translate(185.68504354075253, 13.068186522397713);
		ctx.arc(0, 0, 3.65, 0.052575856229730565, 0.3529871521290823, 0);
		ctx.translate(-185.68504354075253, -13.068186522397713);
		ctx.lineTo(189.11, 14.41);
		ctx.lineTo(176.51000000000002, 44.64);
		ctx.bezierCurveTo(174.83, 49.120000000000005, 172.67000000000002, 54.81, 167.40000000000003, 57.64);
		ctx.bezierCurveTo(164.02000000000004, 59.43, 160.11000000000004, 59.52, 155.67000000000004, 58.02);
		ctx.translate(160.83552432595326, 44.407103231200736);
		ctx.arc(0, 0, 14.56, 1.933469752878455, 2.5841177478286745, 0);
		ctx.translate(-160.83552432595326, -44.407103231200736);
		ctx.translate(148.23246212411033, 52.075);
		ctx.arc(0, 0, 0.25, 0.14046141470985624, -0.14046141470985662, 1);
		ctx.translate(-148.23246212411033, -52.075);
		ctx.translate(150.63999967745644, 50.781269928305406);
		ctx.arc(0, 0, 2.5, 2.6139569150797026, 3.1421006249338017, 0);
		ctx.translate(-150.63999967745644, -50.781269928305406);
		ctx.translate(150.60999910541358, 50.78210220273051);
		ctx.arc(0, 0, 2.47, -3.1407415592642653, -0.5696206475134455, 0);
		ctx.translate(-150.60999910541358, -50.78210220273051);
		ctx.lineTo(152.69000000000005, 49.45);
		ctx.translate(160.67471475667406, 44.64305395759927);
		ctx.arc(0, 0, 9.32, 2.5996902799182227, 1.9263882938780008, 1);
		ctx.translate(-160.67471475667406, -44.64305395759927);
		ctx.translate(160.99911973388788, 44.29600394511466);
		ctx.arc(0, 0, 9.76, 1.9451687557157649, 0.6862055509563361, 1);
		ctx.translate(-160.99911973388788, -44.29600394511466);
		ctx.bezierCurveTo(170.63000000000008, 47.93000000000001, 172.74000000000007, 41.660000000000004, 172.74000000000007, 41.660000000000004);
		ctx.lineTo(159.92000000000007, 14.560000000000002);
		ctx.lineTo(159.92000000000007, 14.560000000000002);
		ctx.translate(163.00867486082302, 13.114943736693839);
		ctx.arc(0, 0, 3.41, 2.7039889785545004, 3.1137133051154455, 0);
		ctx.translate(-163.00867486082302, -13.114943736693839);
		ctx.translate(162.07997680286567, 13.199273525814727);
		ctx.arc(0, 0, 2.48, 3.137267448900529, 4.736594246009329, 0);
		ctx.translate(-162.07997680286567, -13.199273525814727);
		ctx.bezierCurveTo(162.56000000000006, 10.720000000000002, 163.87000000000006, 10.720000000000002, 164.67000000000007, 12.660000000000002);
		ctx.lineTo(175.19000000000008, 35.080000000000005);
		ctx.lineTo(184.48000000000008, 12.590000000000007);
		ctx.translate(186.8913010538716, 13.16967855540648);
		ctx.arc(0, 0, 2.48, -2.9056687937232493, 0.03239334418557105, 0);
		ctx.translate(-186.8913010538716, -13.16967855540648);
		ctx.fill();
		ctx.stroke();

		// :)
		ctx.beginPath();
		ctx.moveTo(354.51, 34.56);
		ctx.translate(354.5137478452042, 25.85000080633435);
		ctx.arc(0, 0, 8.71, 1.5712266190245028, 3.009173951032439, 0);
		ctx.translate(-354.5137478452042, -25.85000080633435);
		ctx.translate(347.38, 26.805);
		ctx.arc(0, 0, 1.5126218959145077, 3.01231764954165, 6.153910303131443, 0);
		ctx.translate(-347.38, -26.805);
		ctx.translate(354.54499999999996, 25.818687798653343);
		ctx.arc(0, 0, 5.72, 3.002806245616346, 0.13878640797344755, 1);
		ctx.translate(-354.54499999999996, -25.818687798653343);
		ctx.translate(361.71, 26.814999999999998);
		ctx.arc(0, 0, 1.5139435260273084, -3.0057674533718077, 0.1358252002179854, 0);
		ctx.translate(-361.71, -26.814999999999998);
		ctx.translate(354.6465860311345, 25.799163730125947);
		ctx.arc(0, 0, 8.65, 0.14160995976860496, 0.8539080430209796, 0);
		ctx.translate(-354.6465860311345, -25.799163730125947);
		ctx.translate(354.5889554979743, 25.730006978322287);
		ctx.arc(0, 0, 8.74, 0.8541361772851909, 1.5695326534579301, 0);
		ctx.translate(-354.5889554979743, -25.730006978322287);
		ctx.fill();
		ctx.stroke();

		// m
		ctx.beginPath();
		ctx.moveTo(35.74, 10.08);
		ctx.translate(35.65483747066267, 23.719734137570164);
		ctx.arc(0, 0, 13.64, -1.5645526990343837, -2.455638557454232, 1);
		ctx.translate(-35.65483747066267, -23.719734137570164);
		ctx.lineTo(24.64, 15.61);
		ctx.lineTo(24.17, 15.08);
		ctx.translate(13.68661469077165, 23.56991946123491);
		ctx.arc(0, 0, 13.49, -0.6807153600986973, -1.5742518333582098, 1);
		ctx.translate(-13.68661469077165, -23.56991946123491);
		ctx.translate(13.628675716576964, 23.709995295692696);
		ctx.arc(0, 0, 13.63, -1.5699654915252068, -3.1276527086732946, 1);
		ctx.translate(-13.628675716576964, -23.709995295692696);
		ctx.lineTo(0, 40);
		ctx.translate(2.615, 39.83821310312637);
		ctx.arc(0, 0, 2.62, 3.0798026179506577, 0.06179003563913499, 1);
		ctx.translate(-2.615, -39.83821310312637);
		ctx.lineTo(5.23, 23.52);
		ctx.translate(13.615, 23.52);
		ctx.arc(0, 0, 8.384999999999998, 3.141592653589793, 6.283185307179586, 0);
		ctx.translate(-13.615, -23.52);
		ctx.lineTo(22, 40);
		ctx.translate(24.62, 40);
		ctx.arc(0, 0, 2.6200000000000006, 3.141592653589793, 0, 1);
		ctx.translate(-24.62, -40);
		ctx.lineTo(27.240000000000002, 23.52);
		ctx.translate(35.620000000000005, 23.52000016094262);
		ctx.arc(0, 0, 8.38, -3.141592638688632, -1.8418848224399653e-8, 0);
		ctx.translate(-35.620000000000005, -23.52000016094262);
		ctx.lineTo(44, 40.1);
		ctx.translate(46.620000000000005, 39.87087121525222);
		ctx.arc(0, 0, 2.63, 3.054360854660396, 0.08723179892939692, 1);
		ctx.translate(-46.620000000000005, -39.87087121525222);
		ctx.lineTo(49.24, 23.52);
		ctx.translate(35.710299121308985, 23.60996740047089);
		ctx.arc(0, 0, 13.53, -0.006649524277648038, -1.5686011381367186, 1);
		ctx.translate(-35.710299121308985, -23.60996740047089);
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(378, 38.21);
		ctx.lineTo(378, 38.21);
		ctx.lineTo(389.6, 26.59);
		ctx.lineTo(378.15, 15.09);
		ctx.lineTo(378.15, 15.09);
		ctx.lineTo(378, 15);
		ctx.translate(379.82169048105146, 13.06169048105147);
		ctx.arc(0, 0, 2.66, 2.325188728317756, 5.528792905656724, 0);
		ctx.translate(-379.82169048105146, -13.06169048105147);
		ctx.lineTo(381.86, 11.34);
		ctx.lineTo(381.86, 11.34);
		ctx.lineTo(393.3, 22.83);
		ctx.lineTo(404.75, 11.339999999999998);
		ctx.lineTo(404.75, 11.339999999999998);
		ctx.lineTo(404.85, 11.239999999999998);
		ctx.translate(406.76000002702233, 13.119999972546452);
		ctx.arc(0, 0, 2.6800186566514776, -2.3641099065346625, 0.777482776857453, 0);
		ctx.translate(-406.76000002702233, -13.119999972546452);
		ctx.lineTo(408.57, 15.1);
		ctx.lineTo(408.57, 15.1);
		ctx.lineTo(397.12, 26.59);
		ctx.lineTo(408.7, 38.21);
		ctx.lineTo(408.7, 38.21);
		ctx.translate(406.81499996837994, 40.10499996854681);
		ctx.arc(0, 0, 2.6728729861330796, -0.7880436431852531, 2.3535489806022176, 0);
		ctx.translate(-406.81499996837994, -40.10499996854681);
		ctx.lineTo(393.36, 30.36);
		ctx.lineTo(381.78, 42);
		ctx.translate(379.8900000315367, 40.10499996854647);
		ctx.arc(0, 0, 2.6764015020172045, 0.7867191832341364, 3.928311807021607, 0);
		ctx.translate(-379.8900000315367, -40.10499996854647);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var include = exports.include = function include(ctx, canvas) {

		var lineHeight = 0,
		    fontSize = 128,
		    initial = 100;

		var lines = ['includes'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var st = exports.st = function st(ctx, canvas) {

		var lineHeight = 0,
		    fontSize = 256,
		    initial = fontSize;

		var lines = ['st'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var one = exports.one = function one(ctx) {
		ctx.beginPath();
		ctx.moveTo(239.17, 427.62);
		ctx.lineTo(184.91, 427.62);
		ctx.lineTo(184.91, 35.36);
		ctx.bezierCurveTo(184.91, 24.17, 178.97, 13.649999999999999, 168.91, 6.98);
		ctx.translate(145.17524837207566, 43.70838772885007);
		ctx.arc(0, 0, 43.73, -0.9970804384363138, -1.8353688058527895, 1);
		ctx.translate(-145.17524837207566, -43.70838772885007);
		ctx.lineTo(28.27, 29.8);
		ctx.bezierCurveTo(7.27, 35.43, -4.63, 55.16, 1.7, 73.86);
		ctx.bezierCurveTo(8.03, 92.56, 30.18, 103.15, 51.18, 97.52);
		ctx.lineTo(105.48, 83);
		ctx.lineTo(105.48, 427.62);
		ctx.lineTo(51.22, 427.62);
		ctx.bezierCurveTo(29.29, 427.62, 11.509999999999998, 443.45, 11.509999999999998, 462.98);
		ctx.bezierCurveTo(11.509999999999998, 482.51000000000005, 29.29, 498.35, 51.22, 498.35);
		ctx.lineTo(239.22, 498.35);
		ctx.bezierCurveTo(261.15, 498.35, 278.93, 482.52000000000004, 278.93, 462.98);
		ctx.bezierCurveTo(278.93, 443.44, 261.1, 427.62, 239.17, 427.62);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var ever = exports.ever = function ever(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 128,
		    initial = fontSize;

		var lines = ['ever'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var metal = exports.metal = function metal(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 128,
		    initial = fontSize;

		var lines = ['metal'];

		ctx.font = fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var cashback = exports.cashback = function cashback(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 128,
		    initial = fontSize;

		var lines = ['cash back'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var debit = exports.debit = function debit(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['debit'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var card = exports.card = function card(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['card'];

		ctx.font = fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var percentage = exports.percentage = function percentage(ctx) {

		ctx.beginPath();
		ctx.moveTo(500.59, 365.35);
		ctx.bezierCurveTo(471.09, 365.35, 447.09, 343.98, 447.09, 317.71000000000004);
		ctx.bezierCurveTo(447.09, 291.44000000000005, 471.09, 270.07000000000005, 500.59, 270.07000000000005);
		ctx.bezierCurveTo(530.0899999999999, 270.07000000000005, 554.0899999999999, 291.44000000000005, 554.0899999999999, 317.71000000000004);
		ctx.bezierCurveTo(554.0899999999999, 343.98, 530.09, 365.35, 500.59, 365.35);
		ctx.closePath();
		ctx.moveTo(500.59, 298.79);
		ctx.bezierCurveTo(488.88, 298.79, 479.34999999999997, 307.27000000000004, 479.34999999999997, 317.70000000000005);
		ctx.bezierCurveTo(479.34999999999997, 328.13000000000005, 488.87999999999994, 336.62000000000006, 500.59, 336.62000000000006);
		ctx.bezierCurveTo(512.3, 336.62000000000006, 521.8299999999999, 328.13000000000005, 521.8299999999999, 317.70000000000005);
		ctx.bezierCurveTo(521.8299999999999, 307.27000000000004, 512.3, 298.79, 500.59, 298.79);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(335.12, 215.45);
		ctx.bezierCurveTo(305.62, 215.45, 281.62, 194.07999999999998, 281.62, 167.81);
		ctx.bezierCurveTo(281.62, 141.54000000000002, 305.62, 120.17, 335.12, 120.17);
		ctx.bezierCurveTo(364.62, 120.17, 388.62, 141.54, 388.62, 167.81);
		ctx.bezierCurveTo(388.62, 194.08, 364.62, 215.45, 335.12, 215.45);
		ctx.closePath();
		ctx.moveTo(335.12, 148.89);
		ctx.bezierCurveTo(323.41, 148.89, 313.88, 157.38, 313.88, 167.81);
		ctx.bezierCurveTo(313.88, 178.24, 323.40999999999997, 186.72, 335.12, 186.72);
		ctx.bezierCurveTo(346.83000000000004, 186.72, 356.36, 178.24, 356.36, 167.81);
		ctx.bezierCurveTo(356.36, 157.38, 346.83, 148.89, 335.12, 148.89);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(543.57, 156);
		ctx.lineTo(320.06, 353.85);
		ctx.bezierCurveTo(310.96, 361.79, 297.17, 362.64000000000004, 289.62, 356.05);
		ctx.bezierCurveTo(282.07, 349.46, 283.04, 337.43, 292.14, 329.49);
		ctx.lineTo(515.64, 131.67000000000002);
		ctx.bezierCurveTo(524.74, 123.73000000000002, 538.53, 122.88000000000002, 546.08, 129.47000000000003);
		ctx.bezierCurveTo(553.6300000000001, 136.06000000000003, 552.67, 148.08, 543.57, 156);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(276.64, 439.08);
		ctx.lineTo(222.37, 439.08);
		ctx.lineTo(222.37, 46.83);
		ctx.bezierCurveTo(222.37, 35.64, 216.43, 25.119999999999997, 206.37, 18.45);
		ctx.translate(182.6709301062511, 55.201421553066524);
		ctx.rotate(0);
		ctx.scale(1, 1);
		ctx.arc(0, 0, 43.73, -0.9980516366938874, -1.8359773070116345, 1);
		ctx.scale(1, 1);
		ctx.rotate(0);
		ctx.translate(-182.6709301062511, -55.201421553066524);
		ctx.lineTo(65.74, 41.26);
		ctx.bezierCurveTo(44.739999999999995, 46.89, 32.839999999999996, 66.62, 39.169999999999995, 85.32);
		ctx.bezierCurveTo(45.49999999999999, 104.01999999999998, 67.65, 114.62, 88.65, 109);
		ctx.lineTo(143, 94.42);
		ctx.lineTo(143, 439.08);
		ctx.lineTo(88.69, 439.08);
		ctx.bezierCurveTo(66.75, 439.08, 49, 454.92, 49, 474.45);
		ctx.bezierCurveTo(49, 493.97999999999996, 66.78, 509.82, 88.71000000000001, 509.82);
		ctx.lineTo(276.71000000000004, 509.82);
		ctx.bezierCurveTo(298.64000000000004, 509.82, 316.42, 493.99, 316.42, 474.45);
		ctx.bezierCurveTo(316.42, 454.90999999999997, 298.57, 439.08, 276.64, 439.08);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var cash = exports.cash = function cash(ctx, canvas) {
		var lineHeight = 0,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['cash', 'back'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var onevery = exports.onevery = function onevery(ctx, canvas) {
		var lineHeight = 0,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['on'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var things = exports.things = function things(ctx, canvas) {
		var lineHeight = 0,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['things'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var youcashback = exports.youcashback = function youcashback(ctx, canvas) {
		var lineHeight = 0,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['you'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var buycashback = exports.buycashback = function buycashback(ctx, canvas) {
		var lineHeight = 0,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['buy!'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var yourreal = exports.yourreal = function yourreal(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['your real'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var realmetalcard = exports.realmetalcard = function realmetalcard(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['metal card'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var replaceyourplastic = exports.replaceyourplastic = function replaceyourplastic(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['replace your old plastic relationship'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var fifty = exports.fifty = function fifty(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 256,
		    initial = fontSize;

		var lines = ['360,000+'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var discounts = exports.discounts = function discounts(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['daily discounts'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var national = exports.national = function national(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['on national and local brands you love'];

		ctx.font = fontSize + "px Avenir LT Std";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var manymany = exports.manymany = function manymany(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['and many, many, many, more'];

		ctx.font = fontSize + "px Avenir LT Std";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var onehundred = exports.onehundred = function onehundred(ctx, canvas) {
		var lineHeight = 16,
		    fontSize = 256,
		    initial = fontSize;

		var lines = ['100%'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var mobilesecure = exports.mobilesecure = function mobilesecure(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['mobile', 'secure'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

	var ampersand = exports.ampersand = function ampersand(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = 115;

		var lines = ['&'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

	var issafe = exports.issafe = function issafe(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['your money is safe,'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

	var ensured = exports.ensured = function ensured(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['secure and FDIC insured'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var mouchmore = exports.mouchmore = function mouchmore(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['and much'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

	var m = exports.m = function m(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['m'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

	var re = exports.re = function re(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['re'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

	var tocome = exports.tocome = function tocome(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['to come'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

	var waitandsee = exports.waitandsee = function waitandsee(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['just wait and see...'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (85 + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var happy = exports.happy = function happy(ctx) {

		ctx.beginPath();
		ctx.moveTo(152.28, 0);
		ctx.bezierCurveTo(68.28, 0, 0, 68.36, 0, 152.3);
		ctx.bezierCurveTo(0, 236.24, 68.28, 304.65, 152.28, 304.65);
		ctx.bezierCurveTo(236.28, 304.65, 304.63, 236.29, 304.63, 152.3);
		ctx.bezierCurveTo(304.63, 68.31000000000003, 236.29, 0, 152.28, 0);
		ctx.moveTo(152.28, 259.27);
		ctx.bezierCurveTo(92.84, 259.27, 44.47, 211.26999999999998, 44.47, 152.26999999999998);
		ctx.translate(152.23000000000002, 152.26999999999998);
		ctx.arc(0, 0, 107.76, 3.141592653589793, 6.283185307179586, 0);
		ctx.translate(-152.23000000000002, -152.26999999999998);
		ctx.bezierCurveTo(259.99, 211.26999999999998, 211.69, 259.27, 152.28000000000003, 259.27);
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(152.35, 225.89);
		ctx.bezierCurveTo(112.13999999999999, 225.89, 77.91, 196.04, 72.71, 156.48);
		ctx.translate(86.4495241401064, 155.42459656839998);
		ctx.arc(0, 0, 13.78, 3.064928068009476, 6.10041348767343, 0);
		ctx.translate(-86.4495241401064, -155.42459656839998);
		ctx.bezierCurveTo(103.4, 178.82, 125.84, 198.32, 152.31, 198.32);
		ctx.bezierCurveTo(178.48000000000002, 198.32, 200.98000000000002, 179, 204.55, 153.32);
		ctx.translate(218.15349509910956, 155.4549054050478);
		ctx.arc(0, 0, 13.77, -2.985924372262465, 0.12268184769472024, 0);
		ctx.translate(-218.15349509910956, -155.4549054050478);
		ctx.translate(152.8248482981823, 145.97691764758466);
		ctx.arc(0, 0, 79.78, 0.14038397095622637, 0.8543014617374172, 0);
		ctx.translate(-152.8248482981823, -145.97691764758466);
		ctx.translate(152.27714604427575, 145.34001138961577);
		ctx.arc(0, 0, 80.62, 0.8543666596685477, 1.570264771873756, 0);
		ctx.translate(-152.27714604427575, -145.34001138961577);
		ctx.fill();
		ctx.stroke();
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var logo = exports.logo = function logo(ctx) {

		// Circulo
		ctx.beginPath();
		ctx.moveTo(313.59, 0);
		ctx.bezierCurveTo(165.48, 0, 45.12, 111.83, 45.12, 249.15);
		ctx.bezierCurveTo(45.12, 386.47, 165.48, 498.39, 313.59, 498.39);
		ctx.bezierCurveTo(461.69999999999993, 498.39, 582.16, 386.56, 582.16, 249.15);
		ctx.bezierCurveTo(582.16, 111.74000000000001, 461.68, 0, 313.59, 0);
		ctx.moveTo(313.59, 424.16);
		ctx.bezierCurveTo(208.79999999999995, 424.16, 123.52999999999997, 345.6, 123.52999999999997, 249.16000000000003);
		ctx.bezierCurveTo(123.52999999999997, 151.98000000000002, 208.79999999999995, 72.95000000000002, 313.59, 72.95000000000002);
		ctx.bezierCurveTo(418.38, 72.95000000000002, 503.46999999999997, 151.95000000000002, 503.46999999999997, 249.16000000000003);
		ctx.bezierCurveTo(503.46999999999997, 345.61, 418.30999999999995, 424.16, 313.59, 424.16);
		ctx.fill();
		ctx.stroke();

		// Sonrisa
		ctx.beginPath();
		ctx.moveTo(313.7, 369.54);
		ctx.bezierCurveTo(242.82, 369.54, 182.47, 320.70000000000005, 173.29999999999998, 255.99);
		ctx.bezierCurveTo(171.64999999999998, 243.64000000000001, 180.93999999999997, 232.35000000000002, 194.29999999999998, 230.74);
		ctx.bezierCurveTo(207.66, 229.13, 219.80999999999997, 237.83, 221.51, 250.16000000000003);
		ctx.bezierCurveTo(227.51, 292.53000000000003, 267.05, 324.44000000000005, 313.71999999999997, 324.44000000000005);
		ctx.bezierCurveTo(359.85999999999996, 324.44000000000005, 399.52, 292.84000000000003, 405.80999999999995, 250.79000000000005);
		ctx.bezierCurveTo(407.62999999999994, 238.46000000000004, 419.96999999999997, 229.90000000000003, 433.24999999999994, 231.62000000000006);
		ctx.bezierCurveTo(446.5299999999999, 233.3400000000001, 455.69999999999993, 244.71000000000006, 453.87999999999994, 257.0400000000001);
		ctx.bezierCurveTo(449.17999999999995, 287.99000000000007, 432.54999999999995, 316.43000000000006, 406.97999999999996, 337.12000000000006);
		ctx.bezierCurveTo(381.11999999999995, 358.01000000000005, 347.97999999999996, 369.5400000000001, 313.71, 369.5400000000001);
		ctx.fill();
		ctx.stroke();
	};

	var $ = jQuery;

	var yourmoney = exports.yourmoney = function yourmoney(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 156,
		    initial = fontSize;

		var lines = ['your money'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var fastfairfriendly = exports.fastfairfriendly = function fastfairfriendly(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 56,
		    initial = fontSize;

		var lines = ['fast. fair. friendly.'];

		ctx.font = fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.yada = exports.legal = exports.the = exports.and = undefined;

	var _simpleFunctions = __webpack_require__(1);

	var $ = jQuery;

	var and = exports.and = function and(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, '...and', 156, 16, "comic", "bold");
	};

	var the = exports.the = function the(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'the', 156, 16, "comic", "bold");
	};

	var legal = exports.legal = function legal(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'legal', 156, 16, "comic", "bold");
	};

	var yada = exports.yada = function yada(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'yada', 156, 16, "comic", "bold");
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.notfound = exports.notfoundnumber = undefined;

	var _simpleFunctions = __webpack_require__(1);

	var $ = jQuery;

	var notfoundnumber = exports.notfoundnumber = function notfoundnumber(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, '404', 156, 16, "sans", "bold");
	};

	var notfound = exports.notfound = function notfound(ctx, canvas) {
		(0, _simpleFunctions.write)(ctx, 'not found...', 156, 16, "sans", "bold");
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	var onehundredmoney = exports.onehundredmoney = function onehundredmoney(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 256,
		    initial = fontSize;

		var lines = ['$100'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var loan = exports.loan = function loan(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 256,
		    initial = fontSize;

		var lines = ['loan'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var apr = exports.apr = function apr(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 256,
		    initial = fontSize;

		var lines = ['0% APR'];

		ctx.font = "bold " + fontSize + "px Gotham Rounded";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

	var interest = exports.interest = function interest(ctx, canvas) {

		var lineHeight = 16,
		    fontSize = 64,
		    initial = fontSize;

		var lines = ['interest', 'loan fees', 'credit check', 'catch'];

		ctx.font = fontSize + "px Avenir LT Std";
		ctx.fillStyle = 'white';

		$.each(lines, function (key, line) {
			ctx.fillText(line, 0, (fontSize + lineHeight) * key + initial);
		});
	};

/***/ })
/******/ ]);