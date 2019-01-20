function calender(new_year, new_month){
	//var new_year = 2018, new_month = 5,
		//특정 연월을 시작일부터 조회(year, month, date)
	var	d = new Date(new_year, new_month-1, 1),
		//월별 일수 구하기
		d_length = 32 - new Date(new_year, new_month-1, 32).getDate(),
		year = d.getFullYear(),
		month = d.getMonth(),
		date = d.getDate(),
		day = d.getDay();

	//caption 영역 날짜 표시 객체
	var caption_year = document.querySelector('.year'),//()안에 클래스 이름
		caption_month = document.querySelector('.month');
	var	start_day = document.querySelectorAll('tr td');//()안에 태그 이름
		//start_day는 날짜가 표시될 데이터 셀의 객체를 지정

	//테이블 초기화
	for(var i = 0; i < start_day.length; i++){
		start_day[i].innerHTML = '&nbsp;';
	}

	//한달 치 날짜를 테이블에 시작 요일부터 순서대로 표시
	for (var i = day; i < day + d_length; i++) {
		start_day[i].innerHTML = date;
		date++;
	}

	//caption 연도, 월 표시
	caption_year.innerHTML = year;
	caption_month.innerHTML = month + 1;
}

(function(){
	var prev = document.getElementById('prev'),
		next = document.getElementById('next'),
		year = new Date().getFullYear(),
		month = new Date().getMonth() + 1;

	calender(year,month);
	prev.onclick = function(){
		calender(year, --month);
		console.log(month);
	};
	next.onclick = function(){
		calender(year, ++month);
		console.log(month);
	};
})();