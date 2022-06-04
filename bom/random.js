let url = 'https://ckennington.github.io/bom/bom.json';

fetch(url)
.then(res => res.json())
.then((out) => {
  var books = out['books'][Math.floor(Math.random()*out['books'].length)];
  var chapters = books['chapters'][Math.floor(Math.random()*books['chapters'].length)];
  var verse = chapters['verses'][Math.floor(Math.random()*chapters['verses'].length)];
  console.log('Checkout this JSON! ', verse);
  $("body").text(verse)
})
.catch(err => { throw err });
