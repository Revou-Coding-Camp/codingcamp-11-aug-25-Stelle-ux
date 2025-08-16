// Window Onload Event Listener
// This function is called when the window is fully loaded
window.onload = function () {
    // POPUP NAMA SEKALI
    // This function prompts the user to enter their name, which is then stored in local storage and displayed on the page
    let savedName = localStorage.getItem("username");
    if (savedName) {
        document.getElementById("user-name").textContent = savedName;
    } else {
        let userName = prompt("Masukkan nama Anda:");
        if (userName && userName.trim() !== "") {
            document.getElementById("user-name").textContent = userName;
            localStorage.setItem("username", userName);
        } else {
            alert("Username tidak boleh kosong!");
        }
    }

    // ===== WAKTU REAL-TIME =====
    // This function updates the current time on the page every second
    function updateTime() {
        let now = new Date();
        document.getElementById("time").textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // ===== FORM SUBMIT =====
    // This function handles form submission, updating the output section with the user's input data
    document.getElementById("submitBtn").addEventListener("click", function(e) {
        e.preventDefault();

        let namaBaru = document.getElementById("nama").value;
        let tglBaru = document.getElementById("tanggal").value;
        let genderBaru = document.querySelector("input[name='gender']:checked");
        let pesanBaru = document.getElementById("pesan").value;

        // Ambil data lama dari output
        let namaLama = document.getElementById("Nama-pesan").textContent;
        let tglLama = document.getElementById("tgl-pesan").textContent;
        let genderLama = document.getElementById("gender-pesan").textContent;
        let pesanLama = document.getElementById("pesan-pesan").textContent;

        // Update hanya jika ada perubahan
        if (namaBaru && namaBaru !== namaLama) {
            document.getElementById("Nama-pesan").textContent = namaBaru;
        }
        if (tglBaru && tglBaru !== tglLama) {
            document.getElementById("tgl-pesan").textContent = tglBaru;
        }
        if (genderBaru && genderBaru.value !== genderLama) {
            document.getElementById("gender-pesan").textContent = genderBaru.value;
        }
        if (pesanBaru && pesanBaru !== pesanLama) {
            document.getElementById("pesan-pesan").textContent = pesanBaru;
        }

        // Tambahkan waktu input ke bagian bawah
    let now = new Date();
    let waktuInput = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
        document.getElementById("input-time").textContent = waktuInput;
        
        if (!namaBaru || !tglBaru || !genderBaru || !pesanBaru) {
    alert("Mohon isi semua form sebelum submit.");
    alert("Mohon isi semua form sebelum submit.");
    return;
}

        // Reset form
        document.getElementById("nama").value = "";
        document.getElementById("tanggal").value = "";
        document.querySelectorAll("input[name='gender']").forEach(function(gender) {
            gender.checked = false;
        });
        document.getElementById("pesan").value = "";
    });
};
