const ul = document.querySelector('.list')
const add = document.querySelector('.add-button')
const input = document.querySelector('.add-input')
const search = document.querySelector('.search')
const list_items = document.querySelectorAll('li')
const delete_button = document.querySelector('.delete-button')
const modal = document.querySelector('.modal')
const modal_title = document.querySelector('.modal-title')
const modal_body = document.querySelector('.modal-body')


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
    const item_div = document.createElement('div')
    const button_div = document.createElement('div')

    item_div.classList.add('list-title')
    button_div.classList.add('list-buttons')
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
  
    item_div.append(p)
    button_div.append(delete_button)
    button_div.append(edit_button)
    button_div.append(edit_input)
    button_div.append(submit_edit)
    li.append(item_div)
    li.append(button_div)
    ul.prepend(li)

    input.value = ""
  }
})

search.addEventListener('input', (e) => {
  
  list_items.forEach(item => {

    if(item.firstElementChild.textContent.trim().toLowerCase().includes(e.target.value)){
      item.style.display = ""
    }else{
      item.style.display = "none"
    }
  })
  
})

ul.addEventListener('click', (e) => {



  if(e.target.className == 'delete-button'){
    const Del_button = e.target
    Del_button.closest('.list-item').remove()
  } if (e.target.className == 'edit-button'){
    modal.style.display ="flex"
    const li = e.target.closest('.list-item')
    const item_title = li.firstElementChild.firstElementChild.textContent
    const input_old_title = modal_body.firstElementChild
    input_old_title.value = item_title
    modalFunction(input_old_title)
  }
})

const modalFunction = (old_title) =>{
  modal.addEventListener('click', (e) => {
    if (e.target.className.includes('cancel-edit')) {
      closeModal()
    } else if (e.target.className.includes('submit-edit')) {
      console.log("Clicked Submit")
      old_title = old_title.value
      old_title = old_title.trim().toLowerCase()
      const new_title = modal_body.firstElementChild.value
      if(old_title === new_title.trim().toLowerCase()){
        alert("No changes detected: submit unsuccesful")
      }else{
        modal_body.firstElementChild.value = new_title
        console.log(modal_body.firstElementChild.value)
      }
    }
  })
}

let closeModal = () => {
  modal.style.display = 'none'
}

let openModal = () =>{
  modal.style.display = ''
}