class Produk {
    #nama;
    #harga;
    #stok;

    constructor(nama, harga, stok) {
        this.#nama = nama;
        this.#harga = harga;
        this.#stok = stok;
    }

    get nama() {
        return this.#nama;
    }

    get harga() {
        return this.#harga;
    }

    get stok() {
        return this.#stok;
    }

    set stok(stok) {
        this.#stok = stok;
    }

    kurangiStok(jumlah) {
        if (this.#stok >= jumlah) {
            this.#stok -= jumlah;
            return true;
        } else {
            console.log(`Stok ${this.#nama} tidak cukup`);
            return false;
        }
    }

    getDetails() {
        return `Nama: ${this.#nama}, Harga: ${this.#harga}, Stok: ${this.#stok}`;
    }
}

class Gudang {
    #listProduk = [];

    set tambahProduk(produk) {
        this.#listProduk.push(produk);
    }

    get listProduk() {
        return this.#listProduk;
    }
}

class Transaction {
    constructor(produk, jumlah) {
        this.produk = produk;
        this.jumlah = jumlah;
        this.total = this.hitungTotal();
    }

    hitungTotal() {
        return this.produk.harga * this.jumlah;
    }

    lakukanTransaksi() {
        if (this.produk.kurangiStok(this.jumlah)) {
            console.log(
                `Transaksi berhasil: ${this.jumlah} unit ${this.produk.nama} dengan total ${this.total}`
            );
            return true;
        } else {
            console.log("Transaksi gagal karena stok tidak cukup");
            return false;
        }
    }
}

class Report {
    #listTransaksi = [];

    tambahTransaksi(transaksi) {
        this.#listTransaksi.push(transaksi);
    }

    tampilkanLaporan() {
        console.log("Laporan Penjualan:");
        this.#listTransaksi.forEach((transaksi, index) => {
            console.log(
                `Transaksi ${index + 1}: ${transaksi.jumlah} unit ${transaksi.produk.nama} - Total: ${transaksi.total}`
            );
        });
    }
}

const gudang = new Gudang();
const laptop = new Produk("Laptop", 10000000, 5);
const ebook = new Produk("E-book", 50000, 100);

gudang.tambahProduk = laptop;
gudang.tambahProduk = ebook;

const report = new Report();

const transaksi1 = new Transaction(laptop, 2);
if (transaksi1.lakukanTransaksi()) {
    report.tambahTransaksi(transaksi1);
    /*mengecek apakah stok produk cukup untuk menyelesaikan transaksi.
     Jika stok tidak cukup, method ini mengembalikan false, dan transaksi dianggap gagal.*/
}

const transaksi2 = new Transaction(ebook, 5);
if (transaksi2.lakukanTransaksi()) {
    report.tambahTransaksi(transaksi2);
}
console.log("===============================================");
report.tampilkanLaporan();

console.log("===============================================");
console.log(laptop.getDetails());
console.log(ebook.getDetails());

