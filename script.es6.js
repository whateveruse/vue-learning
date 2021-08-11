
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';

var app = new Vue({
	el: '#app',
	data: {
		message: 'Привет, Vue!'
	}
});

var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el: '#app3',
	data: {
		seen: true
	}
});

Vue.component('todo-item', {
  // Компонент todo-item теперь принимает
  // "prop", то есть входной параметр.
  // Имя входного параметра todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
			{ id: 0, text: 'Изучить JavaScript' },
			{ id: 1, text: 'Изучить Vue' },
			{ id: 2, text: 'Создать еще один JS фреймворк' }
		]
	}
});

var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'Привет, Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});

var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'Привет, Vue!'
	}
});

setTimeout(() => {
	app.message = 'новое сообщение';
	app6.message = '12345';
}, 1000);

setTimeout(() => {
	app2.message = 'новое значение [' + Math.ceil(50 + Math.random() * 90) + ']';
}, 500);

setTimeout(() => {
	app3.seen = false;
}, 3000);

setTimeout(() => {
	app4.todos.push({
		id: 4,
		text: 'Profit'
	});
}, 1500);