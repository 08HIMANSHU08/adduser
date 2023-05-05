
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mobileInput = document.querySelector('#number');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === ''|| mobileInput.value === '' ) {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');

    let userinput={"name":nameInput.value,"mobile":mobileInput.value,"email":emailInput.value};
    
    li.appendChild(document.createTextNode(`${nameInput.value}: ${mobileInput.value} :${emailInput.value}`));
    let userinput_serialized=JSON.stringify(userinput);
    localStorage.setItem(emailInput.value,userinput_serialized)
    
    userList.appendChild(li);
    
    var deleteBtn=document.createElement('button');
    deleteBtn.className='delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);
    
    userList.appendChild(li);
    // var itemList=document.getElementById('users');
    userList.addEventListener('click',removeItem);
    function removeItem(e){
      if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        localStorage.removeItem(userinput.email);
        userList.removeChild(li);
      }
    }
    nameInput.value = '';
    mobileInput.value='';
    emailInput.value = '';
  }
}