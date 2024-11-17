# 📚 Pagination dengan React Hooks

Implementasi pagination sederhana menggunakan React Hooks (`useState`).

## 💡 Penjelasan

Kode ini bertujuan untuk membagi array `items` menjadi halaman-paginated berdasarkan jumlah item yang ditampilkan per halaman (`itemsPerPage`).

### 🛠️ State dan Konfigurasi

```javascript
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 3;
```
- `currentPage` mengatur halaman saat ini (dimulai dari 1).
- `itemsPerPage` menentukan jumlah item yang akan ditampilkan per halaman (3 item per halaman).

### 🔢 Perhitungan Indeks

```javascript
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
```
- `indexOfLastItem`: Menghitung indeks item terakhir pada halaman saat ini.
- `indexOfFirstItem`: Menghitung indeks item pertama pada halaman saat ini.
- `currentItems`: Menentukan subset dari `items` yang akan ditampilkan pada halaman saat ini.

### 🔄 Navigasi Halaman

#### Fungsi untuk Halaman Berikutnya

```javascript
const nextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};
```
- Berpindah ke halaman berikutnya jika `currentPage` belum mencapai `totalPages`.

#### Fungsi untuk Halaman Sebelumnya

```javascript
const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
```
- Berpindah ke halaman sebelumnya jika `currentPage` lebih besar dari 1.

## 📈 Perhitungan Total Halaman

```javascript
const totalPages = Math.ceil(items.length / itemsPerPage);
```
- Menghitung jumlah total halaman berdasarkan jumlah item dalam array `items`.

---

Dengan kode ini, Anda dapat dengan mudah mengatur tampilan data dalam bentuk paginated menggunakan fungsi navigasi sederhana untuk berpindah antar halaman. 🎉

---

## Kode Lengkap
```javascript
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

```