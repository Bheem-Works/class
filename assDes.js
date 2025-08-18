// find out the number into the asscending order;
class FindAscending {
  constructor(number) {
    this.num = number;
    console.log("number", number);
  }

  manageInOdr() {
    console.log(this.num); // let's check it is it working or not?
    for (let i = 0; i <= this.num.length; i++) {
      for (let j = i + 1; j <= this.num.length; j++) {
        let temp;
        if (this.num[i] > this.num[j]) {
          temp = this.num[i];
          this.num[i] = this.num[j];
          this.num[j] = temp;
        }
      }
    }
  }

  print() {
    for (let i = 0; i <= this.num.length; i++) {
      console.log(this.num[i]);
    }
  }
}

const test = new FindAscending([1, 34, 2, 76, 4]);
test.manageInOdr();
test.print(); // output : 1,2,3,4....;

// It work but i want this in the number form;
