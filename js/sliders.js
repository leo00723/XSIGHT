var $animslider = document.getElementById('anim-slider');
        var $animtoggle = document.getElementById('anim-toggle');
  
        $animtoggle.addEventListener('mouseover', function() {
          $animslider.setAttribute('class', 'slide-in');
          $animtoggle.setAttribute('class', 'rotate-cw');
        });
  
        $animslider.addEventListener('mouseout', function() {
          $animslider.setAttribute('class', 'slide-out');
          $animtoggle.setAttribute('class', 'rotate-acw');
        });
  
        $animslider.addEventListener('mouseover', function() {
          $animtoggle.setAttribute('class', 'rotate-cw');
          $animslider.setAttribute('class', 'slide-in');
        });
  
        var $vrslider = document.getElementById('vr-slider');
        var $vrtoggle = document.getElementById('vr-toggle');
  
        $vrtoggle.addEventListener('mouseover', function() {
          $vrslider.setAttribute('class', 'slide-in');
          $vrtoggle.setAttribute('class', 'rotate-cw');
        });
  
        $vrslider.addEventListener('mouseout', function() {
          $vrslider.setAttribute('class', 'slide-out');
          $vrtoggle.setAttribute('class', 'rotate-acw');
        });
  
        $vrslider.addEventListener('mouseover', function() {
          $vrtoggle.setAttribute('class', 'rotate-cw');
          $vrslider.setAttribute('class', 'slide-in');
        });

        var $renderslider = document.getElementById('render-slider');
        var $rendertoggle = document.getElementById('render-toggle');
  
        $rendertoggle.addEventListener('mouseover', function() {
          $renderslider.setAttribute('class', 'slide-in');
          $rendertoggle.setAttribute('class', 'rotate-cw');
        });
  
        $renderslider.addEventListener('mouseout', function() {
          $renderslider.setAttribute('class', 'slide-out');
          $rendertoggle.setAttribute('class', 'rotate-acw');
        });
  
        $renderslider.addEventListener('mouseover', function() {
          $rendertoggle.setAttribute('class', 'rotate-cw');
          $renderslider.setAttribute('class', 'slide-in');
        });

        var $iwslider = document.getElementById('iw-slider');
        var $iwtoggle = document.getElementById('iw-toggle');
  
        $iwtoggle.addEventListener('mouseover', function() {
          $iwslider.setAttribute('class', 'slide-in');
          $iwtoggle.setAttribute('class', 'rotate-cw');
        });
  
        $iwslider.addEventListener('mouseout', function() {
          $iwslider.setAttribute('class', 'slide-out');
          $iwtoggle.setAttribute('class', 'rotate-acw');
        });
  
        $iwslider.addEventListener('mouseover', function() {
          $iwtoggle.setAttribute('class', 'rotate-cw');
          $iwslider.setAttribute('class', 'slide-in');
        });