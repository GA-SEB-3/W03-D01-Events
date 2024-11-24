const mainTitleElement = document.querySelector("#main-title")

console.log(mainTitleElement)

// mainTitleElement.style.color = "red"


// mainTitleElement.textContent = "New value"

const likeButtonElement = document.querySelector("#like-button")


console.log(likeButtonElement)


// events
//                                 (event,)
likeButtonElement.addEventListener("click",()=>{
    console.log("Button clicked")
})


const commentButtonElement = document.querySelector("#comment-button")

console.log(commentButtonElement)

commentButtonElement.addEventListener("click",()=>{
    // 1. create new commentelement
    const commentElement = document.createElement("li")

    const ulElement = document.querySelector("#comment-ul")

    const inputElement = document.querySelector("#comment-input")


    // 2. add text content to li
    commentElement.textContent = inputElement.value


    ulElement.appendChild(commentElement)


    console.log(inputElement.value)
    
})