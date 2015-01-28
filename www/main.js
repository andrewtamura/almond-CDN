require.config({
    baseUrl: "www",
    shim: {
        jquery: {
            exports: "$"
        },
    },
    paths: {
        jquery: "//code.jquery.com/jquery-2.1.3.min.js",
    }

});

require(["jquery"], function($){
    $(body).append("Jquery");

});
