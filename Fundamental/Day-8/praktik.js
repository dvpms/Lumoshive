function prosesPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = false;
        if (success) {
          resolve("Proses selesai dengan sukses!");
        } else {
          reject("Proses gagal!");
        }
      },2000);
      console.log("Proses sedang berjalan....");
    });
  }

  async function jalankanProses() {
    try {
      const hasil = await prosesPromise();
      console.log(hasil); // Jika promise resolved
    } catch (error) {
      console.error(error); // Jika promise rejected
    }
  }
  jalankanProses();