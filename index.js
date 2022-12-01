console.time()
let edadSobrinos = [1, 4, 12, 14, 20, 22];
let familia = {
    sobrinaUno: {
        nombre: "Mayra",
        edad: 22,
        madre: "soledad",
        esMayorDeEdad: true,
    },
    sobrinaDos: {
        nombre: "fiorella",
        edad: 14,
        madre: "Maria",
        esMayorDeEdad: false,
    },

};
let esMayorDeEdad = (familia.sobrinaDos.edad) > 18;

console.table(familia);
console.table(edadSobrinos);
console.log("Tengo ", edadSobrinos.length, " sobrinos.");
console.count(edadSobrinos.length);
console.assert(esMayorDeEdad);
console.timeEnd()
