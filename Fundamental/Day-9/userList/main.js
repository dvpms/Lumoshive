let users = [];
const api = "https://randomuser.me/api";
const results = 30;
const usersPerPage = 8; // Jumlah user yang ditampilkan per halaman
let currentPage = 1; // Halaman saat ini

// Fetch data dari API
fetch(`${api}?results=${results}`)
.then((res) => res.json())
.then((data) => {
    users = data.results;
    displayUsers(); // Tampilkan pengguna di halaman pertama
    setupPagination(); // Buat pagination
    document.getElementById('loading').style.display = 'none'; // Sembunyikan loading
});

// Fungsi untuk menampilkan daftar user berdasarkan halaman
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Kosongkan list sebelum diisi ulang

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex); // Ambil user sesuai halaman

    // Looping dan menampilkan user
    usersToDisplay.forEach((user) => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
            <p>${user.location.city}, ${user.location.state}</p>
        `;

        userList.appendChild(userCard);
    });
}

// Fungsi untuk membuat pagination
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Kosongkan pagination sebelum diisi ulang
    const totalPages = Math.ceil(users.length / usersPerPage); // Hitung jumlah halaman

    // Tombol "Previous"
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.disabled = currentPage === 1; // Nonaktifkan tombol jika di halaman pertama
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayUsers();
            setupPagination();
        }
    });
    pagination.appendChild(prevButton);

    // Tombol halaman
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        if (i === currentPage) {
            pageButton.classList.add('active'); // Tandai halaman aktif
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayUsers();
            setupPagination();
        });
        pagination.appendChild(pageButton);
    }

    // Tombol "Next"
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages; // Nonaktifkan tombol jika di halaman terakhir
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayUsers();
            setupPagination();
        }
    });
    pagination.appendChild(nextButton);
}

// Fungsi untuk pencarian user
function searchUser() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filteredUsers = users.filter((user) => {
            const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
            return fullName.includes(keyword);
        });

        currentPage = 1; // Reset halaman ke 1 saat pencarian
        users = filteredUsers; // Update data user dengan hasil pencarian
        displayUsers();
        setupPagination();
    });
}

// Panggil fungsi pencarian setelah halaman dimuat
searchUser();
