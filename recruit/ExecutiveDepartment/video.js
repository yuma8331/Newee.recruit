<script type="text/javascript">
(function($) {
	var id_values = [];
	var duration = 'normal';

	$('video').mediaelementplayer({
		flashName: 'flashmediaelement.swf'
	});

	$('.mejs-video:not(:first)').css('display', 'none');

	for(var i = 0; i < $('.mejs-video').length; i++) {
		id_values.push($('.mejs-video video').eq(i).attr('id'));
	}

	$('video#' + id_values[0]).on('loadeddata', function(){
		$(this).get(0).play();
	});


	$.each(id_values, function(i, value){
		$('video#' + id_values[i]).on('ended', function(){
			if($('.mejs-video:last').css('display') !== 'block') {
				$('.mejs-video').eq(i).fadeOut(duration, function(){
					$(this).next().fadeIn(duration, function(){
						$('video#' + id_values[i+1]).get(0).play();
					})
				});
			} else {
				$('.mejs-video:last').fadeOut(duration, function(){
					$('.mejs-video:first').fadeIn(duration, function(){
						$('video#' + id_values[0]).get(0).play()
					})
				});
			}
		});
	});


})(jQuery);
