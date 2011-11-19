var t;

function loopLakers()
{
	$('#header > h1').toggleClass('purple');
	$('#header > h1').toggleClass('yellow');

	t = setTimeout("loopLakers()",1000);
}

$(document).ready(function(){
	$('#header > h1').hover(
		function()
		{
			$(this).addClass('yellow');
			loopLakers();
		},
		function()
		{
			clearTimeout(t);
			$('#header > h1').removeClass('purple yellow');
		}
	);
});

