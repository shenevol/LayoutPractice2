var cloud = document.getElementById('cloud');

function showCloud() {
    var y = window.scrollY;
    if ( y >= 50) {
        cloud.style.visibility = 'visible';
    } else {
        cloud.style.visibility = 'hidden';
    }
}

function scrollToTop() {
    var y = window.scrollY;

    if (y < 10) {
        window.scrollTo(0, 0);
        return;
    }

    window.scrollTo(0, y / 2);
    setTimeout(scrollToTop, 20);
}

cloud.addEventListener('click', scrollToTop);

window.addEventListener('scroll', showCloud);
