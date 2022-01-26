const people = [{
    name: "Tanya",
    become:"female" ,
    age:25

}, {
    name: "Victor",
    become: "male",
    age:15

}, {
    name: "Anton",
    become: "male",
    age:40

}, {
    name: "Oleg",
    become:"male",
    age:21
}, {
    name :"Nazar",
    become: "male",
    age:10

}, {
    name :"Victoria",
    become:"female",
    age :27
}, {
    name :"Marta",
    become:"female",
    age :17

},  {
    name :"Diana",
    become:"female",
    age :40

},  {
    name :"Solomia",
    become:"female",
    age :23
},  {
    name :"Roman",
    become:"male",
    age :50
}];



function filterSex(sex=null){
    const peopleList = document.querySelector('.people__list')
    let list = '';
    for (const peopleElement of people) {
        if (!sex || (sex && peopleElement.become === sex) ){
            list += `<li>${peopleElement.name }</li>`
        }


    }
    peopleList.innerHTML = list;
}
filterSex()