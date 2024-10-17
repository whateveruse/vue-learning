<?php

use Bitrix\Main\Page\Asset;
use Bitrix\Main\Page\AssetLocation;

?>

TEST TEMPLATE:

<script type="text/x-template" id="tpl1-template">
	<div>
		Counter: {{ counter }}
	</div>
	<p>
		<ButtonCounter/> | <ButtonCounter2/>
	</p>
	<p>
		<button @click="show=!show">Toggle player</button>
		<AudioPlayer v-if="show" src="https://www.youtube.com/embed/oHBga-h1lAA" style="width: 300px; margin: 10px 0"/>
	</p>
</script>

<script type="text/x-template" id="tpl1-ButtonCounter">
	<button @click="count++"><b>Counter</b>: {{ count }} clicks</button>
</script>

<script type="text/x-template" id="tpl1-ButtonCounter2">
	<button @click="count++"><b>Other</b> counter: {{ count }} clicks</button>
</script>

<script type="text/x-template" id="tpl1-Loading">
	<div>
		Loading...
	</div>
</script>

<script type="text/x-template" id="tpl1-Error">
	<div>
		Error while loading...
	</div>
</script>

<?php

return [
	'js' => './script.js',

	'rel' => [
		'ui.vue3',
	],

	'oninit' => function ()
	{
		//echo '<pre>TEST INIT: '; var_dump(func_get_args()); echo '</pre>';

		//TODO!!!

		//Asset::getInstance()->addString('...', true, AssetLocation::AFTER_JS);
	},
];
