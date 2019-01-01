//변수 초기화
var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('add-btn'); //목록추가버튼

for(var i = 0; i < li.length; i++){
	li[i].addEventListener('click',activeItem);
}

function activeItem(event){
	//클릭한 노드가 li이면
  if(event.target.nodeName == 'LI'){
  	title.innerHTML = event.target.innerText;
    
    //목록 스타일 초기화
    for(var i = 0; i < event.target.parentNode.children.length; i++){
    	event.target.parentNode.children[i].removeAttribute('class');
    }
    
    //클릭한 목록 스타일 지정
    event.target.setAttribute('class','active'); //클릭한 대상
  } // end if
  
	//해당 목록을 클릭하면 제목 영역에 표시
  title.innerHTML = this.innerText;
  this.setAttribute('class', 'active');
  
} // end function

//목록 추가
addBtn.addEventListener('click', function(){
 var txt = prompt('제목 입력');
 list.innerHTML += '<li>' + txt + '</li>';
})