// Open links in new tab
document.addEventListener('DOMContentLoaded', function()
{
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++)
  {
    (function() {
      var ln = links[i];
      var location = ln.href;
      ln.onclick = function() {
        chrome.tabs.create({active: true, url: location});
      };
    })();
  }
});

// Loop over psets
for (var z = 0; z <= 8; z++)
{
  var psets = document.getElementById('psets');
  psets.innerHTML += '<li><a href="http://docs.cs50.net/2017/x/psets/' + z + '/pset' + z + '.html">Pset ' + z + '</a></li>';

}

for (var y = 0; y <= 11; y++)
{
  var lectures = document.getElementById('lectures');
  lectures.innerHTML += '<li><a href="https://video.cs50.net/2016/fall/lectures/' + y + '/">Lecture ' + y + '</a></li>';
}
