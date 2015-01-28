({
    baseUrl: ".",
    mainConfigFile: "www/main.js",
    name: "bower_components/almond/almond",
    include: "www/main",
    out: "www/main-built.js",
    paths: {
        jquery: "empty:"
    },
    generateSourceMaps: true,
    preserveLicenseComments: false,
    optimize: "uglify2",
})
