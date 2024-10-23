+-- Class Barang
|  +-- namaBarang (properti)
|  +-- harga (properti)
|  +-- getInfoBarang() (metode)

+-- Class Keranjang
|  +-- daftarBarang (array berisi instance Barang)
|  |  +-- Barang 1
|  |  +-- Barang 2
|  |  +-- ...
|  +-- tambahBarang() (metode)
|  +-- totalHarga() (metode)

+-- Class Membership
|  +-- namaMember (properti)
|  +-- tipeMembership (properti)
|  +-- diskonMember() (metode)

+-- Class Transaksi
|  +-- keranjang (instance dari Keranjang)
|  +-- member (instance dari Membership)
|  +-- hitungTotalAkhir() (metode)