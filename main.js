window.onload = function(){

  function loadDoc() {
    var xhttp;
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var adRecords = JSON.parse(this.responseText);
        console.log(adRecords);
        console.log(adRecords[0]['image_link']);
        var randomRecord = adRecords[Math.floor(Math.random() *adRecords.length)];
        console.log(randomRecord);
        console.log(randomRecord['image_link']);
        console.log(randomRecord['target_link']);

        var targetElement = document.getElementById('scriptForAds').getAttribute('div-id');
        var defaultWidth = document.getElementById('scriptForAds').getAttribute('data-width');
        var defaultHeight = document.getElementById('scriptForAds').getAttribute('data-height');
        var img = new Image();
        img.src = randomRecord['image_link'];
        img.alt = "image";
        img.title = "image";
        img.style.width = '100%';
        img.style.height = '100%';
        if (screen.width < 500) {
          var closeImage = new Image();
          closeImage.src = "http://imgur.com/uz5yEpq.jpg";
          closeImage.alt = "close";
          closeImage.title = "close";
          closeImage.style.width = '100px';
          closeImage.style.height = '100px';

          var closeButton = document.createElement('a');
          closeButton.href = "javascript:void(0);";
          closeButton.style.zIndex = 999;
          closeButton.style.position = 'absolute';
          closeButton.style.top = 10;
          closeButton.style.right = 0;
          closeButton.onclick = function(){
            document.getElementById(targetElement).style.display = 'none';
          }
          closeButton.appendChild(closeImage);
          document.getElementById(targetElement).appendChild(closeButton);
        }
        var topPos = document.getElementById(targetElement).offsetTop;
        if (window.scrollY > 0)
        {
          var dt = Math.abs((Math.abs(document.getElementById(targetElement).getBoundingClientRect().top)) - window.scrollY);
        }
        else 
        {
          var dt = (document.getElementById(targetElement).getBoundingClientRect().top);
        }
        
        var dh = parseInt(defaultHeight.substring(0, defaultHeight.length - 2));
        window.onscroll = function()
        { 
          var distanceToTop = document.getElementById(targetElement).getBoundingClientRect().top;

          if (screen.width < 500) {
            document.getElementById(targetElement).style.position = 'fixed';
            document.getElementById(targetElement).style.bottom = 0;
            document.getElementById(targetElement).style.width = '100%';
            document.getElementById(targetElement).style.height = '25%';
            document.getElementById(targetElement).style.zIndex = 999;
            document.getElementById(targetElement).style.left = 0;  
          }
          else
          {
            if (distanceToTop <= 0 && window.scrollY > topPos && dt < window.scrollY)
            { 
              document.getElementById(targetElement).style.width = defaultWidth;
              document.getElementById(targetElement).style.height = defaultHeight;
              document.getElementById(targetElement).style.position = 'fixed';
              document.getElementById(targetElement).style.top = 0; 
            }
            else{
            if (window.scrollY < (topPos + dh))
            { 
              document.getElementById(targetElement).style.position = 'static';
            }}
          }

        }

        var aTag = document.createElement('a');
        aTag.href = randomRecord['target_link'];
        aTag.appendChild(img);

        document.getElementById(targetElement).appendChild(aTag);
      }
    };

    xhttp.open("GET", "https://stick-ad.herokuapp.com/stick/get_ads", true);
    xhttp.send();
  }
  loadDoc();  
}