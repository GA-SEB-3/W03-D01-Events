const mainTitleElement = document.querySelector("#main-title")

console.log(mainTitleElement)

// mainTitleElement.style.color = "red"


// mainTitleElement.textContent = "New value"

const likeButtonElement = document.querySelector("#like-button")


console.log(likeButtonElement)




const commentButtonElement = document.querySelector("#comment-button")

console.log(commentButtonElement)

commentButtonElement.addEventListener("click",()=>{
    // 1. create new commentelement <li>
    const commentElement = document.createElement("li")

    // 2. get the ul to put the li inside of
    const ulElement = document.querySelector("#comment-ul")

    // 3. get the input element to get the text
    const inputElement = document.querySelector("#comment-input")


    // 4. adding the value of the input as the content in the li
    commentElement.textContent = inputElement.value


    // 5. put <li> inside of <ul>
    ulElement.appendChild(commentElement)


    console.log(inputElement.value)

    inputElement.value = ""    
})


let likeCounter = 0


// events
//                                 (event, callbackFunction)

console.log( Number(document.querySelector("#like-count").textContent))

function toggleLike(event){
    console.log(event.target.id)
    const likeCountElement = document.querySelector("#like-count")
    if(event.target.id === "like-button"){
        likeCounter+=1
    }
    else if(event.target.id === "dislike-button"){
        if(likeCounter >0){
            likeCounter-=1
        }
    }
    likeCountElement.textContent = `${likeCounter} Likes on Post`

}

likeButtonElement.addEventListener("click", toggleLike)


const dislikeButtonElement = document.querySelector("#dislike-button")

dislikeButtonElement.addEventListener("click",toggleLike)

// Create a dislike click functionality