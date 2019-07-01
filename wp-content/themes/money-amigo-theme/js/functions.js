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

	__webpack_require__(1);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	var _tatango = __webpack_require__(9);

	var _tatango2 = _interopRequireDefault(_tatango);

	var _alert = __webpack_require__(10);

	var _alert2 = _interopRequireDefault(_alert);

	var _particles = __webpack_require__(11);

	var _particles2 = _interopRequireDefault(_particles);

	var _scrollPositioner = __webpack_require__(12);

	var _scrollPositioner2 = _interopRequireDefault(_scrollPositioner);

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	var _circlePlayer = __webpack_require__(13);

	__webpack_require__(14);

	__webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = jQuery;
	var w = $(window);
	// Se multiplica por 5 porque es el numero de gradientes.
	var height = w.height() * 5;
	// Elementos que se van a mover con el scroll.
	var verticalGradientElements = $('.gradient-scroll-change');
	var horizontalGradientElements = $('.gradient-scroll-change-horizontal');
	var body = $('body');
	var makeGradient = !body.hasClass('not-home');

	w.load(function () {

		window.cltvo_alert = (0, _alert2.default)('#alert', '#close-alert');

		// Run tatango form
		(0, _tatango2.default)('.tatango_form_JS');

		// Run particles
		(0, _particles2.default)('#particles-js');

		// Scroll positioner.
		(0, _scrollPositioner2.default)('#scrollbar__position');

		// Phone mask
		$('.phone-mask').mask("###-###-####", { reverse: true });

		// Make circle players
		if (window.amigo_movement_videos != null) {

			(0, _circlePlayer.makeCirclePlayer)([['.welcome__circle-play', '#welcome-player']].concat(window.amigo_movement_videos.map(function (video) {
				return ['#' + video.container_id, '#' + video.id];
			})));
		}

		if (makeGradient) {

			// Recorremos el gradiente 100% en 4 segundos cuando carga la página. Solo se hace en la página home.
			TweenMax.to(verticalGradientElements, 4, { backgroundPositionY: "100%", onComplete: function onComplete() {

					var welcome = $("#welcome__section");
					var html = $('html');
					var htmlbody = $('body, html');
					var header = $('#header');
					var scrollbar = $('#scrollbar_JS');

					if (welcome.length) {
						if (w.scrollTop() <= w.height()) {
							htmlbody.animate({
								scrollTop: welcome.offset().top - header.height()
							}, 1000);
						}
						header.fadeIn();
						scrollbar.addClass('all');
					}
				}
			});
		}
	});

	w.scroll(function () {

		if (makeGradient) {

			// Cada w.height() * 5 se tiene que reinicar la gradiente.

			// Pixeles que se ha recorrido del gradiente antes de que se genere una nueva.
			var mod = w.scrollTop() % height;
			// Procentaje que se ha recorrido del gradiente.
			var percentage = mod * 100 / height;

			// let num = (w.scrollTop() * 100) / height;

			verticalGradientElements.css('background-position-y', percentage.toFixed(2) + '%');
			horizontalGradientElements.css('background-position-x', percentage.toFixed(2) + '%');
		}
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = jQuery;
	var controller = new ScrollMagic.Controller();

	$('#hero__container-main').each(function () {
		// var smiley = new TimelineMax()
		// 	.add(TweenMax.to($(this).find('#smile__container--for-hero'), 50, {opacity: 1}), 0)
		// 	.add(TweenMax.to($(this).find('#smile__circle--hero'), 100, {
		// 		transform: 'translate3d(-50%, -50%, 0) scale(1)', 
		// 		onComplete(){
		// 			$('#header').fadeIn();
		// 			// $('#header').fadeIn().addClass('orange')
		// 			$('#scrollbar_JS').addClass('all')
		// 		}, 
		// 		onStart(){
		// 			$('#header').hide(); 
		// 			// $('#scrollbar_JS').removeClass('all')
		// 		}
		// 	}), 0)
		// 	.add(TweenMax.to($(this).find('#smile__text--hero'), 100, {opacity: 1}), 100)
		// 	.add(TweenMax.to($(this).find('#smile__face--hero'), 100, {opacity: 1}), 100)

		// var tween = new TimelineMax()
		// 	.to($(this).find('#hero__title'), 200, {opacity: 1})
		// 	.to($(this).find('#hero__subtitle'), 100, {opacity: 1})
		// 	.add(smiley)

		// var scene = new ScrollMagic.Scene({
		// 	triggerElement: this,
		// 	triggerHook: 0,
		// 	duration: '0'
		// })
		// .setPin(this)
		// // .setTween(tween)
		// .on("enter", e => {
		// 	$("#header").fadeOut()
		// })
		// // .addIndicators()
		// .addTo(controller);
	});

	// , {pushFollowers: false} // Si está en false Todo lo que está abajo se queda fijo, si está en true todo lo que está abajo se pone encima.

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = R;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = jQuery;
	var controller = new ScrollMagic.Controller();

	var gradients = ['gradientBlue', 'gradientGreen', 'gradientYellow', 'gradientOrange', 'gradientPurple'];

	var gradientClasses = {
		gradientBlue: 'blue',
		gradientGreen: 'green',
		gradientYellow: 'yellow',
		gradientOrange: 'orange',
		gradientPurple: 'purple',
		all: 'all'
	};

	var mainContainer = $('.main-container');
	var header = $('#header');
	var scrollbar = $('#scrollbar_JS');

	$('.general-section').each(function () {

		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0,
			duration: '100%'
		}).on("enter", function (e) {

			var classes = e.target.triggerElement().classList;

			// El id de gradiente que tiene el current trigger.

			var _R$intersection = _ramda2.default.intersection(gradients, classes),
			    _R$intersection2 = _slicedToArray(_R$intersection, 1),
			    gradientIdClass = _R$intersection2[0];

			var removeableGradients = _ramda2.default.without([gradientIdClass], gradients);

			var gradientClass = gradientClasses[gradientIdClass] || 'ninguna';

			removeableGradients.forEach(function (gradClass) {
				mainContainer.removeClass(gradientClasses[gradClass]);
				scrollbar.removeClass(gradientClasses[gradClass]);
				header.removeClass(gradientClasses[gradClass]);
			});
			mainContainer.addClass(gradientClass);
			scrollbar.addClass(gradientClass);
			header.addClass(gradientClass);
		}).on('leave', function (e) {

			var removeClass = function removeClass(value, key) {
				mainContainer.removeClass(value);
				header.removeClass(value);
			};

			_ramda2.default.forEachObjIndexed(removeClass, gradientClasses);
		}).addTo(controller);
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = jQuery;
	var controller = new ScrollMagic.Controller();

	var header = $('#header');
	header.is_shown = false;
	var toggleHeader = function toggleHeader(element, is_reverse) {
		//esto es un superasco... lo sé, pero lo evento del scrollmagic no funcionan tan bien como quisiera y tuve que hacer esto
		if (!is_reverse) {
			//cuando vas hacia adelante
			if (element.dataset.header === 'hide') {
				if (header.is_shown === true) {

					header.fadeOut();
					header.is_shown = false;
				}
			} else {
				header.fadeIn();
				header.is_shown = true;
			}
		} else {
			//cuando vas en reversa, la lógica de arriva se revierte
			if (element.dataset.header === 'hide') {
				header.fadeIn();
				header.is_shown = true;
			}
		}
	};

	//Scrollbar 
	var scrollbar = $('#scrollbar_JS');
	var gradients = ['blue', 'green', 'yellow', 'orange', 'purple', 'all', 'none'];
	var changeScrollbarColor = function changeScrollbarColor(element) {
		var gradient_color = element.dataset.color;
		var removeableGradients = _ramda2.default.without([gradient_color], gradients);
		removeableGradients.forEach(function (gradient) {
			scrollbar.removeClass(gradient);
			// header.removeClass(gradient)
		});
		scrollbar.addClass(gradient_color);
		// header.addClass(gradient_color)
	};

	$('.gradient-section').each(function () {
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.5,
			duration: '100%'
		})
		// .addIndicators()
		.on("start", function (e) {
			changeScrollbarColor(e.target.triggerElement());
			toggleHeader(e.target.triggerElement(), e.scrollDirection === "REVERSE");
		}).addTo(controller);
	});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = jQuery;
	var controller = new ScrollMagic.Controller();

	$('.twocards_video_JS').each(function () {
		var _this = this;

		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.55,
			duration: '100%',
			reverse: false
		})
		// .setPin(this)
		// .addIndicators()
		.addTo(controller).on("enter", function (e) {

			_this.play();

			// const $videosXS = $('.twocards_video_JS.hidden-sm');
			// const $videosSM = $('.twocards_video_JS.hidden-over-sm');

			// $videosXS.each(function(index, $video) {
			// if (index == 0) {
			// }
			// $video.addEventListener('ended', function (e) {
			// 	if ($videosXS[index+1] !== undefined) {
			// 		$videosXS[index+1].play();
			// 	}
			// }, false);
			// });
		});
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = jQuery;
	var controller = new ScrollMagic.Controller();

	$('#evermetal').each(function () {

		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			reverse: false
		}).addTo(controller).on("enter", function (e) {

			var $videos = $('.blackcard_video_JS');;

			$videos.each(function (index, $video) {

				if (index == 0) {
					$video.play();
				}

				$video.addEventListener('ended', function (e) {
					if ($videos[index + 1] !== undefined) {
						$videos[index + 1].play();
					}
				}, false);
			});
		});
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	var $ = jQuery;

	// define images
	var images = ["wp-content/themes/money-amigo-theme/images/blackcard-vr/0_16.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_17.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_18.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_19.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_20.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_21.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_22.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_23.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_24.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_25.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_26.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_27.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_28.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_29.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_30.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_31.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_32.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_33.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_34.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_35.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_0.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_1.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_2.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_3.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_4.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_5.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_6.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_7.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_8.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_9.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_10.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_11.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_12.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_13.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_14.jpg", "wp-content/themes/money-amigo-theme/images/blackcard-vr/0_15.jpg"];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = { curImg: 0 };

	// create tween
	var tween = TweenMax.to(obj, 0.5, {
		curImg: images.length - 1, // animate propery curImg to number of images
		roundProps: "curImg", // only integers so it can be used as an array index
		repeat: 2, // repeat 3 times
		immediateRender: true, // load first image automatically
		ease: Linear.easeNone, // show every image the same ammount of time
		onUpdate: function onUpdate() {
			$("#sequence").attr("src", images[obj.curImg]); // set the image source
		}
	});

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	if ($('#trigger').lenght) {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#trigger",
			duration: '50%'
		}).setTween(tween)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}

	// handle form change
	// $("form.move input[name=duration]:radio").change(function () {
	// 	scene.duration($(this).val());
	// });

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = jQuery;
	var controller = new ScrollMagic.Controller();

	$('#mobile-secure-video').each(function () {

		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.3,
			duration: '100%',
			reverse: false
		})
		// .addIndicators()
		.addTo(controller).on("enter", function (e) {

			var $video1 = $('#mobile-secure')[0];

			if (!$video1.ended) {
				$video1.play();
			}
		});
	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;

	// Test phone number
	var testPhoneNumber = '2063344012';

	// The submit handler of the form.
	var submitHandler = function submitHandler(form, e) {

		e.stopPropagation();

		e.preventDefault();

		var data = $(form).serializeArray();

		data.push({ name: 'action', value: 'Cltvo_Tatango_Ajax' });

		$.post(cltvo_js_vars.ajax_url, data).done(function (response) {

			$(form)[0].reset();

			try {
				cltvo_alert.openSuccess(response.message);
			} catch (e) {
				return false;
			}

			return true;
		}).fail(function (response) {

			try {
				cltvo_alert.openError(response.responseJSON.message);
			} catch (e) {
				return false;
			}

			return true;
		});
	};

	// Rules for validation.
	var rules = {
		'phone_number': 'required'
	};

	exports.default = function (form) {

		$(form).each(function () {

			$(this).validate({
				submitHandler: submitHandler,
				rules: rules
			});
		});
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = jQuery;

	var Alert = function () {
		function Alert(alert, close) {
			var _this = this;

			_classCallCheck(this, Alert);

			this.div = $(alert);
			this.close = $(close);
			this.isOpen = false;

			this.close.click(function (event) {
				_this.closeAlert();
			});

			$('body').click(function (e) {
				if (e.target == _this.div.get(0)) {
					_this.closeAlert();
				}
			});
		}

		_createClass(Alert, [{
			key: 'openAlert',
			value: function openAlert(text) {
				var _this2 = this;

				if (this.isOpen) {
					return;
				}

				this.isOpen = true;

				setTimeout(function (e) {
					_this2.closeAlert();
				}, 5000);
			}
		}, {
			key: 'closeAlert',
			value: function closeAlert() {

				if (!this.isOpen) {
					return;
				}

				this.div.removeClass('success');
				this.div.removeClass('error');
				this.isOpen = false;
			}
		}, {
			key: 'openSuccess',
			value: function openSuccess(text) {

				this.div.addClass('success');
				this.openAlert(text);
			}
		}, {
			key: 'openError',
			value: function openError(text) {

				this.div.addClass('error');
				this.openAlert(text);
			}
		}]);

		return Alert;
	}();

	exports.default = function (alert, close) {
		return new Alert(alert, close);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;
	var particle_js = 'particles-js';
	var path = '/js/particles.json';

	exports.default = function (particle) {

		if ($(particle).length) {

			particlesJS.load(particle_js, cltvo_js_vars.template_url + path);
		}
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = jQuery;
	var w = $(window);

	exports.default = function (scrollbar_positioner_selector) {
		var scrollbar_positioner = $(scrollbar_positioner_selector);
		var doc_height = $(document).height();

		var w_scroll_pos = w.scrollTop();
		var percentage = 100 - (doc_height - w_scroll_pos) / doc_height * 100;
		var w_height_percentage = w.height() / doc_height;
		var w_height_adjustment = w_height_percentage * percentage;

		w.scroll(function () {
			w_scroll_pos = w.scrollTop();
			percentage = 100 - (doc_height - w_scroll_pos) / doc_height * 100;
			w_height_adjustment = w_height_percentage * percentage;
			scrollbar_positioner.css('top', percentage + w_height_adjustment + '%');
		});
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var $ = jQuery;
	var circlePlayer = exports.circlePlayer = function circlePlayer(_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    player_selector = _ref2[0],
		    video_selector = _ref2[1];

		var player = $(player_selector);
		var video = $(video_selector);
		var icon = $(player.find('.icon').get(0));
		var image = $(player.find('.image').get(0));

		var iframe = video.find('iframe').get(0);

		player.is_open = false;
		player.on('click', function (e) {
			iframe.src = iframe.dataset.src;
			// const Vimeo = iframe.src ? new window.Vimeo.Player(iframe) : null

			var _player$offset = player.offset(),
			    top = _player$offset.top,
			    left = _player$offset.left;

			var scroll_top = $(window).scrollTop();
			var player_top = Math.abs(scroll_top - top);

			if (player.is_open) {
				player.is_open = false;
				player.attr('style', '');
				video.removeClass('open');
				icon.removeClass('open');
				image.removeClass('open');
				iframe.src = '';
				// Vimeo.pause()
			} else {
				player.is_open = true;
				player.css({
					transform: 'scale(1)',
					position: 'fixed',
					top: player_top,
					left: left
				});

				setTimeout(function () {
					return player.css({
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						borderRadius: '10px',
						zIndex: 99999999
					});
				}, 20);

				video.addClass('open');
				icon.addClass('open');
				image.addClass('open');

				setTimeout(function () {
					// Vimeo.play()
				}, 700);
			}
		});
	};

	var makeCirclePlayer = exports.makeCirclePlayer = function makeCirclePlayer(vs) {
		return vs.forEach(circlePlayer);
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	var $ = jQuery;

	$(document).ready(function () {

		var open = $('.open_JS');

		open.click(function (e) {

			e.preventDefault();

			var $el = $(this);
			var $target = $($el.data('target'));

			$el.toggleClass('open');

			if ($el.hasClass('open')) {
				$el.text($el.data('open'));
			} else {
				$el.text($el.data('close'));
			}

			$target.toggleClass('open');
		});
	});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	var $ = jQuery;

	Vue.filter('parseMoney', function (value) {
		var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

		if (!value) return '';
		value = parseFloat(value).toFixed(decimals);
		return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	});

	var app = new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue!',
			spent: 2500
		},
		computed: {
			lipsticks: function lipsticks() {
				return Math.round(this.cashback / 6.99);
			},
			pizzas: function pizzas() {
				return Math.round(this.cashback / 5);
			},
			coffees: function coffees() {
				return Math.round(this.cashback / 1.85);
			},
			spentFloat: function spentFloat() {
				return parseFloat(this.spent);
			},
			cashback: function cashback() {
				return (this.spentFloat / 100 * 12).toFixed(2);
			}
		}
	});

/***/ })
/******/ ]);