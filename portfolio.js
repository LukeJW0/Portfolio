window.onload = function () { // When window loads
    handleScroll();
};

function handleScroll() {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    let observer = new IntersectionObserver(callback, options);

    let target = '.js-scroll';
    document.querySelectorAll(target).forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).animate({ 'opacity': '0' }, 0);
            $(entry.target).animate({ 'opacity': '1' }, 500);
        } else {
            $(entry.target).animate({ 'opacity': '0' }, 500);
        }
    });
};

function openLink(link) {
    var win = window.open(link, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
}

$(document).ready(function () {

    $('#frontgithub').on('click', function () {
        openLink('https://github.com/LukeJW0')
    });

    $('#frontportfolio').on('click', function () {
        $('.container').css("overflow", "auto");
        $('.one').css('display', 'none');
    });

    $('#typetestgithub').on('click', function () {
        openLink('https://github.com/LukeJW0/TypeTest')
    });

    $('#typetestwebsite').on('click', function () {
        openLink('https://lukejw0.github.io/TypeTest/')
    });

    $('#wordleygithub').on('click', function () {
        openLink('https://github.com/LukeJW0/Wordley')
    });

    $('#wordleywebsite').on('click', function () {
        openLink('https://lukejw0.github.io/Wordley/')
    });
});