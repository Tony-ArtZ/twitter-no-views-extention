chrome.storage.sync.get(["activated"]).then((result) => {
  result.activated && setInterval(getContent, 2000);
});

const getContent = () => {
  let tweetStats = document.querySelectorAll(
    ".css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws, .css-1dbjc4n.r-2sztyj.r-1efd50x.r-5kkj8d.r-13awgt0.r-18u37iz.r-tzz3ar.r-s1qlax.r-1yzf0co"
  );
  window.location.href == "https://twitter.com/home";

  tweetStats?.forEach((element) => {
    element.firstChild.style.display = "none"
  });
};
