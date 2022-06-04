let url = 'https://ckennington.github.io/bom/bom.json';

alert("5")

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
})
.catch(err => { throw err });
