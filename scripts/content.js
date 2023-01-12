chrome.storage.sync.get(["activated"]).then((result) => {
  result.activated && setInterval(getContent, 2000);
});

const getContent = () => {
  let tweetStats = document.querySelectorAll(
    ".css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws, .css-901oao.css-16my406.r-1nao33i.r-poiln3.r-bcqeeo.r-qvutc0")
  window.location.href == "https://twitter.com/home";

  tweetStats?.forEach((element) => {
    element.firstChild.style.display = "none";
  });
};
