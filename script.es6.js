
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';

Vue.component('app-nav', {
	template: '<h1>{{ message }}</h1>',
	data: () => {
		return {
			message: 'Привет, Vue!'
		};
	}
});

Vue.component('app-sidebar', {
	template: `
		<span v-bind:title="message">
		    Наведи на меня курсор на пару секунд,
		    чтобы увидеть динамически связанное значение title!
		</span>
	`,
	data: () => {
		return {
			message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
		};
	}
});

Vue.component('app-content', {
	template: `
		<ol>
			<todo-item
				v-for="item in todos"
				v-bind:todo="item"
				v-bind:key="item.id"
			></todo-item>
		</ol>
	`,
	data: () => {
		return {
			todos: [
				{ id: 0, text: 'Изучить JavaScript' },
				{ id: 1, text: 'Изучить Vue' },
				{ id: 2, text: 'Создать еще один JS фреймворк' }
			]
		};
	}
});

Vue.component('app-view', {
	//TODO!!! вложенные компоненты
	template: '<span v-if="seen">Сейчас меня видно</span>',
	data: () => {
		return {
			seen: true
		};
	}
});

Vue.component('todo-item', {
  // Компонент todo-item теперь принимает
  // "prop", то есть входной параметр.
  // Имя входного параметра todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
	el: '#app',
	data: {
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
	app6.message = '12345';
}, 1000);
