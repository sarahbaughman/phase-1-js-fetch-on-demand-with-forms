const init = () => {
  const inputForm = document.querySelector("form");
  
  inputForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const input = document.querySelector("input#searchByID")

//Fetch data based on user input 
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then ((response) => response.json())
        .then ((data) => {
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")
            
            title.innerText = data.title
            summary.innerText= data.summary
            
            console.log(data)
         })

    })
}

document.addEventListener('DOMContentLoaded', init);






//OR event.target.children[1].value
//Handles the event, ie takes the text, makes it a list item,posts it to the site