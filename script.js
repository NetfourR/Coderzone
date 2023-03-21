var path = window.location.pathname;
var page = path.split("/").pop();
if (page != "" && page != "index.html") {
  window.history.replaceState({}, "", page.replace(".html", ""));
}