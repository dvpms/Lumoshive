//Enkapsulasi
class Student {
    #name;
    #nim;
    constructor(name, nim) {
        this.#name = name;
        this.#nim = nim;
    }

    get name() {
        return this.#name;
    }

    get nim() {
        return this.#nim;
    }

    perkenalkan() {
        console.log(`Halo, nama saya ${this.#name} dengan NIM ${this.#nim}.`);
    }
}

const student = new Student("Budi", "12345");
student.perkenalkan();

// Abstraksi
class Mobil{
    constructor(merek){
        this.merek = merek;
    }
    #startengine(){
        console.log(`Mobil ${this.merek} telah dimulai`);
    }

    drive(){
        this.#startengine();
        console.log(`Mobil ${this.merek} bisa dikendaraii`);
    }
}

const mobil = new Mobil("Toyota");
mobil.drive()

// Polymorphism
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    perkenalkan(){
        console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
    }
}

class Mahasiswa extends Orang{
    constructor(nama, umur, nim){
        super(nama, umur);
        this.nim = nim;
    }
    perkenalkan(){
        super.perkenalkan();
        console.log(`Saya mahasiswa dengan NIM ${this.nim}.`);
    }
}

const budi = new Mahasiswa("Budi", 20, "12345");

// Inheritance
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    perkenalkan(){
        console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
    }
}

class Mahasiswa extends Orang{
    constructor(nama, umur, nim){
        super(nama, umur);
        this.nim = nim;
    }
    perkenalkan(){
        super.perkenalkan();
        console.log(`Saya mahasiswa dengan NIM ${this.nim}.`);
    }
}

// SRP
class MenulisPesan{
    writeMessage(){
        console.log("Pesan ditulis");
    }
}                            

class MengirimPesan{
    sendMessage(){
        console.log("Pesan terkirim");
    }
}

// OCP
class Lampu{
    lampuMenyala(){
        console.log("Lampu menyala");
    }
}

class LampuBerkedip extends Lampu{
    lampuBerkedip(){
        console.log("Lampu berkedip");
    }
}

// LSP
class HewanLaut{
    berenang(){
        console.log("Hewan laut berenang");
    }
}

class Ikan extends HewanLaut{
    berenang(){
        console.log("Ikan berenang");
    }
}

// ISP
// salah
class Machine{
    print(){}
    scan(){}
    fax(){}
}

// benar
class Printer{
    print(){}
}

class Scanner{
    scan(){}
}

class FAX{
    fax(){}
}

// DIV
class DataSource {
    fetchData() {}
}

class Database extends DataSource {
    fetchData() {
        return "Data from Database";
    }
}

class API extends DataSource {
    fetchData() {
        return "Data from API";
    }
}

class DataProcessor {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    process() {
        const data = this.dataSource.fetchData();
        console.log(`Processing: ${data}`);
    }
}

const database = new Database();
const databaseProcessor = new DataProcessor(database);
databaseProcessor.process();

const api = new API();
const apiProcessor = new DataProcessor(api);
apiProcessor.process();

