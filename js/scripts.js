document.addEventListener('DOMContentLoaded', function() {
    toggleLoadingElements(document.querySelector('#hero'), 500);

    var windowHeight = window.outerHeight;
    var sections = document.querySelectorAll('.content-sections');
    var sectionPositions = [];
    for(var i = 0; i < sections.length; i++) {
        var topPos = sections[i].offsetTop;
        sectionPositions[i] = topPos;
        if(windowHeight > topPos) { // section is in the screen
            toggleLoadingElements(sections[i], 500);
        } else if(window.scrollY + 500 > topPos) {
            toggleLoadingElements(sections[i], 500);
        }
    }

    window.addEventListener('scroll', function() {
        for(var i = 0; i < sections.length; i++) {
            var isLoaded = sections[i].getAttribute('loaded');
            if(window.scrollY + 500 > sectionPositions[i] && isLoaded != "true") {
                toggleLoadingElements(sections[i], 0);
            }
        }
    });

    function toggleLoadingElements(elem, delay) {
        setTimeout(function() {
            elem.className = ('nl il'); // is loaded
            elem.setAttribute('loaded', 'true');
        }, delay);

        setTimeout(function() {
            elem.className = ('il'); // not loaded
        }, delay * 2);
    }
});
