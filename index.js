
//Making a GET request
document.addEventListener("DOMContentLoaded",()=>{

//A feature that allows a user to toggle between light mode and dark mode.
const toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

})
//Adding a search functionality
const form=document.getElementById("form")
const input=document.getElementById("search")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const results=document.getElementById("results-div")
fetch(`https://restcountries.com/v3.1/name/${input.value}?fullText=true`)
.then(res=>res.json())
.then(data=>{
    data.forEach(result=>{
        
        //Country's name        
                const countries=document.getElementById("countries-list")
                const lists=document.createElement("li")
                results.classList.add("list-style")
                results.innerHTML=`<h2>${result.name.common}</h2>`
                countries.appendChild(lists)
        //Country's flag        
                const image=document.createElement("img")
                image.src=result.flags.png
                image.textContent=image.src
                results.append(image)
        //Country's details i.e. population,Capital city,region and Time zones       
                const detailsLists=document.createElement("li");
                detailsLists.innerHTML=`
                <h6>Population: ${result.population} people </h6>
                <h6>Capital City: ${result.capital} </h6>
                <h6>Region: ${result.region}<h6>
                <h6>Time Zone: ${result.timezones[0]}</h6>
                <h6>UN Member: ${result.unMember}</h6>`
                results.append(detailsLists)
             
            })
             
            
})

})
//Adding a comment or reviews.
const commentsForm=document.getElementById("comment-form")
            const commentInput=document.getElementById("comment")
            const commentsList=document.querySelector(".comments-list")
            commentsForm.addEventListener("submit",(e)=>{
                e.preventDefault()
                const comment=document.createElement("li")
                comment.classList.add("comment-style")
                if(commentInput.value.length===0){
                    alert("Please add a comment")
                }else{
                comment.textContent=commentInput.value
                }
                commentsList.append(comment)
            }) 

})


