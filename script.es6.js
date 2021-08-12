
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';
import { ComponentNotice } from './component.notice.js';

var LocalComponentMikrofrontend = {
	props: [
		'n',
	],
	data: function () {
		return {

		};
	},
	methods: {
		alert: function (msg) {
			alert(msg);
		},
		warn: function (message, event) {
		    if (event) {
		    	event.preventDefault();
		    	message += ' ' + event.target.textContent;
		    }
		    alert(message);
		}
	},
	template: `
		<div>
			<b @click="alert(n)">Повторяющееся</b>
			<button type="submit" @click="warn(n, $event)">сообщение</button> <u>{{ n }}</u><br>
		</div>
	`
};

Vue.component('custom-input', {
	props: [
		'value',
		'placeholder',
	],
	template: `
		<input
		  :placeholder="placeholder"
	      :value="value"
	      @input="$emit('input', $event.target.value)"
	    >
	`
});

Vue.component('app-nav', {
	template: '<h1>{{ message }}</h1>',
	data: () => {
		return {
			classList: null,
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

Vue.component('todo-item', {
	// Компонент  принимает входной параметр.
	props: [
	  	'todo',
	  	'prefix',
	  	'idx',
	],
	template: `
		<li :id="'js-todo-item-' + todo.id">
			{{ prefix }} [{{ idx }}]
			<ul id="v-for-object" class="demo">
				<li v-for="(value, name, index) in todo">
			    	<i>{{ index + 1}}.</i> {{ getTitle(name) }}: {{ value }}
			    	<button @click="$emit('eventforparentcomponent', index, name)">[+]</button>
				</li>
			</ul>
		</li>
	`,
	methods: {
		getTitle: function (code) {
			switch (code) {
				case 'id':
					return 'Идентификатор';
				case 'text':
					return 'Название';
				default:
					return '';
			}
		},
		test1: function (event) {
			console.log(event.target);
		}
	}
});

Vue.component('app-content', {
	template: `
		<div>
			<ol @click="processTodos">
				<todo-item
					v-for="(item, index) in todos"
					:todo="item"
					:key="item.id"
					class="selected removed"
					:prefix="prefix"
					:idx="index"
					@eventforparentcomponent="testEventForParentComponent1"
				></todo-item>
			</ol>

			<h3>Total + 1: {{ todos.length + 1 }}</h3>
			<h4>{{ todos.length > 3 ? 'todos.length > 3' : 'todos.length <= 3' }}</h4>
		</div>
	`,
	data: () => {
		return {
			prefix: ' ----> ',
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
	},
	methods: {
		processTodos: function (event) {
			console.log('processTodos', event);
			this.todos.sort((v) => Math.random() > 0.5);
		},
		testEventForParentComponent1: function (index, name) {
			console.log(['testEventForParentComponent1', index, name]);
		},
	},
});

Vue.component('app-view', {
	components: {
		'component-notice': ComponentNotice,
	},
	template: `
		<div>
			<slot></slot>
			<br>

			<component-notice
				:this-is-message="message + ' '"
				:font-size="9"
				:data="['?', '?', '?']"
				:data2="{ colored: true }"
			></component-notice>

			<template v-if="seen" :[someAttr]="message" @[eventName]="onClick">
				<p>{{ message }}</p>
				<p>Абзац 2</p>
	  			<p>Абзац 3</p>
			</template>
			<template v-else-if="Math.random() > 0.5">
				<big>Какой-то баг...</big>
			</template>
			<template v-else>
				<b>Содержимое</b> <i>скрыто</i>
			</template>
		</div>
	`,
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
		onClick: function (event) {
			this.reverseMessage();
			this.eventName = null;
			this.someAttr = 'title';
			console.log(event);
		},
		reverseMessage: function () {
			this.message = this.reversedMessage;
		}
	}
});

var app = new Vue({
	el: '#app',
	data: {
	},
	computed: {
		classList: function () {
			return {
				selected: true,
				removed: true
			};
		},
	},
});

var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'Привет, Vue.js!',
		isActive: false,
		classSelected: 'selected',
		classRemoved: 'removed',
		showForm: false,
		checked: false,
	},
	components: {
		'component-mikrofrontend': LocalComponentMikrofrontend,
	},
	created: function () {
	    setTimeout(() => {
	    	this.showForm = true;
	    }, 1500);
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
		onClick1: function (event) {
			console.log(event);
			this.reverseMessage();
			this.isActive = !this.isActive;
		},
		alert: function (msg) {
			alert(msg);
		},
		warn: function (message, event) {
		    if (event) {
		    	event.preventDefault();
		    	message += ' ' + event.target.textContent;
		    }
		    alert(message);
		}
	}
});

var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'Привет, Vue!',
		isInputDisabled: false,
		firstName: '',
		lastName: '',
		activeColor: 'green',
		fontSize: 18,
		fontWeight: 'normal',
		loginType: 'username',
		userName: 'test5',

		sets: [
			[ 1, 2, 3, 4, 5 ],
			[6, 7, 8, 9, 10]
		],
		numbers: [ 1, 2, 3, 4, 5 ],
	},
	watch: {
	    // эта функция запускается при любом изменении вопроса
	    message: function (newValue, oldValue) {
			console.log('ajax search: ', newValue, oldValue);
	    },
	    userName: function (newValue, oldValue) {
	    	console.log(newValue + ' -> ' + oldValue);
	    },
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
		},
		styleList: function () {
			return {
				'font-size': '12px',
				'color': 'orange',
				'text-decoration': 'underline',
			};
		},
		evenNumbers: function () {
			return this.numbers.filter((n) => n % 2 === 0);
		},
	},
	methods: {
		onClick: function (event) {
			this.fullName = this.message;
			this.activeColor = 'brown';
			this.fontSize = 24;
			this.fontWeight = 'bold';
			this.loginType = this.loginType == 'username'? '' : 'username';
			console.log(event);
		},
		even: function (numbers) {
			return numbers.filter((n) => n % 2 === 0);
		},
	}
});

setTimeout(() => {
	app6.message = '<i><b>12345</b></i>';
	app6.isInputDisabled = true;
}, 1000);

// dynamic component

Vue.component("tab-home", {
	data: function () {
		return {
			userName: 'user name 1',
		};
	},
	template: `
		<div>
			<label>Имя пользователя</label>
		  	<custom-input v-model="userName" :placeholder="'Введите имя пользователя'" key="username-input"></custom-input>
		</div>
	`
});

Vue.component("tab-posts", {
	template: `
		<div>
			<label>Email</label>
			<input placeholder="Введите адрес email" key="email-input">
		</div>
	`
});

Vue.component("tab-archive", {
	template: `
		<div>
			PHP, HTML, MYSQL
		</div>
	`
});

new Vue({
	el: "#dynamic-component-demo",
	data: {
	  currentTab: "Home",
	  tabs: [
	  	"Home",
	  	"Posts",
	  	"Archive",
	  ]
	},
	computed: {
	  currentTabComponent: function () {
	    return 'tab-' + this.currentTab.toLowerCase();
	  }
	}
});
