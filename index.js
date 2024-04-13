

//Making a GET request
document.addEventListener("DOMContentLoaded",()=>{


    //A feature that allows a user to toggle between light mode and dark mode.
    const toggleBtn = document.querySelector(".toggle");
    toggleBtn.addEventListener("click",()=>{
    //On clicking the toggle button the class(dark mode)     
        document.body.classList.toggle("dark-mode");
    
    })
    //A mouseover and mouseout event
    toggleBtn.addEventListener('mouseover',()=>{
        toggleBtn.style.backgroundColor = '#000';
    });
    toggleBtn.addEventListener('mouseout',()=>{
        toggleBtn.style.backgroundColor = 'grey';
    });
    
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
            //Country's details i.e. population,Capital city,region,Time zones and if the counry is a member of the UN       
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
    const commentsForm=document.getElementById("comment-form")
    const commentInput=document.getElementById("comment")
    const commentsList=document.querySelector(".comments-list")
    commentsForm.addEventListener("submit",(e)=>{
        e.preventDefault()
    })
    commentsForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const comment=document.createElement("li")
        comment.textContent=commentInput.value
        
        //Send an alert to the user if the input field is empty and no comment is added       

            fetch("http://localhost:3000/comments", {
                     method: "POST",
                     headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    country:input.value,
                    comment:comment.textContent
                 })
                })
                .then(response => response.json())
                .then(data =>{
                    comment.textContent=data.comment
                    comment.id=data.id
                    commentsList.append(comment)

                    const deleteBtn=document.querySelector(".delete-button")
deleteBtn.addEventListener('click',()=>{
   
    fetch(`http://localhost:3000/comments/${data.id}`, {

        method: "DELETE",
        
      })

      .then(() => {

        comment.remove();

      });
                })
           
        })
//Deleting a comment

})


})

                           
    







