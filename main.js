
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
    const name=nameInput.value;
    const email=emailInput.value;
    const mobile=mobileInput.value;
    const userinput={
      name,
      mobile,
      email
    };
    localStorage.setItem(userinput.email,JSON.stringify(userinput));
    showuser(userinput);
    
    nameInput.value = '';
    mobileInput.value='';
    emailInput.value = '';
  }
}

function showuser(obj){
  const parentitem=document.getElementById("users");
  const childitem=document.createElement("li");
  childitem.textContent=obj.name+ ":"+obj.mobile+":"+obj.email;

  const deleteitem =document.createElement("input");
  deleteitem.type="button";
  deleteitem.value="delete";
  
  const edititem =document.createElement("input");
  edititem.type="button";
  edititem.value="edit";

  deleteitem.onclick=()=>{
    localStorage.removeItem(obj.email);
    parentitem.removeChild(childitem);
  }
  edititem.onclick=()=>{
    localStorage.removeItem(obj.email);
    parentitem.removeChild(childitem);
    document.getElementById("name").value=obj.name;
    document.getElementById("email").value=obj.email;
    document.getElementById("number").value=obj.mobile;
    
  }
  childitem.appendChild(deleteitem);
  childitem.appendChild(edititem);
  parentitem.appendChild(childitem);
}