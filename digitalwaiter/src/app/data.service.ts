import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Dish} from "./dish-card/dish-card.component";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private dishesSubj: BehaviorSubject<Dish[]>;
    public dishesObs: Observable<Dish[]>;

    private typesSubj: BehaviorSubject<string[]>;
    public typesObs: Observable<string[]>

    private paymentTypesSubj: BehaviorSubject<string[]>;
    public paymentTypesObs: Observable<string[]>

    private allIngredientsSubj: BehaviorSubject<string[]>;
    public allIngredients: Observable<string[]>

    private queueSubj: BehaviorSubject<Dish[]>;
    public queueObs: Observable<Dish[]>

    constructor() {
        this.dishesSubj = new BehaviorSubject<Dish[]>(this.prepareFirstData());
        this.dishesObs = this.dishesSubj.asObservable();

        this.typesSubj = new BehaviorSubject<string[]>(this.prepareFirstDishTypes());
        this.typesObs = this.typesSubj.asObservable();

        this.paymentTypesSubj = new BehaviorSubject<string[]>(this.preparePaymentTypes());
        this.paymentTypesObs = this.paymentTypesSubj.asObservable();

        this.allIngredientsSubj = new BehaviorSubject<string[]>(this.prepareIngredients());
        this.allIngredients = this.allIngredientsSubj.asObservable();

        this.queueSubj = new BehaviorSubject<Dish[]>(null);
        this.queueObs = this.queueSubj.asObservable();
    }

    private prepareFirstData(): Dish[] {
        let JSONdata =
        JSON.parse(`[{"name":"Caprese salad (350g)","ingredients":["peeled tomatoes","mozzarella","pesto Genovese"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349960.jpg?width=320&height=220"},{"name":"Caesar salad (400g)","ingredients":["iceberg","bacon","chicken breast","Parmesan","Caesar sauce"],"type":"main","price":10.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349961.jpg?width=320&height=220"},{"name":"XL salad (350g)","ingredients":["iceberg","arugula","cherry tomatoes","mozzarella","salad dressing (olive oil Extra Virgin","balsamic vinegar of Modena","honey and mustard)"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349962.jpg?width=320&height=220"},{"name":"Green salad with tuna (400g)","ingredients":["lettuce","cucumber","tuna","olive","corn","lime","salad dressing (olive oil Extra Virgin","balsamic vinegar of Modena","honey and mustard)"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349964.jpg?width=320&height=220"},{"name":"Green salad (350g)","ingredients":["lettuce","cucumbers","radishes","onions","egg","salad dressing (olive oil Extra Virgin","balsamic vinegar of Modena","honey and mustard)"],"type":"main","price":7.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349965.jpg?width=320&height=220"},{"name":"Greek salad (500g)","ingredients":["tomato","cucumber","green pepper","red onion","olive","Feta cheese","olive oil Extra Virgin"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349963.jpg?width=320&height=220"},{"name":"Pizza Mozzarella","ingredients":["tomato sauce","mozzarella Sabelli","cherry tomatoes","olives","pesto sauce","olive oil Extra Virgin"],"type":"main","price":8.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349984.jpg?width=320&height=220"},{"name":"Pizza Prosciutto Kruuda","ingredients":["tomato sauce","mozzarella Sabelli","prosciutto","arugula","olive oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349985.jpg?width=320&height=220"},{"name":"Pizza Pepperoni","ingredients":["tomato sauce","mozzarella Sabelli","salami Calabro (spicy)","Olive Oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349988.jpg?width=320&height=220"},{"name":"Pizza Carriola","ingredients":["tomato sauce","mozzarella Sabelli","bacon","red onion","olives","olive oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349989.jpg?width=320&height=220"},{"name":"Pizza Perugia","ingredients":["tomato sauce","mozzarella Sabelli","chicken fillet","red onions","fresh peppers","olive oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349991.jpg?width=320&height=220"},{"name":"Pizza XL","ingredients":["tomato sauce","mozzarella Sabelli","ham","cherry tomatoes","Emmental","arugula","olive oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349992.jpg?width=320&height=220"},{"name":"Pizza Margherita","ingredients":["tomato sauce","mozzarella Sabelli","Olive Oil Extra Virgin"],"type":"main","price":7.8675,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349983.jpg?width=320&height=220"},{"name":"Pizza Capricciosa","ingredients":["tomato sauce","mozzarella Sabelli","ham","fresh mushrooms","olive oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349986.jpg?width=320&height=220"},{"name":"Pizza Quattro Formaggi","ingredients":["cream (animal)","mozzarella Sabelli","blue cheese","Emmental","Parmesan cheese","olive oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349987.jpg?width=320&height=220"},{"name":"Pizza Marco Polo","ingredients":["tomato sauce","mozzarella Sabelli","chicken fillet","melt-smoked cheese","corn","olive oil Extra Virgin"],"type":"main","price":11.2425,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349990.jpg?width=320&height=220"},{"name":"Caprese salad (350g)","ingredients":["peeled tomatoes","mozzarella","pesto Genovese"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349960.jpg?width=320&height=220"},{"name":"Caesar salad (400g)","ingredients":["iceberg","bacon","chicken breast","Parmesan","Caesar sauce"],"type":"main","price":10.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349961.jpg?width=320&height=220"},{"name":"XL salad (350g)","ingredients":["iceberg","arugula","cherry tomatoes","mozzarella","salad dressing (olive oil Extra Virgin","balsamic vinegar of Modena","honey and mustard)"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349962.jpg?width=320&height=220"},{"name":"Green salad with tuna (400g)","ingredients":["lettuce","cucumber","tuna","olive","corn","lime","salad dressing (olive oil Extra Virgin","balsamic vinegar of Modena","honey and mustard)"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349964.jpg?width=320&height=220"},{"name":"Green salad (350g)","ingredients":["lettuce","cucumbers","radishes","onions","egg","salad dressing (olive oil Extra Virgin","balsamic vinegar of Modena","honey and mustard)"],"type":"main","price":7.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349965.jpg?width=320&height=220"},{"name":"Greek salad (500g)","ingredients":["tomato","cucumber","green pepper","red onion","olive","Feta cheese","olive oil Extra Virgin"],"type":"main","price":9.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349963.jpg?width=320&height=220"},{"name":"Spaghetti Carbonara (450g)","ingredients":["fresh pasta","cream (animal)","onion","pancetta (smoked bacon)","egg","Parmesan"],"type":"spaghetti","price":11.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349966.jpg?width=320&height=220"},{"name":"Spaghetti Formaggi (450g)","ingredients":["fresh pasta","cream (animal)","blue cheese","Emmental","Parmesan"],"type":"spaghetti","price":11.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349967.jpg?width=320&height=220"},{"name":"Tagliatelle with porcini mushrooms (400g)","ingredients":["fresh pasta","cream (animal)","porcini mushrooms","parmesan"],"type":"spaghetti","price":11.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349968.jpg?width=320&height=220"},{"name":"Risotto with chicken (450g)","ingredients":["Arborio rice","chicken breast","onion","parmesan"],"type":"spaghetti","price":11.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349970.jpg?width=320&height=220"},{"name":"Risotto with porcini mushrooms (450g)","ingredients":["Arborio rice","porcini mushrooms","garlic","Parmesan"],"type":"spaghetti","price":11.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349971.jpg?width=320&height=220"},{"name":"Tagliatelle with Bolognese sauce (400g)","ingredients":["fresh pasta","Bolognese sauce","parmesan"],"type":"spaghetti","price":11.99,"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349969.jpg?width=320&height=220"},{"name":"Coca-Cola Original Taste (330ml)","ingredients":null,"type":"drinks","price":1.49,"description":["The most popular soft drink with a unique and refreshing Coca-Cola taste with natural flavors and no added preservatives."],"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/349993.jpg?width=320&height=220"},{"name":"Fanta Orange (330ml)","ingredients":null,"type":"drinks","price":1.49,"description":["Fanta Orange is a fizzy soft drink with orange juice. Challenge your senses and taste the fun!"],"imgUrl":"https://images.deliveryhero.io/image/fd-bg/Products/1058358.jpg?width=320&height=220"},{"name":"Combo pizza 50/50 (70cm)","ingredients":null,"type":"main","price":29.9925,"description":[""],"imgUrl":""},{"name":"Mineral water San-Benedetto","ingredients":null,"type":"drinks","price":1.49,"description":[""],"imgUrl":""},{"name":"Airan Verea","ingredients":null,"type":"drinks","price":1.49,"description":[""],"imgUrl":""},{"name":"Zagorka","ingredients":null,"type":"drinks","price":2.49,"description":[""],"imgUrl":""},{"name":"Amstel","ingredients":null,"type":"drinks","price":2.99,"description":[""],"imgUrl":""},{"name":"Heineken","ingredients":null,"type":"drinks","price":2.99,"description":[""],"imgUrl":""},{"name":"Kozel","ingredients":null,"type":"drinks","price":3.99,"description":["can"],"imgUrl":""},{"name":"Pilsner Urquell","ingredients":null,"type":"drinks","price":3.99,"description":["can"],"imgUrl":""},{"name":"Estrela","ingredients":null,"type":"drinks","price":3.99,"description":["can"],"imgUrl":""},{"name":"Radenberger","ingredients":null,"type":"drinks","price":3.99,"description":[""],"imgUrl":""},{"name":"Schofferhofer","ingredients":null,"type":"drinks","price":3.99,"description":["can"],"imgUrl":""},{"name":"Tiramisu","ingredients":null,"type":"deserts","price":3.99,"description":["tiramisu creme with mascarpone and spongecake dough with coffee taste"],"imgUrl":""},{"name":"Profiteroles (90g)","ingredients":["profiteroli","Lindt chocolate cream","liqueur"],"type":"deserts","price":3.99,"imgUrl":""},{"name":"Тартуфо (90g)","ingredients":null,"type":"deserts","price":3.99,"description":["cocoa cream with liqueur"],"imgUrl":""}]`);
        return JSONdata;
    }

    private prepareFirstDishTypes(): string[] {
        return  [
            "main",
            "soups",
            "drinks",
            "deserts",
            "spaghetti",
        ]
    }

    private preparePaymentTypes(): string[] {
        return [
            "cash",
            "card"
        ]
    }

    private prepareIngredients(): string[] {
        let ingredientsSet = new Set<string>();
        this.prepareFirstData().forEach((dish) => {
            if(!dish.ingredients || !dish.ingredients.length) {
                return;
            }

            dish.ingredients.forEach(ingr => {
                ingredientsSet.add(ingr);
            });
        });

        return Array.from<string>(ingredientsSet);
    }

    public updateDishesArray(newArray: Dish[]) {
        this.dishesSubj.next(newArray);
    }

    public updateDishTypesArray(newArray: string[]) {
        this.typesSubj.next(newArray);
    }

    public updatePaymentTypesArray(newArray: string[]) {
        this.paymentTypesSubj.next(newArray);
    }

    public updateQueue(newArray: Dish[]) {
        this.queueSubj.next(newArray);
    }
}

function compareDishes(a, b) {
    if((!a.imgUrl && !b.imgUrl) || (a.imgUrl && b.imgUrl)) {
        return 0;
    } else if(!a.imgUrl) {
        return 1;
    } else {
        return -1;
    }
}
