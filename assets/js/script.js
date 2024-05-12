// password generator info
window.alert("you can selelect password legnth (4 , 6 , 8 , 10 , 12 , 14)\nAny length password will generate\nClick the password to copy");

function generatePassword() {
    const length = document.getElementById('slider').value; // Length of the generated password
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const charset = [];
    if (uppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (lowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (numbers) charset.push('0123456789');
    if (symbols) charset.push('!@#$%^&*()_+-=[]{}|;:,.<>?');

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomCharset = charset[Math.floor(Math.random() * charset.length)];
        password += randomCharset[Math.floor(Math.random() * randomCharset.length)];
    }
    
    document.getElementById('password').value = password;
}

// slider animation and control
var selector=document.querySelector('.selectbtn');

const positions = {
    4: "0%",
    6: "20%",
    8: "40%",
    10: "60%",
    12: "80%",
    14: "95%"
};

slider.oninput = () => selector.style.left = positions[slider.value];

// copy password to clipboard
function copyToClipboard() {
    // Get the text field
    var copyPass = document.getElementById("password").value;
  
    if (copyPass == "") {
        // empty password error
        alert("Please generate password first");
        
    } else{ 
        // Copy the text inside the text field
       navigator.clipboard.writeText(copyPass);
     
       // Alert the copied text
       alert("Copied to clipboard");

       // remove the password
       document.getElementById("password").value = "";
    }
}
  