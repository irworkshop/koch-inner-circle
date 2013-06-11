/***
Build a 3x2 grid of images, showing important people to the Koch brothers.

Require:
 - jQuery
 - fancybox
 - Tabletop.js
 - underscore.js

***/

var TABLE = {
    key: '0AprNP7zjIYS1dGV3ZGUzY2oxUS1OUzZ3bVNxQjd1UHc',
    simpleSheet: true,
    callback: render,
    debug: (location.hostname === "localhost")
};

var defaults = {
    name: "",
    currentorganization: "",
    currenttitle: "",
    pastpositions: "",
    thumbnail: "http://placehold.it/200x250",
    image: "http://placehold.it/400x500"
}

function render(data, tabletop) {
    // build our graphic
    window.data = data;
    console.log(data);

    var root = $('#koch-inner-circle')
      , template = $('#image-template').html()
      , template = _.template(template);

    _.each(data, function(d) {
        for (var key in d) {
            if (!d[key]) {
                d[key] = defaults[key];
            }
        }
        root.append(template(d));
    });

    fancybox();
}

function fancybox() {
    // apply fancybox
    $('.koch-image a').fancybox();
}

var tabletop = new Tabletop(TABLE);