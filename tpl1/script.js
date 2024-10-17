
var app1 = BX.namespace('Application1');

//const BitrixVue = BX.Vue3.BitrixVue;
const {
	BitrixVue,
	ref,
	//h,
	//reactive
} = BX.Vue3;

//console.log(h, ref, reactive);

const ButtonCounter = {
	data()
	{
		return {
			count: 0
		}
	},
	template: '#tpl1-ButtonCounter', // TODO!!! подставлять префикс расширения автоматически
};

const ButtonCounter2 = BitrixVue.mutableComponent('ui-button-counter', {
	data()
	{
		return {
			count: 0
		}
	},
	template: '#tpl1-ButtonCounter2',
});

const LoadingComponent = {
	template: '#tpl1-Loading',
};

const ErrorComponent = {
	template: 'tpl1-Error',
};

app1.mount = function (htmlId)
{
	BitrixVue.createApp({
		components: {
			ButtonCounter,
			ButtonCounter2,
			AudioPlayer: BitrixVue.defineAsyncComponent('ui.vue3.components.audioplayer', 'AudioPlayer', {
				loadingComponent: LoadingComponent,
				delay: 2000,
				errorComponent: ErrorComponent,
				timeout: 5000,
			})
		},

		// new
		setup() {
			const counter = ref(0)
			const show = ref(false)

			const increment = () => counter.value++

			setInterval(increment, 1000)

			return {
				counter,
				show,
			}
		},

		// old
		/*
		data()
		{
			return {
				counter: 0
			}
		},
		mounted()
		{
			setInterval(() => {
				this.counter++
			}, 1000)
		},
		*/

		template: '#tpl1-template'

	}).mount(htmlId);
};
