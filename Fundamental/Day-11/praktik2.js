class Room {
  constructor(type, pricePerNight) {
    this.type = type;
    this.pricePerNight = pricePerNight;
  }

  calculateTotalPrice(nights) {
    return this.pricePerNight * nights;
  }
}

class Standard extends Room {
  constructor() {
    super("Standard Room", 500000);
  }
}

class Deluxe extends Room {
  constructor() {
    super("Deluxe Room", 1000000);
  }

  calculateTotalPrice(nights) {
    return super.calculateTotalPrice(nights) + ` (Gratis Sarapan)`;
  }
}

class Suite extends Room {
  constructor() {
    super("Suite Room", 2000000);
  }
  calculateTotalPrice(nights) {
    let totalPrice = super.calculateTotalPrice(nights);
    if (nights > 3) {
      totalPrice *= 0.1;
      return totalPrice + " (Gratis Akses Kolam Renang)";
    }
    return totalPrice;
  }
}

const rooms = [new Standard(), new Deluxe(), new Suite()];

function displayTotalPrice(nights) {
  rooms.map((room) => {
    console.log(
      `Total Harga ${nights} malam dengan type ${
        room.type
      }: ${room.calculateTotalPrice(nights)}`
    );
  });
}

displayTotalPrice(2);
console.log("================================================");
displayTotalPrice(5);
