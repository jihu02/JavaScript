$(function(){

	// 메모장
	var sticky_html =
		'<div class="sticky">' +
			'<nav class="top_nav">' +
				'<a href="#" class="add"><i class="fa fa-plus"></i></a>' +
				'<a href="#" class="save"><i class="fa fa-floppy-o"></i></a>' +
				'<div class="right">' +
					'<a href="#" class="get"><i class="fa fa-list"></i></a>' +
					'<a href="#" class="del"><i class="fa fa-times"></i></a>' +
				'</div>' +
			'</nav>' +
			'<textarea name="txt" class="txt"></textarea>' +
			'<nav class="side_nav"><ol></ol></nav>' +
		'</div>';

    /************************************************************/

    //메모장 초기화
    $('#sticky_wrap').append(sticky_html);
});
