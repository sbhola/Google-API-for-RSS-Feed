var xmlhttp;
var requestObj;
var rssoutput = " <h2> ";

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

            //var rssoutput = "<h2>This is the RSS FEED you requested:</h2><ul>";

            var thefeeds = feedpointer.responseData.feed.entries;
            rssoutput += feedpointer.responseData.feed.title;
            rssoutput += " </h2 </br> ";
            rssoutput += feedpointer.responseData.feed.description;
            rssoutput += "<ul>"

            //for (var i = 0; i < thefeeds.length; i++)
            //    rssoutput += "<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></br><p> " + thefeeds[i].contentSnippet + "</p></li>";
            //rssoutput += "</ul>";

            for (var i = 0; i < thefeeds.length; i++)
                rssoutput += "<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a> " + thefeeds[i].publishedDate + " </br> <p>" + thefeeds[i].contentSnippet + "</p></li>";
            rssoutput += "</ul>";

            var feedcontainer = document.getElementById("feed");
            feedcontainer.innerHTML = rssoutput;


        }
    }


    xmlhttp.open("GET", rssUrl, true);

    xmlhttp.send();

}


function calculate() {
    var urlRss = document.getElementById("InputURL").value;
    var fullUrl = "http://googlefeed.appacitive.com/?q=" + urlRss;
    RSS(fullUrl);
}