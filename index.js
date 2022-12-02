import {books} from '/data.js'

const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalAuthor = document.getElementById('modal-author')
const modalText = document.getElementById('modal-text')
const modalVideo = document.getElementById('modal-video')
const header = document.getElementById('header')
const bookOne = document.getElementById('book-one')
const bookTwo = document.getElementById('book-two')
const bookThree = document.getElementById('book-three')
const bookFour = document.getElementById('book-four')

// Page Colors - Can Change! //

body.style.background = "#C2C5BB" //page background color//
header.style.background = "#13c4a3" //header background color//
header.style.color = "#4c6085" //header text color//
modal.style.background = "#C2C5BB" // book modal background color (same as main page bg color)//
modalText.style.color = "black" //book modal text color//
const bookOneColor = "#565650" //book #1 border color + modal heading color//
const bookTwoColor = "#39a0ed" //book #2 border color + modal heading color//
const bookThreeColor = "#13c4a3" //book #3 border color + modal heading color//
const bookFourColor = "#32322c" //book #4 border color + modal heading color//


bookOne.style.borderColor = bookOneColor
bookTwo.style.borderColor = bookTwoColor
bookThree.style.borderColor = bookThreeColor
bookFour.style.borderColor = bookFourColor

// Close Button //
document.getElementById('modal-close-btn').addEventListener("click", function(){
    modal.style.display = "none"
})


function openModal(){
    modal.style.display = "block"
}


// Book Images- Modal Openers //
bookOne.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalTitle.style.color = bookOneColor
    modalAuthor.style.color = bookOneColor
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[0].title
    modalAuthor.textContent += books[0].author
    modalText.textContent += books[0].blurb
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[0].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookTwo.addEventListener("click", function(){
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalTitle.style.color = bookTwoColor
    modalAuthor.style.color = bookTwoColor
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[1].title
    modalAuthor.textContent += books[1].author
    modalText.textContent += books[1].blurb
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[1].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookThree.addEventListener("click", function(){
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalTitle.style.color = bookThreeColor
    modalAuthor.style.color = bookThreeColor
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[2].title
    modalAuthor.textContent += books[2].author
    modalText.textContent += books[2].blurb
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[2].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookFour.addEventListener("click", function(){
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalTitle.style.color = bookFourColor
    modalAuthor.style.color = bookFourColor
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[3].title
    modalAuthor.textContent += books[3].author
    modalText.textContent += books[3].blurb
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[3].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

