const fs = require('fs');
//if file doesn't exist, it will create file for us.
fs.readFile('./hello.txt', (err,data) => { //read the file and respod accordigly.
    console.time('timecalculate');
    if(err){
        console.log('errooooorrrrr');
    }
    console.log('1', 'Async', data.toString('utf8')); //utf-8 is form of encoding
    console.timeEnd('timecalculate'); // calculte the execution time.

})

const file = fs.readFileSync('./hello.txt'); //Synchronous
console.log('2', 'Sync', file.toString());

// APPEND
// fs.appendFile('./hello.txt', 'This is so cool!', err => {  //appends given text to the file
//     if(err){
//         console.log(err);
//     }
// })

// WRITE
// fs.writeFile('bye.txt', 'sad to see you', err => {
//     if(err) { 
//         console.log(err)
//     }
// });

// DELETE
fs.unlink('./bye.txt', err => {
    if(err){
        console.log(err)
    }
    console.log('Inception');
});