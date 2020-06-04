// Start by creating a variable `message`

let name = "Killian\n";
let username = "killian.moudery@epitech.eu\n";
let passWord = "******";

function set_name(name, username, passWord) {

    const print_name = ("name : " + name);
    const print_username = ("username : " + username);
    const pwd = ("password : " + passWord);

    let message = (print_name + print_username + pwd);
    console.log(message);
}

set_name(name, username, passWord);