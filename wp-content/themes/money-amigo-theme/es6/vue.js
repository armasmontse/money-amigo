const $ = jQuery;

Vue.filter('parseMoney', function (value, decimals = 2) {
	if (!value) return ''
	value = parseFloat(value).toFixed(decimals);
	return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

var app = new Vue({
	el: '#app',
	data: {
	  message: 'Hello Vue!',
	  spent: 2500,
	},
	computed: {
		lipsticks: function() {
			return Math.round(this.cashback / 6.99);
		},
		pizzas: function() {
			return Math.round(this.cashback / 5);
		},
		coffees: function() {
			return Math.round(this.cashback / 1.85);
		},
		spentFloat: function() {
			return parseFloat(this.spent);
		},
		cashback: function() {
			return ((this.spentFloat / 100) * 12).toFixed(2);
		}
	},
})