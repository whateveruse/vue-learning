
export var ComponentNotice = {
	props: {
		thisIsMessage: String,
		fontSize: Number,
		data: Array,
		data2: Object,
	},
	data: function () {
		return {
			message: this.thisIsMessage
		};
	},
	created: function () {
	    setTimeout(() => {
	    	this.message += ' <b>' + this.message + '</b>';
	    }, 1000);
	    setTimeout(() => {
	    	this.message += ' <i>' + this.message + '</i>';
	    }, 3000);
	},
	template: `
		<div style="color: red; background-color:yellow;"
			:style="{ fontSize: fontSize + 'px', data2 }"
			:class="data2"
		>
			<span v-html="message"></span>
			{{ data.join('') }}
		</div>
	`
};