var $inp = $('form[name=cal]'); // forms 객체
var $input = $inp.find('input'); //form 후손 객체 정의
var $cls_btn = $('.cls_btn');
var $result_btn = $('.result_btn');
var $result = $inp.find('input[name=result]');//결과 창

// 함수 정의 --------------------------------------------------

//계산기 초기화
function clr(){
	$result.val(0);
}

//계산기 입력 처리 함수
function calc(value){
	//입력이 들어가면 0을 지움
  if($result.val() == 0){
  	$result.val('');
  }
  
 //입력 값을 결과창에 출력
 var val = $result.val() + value;
 $result.val(val);
}

//계산 결과 처리 함수
function my_result(){
	//var result = document.forms['cal']['result'];
  var calc = eval($result.val());
  
  //결과창에 표시
  $result.val(calc);
}

//이벤트 핸들러 ---------------------------------------------

//숫자 및 사칙연산 버튼
$('input').click(function(){
	var $input_value = $(this).val();
  
  //숫자와 사칙 연산자만 입력처리
  if($input_value != '=' && $input_value != 'clear'){
  	calc($input_value);
  }
});

$('.clr_btn').click(function(){
	clr();
});

$('.result_btn').click(function(){
	try{
  	my_result();
  }
  catch(err){
    $result.val('입력 오류');
  }
});



