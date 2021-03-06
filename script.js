(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML = "loading";
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
      .then(array => {
        answer.innerHTML = "";
        array.forEach(post => answer.innerHTML +=
          `
          <div>
          <ul>
         <li>User ID: ${post.userId}</li>
         <li>id: ${post.id}</li>
         <li>title: ${post.title}</li>
         <li>body: ${post.body}</li>
          </ul>
        <hr/>
            </div>`
     );
   })
   
  })

  cw2.addEventListener("click", function () {
    //TODO implement it
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();
