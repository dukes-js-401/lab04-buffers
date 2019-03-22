'use strict';

const fs = require('fs');
const buffer = Buffer([39,117,115,101,32,115,116,114,105,99,116,39,59,108,101,116,32,97,61,40,41,61,62,123,108,101,116,32,110,61,91,39,71,114,101,103,111,114,121,39,44,39,68,97,114,99,121,39,44,39,82,111,119,97,110,39,93,59,110,46,102,111,114,69,97,99,104,40,101,32,61,62,123,32,99,111,110,115,111,108,101,46,108,111,103,40,101,41,59,125,41,59,125,59,97,40,41,59]);


fs.writeFile('./files/loop.js', buffer, (err) => {
  if (!err) {
    console.log('file created');
  }
});

//************************************ PART 2 ****************************************/

const os = require('os');
console.log(os.endianness());  //LE

// fs.readFile('./files/pair-programming.txt', (err, data) => {
//   if (!err) {
//     let pairBuff = Buffer.from(data);
//     let workingBuff = [];
//     pairBuff.forEach(ch => {
//       workingBuff.push(ch);
//       for (let i = 0; i < 20; i++) {
//         console.log(workingBuff[i]);
//       }

//     });

//   }

// });

// workingBuff.unshift(60, 97, 114, 116, 105, 99, 108, 101, 62);
