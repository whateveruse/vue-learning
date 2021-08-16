
export default {
	template: `
		<header>
			<slot>
				<hr>
				<center>[[[ Lazy header ]]]</center>
				<hr>
			</slot>
		</header>
	`,
	created() {
		setTimeout(() => {
			this.$store.state.todos.push({id: 3, text: 'Profit.', done: true});
		}, 1000);

		setTimeout(() => {
			this.$store.state.todos.push({id: 3, text: 'Profit.', done: true});
		}, 2000);

		setTimeout(() => {
			this.$store.state.todos.push({id: 3, text: 'Profit.', done: true});
		}, 3000);
	}
};