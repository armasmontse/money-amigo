import {write} from './simple-functions';

var $ = jQuery;

export const notfoundnumber = function(ctx, canvas) {
	write(ctx, '404', 156, 16, "sans", "bold");
}

export const notfound = function(ctx, canvas) {
	write(ctx, 'not found...', 156, 16, "sans", "bold");
}