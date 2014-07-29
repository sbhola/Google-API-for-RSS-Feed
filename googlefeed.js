google.load("feeds", "1")
	
var feedlimit=10;
var rssoutput="<h2>Latest Feeds:</h2><ul>"


window.onload=function(){
	var clickevent = document.getElementById("GO");
	clickevent.onclick=rssfeedsetup;}

function rssfeedsetup(){
	var feedurl=document.getElementById("InputURL").value;
	var feedpointer=new google.feeds.Feed(feedurl)
	feedpointer.setNumEntries(feedlimit)
	feedpointer.load(displayfeed)
}

function displayfeed(result){
	var feedcontainer=document.getElementById("feed");
	if (!result.error){
	var thefeeds=result.feed.entries
	for (var i=0; i<thefeeds.length; i++)
	rssoutput+="<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
	rssoutput+="</ul>"
	feedcontainer.innerHTML=rssoutput
	}
	else
	alert("Error fetching feeds!")
	}