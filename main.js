// const people = [{
//     name: "Tanya",
//     become:"female" ,
//     age:25
//
// }, {
//     name: "Victor",
//     become: "male",
//     age:15
//
// }, {
//     name: "Anton",
//     become: "male",
//     age:40
//
// }, {
//     name: "Oleg",
//     become:"male",
//     age:21
// }, {
//     name :"Nazar",
//     become: "male",
//     age:10
//
// }, {
//     name :"Victoria",
//     become:"female",
//     age :27
// }, {
//     name :"Marta",
//     become:"female",
//     age :17
//
// },  {
//     name :"Diana",
//     become:"female",
//     age :40
//
// },  {
//     name :"Solomia",
//     become:"female",
//     age :23
// },  {
//     name :"Roman",
//     become:"male",
//     age :50
// }];
//
//
//
// function filterSex(sex=null){
//     const peopleList = document.querySelector('.people__list')
//     let list = '';
//     for (const peopleElement of people) {
//         console.log(sex,peopleElement)
//         console.log(peopleElement.become === sex)
//         console.log(sex)
//         if (!sex || (sex && peopleElement.become === sex) ){
//             list += `<li>${peopleElement.name }</li>`
//         }
//
//
//     }
//     peopleList.innerHTML = list;
// }
// filterSex()


//задача 1
// function plus(){
//     let num1;
//     let num2;
//     let result
//     num1=document.getElementById('number1').value;
//     num1=Number(num1);
//     num2=document.getElementById('number2').value;
//     num2=Number(num2);
//     result = num1+num2 ;
//     document.getElementById('answer').innerHTML=result;
// }
// function minus(){
//     let num1;
//     let num2;
//     let result
//     num1=document.getElementById('number1').value;
//     num1=Number(num1);
//     num2=document.getElementById('number2').value;
//     num2=Number(num2);
//     result = num1-num2 ;
//     document.getElementById('answer').innerHTML=result;
// }
// function multiplication(){
//     let num1;
//     let num2;
//     let result
//     num1=document.getElementById('number1').value;
//     num1=Number(num1);
//     num2=document.getElementById('number2').value;
//     num2=Number(num2);
//     result = num1*num2 ;
//     document.getElementById('answer').innerHTML=result;
// }
// function division(){
//     let num1;
//     let num2;
//     let result
//     num1=document.getElementById('number1').value;
//     num1=Number(num1);
//     num2=document.getElementById('number2').value;
//     num2=Number(num2);
//     result = num1/num2 ;
//     document.getElementById('answer').innerHTML=result;
// }
// //задача 1.2
// const calcBtn =document.querySelector('calck__btn')
// function calk() {
//     const operator = prompt('Обери оператора  ( +, -, * , / ): ');
//     const number1 = parseFloat(prompt('Число 1: '));
//     const number2 = parseFloat(prompt('Число 2: '));
//
//     let result;
//     if (operator == '+') {
//         result = number1 + number2;
//     } else if (operator == '-') {
//         result = number1 - number2;
//     } else if (operator == '*') {
//         result = number1 * number2;
//     } else {
//         result = number1 / number2;
//     }
//
//     return alert(`${number1} ${operator} ${number2} = ${result}`);
// }

//задача

// document.getElementById('getPostsInformation').addEventListener('click',getPostsInformation);
//   function getPostsInformation(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res)=>res.json())
//         .then((data)=>{
//             let output = '<h2 class="post-main__title">User</h2>';
//             data.forEach(function (user){
//                 output +=`
//                 <div class="user__body">
//                  <h4 class="user-name__title" onclick="getPostId(${user.id})" > ${user.name}</h4>
//                     <div id="post-${user.id}"></div>
//
//                 </div>
//                  `;
//             });
//             document.getElementById('output').innerHTML=output;
//         })
// }
// function getPostId(id){
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             document.getElementById(`post-${id}`).innerHTML=`
//                 <div className="user-email__title"> ${data.email}</div>
//             <div className="user-city__title"> Місто:${data.address.city}</div>
//             <div className="user-street__title"> Вулиця:${data.address.street}</div>
//             <div className="user-suite__title"> Номер:${data.address.suite}</div>
//             <div className="user-phone__title"> phone number:${data.phone}</div>
//             <div className="user-website__text">website:${data.website}</div>
//             <div className="user-company__text">Company:${data.company.name}</div>`
//         })
//
// }
//
//
//
