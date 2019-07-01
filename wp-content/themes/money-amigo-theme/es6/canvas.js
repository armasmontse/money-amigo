import {draw, drawTransparent} from './canvas/simple-functions';
import {circle} from './canvas/circle';
import {arrow} from './canvas/arrow';
import {holamoney, holaamigo, thenew, manageyourmoney, yourway, seethemoney, experience} from './canvas/revolutionary';
import {hola} from './canvas/hola';
import {sayyes} from './canvas/sayyes';
import {no} from './canvas/no';
import {hidden} from './canvas/hidden';
import {twocards, twooptions} from './canvas/twocards';
import {you, choose, cant, go, wrong} from './canvas/youchoose';
import {moneyamigox} from './canvas/moneyamigox';
import {include} from './canvas/include';
import {st} from './canvas/st';
import {one} from './canvas/one';
import {ever, metal, cashback} from './canvas/ever';
import {debit, card} from './canvas/debitcard';
import {percentage} from './canvas/percentage';
import {cash, onevery, things, youcashback, buycashback} from './canvas/cashback';
import {yourreal, realmetalcard, replaceyourplastic} from './canvas/yourreal';
import {fifty} from './canvas/fifty';
import {discounts, national, manymany} from './canvas/discounts';
import {onehundred} from './canvas/onehundred';
import {mobilesecure, ampersand, issafe, ensured} from './canvas/mobilesecure';
import {mouchmore, m, re, tocome, waitandsee} from './canvas/muchmore';
import {happy} from './canvas/happy';
import {logo, yourmoney, fastfairfriendly} from './canvas/logo';
import {and, the, legal, yada} from './canvas/legal';
import {notfoundnumber, notfound} from './canvas/notfound';
import {onehundredmoney, loan, apr, interest} from './canvas/loan';

var $ = jQuery;

var transparents = [
	circle,
	holamoney,
	holaamigo,
	thenew,
	manageyourmoney,
	yourway,
	seethemoney,
	experience,
	hola,
	sayyes,
	no,
	hidden,
	twocards,
	twooptions,
	you,
	choose,
	cant,
	go,
	wrong,
	moneyamigox,
	include,
	st,
	one,
	ever,
	metal,
	cashback,
	debit,
	card,
	percentage,
	cash,
	onevery,
	things, youcashback, buycashback,
	yourreal,
	realmetalcard,
	replaceyourplastic,
	fifty,
	discounts,
	national,
	manymany,
	onehundred,
	mobilesecure,
	ampersand,
	issafe,
	ensured,
	mouchmore,
	m,
	re,
	tocome,
	waitandsee,
	happy,
	logo,
	yourmoney,
	fastfairfriendly,
	and,
	the,
	legal,
	yada,
	notfound,
	notfoundnumber,
	onehundredmoney,
	loan,
	apr,
	interest
];

var whites = [
	arrow
];

$(window).load(function() {

	$.each(transparents, function(key, object) {
		drawTransparent(object);
	})

	whites.forEach(draw)

});







