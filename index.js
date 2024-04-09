
//Making a GET request
document.addEventListener("DOMContentLoaded",()=>{
const baseURL="https://restcountries.com/v3.1/all"
fetch(baseURL)
.then(response=>response.json())
.then(data=>{
    data.forEach(country=>{
        
//Country's name        
        const countries=document.getElementById("countries-list")
        const lists=document.createElement("li")
        lists.classList.add("list-style")
        lists.innerHTML=`<h2>${country.name.common}</h2>`
        countries.appendChild(lists)
//Country's flag        
        const image=document.createElement("img")
        image.src=country.flags.png
        image.textContent=image.src
        lists.append(image)
//Country's details i.e. population,Capital city,region and Time zones       
        const detailsLists=document.createElement("li");
        detailsLists.innerHTML=`
        <h6>Population: ${country.population} people </h6>
        <h6>Capital City: ${country.capital} </h6>
        <h6>Region: ${country.region}<h6>
        <h6>Time Zone: ${country.timezones[0]}</h6>
        <h6>UN Member: ${country.unMember}</h6>
        `
        lists.append(detailsLists)
        const toggleBtn = document.querySelector(".toggle");
        toggleBtn.addEventListener("click",()=>{
            document.body.classList.toggle("dark-mode");
        
        })
    })
//A feature that allows a user to toggle between light mode and dark mode.
const toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

})
//Adding comments and reviews.
const input=document.getElementById("comment")
const form=document.getElementById("comment-form")
const commentsList=document.querySelector(".comments-list")
form.addEventListener("submit",(e)=>{
e.preventDefault()
const inputList=document.createElement("li")
inputList.textContent=input.value
console.log(inputList.textContent)
commentsList.append(inputList)

})
});


})
//})
