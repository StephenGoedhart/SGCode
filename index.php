<!DOCTYPE html>
<html>
  <head>
    <!-- CSS source -->
    <link href="vendors/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="vendors/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <link href="vendors/resetCss/reset.css" rel="stylesheet">
    <link href="source/css/style.css" rel="stylesheet">
    <!-- SEO metadata -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="copyright" content="SGCode is a registered trademark of SGCode">
    <meta name="description" content="Stephen Goedhart's portfolio website.">
    <meta name="keywords" content="stephen, goedhart, portfolio, code, programming, design, sg, sgcode">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div class="container-fluid">

      <header class="row">
        <div id="md-menu" class="col-sm-5 col-md-5 col-lg-5 height-md-1 bg-warning">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My work</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div class="col-xs-3 col-sm-2 col-md-2 col-lg-2 height-xs-2">
          <div class="logo"></div>
        </div>
        <div class="col-xs-2 height-xs-1 bg-danger"> </div>
      </header>

      <div id="mobile-nav-main">
        <div id="mobile-nav-element-index-1" class="mobile-nav-element text-center"><i class="fa fa-home"></i></div>
        <div id="mobile-nav-element-index-2" class="mobile-nav-element text-center"><i class="fa fa-home"></i></div>
        <div id="mobile-nav-element-index-3" class="mobile-nav-element text-center"><i class="fa fa-home"></i></div>
      </div>

    <div class="row">
        <div class="hidden-xs hidden-sm col-md-12 col-lg-12 height-md-1 height-lg-1"></div>
        <div class="banner col-xs-12 col-sm-12 col-md-12 col-lg-12 bg-primary height-xs-4 height-sm-4 height-md-6 height-lg-6 height-xl-6">banner</div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="height:800px;">Portfolio</div>
    </div>]

    <footer></footer>
    <!-- javascript scripts -->
      <script>
        Notification.requestPermission();
        var o = new Notification("test");
        setTimeout(function(){
          if(Notification.permission == "granted"){
            var o = new Notification("test", {
              body: "this is the body"
            });
          }
        },10000);
      </script>
    <script src="vendors/jQuery-3.2.1/jquery-3.2.1.min.js"></script>
    <script src="vendors/bootstrap-4.0.0-alpha.6-dist/js/bootstrap.min.js"></script>
  </body>
</html>
