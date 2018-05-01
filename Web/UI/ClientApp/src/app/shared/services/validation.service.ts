﻿import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {
	private date = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))) ?((20|21|22|23|[01]\d|\d)(([:.][0-5]\d){1,2}))?$/;
	private decimal = /^((-?[1-9]+)|[0-9]+)(\.?|\,?)([0-9]*)$/;
	private email = /^([a-z0-9_\.\-]{3,})@([\da-z\.\-]{3,})\.([a-z\.]{2,6})$/;
	private hex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
	private integer = /^-?[0-9]+$/;
	private zeros = /^0+$/;
	private time = /^(20|21|22|23|[01]\d|\d)(([:.][0-5]\d){1,2})$/;
	private url = /^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;

	isDate(value: any) { return this.date.test(value); }
	isDecimal(value: any) { return this.decimal.test(value); }
	isEmail(value: any) { return this.email.test(value); }
	isEmpty(value: any) { return !value || value.toString().trim() === ""; }
	isHex(value: any) { return this.hex.test(value); }
	isInteger(value: any) { return this.integer.test(value); }
	isMax(value: any, max: string) { return (!value || !max) || (value && max && parseFloat(value) <= parseFloat(max)); }
	isMin(value: any, min: string) { return (!value || !min) || (value && min && parseFloat(value) >= parseFloat(min)); }
	isOnlyZeros(value: any) { return this.zeros.test(value); }
	isTime(value: any) { return this.time.test(value); }
	isUrl(value: any) { return this.url.test(value); }
}
