$(function(){
  /* 首页-成功案例跑马灯 */
  var caseNow = 4;
  var caseNum = $(".case-cont li").length;
  function gotoCase(index){
    if(index>caseNum){
      caseNow = caseNum;
      return;
    }
    if(index<4){
      caseNow = 4;
      return;
    }
    $(".case-cont ul").animate({
      marginLeft : -270*(index-4)
    },800)
  }
  $(".jt-next").click(function(){
    gotoCase(++caseNow);
  });
  $(".jt-pre").click(function(){
    gotoCase(--caseNow);
  });
  /* 首页-成功案例跑马灯END */
});