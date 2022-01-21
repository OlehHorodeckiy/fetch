document.getElementById('getPosts').addEventListener('click',getPosts);
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>{
            let output = '<h2 class="post-main__title">Posts</h2>';
            data.forEach(function (posts){
                output +=`
                <div class="post__body">
                 <h3 class="post__title">${posts.title}</h3>
                 <p class="post__text">${posts.body}</p>
                </div>
                 `;
            });
            document.getElementById('output').innerHTML=output;
        })
}
document.getElementById('getPostsInformation').addEventListener('click',getPostsInformation);
function getPostsInformation(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            let output = '<h2 class="post-main__title">User</h2>';
            data.forEach(function (user){
                output +=`
                <div class="user__body">
                 <h4 class="user-name__title"> ${user.name}</h4>
                 <div class="user-email__title"> ${user.email}</div>
          <div class="user-city__title"> Місто:${user.address.city}</div>
          <div class="user-street__title"> Вулиця:${user.address.street}</div>
         <div class="user-suite__title"> Номер:${user.address.suite}</div>
         <div class="user-phone__title"> phone number:${user.phone}</div>
         <div class="user-website__text">website:${user.website}</div>
          <div class="user-company__text">Company:${user.company.name}</div>
                
                </div>
                 `;
            });
            document.getElementById('output').innerHTML=output;
        })

}

