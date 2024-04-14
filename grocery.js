//sellect items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const submitBtn = document.querySelector('.submit-btn');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//edit options
let editElement;
let editFlag = false;
let editId = "";

// console.log(typeof(editFlag))

// set up eventListeners for submit form
form.addEventListener('submit',addItem)
//clear items
clearBtn.addEventListener('click',clearItems)
//deletebtn 
// const deleteBtn = document.querySelector('.delete-btn');
//function
function addItem(e){
    e.preventDefault() //prevents default behaviour of the form when submiting.
    // console.log(grocery.value)
    const value = grocery.value  // acessing the value targeted from the input
    const id = new Date().getTime().toString()
    // if(value !== '' && editFlag === false){}
    // else if(value !== '' && editFlag === true){}
    // else{}
    if(value && !editFlag){
        const element = document.createElement('article')
        // console.log('add item to the list')
          //adding a class
          element.classList.add('grocery-item');
            //add id
        const attr = document.createAttribute('data-id');
          attr.value = id
         element.setAttributeNode(attr)
 //add the html
         element.innerHTML = `<p class="title">${value}</p>
         <div class="btn-container">
             <button type="button" class="edit-btn">
 <i class="fas fa-edit"></i>
             </button>
             <button type="button" class="delete-btn">
                 <i class="fas fa-trash"></i>
                              </button>            
         </div>`;
         const deleteBtn = element.querySelector('.delete-btn');
         const editBtn = element.querySelector('.edit-btn');
         deleteBtn.addEventListener('click',deleteItem)
         editBtn.addEventListener('click',editItem)
         //append child
         list.appendChild(element)
         //display alert
         displayAlert('item added to the list', 'success');
         //show my container
         container.classList.add('show-container')
         //add to local storage
         addToLocalStorage(id,value);
         //set back to default
         setBackToDefault()
    }
    else if(value && editFlag){
        // console.log('editing')

    }
    else{
        displayAlert("please enter value", "danger")
    }
}

//a function for display alert with two arguments
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add('alert-${action}'); //this is a template string

    //remove alert with setTimeOut function by one second
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove('alert-${action}');
    },1000)
}
//clear items functions
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        //iterate over the items with foreach method
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'warning');
    setBackToDefault();
    //localStorage.removeItem('list');
}
//delete funtion
function deleteItem(){
    // const element = e.currentTarget.parentEelemnt.parentEelemnt;
    // list.removeChild(element);
    console.log('item deleted') 
}
//edit function
function editItem(){
 console.log('edit item')   
}
//set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit'

    // console.log('set back to default')  
}
//local storage
function addToLocalStorage(id,value){
    // console.log('added to local storage')
}