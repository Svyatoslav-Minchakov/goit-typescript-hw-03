class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: false;
  protected key: Key;
  private tenants: Person[] = [];
  abstract openDoor(key: Key): void;
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("You entered to the house.");
    } else {
      console.log("Door is closed. You can't enter.");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened.");
    } else {
      console.log("The key is wrong. The door is still closed.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
