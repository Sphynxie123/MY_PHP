// Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Products. 
// Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, 
// category(bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, 
// galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:

// 1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");

// patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, 
// jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;

// Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
// Filtrus, kurie padės vartotojams filtruoti prekes pagal:
// Kainą (turi būti sukuriama funkcija 
// (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string 
// "nuo" / "iki"), kuri leis vartotojui nurodyti:

// kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
// arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos
// arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;

// Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų 
// ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
// Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
// Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 
// 1.2. punkte, kad jis turėtų tokį 
// funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką 
// (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuuolada").

class Product {
    constructor (clothing, name, price, salePrice){
        this.name = name;
        this.price = price;
        this.salePrice = salePrice;
        this.allowCategory = [
            "T-shirts",
            "Pants",
            "Sweaters",
            "Shoes"
        ];
        
        let category = this.allowCategory;
        // patikrinam ar ta kategorija yra tarp tu kategoriju
        if (this.allowCategory.includes(clothing)){
            
        }
    }
    
    getProducts(){        
        return `${this.name} ${this.allowCategory[0]} ${this.price} `;        
    }
    getMinPrice(){ 
        let msg = 'Šiam produktui akcija netaikoma';         
        if (this.price < this.salePrice) {        
            return `${Math.min(this.price, this.salePrice)}`;
        } else {
            return msg;
        }
    }
}

const currentProducts = [
    new Product ('T-shirts', 'Ralph Lauren', 49, 100),
    new Product ('Pants', 'Nike', 44, 44),
    new Product ('Sweaters', 'ROBI AGNES', 59, 100),
    new Product ('Shoes', 'Zaro', 100, 200),
    new Product ('Sweaters', 'ROBI AGNES', 100, 100),
]

function price(isprice) {
    if (isNaN){
        isprice >=0;
    }
    return isprice;
}

console.log(price());