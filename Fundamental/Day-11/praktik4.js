class User {
    #name;
    #role;
  
    constructor(name, role) {
      this.#name = name;
      this.#role = role;
    }
  
    getRole() {
      return this.#role;
    }
  
    get name() {
      return this.#name;
    }
  }
  
  class Dosen extends User {
    #nilaiMahasiswa;
  
    constructor(name) {
      super(name, 'Dosen');
      this.#nilaiMahasiswa = {};
    }
  
    beriNilai(mahasiswa, nilai) {
      this.#nilaiMahasiswa[mahasiswa.name] = nilai;
    }
  
    lihatNilai(mahasiswa) {
      return this.#nilaiMahasiswa[mahasiswa.name];
    }
  
    editNilai(mahasiswa, nilai) {
      this.#nilaiMahasiswa[mahasiswa.name] = nilai;
    }
  
    get nilaiMahasiswa() {
      return this.#nilaiMahasiswa;
    }
  }
  
  class Mahasiswa extends User {
    #nilai;
  
    constructor(name) {
      super(name, 'Mahasiswa');
      this.#nilai = null;
    }
  
    lihatNilai() {
      return this.#nilai;
    }
  
    set nilai(nilai) {
      this.#nilai = nilai;
    }
  
    get nilai() {
      return this.#nilai;
    }
  }
  
  let dosen = new Dosen('Pak Dosen');
  let budi = new Mahasiswa('Budi');
  
  dosen.beriNilai(mahasiswa, 80);
  
  mahasiswa.nilai = dosen.nilaiMahasiswa[mahasiswa.name];
  console.log(mahasiswa.nilai);
  
  dosen.editNilai(mahasiswa, 85);
  console.log(mahasiswa.nilai);
  console.log(dosen.nilaiMahasiswa);