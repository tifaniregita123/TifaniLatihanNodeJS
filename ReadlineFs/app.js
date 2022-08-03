
const fs = require('fs');
/* 
fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
 */

const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Masukkkan nama anda : ', (nama) => {
    rl.question('Berapa nomor handphone anda? ', (no) => {
        
        const contact = {nama, no};
        const file = fs.readFileSync(`contacts.json`, `utf-8`);
        const contacts = JSON.parse(file);
        
        contacts.push(contact);
        
        fs.writeFileSync('contacts.json', JSON.stringify(contacts));
        
        console.log(`Halo ${nama}! Anda memasukkan nomer ${no}, Terimakasih`);
        rl.close();
    });
  });