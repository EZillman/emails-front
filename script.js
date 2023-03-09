
let newUsername = document.getElementById('newUsername');
let newEmail = document.getElementById('newEmail');
let saveUserBtn = document.getElementById('saveUserBtn');


fetch('http://localhost:3000/users/')
.then(res => res.json())
.then(userData => {
    postUser(userData)
}); 

/*
function printUsers(users) {
    const userList = document.getElementById('userList');

    userList.innerHTML = '';

    users.map(user => {
        let li = document.createElement('li');
        li.innerText = user.name;
        userList.appendChild(li);
    });
}; */

saveUserBtn.addEventListener('click', () => {
    let userData = {name: newUsername.value, email: newEmail.value};

    postUser(userData);
    newUsername.value = '';
    newEmail.value = '';
});

function postUser(userData) {
    fetch('http://localhost:3000/users/add', {
        method: 'POST',
        headers : {'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
