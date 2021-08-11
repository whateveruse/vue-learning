
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
		<span :title="message">
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
					:todo="item"
					:key="item.id"
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
	template: '<span v-if="seen" :[someAttr]="message" @[eventName]="onClick">{{ message }}</span>',
	data: () => {
		return {
			seen: false,
			someAttr: null,
			eventName: 'click',
			message: 'Сейчас меня видно',
		};
	},
	created: function () {
	    setTimeout(() => {
	    	this.seen = true;
	    }, 2500);
	},
	computed: {
		// геттер вычисляемого значения
		reversedMessage: function () {
			// `this` указывает на экземпляр vm
			return this.message.split('').reverse().join('');
		}
	},
	methods: {
		onClick: function () {
			this.reverseMessage();
			this.eventName = null;
			this.someAttr = 'title';
		},
		reverseMessage: function () {
			this.message = this.reversedMessage;
		}
	}
});

Vue.component('todo-item', {
  // Компонент todo-item теперь принимает
  // "prop", то есть входной параметр.
  // Имя входного параметра todo.
  props: ['todo'],
  template: `
  	<li :id="'js-todo-item-' + todo.id">
  		{{ todo.text }}
  	</li>
  `
});

var app = new Vue({
	el: '#app',
	data: {
	}
});

var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'Привет, Vue.js!',
		isActive: false,
		classSelected: 'selected',
		classRemoved: 'removed',
	},
	computed: {
		// геттер вычисляемого значения
		reversedMessage: function () {
			// `this` указывает на экземпляр vm
			return this.message.split('').reverse().join('');
		},
		classList: function () {
			return {
				active: this.isActive,
				'text-danger': this.hasError()
			}
		},
	},
	methods: {
		reverseMessage: function () {
			this.message = this.reversedMessage;
		},
		hasError: function () {
			var res = (Math.random() * 50);
			console.log(res);
			return res > 25;
		},
		onClick1: function () {
			this.reverseMessage();
			this.isActive = !this.isActive;
		},
	}
});

var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'Привет, Vue!',
		isInputDisabled: false,
		firstName: '',
		lastName: '',
	},
	watch: {
	    // эта функция запускается при любом изменении вопроса
	    message: function (newValue, oldValue) {
			console.log('ajax search: ', newValue, oldValue);
	    }
	},
	computed: {
		fullName: {
			get: function () {
				return this.firstName + ' ' + this.lastName;
			},
			set: function (newValue) {
				var names = newValue.split(' ');
				this.firstName = names[0];
				this.lastName = names[names.length - 1];
			}
		}
	},
	methods: {
		onClick: function () {
			this.fullName = this.message;
		}
	}
});

setTimeout(() => {
	app6.message = '<i><b>12345</b></i>';
	app6.isInputDisabled = true;
}, 1000);
