fetch("plot.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("plot").innerHTML = html;
  });
console.log("Hi")