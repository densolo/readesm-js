export const HTML_TEMPLATE: string = 
`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US">

<head>
	<title>$title</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<style type="text/css">
		body				{ font-family:sans-serif }
		table				{ border-style:solid; border-collapse:collapse; border-width:2px }
		tr				{ border-top-width:1px; border-top-style:dashed }
		tr:hover			{ border-style:outset; background-color:#EEE }
		.center				{ text-align:center }
		th				{ text-align:left; vertical-align:top }
		td, th.max, th.avg, th.min	{ text-align:left; border-left:1px dotted }
		caption				{ font-size:0.5em }
		small				{ font-size:0.8em }
	</style>
	<script type="text/javascript">
		function toggle_visibility(id) {
			var toggledContent = document.getElementById('toggled' + id);
			var link = document.getElementById('link' + id);
			if (toggledContent.style.display != 'none') {
				toggledContent.style.display = 'none';
				link.innerHTML = '$show';
			} else {
				toggledContent.style.display = 'block';
				link.innerHTML = '$hide';
			}
			return false;
		}
	</script>
</head>
<body>
<h1>$title</h1>
$links
$content
<hr/>
Report generated with <a href="https://github.com/densolo/readesm-js" target="_blank">readesm-js</a> <small>($version)</small>.
</body>
</html>
`

