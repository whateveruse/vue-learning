
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
			console.log(this.$store.getters.getTodoById(1));
			this.$store.commit('add', 10);
		}, 1000);

		setTimeout(() => {
			this.$store.state.todos.push({id: 3, text: 'Profit.', done: true});
			this.$store.commit('addObj', { amount: 11 });
		}, 2000);

		setTimeout(() => {
			this.$store.state.todos.push({id: 3, text: 'Profit.', done: true});
			console.log(this.$store.getters.getTodoById(1));
			this.$store.commit({
			  type: 'addObj',
			  amount: 200
			});
		}, 3000);
	}
};