
//creates a reference to the form on the html page and saves it as a variable//
const form = document["addItem"] 

//adds a submit event//
form.addEventListener("submit", function createNew(e){
    //prevents the page from refreshing//
    e.preventDefault()
    /*creates a variable to track the count and sets it equal to 0
    Used later to increment*/
    let count = 0
    //grabs the user input value and saves it as a variable//
    const userInput = form.title.value
     //clears out user input after the user hits enter//
    form.title.value = ""
    //creates a new list item tag//
    const createListItem = document.createElement('li')
    //creates a new div//
    const div = document.createElement('div')
    //creates a new h1//
    const h1 = document.createElement('h1')
    //creates an edit button//
    const editButton = document.createElement("button")
    //creates a delete button//
    const deleteButton = document.createElement("button")
    //saves content when you edit it//
    const saveButton = document.createElement("button")
    
    //adds item numbers and increments//
    div.id = "todos" + count
    count++

    //setting the text content of the newly created elements//
    h1.textContent = userInput
    editButton.textContent = "edit"
    deleteButton.textContent = "X"
    saveButton.textContent = "save"
    
    //appends the list to the new div//
    document.getElementById("list").append(div)
    /*appends the two buttons and one header to the list*/
    div.appendChild(h1)
    div.appendChild(editButton)
    div.appendChild(deleteButton)
    div.appendChild(saveButton)

    //deletes item from the list//
    deleteButton.addEventListener("click", () => deleteItem(div))
    function deleteItem(div) {
    div.remove()
    }

    //adds event listener for edit button//
    editButton.addEventListener("cl
    ick", () => editItem(list))

    //makes the HTML editable after the edit button is clicked//
    function editItem(list) {
    document.getElementById("list").contentEditable = "true";
    }

    //adds event listener for save button//
    saveButton.addEventListener("click", () => saveItem(list))

    //saves the changes//
    function saveItem(list) {
    document.getElementById("list").contentEditable = "false";
    }
})



