function init() {
  removeSponsors();
}

function removeSponsors(isInit) {
  const elems = Array.from(document.querySelectorAll("div.AdHolder"), e => e.style.display == 'none' ? null : e).filter(e => e != null)
  if (elems && elems.length > 0) {
    Array.prototype.forEach.call(elems, function(node) {
      node.style.display = 'none';
    });
  }
}

init();
