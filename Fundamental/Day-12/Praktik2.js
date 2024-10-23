class Barang {
    constructor(namaBarang, harga) {
        this.namaBarang = namaBarang;
        this.harga = harga;
    }

    getInfoBarang() {
        return `${this.namaBarang} - Harga: ${this.harga}`;
    }
}

class Keranjang {
    constructor() {
        this.listBarang = [];
    }

    tambahBarang(barang) {
        this.listBarang.push(barang);        
    }

    daftarBarang() {
        return this.listBarang.map((barang) => barang.getInfoBarang()).join('\n');
      }

    totalHarga() {
        let total =  0;
        this.listBarang.map((barang) => {
            total += barang.harga;
        })
        console.log(total);
        return total;
    }
}

class Membership {
    constructor(namaMember, tipeMembership) {
        this.namaMember = namaMember;
        this.tipeMembership = tipeMembership;
    }

    diskonMember() {
        if(this.tipeMembership == 'Gold') {
            return 0.2;
        } else if(this.tipeMembership == 'Silver') {
            return 0.1
        } else {
            return 0.05;
        }
    }

    infoMember() {
        return `${this.namaMember} (${this.tipeMembership})`;
    }
}

class Transaksi {
    constructor(keranjang, member){
        this.keranjang = keranjang;
        this.member = member;
    }

    hitungTotalAkhir(){
        let diskon = this.member.diskonMember();
        let total = this.keranjang.totalHarga();
        const currencyFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        });
        const hitungTotalAkhir = total - (total * diskon);
        const result = currencyFormat.format(hitungTotalAkhir);
        return result;
    }
    
}


const budi = new Membership('Budi', 'Gold');

const keranjang = new Keranjang();

const sepatu = new Barang('Sepatu', 500000);
const tas = new Barang('Tas', 300000);

keranjang.tambahBarang(sepatu);
keranjang.tambahBarang(tas);

const transaksi = new Transaksi(keranjang, budi);
console.log(`
Member: ${transaksi.member.infoMember()}
Daftar Barang: 
${transaksi.keranjang.daftarBarang()}
Total Akhir: ${transaksi.hitungTotalAkhir()}
`)
