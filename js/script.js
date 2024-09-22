function checkLoginStatus() {
    const stored = localStorage.getItem('UserLoggedIn');
    const storedUser = JSON.parse(localStorage.getItem(stored));
    const loggedIn = localStorage.getItem('LoggedIn');

    if (loggedIn) {
        const buyDownloadBtns = document.querySelectorAll('.blue_btn.header');
        buyDownloadBtns.forEach(btn => {
            btn.textContent = 'Download';
            btn.href = 'download.html';
        });

        const accountDownloadBtns = document.querySelectorAll('.profile');
        accountDownloadBtns.forEach(btn => {
            btn.textContent = 'Account';
            btn.href = 'account.html';
        });

        const btnDownloadBtns = document.querySelectorAll('.btn.btn-info');
        btnDownloadBtns.forEach(btn => {
            btn.textContent = 'Download';
            btn.href = 'download.html';
        });
    }

    if (loggedIn && storedUser) {
        
        const emailInput = document.querySelector('.input_email');
        if (emailInput) {
            emailInput.value = storedUser.email;
        }
    }
}

function AccountBought(username) {
    const stored = localStorage.getItem('UserLoggedIn');
    const userData = JSON.parse(localStorage.getItem(stored));
    
    if (!userData) {
        console.error("User not found");
        return;
    }

    const ramOwned = userData.RAM; 
    const trashOwned = userData.Trashcan; 

    const checkownram = document.getElementById('checkownram'); 
    const dllinkram = document.getElementById('dllinkram'); 
    const dldivram = document.getElementById('dldivram'); 
    const purchasedram = document.getElementById('purchasedram'); 
    const dldivboxram = document.getElementById('dldivboxram'); 
    
    const checkowntrash = document.getElementById('checkowntrash'); 
    const dllinktrash = document.getElementById('dllinktrash'); 
    const dldivtrash = document.getElementById('dldivtrash'); 
    const purchasedtrash = document.getElementById('purchasedtrash'); 
    const dldivboxtrash = document.getElementById('dldivboxtrash'); 


    if (ramOwned) {
        checkownram.src = 'img/owned.png'; 
        dllinkram.href = '#'; 
        dllinkram.textContent = 'Download';
        purchasedram.textContent = 'Permanent purchase'
        dldivboxram.classList.remove('v_box');
        dldivboxram.classList.remove('v__buy');
        dldivboxram.classList.add('v-ram_box', 'v_box');
        dllinkram.classList.add('dl_btn', 'd_v4_btn');
        dldivram.classList.add('download_place');
    } else {
        checkownram.src = 'img/unowned.png';
        dllinkram.href = 'purchase-ram.html';
        dllinkram.textContent = 'Buy';
        purchasedram.textContent = 'Not purchased'
        dldivboxram.classList.remove('v-ram_box');
        dldivboxram.classList.remove('v_box');
        dldivboxram.classList.add('v_box', 'v__buy');
        dllinkram.classList.add('blue_btn');
        dldivram.classList.remove('download_place'); 
    }

    if (trashOwned) {
        checkowntrash.src = 'img/owned.png'; 
        dllinktrash.href = '#'; 
        dllinktrash.textContent = 'Download';
        purchasedtrash.textContent = 'Permanent purchase'
        dldivboxtrash.classList.remove('v_box');
        dldivboxtrash.classList.remove('v__buy');
        dldivboxtrash.classList.add('v-ram_box', 'v_box');
        dllinktrash.classList.add('dl_btn', 'd_v4_btn');
        dldivtrash.classList.add('download_place');
    } else {
        checkowntrash.src = 'img/unowned.png';
        dllinktrash.href = 'purchase-trashcan.html';
        dllinktrash.textContent = 'Buy';
        purchasedtrash.textContent = 'Not purchased'
        dldivboxtrash.classList.remove('v-ram_box');
        dldivboxtrash.classList.remove('v_box');
        dldivboxtrash.classList.add('v_box', 'v__buy');
        dllinktrash.classList.add('blue_btn');
        dldivtrash.classList.remove('download_place'); 
    }
}

function Passwordview() {
    const stored = localStorage.getItem('UserLoggedIn');
    const userData = JSON.parse(localStorage.getItem(stored));
    
    if (!userData) {
        console.error("User not found");
        return;
    }

    const password = userData.password;
    const email = userData.email;
    const username = userData.username;

    const pass = document.getElementById('pass'); 
    const emailshow = document.getElementById('emailshow'); 
    const user = document.getElementById('user'); 

    user.textContent = username;
    pass.textContent = password;
    emailshow.textContent = email;
}

if (window.location.pathname.includes('account.html'))
{
    Passwordview()
}


if (window.location.pathname.includes('download.html'))
{
    
    document.addEventListener('DOMContentLoaded', function () {
        const loggedInUser = localStorage.getItem('UserLoggedIn');
        AccountBought(loggedInUser);
    });
}


if (window.location.pathname.includes('support.html'))
{
    checkLoginStatus();
    handleSupportForm();
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm_email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (!username || !email || !confirmEmail || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }
    if (email !== confirmEmail) {
        alert("Emails do not match");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    const userData = {
        username,
        email,
        password,
        RAM: false,
        Trashcan: false
    };

    localStorage.setItem(username, JSON.stringify(userData));
    alert("Registration successful!");

    window.location.href = 'login.html';
});

document.getElementById('registerFormPurchase')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm_email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (!username || !email || !confirmEmail || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }
    if (email !== confirmEmail) {
        alert("Emails do not match");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    const userData = {
        username,
        email,
        password,
        RAM: false,
        Trashcan: false
    };

    localStorage.setItem(username, JSON.stringify(userData));
    localStorage.setItem('LoggedIn', true);
    localStorage.setItem('UserLoggedIn', username);
    alert("Registration successful!");

    window.location.href = 'purchase-ram.html';
});


document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const loginInput = document.getElementById('user_login').value;
    const passwordInput = document.getElementById('user_pass').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const storedUser = JSON.parse(localStorage.getItem(loginInput));

    if (!storedUser) {
        alert("No user found. Please register.");
        return;
    }

    if ((loginInput === storedUser.username || loginInput === storedUser.email) && passwordInput === storedUser.password) {
        localStorage.setItem('LoggedIn', true);
        localStorage.setItem('UserLoggedIn', loginInput);
        alert("Login successful!");

        if (rememberMe) {
            localStorage.setItem('SaveLoggedIn', true);
        }

        window.location.href = 'home.html';
    } else {
        alert("Invalid login credentials");
    }
});

function handleSupportForm() {
    document.addEventListener('DOMContentLoaded', function () {
        const supportForm = document.querySelector('.supportForm');
    
        if (supportForm) {
            supportForm.addEventListener('submit', function (e) {
                e.preventDefault();
    
                const emailInput = supportForm.querySelector('.input_email').value;
                const messageInput = supportForm.querySelector('.enter_area').value;
    
                alert(`Thank you for your message, ${emailInput}! We will reply to you as soon as possible.`);
    
                supportForm.querySelector('.input_email').value = '';
                supportForm.querySelector('.enter_area').value = '';
            });
        }
    });
}

function generateReference() {
    function getRandomSegment() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    const reference = getRandomSegment() + '-' + getRandomSegment();
    return reference;
}


function purchaseRAM() {
    const loggedInUser = localStorage.getItem('LoggedIn');

    const stored = localStorage.getItem('UserLoggedIn');

    const userData = JSON.parse(localStorage.getItem(stored));

    if (!loggedInUser) {
        alert("You need to be logged in to complete the purchase.");
        return;
    }

    if (!userData) {
        alert("User data not found.");
        return;
    }

    userData.RAM = true;

    localStorage.setItem(stored, JSON.stringify(userData));
    
    const purchaseReference = generateReference();

    alert(`Thank you for purchasing RAM, ${userData.username}! Your application is now active! You will recieve an email purchase reciept immidiately.\nYour Purchase Reference: ${purchaseReference}`);

    window.location.href = 'download.html';
}

function purchaseTrashcan() {
    const loggedInUser = localStorage.getItem('LoggedIn');

    const stored = localStorage.getItem('UserLoggedIn');

    const userData = JSON.parse(localStorage.getItem(stored));

    if (!loggedInUser) {
        alert("You need to be logged in to complete the purchase.");
        return;
    }

    if (!userData) {
        alert("User data not found.");
        return;
    }

    userData.Trashcan = true;

    localStorage.setItem(stored, JSON.stringify(userData));

    const purchaseReference = generateReference();

    alert(`Thank you for purchasing Trashcan, ${userData.username}! Your application is now active! You will recieve an email purchase reciept immidiately.\nYour Purchase Reference: ${purchaseReference}`);

    window.location.href = 'download.html';
}

document.querySelector('.submit_checkoutram')?.addEventListener('click', function (e) {
    e.preventDefault(); 
    purchaseRAM();
});

document.querySelector('.submit_checkouttrashcan')?.addEventListener('click', function (e) {
    e.preventDefault(); 
    purchaseTrashcan();
});

function logout() {
    localStorage.removeItem('LoggedIn');
    localStorage.removeItem('UserLoggedIn');
    localStorage.removeItem('SaveLoggedIn');

    alert("You have been logged out.");

    window.location.href = 'home.html';
}
