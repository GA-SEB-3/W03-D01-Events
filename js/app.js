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
likeButtonElement.addEventListener("click",()=>{
    const likeCountElement = document.querySelector("#like-count")
    likeCounter+= 1
    console.log(likeCounter)
    likeCountElement.textContent = `${likeCounter} Likes on Post`

})
