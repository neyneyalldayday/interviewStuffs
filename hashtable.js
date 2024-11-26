// class HashTable {
//     constructor(size){
//       this.data = new Array(size);
    
//     }

//     set(key, value){    
//      const newEntry = new Array(2)
//      const newString = key
//      const newValue = value
//       newEntry.unshift(newString)
//       newEntry.push(newValue)
//       console.log(newEntry, "this new entry")
//       this.data.push(newEntry)
     
//     }

//     get(key){
//      console.log(this.data ,"yo")
//      this.data.forEach( entry => {
//      if( entry.includes(key)){
//         console.log(key)
//      }
//      })

//     }
//     _hash(key) {
//       let hash = 0;
//       for (let i =0; i < key.length; i++){
//           hash = (hash + key.charCodeAt(i) * i) % this.data.length
//       }
//       return hash;
//     }
//   }
  
//   const myHashTable = new HashTable(50);
//   console.log(myHashTable)
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')
  


class HashTable {
  constructor(size) {
      this.data = new Array(size);
  }

  _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
  }

  set(key, value) {
      const address = this._hash(key);
      if (!this.data[address]) {
          this.data[address] = [];
      }
      // Check for existing key and update if found
      for (let i = 0; i < this.data[address].length; i++) {
          if (this.data[address][i][0] === key) {
              this.data[address][i][1] = value;
              return;
          }
      }
      // If key doesn't exist, push new key-value pair
      this.data[address].push([key, value]);
  }

  get(key) {
      const address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
              if (currentBucket[i][0] === key) {
                  return currentBucket[i][1];
              }
          }
      }
      return undefined;
  }

  keys() {
      const keysArray = [];
      for (let i = 0; i < this.data.length; i++) {
          if (this.data[i]) {
              for (let j = 0; j < this.data[i].length; j++) {
                  keysArray.push(this.data[i][j][0]);
              }
          }
      }
      return keysArray;
  }
}

// Example usage:
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes')); // 10000
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples')); // 9
console.log(myHashTable.keys()); // ['grapes', 'apples']