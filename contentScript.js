const allLinks = document.querySelectorAll("a");

for (const item of allLinks) {
  item.setAttribute("target", "_blank");
}
