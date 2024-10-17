var lang= null;
function language(){
  var language=null;
  if (navigator.appName == 'Netscape'){
   language = navigator.language;
  }
  else{
   language = navigator.browserLanguage;
  }
  if (language.indexOf('en') > -1){
    lang = "en"
    // alert("yingwen");
  } 
  else if (language.indexOf('zh') > -1){
    lang = "zh"
    window.location.replace("index_cn.html")
  } 
  else{
    lang = "en"
    // alert("yingwen");
  }
}

language()