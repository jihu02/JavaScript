var num = prompt('구구단 몇 단을 볼까요?','1~9의 숫자 입력');

//입력 검사
if(num == '' || isNaN(num)){ // isNaN=isNumber
	alert('올바른 값을 입력하세요');
} else if(num<1 || num>9){
	//구구단 범위를 체크
  alert('1에서 9까지 입력할 수 있습니다');
} else{
	for(var i=1; i< 10; i++){
  	document.write(num + ' * ' + i + ' = ' + num*i + '<br>');
  }
}