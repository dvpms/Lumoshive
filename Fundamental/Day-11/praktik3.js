// Sistem Inventarisasi Toko Elektronik

// Buat sistem inventarisasi toko elektronik dengan beberapa jenis produk seperti Laptop, Smartphone, dan Tablet, di mana setiap produk memiliki cara berbeda dalam menentukan garansi dan harga jual:

// 1. Laptop:

// a. Garansi: 2 tahun.

// b. Harga jual ditambahkan biaya pajak 10%.

// 2. Smartphone:

// a. Garansi: 1 tahun.

// b. Mendapat diskon 5% jika dibeli lebih dari 1 unit.

// 3. Tablet:

// a. Garansi: 6 bulan.

// b. Harga jual tetap tanpa pajak atau diskon.

// Tugas:

// · Buat class Product sebagai class induk dengan method calculatePrice(quantity, basePrice) untuk menghitung harga total.

// · Buat subclass Laptop, Smartphone, dan Tablet dengan logika berbeda untuk perhitungan harga dan garansi.

// · Tampilkan informasi produk dan harga total untuk setiap jenis produk dalam array.

class Product {
    constructor(name, warranty) {
        this.name = name;
        this.warranty = warranty;
    }
    calculatePrice(quantity, basePrice) {
        return basePrice * quantity;
    }
}

class Laptop extends Product {
    calculatePrice(quantity, basePrice) {
        return super.calculatePrice(quantity, basePrice) * 1.1;
    }
}

class Smartphone extends Product {

        calculatePrice(quantity, basePrice) {
            if (quantity > 1) {
                return super.calculatePrice(quantity, basePrice) * 0.05;
            }
        }
}

class Tablet extends Product {
    calculatePrice(quantity, basePrice) {
        return super.calculatePrice(quantity, basePrice);
    }
}

function displayPrice(){
    const products = [
        new Laptop("Asus", 2),
        new Smartphone("Xiaomi", 1),
        new Tablet("Tablet", 6)
    ];

    products.map((product) =>{
        console.log(`Total Harga untuk ${product.name}: ${product.calculatePrice(10, 1000000)} garansi: ${product.warranty} tahun`);
    })
}

displayPrice();