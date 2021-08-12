
export var ComponentNotice = {
	props: {
		thisIsMessage: String,
		fontSize: Number,
	},
	template: `
		<div style="color: red; background-color:yellow;" :style="{ fontSize: fontSize + 'px' }">
			{{ thisIsMessage }}
		</div>
	`
};