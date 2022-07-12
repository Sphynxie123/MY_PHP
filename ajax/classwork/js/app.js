function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));

}
  document.querySelector('button')?.addEventListener('click', function(){
    // let posts = new Promise(function(resolve, reject)) {

    // }
    getPosts();
});


function getAllPosts() {
  let posts = getPosts();
  let data = document.querySelector('#data');

  for (let post of posts) {
    const createTr = document.createElement('tr');
    const createTdID = document.createElement('td');
    const createTdUserId = document.createElement('td');
    const createTdTitle = document.createElement('td');

    createTdID.textContent = post.id;
    createTdUserId.textContent = post.userId;
    createTdTitle.textContent = post.title;

    createTr.appendChild(createTdID);
    createTr.appendChild(createTdUserId);
    createTr.appendChild(createTdTitle);
    data.appendChild(createTr);
  }
} 
getAllPosts();  

//   document.querySelector('button').addEventListener('click', function(){
//     getAllPosts();
// });


