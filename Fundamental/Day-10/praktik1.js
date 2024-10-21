// Buatlah class bernama Mahasiswa dengan properti:
// nama (string)
// nim (string)
// jurusan (string)
// Method perkenalkan() yang menampilkan pesan:
// "Halo, nama saya [nama] dengan NIM [nim] dari jurusan [jurusan]."
// Buatlah instance dari class Mahasiswa dengan data berikut:
// Nama: Budi
// NIM: 12345
// Jurusan: Teknik Informatika
// Jalankan method perkenalkan() dari instance tersebut dan tampilkan output.

class Mahasiswa {
    constructor(nama, nim, jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }
    perkenalkan() {
        console.log(`Halo, nama saya ${this.nama} dengan NIM ${this.nim} dari jurusan ${this.jurusan}.`);
    }
};

const budi = new Mahasiswa("Budi", "12345", "Teknik Informatika");
budi.perkenalkan();