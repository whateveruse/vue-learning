
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';

Vue.component('app-nav', {
	template: '<h1>{{ message }}</h1>',
	data: () => {
		return {
			message: 'Привет, Vue!'
		};
	},
	//!!! Не используйте стрелочные функции в свойствах экземпляра и в коллбэках, например created: () => console.log(this.a) или vm.$watch('a', newVal => this.myMethod())
	created: function () {
	    setTimeout(() => {
	    	this.message = 'Видоизменённый заголовок...';
	    }, 1000);
	}/*,
	mounted: function () {
	},
	updated: function () {
	},
	destroyed: function () {
	}*/
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
	},
	created: function () {
	    setTimeout(() => {
	    	this.message = 'Видоизменённый title: ' + Math.ceil(Math.random() * 10 + 90);
	    }, 2000);
	}
});

Vue.component('app-content', {
	template: `
		<div>
			<ol>
				<todo-item
					v-for="item in todos"
					v-bind:todo="item"
					v-bind:key="item.id"
				></todo-item>
			</ol>

			<h3>Total + 1: {{ todos.length + 1 }}</h3>
			<h4>{{ todos.length > 3 ? 'todos.length > 3' : 'todos.length <= 3' }}</h4>
		</div>
	`,
	data: () => {
		return {
			todos: [
				{ id: 0, text: 'Изучить JavaScript' },
				{ id: 1, text: 'Изучить Vue' },
				{ id: 2, text: 'Создать еще один JS фреймворк' }
			]
		};
	},
	created: function () {
	    setTimeout(() => {
	    	this.todos.push({id: 3, text: 'Profit.'});
	    }, 1500);
	}
});

Vue.component('app-view', {
	//TODO!!! вложенные компоненты
	template: '<span v-if="seen">Сейчас меня видно</span>',
	data: () => {
		return {
			seen: true
		};
	},
	created: function () {
	    setTimeout(() => {
	    	this.seen = false;
	    }, 2500);
	},
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
		message: 'Привет, Vue!',
		isInputDisabled: false,
	}
});

setTimeout(() => {
	app6.message = '<i><b>12345</b></i>';
	app6.isInputDisabled = true;
}, 1000);
