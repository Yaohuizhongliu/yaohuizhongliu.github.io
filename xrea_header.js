(function(){
  //add css
  // var newStyle = document.createElement("link");
  // newStyle.href = 'https://cache1.value-domain.com/xrea_header.css?5';
  // newStyle.type = 'text/css';
  // newStyle.rel = 'stylesheet';
  // document.getElementsByTagName('head')[0].insertBefore(newStyle, null);

  var func = function(){
    // var body = document.body;
    // if (body == undefined) {return false;}
    var parent = document.getElementsByTagName("body")[0];
    if (parent === null) {return false;}
    //console.log(body,parent);

    var elements = [
        '<a href="https://www.value-domain.com/guide/setregist/?adref=xrea_ad&utm_source=xrea&utm_medium=banner&utm_campaign=xrea_ad" target="_blank" rel="nofollow" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;"><img src="https://www.value-domain.com/assets/img/guide/setregist/bnr_xrea.png" alt="コアサーバーV2プランご契約でドメイン更新費用が永久無料" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;max-width:468px;max-height:60px;vertical-align:bottom;"></a>'
    ];
    var randElm = elements[Math.floor(Math.random() * elements.length)];

    var newBox = document.createElement("div");
    newBox.setAttribute('id', 'vdbanner');
    newBox.setAttribute("style","display:block!important;position:relative!important;top:0!important;left:0!important;margin:10px 0 !important;padding:0!important;text-align:center!important;");
    newBox.innerHTML = randElm;
    parent.insertBefore(newBox, parent.firstChild);
  };

  try {
    window.addEventListener("load", func, false);
  }
  catch(e) {
    window.attachEvent("onload", func);
  }
})();