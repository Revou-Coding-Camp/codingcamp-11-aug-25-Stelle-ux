window.onload = function() {
    welcomeSpeech();
}

/**
 * Menampilkan prompt untuk meminta nama pengguna dan
 * mengubah teks elemen dengan id 'user-greeting' sesuai nama yang dimasukkan.
 * Jika nama tidak diisi, akan menampilkan 'Guest'.
 */
function welcomeSpeech() {
    let username = prompt("What is your name?");
    if (username != '') {
        document.getElementById("user-greeting").innerText = username;
    } else {
        alert("Please enter your name.");
    }
}

/**
 * Mengambil pesan dari input dengan id 'message' dan
 * menampilkan alert sesuai isi pesan.
 * Jika pesan kosong, akan meminta pengguna untuk mengisi pesan.
 */
function sendMessage() {
    let message = document.getElementById("message").value;
    if (message != '') {
        alert("Your message has been sent: " + message);
    }else {
        alert("Please enter a message before sending.");
    }
}