const ul = document.querySelector('.list')
const add = document.querySelector('.add-button')
const input = document.querySelector('.add-input')
const search = document.querySelector('.search')
const list_items = document.querySelectorAll('li')
const delete_button = document.querySelector('.delete-button')

add.addEventListener('click', (e) => {
  if(input.value == ""){
    console.log("Input value Empty: Please Enter title")
  }else{
    //Create Element
    const li = document.createElement('li')
    const delete_button = document.createElement('button')
    const p = document.createElement('p')
    const edit_button = document.createElement('button')
    const submit_edit = document.createElement('button')
    const edit_input = document.createElement('input')

    delete_button.classList.add('delete-button')
    submit_edit.classList.add('submit-edit')
    li.classList.add('list-item')
    edit_button.classList.add('edit-button')
    edit_input.classList.add('edit-input')
    edit_input.placeholder = "Enter New Title";
    edit_input.type = "text"


    delete_button.textContent = 'Delete'
    edit_button.textContent = 'Edit'
    submit_edit.textContent = "Submit"
    p.textContent = input.value  

    li.append(p)
    li.append(delete_button)
    li.append(edit_button)
    li.append(edit_input)
    li.append(submit_edit)
    ul.prepend(li)


    input.value = ""
  }
})


search.addEventListener('input', (e) => {
  
  list_items.forEach(item => {

    if(item.firstElementChild.textContent.trim().toLowerCase().includes(e.target.value)){
      item.style.display = "block"
    }else{
      item.style.display = "none"
    }
  })
  
})


ul.addEventListener('click', (e) => {
  if(e.target.className == 'delete-button'){
    console.log("target hit")
    const Del_button = e.target
    Del_button.closest('.list-item').remove()
  } 
  else if (e.target.className == 'edit-button'){
    const edit_field = e.target.nextElementSibling;
    edit_field.style.display="block"

    const edit_submit = edit_field.nextElementSibling
    edit_submit.style.display="block"

    edit_submit.addEventListener('click', (e) => {
      if (e.target.previousElementSibling.value == ""){
        console.log("Error: Please Enter new title")
      }else{
        const new_title_field = e.target.previousElementSibling
        const new_title = new_title_field.value
        console.log("new Title:", new_title)
        const title_element = e.target.closest('.list-item').firstElementChild
        title_element.textContent = new_title

        new_title_field.value = ""
        edit_field.style.display = "none"
        edit_submit.style.display = "none"
      }
    })

  }
})

