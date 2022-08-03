const cetakNama = nama => `Halo, nama saya ${nama}`;

const PI = 3.14;

const murid = {
    nama : `Tifani`,
    kelas : 2,
    cetakMurid() {
        return `Halo, nama saya ${this.nama}, saya kelas ${this.kelas}`
    },
};

/* module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.murid = murid; */

/* module.exports = {
    cetakNama: cetakNama,
    PI: PI,
    murid: murid
}; */

module.exports = {cetakNama, PI, murid};