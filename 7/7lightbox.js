var indicator = document.querySelectorAll('.indicator button');
//querySelectorAll() : css선택자 방식으로 요소를 지정할 수 있음
var lightbox = document.querySelector('#lightbox');
var block = document.querySelector('#block'); //라이트 박스 배경

//라이트 박스 표시
function lightbox_open(num){
	lightbox.setAttribute('class', 'active'); //이미지 목록을 클릭했을 때 css에서 라이트박스 표시 위해 'active'추가
	block.setAttribute('class', 'active');//라이트 박스가 열릴경우 class='active'를 추가해 라이트 박스용 배경 표시
	change_img(num);//이미지 표시
	indicator[num-1].focus();
}

//라이트 박스 닫기
function lightbox_close(){
	lightbox.removeAttribute('class');
	block.removeAttribute('class');//라이트 박스가 닫힐 경우 클래스를 제거해 라이트 박스용 배경이 표시되지 않도록
}

function change_img(val){
	var imgs = document.querySelectorAll('figure > img');

	for(var i=0; i<imgs.length; i++){//기존 클래스 초기화
		imgs[i].removeAttribute('class');
	}
	imgs[val-1].setAttribute('class','active');//지정된 이미지 배열에 새로운 클래스 적용해 해당 이미지 표시되도록
}
