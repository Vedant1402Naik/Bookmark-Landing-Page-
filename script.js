const bookmarkList = document.getElementById('bookmarkList')  
const addBookmarkBTN = document.getElementById('addBookmark')  
const removeAllBookmarkBTN = document.getElementById('removeAll')  
const urlInput = document.getElementById('urlInput') 

function isValidURL(url){
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return pattern.test(url)
}

addBookmarkBTN.addEventListener("click",()=>{
    const url = urlInput.value.trim()
    if(isValidURL(url)){
        const bookmarkItem = document.createElement("li")
        bookmarkItem.classList.add("bookmarkItem")
        bookmarkItem.innerHTML = `<a href="${url} tagret="_blank">${url}</a>
        <div class="buttons">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>

        </div>
        `;
        bookmarkList.appendChild(bookmarkItem)
        urlInput.value = ""
        EditBookmarkListener(bookmarkItem)
        DeleteBookmarkListener(bookmarkItem)
    }
    else{
        alert(
            "Enter Valid URL"
        )
    }
        
})

removeAllBookmarkBTN.addEventListener("click",()=>{
    while(bookmarkList.firstChild){
        bookmarkList.removeChild(bookmarkList.firstChild)
    }
})

function EditBookmarkListener(bookmarkItem){

    const Editbtn = bookmarkItem.querySelector("#edit")
    const bookmarkLink = bookmarkItem.querySelector("a")

    Editbtn.addEventListener("click",()=>{
        const newURL = prompt("Edit the URL : ",bookmarkLink.getAttribute("href"));
        if(newURL && isValidURL(newURL)){
            bookmarkLink.setAttribute("href",newURL)
            bookmarkLink.innerHTML = newURL
        } 
        else if(newURL){
            alert("Enter valid URL link ")
        }
    })  
}

function DeleteBookmarkListener(bookmarkItem){
    const DeleteBtn = bookmarkItem.querySelector("#delete")
    DeleteBtn.addEventListener("click",()=>{
        bookmarkItem.remove();
    })
}


// addBookmarkBTN()
// removeAllBookmarkBTN()
// EditBookmarkListener()