<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>

<?php

use Bitrix\Main\UI\Extension;

Extension::load('vue-learning.tpl1');

?>

<h3>App1</h3>

<div id="application1">-1</div>
<script>
	BX.ready(function () {
		BX.Application1.mount('#application1');
	});
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>