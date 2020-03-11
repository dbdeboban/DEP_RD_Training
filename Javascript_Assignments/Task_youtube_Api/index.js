var searchBox = document.getElementById('searchBox');
var displayResult = document.getElementById('displayAllVid');
var maxResults = 15;
var currentToken = "CAoQAA"
var previousPageToken = '';
var nextPageToken = '';


searchBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

var Globalurl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&&maxResults=${maxResults}&q=${searchBox.value}`;



function searchBoxSubmit(urls) {
    var url = '';
    if (urls == undefined) {
        url = Globalurl;
    } else {
        url = urls;
    }
    fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        });
}

function previousResultSet() {
    var prevUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&&maxResults=${maxResults}&q=${searchBox.value}&pageToken=${previousPageToken}`;
    searchBoxSubmit(prevUrl);
}

function nextResultSet() {
    var nextUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&&maxResults=${maxResults}&q=${searchBox.value}&pageToken=${nextPageToken}`;
    searchBoxSubmit(nextUrl);
}



function displayData(data) {
    let count = 1;
    nextPageToken = data.nextPageToken;
    previousPageToken = data.prevPageToken;
    //e.firstElementChild can be used. 
    var child = displayResult.lastElementChild;
    while (child) {
        displayResult.removeChild(child);
        child = displayResult.lastElementChild;
    }

    data.items.forEach(element => {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "cardDiv");
        // cardDiv.setAttribute("style", "border-radius: 10px; max-width: 200px; display: flex;flex-direction: column; margin: 20px; padding: 10px; box-shadow: 0px 0px 10px 2px rgba(158, 158, 158, 0.75);-moz-box-shadow: 0px 0px 10px 2px rgba(158, 158, 158, 0.75);-webkit-box-shadow: 0px 0px 10px 2px rgba(158, 158, 158, 0.75);");
        var thumbImg = document.createElement("img");
        thumbImg.setAttribute("style", "");

        var title = document.createElement("a");
        title.setAttribute("id", `title-${count}`);

        var descriptionDiv = document.createElement("div");
        descriptionDiv.setAttribute("class", `descriptionDiv`);
        var description = document.createElement("p");
        description.setAttribute("id", `desc-${count}`);
        descriptionDiv.append(description);

        var channelName = document.createElement("p");
        channelName.setAttribute("style", "color: black; margin-top: 5px; font-weight: 600; font-size: 14px");

        channelName.setAttribute("id", `channel-${count}`);

        thumbImg.setAttribute("src", element.snippet.thumbnails.medium.url);
        title.setAttribute("href", `https://www.youtube.com/watch?v=${element.id.videoId}`);
        title.setAttribute("style", "text-decoration:none; color: black; margin-top: 10px; font-weight: 600;");

        cardDiv.append(thumbImg);
        cardDiv.append(title);
        cardDiv.append(descriptionDiv);
        cardDiv.append(channelName);
        displayResult.append(cardDiv);


        document.getElementById(`title-${count}`).innerHTML = element.snippet.title;
        document.getElementById(`desc-${count}`).innerHTML = element.snippet.description;
        document.getElementById(`channel-${count}`).innerHTML = `${element.snippet.channelTitle}<i class="fas fa-check-circle"></i>`;


        count++;
    });
}