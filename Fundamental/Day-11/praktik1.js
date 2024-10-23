class Transport {
  constructor(type, pricePerKm) {
    this.type = type;
    this.pricePerKm = pricePerKm;
  }

  calculateFare(distance) {
    return this.pricePerKm * distance;
  }
}

class Bus extends Transport {
  constructor() {
    super("Bus", 2000);
  }

  calculateFare(distance) {
    let fare = super.calculateFare(distance);
    if (distance > 50) {
      fare *= 0.85;
    }
    return fare;
  }
}

class Taxi extends Transport {
  constructor() {
    super("Taxi", 3500);
    this.fixCharge = 10000;
  }

  calculateFare(distance) {
    return super.calculateFare(distance) + this.fixCharge;
  }
}

class Angkot extends Transport {
  constructor() {
    super("Angkot", 5000);
  }

  calculateFare() {
    return this.pricePerKm;
  }
}

const transports = [new Bus(), new Taxi(), new Angkot()];

function displayFares(distance) {
  transports.map((transport) => {
    console.log(
      `Biaya perjalanan dengan ${
        transport.type
      } untuk ${distance} km adalah ${transport.calculateFare(distance)}`
    );
  });
}

displayFares(30);
console.log('=====================================');
displayFares(70);
  