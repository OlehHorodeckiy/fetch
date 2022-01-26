function getPostsInformation(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            let output = '<h2 class="post-main__title">User</h2>';
            data.forEach(function (user){
                output +=`
                <div class="user__body">
                 <h4 class="user-name__title" onclick="getPostId(${user.id})" > ${user.name}</h4>
                    <div id="post-${user.id}"></div>

                </div>
                 `;
            });
            document.getElementById('output').innerHTML=output;
        })
}
function getPostId(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            document.getElementById(`post-${id}`).innerHTML=`
                <div className="user-email__title"> ${data.email}</div>
            <div className="user-city__title"> Місто:${data.address.city}</div>
            <div className="user-street__title"> Вулиця:${data.address.street}</div>
            <div className="user-suite__title"> Номер:${data.address.suite}</div>
            <div className="user-phone__title"> phone number:${data.phone}</div>
            <div className="user-website__text">website:${data.website}</div>
            <div className="user-company__text">Company:${data.company.name}</div>`
        })

}



