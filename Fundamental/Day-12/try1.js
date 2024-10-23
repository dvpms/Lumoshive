class Engine {
    constructor(type, horsePower) {
      this.type = type;
      this.horsePower = horsePower;
    }
  
    getEngineInfo() {
      return `Type: ${this.type}, Horse Power: ${this.horsePower} HP`;
    }
  }
  
  class Transmission {
    constructor(type) {
      this.type = type;
    }
  
    getTransmissionType() {
      return `Transmission Type: ${this.type}`;
    }
  }
  
  class Wheels {
    constructor(size, type) {
      this.size = size;
      this.type = type;
    }
  
    getWheelsInfo() {
      return `Size: ${this.size}-inch, Type: ${this.type}`;
    }
  }

  class Car {
    constructor(brand, model, engine, transmission, wheels) {
      this.brand = brand;
      this.model = model;
      this.engine = engine.getEngineInfo(engine);
      this.transmission = transmission.getTransmissionType(transmission);
      this.wheels = wheels.getWheelsInfo(wheels);
    }
  
    getCarInfo() {
      return (
        `Brand: ${this.brand}, Model: ${this.model}\n` +
        `Engine: ${this.engine}\n` +
        `Transmission: ${this.transmission}\n` +
        `Wheels: ${this.wheels}`
      );
    }
  }
  
  // Membuat instance Engine, Transmission, dan Wheels
  const engine = new Engine("V8", 450);
  const transmission = new Transmission("Automatic");
  const wheels = new Wheels(18, "Alloy");
  
  // Membuat instance Car
  const car = new Car("Ford", "Mustang", engine, transmission, wheels);
  console.log(car.getCarInfo());