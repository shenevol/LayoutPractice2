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


var showNews = document.getElementsByClassName("news-feed")[0];
var rightShift = 0;
var movemont = 10;

function moveNews(){    
    if(rightShift > 180){
        return;
    }
    var newfeedStyle = window.getComputedStyle(showNews).getPropertyValue('right');
    rightShift += movemont;
    movemont = movemont * 1.5;
    right = rightShift.toString() +'px';
    showNews.style.setProperty('right', right);
    setTimeout(moveNews, 80);
}



setTimeout(moveNews, 7000);