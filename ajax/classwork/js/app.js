// function getPosts() {   
//    return new Promise(function(resolve){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     // vietoj .then(data => console.log(data));
//     .then(data => resolve(data));
//    })
// }
// async function getAllPosts() {
//   let posts = await getPosts();
//   let data = document.querySelector('#data');

//   for (let post of posts) {
//     const createTr = document.createElement('tr');
//     const createTdID = document.createElement('td');
//     const createTdUserId = document.createElement('td');
//     const createTdTitle = document.createElement('td');
//     const createTdBody = document.createElement('td');

//     createTdID.textContent = post.id;
//     createTdUserId.textContent = post.userId;
//     createTdTitle.textContent = post.title;
//     createTdBody.textContent = post.body;

//     createTr.appendChild(createTdID);
//     createTr.appendChild(createTdUserId);
//     createTr.appendChild(createTdTitle);
//     createTr.appendChild(createTdBody);
//     data.appendChild(createTr);
//   }
// }
//   document.querySelector('button').addEventListener('click', function(){
//     getAllPosts();
// });
function getPosts() {   
   return new Promise(function(resolve){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    // vietoj .then(data => console.log(data));
    .then(data => resolve(data));
   })
}
function getUsers() {   
  return new Promise(function(resolve){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   // vietoj .then(data => console.log(data));
   .then(data => resolve(data));
  })
}
async function getAllPosts() {
  let posts = await getPosts();
  let users = await getUsers();
  let data = document.querySelector('#data');

  if (!posts || !users) {
    const createTr = document.createElement('tr');
    data.appendChild(createTr); 
  } else {
    for (let post of posts) {
      const createTr = document.createElement('tr');
      const createTdID = document.createElement('td');
      const createTdUserName = document.createElement('td');
      const createTdTitle = document.createElement('td');
      const createTdBody = document.createElement('td');

      for (let user of users){
        if (post.userId === user.id) { 
          createTdUserName.textContent = user.username; 
        break;          
        }  
      }

          createTdID.textContent = post.id;
          
          createTdTitle.textContent = post.title;
          createTdBody.textContent = post.body;

      createTr.appendChild(createTdID);
      createTr.appendChild(createTdUserName);
      createTr.appendChild(createTdTitle);
      createTr.appendChild(createTdBody);
      data.appendChild(createTr);
    }  
  }
}
  document.querySelector('button').addEventListener('click', function(){
    getAllPosts();
});





