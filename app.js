// Variables
let fname = prompt(`Ismingiz`)
let lname = prompt(`Familiyangiz`)
let age = prompt(`Yoshingiz`)
let hoby = prompt(`Hobbingiz`)
let edu = prompt(`Qayerda o'qiysiz`)
let carer = prompt(`Kasbingiz`)

    // Location
    let main_city = prompt(`Davlatingiz`)
    let Ucity = prompt(`Shaharingiz`)
    let tuman = prompt(`Tuman`)
    let kocha = prompt(`Kochangiz`)
    let uy = prompt(`Uyingiz`)


// Object
let user_name = {
    firstName: fname,
    lastName: lname,
    userAge: age,
    userHoby: hoby,
    education: edu,
    job: carer,
    location: {
        country: main_city,
        city: Ucity,
        Utuman: tuman,
        street: kocha,
        home: uy
    }
}


// Import To HTML
let firName = document.getElementById("fname").innerHTML=fname
let SecName = document.getElementById("lname").innerHTML=lname
let Age_check = document.getElementById("age").innerHTML=age
let hobby = document.getElementById("hobbi").innerHTML=hoby
let check_loc = document.getElementById("location").innerHTML=main_city
let edu_center = document.getElementById("edu").innerHTML=edu
let User_Job = document.getElementById("carer").innerHTML=carer
