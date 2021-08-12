
export var ComponentNotice = {
	props: {
		thisIsMessage: {
			type: String,
			required: true
	    },
		fontSize: {
			type: Number,
			default: 100,
			validator: (value) => [100, 50, 30, 9].indexOf(value) !== -1,
		},
		data: Array,
		data2: {
			type: Object,
			default: function () {
				return {
					notcolored: true,
					any: true,
				}
			}
		},
	},
	computed: {
	  size: function () {
	  	return Math.max(this.fontSize, 30);
	  }
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
			:style="{ fontSize: size + 'px' }"
			:class="data2"
		>
			<span v-html="message"></span>
			{{ data.join('') }}
		</div>
	`
};