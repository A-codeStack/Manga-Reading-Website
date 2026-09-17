const ul = document.querySelector('.list')
const new_item = document.querySelector('.added_item')
const add_button = document.querySelector('.add_button')
const list_items = document.querySelectorAll('.list_item')
const items_array = Array.from(list_items)
const delete_button = document.querySelector('.delete_button')

add_button.addEventListener('click', () => {

  const new_title = new_item.value.trim()

  if(new_title !== ""){
    let new_li = document.createElement('li')

    let new_p = document.createElement('p')
    let new_delete = document.createElement('button')

    new_delete.textContent = 'delete'
    new_delete.classList.add('delete_button')
    console.log(new_delete)

    new_li.classList.add('list_item')
    new_p.classList.add('item_title')
    new_p.textContent = new_title

    new_li.append(new_p)
    new_li.append(new_delete)
    ul.prepend(new_li)
  }else{                           
    console.log("Please fill up: Empty Title")
  }
})


ul.addEventListener('click', (e) => {
  if(e.target == delete_button){
    delete_button.parentElement.remove()
  }
})


const search_input = document.querySelector('.search')