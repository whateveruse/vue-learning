
export var ComponentNotice = {
	props: [
		'thisIsMessage',
	],
	template: `
		<div style="color: red; font-size: 35px;background-color:yellow;">
			{{ thisIsMessage }}
		</div>
	`
};