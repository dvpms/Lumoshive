// Buatlah class Produk dengan properti:
// nama (string)
// harga (number)
// Gunakan getter untuk mendapatkan informasi produk dalam format:
// "Produk: [nama] - Harga: Rp[harga]"
// Gunakan setter untuk mengubah nama produk.
// Buat objek dari class Produk dengan nama "Laptop" dan harga 10000000.
// Gunakan setter untuk mengubah nama menjadi "Laptop Gaming" dan tampilkan hasil menggunakan getter.
class Produk {
    #nama;
    #harga;
    constructor(nama, harga) {
        this.#nama = nama;
        this.#harga = harga;
    }

    get info() {
        return `Produk: ${this.#nama} - Harga: Rp${this.#harga}`;
    }

    set nama(nama) {
        this.#nama = nama;
    }

    set harga(harga) {
        this.#harga = harga;
    }
}

const laptop = new Produk("Laptop", 10000000);
console.log(laptop.info);