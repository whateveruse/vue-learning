
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

setTimeout(() => {
	app.message = 'новое сообщение';
}, 1000);

setTimeout(() => {
	app2.message = 'новое значение [' + Math.ceil(50 + Math.random() * 90) + ']';
}, 500);