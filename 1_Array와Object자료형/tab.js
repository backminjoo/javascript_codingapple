$(document).ready(function(){
   
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
      //클릭한 li 태그의 data 속성을 가져와서 변수  tab_id에 저장
   
      $('ul.tabs li').removeClass('current');
      //모든 li태그에서 current 클래스 제거
      $('.tab-content').removeClass('current');
    //모든 tab-content 클래스를 가진 요소에서 current 클래스 제거
      $(this).addClass('current');
      //클릭한 li 태그에 current 클래스 추가
      $("#"+tab_id).addClass('current');
      //변수 tab_id에 해당하는 id를 가진 요소에 current 클래스 추가
      
    })
   
  })
   