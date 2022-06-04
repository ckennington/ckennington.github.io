let url = 'https://ckennington.github.io/bom/bom.json';

alert("5")

fetch(url)
.then(res => res.json())
.then((out) => {
  var book = items[Math.floor(Math.random()*out['books'].length)];
  console.log('Checkout this JSON! ', book);
})
.catch(err => { throw err });
