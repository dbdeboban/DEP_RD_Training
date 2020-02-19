function renderHeaderContents() {
    var headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "headerDiv");
    headerDiv.setAttribute("style", "background-color: rgb(255, 255, 255)\; width: 220px\; padding: 20px\;text-align: center\;margin: auto\;border: 2px solid rgb(216, 91, 72)\;");
    var heading = document.createElement("h1");
    heading.innerHTML = "NEWS BLOG";
    heading.setAttribute("style", "font-family: Roboto\;margin: 0px\;color: rgb(39, 56, 82)\;");
    var subHeading = document.createElement("h5");
    subHeading.innerHTML = "WORLDWIDE NEWS";
    subHeading.setAttribute("style", "font-family: Roboto\;margin: 0px\;color: rgb(39, 56, 82)\;");
    var headerTag = document.getElementById("header");
    console.log(headerTag);
    headerTag.append(headerDiv);
    var header = document.getElementById("headerDiv");
    header.append(heading);
    header.append(subHeading);
}

function renderMainContents() {

}



function renderFooterContents() {

}

function renderIndexPage() {
    renderHeaderContents();
    renderMainContents();
    renderFooterContents();
}
renderIndexPage();