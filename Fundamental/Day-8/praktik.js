function prosesPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = false;
        if (success) {
          resolve("Proses selesai dengan sukses!");
        } else {
          reject("Proses gagal!");
        }
      }, 2000);
    });
  }
  
  prosesPromise()
    .then((pesan) => {
      console.log(pesan); // Jika resolved
    })
    .catch((error) => {
      console.error(error); // Jika rejected
    });