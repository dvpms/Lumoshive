class Dompet {
    constructor(saldo) {
      this.saldo = saldo;
    }
  
    topUp(nominal) {
      this.saldo += nominal;
      console.log(`Top-up Rp ${nominal} berhasil!`);
      const bonus = nominal * 0.05;
      this.saldo += bonus;
      console.log(`Bonus Rp ${bonus} diterima!`);
    }
  
    bayar(nominal) {
      if (this.saldo >= nominal) {
        this.saldo -= nominal;
        console.log(`Pembayaran Rp ${nominal} berhasil!`);
      } else {
        console.log('Saldo tidak mencukupi!');
      }
    }
  
    cekSaldo() {
      console.log(`Saldo saat ini: Rp ${this.saldo.toLocaleString('id-ID')},00`);
    }
  }
  
  class Transaksi {
    constructor(dompet, nominal, jenisTransaksi) {
      this.dompet = dompet;
      this.nominal = nominal;
      this.jenisTransaksi = jenisTransaksi;
      this.tanggalTransaksi = new Date();
    }
  
    infoTransaksi() {
      console.log(`${this.jenisTransaksi} Rp ${this.nominal.toLocaleString('id-ID')} pada ${this.tanggalTransaksi.toLocaleDateString('id-ID')} pukul ${this.tanggalTransaksi.toLocaleTimeString('id-ID')}`);
    }
  }
  
  class DompetPremium extends Dompet {
    topUp(nominal) {
      super.topUp(nominal);
    }
  
    bayar(nominal) {
      super.bayar(nominal);
    }
  
    cekSaldo() {
      super.cekSaldo();
    }
  }
  
  const dompet = new DompetPremium(500000);
  dompet.cekSaldo();
  dompet.topUp(100000);
  dompet.cekSaldo();
  dompet.bayar(200000);
  dompet.cekSaldo();
  const transaksi2 = new Transaksi(dompet, 200000, 'Pembayaran');
  transaksi2.infoTransaksi();