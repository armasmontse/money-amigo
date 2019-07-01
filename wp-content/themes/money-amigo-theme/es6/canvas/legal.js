import {write} from './simple-functions';

var $ = jQuery;

export const and = function(ctx, canvas) {
	write(ctx, '...and', 156, 16, "comic", "bold")
}

export const the = function(ctx, canvas) {
	write(ctx, 'the', 156, 16, "comic", "bold")
}

export const legal = function(ctx, canvas) {
	write(ctx, 'legal', 156, 16, "comic", "bold")
}

export const yada = function(ctx, canvas) {
	write(ctx, 'yada', 156, 16, "comic", "bold")
}