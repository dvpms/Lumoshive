class Kendaraan {
    constructor(merek, model, tahun){
        this.merek = merek;
        this.model = model;
        this.tahun = tahun;
    }

    infoKendaraan(){
        return `Merek: ${this.merek}, Model: ${this.model}, Tahun: ${this.tahun}`
    }

}

class Mesin {
    constructor(tipe, tenagaKuda){
        this.tipe = tipe;
        this.tenagaKuda = tenagaKuda;
    }

    infoMesin(){
        return `${this.tipe}, Tenaga: ${this.tenagaKuda} HP`
    }
}

class Mobil extends Kendaraan {
    constructor(merek, model, tahun, mesin, kapasitasPenumpang){
        super(merek, model, tahun);
        this.kapasitasPenumpang = kapasitasPenumpang;
        this.mesin = mesin;
    }
    hargaKendaraan(){
        return 100000;
    }

    infoKendaraan(){
        return `${this.merek} ${this.model}, Tahun: ${this.tahun}`
    }
}

class Motor extends Kendaraan{
    constructor(merek, model, tahun, mesin,jenisMotor){
        super(merek, model, tahun);
        this.jenisMotor = jenisMotor;
        this.mesin = mesin.infoMesin();
    }

    hargaKendaraan(){
        const harga = 100000
        const currencyFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        })
        return harga;
    }

    infoMotor(){
        return `Merek: ${this.merek}, Model: ${this.model}, Tahun: ${this.tahun}, Jenis Motor: ${this.jenisMotor}, mesin: ${this.mesin}`
    }
}

class Membership {
    constructor(namaMember, tipeMembership){
        this.namaMember = namaMember;
        this.tipeMembership = tipeMembership;
    }

    diskonMember(){
        if(this.tipeMembership == 'Gold'){
            return 0.15
        }else if(this.tipeMembership == 'Silver'){
            return 0.1
        } else {
            return 0.05
        }
    }

    infoMember(){
        return `${this.namaMember} (${this.tipeMembership})`
    }

}

class Rental {
    constructor(kendaraan, member, lamaHari){
        this.kendaraan = kendaraan;
        this.member = member;
        this.tanggalRental = new Date(2024, 9, 24);
        this.lamaHari = lamaHari;
    }

    hitungTotal(){
        let diskon = this.member.diskonMember();
        let total = this.kendaraan.hargaKendaraan() * this.lamaHari;
        const currencyFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        });
        return currencyFormat.format(total - (total * diskon));
    }
}
// Kendaraan: Toyota Avanza, Tahun: 2021

// Jenis Mesin: Bensin, Tenaga: 120 HP

// Member: Siti (Silver)

// Tanggal Rental: Kamis, 24 Oktober 2024

// Lama Rental: 3 hari

// Total Harga: Rp 270000

let mesin = new Mesin('Bensin', 120);
let mobil = new Mobil('Toyota', 'Avanza', 2021, mesin, 5);
let member = new Membership('Siti', 'Silver');
let rental = new Rental(mobil, member, 3);

const formatter = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
const date = formatter.format(rental.tanggalRental);

console.log(`
Kendaraan: ${mobil.infoKendaraan()}
Jenis Mesin: ${mesin.infoMesin()}
Member: ${member.infoMember()}
Tanggal Rental: ${date}
Lama Rental: ${rental.lamaHari} hari
Total Harga: ${rental.hitungTotal()}
`)