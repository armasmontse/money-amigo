import {write} from './simple-functions';

var $ = jQuery;

export const you = function(ctx, canvas) {
	write(ctx, 'you')
}

export const choose = function(ctx, canvas) {
	write(ctx, 'choose.');
}

export const cant = function(ctx, canvas) {
	write(ctx, 'can´t')
}

export const go = function(ctx, canvas) {
	write(ctx, 'go')
}

export const wrong = function(ctx, canvas) {
	write(ctx, 'wrong')
}