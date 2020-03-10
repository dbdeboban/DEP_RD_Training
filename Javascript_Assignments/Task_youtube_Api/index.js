var searchBox = document.getElementById('searchBox');
var displayResult = document.getElementById('displayAllVid');
var maxResults = 50;

function searchBoxSubmit() {
    console.log("yes");
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&maxResults=${maxResults}&q=${searchBox.value}`, {
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

function displayData(data) {
    let count = 1;

    //e.firstElementChild can be used. 
    var child = displayResult.lastElementChild;
    while (child) {
        displayResult.removeChild(child);
        child = displayResult.lastElementChild;
    }

    data.items.forEach(element => {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "cardDiv");
        cardDiv.setAttribute("style", "border-radius: 10px; max-width: 200px; display: flex;flex-direction: column; margin: 20px; padding: 10px; box-shadow: 0px 0px 10px 2px rgba(158, 158, 158, 0.75);-moz-box-shadow: 0px 0px 10px 2px rgba(158, 158, 158, 0.75);-webkit-box-shadow: 0px 0px 10px 2px rgba(158, 158, 158, 0.75);");
        var thumbImg = document.createElement("img");
        thumbImg.setAttribute("style", "");
        var title = document.createElement("a");
        title.setAttribute("id", `title-${count}`);

        thumbImg.setAttribute("src", element.snippet.thumbnails.medium.url);
        title.setAttribute("href", `https://www.youtube.com/watch?v=${element.id.videoId}`);
        title.setAttribute("style", "text-decoration:none; color: black; margin-top: 10px; font-weight: 600;")
        cardDiv.append(thumbImg);
        cardDiv.append(title);
        displayResult.append(cardDiv);
        var cardTitle = document.getElementById(`title-${count}`).innerHTML = element.snippet.title;
        count++;
    });
}