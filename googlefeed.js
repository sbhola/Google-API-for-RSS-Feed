google.load("feeds", "1")	
var feedlimit=10;
//var rssoutput = "<h2>Latest Feeds:</h2><ul>"
var rssoutput = " <h2> ";


window.onload=function(){
	var clickevent = document.getElementById("GO");
	clickevent.onclick=rssfeedsetup;}

function rssfeedsetup(){
	var feedurl=document.getElementById("InputURL").value;
	var feedpointer = new google.feeds.Feed(feedurl);
	feedpointer.setNumEntries(feedlimit);
	feedpointer.load(displayfeed);
}

//function displayfeed(result){
//	var feedcontainer=document.getElementById("feed");
//	if (!result.error) {
//	    var thefeeds = result.feed.entries;
//	    console.log(thefeeds);
//	    for (var i = 0; i < thefeeds.length; i++)
//	        rssoutput += "<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>";
//	    rssoutput += "</ul>";
//	    feedcontainer.innerHTML = rssoutput;
//	}
//	else
//	    alert("Error fetching feeds!");
//}


function displayfeed(result) {
    var feedcontainer = document.getElementById("feed");
    if (!result.error) {
        var thefeeds = result.feed.entries;
        //console.log(thefeeds);
        //console.log(result);
        console.log(result.feed);
        rssoutput += result.feed.title;
        rssoutput += " </h2 </br> ";
        rssoutput += result.feed.description;
        rssoutput += "<ul>"
        for (var i = 0; i < thefeeds.length; i++)
            rssoutput += "<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a> " +  thefeeds[i].publishedDate + " </br> <p>" + thefeeds[i].contentSnippet + "</p></li>";
        rssoutput += "</ul>";
        feedcontainer.innerHTML = rssoutput;
    }
    else
        alert("Error fetching feeds!");
}