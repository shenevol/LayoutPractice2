var cloud = document.getElementById('cloud');
var news  = ["2017/1/15 Steamed buns","2017/1/16 Luwei","2017/1/17 Salad Boat"];
var newsIndex = 0;
var newsContainer = document.getElementsByClassName("news-container")[0];

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

function initialize(){
    newsContainer.children[0].innerHTML = news[newsIndex];
    newsIndex = (newsIndex + 1) % news.length;
    newsContainer.children[1].innerHTML = news[newsIndex];
}

initialize();

function updateNewsFeed(){
    var newNode = document.createElement("div");
    newsIndex = (newsIndex + 1) % news.length;
    newNode.innerHTML = news[newsIndex];
    newNode.classList.add("news-feed");
    newsContainer.appendChild(newNode);
}

function moveNewsFeed(){
    newsContainer.classList.add("moving");
    setTimeout( function(){
        newsContainer.classList.remove("moving");
        newsContainer.removeChild(newsContainer.children[0]);
    }, 500);
}


setInterval(function(){
    moveNewsFeed();
    updateNewsFeed();
}, 3000);