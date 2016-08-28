setInterval(function hidePosts() {
    var elements = document.querySelectorAll('[data-testid^=fbfeed_story]');
    for (var i = 0; i < elements.length; i++) {
        var x = elements[i].querySelectorAll('[class^=uiStreamSponsoredLink]'); // Sponsored links
        if (x.length > 0) {
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
}, 2000);
