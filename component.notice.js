
export var ComponentNotice = {
	props: {
		thisIsMessage: String,
		fontSize: Number,
		data: Array,
		data2: Object,
	},
	template: `
		<div style="color: red; background-color:yellow;"
			:style="{ fontSize: fontSize + 'px', data2 }"
			:class="data2"
		>
			{{ thisIsMessage }} {{ data.join('') }}
		</div>
	`
};