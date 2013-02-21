function handleTabLinks() {
  var hash = window.location.href.split("#")[1];
  if (hash !== undefined) {
    var hpieces = hash.split("/");
    for (var i=0;i<hpieces.length;i++) {
      var domelid = hpieces[i];
      var domitem = $('a[href=#' + domelid + '][data-toggle=tab]');
      if (domitem.length > 0) {
        if (i+1 == hpieces.length) {
          // last piece
          setTimeout(function() {
            // Highly unclear why this code needs to be inside a timeout call.
            // Possibly due to the fact that the first ?.tag('show') call needs
            // to have it's animation finishing before the next call is being
            // made.
            domitem.tab('show');
          },
          // This magic timeout is based on trial and error. I bumped it
          // partially to catch the visitor's attention.
          1000);
        } else {
          domitem.tab('show');
        }
      }
    }
  }
}

jQuery.ready(function() {
  handleTabLinks();
}