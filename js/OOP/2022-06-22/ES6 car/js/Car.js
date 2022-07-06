// Užduotis: Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes
// 1. make; 2. model; 3. year. ir metodus:
// 1. getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
// 2. getAge, kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, 
// jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą). 
// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), 
// kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: 
// 1. wheels (kurio vertė bus number). Ir metodą: 
// 1. getWheelsNumber, kuris grąžins “motociklas turi 3 ratus”, jei wheels vertė bus 3 ir “motociklas turi 2 ratus”, 
// jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių).
// Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.

class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
   
    getIntroduction(){
        return `${this.make} ${this.model}`;
    }  
    getAge(){
        let date = new Date();
        // naudojam specialiai getFullYear() googlintis
        let years = date.getFullYear();
        // vietoj teksto 10 metų arba jaunesnis' : '11 metų arba senesnis' priskirti pvz let  msg = '10 metų arba jaunesnis';
        return ((years - this.year)<=10) ? '10 metų arba jaunesnis' : '11 metų arba senesnis';
    }        
}
class Motorcycle extends Car{
    constructor(make, model, year, wheels){
        // super naudoja parents reiksmes
        super(make, model, year);
        this.wheels = wheels;
    }
    getWheelsNumber(){
        if(this.wheels == 3 || this.wheels == 2){
            return `Motociklas kuris turi 2 arba 3 ratus`;       
        } else {
            return `Yra ne motociklas`;
        }   
    }

}