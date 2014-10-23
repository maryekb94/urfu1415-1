requirejs.config({
    "baseUrl": "js",
    "paths": {
      "jquery": "http://yastatic.net/jquery/2.1.1/jquery.min"
    }
});
requirejs(["main"]);