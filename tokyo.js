var cloud = document.getElementById('cloud');
var news  = ["2017/1/15 Steamed buns","2017/1/16 Luwei","2017/1/17 Salad Boat"];


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
var newsIndex = 0;
var newsFrame = document.getElementsByClassName("now-news-feed")[0];
var nextNewsFrame = document.getElementsByClassName("next-news-feed")[0];

function updateNewsFeed(){
    newsFrame.innerHTML = news[newsIndex % news.length];
    newsIndex++;
    nextNewsFrame.innerHTML = news[newsIndex % news.length];
    setTimeout(moveNewsFeed, 5000);
}

function moveNewsFeed(){
     newsFrame.classList.add("move-out");
     // setTimeout( function ( ){
     //    newsFrame.parentNode.removeChild(newsFrame);},
     // 50);
     nextNewsFrame.classList.add("move-in");
    
    // newsFrame.classList.remove("now-news-feed");
}
// xsetTimeout(function(){  
//     showNews.classList.add("moving");
//     console.log(showNews.nextSibling);
//     showNews.classList.remove("news-feed");

// }, 5000);

updateNewsFeed();



//setTimeout(moveNews, 7000);