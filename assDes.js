// this will be the assecdning and the diseednikng order;

// first let's find out the assecdning and the descending oder;
function findAss() {
  let numberArr = [1, 3, 42, 3, 54];
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      let temp;
      if (numberArr[i] > numberArr[j]) {
        temp = numberArr[i];
        numberArr[i] = numberArr[j];
        numberArr[j] = temp;
      }
    }
  }

  // for the print;
  for (let i = 0; i < numberArr.length; i++) {
    console.log(numberArr[i]);
  }
}

findAss(); // we just print out the output
// now remaining is the print;

class AscDsc {
  // do i need the constructor ? || constructor can be also put by default by the js;
  /* simply what i want is that 
    the user can input the value and find out the assecdning or the descending number of it;
  (number) => find out the ascending;
     ^^ -----> [1,3,4,2,6,5]
    user.number([1,3,4,]); 
    user.showAsscending(); // now it should execute;
    */
  number(inputValue) {
    this.store = [...inputValue];
    console.log(this.store,"this store");
  
    showAsscending(this.store) {
    for(let i = 0; i < this.store.length; i++){
      for(let j = i +1 ; j < this.store.length; j++ ){
        let temp;
        if(number[i] > number[j]){
          temp = number[i];
          number[i] = number[j];
          number[j] = temp;
        }
          }
      }
      }
    }

  print() {
    for(let i = 0; i < this.store.length; i++){
      console.log(this.store[i]); // this should give the output of the ascending vise; 
    }
  }
}

const show = new AscDsc();
show.number([1,2,4,5])
console.log(show.print());


// Malai ya feri ascending ra descending mai chita bujheko chaina feri aile lai.
class FindAscending {
  constructor(){
    this.num = [1,3,8,2,4];    
  }
  // think about the right name. 
  manageInOdr() {
    console.log(this.num); // let's check it is it working or not?
    for(let i = 0; i <= this.num.length; i++){
      for(let j = i + 1; j<=this.num.length;j++){
        let temp;
        if(this.num[i] > this.num[j]){
          temp = this.num[i];
          this.num[i] = this.num[j]; 
          this.num[j] = temp;
        }
      }
    }
  }

  print(){
    for(let i = 0; i <= this.num.length; i++){
      console.log(this.num[i]);
    }
  }
}

const test = new FindAscending();
test.manageInOdr();
test.print(); // output : 1,2,3,4....;

// It work but i want this in the number form; 