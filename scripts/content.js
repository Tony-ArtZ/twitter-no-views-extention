chrome.storage.sync.get(["activated"]).then((result) => {
  result.activated && setInterval(getContent, 2000);
});

const getContent = () => {
  let tweetStats = document.querySelectorAll(
    ".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1loqt21.r-1777fci.r-bt1l66.r-1ny4l3l.r-bztko3.r-lrvibr, .css-1dbjc4n.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2 :nth-child(3) :nth-child(1)")
  window.location.href == "https://twitter.com/home";

  tweetStats?.forEach((element) => {
    console.log(element.children.length)
    element.parentElement.remove()
  });
};
