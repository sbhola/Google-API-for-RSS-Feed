var xmlhttp;
var requestObj;
var rssoutput = " <h3> ";

window.onload = function () {
    var clickObj = document.getElementById("GO");
    clickObj.onclick = calculate;
}

function RSS(rssUrl) {

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var responseObj = xmlhttp.responseText;
            var feedpointer = JSON.parse(responseObj);           

            var thefeeds = feedpointer.responseData.feed.entries;
            rssoutput += feedpointer.responseData.feed.title;
            rssoutput += " </h3 </br> ";
            rssoutput += "<p class=\"feedDescription\">";
            rssoutput += feedpointer.responseData.feed.description;
            rssoutput += "</p>";
            rssoutput += "<ul>"
            parseFeed(thefeeds);
            
            //for (var i = 0; i < thefeeds.length; i++)
            //    rssoutput += "<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a> " + thefeeds[i].publishedDate + " </br> <p>" + thefeeds[i].contentSnippet + "</p></li>";
            //rssoutput += "</ul>";

            //var feedcontainer = document.getElementById("feed");
            //feedcontainer.innerHTML = rssoutput;
        }
    }

    xmlhttp.open("GET", rssUrl, true);
    xmlhttp.send();
}

function parseFeed(thefeeds) {
    for (var i = 0; i < thefeeds.length; i++)
        rssoutput += "<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a> " + "<p class=\"pull-right\">" + thefeeds[i].publishedDate + "</p>" + " </br> <p>" + thefeeds[i].contentSnippet + "</p></li>";
    rssoutput += "</ul>";

    var feedcontainer = document.getElementById("feed");
    //feedcontainer.appendChild(rssoutput);
    //var childNode = document.createElement("");
    feedcontainer.innerHTML = rssoutput;    
}

function calculate() {
    var urlRss = document.getElementById("InputURL").value;
    var fullUrl = "http://googlefeed.appacitive.com/?q=" + urlRss;
    RSS(fullUrl);
}