import { Meteor } from 'meteor/meteor';
import '/imports/api/tasks';
import '/imports/api/Model/MealsCollection';
import {MealsCollection} from "../imports/api/Model/MealsCollection";
import '/imports/api/Publications/MealsPublications';

const insertMeal = meal => MealsCollection.insert(meal);

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('meteorite')) {
    Accounts.createUser({
      username: 'meteorite',
      password: 'password'
    });
  }

  if (MealsCollection.find().count() === 0) {
    [
      {

        "address": "4302 E Ray Rd STE.106, Phoenix, AZ 85044, USA",
        "appAdd": true,
        "companyName": "The buzzed",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F7873B49A-E290-4452-A685-69A09198CD8E.jpeg?alt=media&token=661940f6-8c0f-4016-ace2-7259b3d46d95",
        "ingredients": "Strawberry, Frappe mix, whip cream",
        "instagram": "#thebuzzedgoat",
        "lat": 33.3208835,
        "name": "Strawberry Frappe",
        "phone": "(480) 706-7411",
        "price": "4.00",
        "rating": 4.8,
        "review": "Delicious ",
        "type": "Frappe"
      },
      {
        "address": "14838 N Frank Lloyd Wright Blvd, Scottsdale, AZ 85260, USA",
        "appAdd": true,
        "companyName": "Hash kitchen",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FB80A4356-8092-4A9C-B5E6-F2D03BF0F82A.jpeg?alt=media&token=993448b1-ff43-4fe0-abb9-4b43c29fce90",
        "ingredients": "corn tortilla chips simmered in green chili sauce / pulled chicken / cotija cheese / crema / 2 fried eggs",
        "instagram": "#hashkitchen",
        "lat": 33.620248,
        "name": "Chilaquiles",
        "phone": "(480) 361-5228",
        "price": "14.00",
        "rating": 4.3,
        "review": "Bomb chilaquiles. It would be great if the green sauce was a little spicier \uD83D\uDD25",
        "type": "Breakfast",
        "lng": -111.87472300000002
      },
      {

        "address": "1817 E Guadalupe Rd, Tempe, AZ 85283, USA",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F64A57557-3EAD-49FB-9641-FE59D7931C1B.jpeg?alt=media&token=6c995cc4-c201-4ee2-b601-bc71b86588ea",
        "ingredients": "Two fire charred beef patties, white cheese, lettuce, grilled onion, mayo and lettuce on a bun.",
        "instagram": "",
        "lat": 32.7157,
        "name": "Double Char Cheeseburger",
        "phone": "4804568912",
        "price": "5.70",
        "rating": 4,
        "review": "Consistently great burger!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1590685705356,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.habitburgergrill.com"
      },
      {

        "companyName": "Tabu Sushi Bar",
        "image": "064aaca25da2c6751ba6a823a8d0e06c.png",
        "ingredients": "Sexy Sushi Roll with Shrimp Tempura, Spicy Crab, Avocado, Cucumber, Cream Cheese, Wrapped in Tuna, Topped w/ Chopped Shrimp Tempura Mixed in Sauce",
        "name": "Sexy Roll",
        "phone": "(619) 201-8228",
        "price": 15,
        "type": "Specialty Roll",
        "description": "Sexy Roll",
        "latitude": 32.8374945,
        "location": {
          "x": -116.9940765,
          "y": 32.8374945,
          "type": "Point"
        },
        "longitude": -116.9940765
      },
      {

        "companyName": "Annie's Fine Burgers",
        "image": "957e542c430c0a674d0e747548eb78aa.png",
        "ingredients": "Cheeseburger with Battered Thinly Sliced Onion, Crisp Bacon, Cheddar Cheese, Lettuce, Tomato, Smokey Teriyaki Sauce",
        "name": "Sand Dune Burger",
        "phone": "(619) 258-8288",
        "price": 8.5,
        "type": "Cheeseburger",
        "description": "Cheeseburger",
        "latitude": 32.8387166,
        "location": {
          "x": -116.9812271,
          "y": 32.8387166,
          "type": "Point"
        },
        "longitude": -116.9812271
      },
      {

        "companyName": "Buffalo Wild Wings",
        "image": "4af64e92e0b67d06d37540236c77e05f.jpeg",
        "ingredients": "Buffalo Chicken Mac and Cheese, Spicy Garlic Sauce, Chicken",
        "name": "Buffalo Chicken Mac and Cheese",
        "phone": "(619) 596-4625",
        "price": 10.76,
        "type": "Mac and Cheese",
        "description": "Buffalo Mac and Cheese with Spicy Garlic Sauce",
        "latitude": 32.8433494,
        "location": {
          "x": -116.985527,
          "y": 32.8433494,
          "type": "Point"
        },
        "longitude": -116.985527
      },
      {

        "companyName": "Trujillo's Taco Shop",
        "image": "acf6b1042ad554f80fffcbc66dacd5aa.jpeg",
        "ingredients": "Eggs, Steak, Fries, Cheese, Sour Cream, Guacamole",
        "name": "#7 Breakfast Burrito",
        "phone": "(619) 583-4182",
        "price": 9.75,
        "type": "Breakfast Burrito",
        "description": "Breakfast #7 add Sour Cream and Guacamole",
        "latitude": 32.7712019,
        "location": {
          "x": -117.0695631,
          "y": 32.7712019,
          "type": "Point"
        },
        "longitude": -117.0695631
      },
      {

        "companyName": "Lucha Libre Taco Shop",
        "image": "accd629270eb0c2e46a2490486284546.png",
        "ingredients": "Chicken or Cheese with your choice of Mole or Green Sauce, topped with melted Jack Cheese, served with Rice, Beans and Sour Cream",
        "name": "Champion Fries or Nachos",
        "phone": "(619) 296-8226",
        "price": 8.5,
        "type": "Fries",
        "description": "Carne Asada Fries or Nachos",
        "latitude": 33.1239521,
        "location": {
          "x": -117.1055059,
          "y": 33.1239521,
          "type": "Point"
        },
        "longitude": -117.1055059
      },
      {

        "companyName": "Lofty Coffee",
        "image": "ed468bf92277db83e6b1781c4a530f79.jpeg",
        "ingredients": "Roasted Coffee Bean with Milk",
        "name": "Cappuccino - Flat White",
        "phone": "(760) 230-6747",
        "price": 3.5,
        "type": "Cappuccino",
        "description": "FoodsUp",
        "latitude": 32.7220998,
        "location": {
          "x": -117.1672365,
          "y": 32.7220998,
          "type": "Point"
        },
        "longitude": -117.1672365
      },
      {

        "companyName": "Mr. Taco No. 2",
        "image": "375f84934eb03b23c3ffe4e92933c825.png",
        "ingredients": "Bacon, Ham, Sausage, Egg, Hashbrown, Cheese",
        "name": "Meat Lover Burrito",
        "phone": "(951) 682-4020",
        "price": 6.29,
        "type": "Breakf",
        "description": "burritolist",
        "latitude": 33.9941393,
        "location": {
          "x": -117.3666569,
          "y": 33.9941393,
          "type": "Point"
        },
        "longitude": -117.3666569
      },
      {

        "companyName": "Kaito Sushi",
        "image": "fe1374bd5efc1145dc730f4088b387bc.png",
        "ingredients": "Lightly Fried Squid",
        "name": "Spicy Calamari",
        "phone": "(760) 634-2746",
        "price": 6.5,
        "type": "Calamari/Squid",
        "description": "Kaito Sushi",
        "latitude": 33.0473019,
        "location": {
          "x": -117.260329,
          "y": 33.0473019,
          "type": "Point"
        },
        "longitude": -117.260329
      },
      {

        "companyName": "Juice Crafters",
        "image": "0ed41ae6db5a5804fbc644900938f5f3.jpeg",
        "ingredients": "Kale, spinach, romaine, parsley, cucumber, celery, apple, lemon, turmeric & ginger (16 oz).",
        "name": "Greenest Plus #3.5",
        "phone": "(619) 231-4329",
        "price": 7.99,
        "type": "Juice",
        "description": "Juice Crafters",
        "latitude": 32.7235376,
        "location": {
          "x": -117.1685919,
          "y": 32.7235376,
          "type": "Point"
        },
        "longitude": -117.1685919
      },
      {

        "companyName": "The Wrap Shack",
        "image": "1b2b9f412038e915d3c774cd993f191b.jpeg",
        "ingredients": "Chicken Tenders, Feta, Glazed Walnuts, Mandarins and Cranberries",
        "name": "Crispy Chicken, Feta and Glazed Walnut Salad",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Salad",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "Lucha Libre Taco Shop",
        "image": "c3f24cca0a74f418c419a2b478ba1f7a.jpeg",
        "ingredients": "Blackened Ahi or Shrimp, Jack Cheese, Pico de Gallo, Cannage and Serrano Sauce",
        "name": "Undefeated Seafood Taco",
        "phone": "(619) 296-8226",
        "price": 4.5,
        "type": "Seafood Taco",
        "description": "Lucha Libre",
        "latitude": 33.1239521,
        "location": {
          "x": -117.1055059,
          "y": 33.1239521,
          "type": "Point"
        },
        "longitude": -117.1055059
      },
      {

        "companyName": "Board & Brew",
        "image": "3ddb197b1dfb458e55258c2e79533be5.jpeg",
        "ingredients": "Turkey Breast, Jack Cheese topped with Avocado, served on Sourdough Bread. Includes Mayo, Onions, Tomato & Lettuce",
        "name": "Turkado",
        "phone": "(619) 270-2739",
        "price": 8.5,
        "type": "Turkey Sandwich",
        "description": "FoodsUp",
        "latitude": 32.7967676,
        "location": {
          "x": -117.2559636,
          "y": 32.7967676,
          "type": "Point"
        },
        "longitude": -117.2559636
      },
      {

        "companyName": "Better Buzz Coffee",
        "image": "1a3a4e7c50a4ccafc5d1ca4bf33c2589.jpeg",
        "ingredients": "Hot water topped with a double or triple espresso on ice",
        "name": "Iced Americano",
        "phone": "858-274-2899",
        "price": 2.95,
        "type": "Iced Coffee",
        "description": "Iced Americano Coffee",
        "latitude": 32.7983434,
        "location": {
          "x": -117.2486263,
          "y": 32.7983434,
          "type": "Point"
        },
        "longitude": -117.2486263
      },
      {

        "companyName": "S3 Coffee Bar",
        "image": "e01eb057dd0f45d0abc3f8d34aac8db7.png",
        "ingredients": "Beet root chai latte",
        "name": "Beet Root Chai Latte",
        "phone": "(619 693-5333",
        "price": 5,
        "type": "Chai latte",
        "description": "goddessofbaking",
        "latitude": 32.7868677,
        "location": {
          "x": -117.0973814,
          "y": 32.7868677,
          "type": "Point"
        },
        "longitude": -117.0973814
      },
      {

        "companyName": "Tukee's Sports Grille",
        "image": "8a1fa0f3da74884c5f619da899441cca.jpeg",
        "ingredients": "Blue cheese crumbles, grilled onions, juicy beef patty, smoked bacon, iceburg lettuce served with fries.  Onions rings +$2",
        "name": "Bacon Blue Cheeseburger",
        "phone": "(480) 307-8680",
        "price": 11.5,
        "type": "Bacon Cheeseburger",
        "description": "Ahwatukee, Arizona",
        "latitude": 33.305586,
        "location": {
          "x": -111.9798295,
          "y": 33.305586,
          "type": "Point"
        },
        "longitude": -111.9798295,
        "printerId": "NA"
      },
      {

        "companyName": "McDonalds #2531",
        "image": "6d8360849073895b55da870b4efc44c4.jpeg",
        "ingredients": "Two beef patties, American cheese, spicy chicken patty, ketchup, mustard, pickle, onion",
        "name": "McGangbang",
        "phone": "(602) 404-9785",
        "price": 2.69,
        "type": "Double Cheeseburger with Spicy Chicken",
        "description": "McGangbang",
        "latitude": 33.5799647,
        "location": {
          "x": -112.0134272,
          "y": 33.5799647,
          "type": "Point"
        },
        "longitude": -112.0134272,
        "printerId": "NA"
      },
      {

        "address": "4301 E University Dr, Phoenix, AZ 85034, USA",
        "appAdd": true,
        "companyName": "Little miss",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FC467D0A8-4E61-4E83-B60A-0B38FF8EC2F9.jpeg?alt=media&token=8eaa64e6-6b97-4c3b-b862-d84aec930c6f",
        "ingredients": "12 hour smoked Meats, pork, turkey ",
        "instagram": "#littlemissbbq#littlemissbbqphoenix#smokedmeats#luschng",
        "lat": 33.4217144,
        "name": "Fatty brisket, el effe???  ",
        "phone": "(602) 437-1177",
        "price": "9.00-20.00",
        "rating": 4.8,
        "review": "Great smoked bbq in Phoenix...number two in the nation, get there early, line is out the door they open at 11am get there at 10am you won???t be dissapointed",
        "type": "Smoked meats ",
        "lng": -111.98916109999999
      },
      {

        "address": "5350 E Broadway Blvd #102, Tucson, AZ 85711, USA",
        "appAdd": true,
        "companyName": "First watch tucs",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F1C365E99-9F8B-4DA2-912E-836B8BDE8D37.jpeg?alt=media&token=32d4b6c7-0901-4643-8446-86fe12be95df",
        "ingredients": "CHICKICHANGA Whipped eggs with spicy all-natural white-meat chicken, chorizo sausage, green chilies, Cheddar and Monterey Jack, onions and avocado rolled in a flour tortilla. Topped with Vera Cruz sauce and sour cream. Served with fresh fruit and fresh, seasoned potatoes.",
        "instagram": "1460",
        "lat": 32.22097600000001,
        "name": "Chikichanga burrito",
        "phone": "(520) 512-0280",
        "price": "10.49",
        "rating": 4.6,
        "review": "8/10",
        "type": "Brunch",
        "lng": -110.878602,
        "insertDate": 1575861748573
      },
      {

        "address": "132 Southwark Bridge Rd, London SE1 0DG, UK",
        "appAdd": true,
        "companyName": "Chimichurris london",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F6F215590-063E-4E44-8144-199C1569C585.jpeg?alt=media&token=868525ab-89fa-487f-b27c-3464de7fe609",
        "ingredients": "Grilled octopus with stuffed polenta, served with smoked paprika and salsa criolla",
        "instagram": "",
        "lat": 51.5006527,
        "name": "Grilled Octopus with Stuffed Polenta",
        "phone": "020 7928 7414",
        "price": "25",
        "rating": 4.8,
        "review": "Amazing and still salivating over this meal",
        "type": "Dinner",
        "lng": -0.09903350000001865,
        "insertDate": 1572892059457
      },
      {

        "address": "4920 W Thunderbird Rd Ste. 102, Glendale, AZ 85306",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_83041.jpg?alt=media&token=6e64f916-475b-4813-b38b-6ccedbce4983",
        "ingredients": "Bread, capicola, pepperoni, salami, lettuce, pickles, onions, oil and vinegar, salt, pepper, mustard.",
        "instagram": "",
        "lat": 32.7157,
        "name": "Italian 6\" Sub Sandwich ",
        "phone": "6028439900",
        "price": "5.19",
        "rating": 4,
        "review": "Surprisingly good sandwich ",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1583352796576,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "105 W Main St #7309, Mesa, AZ 85201, USA",
        "appAdd": true,
        "companyName": "The nile",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FE6EEEE2B-8C1C-41B4-A0CF-A8C27A3273B1.jpeg?alt=media&token=9c542b55-f82a-4ad8-b525-faadf28745a2",
        "ingredients": "Shits of espresso poured over iced",
        "instagram": "",
        "lat": 33.4148535,
        "name": "Iced Americano Coffee",
        "phone": "(480) 352-9882",
        "price": "3.00",
        "rating": 4.4,
        "review": "7/10. This is a fantastic little shop I never even heard of until I walked by it. Great coffee and atmosphere ",
        "type": "Coffee",
        "lng": -111.83448190000001,
        "insertDate": 1570731390015
      },
      {

        "address": "11322 South St, Cerritos, CA 90703, USA",
        "appAdd": true,
        "companyName": "chunk",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7085.JPG?alt=media&token=129c28ff-fb21-42ef-b2c1-1c4a52f99cab",
        "ingredients": "mozzarella, corn dog batter",
        "instagram": "",
        "lat": 33.8570484,
        "name": "cheat, snack, street food",
        "price": "3.99",
        "rating": 4.3,
        "review": "I never had a Korean hotdog before, but this is a very popular Korean street food that made its way to So ",
        "type": "CornDog filled with mozzarella heaven",
        "lng": -118.09268639999999,
        "insertDate": 1571019534430
      },
      {

        "address": "Carmel, ??tat de New York 10512, ??tats-Unis",
        "appAdd": true,
        "companyName": "Carmel",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F10BCBA1E-0D77-436F-B1FF-AC2C92B2AD00.jpeg?alt=media&token=d20beef1-493f-4cad-98d6-3e0d5e0abd46",
        "ingredients": "Pesto, cherry tomatoes, feta cheese, pine nuts",
        "instagram": "#spoonfullofnyc",
        "lat": 41.4300937,
        "name": "Pesto Pizza",
        "price": "16",
        "review": "Delicious and cheesy! With just the right amount of flavor",
        "type": "Pizza",
        "lng": -73.68012970000001
      },
      {
        "_id": "JMKsZWG2tgecky5NK",
        "address": "1335 W University Dr Ste 2, Tempe, AZ 85281, United States",
        "appAdd": true,
        "companyName": "Philly???s famous",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F54F61BB3-0514-4E32-90BD-F1EEF99FD84F.jpeg?alt=media&token=5dc9cfdf-c031-45c5-9dae-a298a00ba85e",
        "ingredients": "Chicken, Buffalo Sauce, Cheese in a nice bun.  Pictured as an 8 inch sub.  12 once is $10.49",
        "instagram": "#philly",
        "lat": 33.4212545,
        "name": "Buffalo Chicken Philly ",
        "phone": "(480) 968-7409",
        "price": "$6.95",
        "review": "Awesome Sando",
        "type": "Chicken Philly Cheesesteak"
      },
      {

        "address": "18174 Pioneer Blvd, Artesia, CA 90701, USA",
        "appAdd": true,
        "companyName": "taste",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0659.JPG?alt=media&token=49467e15-e169-4bc8-91e3-1af22114f12c",
        "ingredients": "peach bits, strawberry bits, tea, crystal boba",
        "instagram": "",
        "lat": 33.86592630000001,
        "name": "tea, boba, snack",
        "phone": "(562) 403-7000",
        "price": "5.35",
        "rating": 4.4,
        "review": "I got this drink PEACH ME SWEETEA with no sugar and trust me you dont need it. It is good as is. I added some crystal boba for texture and its less guilty than boba.",
        "type": "dessert, snack",
        "lng": -118.08194459999999,
        "insertDate": 1575684883189
      },
      {

        "address": "N 44th St &, E Indian School Rd, Phoenix, AZ 85018, USA",
        "appAdd": true,
        "companyName": "Hash kithen",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F44537FEE-3E2A-4D2A-A704-72142C8EA4C2.jpeg?alt=media&token=0e6ecf40-b9f1-4277-8331-e30c82bcd8e9",
        "ingredients": "hash potatoes / fried eggs / thick cut bacon / pico de gallo (picture on side) / avocado / pepper jack cheese",
        "instagram": "#hashkitchen",
        "lat": 33.49466580000001,
        "name": "Carne Asada Breakfast Burrito",
        "phone": "(602) 612-5580",
        "price": "15",
        "rating": 4.5,
        "review": "This was a massive burrito.  Little over priced for what it actually was. 3.2",
        "type": "Breakfast Burrito",
        "lng": -111.9888712
      },
      {

        "address": "1633 S Stapley Dr, Mesa, AZ 85204, USA",
        "appAdd": true,
        "companyName": "Backyard taco",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FA42AF3D1-18DD-44E5-A075-5FA9275E9AB4.jpeg?alt=media&token=b1670f11-9856-42cb-a985-6fffd958c132",
        "ingredients": "Refried beans and white cheese wrapped in a flour tortilla. ",
        "instagram": "",
        "lat": 33.3844868,
        "name": "Bean and cheese burrito",
        "phone": "(480) 378-2095",
        "price": "4.65",
        "rating": 4.399999999999999,
        "review": "This burrito was a perfect size and under $5. Definitely wish they had better sauces ",
        "type": "Dinner",
        "lng": -111.80399990000001,
        "insertDate": 1572142773349
      },
      {

        "companyName": "Trujillo's Taco Shop",
        "image": "0d8bc287684453910155c8e5bf605399.jpeg",
        "ingredients": "Carne Asada, Guacamole, French Fries, Beans, Cheese",
        "name": "NAK Burrito",
        "phone": "(619) 583-4182",
        "price": 8.25,
        "type": "Burrito",
        "description": "Burrito",
        "latitude": 32.7712019,
        "location": {
          "x": -117.0695631,
          "y": 32.7712019,
          "type": "Point"
        },
        "longitude": -117.0695631
      },
      {

        "companyName": "WA Sushi",
        "image": "e76fdf5fd763b5059118cdc98207fa91.jpeg",
        "ingredients": "Sushi Roll with Cali Roll Inside, Avocado, Crab, Eel, Eel Sauce",
        "name": "Dragon Roll",
        "phone": "(858) 569-9595",
        "price": 8.5,
        "type": "Sushi Roll",
        "description": "Dragon Roll",
        "latitude": 32.8323638,
        "location": {
          "x": -117.1279627,
          "y": 32.8323638,
          "type": "Point"
        },
        "longitude": -117.1279627
      },
      {

        "companyName": "Tabu Sushi Bar",
        "image": "3747577c148c1addc561f0ef853713b9.jpeg",
        "ingredients": "Dragon Roll with Shrimp Tempera, Avocado, Topped with Eel, Avocado, Eel Sauce",
        "name": "Sweet Thang",
        "phone": "(619) 201-8228",
        "price": 12,
        "type": "Specialty Roll",
        "description": "Dragon Roll (9 pc)",
        "latitude": 32.8374945,
        "location": {
          "x": -116.9940765,
          "y": 32.8374945,
          "type": "Point"
        },
        "longitude": -116.9940765
      },
      {

        "companyName": "Domo Sushi Bar & Grill",
        "image": "61685257cccfc1580ac91dbde45f5e01.png",
        "ingredients": "Caterpillar Sushi Roll with Crab, Eel, Avocado, Eel Sauce, Tuna",
        "name": "Caterpillar Roll",
        "phone": "(619) 596-2882",
        "price": 10,
        "type": "Specialty Roll",
        "description": "Caterpillar Roll",
        "latitude": 32.8373392,
        "location": {
          "x": -116.9876939,
          "y": 32.8373392,
          "type": "Point"
        },
        "longitude": -116.9876939
      },
      {

        "companyName": "Little Caesar's Pizza",
        "image": "a37e902b6a953a9b4531ea2485c1fc54.png",
        "ingredients": "Pepperoni Pizza with Pepperoni, Cheese, Marinara Sauce",
        "name": "Hot n Ready Pepperoni Pizza",
        "phone": "(619) 562-3500",
        "price": 5,
        "type": "Pepperoni Pizza",
        "description": "Pepperoni Pizza",
        "latitude": 32.8397254,
        "location": {
          "x": -116.9854392,
          "y": 32.8397254,
          "type": "Point"
        },
        "longitude": -116.9854392
      },
      {

        "companyName": "James Coffee Co.",
        "image": "101388975fcfc6aec5c0674ed0fe20f0.jpeg",
        "ingredients": "Black Coffee that's rich, comforting and has familiar taste. Sweet notes of Chocolate and Vanilla.",
        "name": "Batch Brew",
        "phone": "(619) 756-7770",
        "price": 2.5,
        "type": "Black Coffee",
        "description": "Batch Brew Black Coffee",
        "latitude": 32.7291829,
        "location": {
          "x": -117.1703587,
          "y": 32.7291829,
          "type": "Point"
        },
        "longitude": -117.1703587
      },
      {

        "companyName": "Takka Sushi Bar & Grill",
        "image": "79d2d0fea35bb33746fba816d610504e.png",
        "ingredients": "Eel, Avocado, Cucumber, Rice, Seaweed, Eel Sauce",
        "name": "Dragon Roll",
        "phone": "(619) 562-8006",
        "price": 11,
        "type": "Sushi Roll",
        "description": "Dragon Roll",
        "latitude": 32.8382725,
        "location": {
          "x": -116.9900866,
          "y": 32.8382725,
          "type": "Point"
        },
        "longitude": -116.9900866
      },
      {

        "companyName": "Costco Santee",
        "image": "ff46555791b11ee78cf45a040b6658eb.png",
        "ingredients": "Pepperoni, Cheese, Pizza",
        "name": "Pepperoni Pizza Pie (10 Slices)",
        "phone": "(619) 448-3300",
        "price": 9.95,
        "type": "Pizza",
        "description": "10 Slice Pepperoni Pizza",
        "latitude": 32.840222,
        "location": {
          "x": -116.9873931,
          "y": 32.840222,
          "type": "Point"
        },
        "longitude": -116.9873931
      },
      {

        "companyName": "Narumi Sushi",
        "image": "546d58fadf9711bea1a2c92956d3432a.png",
        "ingredients": "Inside: Crab, & Grilled Eel Top: Seared Smoke Salmon, Seared Salmon, Cream Cheese, Sweet Sauce, & Spicy Mayo",
        "name": "Seared Smoke Salmon Roll",
        "phone": "(619) 461-1151",
        "price": 8.95,
        "type": "Sushi Roll",
        "description": "Seared Smoke Salmon Roll",
        "latitude": 32.7932392,
        "location": {
          "x": -117.003242,
          "y": 32.7932392,
          "type": "Point"
        },
        "longitude": -117.003242
      },
      {

        "companyName": "Urban Solace",
        "image": "67e05e2a274853cc4ec521df0a327706.png",
        "ingredients": "A Skillet of Duck Mac and Cheese",
        "name": "Duckaroni",
        "phone": "(619) 295-6464",
        "price": 15,
        "type": "Mac and Cheese",
        "description": "Duck Mac and Cheese",
        "latitude": 32.7478317,
        "location": {
          "x": -117.1298016,
          "y": 32.7478317,
          "type": "Point"
        },
        "longitude": -117.1298016
      },
      {

        "companyName": "Lupe's No. 2",
        "image": "22d4b0f569191bd79795af59d6c7353b.png",
        "ingredients": "Beans, Cheese, Flour Tortilla",
        "name": "Bean and Cheese",
        "phone": "(323) 266-6681",
        "price": 3.15,
        "type": "Burrito",
        "description": "burritolist",
        "latitude": 34.0331066,
        "location": {
          "x": -118.1654559,
          "y": 34.0331066,
          "type": "Point"
        },
        "longitude": -118.1654559
      },
      {

        "companyName": "The Pizza Press",
        "image": "d506f6ddaf6aabdbbd544ee65af426db.jpeg",
        "ingredients": "garlic, sundries tomatoes, kalamata olives, artichoke hearts, feta cheese, mozzarella cheese, marinara sauce with jalapenos on the side topped with balsalmic drizzle",
        "name": "Make Your Own",
        "phone": "(657) 266-0027",
        "price": 11.7,
        "type": "Pizza",
        "description": "n.nguyeenn",
        "latitude": 33.6888711,
        "location": {
          "x": -117.8947535,
          "y": 33.6888711,
          "type": "Point"
        },
        "longitude": -117.8947535
      },
      {

        "companyName": "Domo Sushi Bar & Grill",
        "image": "1ebb94f5a5be8c441feb03c5cce9f777.jpeg",
        "ingredients": "This meal includes (2) Specialty Rolls, Edamame and Miso Soup.  Pictured rolls include a Rainbow Roll and Dragon Roll.  Great for two people or date night in.",
        "name": "Specialty Roll Meal (2 rolls, edamame and miso soup)",
        "phone": "(619) 596-2882",
        "price": 27.5,
        "type": "Sushi",
        "description": "FoodsUp",
        "latitude": 32.8373392,
        "location": {
          "x": -116.9876939,
          "y": 32.8373392,
          "type": "Point"
        },
        "longitude": -116.9876939
      },
      {

        "companyName": "The Wrap Shack",
        "image": "3bb04be4640d58fde5e719d5803a9926.jpeg",
        "ingredients": "Crispy Buffalo Chicken Tenders, Mozzarella, Avocado, Blue Cheese Dressing",
        "name": "Buffalo Chicken",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Wrap",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "The Wrap Shack",
        "image": "4aefa612e0eb463f69ac789752750105.png",
        "ingredients": "Smoked Turkey, Honey Ham, Bacon, Avocado, Pepper Jack, Ranch Spread",
        "name": "Clubhouse",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Wrap",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "The Crack Shack",
        "image": "c61981fd1b9359cdcf8a8202047abb4a.png",
        "ingredients": "Spicy Fried Chicken Thigh, Cool Ranch, Crispy Onions, Pickles, Potato Roll",
        "name": "Firebird",
        "phone": "(619) 795-3299",
        "price": 11,
        "type": "Chicken Sandwich",
        "description": "The Crack Shack",
        "latitude": 32.7279012,
        "location": {
          "x": -117.1711893,
          "y": 32.7279012,
          "type": "Point"
        },
        "longitude": -117.1711893
      },
      {

        "companyName": "Bahn Thai",
        "image": "4b0d47480e21eb5c73682d22b53249e4.png",
        "ingredients": "Sweet and Tangy, stir-fried with tamarind sauce, eggs, fresh bean sprouts, green onions, with a side of crushed peanuts and lime.",
        "name": "Chicken Pad Thai",
        "phone": "(619) 299-6363",
        "price": 9.95,
        "type": "Pad Thai",
        "description": "Bahn Thai",
        "latitude": 32.7618987,
        "location": {
          "x": -117.1464648,
          "y": 32.7618987,
          "type": "Point"
        },
        "longitude": -117.1464648
      },
      {

        "companyName": "Bangkok Bay",
        "image": "fc344d686f9328e43e7be77c3fb0786e.png",
        "ingredients": "Rice noodles, stir fried egg, bean sprouts and scallions in a tamarind sauce",
        "name": "Chicken Pad Thai",
        "phone": "(858) 792-2427",
        "price": 13,
        "type": "Pad Thai",
        "description": "Bangkok Bay",
        "latitude": 32.9821072,
        "location": {
          "x": -117.2700747,
          "y": 32.9821072,
          "type": "Point"
        },
        "longitude": -117.2700747
      },
      {

        "companyName": "Sala Thai",
        "image": "11c322a0df5decad0ecf0b8e745ef2a2.png",
        "ingredients": "Grilled shrimp with stir fried narrow rice noodles, bean sprouts, green onions, crushed peanuts, eggs and Thai seasoning.",
        "name": "Shrimp Pad Thai",
        "phone": "(619) 229-9050",
        "price": 9.95,
        "type": "Pad Thai",
        "description": "Sala Thai",
        "latitude": 32.7618942,
        "location": {
          "x": -117.0646365,
          "y": 32.7618942,
          "type": "Point"
        },
        "longitude": -117.0646365
      },
      {

        "companyName": "Sala Thai",
        "image": "0467c176dfb2a3d79e50b14a37d25a8a.png",
        "ingredients": "Potatoes in yellow curry paste with coconut milk.",
        "name": "Yellow Curry",
        "phone": "(619) 229-9050",
        "price": 9.95,
        "type": "Curry",
        "description": "Sala Thai",
        "latitude": 32.7618942,
        "location": {
          "x": -117.0646365,
          "y": 32.7618942,
          "type": "Point"
        },
        "longitude": -117.0646365
      },
      {

        "companyName": "Urth Caffe",
        "image": "67c5890c610751c2f04e51f2d1127b86.jpeg",
        "ingredients": "Grilled cilantro marinated chicken breast, three chili sauce, thinly sliced jalapeno, micro cilantro and Monterey jack cheese",
        "name": "Panini El Diablo",
        "phone": "(626) 844-4644",
        "price": 13.95,
        "type": "Panini",
        "description": "Urth Caffe",
        "latitude": 34.145607,
        "location": {
          "x": -118.1381916,
          "y": 34.145607,
          "type": "Point"
        },
        "longitude": -118.1381916
      },
      {

        "companyName": "OB Beans Coffee Roasters",
        "image": "fca47133fd2f9a1acabb25afe895e12a.jpeg",
        "ingredients": "Hot Coffee",
        "name": "House Coffee",
        "phone": "(619) 738-8151",
        "price": 2.5,
        "type": "Warm Coffee",
        "description": "OB Beans",
        "latitude": 32.7453209,
        "location": {
          "x": -117.249174,
          "y": 32.7453209,
          "type": "Point"
        },
        "longitude": -117.249174
      },
      {

        "companyName": "Cruiser Taco",
        "image": "90f1f52c2f756510276ecdf7b01d9572.png",
        "ingredients": "Carne asada, papas, cheese, avo, diced onions, cilantro and crema",
        "name": "San Diago",
        "phone": "(619) 564-7178",
        "price": 3.95,
        "type": "Taco",
        "description": "Cruiser Taco",
        "latitude": 32.755586,
        "location": {
          "x": -117.1323806,
          "y": 32.755586,
          "type": "Point"
        },
        "longitude": -117.1323806
      },
      {

        "companyName": "Little Miss BBQ",
        "image": "93839f777a23236d28e3304dfe845f55.jpeg",
        "ingredients": "Sausage with choice of chopped brisket, pulled pork or turkey with sauce, slaw & pickles. Open 11am - 4pm or until they run out of food.",
        "name": "The Jefe",
        "phone": "(602) 437-1177",
        "price": 10.75,
        "type": "BBQ Sandwich",
        "description": "Phoenix, AZ",
        "latitude": 33.4217144,
        "location": {
          "x": -111.9891611,
          "y": 33.4217144,
          "type": "Point"
        },
        "longitude": -111.9891611,
        "printerId": "NA"
      },
      {

        "companyName": "Dugout Deli",
        "image": "2c17afdfc5cca3bc7a7ad416ee6564da.jpeg",
        "ingredients": "Choice of bread, turkey, bacon, Swiss cheese, mayo, mustard, lettuce, pickle, pepperchini, red onion",
        "name": "Butcher Boy",
        "phone": "(916) 486-8766",
        "price": 7.99,
        "type": "Turkey Sandwich",
        "description": "Sacramento, CA",
        "latitude": 38.6029032,
        "location": {
          "x": -121.4024933,
          "y": 38.6029032,
          "type": "Point"
        },
        "longitude": -121.4024933,
        "printerId": "NA"
      },
      {

        "address": "156 E Main St, Torrey, UT 84775, USA",
        "appAdd": true,
        "companyName": "Red cliff restaurant",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F8474F177-DBB6-4F09-AF89-A7753C7B402F.jpeg?alt=media&token=c7e218d9-2505-4dc6-b9fc-61dee5f0ec33",
        "ingredients": "Hand packed ground beef patty, cheese, bacon with lettuce, tomato, onion on the side. Ordered sweet potato fries with the meal.  Epic views in Torrey, Utah.",
        "instagram": "#utah",
        "lat": 38.29853499999999,
        "name": "Bacon Cheeseburger",
        "phone": "(435) 425-3797",
        "price": "$9.29",
        "rating": 4.3,
        "review": "4/5",
        "type": "Bacon Cheeseburger",
        "lng": -111.41787699999998
      },
      {

        "address": "2221 Ford St Golden, CO  80401 United States",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FD82A455B-C636-4D69-AC80-33B7B2C2E755.jpeg?alt=media&token=356683dc-495d-48f1-acb0-6cf11afebdc3",
        "ingredients": "Rice, beans, carne asada, chorizo, Cotija cheese, Cheddar cheese, and green chile",
        "instagram": "",
        "lat": 32.7157,
        "name": "Chupacabra Buritto",
        "phone": "7206451930",
        "price": "8.50",
        "rating": 5,
        "review": "Beat burritos in CO. Maybe even the US",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1584763090567,
        "userId": "XoEdbbnM6wPpSHAzD"
      },
      {

        "address": "8141 La Mesa Blvd, La Mesa, CA 91942, USA",
        "appAdd": true,
        "companyName": "Farmers table",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F084F33A8-35EF-4819-8A75-1B5D9CCF07B6.jpeg?alt=media&token=8103ba17-098a-413f-a2c4-979f39c739ff",
        "ingredients": "BANANA FOSTER FRENCH TOAST - banana + brown sugar + rum | 14 VEG",
        "instagram": "Chelsburd ",
        "lat": 32.7637071,
        "name": "Banana Foster French Toast",
        "phone": "(619) 724-6465",
        "price": "14.00",
        "rating": 4.3,
        "review": "3.8",
        "type": "Brunch",
        "lng": -117.02159080000001
      },
      {

        "address": "1537 W Broadway Rd #105, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Master tac",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F9EE35082-D01F-4059-9F10-4E9FDC797740.jpeg?alt=media&token=93b6c81c-4018-4b50-8d23-76bfe90ee5e5",
        "ingredients": "Flour Tortillas, Al Pastor, Onions and Cilantro",
        "instagram": "",
        "lat": 33.4071978,
        "name": "Al Pastor Street Tacos",
        "phone": "(480) 597-4700",
        "price": "$6.00",
        "rating": 5,
        "review": "6/10",
        "type": "Anytime",
        "lng": -111.96546160000003,
        "insertDate": 1576701367166
      },
      {

        "address": "818 w broadway rd, Tempe, Az, 85282",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FC2FB7CA9-8572-41D9-BC9D-036FF13C8620.jpeg?alt=media&token=9eab4776-e70c-4df8-b068-090309ddf797",
        "ingredients": "Carne Asada, black beans, cilantro, onion, cheese and rice. ",
        "instagram": "",
        "lat": 32.7157,
        "name": "Carne Asada Burrito",
        "phone": "4809663337",
        "price": "7.99",
        "rating": 4,
        "review": "Great burrito",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1588891737971,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "500 Mateo St Unit 102, Los Angeles, CA 90013, USA",
        "appAdd": true,
        "companyName": "verve",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7114.JPG?alt=media&token=384f4630-feee-43b7-b6be-1bdfd6b76c4d",
        "ingredients": "almond milk, espresso, + added my own stevia",
        "instagram": "",
        "lat": 34.0414253,
        "name": "Coffee",
        "phone": "(213) 419-5077",
        "price": "6",
        "rating": 4.8,
        "review": "Good vibes, good coffee, perfect sweetener, what else do you need in life.",
        "type": "pick me up, coffee, drink",
        "lng": -118.23269779999998,
        "insertDate": 1571972448478
      },
      {

        "address": "3617 N Goldwater Blvd, Scottsdale, AZ 85251, USA",
        "appAdd": true,
        "companyName": "Sip",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FE47A4C8F-DA3D-47ED-9815-168E4F80FB73.jpeg?alt=media&token=771eba61-e4e7-4738-b7a4-8e1a13a985a1",
        "ingredients": "Shots of espresso pour over ice. ",
        "instagram": "5",
        "lat": 33.48959930000001,
        "name": "Iced Americano",
        "phone": "(480) 625-3878",
        "price": "3.50",
        "rating": 4.5,
        "review": "This is a thicker iced americano. The location in Scottsdale is great and full of people working on business. ",
        "type": "Coffee",
        "lng": -111.92658019999999
      },
      {

        "address": "601 W Rio Salado Pkwy #103, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Press coffee",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F213BA43C-917A-4C7C-AB2F-F24BDECB7AD2.jpeg?alt=media&token=a9f21729-ca76-4ebf-8e1e-cd7509a2267f",
        "ingredients": "Shots of espresso on ice in a 16 ounce cup",
        "instagram": "foodsupapp",
        "lat": 33.4302432,
        "name": "Iced Americano",
        "phone": "(480) 794-1107",
        "price": "3.50",
        "rating": 4.5,
        "review": "Good! 3.9",
        "type": "Iced Coffee",
        "lng": -111.94864949999999
      },
      {

        "address": "1150 S Gilbert Rd, Gilbert, AZ 85296, USA",
        "appAdd": true,
        "companyName": "Sals gilbert",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F02243A1B-04FB-4988-B0C4-2685085BB1D7.jpeg?alt=media&token=78749ee7-7c32-495e-8b64-69852aea8afc",
        "ingredients": "Pizza Dough, Cheese, Sal???s pizza sauce, pepperoni, garlic",
        "instagram": "",
        "lat": 33.32897670000001,
        "name": "Large Pepperoni Garlic Pizza Build Your Own",
        "phone": "(480) 633-2226",
        "price": "19.99",
        "rating": 4.6,
        "review": "Amazing pizza!!! ",
        "type": "Pizza",
        "lng": -111.79051140000001,
        "insertDate": 1570757334827
      },
      {

        "address": "1919 N 16th St, Phoenix, AZ 85006, USA",
        "appAdd": true,
        "companyName": "La san",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F71D03E39-AFCA-495F-BB32-DD67898481BF.jpeg?alt=media&token=1a9c25d8-b758-42bf-a880-ceb3a7728846",
        "ingredients": "Spicy pork with a special secrete salsa, pineapple, tomato, lettuce, onion, cilantro salsa, guacamole & al pastor salsa. Giant salsa bar and each meal comes with chips",
        "instagram": "#phoenix",
        "lat": 33.4691862,
        "name": "Al Pastor Burro",
        "phone": "(602) 254-6330",
        "price": "9.99",
        "rating": 4.4,
        "review": "3.9",
        "type": "Burrito/Burro",
        "lng": -112.0474039
      },
      {

        "address": "960 w university drive, tempe, az, 85281",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFullSizeR1(1).jpg?alt=media&token=d1533fbf-ec7a-404c-83e6-ac2f84e04652",
        "ingredients": "Came with burrito with choice of meat and sauce, hardshell taco with choice of meat",
        "instagram": "",
        "lat": 32.7157,
        "name": "Burro and taco combo",
        "phone": "4809660852",
        "price": "10.95",
        "rating": 3,
        "review": "Great lunch spot!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1583262637039,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "companyName": "Cotijas Taco Shop",
        "image": "6b87a47432d79361dad417ff9f0d54c5.jpeg",
        "ingredients": "Bean, Cheese, Flour Tortilla",
        "name": "Bean & Cheese Burrito",
        "phone": "(619) 562-0940",
        "price": 4.99,
        "type": "burrito",
        "description": "Bean and cheese burrito wrapped in a flour tortill",
        "latitude": 32.8384132,
        "location": {
          "x": -117.0000313,
          "y": 32.8384132,
          "type": "Point"
        },
        "longitude": -117.0000313
      },
      {

        "companyName": "Oscar's Mexican Seafood",
        "image": "6fea48c56b6840a93adb2e4345471f88.jpeg",
        "ingredients": "Taco with Grilled Octopus (Pulpo), Cabbage, Onion, Tomato, Cilantro, Avocado, Cheese",
        "name": "Grilled Octopus Taco",
        "phone": "(619) 564-6007",
        "price": 4.8,
        "type": "Tacos",
        "description": "Grilled Octopus Taco (Pulpo)",
        "latitude": 32.7092387,
        "location": {
          "x": -117.1559837,
          "y": 32.7092387,
          "type": "Point"
        },
        "longitude": -117.1559837
      },
      {

        "companyName": "Oishii Japanese Thai Restaurant",
        "image": "c91117c0e252238cf3058b7e7f526c94.png",
        "ingredients": "Sushi Roll with Shrimp, Avocado on top and Crab, Cucumber",
        "name": "Sunny Roll",
        "phone": "(619) 596-4852",
        "price": 13,
        "type": "Sushi Roll",
        "description": "Sushi Roll",
        "latitude": 32.8547002,
        "location": {
          "x": -116.9736786,
          "y": 32.8547002,
          "type": "Point"
        },
        "longitude": -116.9736786
      },
      {

        "companyName": "Costco Santee",
        "image": "f5172676f9f4967c41012e0ae3bf2d3c.png",
        "ingredients": "Cheese, Pizza",
        "name": "1 Slice of Cheese Pizza",
        "phone": "(619) 448-3300",
        "price": 1.99,
        "type": "Pizza",
        "description": "Cheese Pizza",
        "latitude": 32.840222,
        "location": {
          "x": -116.9873931,
          "y": 32.840222,
          "type": "Point"
        },
        "longitude": -116.9873931
      },
      {

        "companyName": "Ahi Sushi & Grill",
        "image": "824864ac90ba17e4cc3be3d6bd1db66b.png",
        "ingredients": "Imitation Crab, & Avocado Outside: All Salmon Baked\r\nwith Dynamite Sauce",
        "name": "Fire of Love",
        "phone": "(619) 337-1388",
        "price": 11.5,
        "type": "Sushi Roll",
        "description": "Fire of Love Sushi Roll",
        "latitude": 32.8016633,
        "location": {
          "x": -117.0043241,
          "y": 32.8016633,
          "type": "Point"
        },
        "longitude": -117.0043241
      },
      {

        "companyName": "Narumi Sushi",
        "image": "cb6d4a06d29b9ba88f60236a75edc9f9.png",
        "ingredients": "Inside: Spicy Tuna, Avocado, & cucumber. Top: Sriracha Sauce, Pico, & Sweet sauce",
        "name": "Pico de Gallo Roll",
        "phone": "(619) 461-1151",
        "price": 6.95,
        "type": "Sushi Roll",
        "description": "Pico de Gallo Roll",
        "latitude": 32.7932392,
        "location": {
          "x": -117.003242,
          "y": 32.7932392,
          "type": "Point"
        },
        "longitude": -117.003242
      },
      {

        "companyName": "Islands Mission Valley",
        "image": "350fc09d11802a2ea0bd0c51db6c78dd.png",
        "ingredients": "Jalape??o, black pepper crusted, burger , pepper jack cheese, chipotle aioli, lettuce, tomato, Island Reds, Guacamole, spicy",
        "name": "Kilauea with Guacamole",
        "phone": "6196402727",
        "price": 14.84,
        "type": "Burger",
        "description": "Jalape??o & Black Pepper Crusted Burger",
        "latitude": 32.7816645,
        "location": {
          "x": -117.1304171,
          "y": 32.7816645,
          "type": "Point"
        },
        "longitude": -117.1304171
      },
      {

        "companyName": "Hodad's Downtown SD",
        "image": "efa57c18f213d4c15f5903d5dd7b1b19.png",
        "ingredients": "Pastrami, Beef Patty, Ketchup, Pickles, Swiss Cheese, Grilled Onions, Spicy Brown Mustard with Potato Wedges",
        "name": "Guido Burger",
        "phone": "(619) 234-6323",
        "price": 11,
        "type": "Pastrami Cheeseburger",
        "description": "Pastrami Cheeseburger with Potato Wedges",
        "latitude": 32.7155826,
        "location": {
          "x": -117.1557974,
          "y": 32.7155826,
          "type": "Point"
        },
        "longitude": -117.1557974
      },
      {

        "companyName": "Mammoth Tavern",
        "image": "6e5250bc993a27fea1d971a239b17eb1.png",
        "ingredients": "Elbow Pasta, Three Cheeses Mornay Sauce",
        "name": "Mac & Cheese",
        "phone": "(760) 934-3902",
        "price": 11,
        "type": "Mac and Cheese",
        "description": "Mac & Cheese",
        "latitude": 37.6375782,
        "location": {
          "x": -118.9660735,
          "y": 37.6375782,
          "type": "Point"
        },
        "longitude": -118.9660735
      },
      {

        "companyName": "Leucadia Pizzeria & Italian Restaurant",
        "image": "56b78e2014c513bca54574402263efa6.png",
        "ingredients": "Tomato sauce, mozzarella, parm oregano mix, green bell peppers, black olives, mushrooms, onions, and zucchini. Small 10\"",
        "name": "Vegetarian Pizza",
        "phone": "(760) 942-2222",
        "price": 12.7,
        "type": "Pizza",
        "description": "Leucadia Pizza",
        "latitude": 33.0485332,
        "location": {
          "x": -117.2937733,
          "y": 33.0485332,
          "type": "Point"
        },
        "longitude": -117.2937733
      },
      {

        "companyName": "The Original Sab-E-Lee",
        "image": "dec6c559f439b009ce52cbe2b66b40fc.png",
        "ingredients": "Beef W/ Ground Peanuts, Eggs, and Bean Sprouts",
        "name": "Beef Pad Thai",
        "phone": "(858) 850-6868",
        "price": 8.5,
        "type": "Pad Thai",
        "description": "Sab-E-Lee",
        "latitude": 32.7844085,
        "location": {
          "x": -117.1709351,
          "y": 32.7844085,
          "type": "Point"
        },
        "longitude": -117.1709351
      },
      {

        "companyName": "Cruiser Taco",
        "image": "3faf6eda36e7ff8597890d60900a0050.png",
        "ingredients": "Pork-adobo, cheese, avo, diced onions, cilantro, pineapple and crema",
        "name": "What A Pig",
        "phone": "(619) 564-7178",
        "price": 3.49,
        "type": "Taco",
        "description": "Cruiser Taco",
        "latitude": 32.755586,
        "location": {
          "x": -117.1323806,
          "y": 32.755586,
          "type": "Point"
        },
        "longitude": -117.1323806
      },
      {

        "companyName": "Cruiser Taco",
        "image": "766a5103fa03643495013b2b0f7d0226.png",
        "ingredients": "Choice of Chicken or Portobello fajitas, topped with cheese, lettuce and crema.  Vegetarian Available Vegan Available",
        "name": "Messin' w/ Texas",
        "phone": "(619) 564-7178",
        "price": 3.95,
        "type": "Taco",
        "description": "Cruiser Taco",
        "latitude": 32.755586,
        "location": {
          "x": -117.1323806,
          "y": 32.755586,
          "type": "Point"
        },
        "longitude": -117.1323806
      },
      {

        "companyName": "Cruiser Taco",
        "image": "27dd970bb37ee988fe1a7e335921729b.png",
        "ingredients": "House chips or fries, served with a side of roasted chile queso topped off with avo, cotija cheese, salsa roja and crema",
        "name": "Chips / Papas n??? Queso",
        "phone": "(619) 564-7178",
        "price": 5.49,
        "type": "Chips n Queso",
        "description": "Cruiser Taco",
        "latitude": 32.755586,
        "location": {
          "x": -117.1323806,
          "y": 32.755586,
          "type": "Point"
        },
        "longitude": -117.1323806
      },
      {

        "companyName": "Dai Ho Restaurant",
        "image": "190278d295e992e2a63691beb91b40a3.png",
        "ingredients": "Beef Stew, Noodles. \r\n\r\nMon\tClosed\t\r\nTue\t11:30 am - 3:00 pm\t\r\nWed\t11:30 am - 3:00 pm\t\r\nThu\t11:30 am - 3:00 pm\t\r\nFri\t11:30 am - 3:00 pm\t\r\nSat\t11:30 am - 3:00 pm\t\r\nSun\t11:30 am - 3:00 pm",
        "name": "Beef Stew Soup Noodles",
        "phone": "(626) 291-2295",
        "price": 10,
        "type": "Soup",
        "description": "yummay_eats",
        "latitude": 34.105431,
        "location": {
          "x": -118.0693047,
          "y": 34.105431,
          "type": "Point"
        },
        "longitude": -118.0693047
      },
      {

        "companyName": "EarlyBaker",
        "image": "998ae8e231c6cd2de2e4294d7014de5f.jpeg",
        "ingredients": "Free Range scrambled eggs, Seasoned roasted potatoes, black beans, cilantro-lime rice, and fresh avocado.  Served with mini side salad.",
        "name": "Vegetarian Burrito",
        "phone": "(480) 316-6334",
        "price": 10.95,
        "type": "Breakfast Burrito",
        "description": "Ahwatukee, Arizona",
        "latitude": 33.3044587,
        "location": {
          "x": -111.9945187,
          "y": 33.3044587,
          "type": "Point"
        },
        "longitude": -111.9945187,
        "printerId": "NA"
      },
      {

        "companyName": "Philly's Sorts Bar & Grill",
        "image": "bd22d3b5e180c561532cb0aac3ac7ea7.png",
        "ingredients": "This special comes with your choice of Carne Asada, Grilled Chicken or Carnitas Tacos on flour or corn tortillas.  Each taco is $2.75.  Upgrade to fish taco for $1.00 more!",
        "name": "Taco Tuesday Special",
        "phone": "(480) 968-6612",
        "price": 8.25,
        "type": "Tacos",
        "description": "Tempe, AZ",
        "latitude": 33.4129316,
        "location": {
          "x": -111.9611453,
          "y": 33.4129316,
          "type": "Point"
        },
        "longitude": -111.9611453,
        "printerId": "NA"
      },
      {

        "companyName": "Slicks Garage",
        "image": "3c60fb8b6035b65de39d9d828bedc0ea.jpeg",
        "ingredients": "Grilled blackened shrimp, cabbage, cilantro, tomatoes, black beans and baja sauce",
        "name": "Shrimp Bowl",
        "phone": "(623) 476-7605",
        "price": 11.25,
        "type": "Shrimp Bowl",
        "description": "Peoria, AZ",
        "latitude": 33.6355075,
        "location": {
          "x": -112.234839,
          "y": 33.6355075,
          "type": "Point"
        },
        "longitude": -112.234839,
        "printerId": "NA"
      },
      {

        "companyName": "Sundance Saloon",
        "image": "0d958c96aa043537ee7f5698b581a1e9.png",
        "ingredients": "Tortilla chips, grilled carne asada, cilantro, pico de gallo and topped with nacho cheese.",
        "name": "Carne Asada Nachos",
        "phone": "(928) 667-2200",
        "price": 10,
        "type": "Nachos",
        "description": "Parker, AZ",
        "latitude": 34.247024,
        "location": {
          "x": -114.17232,
          "y": 34.247024,
          "type": "Point"
        },
        "longitude": -114.17232,
        "printerId": "NA"
      },
      {

        "address": "8738 S Emerald Dr #104, Tempe, AZ, 85284",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F94BF6605-3B98-47C0-8BC7-E9E867AFAE60.jpeg?alt=media&token=2ca8f37c-1767-4f44-aa05-e93c0cf8de56",
        "ingredients": "POWER GREEN kale, cucumber, celery, apple, ginger, parsley, lemon",
        "instagram": "",
        "lat": 32.7157,
        "name": "Power Greens",
        "phone": "4803860320",
        "price": "6.99",
        "rating": 4,
        "review": "Healthy and refreshing ",
        "type": "Juice",
        "lng": 117.1611,
        "insertDate": 1590592627887,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "14031 Jeffrey Rd, Irvine, CA 92620, USA",
        "appAdd": true,
        "companyName": "redstart",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0848.JPG?alt=media&token=61a5465e-4c74-48c1-acd8-cd73201b4dfa",
        "ingredients": "Special Jasmine Green tea, mint, key lime",
        "instagram": "",
        "lat": 33.696371,
        "name": "tea, boba",
        "phone": "(949) 336-7527",
        "price": "5.25",
        "rating": 4,
        "review": "Green Mojito is my personal favorite at Red Straw. It has the perfect combination of these flavors and taste perfect without sugar too!",
        "type": "snack, dessert",
        "lng": -117.76272799999998,
        "insertDate": 1576025527072
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taq",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FBurrito%20Supreme.png?alt=media&token=21a15347-5511-49d9-b91c-848ae60d46c7",
        "ingredients": "Choice of meat, rice, beans, onions, cilantro, and hot sauce. cheese, sour cream, and guacamole",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Burrito Supreme",
        "phone": "(714) 702-5592",
        "price": "12",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578541917672
      },
      {

        "address": "1537 W. Broadway Rd Ste. 106, Tempe, AZ 85282, USA",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF0BEFE15-791E-4B5B-9839-9C462573BCA6.jpeg?alt=media&token=c9d1f98e-ac31-46e1-81d5-02f2c59c300f",
        "ingredients": "Mikes way no tomato, no mayo, add pepperchinis on rosemary bread",
        "instagram": "",
        "lat": 32.7157,
        "name": "#9 Turkey and Roast Beef Sandwich",
        "phone": "4809214101",
        "price": "8.99",
        "rating": 4,
        "review": "Great",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1590177235411,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "1000 Bristol St N St. 10, Newport Beach, CA 92660, USA",
        "appAdd": true,
        "companyName": "moul",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7079.JPG?alt=media&token=50b569ab-e5bb-4e04-bc87-edfd3a5f8e9d",
        "ingredients": "espresso almond milk",
        "instagram": "",
        "lat": 33.6578541,
        "name": "Coffee",
        "phone": "(949) 474-0920",
        "price": "4",
        "rating": 4.6,
        "review": "Moulin's cappuccino comes with a little chocolate square that you can add to your hot coffee. I tried it with and without and you can't go wrong either way. I appreciate when people bring food from different countries to our county so big shout out to moulin for doing that.",
        "type": "pick me up, coffee",
        "lng": -117.86651540000003,
        "insertDate": 1572128145370
      },
      {

        "address": "13380 Jamboree Rd, Irvine, CA 92602, USA",
        "appAdd": true,
        "companyName": "urban plat",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Ffullsizeoutput_29e6.jpeg?alt=media&token=8d05fe9b-4c05-408c-85dd-daedb60bd671",
        "ingredients": "steak, rainbow carrots and beets, Brussel sprouts",
        "instagram": "",
        "lat": 33.72636360000001,
        "name": "Healthy meals",
        "phone": "(714) 332-6272",
        "price": "13.50",
        "rating": 4.4,
        "review": "Great post work out meal! Guilt Free and keto friendly you can always choose which ever two sides you want! ",
        "type": "lunch, dinner",
        "lng": -117.78854339999998,
        "insertDate": 1573792763923
      },
      {

        "address": "4517 Campus Dr, Irvine, CA 92612, USA",
        "appAdd": true,
        "companyName": "Taquiero taco",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FBEF35358-BD07-4033-9823-5258FBE1D6AD.jpeg?alt=media&token=e6b4fbef-1b83-4899-ad2b-e0ecc3ea8d81",
        "ingredients": "Taco Tuesday special with tacos being $4 each!",
        "instagram": "Ocfoodfatties",
        "lat": 33.6494196,
        "name": "Tacos",
        "phone": "(949) 333-1671",
        "price": "12.00",
        "rating": 4.6,
        "review": "Looks great!",
        "type": "Tacos",
        "lng": -117.83238110000002
      },
      {

        "address": "18932 Gale Ave, Rowland Heights, CA 91748, USA",
        "appAdd": true,
        "companyName": "stanch",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0272.JPG?alt=media&token=32380639-3671-4d10-bc79-3b0a7dca48c6",
        "ingredients": "pork bone broth, spicy broth, yam noodle, veggie set, yam noodle, beef",
        "instagram": "",
        "lat": 33.9960445,
        "name": "hot pot, Chinese ",
        "phone": "(626) 581-8808",
        "price": "65",
        "rating": 4.1,
        "review": "This whole deal is around 60-65$ Becareful of the spicy hot pot it will leave your tongue numb. But if you mix both its a perfect match made in heaven. ",
        "type": "lunch, dinner",
        "lng": -117.88882920000003,
        "insertDate": 1573451235859
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taquer",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FCopy%20of%20Copy%20of%20menudo.png?alt=media&token=f9a07568-f7f7-400e-bbab-a347c9fc56f1",
        "ingredients": "Flour tortilla with cheese and meat of your choice topped with onions, cilantro, and hot sauce.",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Meat Quasadilla",
        "phone": "(714) 702-5592",
        "price": "10",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578551439939
      },
      {
        "_id": "D4F5XaMu72hAymXRc",
        "address": "7000 Riverside Dr, Parker, AZ 85344, USA",
        "appAdd": true,
        "companyName": "Roadrunner bar",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F255D49D9-868F-413E-B233-E01FD809E9C7.jpeg?alt=media&token=765162d1-5473-42cd-adb9-ea23f1f51859",
        "ingredients": "3 Eggs, cheese, sausage, peppers, onions, mushrooms. They don???t accept phone orders when it is busy",
        "instagram": "#parker",
        "lat": 34.2318188,
        "name": "Breakfast burrito ",
        "phone": "(928) 667-4252",
        "price": "$8.79",
        "rating": 4.6,
        "review": "4",
        "type": "Burrito "
      },
      {
        "_id": "tSN4FbwFpK6c7D5f8",
        "address": "New York, NY, USA",
        "appAdd": true,
        "companyName": "New york",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F8F7A18AA-9260-48D2-9284-A2FC5C0FD81A.jpeg?alt=media&token=96e9a29b-285e-41a6-8d7b-55aa867bd86d",
        "ingredients": "Beef, egg, bacon, jalape??o, cheese",
        "instagram": "#kureyourkravings",
        "lat": 40.7127753,
        "name": "L.E.S Burger",
        "price": "$10.50",
        "review": "Delicious Burger! ",
        "type": "Burger"
      },
      {

        "address": "500 Mateo St Unit 102, Los Angeles, CA 90013, USA",
        "appAdd": true,
        "companyName": "verve",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7115.JPG?alt=media&token=59089ab4-8b12-4db7-9a0c-3476b7523193",
        "ingredients": "Topo Chico, espresso",
        "instagram": "",
        "lat": 34.0414253,
        "name": "coffee, drink",
        "phone": "(213) 419-5077",
        "price": "5",
        "rating": 4.8,
        "review": "Order the espresso tonic with topo Chico! its so refreshing and with wake you up. Its a plus that its keto friendly ",
        "type": "espresso tonic",
        "lng": -118.23269779999998,
        "insertDate": 1573450189378
      },
      {

        "address": "1160 E University Dr, Temp, AZ 85281",
        "appAdd": true,
        "companyName": "Chompie???s Restaurant, Deli and Bakery",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F7BE69F13-6410-4F41-A342-E769458F348C.jpeg?alt=media&token=fd5b0bf2-db02-45ce-80d8-53313306832e",
        "ingredients": "Half Pastrami on Rye with French Fries",
        "instagram": "",
        "lat": 32.7157,
        "name": "Half Pastrami",
        "phone": "4805570700",
        "price": "10.99",
        "rating": 4,
        "review": "Stacked Sandwich!",
        "type": "Sandwich",
        "lng": 117.1611,
        "insertDate": 1597696045236,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.chompies.com"
      },
      {

        "address": "6434 S McClintock Dr, Tempe, AZ 85283, USA",
        "appAdd": true,
        "companyName": "Sacred pi",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F3FFACC65-5D11-465D-A185-106022D2FCFF.jpeg?alt=media&token=7d9c8a80-519b-43c7-bb19-12a1395094d5",
        "ingredients": "Slice of Pepperoni and a slice of cheese pizza",
        "instagram": "Foodsupapp",
        "lat": 33.3616466,
        "name": "Lunch Special (2 Slices)",
        "phone": "(480) 897-9093",
        "price": "6.28",
        "rating": 4.7,
        "review": "3.8",
        "type": "Pizza",
        "lng": -111.91300749999999
      },
      {

        "companyName": "El Paisa Mexican Grill",
        "image": "08e7963a886e45dc6a8969209b143ae3.jpeg",
        "ingredients": "Carne Asada, French Fries, Guacamole, Cheese",
        "name": "Carne Asada Burrito",
        "phone": "858-412-4256",
        "price": 7.81,
        "type": "Burrito",
        "description": "Carne Asada Burrito add Guacamole",
        "latitude": 32.795746,
        "location": {
          "x": -117.2517018,
          "y": 32.795746,
          "type": "Point"
        },
        "longitude": -117.2517018
      },
      {

        "companyName": "Little Caesar's Pizza",
        "image": "8f4190a21feca67f7b2acea831de40de.png",
        "ingredients": "Little Caesars Italian Cheese Bread Freshly Baked Bread with a Crispy Edge, Covered with Melted Cheeses and Topped with Italian Spices.",
        "name": "Italian Cheese Bread",
        "phone": "(619) 562-3500",
        "price": 4.95,
        "type": "Cheese Bread",
        "description": "Cheese Bread",
        "latitude": 32.8397254,
        "location": {
          "x": -116.9854392,
          "y": 32.8397254,
          "type": "Point"
        },
        "longitude": -116.9854392
      },
      {

        "companyName": "Estrada's Mexican Food",
        "image": "db81f70cb75e44f30d2c1e011cd59774.png",
        "ingredients": "Carne Asada, Rolled Taco, Nacho Cheese, Mexican Guacamole",
        "name": "The Estrada's Burrito",
        "phone": "(619) 449-2103",
        "price": 6.5,
        "type": "Burrito with a Rolled Taco",
        "description": "Carne Asada Burrito",
        "latitude": 32.8451255,
        "location": {
          "x": -116.9987078,
          "y": 32.8451255,
          "type": "Point"
        },
        "longitude": -116.9987078
      },
      {

        "companyName": "Ahi Sushi & Grill",
        "image": "e29b7c8fa84f02c045636bae9524535a.png",
        "ingredients": "Tempura Shrimp Cucumber & Avocado Outside: Eel & Soft Shell Crab Maki",
        "name": "Scorpion Roll",
        "phone": "(619) 337-1388",
        "price": 12.5,
        "type": "Specialty Roll",
        "description": "Scorpion Roll",
        "latitude": 32.8016633,
        "location": {
          "x": -117.0043241,
          "y": 32.8016633,
          "type": "Point"
        },
        "longitude": -117.0043241
      },
      {

        "companyName": "Islands Mission Valley",
        "image": "3f4794c701c9f2586ea7fdfa7194f9ee.png",
        "ingredients": "Lettuce, tomato, onion, pickles, american cheese, applewood smoked bacon, mustard, Onion rings, Burger, Wheat",
        "name": "Malibu Burger with Onion Rings",
        "phone": "6196402727",
        "price": 14.44,
        "type": "Bacon Cheese Burger",
        "description": "Bacon Cheese Burger with Onion Rings",
        "latitude": 32.7816645,
        "location": {
          "x": -117.1304171,
          "y": 32.7816645,
          "type": "Point"
        },
        "longitude": -117.1304171
      },
      {

        "companyName": "Urban Solace",
        "image": "b8bff628d1fbfdbc59c540e97bcf4950.png",
        "ingredients": "Brown Sugar Bacon, Fried Egg, Tomato, Lemon-Thyme Aioli, Egg Bread",
        "name": "EBLT",
        "phone": "(619) 295-6464",
        "price": 13,
        "type": "Sandwich",
        "description": "BLT with Egg for Weekday Brunch",
        "latitude": 32.7478317,
        "location": {
          "x": -117.1298016,
          "y": 32.7478317,
          "type": "Point"
        },
        "longitude": -117.1298016
      },
      {

        "companyName": "Katsu Cafe",
        "image": "1e93a5383dd28dcb70b438c1d30a3f2a.jpeg",
        "ingredients": "Grilled Chicken, Beef, Steamed Veggies and White Rice",
        "name": "Chicken and Beef Bowl",
        "phone": "(858) 560-8859",
        "price": 7,
        "type": "Bowl",
        "description": "Chicken and Beef Bowl",
        "latitude": 32.8320588,
        "location": {
          "x": -117.1606663,
          "y": 32.8320588,
          "type": "Point"
        },
        "longitude": -117.1606663
      },
      {

        "companyName": "Santana's Mexican Food",
        "image": "5c7146fb0103e0b519617823f1ae2471.jpeg",
        "ingredients": "Grilled Steak (Carne Asada), Sauteed Shrimp, Mexican Rice, Cheese, White Sauce",
        "name": "Surf & Turf Burrito",
        "phone": "(619) 631-7680",
        "price": 7,
        "type": "Burrito",
        "description": "Surf & Turf Burrito",
        "latitude": 32.8381702,
        "location": {
          "x": -116.9778487,
          "y": 32.8381702,
          "type": "Point"
        },
        "longitude": -116.9778487
      },
      {

        "companyName": "The Juice Standard",
        "image": "69faf2a5f1017adfd364c7c897a18158.jpeg",
        "ingredients": "Cucumber, Carrot, Apple, Beet, Lemon",
        "name": "Bee Energized Juice",
        "phone": "(702) 979-9803",
        "price": 12,
        "type": "Juice",
        "description": "FoodsUp",
        "latitude": 36.1097544,
        "location": {
          "x": -115.1738726,
          "y": 36.1097544,
          "type": "Point"
        },
        "longitude": -115.1738726
      },
      {

        "companyName": "Fiesta Cantina",
        "image": "42eb70515767bae1bc666b763660ae48.png",
        "ingredients": "Chicken, Steak or Sauteed Veggies, Guacamole, Cheese, Pico de Gallo, Spanish Rice, Beans, Crema Fresca, Onions and Cilantro",
        "name": "Fiesta Burrito",
        "phone": "(619) 298 - 2500",
        "price": 10,
        "type": "Burrito",
        "description": "FoodsUp",
        "latitude": 32.7484328,
        "location": {
          "x": -117.1631024,
          "y": 32.7484328,
          "type": "Point"
        },
        "longitude": -117.1631024
      },
      {

        "companyName": "Lupe's Taco Shop",
        "image": "c86d112266b3a22e4a62ea3b952ca1f6.png",
        "ingredients": "Steak, Guacamole, Sour Cream, Cheese and Hot Cheetos",
        "name": "Hot Cheeto Burrito",
        "phone": "(714) 892-7252",
        "price": 7.5,
        "type": "Burrito",
        "description": "Evburd",
        "latitude": 33.745454,
        "location": {
          "x": -118.0237092,
          "y": 33.745454,
          "type": "Point"
        },
        "longitude": -118.0237092
      },
      {

        "companyName": "Leucadia Pizzeria & Italian Restaurant",
        "image": "6a40ddd0842c5a3299a831bd2e97bcf2.png",
        "ingredients": "Mixed greens, ham, salami, provolone cheese, sliced tomatoes, olives, pepperoncini, red onions, croutons and parmesan cheese with Italian dressing Half $7.79 Full $12.09",
        "name": "Antipasto Salad",
        "phone": "(760) 942-2222",
        "price": 12.09,
        "type": "Salad",
        "description": "Leucadia Pizza",
        "latitude": 33.0485332,
        "location": {
          "x": -117.2937733,
          "y": 33.0485332,
          "type": "Point"
        },
        "longitude": -117.2937733
      },
      {

        "companyName": "Spicy House",
        "image": "7c91cec7db969f04a15283636623782a.png",
        "ingredients": "Fried Chicken Cubes with Hot Pepper (VERY SPICY)",
        "name": "Fried Chicken Cubes with Hot Pepper",
        "phone": "(858) 278-5883",
        "price": 9.99,
        "type": "Chinese Food",
        "description": "Spicy House",
        "latitude": 32.8141393,
        "location": {
          "x": -117.1539653,
          "y": 32.8141393,
          "type": "Point"
        },
        "longitude": -117.1539653
      },
      {

        "companyName": "Chaba Thai Kitchen",
        "image": "f446d8a1268048197efb1e546f109890.png",
        "ingredients": "Crispy Chicken stir-fried with bell peppers, onoins, and basil leaves served in our chili garlic sauce.",
        "name": "Crispy Basil Chicken",
        "phone": "(858) 503-7777",
        "price": 11.95,
        "type": "Chicken",
        "description": "Chaba Thai Chicken",
        "latitude": 32.8331843,
        "location": {
          "x": -117.1499945,
          "y": 32.8331843,
          "type": "Point"
        },
        "longitude": -117.1499945
      },
      {

        "companyName": "Juice Crafters",
        "image": "36d300876733e4c4d80d49b1136de11c.jpeg",
        "ingredients": "Lemon, Ginger & Cayenne Pepper (2.5 oz).",
        "name": "Flu Off! (Wellness Shot)",
        "phone": "(619) 231-4329",
        "price": 3.99,
        "type": "Juice Shot",
        "description": "Juice Crafters",
        "latitude": 32.7235376,
        "location": {
          "x": -117.1685919,
          "y": 32.7235376,
          "type": "Point"
        },
        "longitude": -117.1685919
      },
      {

        "companyName": "Local Greens",
        "image": "94005be8396ab7b7e2df36d0f3374615.jpeg",
        "ingredients": "Organic mesclun, herb roasted chicken breast, organic sprouts, avocado, grape tomatoes, organic carrots, mushrooms, tortilla strips, organic cilantro jalape??o lime dressing.",
        "name": "California Dreaming (GF)",
        "phone": "(858) 792-2622",
        "price": 9.5,
        "type": "Salad",
        "description": "Healthy",
        "latitude": 32.7401595,
        "location": {
          "x": -117.2111954,
          "y": 32.7401595,
          "type": "Point"
        },
        "longitude": -117.2111954
      },
      {

        "companyName": "Coffee Corner Santee",
        "image": "178d63701c09f0c005cfa898d0676dbd.jpeg",
        "ingredients": "Medium Roast Coffee supplied by Hill Tribes Coffee",
        "name": "Medium Roast Coffee",
        "phone": "(619) 996-9007",
        "price": 1.7,
        "type": "Medium Roast",
        "description": "Medium Roast",
        "latitude": 32.8413236,
        "location": {
          "x": -116.985885,
          "y": 32.8413236,
          "type": "Point"
        },
        "longitude": -116.985885
      },
      {

        "companyName": "Fox Smokehouse BBQ",
        "image": "7cf490e3a9a219839e607f865509215a.png",
        "ingredients": "Seasoned and smoked with hickory wood, Served on a huge toasted bun, it could be shared, don't do it, be selfish. Toppings: Onions, Pickles, Pepperoncini or Coleslaw.  Choice of Sides: Cowboy Beans, Mac & Cheese, French Fries, Coleslaw, Potato Salad, Fried Okra. Upgrade to Sweet Potato Fries or Baked Potato add $.50 Upgrade to Cowboy Cheese Fries add $1.50",
        "name": "The Porky",
        "phone": "(712) 489-2211",
        "price": 10,
        "type": "Pork Sandwich",
        "description": "desertflower702",
        "latitude": 35.9716963,
        "location": {
          "x": -114.8460613,
          "y": 35.9716963,
          "type": "Point"
        },
        "longitude": -114.8460613,
        "printerId": "NA"
      },
      {

        "companyName": "Squid Ink Sushi Bar",
        "image": "b4e349bded886164ba9e47e68cdb0267.png",
        "ingredients": "Spicy Crab, Shrimp Tempura, Smoked Salmon, Avocado, Eel Sauce and Spicy Aioli",
        "name": "Ultimate Philly",
        "phone": "(602) 258-0510",
        "price": 14.5,
        "type": "Sushi Roll",
        "description": "Ultimate Philly",
        "latitude": 33.4474607,
        "location": {
          "x": -112.0736676,
          "y": 33.4474607,
          "type": "Point"
        },
        "longitude": -112.0736676,
        "printerId": "NA"
      },
      {

        "address": "1121 S Higley Rd #102, Mesa, AZ, 85206",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_79961.jpg?alt=media&token=a795ff1f-be73-4946-a87a-98caddef7a13",
        "ingredients": "Half is marinated chicken in sweet bbq sauce, red onions, fresh cilantro, cheddar, mozzarella and half Italian sausage, pepperoni, salami, beef meatball, tomato sauce, mozzarella and cheddar",
        "instagram": "",
        "lat": 32.7157,
        "name": "Ragin Rooster and Everest Pizza",
        "phone": "4805903234",
        "price": "26.80",
        "rating": 5,
        "review": "AMAZING PIZZA! Love this restaurant ",
        "type": "Dinner",
        "lng": 117.1611,
        "insertDate": 1584150274127,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "5985 W Chandler Blvd, Chandler, AZ 85226, USA",
        "appAdd": true,
        "companyName": "Salad and go chandler",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFC2A5C0F-5646-4544-95B3-0C9B5C96F83A.jpeg?alt=media&token=a0e1d066-26ec-481e-a6b8-e7f583d93201",
        "ingredients": "Romaine lettuce, Parmesan cheese, croutons and tomato. Pictured with no tomato",
        "instagram": "",
        "lat": 33.304269,
        "name": "Caesar Salad",
        "price": "5.74",
        "rating": 4.6,
        "review": "Great",
        "type": "Lunch",
        "lng": -111.94496200000003,
        "insertDate": 1575481787812
      },
      {

        "address": "3076 e chandler heights road suite 101, Gilbert, Az, 85298",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFD2E50C6-BD70-46FD-8C98-C142C567CAE5.jpeg?alt=media&token=ab506711-b700-49e9-b31b-a09be4b33699",
        "ingredients": "Freshly brewed cold brew",
        "instagram": "",
        "lat": 32.7157,
        "name": "Cold Brew Coffee",
        "phone": "4805973545",
        "price": "4.50",
        "rating": 5,
        "review": "Love this place. Great every time ",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1582751861171,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "3860 Worsham Ave Suite 300, Long Beach, CA 90846, USA",
        "appAdd": true,
        "companyName": "blanch",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_1239.JPG?alt=media&token=45bccd33-1a07-4609-a293-629e17b1a65c",
        "ingredients": "charred vegetables, cauliflower rice, carnitas, salad greens, guacamole, salsa",
        "instagram": "",
        "lat": 33.8298343,
        "name": "Bowl, Protein Bowl",
        "phone": "(562) 420-1117",
        "price": "14",
        "rating": 4.9,
        "review": "A whole keto friendly meal here at Plancha Latin Kitchen. Great for to go or dine in. You can mix and match to your liking follow the list for how many items you want. All for $14 is a great deal.",
        "type": "lunch, dinner",
        "lng": -118.14550300000002,
        "insertDate": 1578371765004,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taquer",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FBurrito%20Regular.png?alt=media&token=22ab748e-6eba-4e24-aeaf-712aa0774d33",
        "ingredients": "Choice of meat, rice, beans, onions, cilantro, and hot sauce. ",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Regular Burrito ",
        "phone": "(714) 702-5592",
        "price": "9",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578542051207
      },
      {

        "address": "8335 Garden Grove Blvd, Garden Grove, CA 92844, USA",
        "appAdd": true,
        "companyName": "fire car",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7421.JPG?alt=media&token=4839675a-0a6e-4f0f-8bb9-89a8f6e661e8",
        "ingredients": "LB peeled shrimp, fire sauce",
        "instagram": "",
        "lat": 33.774055,
        "name": "CAJUN BOIL PEELED SHRIMP",
        "phone": "(714) 638-8080",
        "price": "14.95",
        "rating": 4.3,
        "review": "I haven't had cajun boil in years, the flavors did not disappoint & they have PEELED SHRIMP which is perfect since I have long nails. The fire sauce is a combo of all their sauces which makes the perfect seasoning.",
        "type": "lunch, dinner",
        "lng": -117.98676799999998,
        "insertDate": 1571345088833
      },
      {
        "_id": "7sS4ZCGrbkdNRH4oh",
        "address": "9240 W Garden Grove Blvd #19, Garden Grove, CA 92844, USA",
        "appAdd": true,
        "companyName": "Pho 45",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FECCBF39A-F29E-4389-8F19-F98329997E80.jpeg?alt=media&token=0d74663d-66ba-4ada-8d31-02c6fbd16ba2",
        "ingredients": "Grilled Pork, Fried Egg, Veggies, Pho Broth",
        "instagram": "#koreanketofoodie",
        "lat": 33.7736658,
        "name": "#22 (Grilled Pork, Fried Egg & Steamed rice) ???Ask for More veggie NO rice",
        "phone": "(714) 537-9000",
        "price": "$9.75",
        "rating": 4.5,
        "review": "It was good! So glad they can substitute rice for veggies",
        "type": "Ketofied Grilled Pork Rice Plate"
      },
      {

        "address": "1537 W. Broadway Rd Ste. 106, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Jersey mike???s subs tempe",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF0A0FEC4-FF6A-4B63-A070-22A4050C7B73.jpeg?alt=media&token=2e647a87-3efc-45cd-bd50-bfb9c1edf100",
        "ingredients": "Regular sub with fresh cut turkey, bacon, mustard, lettuce, onion, pepperchinni???s, oil, vinegar, salt and pepper (Mike???s way no tomato or mayo).  ",
        "instagram": "#tempe",
        "lat": 33.40714,
        "name": "Turkey Bacon Avocado Sandwich - Regular",
        "phone": "(480) 921-4101",
        "price": "$8.95",
        "rating": 4,
        "review": "3.3/5",
        "type": "Sandwich",
        "lng": -111.96538800000002
      },
      {

        "address": "200 N Harbor Blvd, Fullerton, CA 92832, USA",
        "appAdd": true,
        "companyName": "Night owl",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F6048CC1B-F8A6-4015-BB76-FDBE63F7D1F8.jpeg?alt=media&token=d7880ee0-5c78-43f9-8adf-1c318fede8d6",
        "ingredients": "Two shots of espresso poured over ice in a 16 ounce cup and topped with filtered water.",
        "instagram": "Foodsupapp",
        "lat": 33.8714956,
        "name": "Small Iced Americano Coffee",
        "phone": "(714) 525-0305",
        "price": "3.62",
        "rating": 4.5,
        "review": "3.4",
        "type": "Coffee",
        "lng": -117.92414810000002
      },
      {

        "address": "111 N 12th St, Brooklyn, NY 11249, USA",
        "appAdd": true,
        "companyName": "Mister dip",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FD2451AC2-B2D8-4D08-8FE9-7FD7BC1ACEB1.jpeg?alt=media&token=d34b6737-a982-4233-ac8b-37baabf8030c",
        "ingredients": "Vanilla soft serve, cherry and blue raspberry dips, with red, white and blue sprinkles! ",
        "instagram": "#kureyourkravings",
        "lat": 40.72210959999999,
        "name": "American Dad",
        "price": "$8.00",
        "rating": 4.3,
        "review": "Delicious!",
        "type": "Ice Cream",
        "lng": -73.95718
      },
      {

        "address": "960 W University Dr, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Rositas ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F1028FA3F-6764-4DB9-BA37-7F8374DEFDF6.jpeg?alt=media&token=9020c5f8-7730-40cf-b6d6-77814fceabda",
        "ingredients": "Corn tortilla filled with meat, deep fried and topped with lettuce, onion and tomatoes. Your choice of shredded beef or chicken. Pictured as chicken ",
        "instagram": "#asu",
        "lat": 33.42271259999999,
        "name": "Chicken Taco",
        "phone": "(480) 966-0852",
        "price": "5.25",
        "rating": 4.1,
        "review": "4/5",
        "type": "Taco",
        "lng": -111.95176229999998
      },
      {

        "address": "12806 Foothill Blvd, Rancho Cucamonga, CA 91739, USA",
        "appAdd": true,
        "companyName": "china rep",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0200.JPG?alt=media&token=57d15f4d-d5d8-472a-83b2-d3ac9502e05e",
        "ingredients": "pork, pork belly,",
        "instagram": "",
        "lat": 34.1066757,
        "name": "Dim sum, family meal, Chinese BBQ",
        "phone": "(909) 899-5245",
        "price": "24.95",
        "rating": 4.399999999999999,
        "review": "The closest to keto friendly I can find at dim sum. I got this BBQ Plate Platter and chose pork, pork belly for our choice of meats. you can chose from pork, Peking duck, chicken, or square ribs. If you don't eat duck, don't worry you can swap it out to your liking.",
        "type": "lunch, dinner",
        "lng": -117.52578800000003,
        "insertDate": 1573449557058
      },
      {

        "companyName": "Ballast Point Brewery Little Italy",
        "image": "72d68bfaa37d3d1db41cf4e7825df95d.jpeg",
        "ingredients": "Meyers All Natural Beef, Blue Cheese Crumble, Lettuce, Tomato, Onion, Brioche Bun with French Fries",
        "name": "Ballast Point Burger with Fries",
        "phone": "619-255-7213",
        "price": 15,
        "type": "Cheeseburger",
        "description": "Blue Cheese Burger on a Brioche Bun",
        "latitude": 32.7276691,
        "location": {
          "x": -117.1696954,
          "y": 32.7276691,
          "type": "Point"
        },
        "longitude": -117.1696954
      },
      {

        "companyName": "Estrada's Mexican Food",
        "image": "9ce4ee6e4be26dc91140c416156140bd.png",
        "ingredients": "Flour Tortilla, Bacon, Sausage & Ham, with Hashbrowns",
        "name": "Destroyer Breakfast Burrito",
        "phone": "(619) 449-2103",
        "price": 6.49,
        "type": "Burrito",
        "description": "Breakfast Burrito",
        "latitude": 32.8451255,
        "location": {
          "x": -116.9987078,
          "y": 32.8451255,
          "type": "Point"
        },
        "longitude": -116.9987078
      },
      {

        "companyName": "Emma's Mexican Food",
        "image": "0b476ddd8e6cee2740a601586f28b7c1.jpeg",
        "ingredients": "Carne Asada, French Fries, Cheese and Guacamole",
        "name": "California Burrito",
        "phone": "6195968189",
        "price": 6.73,
        "type": "Burrito",
        "description": "California Burrito with Carne Asada",
        "latitude": 32.8353461,
        "location": {
          "x": -116.9831361,
          "y": 32.8353461,
          "type": "Point"
        },
        "longitude": -116.9831361
      },
      {

        "companyName": "Tilted Kilt Pub and Eatery",
        "image": "b109eaa36162bfa6dcbada8d8860cdd6.jpeg",
        "ingredients": "BBQ Bacon Cheeseburger with a 1/2 pound Beef PattyApplewood Smoked Bacon, Cheddar Cheese, Guinness BBQ Sauce, Crispy Shoestring Onions, Leaf Lettuce, Ripe Tomato",
        "name": "BBQ Bacon Cheeseburger",
        "phone": "(619) 814-5458",
        "price": 15,
        "type": "Bacon Cheeseburger",
        "description": "BBQ Bacon Cheeseburger with French Fries",
        "latitude": 32.7085806,
        "location": {
          "x": -117.1558475,
          "y": 32.7085806,
          "type": "Point"
        },
        "longitude": -117.1558475
      },
      {

        "companyName": "Annie's Fine Burgers",
        "image": "c1f0abeefc6c8c5b34a284a8083bd7d1.png",
        "ingredients": "Cheeseburger with Baked Pastrami, Turkey, Crisp Bacon, Swiss Cheese, Lettuce, Tomato, Red Onion, Pickle and Mayo with Honey Mustard.",
        "name": "Monster Burger",
        "phone": "(619) 258-8288",
        "price": 10.25,
        "type": "Burger",
        "description": "FoodsUp",
        "latitude": 32.8387166,
        "location": {
          "x": -116.9812271,
          "y": 32.8387166,
          "type": "Point"
        },
        "longitude": -116.9812271
      },
      {

        "companyName": "Costco Santee",
        "image": "2a8582d72a84476877cd15a9506adae0.png",
        "ingredients": "Pepperoni, Bell Peppers, Onions, Olives, Sausage, Cheese, Pizza",
        "name": "1 Slice of Combo/ Supreme Pizza",
        "phone": "(619) 448-3300",
        "price": 1.99,
        "type": "Pizza",
        "description": "Pepperoni, Bell Peppers, Onions, Olives, Sausage,",
        "latitude": 32.840222,
        "location": {
          "x": -116.9873931,
          "y": 32.840222,
          "type": "Point"
        },
        "longitude": -116.9873931
      },
      {

        "companyName": "The Crack Shack",
        "image": "e3445fa5626cb2c95fc2d7824f2ee355.png",
        "ingredients": "5 Pieces of Crispy Fried Chicken",
        "name": "Fried Chicken - 5 pc",
        "phone": "(619) 795-3299",
        "price": 15,
        "type": "Fried Chicken",
        "description": "The Crack Shack",
        "latitude": 32.7279012,
        "location": {
          "x": -117.1711893,
          "y": 32.7279012,
          "type": "Point"
        },
        "longitude": -117.1711893
      },
      {

        "companyName": "Chaba Thai Kitchen",
        "image": "248bb156984231387f97a38d5269acd9.png",
        "ingredients": "Stir-fried flat rice noodles with your choice of meat, basil leaves, Fresh Thai Chili, onions and bell peppers.",
        "name": "Spicy Basil Noodle (Drunken Noodle)",
        "phone": "(858) 503-7777",
        "price": 9.95,
        "type": "Drunken Noodel",
        "description": "jakepham",
        "latitude": 32.8331843,
        "location": {
          "x": -117.1499945,
          "y": 32.8331843,
          "type": "Point"
        },
        "longitude": -117.1499945
      },
      {

        "companyName": "The Wrap Shack",
        "image": "cbd5a6a63e728cc2166a87dc69e668de.jpeg",
        "ingredients": "Choose Protein: Chicken Breast, Steak, Grilled Tofu, Chicken Tenders.  Choose Starch: White Rice, Brown Rice, Quinoa, Soft Noodles. Choose Sauce: Cilantro-Jalapeno, Pesto, Sweet Orange-Chile, Teriyaki, Thai Peanut.  Veggies included: Carrots, Red Cabbage, Yellow Onions, Red Bells, Zuchinni.",
        "name": "Build Your Own Bowl",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Bowl",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "Taco Mesa",
        "image": "d252e8a11da05887ccbbf285d5d5c225.jpeg",
        "ingredients": "Blackened Chicken, Chipotle Adobo, Cabbage Relish, Two-way Cheese Blend, Topped with Pibil and Melted Cheese and Guacamole",
        "name": "Blackened Chicken Burrito w/ Guac",
        "phone": "(949) 642-0629",
        "price": 8.5,
        "type": "Burrito",
        "description": "FoodsUp",
        "latitude": 33.6432161,
        "location": {
          "x": -117.9252434,
          "y": 33.6432161,
          "type": "Point"
        },
        "longitude": -117.9252434,
        "printerId": "NA"
      },
      {

        "companyName": "Republic Ramen + Noodles",
        "image": "fb0f2b53beace54e843cafc38beeba46.jpeg",
        "ingredients": "Soy sauce based Ramen infused with Thai chili pepper, bell pepper, and roasted garlic.\r\nOriginal Toppings\r\nFresh spinach  Sprouts  Scallions  Carrots \r\nTraditional Toppings\r\nMen-ma  Bamboo shoots  Nori  Naruto  Scallions \r\nMeat\r\nPork  Tofu  Spam  Chicken  Beef",
        "name": "Chili Pepper Ramen",
        "phone": "\u202D1 (480) 388-3686\u202C",
        "price": 8.75,
        "type": "Ramen",
        "description": "Tempe, AZ",
        "latitude": 33.4212394,
        "location": {
          "x": -111.9171766,
          "y": 33.4212394,
          "type": "Point"
        },
        "longitude": -111.9171766,
        "printerId": "Na"
      },
      {

        "companyName": "Roadrunner Resort Bar",
        "image": "62e3a10dc06f72125207dcfc9cc9511e.jpeg",
        "ingredients": "Awesome beef patty with gooey cheddar cheese, topped with crispy smoked bacon and accompanied with lettuce, tomato, onion.  Comes with fries or upgrade to onion rings for $1.00",
        "name": "Bacon Cheeseburger",
        "phone": "(928 667-4252",
        "price": 9.49,
        "type": "Cheeseburger",
        "description": "Parker, AZ",
        "latitude": 34.2313021,
        "location": {
          "x": -114.1871835,
          "y": 34.2313021,
          "type": "Point"
        },
        "longitude": -114.1871835,
        "printerId": "NA"
      },
      {

        "companyName": "Kung Pow Bowl",
        "image": "30bd5ea1d509b64ecc8ae2c0e5bf8a29.jpeg",
        "ingredients": "Thin Chinese egg noodles wok'd with green and white onions, cabbage, carrots, and bean sprouts in a light, mild sauce. Your choice of: vegetable, chicken (add $0.25), BBQ pork (add $0.25), beef (add $0.75), shrimp (add $2), house special (chicken, shrimp, and BBQ pork) add $2.",
        "name": "Chicken Chow Mein",
        "phone": "(71$) 842-7262",
        "price": 9.75,
        "type": "Chinese Egg Noodles",
        "description": "Huntington Beach, Orange County",
        "latitude": 33.7294652,
        "location": {
          "x": -118.0094651,
          "y": 33.7294652,
          "type": "Point"
        },
        "longitude": -118.0094651,
        "printerId": "NA"
      },
      {

        "companyName": "PT Noodles",
        "image": "930d1f7f03513ffde214e6d061d08057.jpeg",
        "ingredients": "Tofu, bean sprouts, thai basil, lime, jalapeno and topped with green onions, cilantros.",
        "name": "Vegetable Pho",
        "phone": "(623) 936-7633",
        "price": 8.99,
        "type": "Pho",
        "description": "Avondale, Arizona",
        "latitude": 33.4632546,
        "location": {
          "x": -112.3550121,
          "y": 33.4632546,
          "type": "Point"
        },
        "longitude": -112.3550121,
        "printerId": "NA"
      },
      {

        "address": "1753 E Broadway Rd #103, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Pok",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF008EBF2-4BE4-4D0A-AFF7-901973A41416.jpeg?alt=media&token=b02e9105-fbc8-4108-a694-642896b416e7",
        "ingredients": "Chicken Teriyaki, Brown or White Rice with a salad",
        "instagram": "",
        "lat": 32.7157,
        "name": "Chicken Teriyaki",
        "phone": "4805561431",
        "price": "8.50",
        "rating": 4,
        "review": "Great lunch",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1593726090936,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.pokedonaz.com"
      },
      {

        "address": "1357 Abbot Kinney Blvd, Venice, CA 90291, USA",
        "appAdd": true,
        "companyName": "salt and str",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7084.JPG?alt=media&token=14b4e590-1736-40c9-a22a-9e4c1c057121",
        "ingredients": "coffee, bourbon, brownie, ",
        "instagram": "",
        "lat": 33.9907724,
        "name": "snack, dessert, cheat snack",
        "phone": "(310) 310-8429",
        "price": "12",
        "rating": 4.7,
        "review": "Left: Coffee Bourbon (It was the perfect balance of both, not a strong bourbon flavor but the two mixed well into this delicious flavor) Right: Gooey Brownie ( perfect taste for any brownie lover, it isn't too heavy but the flavor is on point",
        "type": "snack, dessert",
        "lng": -118.46603970000001,
        "insertDate": 1571019165095
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "Taq",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFish%20Tacos.png?alt=media&token=f65ed4ca-cb4c-4b7c-8017-501edb8bacc9",
        "ingredients": "With Alaskan pollock, cabbage, tomatoes, and house sauce.",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Fish Tacos",
        "phone": "(714) 702-5592",
        "price": "$6",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578541418597
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "Taqueria guerr",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F854807F7-CF5E-4FE7-AD1D-FF09D4DF9C63.jpeg?alt=media&token=3c2e944c-41b7-4787-bd45-23a2f41f480e",
        "ingredients": "\uD83D\uDD25 \uD83C\uDF36 Carne asada, guacamole, Hot Cheetos, cheese, onion, cilantro served up hot!",
        "instagram": "Foodsupapp",
        "lat": 33.7580768,
        "name": "Hot Cheetos Quesadilla ",
        "phone": "(714) 702-5592",
        "price": "12.50",
        "rating": 4,
        "review": "8.3",
        "type": "Quesadilla ",
        "lng": -118.02520670000001
      },
      {

        "address": "1817 E Guadalupe Rd, Tempe, AZ 85283, USA",
        "appAdd": true,
        "companyName": "Habit burger grill temp",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF8C10C50-C8D5-46AC-8EE4-5024620AA4BB.jpeg?alt=media&token=b6aca7be-a322-47f1-a5c8-c956bb6b7291",
        "ingredients": "White bun, two beef patties, white cheese, lettuce, grilled onion. ",
        "instagram": "",
        "lat": 33.36285,
        "name": "Double Char Cheeseburger",
        "phone": "(480) 456-8912",
        "price": "6.00",
        "rating": 4.4,
        "review": "This burger is perfect every time! ",
        "type": "Lunch",
        "lng": -111.91072200000002,
        "insertDate": 1578166813454,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "1600 S Azusa Ave Unit 178, City of Industry, CA 91748, USA",
        "appAdd": true,
        "companyName": "Haidilao",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_1258.JPG?alt=media&token=93496391-d1c3-44a4-9631-5defde8a74b9",
        "ingredients": "noodle, mince pork, green onion, chili oil",
        "instagram": "",
        "lat": 33.99448759999999,
        "name": "Dan Dan Noodle, noodle",
        "phone": "(860) 266-6666",
        "price": "3.98",
        "rating": 4.4,
        "review": "Such a good size for the price! ",
        "type": "snack, lunch",
        "lng": -117.92693730000002,
        "insertDate": 1578365902677,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {

        "address": "721 N Arizona Ave, Gilbert, AZ 85233",
        "appAdd": true,
        "companyName": "AZ Wilderness Gilbert Brewpub",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF3C1351F-CF8C-42C4-BF77-7D22D93C3764.jpeg?alt=media&token=b17b5484-5a47-444b-befa-e24d9afeb67c",
        "ingredients": "Grilled chicken, thick cut bacon, arugula, green chili, pepper jack, creamy chipotle sauce with potato chips from scratch",
        "instagram": "",
        "lat": 32.7157,
        "name": "Southwest Chicken Sandwich ",
        "phone": "4804972739",
        "price": "11.99",
        "rating": 4,
        "review": "Long wait but food is good. Great atmosphere ",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1594237125222,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.azwbeer.com"
      },
      {

        "address": "14001 Newport Ave #E, Tustin, CA 92780, USA",
        "appAdd": true,
        "companyName": "H N Tea",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_3957.JPG?alt=media&token=d3660790-c3a5-418d-965f-7f70a0d220d0",
        "ingredients": "Strawberries, cheese foam, ",
        "instagram": "#koreanketofoodie",
        "lat": 33.73821330000001,
        "name": "Strawberry Jasmine Tea Cheese Cap NO SUGAR",
        "phone": "(657) 600-8556",
        "price": "4.99",
        "rating": 4.5,
        "review": "So refreshing and good I'm so glad that I came upon this place a few months ago. It was so good and I recommend to my Keto friends",
        "type": "Sugar Free Drinks / Keto Friendly Drinks",
        "lng": -117.82285430000002
      },
      {

        "address": "15530 N Tatum Blvd, Phoenix, AZ 85032, USA",
        "appAdd": true,
        "companyName": "Scicilia",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F20190928_200245.jpg?alt=media&token=54c7a8c1-5738-49f9-9c5b-c75c64d282b6",
        "ingredients": "There are multiple options you can choose 4 from",
        "instagram": "",
        "lat": 33.6274366,
        "name": "Bruschetta board",
        "phone": "(602) 775-5140",
        "price": "15",
        "rating": 4.5,
        "review": "They are delicious! I chose the fig jam, smoked salmon, wild mushrooms, and prosciutto ",
        "type": "Lunch/dinner",
        "lng": -111.9784052
      },
      {

        "address": "1537 W Broadway Rd Suite 105, Tempe, AZ 85282",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F1D651A71-3D43-4F32-9D42-04011F32A670.jpeg?alt=media&token=fdf96e65-db08-4897-b9c4-a3bf33fc3102",
        "ingredients": "Great flour tortilla, refried beans and cheese. Comes with salsa bar options",
        "instagram": "",
        "lat": 32.7157,
        "name": "Bean and Cheese Burrito Special",
        "phone": "4805099459",
        "price": "3.49",
        "rating": 4,
        "review": "Great meal and never a huge line!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1582579610012,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "2000 E Rio Salado Pkwy Suite 1215, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Mad greens temp",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F68844FFF-1E2B-4076-9BB5-4B8F6CE115D8.jpeg?alt=media&token=32569a96-6210-4e3b-9060-9d48e45639db",
        "ingredients": "Romaine lettuce, croutons, Parmesan cheese with caesar dressing.  ",
        "instagram": "",
        "lat": 33.4334933,
        "name": "Mad Caesar ",
        "phone": "(602) 283-3901",
        "price": "9.00",
        "rating": 4.4,
        "review": "6/10! Substituted the tomatoes and croutons for smoked Gouda and artichokes \uD83D\uDD25",
        "type": "Lunch",
        "lng": -111.90157720000002,
        "insertDate": 1576098105995
      },
      {
        "_id": "5rkaDbhKPDpe6qWzg",
        "address": "1537 W Broadway Rd #101, Tempe, AZ 85284, USA",
        "appAdd": true,
        "companyName": "The buffalo",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FECC76AEF-A7DB-44EE-9456-BADC0B3B46A0.jpeg?alt=media&token=ccc3766f-bd7e-487a-8e25-199068a041f6",
        "ingredients": "California chicken burrito with French fries wrapped in a flour tortilla. Pictured with original hot sauce. In Tempe, Arizona",
        "instagram": "#tempe",
        "lat": 33.4072299,
        "name": "Cali Burrito",
        "phone": "(480) 534-1533",
        "price": "$5.95",
        "rating": 3.8,
        "review": "Bomb food ",
        "type": "Buffalo Wing Burrito"
      },
      {
        "_id": "LTE82CZuLJdoTCdfQ",
        "address": "1239 S Higley Rd #101, Mesa, AZ 85206, USA",
        "appAdd": true,
        "companyName": "Tacos 4 u",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F7BACF77B-6DAB-4ADB-BC1A-CA2EFF54BD05.jpeg?alt=media&token=cc6eb194-ff61-4b97-b369-90c664bc802a",
        "ingredients": "Carne asada, black beans, cheese, cilantro and jalape??o ",
        "instagram": "#mesafoodie",
        "lat": 33.3921636,
        "name": "Carne Asada Burrito",
        "phone": "(480) 757-0666",
        "price": "$7.95",
        "rating": 4,
        "review": "Great burrito",
        "type": "Burrito"
      },
      {
        "_id": "SwJsoyGzPBHNCfDBp",
        "address": "4302 E Ray Rd STE.106, Phoenix, AZ 85044, USA",
        "appAdd": true,
        "companyName": "The buzz",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F908B926C-9AF6-4886-BE70-CED27445BA47.jpeg?alt=media&token=194b9271-59b5-4d9e-914f-c90ef4dcdefc",
        "ingredients": "Turkey, ham, provolone on a bagel bun. Come with coffee drink!",
        "instagram": "#thebuzzedgoat",
        "lat": 33.3208835,
        "name": "Combo meal",
        "phone": "(480) 706-7411",
        "price": "$8.00",
        "rating": 4.8,
        "review": "Best deal in town!",
        "type": "Bagel club with drink of choice"
      },
      {

        "address": "417 S Main St, Orange, CA 92868, USA",
        "appAdd": true,
        "companyName": "blue",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0472.JPG?alt=media&token=6e9132eb-3593-4684-8849-0c9d6fa90286",
        "ingredients": "pitaya, goji berries, nut butter, chia pudding, granola, fruits",
        "instagram": "",
        "lat": 33.78183970000001,
        "name": "snack, pitaya bowl",
        "price": "9",
        "rating": 4.8,
        "review": "BEST $9 ever. I only go to bluebowl and no where else. Unlimited toppings and best flavor. Nothing beats that.",
        "type": "lunch, dinner",
        "lng": -117.86700410000003,
        "insertDate": 1576026348754
      },
      {

        "address": "1775 W University Dr Ste 130, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Arizona samdiech",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF6AC6B60-D415-4933-A274-D702187D099F.jpeg?alt=media&token=d4d597d4-e4ab-45db-886a-65f8325a9b84",
        "ingredients": "Ham, Pepperoni, Salami, Peperoncini's, White or Wheat bread and your choice of toppings Tempe location",
        "instagram": "Foodsup",
        "lat": 33.4214524,
        "name": "Italian Bomber #5 Sandwich",
        "phone": "(480) 829-7827",
        "price": "7.15",
        "rating": 4.5,
        "review": "7.2",
        "type": "Sandwich",
        "lng": -111.96920009999997
      },
      {

        "address": "1155 s Higley Rod, Mesa, AZ 85206",
        "appAdd": true,
        "companyName": "Delicias Mexicanas LLC",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF074DB40-C343-4710-A7EE-0AAA15FF4F31.jpeg?alt=media&token=840f1875-1dae-42f6-87a9-1b0686b7b297",
        "ingredients": "Carne Asada, Refried Beans, Cheese, Mexican Guacamole and a French Fries. ",
        "instagram": "",
        "lat": 32.7157,
        "name": "California Burrito",
        "phone": "4808322750",
        "price": "8.99",
        "rating": 4,
        "review": "Best Burrito shop on Higley and Southern",
        "type": "Lunch or Dinner",
        "lng": 117.1611,
        "insertDate": 1593737664258,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": ""
      },
      {

        "address": "355 Bristol St Ste W, Costa Mesa, CA 92626, USA",
        "appAdd": true,
        "companyName": "etcetera",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_1082.JPG?alt=media&token=fd0049b3-0dfb-469e-9e08-8a7f11c4c89d",
        "ingredients": "Inside: Spicy Shrimp and Krab and Avocado Outside: Fresh Tuna then Topped with Three(3) Special Delicious Sauce",
        "instagram": "",
        "lat": 33.6650755,
        "name": "Sushi",
        "phone": "(657) 231-6222",
        "price": "12",
        "rating": 4.6,
        "review": "This was recommended by the server and it was SOOO good. JUST TRY IT",
        "type": "lunch, dinner, brunch",
        "lng": -117.88023829999997,
        "insertDate": 1577222064327,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {

        "address": "1725 W University Drive, Tempe, AZ 85281",
        "appAdd": true,
        "companyName": "Yvonne???s Cafe",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F734B001F-E231-4B57-A2FA-EDF6490A9B69.jpeg?alt=media&token=72363b66-8cb4-4157-94e1-8185999e2352",
        "ingredients": "Sliced corned beef, sauerkraut, Swiss cheese and 1000 Island dressing on grilled marble rye bread with fries",
        "instagram": "",
        "lat": 32.7157,
        "name": "Reuben Sandwich ",
        "phone": "4809676610",
        "price": "8.29",
        "rating": 4,
        "review": "Great food and amazing staff!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1594231934865,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.yvonnescafe.net"
      },
      {

        "companyName": "Loco Burrito Moreno Valley",
        "image": "54fa636df9301a07951a38a2800de72f.jpeg",
        "ingredients": "Carne Asada, Shrimp, Chicken, Redford Beans, Mexican Rice, Cilantro, Onion, Flour Tortilla",
        "name": "The Triple Threat",
        "phone": "951-247-7623",
        "price": 8.75,
        "type": "Burrito",
        "description": "Shrimp, Carne Asada and Chicken Burrito",
        "latitude": 33.9392878,
        "location": {
          "x": -117.2410527,
          "y": 33.9392878,
          "type": "Point"
        },
        "longitude": -117.2410527
      },
      {

        "companyName": "Roberto's Taco Shop Hillcrest",
        "image": "d5e904bd14273e383fd132e5da9f8f11.jpeg",
        "ingredients": "California Burrito with Carne Asada, French Fries, Cheese and Add Guacamole",
        "name": "California Burrito add Guac",
        "phone": "(619) 693-5040",
        "price": 8.46,
        "type": "Burrito",
        "description": "California Burrito with Guacamole",
        "latitude": 32.7472212,
        "location": {
          "x": -117.1612562,
          "y": 32.7472212,
          "type": "Point"
        },
        "longitude": -117.1612562
      },
      {

        "companyName": "Lil Pickle",
        "image": "6b478b1052b168e60d30bf1577a3383c.jpeg",
        "ingredients": "Turkey Sandwich with Fresh Turkey, Mozzarella Cheese, Lettuce, Kosher Pickles",
        "name": "Turkey Breast 10\"",
        "phone": "(714) 979-5522",
        "price": 6.95,
        "type": "Sandwich",
        "description": "Turkey Breast Sandwich",
        "latitude": 33.679437,
        "location": {
          "x": -117.908367,
          "y": 33.679437,
          "type": "Point"
        },
        "longitude": -117.908367
      },
      {

        "companyName": "Domo Sushi Bar & Grill",
        "image": "03497e630212c2bfb0f3a5032894e257.jpeg",
        "ingredients": "Sushi Combo with Maguro, Sake (Salmon), Hamachi, Albacore, Surf Clam (Ebi) [1 of ea], 6pc Shrimp Tempera Roll",
        "name": "Sushi Combo",
        "phone": "(619) 596-2882",
        "price": 16,
        "type": "Sushi Combo",
        "description": "Sushi Combo",
        "latitude": 32.8373392,
        "location": {
          "x": -116.9876939,
          "y": 32.8373392,
          "type": "Point"
        },
        "longitude": -116.9876939
      },
      {

        "companyName": "Ferny's Mexican Grill",
        "image": "d3426039ebfc661b547840c6e4e1e1da.png",
        "ingredients": "Fries, Curly Fries, Carne Asada, Guacamole, Sour Cream, Shredded Cheese, Jalapeno, Cojita Cheese,",
        "name": "Ferny's Fries",
        "phone": "(619) 562-1343",
        "price": 9,
        "type": "Carne Asada Fries",
        "description": "Large Carne Asada Fries",
        "latitude": 32.8387127,
        "location": {
          "x": -116.9729249,
          "y": 32.8387127,
          "type": "Point"
        },
        "longitude": -116.9729249
      },
      {

        "companyName": "Ferny's Mexican Grill",
        "image": "792c4a2296b5c7ea1b6e19f27a9de530.jpeg",
        "ingredients": "Grilled Chicken, Beans, Bell Peppers, Onions, Potatoes",
        "name": "Veggie Burrito",
        "phone": "(619) 562-1343",
        "price": 8.75,
        "type": "Burrito",
        "description": "Veggie Burrito add Chicken",
        "latitude": 32.8387127,
        "location": {
          "x": -116.9729249,
          "y": 32.8387127,
          "type": "Point"
        },
        "longitude": -116.9729249
      },
      {

        "companyName": "Katsu Cafe",
        "image": "1bc0d2e55afac9b96804f4228b2be9ec.jpeg",
        "ingredients": "Chicken teriyaki plate with rice miso soup green salad and potato salad",
        "name": "Teriyaki Plate",
        "phone": "(858) 560-8859",
        "price": 8.25,
        "type": "Chicken Plate",
        "description": "Teriyaki Plate",
        "latitude": 32.8320588,
        "location": {
          "x": -117.1606663,
          "y": 32.8320588,
          "type": "Point"
        },
        "longitude": -117.1606663
      },
      {

        "companyName": "Kaito Sushi",
        "image": "a93faba5e816163150a8de450d92ca5b.png",
        "ingredients": "Shrimp tempura, avocado, dynamite sauce, cucumber & tuna and jalapenos on top",
        "name": "Red Tide Roll",
        "phone": "(760) 634-2746",
        "price": 16,
        "type": "Sushi Roll",
        "description": "Kaito Sushi",
        "latitude": 33.0473019,
        "location": {
          "x": -117.260329,
          "y": 33.0473019,
          "type": "Point"
        },
        "longitude": -117.260329
      },
      {

        "companyName": "Blue Ribbon Pizzeria",
        "image": "0611c4d52cc6fc364266699295305207.png",
        "ingredients": "Lemon EVOO, Fresh Mozzarella, Ricotta, Parmigiano Reggiano, Lemon Zest, Red Onion & Basil",
        "name": "Signature",
        "phone": "(76) 634 - 7671",
        "price": 16.5,
        "type": "Pizza",
        "description": "Blue Ribbon Pizza",
        "latitude": 33.0410173,
        "location": {
          "x": -117.2926439,
          "y": 33.0410173,
          "type": "Point"
        },
        "longitude": -117.2926439
      },
      {

        "companyName": "Spicy House",
        "image": "c32a6095945630f157f350944e84a464.png",
        "ingredients": "Shrimp Hot Pot",
        "name": "Shrimp Hot Pot",
        "phone": "(858) 278-5883",
        "price": 16.99,
        "type": "Shrimp Pot",
        "description": "Spicy House",
        "latitude": 32.8141393,
        "location": {
          "x": -117.1539653,
          "y": 32.8141393,
          "type": "Point"
        },
        "longitude": -117.1539653
      },
      {

        "companyName": "Sushirrito",
        "image": "5db7e32819e407a67fbdc4395a1ddbdb.png",
        "ingredients": "Yellowfin Tuna (Hand-Line Caught), Tamago, Piquillo Peppers, Lotus Chips, Namasu Cucumber, Green Leaf Lettuce, Ginger Guac, Yuzu Tobiko",
        "name": "Geisha's Kiss",
        "phone": "(415) 544-9868",
        "price": 13,
        "type": "Sushi Burrito",
        "description": "blondesandburritos",
        "latitude": 37.7902361,
        "location": {
          "x": -122.4037893,
          "y": 37.7902361,
          "type": "Point"
        },
        "longitude": -122.4037893
      },
      {

        "companyName": "Cruiser Taco",
        "image": "66e3d1b35e51a281e3fcbe36a2d8cb76.png",
        "ingredients": "House chips or fries, loaded with queso, frijoles, cheese, avo, cremas and choice of protein (Carne Asada, Pollo Asado, Pork-Adobo, Portobello)",
        "name": "Cruiser Nachos",
        "phone": "(619) 564-7178",
        "price": 7.95,
        "type": "Nachos",
        "description": "Cruiser Taco",
        "latitude": 32.755586,
        "location": {
          "x": -117.1323806,
          "y": 32.755586,
          "type": "Point"
        },
        "longitude": -117.1323806
      },
      {

        "companyName": "RakiRaki Ramen & Tuskemen",
        "image": "ece55cd119ad97cc5805197b994c65e7.png",
        "ingredients": "Fermented with organic garlic oil roasted with natural bincho charcoal for 18 hours. Double thick handcrafted noodles with Hakata Tonkotsu broth, cabbage, bean sprouts, five spice soy sauce pickled egg, wakame seaweed, garlic chips and crushed sesame\r\nAburi organic chicken or Aburi chasiu\r\nFlame blistered prime X.O. underbelly",
        "name": "Black Edition - Super Exclusive",
        "phone": "(858) 573-2400",
        "price": 13.95,
        "type": "Ramen",
        "description": "intlfoodforeal",
        "latitude": 32.8248571,
        "location": {
          "x": -117.1559327,
          "y": 32.8248571,
          "type": "Point"
        },
        "longitude": -117.1559327
      },
      {

        "companyName": "CK's Tavern & Grill",
        "image": "bee7f97e9cb2fff3fd60c5b492ff3e8a.jpeg",
        "ingredients": "A combination of thinly sliced pastrami and corned beef with sauerkraut and swiss cheese. Served on rye with thousand island on the side.",
        "name": "The Reuben",
        "phone": "(480) 706-5564",
        "price": 10.99,
        "type": "Reuben",
        "description": "Ahwatukee, Arizona",
        "latitude": 33.3058134,
        "location": {
          "x": -111.9932433,
          "y": 33.3058134,
          "type": "Point"
        },
        "longitude": -111.9932433,
        "printerId": "NA"
      },
      {

        "address": "1408 S Higley Rd, Mesa, AZ 85206, USA",
        "appAdd": true,
        "companyName": "Black rock co",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F5AE53D72-A045-4A29-B536-73F11A009BCB.jpeg?alt=media&token=f4776d91-5f1f-4da8-a706-b5a4bb96950b",
        "ingredients": "Fresh cold brew ",
        "instagram": "",
        "lat": 33.3899894,
        "name": "Cold Brew",
        "phone": "(480) 361-5677",
        "price": "4.05",
        "rating": 4.6,
        "review": "6/10. This coffee shop is awesome",
        "type": "Coffee",
        "lng": -111.71981340000002,
        "insertDate": 1577238989414,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "734 N McQueen Rd #101, Gilbert, AZ 85233, USA",
        "appAdd": true,
        "companyName": "Genos",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF93A7B2D-4DA0-4F70-9E9B-315222A8405B.jpeg?alt=media&token=09f70314-6a12-4257-ae85-d4a4810c9927",
        "ingredients": "Good spot for New York style pizza. Lunch special is 1 slice of one topping pizza and a 16 ounce drink for $2.00. Great price for this meal",
        "instagram": "#foodsup",
        "lat": 33.363326,
        "name": "Lunch Special - $2.00 pizza slice and drink",
        "phone": "(480) 892-3030",
        "price": "2.00",
        "rating": 3.9,
        "review": "5.8",
        "type": "Pizza",
        "lng": -111.82513890000001
      },
      {

        "address": "Gilbert, AZ, USA",
        "appAdd": true,
        "companyName": "Gilvert",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F20190829_152958.jpg?alt=media&token=eb5871f1-9b33-47e1-bf7a-308d9a31af47",
        "ingredients": "Tempura Style Lobster served over seasoned premium crinkle-cut fries topped with fresh micro herbs - finished with lots of SAUCE!!!! ",
        "instagram": "@phx_food_whisperer ",
        "lat": 33.3528264,
        "name": "Sloppy Lobsta Fries",
        "price": "15",
        "review": "I substituted the crinkle cut fries with tater tots and it was phenomenal! Highly recommended.",
        "type": "Fries",
        "lng": -111.78902700000003
      },
      {

        "address": "120 N Leroux St, Flagstaff, AZ, 86001",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FCCCBB63D-2F10-49B5-84E8-BD57D041F6AE.jpeg?alt=media&token=d9ee0f63-b8e2-4d44-a522-59c98e00e18b",
        "ingredients": "Bacon, Swiss, Grilled Onions & Spicy Honey Mustard.  Served with lettuce, tomato, pickle & fries on the side",
        "instagram": "",
        "lat": 32.7157,
        "name": "Wrigley Field Bacon Cheeseburger",
        "phone": "9287743274",
        "price": "13.00",
        "rating": 4,
        "review": "Great spot for a quick bite!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1588610451976,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "1753 E Broadway Rd #103, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Pokedon ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F002F68EC-9918-4C3D-A0EE-D8FDFE881C90.jpeg?alt=media&token=a72fd639-0acc-433c-83f8-4318ed73178c",
        "ingredients": "Choose your protein and toppings. Pictured with salmon, shoyu tuna, imitation crab, seaweed, cucumber, onion, pineapple on lettuce and brown rice. ",
        "instagram": "",
        "lat": 33.4064009,
        "name": "Poke Bowl",
        "phone": "(480) 556-1431",
        "price": "12.85",
        "rating": 4.6,
        "review": "This place is on average better than most other poke joints. ",
        "type": "Lunch ",
        "lng": -111.90958849999998,
        "insertDate": 1572923063668
      },
      {

        "address": "1408 S Higley Rd, Mesa, AZ 85206, USA",
        "appAdd": true,
        "companyName": "Black rock ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FA0525050-E8F4-49B5-B21B-A56DE64FA9B1.jpeg?alt=media&token=5dbaaa2c-710b-4e1d-9e51-514a24904f92",
        "ingredients": "Two shots of espresso poured over ice in a 16 ounce oup",
        "instagram": "#mesa",
        "lat": 33.3899894,
        "name": "Small Iced Americano",
        "phone": "(480) 361-5677",
        "price": "2.16",
        "rating": 4.7,
        "review": "3.6/5",
        "type": "Americano",
        "lng": -111.71981340000002
      },
      {

        "address": "10320 Mission Gorge Rd, Santee, CA 92071, USA",
        "appAdd": true,
        "companyName": "Ferny???s santee",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F62A01D7A-DF62-41CD-AE0E-EDA86C3548A6.jpeg?alt=media&token=c32a578a-6ae6-4305-9f5f-07ff791d7de7",
        "ingredients": "Carne Asada, jalape??o, beans, cheese, tortilla chips and guacamole. No sour cream ",
        "instagram": "",
        "lat": 32.8387009,
        "name": "Nacho Burrito",
        "phone": "(619) 562-1343",
        "price": "8.50",
        "rating": 4.5,
        "review": "9/10. Best burrito in Santee, Ca",
        "type": "Dinner",
        "lng": -116.9729355,
        "insertDate": 1577142110200,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "8028 E Valley Rd, Prescott Valley, AZ 86314, USA",
        "appAdd": true,
        "companyName": "Taqueria guadal",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FECC24647-D0A6-4683-AA52-5AEDFF7F456F.jpeg?alt=media&token=4321912a-2241-410d-a76d-f6bb3ad49131",
        "ingredients": "Seasoned al pastor \uD83C\uDF2E ???s on two flour tortillas for $2.60 each. I was only able to eat two of them because they fill the tacos with a good amount of meat!",
        "instagram": "foodsup ",
        "lat": 34.5871576,
        "name": "Al Pastor Tacos",
        "phone": "(928) 775-4805",
        "price": "10.40",
        "rating": 4.5,
        "review": "6.5",
        "type": "Tacos",
        "lng": -112.3252248
      },
      {

        "address": "3215 E Camelback Rd, Phoenix, AZ 85018, USA",
        "appAdd": true,
        "companyName": "First watch",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F0FA54F78-641C-44D5-B16E-EA10488D8493.jpeg?alt=media&token=3e42c124-03af-4b08-8d5f-4d9eb0d709a6",
        "ingredients": "Eggs, bacon, ham, cheese and more. ",
        "instagram": "",
        "lat": 33.50926200000001,
        "name": "Burrito ",
        "phone": "(602) 955-3447",
        "price": "10.95",
        "rating": 4.5,
        "review": "5/10",
        "type": "Breakfast",
        "lng": -112.012202,
        "insertDate": 1576862130208
      },
      {

        "address": "10652 N 89th Pl, Scottsdale, AZ 85260, USA",
        "appAdd": true,
        "companyName": "Chick-fil-A scottsda",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F438CED04-5839-4AE6-88FD-1BF4C0BD4A1F.jpeg?alt=media&token=f436f8be-df5c-40bd-aa9c-b9e9830a26dd",
        "ingredients": "Everything bagel with eggs, fried chicken and cheese",
        "instagram": "",
        "lat": 33.5831393,
        "name": "Fried Chicken Breakfast Bagel",
        "phone": "(480) 404-6798",
        "price": "4.25",
        "rating": 4.5,
        "review": "7/10",
        "type": "Breakfast",
        "lng": -111.88859660000003,
        "insertDate": 1577121072582
      },
      {

        "address": "777 San Manuel Blvd, Highland, CA 92346, USA",
        "appAdd": true,
        "companyName": "rock and brew hi",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0474.JPG?alt=media&token=cf3d4db4-29f6-4d4e-a845-9b6fb50291b0",
        "ingredients": "Bavarian soft pretzel, bier cheese, spicy sweet mustard, honey mustard",
        "instagram": "",
        "lat": 34.1502314,
        "name": "Giant Bavarian Pretzel",
        "phone": "(909) 425-4838",
        "price": "11.95",
        "rating": 3.4,
        "review": "Thats a real pretzel, I am a sucker for a good pretzel but the presentation is a bonus! good as it looks but I wish I had some melted cheddar cheese with it. Definitely a must when visiting!",
        "type": "appetizer, cheat meal, snack",
        "lng": -117.229063,
        "insertDate": 1576951792707
      },
      {

        "address": "1000 Bristol St N St. 10, Newport Beach, CA 92660, USA",
        "appAdd": true,
        "companyName": "Mouli",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7078.JPG?alt=media&token=49887324-87ac-4a02-8519-f78b31dc0c40",
        "ingredients": "bacon, eggs, veggies, jam, bread",
        "instagram": "",
        "lat": 33.6578541,
        "name": "Keto Friendly Omelette",
        "phone": "(949) 474-0920",
        "price": "$13",
        "rating": 4.6,
        "review": "Skip the bread or save it for your friends to keep it low carb. I personally think this is a pretty good deal for a plate that includes a side of greens. ",
        "type": "breakfast, brunch",
        "lng": -117.86651540000003,
        "insertDate": 1570739091859
      },
      {
        "_id": "BDbMwcd86ycvEypuA",
        "address": "7050 W Ray Rd, Chandler, AZ 85226, USA",
        "appAdd": true,
        "companyName": "In n out",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFCF12266-E509-415C-B64E-C04E338B3485.jpeg?alt=media&token=66be4a81-232b-467d-a161-3803b9b8bbee",
        "ingredients": "Two grilled beef patties, two cheese slices and your choice of toppings. Two beef patties, two slices of cheese, pickles, mustard and ketchup in photo",
        "instagram": "#innout",
        "lat": 33.3204,
        "name": "Double Double",
        "phone": "(800) 786-1000",
        "price": "$4.00",
        "rating": 4.6,
        "review": "Great pickles ",
        "type": "Cheesebuger"
      },
      {
        "_id": "FGz2nNBJXN9MFHPEJ",
        "address": "4302 E Ray Rd STE.106, Phoenix, AZ 85044, USA",
        "appAdd": true,
        "companyName": "The bu",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F940822EC-5A10-468B-A136-5098AE17F66C.jpeg?alt=media&token=25fdfc65-ae89-4197-927d-3908ea7e7226",
        "ingredients": "Cold brew, chocolate, cream",
        "instagram": "#thebuzzedgoat",
        "lat": 33.3208835,
        "name": "Mocha Mayhem",
        "phone": "(480) 706-7411",
        "price": "$4.00",
        "rating": 4.8,
        "review": "A must try!",
        "type": "Cold brew coffee"
      },
      {
        "_id": "QEhCDCJ3pPk6MkDkx",
        "address": "1325 W Elliot Rd Suite 106, Tempe, AZ 85284, USA",
        "appAdd": true,
        "companyName": "Voodoo",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F5DC154A2-9878-4F58-9074-93A7B78EFE9E.jpeg?alt=media&token=057d5b50-c6d6-46a7-9a15-1afdafe3aec8",
        "ingredients": "Catfish, lettuce, mayo, tomato on a nice slice of bread. Comes with potato chips and pictured with no tomato",
        "instagram": "#southernfood",
        "lat": 33.3485283,
        "name": "Catfish Po Boy",
        "phone": "(480) 659-6145",
        "price": "$10.00",
        "rating": 3.9,
        "review": "Great southern food in Arizona",
        "type": "Po Boy Southern Food"
      },
      {
        "_id": "eJ9kk4EcQvotRnmpd",
        "address": "1420 E Plaza Blvd, National City, CA 91950, USA",
        "appAdd": true,
        "companyName": "Me ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Fimage.jpg?alt=media&token=bac1e4ae-5346-426d-a873-7da489e1f51f",
        "ingredients": "Ajajaha",
        "instagram": "Ananabab",
        "lat": 32.6749445,
        "name": "Tttt",
        "phone": "(619) 678-0157",
        "price": "Anajah",
        "rating": 1,
        "review": "Ahahaba",
        "type": "Ajajah"
      },
      {

        "address": "2503, 2613 N Thunderbird Cir, Mesa, AZ 85215, USA",
        "appAdd": true,
        "companyName": "Steak and ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F9F5AA806-4E06-4A02-B70F-92DDAE248480.jpeg?alt=media&token=e02d9b64-e20d-499d-a89a-e459927def4c",
        "ingredients": "Great cheeseburger with all the fixings and a side of fries. ",
        "instagram": "Mesa, AZ",
        "lat": 33.4629915,
        "name": "Cheeseburger and fries ",
        "phone": "(480) 830-6100",
        "price": "8.00",
        "rating": 4.3,
        "review": "6.8",
        "type": "Lunch ",
        "lng": -111.7193383
      },
      {

        "address": "20657 Golden Springs Dr #109, Diamond Bar, CA 91789, USA",
        "appAdd": true,
        "companyName": "health station",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0469.JPG?alt=media&token=9e37452e-b55f-4f8e-9372-776dc81f46a5",
        "ingredients": "Grass Jelly, Taro, Barley, Organic Milk, Ice",
        "instagram": "",
        "lat": 33.9977435,
        "name": "Taiwanese Dessert, Shaved Ice, Healthy Dessert",
        "phone": "(626) 257-8441",
        "price": "6.50",
        "rating": 4.8,
        "review": "I drive 40 minutes for this bowl or any of their drinks. Totally a healthier alternative to just other shaved iced. You get to pick 3 toppings and its just balanced so good and does not feel like a cheat on my carb day. ",
        "type": "snack, dessert",
        "lng": -117.85381010000003,
        "insertDate": 1576952243699
      },
      {

        "address": "1030 W Broadway Rd, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Arizona donut",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FBCFF34A9-BEF1-4E88-97CE-5F9608B94B0E.jpeg?alt=media&token=475cc534-f721-4eaf-b5e8-add8464799e2",
        "ingredients": "Fluffy croissant stuffed with ham and cheese",
        "instagram": "",
        "lat": 33.4078048,
        "name": "Ham and Cheese Croissant ",
        "phone": "(480) 968-1321",
        "price": "3.19",
        "rating": 4.4,
        "review": "7/10. The croissant was really great (not too crispy).  Also, the amount of cheese and ham was spot on too. ",
        "type": "Breakfast",
        "lng": -111.95489199999997,
        "insertDate": 1577379521592,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "companyName": "Sd Blenders",
        "image": "a1f6d26cb16301584eeda2eaf1caf08b.png",
        "ingredients": "Non Fat Milk, Non Fat , Non Fat Peanut Butter Yogurt, Peanuts, Banana, 28 Grams, Whey Protein",
        "name": "Peanut Butter Builder",
        "phone": "(619) 457-0373",
        "price": 6.45,
        "type": "Protein Smoothie",
        "description": "Medium Peanut Butter Builder",
        "latitude": 32.8413236,
        "location": {
          "x": -116.985885,
          "y": 32.8413236,
          "type": "Point"
        },
        "longitude": -116.985885
      },
      {

        "companyName": "Oishii Japanese Thai Restaurant",
        "image": "dbf0ad4031c77806fa04bd5710a674b6.jpeg",
        "ingredients": "Chicken or Beef Stir-fried rice noodles with egg and our homeade Pad Thai Sauce",
        "name": "Pad Thai",
        "phone": "(619) 596-4852",
        "price": 8.95,
        "type": "Thai Noodle",
        "description": "Chicken Pad Thai",
        "latitude": 32.8547002,
        "location": {
          "x": -116.9736786,
          "y": 32.8547002,
          "type": "Point"
        },
        "longitude": -116.9736786
      },
      {

        "companyName": "Tu Taco Taco Shop",
        "image": "6b6ac86e53400529f4ddd7cda0509565.jpeg",
        "ingredients": "Hot Cheeto Quesadilla Wrap, Carne Asada, Chipotle Sauce, French Fries and Cheese",
        "name": "Hot Cheeto Burrito",
        "phone": "(619) 882-2920",
        "price": 8.95,
        "type": "Burrito",
        "description": "FoodsUp",
        "latitude": 32.6039062,
        "location": {
          "x": -117.0512197,
          "y": 32.6039062,
          "type": "Point"
        },
        "longitude": -117.0512197
      },
      {

        "companyName": "Mateo's Taqueria",
        "image": "d9df30dfa407dc6540973882038122e2.jpeg",
        "ingredients": "Carne Asada, Radishes, Molcajete Salsa, Onions, Crema",
        "name": "Carne Asada Taco",
        "phone": "(415) 648-6000",
        "price": 5.85,
        "type": "Taco",
        "description": "miss.augustina",
        "latitude": 37.7508961,
        "location": {
          "x": -122.4180867,
          "y": 37.7508961,
          "type": "Point"
        },
        "longitude": -122.4180867
      },
      {

        "companyName": "Herb & Wood",
        "image": "ed56f58021d0f5c4a3a5f272a5cf1d5b.png",
        "ingredients": "Freshly Baked Buttery Bread Rolls",
        "name": "Fresh Baked Buttery Rolls (Secret Menu)",
        "phone": "(619) 955-8495",
        "price": 7.33,
        "type": "Bread Roll",
        "description": "Sandyeggofoodie",
        "latitude": 32.7272171,
        "location": {
          "x": -117.1709295,
          "y": 32.7272171,
          "type": "Point"
        },
        "longitude": -117.1709295
      },
      {

        "address": "1753 E Broadway Rd #103, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Poked",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FAB66C0E2-4A22-4605-B90A-7354F60AD6EB.jpeg?alt=media&token=815dfdf3-a580-4738-b555-f5cbc208d173",
        "ingredients": "Two options of fish (ahi tuna and Shoyu Tuna) And you pick the topping. I had seaweed, cucumber, pineapple, spicy house sauce, crab and a few other goodies ",
        "instagram": "Foodsup",
        "lat": 33.4064009,
        "name": "Poke Bowl - Regular Size",
        "phone": "(480) 556-1431",
        "price": "11.60",
        "rating": 4.6,
        "review": "6.5",
        "type": "Poke",
        "lng": -111.90958849999998
      },
      {

        "address": "222 E University Drive, Tempe, AZ 85281",
        "appAdd": true,
        "companyName": "The Original Chop Shop",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FD9BA4657-1800-4637-BF80-38D9817341FD.jpeg?alt=media&token=396db2c9-02d9-4dc6-9313-3ab5c0c741d7",
        "ingredients": "turkey, bacon, provolone, tomato, onion, house greens, avocado pesto, red win vinaigrette, multi-grain bread",
        "instagram": "",
        "lat": 32.7157,
        "name": "The Club Sandwich",
        "phone": "4803079336",
        "price": "9.00",
        "rating": 4,
        "review": "Great bacon on this sandwich and fresh ingredients!",
        "type": "Sandwich",
        "lng": 117.1611,
        "insertDate": 1595879789913,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.theoriginalchopshop.com"
      },
      {

        "address": "1402 S Priest Dr, Tempe, AZ 85281, USA",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FCDDCE505-3A86-401D-B0D8-D21D83247E38.jpeg?alt=media&token=38c57823-fa74-4668-9a88-5f6de24c9289",
        "ingredients": "Grilled chicken breast in a hamburger bun, bacon, avocado, mayo and tomato.  No tomato pictured",
        "instagram": "",
        "lat": 32.7157,
        "name": "California Chicken Sandwich",
        "phone": "4809686612",
        "price": "11.49",
        "rating": 4,
        "review": "Great food but always a long wait",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1588195600548,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "4222 N Marshall Way, Scottsdale, AZ 85251, USA",
        "appAdd": true,
        "companyName": "Schmoo",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F0EA99D4C-B8D4-42E3-BEFC-D8F20319C61C.jpeg?alt=media&token=f9635967-fb61-4c3d-988c-5027c41d54db",
        "ingredients": "Shots of espresso over ice. Located in Scottsdale. ",
        "instagram": "Scottsdale",
        "lat": 33.497287,
        "name": "Iced Americano Coffee",
        "phone": "(480) 999-2822",
        "price": "4.00",
        "rating": 4.8,
        "review": "?????? This coffee had a nice hint of a chocolate or something so I think it was great! 7/10",
        "type": "Americano Coffee",
        "lng": -111.92902659999999
      },
      {

        "address": "1420 S Higley Rd, Gilbert, AZ 85296, USA",
        "appAdd": true,
        "companyName": "Backyar",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F0FAB1104-7372-4FCD-8433-13DFBE2696B1.jpeg?alt=media&token=79757e03-ab97-4dcd-841a-10a7c83d40e4",
        "ingredients": "Al pastor tacos are more \uD83D\uDD25 than the carne asada. Great spot to get good Mexican food in Gilbert, AZ. ",
        "instagram": "Gilbert",
        "lat": 33.32460829999999,
        "name": "Tacos",
        "phone": "(480) 247-2775",
        "price": "2.40",
        "rating": 4.3,
        "review": "7.5",
        "type": "Tacos, Mexican food",
        "lng": -111.72173650000002
      },
      {

        "address": "b, 618, Pine Knot Ave, Big Bear Lake, CA 92315, USA",
        "appAdd": true,
        "companyName": "Firerock burger",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FA261F3B4-C4FE-4536-9A32-DBFF05B5C8B5.jpeg?alt=media&token=f97eb7b7-bbef-4237-841e-4932452ca7dc",
        "ingredients": "???Californication???  Pepper jack cheese, fire roasted green chilies, applewood smoked bacon, shredded lettuce, diced roma tomatoes, avocado mash & chipotle aioli ",
        "instagram": "",
        "lat": 34.241252,
        "name": "Californication",
        "phone": "(909) 878-0696",
        "price": "12.00",
        "rating": 4.5,
        "review": "Great burger! Green chilis make this burger have some kick and the atmosphere was fun",
        "type": "Lunch or Dinner",
        "lng": -116.91173100000003,
        "insertDate": 1571749056134
      },
      {

        "address": "20627 Golden Springs Dr #1R, Diamond Bar, CA 91789, USA",
        "appAdd": true,
        "companyName": "sunbright t",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7234.JPG?alt=media&token=c8f3c01e-5f0e-4cc8-a87b-d7b0facfe879",
        "ingredients": "cheese foam, white peach oolong tea",
        "instagram": "",
        "lat": 33.9976622,
        "name": "Keto Tea, cheese foam, tea",
        "phone": "(909) 895-7699",
        "price": "4.75",
        "rating": 4.5,
        "review": "Get the White Peach Oolong Cheese Foam w/o sugar then add your own ketofriendly sweetener and it is literally like a peachy milk tea ( after shaken) so yummy! You can't even its kept cuz its so good!",
        "type": "snack, drink, ",
        "lng": -117.85537899999997,
        "insertDate": 1573448820609
      },
      {

        "address": "6717 Comstock Ave, Whittier, CA 90601, USA",
        "appAdd": true,
        "companyName": "belly b",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7090.JPG?alt=media&token=dd4d0fef-acca-442c-8204-bc0288f87c4d",
        "ingredients": "fire cracker sauce, fried chicken, fried chicken skin",
        "instagram": "",
        "lat": 33.9803373,
        "name": "Snack, Korean Fried Chicken, Fried Chicken",
        "phone": "(562) 696-1111",
        "price": "18",
        "rating": 4.399999999999999,
        "review": "My friend had got this to share and got fried chicken skin tossed in for additional $5 for me (ketofriendly) The flavors was soooo good. I highly recommend. Honestly we both liked the fried chicken skin better with the sauce. ",
        "type": "appetizer, meal",
        "lng": -118.0388226,
        "insertDate": 1572128427871
      },
      {
        "_id": "M66NKEC9gmLLQY2YW",
        "address": "2761 E Baseline Rd, Gilbert, AZ 85234, USA",
        "appAdd": true,
        "companyName": "Quicktrip",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F80C371CB-8881-4487-8BE8-A186AA5362C3.jpeg?alt=media&token=07d45acd-1e61-461a-b0cd-5a26329f1441",
        "ingredients": "QT has a great breakfast sandwich! Buttery biscuit, eggs, cheese and crispy bacon served to order. Use the tablet to place order. ",
        "instagram": "#gilbert",
        "lat": 33.3785716,
        "name": "Bacon, Egg and Cheese Biscuit",
        "phone": "(480) 558-5342",
        "price": "$2.99",
        "rating": 3.6,
        "review": "4.3/5",
        "type": "Breakfast sandwich"
      },
      {
        "_id": "fieF2R25ayge8xiAM",
        "address": "1408 S Higley Rd, Mesa, AZ 85206, USA",
        "appAdd": true,
        "companyName": "Black rock",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Fimage.jpg?alt=media&token=de3822f3-044a-45a7-9088-a42c04adf824",
        "ingredients": "Cold brew coffee",
        "instagram": "#mesa",
        "lat": 33.3899894,
        "name": "Small Cold Brew",
        "phone": "(480) 361-5677",
        "price": "$3.75",
        "rating": 4.6,
        "review": "4/5",
        "type": "Coffee"
      },
      {

        "address": "1402 S Priest Dr, Tempe, AZ, 85281",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FEC6B6A4A-8FAA-4285-A05B-91D76959A7DA.jpeg?alt=media&token=f275af70-169c-4c85-a293-5a925beba029",
        "ingredients": "Crisp, chopped romaine tossed with seasoned croutons, shredded Parmesan cheese and tangy Caesar dressing",
        "instagram": "",
        "lat": 32.7157,
        "name": "Half Chicken Caesar Salad",
        "phone": "4809686612",
        "price": "7.95",
        "rating": 3,
        "review": "Food is always good but wait is always long no matter if busy or slow...",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1587675521264,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "14838 Whittier Blvd, Whittier, CA 90605, USA",
        "appAdd": true,
        "companyName": "corner place",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7089.JPG?alt=media&token=367c569c-bd83-4ae6-96ea-8be05d32c9d6",
        "ingredients": "matcha, almond milk, espresso",
        "instagram": "",
        "lat": 33.9493467,
        "name": "Matcha Espresso",
        "phone": "(562) 464-9800",
        "price": "6",
        "rating": 4.899999999999999,
        "review": "Never had a matcha espresso before, but if you want a zing to your morning I would recommend ",
        "type": "drink, caffeine",
        "lng": -118.00900680000001,
        "insertDate": 1571345657047
      },
      {

        "address": "601 E Santa Ana Blvd, Santa Ana, CA 92701, USA",
        "appAdd": true,
        "companyName": "benchmar",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Ffullsizeoutput_22da.jpeg?alt=media&token=fb3b276f-c72d-44de-81d6-d598627c61bb",
        "ingredients": "tomato, burrata, capers, herb oil, ",
        "instagram": "#koreanketofoodie",
        "lat": 33.7506573,
        "name": "heirloom tomato salad",
        "phone": "(714) 480-0225",
        "price": "$13",
        "rating": 4.4,
        "review": "I love cheee, I love tomatoes, I love this salad at benchmark, I came when it newly opened and was so impressed. Outdoor seating and service was good.",
        "type": "Keto friendly salad ",
        "lng": -117.8624686
      },
      {

        "address": "18558 Gale Ave #152, City of Industry, CA 91748, USA",
        "appAdd": true,
        "companyName": "half and half tea",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0349.JPG?alt=media&token=4fb078f0-bd6c-41c2-a820-ffe7b53515a2",
        "ingredients": "Jamaica flower tea, agar qq pearls",
        "instagram": "",
        "lat": 33.9947992,
        "name": "keto drinks, tea, boba, hibiscus tea",
        "phone": "(626) 965-4800",
        "price": "7",
        "rating": 4.3,
        "review": "Everyone needs to try this drink, if you want boba but don't want to gain all the calories that come with it! Super refreshing and the agar qq makes it the perfect pair. Its a big cup and totally worth the price in my opinion",
        "type": "drink, snack, ",
        "lng": -117.89969680000002,
        "insertDate": 1574383678038
      },
      {

        "address": "1121 s Higley Road Suite #108, Mesa, Az, 85206",
        "appAdd": true,
        "companyName": "Extreme pizza ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F3C77B760-5983-4857-830E-02A062E51173.jpeg?alt=media&token=0a0bd0d3-af28-4a9c-90d1-75f21a81af4a",
        "ingredients": "Half sweet bbq Chicken, onion, cilantro , red onion, mozzarella and half homemade pesto sauce, vine ripe tomato, feta, fresh basil, oregano and mozzarella. ",
        "instagram": "",
        "lat": 32.7157,
        "name": "XL 16??? Half Ragin??? Rooster Half Green with Envy Pizza",
        "phone": "4805903234",
        "price": "19.45",
        "rating": 5,
        "review": "Great choice for making extreme pizzas",
        "type": "Pizza",
        "lng": 117.1611,
        "insertDate": 1593056579493,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Mesa.extremepizza.com"
      },
      {

        "address": "10230 Riverside Dr, Parker, AZ 85344, USA",
        "appAdd": true,
        "companyName": "Mi Tierra par",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FA8455E03-FF43-4282-8633-4D1A93895F68.jpeg?alt=media&token=03da1b62-28b3-4baf-8e7e-4c4995188aa5",
        "ingredients": "Bacon, eggs, cheese and potatoes all wrapped in a flour tortilla.  Perfect spot for a hangover cure after an epic river weekend.",
        "instagram": "#parker",
        "lat": 34.1843339,
        "name": "Bacon Breakfast Burrito",
        "phone": "(928) 667-5954",
        "price": "5.99",
        "rating": 4.4,
        "review": "3.7",
        "type": "Breakfast Burrito",
        "lng": -114.2261062
      },
      {

        "companyName": "El Portal Fresh Mexican Food",
        "image": "d0901e98c94adaec11007b5d17155ddc.jpeg",
        "ingredients": "Carne Asada, Guacamole, Cheese, Potatoes, Flour Tortilla",
        "name": "The Don NoNo",
        "phone": "858-571-7771",
        "price": 7.81,
        "type": "Burrito",
        "description": "Carne Asada Burrito",
        "latitude": 32.8175549,
        "location": {
          "x": -117.1806344,
          "y": 32.8175549,
          "type": "Point"
        },
        "longitude": -117.1806344
      },
      {

        "companyName": "Windmill Farms",
        "image": "acf3a82f6d9f2a4d83000e0ba07e416d.jpeg",
        "ingredients": "Turkey, Bacon, Avocado, Lettuce, Pepperchini, Red Onion, Alfalfa Sprouts, Deli Mustard, Sourdough Bread",
        "name": "The Lindsey Special",
        "phone": "619-287-1400",
        "price": 6,
        "type": "Turkey Sandwich",
        "description": "Turkey, Bacon, Avocado on Sourdough Bread",
        "latitude": 32.7838672,
        "location": {
          "x": -117.0596606,
          "y": 32.7838672,
          "type": "Point"
        },
        "longitude": -117.0596606
      },
      {

        "companyName": "El Toro Del Cerro",
        "image": "0ceb0bc6dc7fd9a6e26e10e09a8f9e73.jpeg",
        "ingredients": "California Burrito with Carne Asada, Guacamole, Cheese, French Fries",
        "name": "California Burrito",
        "phone": "(619) 287-8541",
        "price": 9.85,
        "type": "Burrito",
        "description": "California Burrito No Salsa No Sour Cream",
        "latitude": 32.7840719,
        "location": {
          "x": -117.0603579,
          "y": 32.7840719,
          "type": "Point"
        },
        "longitude": -117.0603579
      },
      {

        "companyName": "Domo Sushi Bar & Grill",
        "image": "b946b06526ce5d78d53aa67c9f93f3f7.jpeg",
        "ingredients": "Spanish Roll with Krab, Salmon, Lemon, Ponzu Sauce, Green Onion",
        "name": "Spanish Roll",
        "phone": "(619) 596-2882",
        "price": 13,
        "type": "Specialty Roll",
        "description": "Spanish Roll with Salmon",
        "latitude": 32.8373392,
        "location": {
          "x": -116.9876939,
          "y": 32.8373392,
          "type": "Point"
        },
        "longitude": -116.9876939
      },
      {

        "companyName": "The Habit Burger Grill",
        "image": "8bcea2e3dbb08ac194e2507e4544bf99.png",
        "ingredients": "Cheeseburger with Double Char with Cheese & Avocado on Grilled Sourdough, Lettuce, Tomato, Pickle",
        "name": "Santa Barbara Style Char",
        "phone": "(858) 277-1089",
        "price": 5.95,
        "type": "Cheeseburger",
        "description": "Cheeseburger with Avocado",
        "latitude": 32.8186427,
        "location": {
          "x": -117.1812705,
          "y": 32.8186427,
          "type": "Point"
        },
        "longitude": -117.1812705
      },
      {

        "companyName": "Little Caesar's Pizza",
        "image": "b313b3085e21a896271aa9fb3f1fe8a0.png",
        "ingredients": "Supreme Pizza with Pepperoni, Italian Sausage Sausage, Green Bell Pepper, Onion, Mushroom,",
        "name": "Ultimate Supreme Pizza",
        "phone": "(619) 562-3500",
        "price": 8,
        "type": "Pizza",
        "description": "Supreme Pizza",
        "latitude": 32.8397254,
        "location": {
          "x": -116.9854392,
          "y": 32.8397254,
          "type": "Point"
        },
        "longitude": -116.9854392
      },
      {

        "companyName": "Estrada's Mexican Food",
        "image": "536d89f750e6804a6254676b872474c9.png",
        "ingredients": "Carne Asada, French Fries, Guacamole, Sour Cream, Nacho Cheese, Shredded Cheese,",
        "name": "Carne Asada Fries",
        "phone": "(619) 449-2103",
        "price": 5.95,
        "type": "Carne Asada Fries",
        "description": "Carne Asada French Fries with Guac",
        "latitude": 32.8451255,
        "location": {
          "x": -116.9987078,
          "y": 32.8451255,
          "type": "Point"
        },
        "longitude": -116.9987078
      },
      {

        "companyName": "Sei Sushi",
        "image": "c55fcae6ccab482f36cd61c64a992cc3.png",
        "ingredients": "Spicy Crab, Cream Cheese, Jalapenos, Rice",
        "name": "Grossmont Roll",
        "phone": "(619) 644-5002",
        "price": 9.65,
        "type": "Sushi Roll",
        "description": "Sushi Roll",
        "latitude": 32.8041675,
        "location": {
          "x": -117.0074394,
          "y": 32.8041675,
          "type": "Point"
        },
        "longitude": -117.0074394
      },
      {

        "companyName": "Islands Mission Valley",
        "image": "56a95b15cd03ea11ac5ee898e6e86c81.png",
        "ingredients": "American cheese, lettuce, tomato, onion, \r\npickles,mustard, fries, Burger",
        "name": "Big Wave",
        "phone": "6196402727",
        "price": 12.2,
        "type": "Burger",
        "description": "Cheese Burger",
        "latitude": 32.7816645,
        "location": {
          "x": -117.1304171,
          "y": 32.7816645,
          "type": "Point"
        },
        "longitude": -117.1304171
      },
      {

        "companyName": "Ami Sushi",
        "image": "4d6f919b319595f0547ff9e51d5920ed.png",
        "ingredients": "Deep Fried, Topped with Jalapenos, Spicy Mayo, Eel Sauce. Inside: Salmon, Avocado, Cream Cheese, Deep Fried with Jalapenos.",
        "name": "Vegas Roll",
        "phone": "(619) 593-7651",
        "price": 8.25,
        "type": "Sushi Roll",
        "description": "Vegas Roll",
        "latitude": 32.8033754,
        "location": {
          "x": -116.9720949,
          "y": 32.8033754,
          "type": "Point"
        },
        "longitude": -116.9720949
      },
      {

        "companyName": "Roberto's Mexican Cafe",
        "image": "42f0d972b8091cf166462c11ee9facce.png",
        "ingredients": "Grilled Onions, Tomatoes, Bell Peppers, Potatoes, Whole Beans topped with Verde Sauce and Cheese.  Served with Guacamole and Sour Cream",
        "name": "Veggie Fajita Burrito",
        "phone": "(760) 934-3667",
        "price": 7.99,
        "type": "Burrito",
        "description": "Veggie Burrito",
        "latitude": 37.6420322,
        "location": {
          "x": -118.9660064,
          "y": 37.6420322,
          "type": "Point"
        },
        "longitude": -118.9660064
      },
      {

        "companyName": "Estrada's Mexican Food",
        "image": "bafee45835985d87aa63e3484a94f428.jpeg",
        "ingredients": "Flour Tortilla, Rice, Refried Beans, Cheese",
        "name": "Bean, Cheese and Rice Burrito",
        "phone": "(619) 449-2103",
        "price": 3.75,
        "type": "Burrito",
        "description": "Bean, Cheese and Rice Burrito",
        "latitude": 32.8451255,
        "location": {
          "x": -116.9987078,
          "y": 32.8451255,
          "type": "Point"
        },
        "longitude": -116.9987078
      },
      {

        "companyName": "Golden Boy Pizza",
        "image": "ec0a222b694b11d3948f76db23d205fd.jpeg",
        "ingredients": "Pepperoni, Sausage, Mozzarella Cheese, Marinara Sauce",
        "name": "Pepperoni or Sausage Slice",
        "phone": "(415) 982-9738",
        "price": 3.25,
        "type": "Pizza Slice",
        "description": "miss.augustina",
        "latitude": 37.7998354,
        "location": {
          "x": -122.4080837,
          "y": 37.7998354,
          "type": "Point"
        },
        "longitude": -122.4080837
      },
      {

        "companyName": "Miguel's Jr.",
        "image": "e4e4431f96d8d107af95d6cd07035bf8.png",
        "ingredients": "Chile\u200B relleno, beans, rice & cheese",
        "name": "California Chile Burrito",
        "phone": "(951) 279-9393",
        "price": 3.99,
        "type": "Burrito",
        "description": "burritolist",
        "latitude": 33.843992,
        "location": {
          "x": -117.5373732,
          "y": 33.843992,
          "type": "Point"
        },
        "longitude": -117.5373732
      },
      {

        "companyName": "Encinitas Ale House",
        "image": "1a061142108e9817b733220daf72d9e9.png",
        "ingredients": "Whiskey BBQ Sauce, Crispy Onion Straws, Bacon and Melted Pepper Jack Cheese",
        "name": "Signature \"Harmonica Bill\" Bootlegger Burger",
        "phone": "(760) 943 - 7180",
        "price": 15,
        "type": "Cheeseburger",
        "description": "Encinitas Ale House",
        "latitude": 33.0384973,
        "location": {
          "x": -117.2931056,
          "y": 33.0384973,
          "type": "Point"
        },
        "longitude": -117.2931056
      },
      {

        "companyName": "Bua Thai",
        "image": "5a08f6fd3fc1f57c60f88066c5e4a5f6.png",
        "ingredients": "Stir-Fried Rice Noodles with Tamrind Sauce, Eggs, and Bean Sprout Topped with Ground Peanuts (Shrimp, Chicken, Beef (Add $1)).",
        "name": "Pad Thai Noodle",
        "phone": "(858) 679-7073",
        "price": 9.95,
        "type": "Pad Thai",
        "description": "Bua Thai",
        "latitude": 32.9529874,
        "location": {
          "x": -117.0630465,
          "y": 32.9529874,
          "type": "Point"
        },
        "longitude": -117.0630465
      },
      {

        "companyName": "Spicy House",
        "image": "64c2dac641900c28ce0289b1a867bc87.png",
        "ingredients": "Spicy Cold Chicken with Green Chili Sauce (VERY SPICY)",
        "name": "Cold Chicken with Green Chili Sauce",
        "phone": "(858) 278-5883",
        "price": 9.99,
        "type": "Chicken",
        "description": "Spicy House",
        "latitude": 32.8141393,
        "location": {
          "x": -117.1539653,
          "y": 32.8141393,
          "type": "Point"
        },
        "longitude": -117.1539653
      },
      {

        "companyName": "The Crack Shack",
        "image": "c7932912a4fb2a2626beb3baac55a8f0.png",
        "ingredients": "Schmaltz Fries, Pollo Asado, Jalapeno cheese wiz",
        "name": "Mexican Poutine",
        "phone": "(619) 795-3299",
        "price": 8,
        "type": "Poutine",
        "description": "Sandyeggofoodie",
        "latitude": 32.7279012,
        "location": {
          "x": -117.1711893,
          "y": 32.7279012,
          "type": "Point"
        },
        "longitude": -117.1711893
      },
      {

        "companyName": "The Wrap Shack",
        "image": "473a9f9268a5f864274a5aa58a46dfc5.jpeg",
        "ingredients": "Tri-Tip Steak or Chicken Breast, Bell Peppers, Sauteed Yellow Onions, Lettuce, Tomato, Cheddar Cheese, Side of Sour Cream and Side of Salsa",
        "name": "Fajitas Wrap",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Fajitas Wrap",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "Cruiser Taco",
        "image": "ddfc73f602f31b10b59f969e71575655.png",
        "ingredients": "Flash-fried beer-battered fish filet, avo, cabbage, pickled red onions and chipotle crema",
        "name": "Ensenada",
        "phone": "(619) 564-7178",
        "price": 3.49,
        "type": "Taco",
        "description": "Cruiser Taco",
        "latitude": 32.755586,
        "location": {
          "x": -117.1323806,
          "y": 32.755586,
          "type": "Point"
        },
        "longitude": -117.1323806
      },
      {

        "companyName": "Kung Pow Bowl",
        "image": "c3e5c07e22aa8c169d01f933e267ee43.png",
        "ingredients": "A combination of chicken, beef, and shrimp (can choose only 1 too).  Make your Asian classic into a complete dinner for $5.25, including soup, appetizer and rice.",
        "name": "Kung Pao Three Delite",
        "phone": "(71$) 842-7262",
        "price": 15.75,
        "type": "Kung Pao Chicken",
        "description": "Huntington Beach, CA",
        "latitude": 33.7294652,
        "location": {
          "x": -118.0094651,
          "y": 33.7294652,
          "type": "Point"
        },
        "longitude": -118.0094651,
        "printerId": "NA"
      },
      {

        "address": "383 N Gilbert Rd, Gilbert, AZ 85234, USA",
        "appAdd": true,
        "companyName": "Culinary",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FB9980FA8-AC77-4CC0-AFDD-02484907D1F8.jpeg?alt=media&token=f6b9dc22-7e38-4ca3-8436-b89b83006ad1",
        "ingredients": "Pretzel roll, swiss, coleslaw with a side of French fries",
        "instagram": "",
        "lat": 33.35689840000001,
        "name": "Turkey Pastrami Burger",
        "phone": "(480) 418-3980",
        "price": "13.00",
        "rating": 4.2,
        "review": "6/10",
        "type": "Dinner or Lunch",
        "lng": -111.78945809999999,
        "insertDate": 1570987195131
      },
      {

        "address": "2000 E Rio Salado Pkwy Suite 1215, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Mad greens tempe",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FAE917822-8F58-4AA7-AE8F-63CE4F4354DD.jpeg?alt=media&token=8c49b9e1-573b-42e0-bbb0-1ac3a713f727",
        "ingredients": "Romaine, Southwest Chicken, Parmesan, Tomatoes, House-made Croutons and Caesar dressing. Pictured with no tomato add Cucumber.  ",
        "instagram": "",
        "lat": 33.4334933,
        "name": "Mad Caesar Salad",
        "phone": "(602) 283-3901",
        "price": "9.00",
        "rating": 4.399999999999999,
        "review": "Great salad for under $10. They let you change up each menu option and sauce is fished out on lite, medium and heavy options. Would recommend. ",
        "type": "Lunch",
        "lng": -111.90157720000002,
        "insertDate": 1572292572196
      },
      {

        "address": "1201 Richmond Ave, Houston, TX 77006, USA",
        "appAdd": true,
        "companyName": "The pit room",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F9B787785-7BF9-4DA8-835F-E7F5B2F326DD.png?alt=media&token=9e96ab03-a88d-481e-b644-99808087dc97",
        "ingredients": "Choice of 3 meats: Brisket, Pork Ribs, Turkey, Chicken or Sausage.  Dinners are served with your choice of two sides and on slice of white bread",
        "instagram": "Donut_kill_myvibe",
        "lat": 29.7342473,
        "name": "Three Meat Dinner Plate",
        "phone": "(281) 888-1929",
        "price": "18.75",
        "rating": 4.6,
        "review": "3.8",
        "type": "BBQ",
        "lng": -95.394002
      },
      {

        "address": "3877 S Gilbert Rd Ste 102, Gilbert, AZ 85297, USA",
        "appAdd": true,
        "companyName": "Hale po",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F8FE21AB9-A299-49DF-827A-8D5E054F36F1.jpeg?alt=media&token=a99056d5-03ec-4c5c-9d1d-5d218057d6f8",
        "ingredients": "Rice, poke, cucumber, house sauce, edamame, spicy crab, ginger, fried garlic, seaweed salad ",
        "instagram": "",
        "lat": 33.2796413,
        "name": "Poke Bowl",
        "phone": "(480) 209-1895",
        "price": "$11.31",
        "rating": 4.699999999999999,
        "review": "Bomb.com",
        "type": "Lunch",
        "lng": -111.7884249,
        "insertDate": 1571791867305
      },
      {

        "address": "400 S Baldwin Ave Suite 2015, Arcadia, CA 91007, USA",
        "appAdd": true,
        "companyName": "haidi",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0177.JPG?alt=media&token=d6fd8b96-a816-4457-a97a-0d5d4ea762a0",
        "ingredients": "meat, pork broth, yam noodle, konjac noodle, fresh noodle, rib eye, caviar balls",
        "instagram": "",
        "lat": 34.1333726,
        "name": "hot pot, Shabu",
        "phone": "(626) 445-7232",
        "price": "80",
        "rating": 4.399999999999999,
        "review": "One of the best hotpot out there with many options, complimentary sauce and dessert bar as well and also a rewards program ! Highly recommend Haidilao because of their service and food. Its kind of a modern take but flavors don't disappoint ever.",
        "type": "lunch, dinner",
        "lng": -118.05299680000002,
        "insertDate": 1572461730326
      },
      {

        "address": "1250 W Broadway Rd, Tempe, AZ, 85282",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FCE11901C-E7F5-42E2-8207-2A29C9F9EBAC.jpeg?alt=media&token=124f6686-81b1-43ef-9379-5f8d1fe0e0db",
        "ingredients": "Chorizo, Eggs, Cheese and added refried beans all wrapped in a flour tortilla.",
        "instagram": "",
        "lat": 32.7157,
        "name": "Chorizo Breakfast Burrito",
        "phone": "4808041903",
        "price": "8.05",
        "rating": 4,
        "review": "This burrito was massive!",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1583522109530,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {
        "_id": "PSYJ6Xea5iXE4gr4X",
        "address": "Gloucester Ave, Montego Bay, Jamaica",
        "appAdd": true,
        "companyName": "Margaritaville mon",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FAF0413E4-C1E9-4458-9385-6FA61BE3F03F.jpeg?alt=media&token=d3eca8fe-f5d2-41b3-aab0-a5764af5cf58",
        "ingredients": "Succulent shrimp coated with our blackened seasoning and chipotle-lime-cilantro aioli. Served in four mini flour tortillas with flavorful pico de gallo, sour cream, and cotillo cheese. Pictured with no pico and sour fream",
        "instagram": "#montegobay",
        "lat": 18.4837488,
        "name": "Blackened Mini Shrimp Tacos",
        "phone": "(876) 952-4777",
        "price": "$13.75",
        "rating": 4.1,
        "review": "Bomb tacos!",
        "type": "Shrimp tacos"
      },
      {
        "_id": "pJw9CvMYYHsJrvQ6r",
        "address": "4302 E Ray Rd STE.106, Phoenix, AZ 85044, USA",
        "appAdd": true,
        "companyName": "The buzzed goat",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F04D06B86-7BA4-467D-920D-1FBFBA9A89C3.jpeg?alt=media&token=3a6242f1-e020-41aa-9ae2-61c6d42fea4f",
        "ingredients": "Double shot espresso, cream, light foam",
        "instagram": "#thebuzzedgoat",
        "lat": 33.3208835,
        "name": "Hot latte 16oz",
        "phone": "(480) 706-7411",
        "price": "$4.00",
        "rating": 4.8,
        "review": "Soo goood!",
        "type": "Latte"
      },
      {
        "_id": "qFMeqxv7qnsmz8SSf",
        "address": "1633 S Stapley Dr, Mesa, AZ 85204, USA",
        "appAdd": true,
        "companyName": "Backyard",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F6B1E9CAA-031D-42F2-8D47-16B7EAADD1F3.jpeg?alt=media&token=86aecea3-acd4-4ad1-aded-ec54eb0dfc06",
        "ingredients": "Carne Asada, beans, cheese, onion, pico de gallo and guacamole. No pico de Gallo as pictured",
        "instagram": "#mesa",
        "lat": 33.3844868,
        "name": "Carne Asada Burrito",
        "phone": "(480) 378-2095",
        "price": "$8.35",
        "rating": 4.5,
        "review": "4.4/5",
        "type": "Burrito"
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taquer",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Fwet%20burrito%20(1).png?alt=media&token=c4475a92-b2d5-475b-ac8e-d564f72709e0",
        "ingredients": "Choice of meat, rice, beans, cilantro, onions, and hot sauce, then topped with enchilada sauce, and cheese.",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Wet Burrito",
        "phone": "(714) 702-5592",
        "price": "10.50",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578549253822
      },
      {

        "address": "13604 N Scottsdale Road Suite 103, Scottsdale, AZ 85254",
        "appAdd": true,
        "companyName": "Potbelly Sandwich Shop",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F105D0B76-7AD7-4ED2-ABAE-9ABFE70F9195.jpeg?alt=media&token=b1debd11-07a3-44ca-9477-5e478e3f5ebc",
        "ingredients": "\uD83D\uDD25\uD83E\uDD6A Capicola, mortadella, pepperoni, salami and provolone with everything no tomato and no mayo",
        "instagram": "",
        "lat": 32.7157,
        "name": "Italian Sandwich Bige",
        "phone": "4802142536",
        "price": "8.29",
        "rating": 4,
        "review": "Nice spice!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1594325875144,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.potbelly.com"
      },
      {

        "address": "2355 India St, San Diego, CA 92101, USA",
        "appAdd": true,
        "companyName": "James coffee",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FEF2BD978-1D7E-4AE6-A31B-CC51878F7526.jpeg?alt=media&token=74afe1eb-f09c-4e5b-811d-2df7a28a5c52",
        "ingredients": "Two shots of espresso poured over ice and top with chilled water. ",
        "instagram": "Foodsupapp",
        "lat": 32.729197,
        "name": "Iced Americano Coffee",
        "phone": "(619) 756-7770",
        "price": "3.00",
        "rating": 4.6,
        "review": "8",
        "type": "Coffee",
        "lng": -117.1703119
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "Taqueria g",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F093AC1D6-0DBF-430E-8BF8-D36EA263EA75.jpeg?alt=media&token=6742f859-009d-448f-9228-d5c9a37b2002",
        "ingredients": "Carne Asada, hot Cheetos , cheese,  cilantro, guacamole ",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Hot Cheeto quesadilla ",
        "phone": "(714) 702-5592",
        "price": "12.96",
        "rating": 4,
        "review": "Very good. A little pricey tho ",
        "type": "Quesadilla ",
        "lng": -118.02520670000001
      },
      {

        "address": "930 W Broadway Rd, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Detroit",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F89F80D3A-EDF3-43E7-88E9-F9A0A4303252.jpeg?alt=media&token=6c230238-26d0-422c-b5e0-9e05cc21fa54",
        "ingredients": "Three beef patties, Swiss cheese, Hatch chili and the works. No tomato and no mayo",
        "instagram": "",
        "lat": 32.7157,
        "name": "Green Chili Burger",
        "phone": "4802197430",
        "price": "8.45",
        "rating": 5,
        "review": "Great food",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1595358489531,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Detroitconeygrill.com"
      },
      {

        "address": "201 E Southern Ave Suite 111, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Fate bre",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FC43D0F65-57A4-45DB-8682-88D386E2071A.jpeg?alt=media&token=17bff3c6-0531-4eb6-ae18-829e643fc688",
        "ingredients": "Street Tacos | $13 pork al pastor, onion, cabbage, cilantro, lime, cotija cheese. *spicy. Must be 21 to order any drinks with alcohol",
        "instagram": "Foodsupapp",
        "lat": 33.3923294,
        "name": "Street Tacos",
        "phone": "(480) 590-2395",
        "price": "13.00",
        "rating": 4.4,
        "review": "Perfect spice and pairs well with a local brew. 3.8",
        "type": "Tacos",
        "lng": -111.93645950000001
      },
      {

        "address": "1537 W Broadway Rd #104, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Kalo",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F629FB1F1-4747-4A17-A7FA-F23AB3E6559B.jpeg?alt=media&token=98348e00-642b-4cc1-97dd-93eb2c1a8f98",
        "ingredients": "Pork, lettuce, onion, pepperchinni, avocado",
        "instagram": "",
        "lat": 33.4071996,
        "name": "Pork Gyro",
        "price": "6.95",
        "rating": 4.9,
        "review": "7/10. The pork was amazing and it was a healthy meal! ",
        "type": "Lunch",
        "lng": -111.96553849999998
      },
      {

        "companyName": "Taco Surf PB",
        "image": "1eb3ebf9db8b5653daf7b32cca5be683.jpeg",
        "ingredients": "Carne Asada, French Fries, Bell Pepper, Onion, Guacamole, Cheese",
        "name": "California Burrito",
        "phone": "858-272-3877",
        "price": 7.25,
        "type": "Burrito",
        "description": "Taco Surf PB",
        "latitude": 32.7988885,
        "location": {
          "x": -117.2559985,
          "y": 32.7988885,
          "type": "Point"
        },
        "longitude": -117.2559985
      },
      {

        "companyName": "Estrada's Mexican Food",
        "image": "7a33b43c07d6d09f8b1a4fb8aaa90181.jpeg",
        "ingredients": "California Burrito with Carne Asada, French Fries, Cheese, Mexican Guacamole",
        "name": "California Burrito",
        "phone": "(619) 449-2103",
        "price": 5.98,
        "type": "Burrito",
        "description": "California Burrito",
        "latitude": 32.8451255,
        "location": {
          "x": -116.9987078,
          "y": 32.8451255,
          "type": "Point"
        },
        "longitude": -116.9987078
      },
      {

        "companyName": "Round Table Pizza",
        "image": "91f60787a35d6acb4cda74666d329e82.png",
        "ingredients": "Pepperoni Pizza with Pepperoni, Zesty Red Sauce, Original Crust",
        "name": "Pepperoni Pizza (Large)",
        "phone": "(619) 449-0521",
        "price": 19.99,
        "type": "Pizza",
        "description": "Pepperoni Pizza",
        "latitude": 32.8554959,
        "location": {
          "x": -116.9730085,
          "y": 32.8554959,
          "type": "Point"
        },
        "longitude": -116.9730085
      },
      {

        "companyName": "Annie's Fine Burgers",
        "image": "33ba637350904c3e930f5274ee6d422b.png",
        "ingredients": "Chicken Sandwich with Crispy Fried Chicken Breast, Mozarella Cheese, Lettuce, Tomato, Red Onion, Pickle, Butter Milk Ranch Dressing",
        "name": "Crispy Chicken Burger with Bacon",
        "phone": "(619) 258-8288",
        "price": 10.25,
        "type": "Chicken Sandwich",
        "description": "Chicken Sanwich",
        "latitude": 32.8387166,
        "location": {
          "x": -116.9812271,
          "y": 32.8387166,
          "type": "Point"
        },
        "longitude": -116.9812271
      },
      {

        "companyName": "Santana's Mexican Food",
        "image": "e7e53ac28fac9392bf05c01fd7335115.png",
        "ingredients": "Carne Asada Chips Topped with Beans, Cheddar Cheese, Guacamole, Sour Cream, Mexican Salsa, Cotija Cheese",
        "name": "Carne Asada Chips",
        "phone": "(619) 631-7680",
        "price": 6.75,
        "type": "Nacho",
        "description": "Carne Asada Chips",
        "latitude": 32.8381702,
        "location": {
          "x": -116.9778487,
          "y": 32.8381702,
          "type": "Point"
        },
        "longitude": -116.9778487
      },
      {

        "companyName": "Costco Santee",
        "image": "8594198eaa67c2c0ea3eb7e93afb29d8.png",
        "ingredients": "Cheese, Pepperoni, Pizza",
        "name": "1 Slice of Pepperoni Pizza",
        "phone": "(619) 448-3300",
        "price": 1.99,
        "type": "Pizza",
        "description": "1 Slice of Pepperoni Pizza",
        "latitude": 32.840222,
        "location": {
          "x": -116.9873931,
          "y": 32.840222,
          "type": "Point"
        },
        "longitude": -116.9873931
      },
      {

        "companyName": "Ahi Sushi & Grill",
        "image": "4357d67d320edb5eb98b4ec822763036.png",
        "ingredients": "Inside: Eel, Cucumber;\r\nOutside: Avo, Imitation Crab & Eel Sauce",
        "name": "Caterpillar Roll",
        "phone": "(619) 337-1388",
        "price": 7.99,
        "type": "Sushi Roll",
        "description": "Caterpillar Roll",
        "latitude": 32.8016633,
        "location": {
          "x": -117.0043241,
          "y": 32.8016633,
          "type": "Point"
        },
        "longitude": -117.0043241
      },
      {

        "companyName": "Hodad's Downtown SD",
        "image": "ce418def5a84af88e07d9137c3fa7fed.png",
        "ingredients": "Two Beef Patties, Bacon, Mayonnaise, Mustard, Onion, Ketchup, PIckle, Tomato, Lettuce on a Wheat Bun",
        "name": "Double Bacon Cheeseburger",
        "phone": "(619) 234-6323",
        "price": 12.5,
        "type": "Bacon Cheeseburger",
        "description": "Double Bacon Cheeseburger",
        "latitude": 32.7155826,
        "location": {
          "x": -117.1557974,
          "y": 32.7155826,
          "type": "Point"
        },
        "longitude": -117.1557974
      },
      {

        "companyName": "Lucha Libre Taco Shop",
        "image": "52ec4a61c7890fac363503c2733bb932.png",
        "ingredients": "Your choice of Steak, Breast or Pork Adobada, Fresh Fries, Jack Cheese, Sour Cream and Pico de Gallo",
        "name": "Classic Cali",
        "phone": "(619) 296-8226",
        "price": 7.95,
        "type": "Burrito",
        "description": "California Burrito",
        "latitude": 33.1239521,
        "location": {
          "x": -117.1055059,
          "y": 33.1239521,
          "type": "Point"
        },
        "longitude": -117.1055059
      },
      {

        "companyName": "Pepe's Finest Mexican Food",
        "image": "9314276b9e3ce2d71fd48ff01289950e.png",
        "ingredients": "Choice of meat (carne asada, carnitas, chicken or shredded beef), french fries, cheese & sour cream",
        "name": "California Burrito",
        "phone": "(626) 289-8618",
        "price": 6.25,
        "type": "California Burrito",
        "description": "burritolist",
        "latitude": 34.078471,
        "location": {
          "x": -118.1284133,
          "y": 34.078471,
          "type": "Point"
        },
        "longitude": -118.1284133
      },
      {

        "companyName": "Milkbomb Ice Cream",
        "image": "4d9a26ed46ee53a2001b22598f47185a.jpeg",
        "ingredients": "Ube Ice Cream in an Obe Donut",
        "name": "Ube Ice Cream Sandwich",
        "phone": "(415) 780-4429",
        "price": 5.7,
        "type": "Ube Ice Cream",
        "description": "miss.augustina",
        "latitude": 37.7644775,
        "location": {
          "x": -122.4008576,
          "y": 37.7644775,
          "type": "Point"
        },
        "longitude": -122.4008576
      },
      {

        "companyName": "Ferny's Mexican Grill",
        "image": "fe78358d9875e4ae601756ec36c59308.jpeg",
        "ingredients": "Carne Asada, Cheese, Potatoes, Guacamole with added Chipotle Cream Sauce",
        "name": "Ferny's Burrito",
        "phone": "(619) 562-1343",
        "price": 7,
        "type": "Burrito",
        "description": "FoodsUp",
        "latitude": 32.8387127,
        "location": {
          "x": -116.9729249,
          "y": 32.8387127,
          "type": "Point"
        },
        "longitude": -116.9729249
      },
      {

        "companyName": "The Crack Shack",
        "image": "ebcb8e34440883d8084884a3473e65e3.png",
        "ingredients": "Cripsy Chicken, Bacon, Fried Egg, Cheddar, Miso-Maple Buter, Brioche Bun",
        "name": "Senor Croque",
        "phone": "(619) 795-3299",
        "price": 12,
        "type": "Chicken Sandwich",
        "description": "The Crack Shack",
        "latitude": 32.7279012,
        "location": {
          "x": -117.1711893,
          "y": 32.7279012,
          "type": "Point"
        },
        "longitude": -117.1711893
      },
      {

        "companyName": "Bahn Thai",
        "image": "e665916113ff6a5b4268c0323c18d15f.png",
        "ingredients": "Sweet and Tangy, stir-fried with tamarind sauce, eggs, fresh bean sprouts, green onions, with a side of crushed peanuts and lime.",
        "name": "Shimp Pad Thai",
        "phone": "(619) 299-6363",
        "price": 10.95,
        "type": "Pad Thai",
        "description": "Bahn Thai",
        "latitude": 32.7618987,
        "location": {
          "x": -117.1464648,
          "y": 32.7618987,
          "type": "Point"
        },
        "longitude": -117.1464648
      },
      {

        "companyName": "Bahn Thai",
        "image": "0d8fc105e994af0b7144025dfaaff848.png",
        "ingredients": "Stir-fried with green onions, sweet peppers, fresh basil leaves, eggs, topped with crispy basil",
        "name": "Basil Fried Rice",
        "phone": "(619) 299-6363",
        "price": 9.95,
        "type": "Fried Rice",
        "description": "Bahn Thai",
        "latitude": 32.7618987,
        "location": {
          "x": -117.1464648,
          "y": 32.7618987,
          "type": "Point"
        },
        "longitude": -117.1464648
      },
      {

        "companyName": "Spicy House",
        "image": "2d167883dcf31c2215cb200d08b06885.png",
        "ingredients": "Lamb Chop with Hot Pepper",
        "name": "Lamb Chop with Hot Pepper",
        "phone": "(858) 278-5883",
        "price": 10.99,
        "type": "Chinese Food",
        "description": "Spicy House",
        "latitude": 32.8141393,
        "location": {
          "x": -117.1539653,
          "y": 32.8141393,
          "type": "Point"
        },
        "longitude": -117.1539653
      },
      {

        "companyName": "Bangkok Bay",
        "image": "4b3791ce2d1cb1ef2bc13b5af506ac2d.png",
        "ingredients": "Thick Rice Noodles with Egg, Brocolli, and Carrot in a Sweet Soy Sauce",
        "name": "Pad See Ew",
        "phone": "(858) 792-2427",
        "price": 13,
        "type": "Noodles",
        "description": "Bangkok Bay",
        "latitude": 32.9821072,
        "location": {
          "x": -117.2700747,
          "y": 32.9821072,
          "type": "Point"
        },
        "longitude": -117.2700747
      },
      {

        "companyName": "Lucha Libre Taco Shop",
        "image": "411e177313d16a1e805d110915adace1.jpeg",
        "ingredients": "Grilled crispy cheese with you choice of steak, chicken or fries topped with avocado, Secret Chipotle Sauce and Queso Enchilado",
        "name": "Queso Taco",
        "phone": "(619) 296-8226",
        "price": 4.5,
        "type": "Taco",
        "description": "Lucha Libre",
        "latitude": 33.1239521,
        "location": {
          "x": -117.1055059,
          "y": 33.1239521,
          "type": "Point"
        },
        "longitude": -117.1055059
      },
      {

        "companyName": "Coffee Corner Santee",
        "image": "cd144bd0681457634bbf7d2fa02c5e3d.jpeg",
        "ingredients": "Organic Acai Sorbet, Granola, Coconut, Honey/Agave, Strawberries, Blueberries",
        "name": "Acai Bowl",
        "phone": "(619) 996-9007",
        "price": 6,
        "type": "Acai Bowl",
        "description": "Regular Size Acai Bowl",
        "latitude": 32.8413236,
        "location": {
          "x": -116.985885,
          "y": 32.8413236,
          "type": "Point"
        },
        "longitude": -116.985885
      },
      {

        "companyName": "Snooze.. an AM Eatery",
        "image": "46c4df4ded734e9b06366f5bc159e30b.png",
        "ingredients": "Seared hanger steak medallions atop roasted poblano cheddar grit cakes with asparagus, roasted mushrooms and tomato topped with poached cage free eggs, smoked cheddar hollandaise and gremolata.",
        "name": "Steak + Eggs Benny",
        "phone": "858.703.5300",
        "price": 16.75,
        "type": "Breakfast",
        "description": "innatelee",
        "latitude": 32.9533868,
        "location": {
          "x": -117.2328025,
          "y": 32.9533868,
          "type": "Point"
        },
        "longitude": -117.2328025
      },
      {

        "address": "5708 Rosemead Blvd #100, Temple City, CA 91780, USA",
        "appAdd": true,
        "companyName": "the dive s",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7352.JPG?alt=media&token=056523ea-3ebc-4e1e-838a-c2aab4234a9b",
        "ingredients": "bacon, shrimp",
        "instagram": "",
        "lat": 34.1040049,
        "name": "Bacon Wrapped Shrimp",
        "phone": "(626) 766-1569",
        "price": "12.50",
        "rating": 4.5,
        "review": "Such a perfect Keto friendly appetizer. I never had bacon wrapped shrimp but I was pretty impressed by the flavors on this dish! ",
        "type": "appetizer",
        "lng": -118.07329199999998,
        "insertDate": 1571971629991
      },
      {

        "address": "6044 N 16th Ave, Phoenix, AZ, 85016",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FA2B5C0F9-6C1E-4DFA-9CE1-A872B986AA11.jpeg?alt=media&token=3bf25610-0332-4b29-8a9c-c9be70178347",
        "ingredients": "Corned Beef, Sauerkraut, Swiss Cheese and sauce all on Rye Bread",
        "instagram": "",
        "lat": 32.7157,
        "name": "Reuben Sandwich Meal",
        "phone": "6026042333",
        "price": "8.00",
        "rating": 4,
        "review": "Great meal for the price",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1585085739579,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "4075 S 32nd St, Phoenix, AZ 85040, USA",
        "appAdd": true,
        "companyName": "Quick trip",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F2CF857F8-F0EB-47E4-9D01-97D90B69B166.jpeg?alt=media&token=124e8ee7-6d8e-4339-afde-518094be9085",
        "ingredients": "Slice of pepperoni pizza and an 8.4 ounce sugar free red bull",
        "instagram": "",
        "lat": 33.40937669999999,
        "name": "Slice of pizza and sugar free red bull",
        "price": "4.58",
        "rating": 4.5,
        "review": "4.2",
        "type": "Lunch",
        "lng": -112.01124470000002,
        "insertDate": 1570725100363
      },
      {

        "address": "1600 S Azusa Ave Unit 178, City of Industry, CA 91748, USA",
        "appAdd": true,
        "companyName": "haidilao",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_1255.JPG?alt=media&token=2ab544ca-c80e-40b2-83ef-e12ec76eb118",
        "ingredients": "water, pork bone broth, spicy pork bone broth, spicy soup ",
        "instagram": "",
        "lat": 33.99448759999999,
        "name": "Hot Pot",
        "phone": "(860) 266-6666",
        "price": "10",
        "rating": 4.4,
        "review": "The $10 is about the price for 3 soup bases! The top left is water(free) We ordered 3 because we had 3 people. All broths are good but when you mix its best.",
        "type": "Lunch, dinner",
        "lng": -117.92693730000002,
        "insertDate": 1578366291099,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {

        "address": "355 Bristol St Ste W, Costa Mesa, CA 92626, USA",
        "appAdd": true,
        "companyName": "et peter",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_1081.JPG?alt=media&token=4f02ba27-f2f7-4250-8fc7-b473ec8c64a2",
        "ingredients": "Inside: Spicy Real Blue Crab, Spicy Tuna, Salmon, Albacore and Veggies (NO RICE) Outside: Wrapped with Soy Paper and Fresh Mango, then Topped with ETC Sauce",
        "instagram": "",
        "lat": 33.6650755,
        "name": "Sushi, MILF, Rolls",
        "phone": "(657) 231-6222",
        "price": "14",
        "rating": 4.6,
        "review": "I love and appreciate Keto friendly options especially at sushi! I haven't had sushi in awhile mainly because Im pretty picky when it comes to sushi but THANK GOD FOR this place. food and service is a great time here.",
        "type": "lunch, brunch, dinner",
        "lng": -117.88023829999997,
        "insertDate": 1577221813026,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {

        "address": "457 W Broadway Road, Tempe, Arizona, 85282",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F1E57F134-DF05-4D57-8DBE-C0E2E54F681C.jpeg?alt=media&token=bb3f1e68-05df-4a18-bf79-2f3d0a8fa482",
        "ingredients": "Crunchy Spicy Chicken Breast on a brioche bun with pickles and sauce.",
        "instagram": "",
        "lat": 32.7157,
        "name": "Spicy Chicken Sandwich",
        "phone": "4802370896",
        "price": "3.99",
        "rating": 5,
        "review": "Love this sandwich!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1582139738824,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "companyName": "Cotixan Mexican Food",
        "image": "c33a0433597c7e555b92e66a7e04c26c.png",
        "ingredients": "Flour Tortilla, Eggs, beans, cheese, potatoes, sausage, bacon, or ham",
        "name": "Lunch Burrito",
        "phone": "(858) 571-8843",
        "price": 5.61,
        "type": "Breakfast Burrito",
        "description": "Breakfast Burrito with Bacon",
        "latitude": 32.8229619,
        "location": {
          "x": -117.1844079,
          "y": 32.8229619,
          "type": "Point"
        },
        "longitude": -117.1844079
      },
      {

        "companyName": "Chipotle Mexican Grill",
        "image": "b888db09c1115810f33b5d3705d6c7cd.jpeg",
        "ingredients": "Burrito with Beans and Cheese in a Flour Tortilla",
        "name": "Bean & Cheese Burrito",
        "phone": "(619) 655-4784",
        "price": 2.26,
        "type": "Burrito",
        "description": "Bean & Cheese Burrito",
        "latitude": 32.8409311,
        "location": {
          "x": -116.9815307,
          "y": 32.8409311,
          "type": "Point"
        },
        "longitude": -116.9815307
      },
      {

        "companyName": "Oggi's Pizza and Brewery",
        "image": "09be09a6efca0cb9a183ccb50a6b459a.jpeg",
        "ingredients": "Nachos with fresh Tortilla chips, Braised Short Ribs, Fresh Jalape??o, Avocado, Pico de Gallo, Gouda, Mozzarella, Cheddar Cheese, Sour Cream and Adobo Sauce",
        "name": "Short Rib Nachos (Half Order)",
        "phone": "(619) 449-6441",
        "price": 6.49,
        "type": "Nachos",
        "description": "Short Rib Nachos (Half Order)",
        "latitude": 32.8409311,
        "location": {
          "x": -116.9815307,
          "y": 32.8409311,
          "type": "Point"
        },
        "longitude": -116.9815307
      },
      {

        "companyName": "Domo Sushi Bar & Grill",
        "image": "03d0a4d2a1190f1a447b5a57b23fa53c.jpeg",
        "ingredients": "Eel Sushi Roll with Eel, Avocado, Cucumber, Eel Sauce",
        "name": "Eel Roll",
        "phone": "(619) 596-2882",
        "price": 8.5,
        "type": "Sushi Roll",
        "description": "Sushi Roll with Cooked Eel",
        "latitude": 32.8373392,
        "location": {
          "x": -116.9876939,
          "y": 32.8373392,
          "type": "Point"
        },
        "longitude": -116.9876939
      },
      {

        "companyName": "The Habit Burger Grill",
        "image": "ed8d0851f3da1f97d286de8df5cf422c.png",
        "ingredients": "Double Cheese Burger with American Cheese, Lettuce, Tomato, Carmelized Onion, Mayo",
        "name": "#2 Double Char with Fries and Drink",
        "phone": "(858) 277-1089",
        "price": 10.24,
        "type": "Burger",
        "description": "Double Cheeseburger, Fries and Drink",
        "latitude": 32.8186427,
        "location": {
          "x": -117.1812705,
          "y": 32.8186427,
          "type": "Point"
        },
        "longitude": -117.1812705
      },
      {

        "companyName": "Annie's Fine Burgers",
        "image": "7ebe9f4d9ca6291f2c241b75b12a9612.png",
        "ingredients": "Cheeseburger with Fresh Avocado, Crisp Bacon, Swiss Cheese, Lettuce, Tomato, Red Onion, Pickle and Thousand Island.",
        "name": "California Burger",
        "phone": "(619) 258-8288",
        "price": 8.5,
        "type": "Cheeseburger",
        "description": "Cheeseburger",
        "latitude": 32.8387166,
        "location": {
          "x": -116.9812271,
          "y": 32.8387166,
          "type": "Point"
        },
        "longitude": -116.9812271
      },
      {

        "companyName": "The Habit Burger Grill",
        "image": "38844d84b7a6b630e9597b7d7a52f560.png",
        "ingredients": "Baocn Cheeseburger with Crisp Bacon, Lettuce, Fresh Tomato, Caramelized Onions, Pickles, and mayo on a toasted bun.",
        "name": "BBQ Bacon Char",
        "phone": "(858) 277-1089",
        "price": 4.95,
        "type": "Bacon Cheeseburger",
        "description": "Bacon Cheeseburger",
        "latitude": 32.8186427,
        "location": {
          "x": -117.1812705,
          "y": 32.8186427,
          "type": "Point"
        },
        "longitude": -117.1812705
      },
      {

        "companyName": "Chili's Bar & Grill",
        "image": "4a3c63a56f7e11e0008ad967501e9841.png",
        "ingredients": "Cheeseburger with Bacon, Cheddar, Pickles, Spiced Panko Onion Rings, Lettuce, Tomato & Chili's Signature Sauce. Served with a side of Chili's classic BBQ sauce.",
        "name": "Southern Smokehouse Burger",
        "phone": "(619) 258-5811",
        "price": 11.79,
        "type": "Bacon Cheeseburger",
        "description": "Cheeseburger",
        "latitude": 32.8390361,
        "location": {
          "x": -116.9819251,
          "y": 32.8390361,
          "type": "Point"
        },
        "longitude": -116.9819251
      },
      {

        "companyName": "Oishii Japanese Thai Restaurant",
        "image": "38c39fd19772c0e41e969d8ddfa084a9.png",
        "ingredients": "Dragon Sushi Roll with Eel, Avocado, Crab, Cucumber",
        "name": "Dragon Roll",
        "phone": "(619) 596-4852",
        "price": 13,
        "type": "Specialty Roll",
        "description": "Dragon Roll",
        "latitude": 32.8547002,
        "location": {
          "x": -116.9736786,
          "y": 32.8547002,
          "type": "Point"
        },
        "longitude": -116.9736786
      },
      {

        "companyName": "Islands Mission Valley",
        "image": "db780a23f52d6f93d5a3cf61a05b77da.png",
        "ingredients": "Jalape??o, black pepper crusted, burger , pepper jack cheese, chipotle aioli, lettuce, tomato, Island Reds, Guacamole, spicy, fries",
        "name": "Kilauea with Guacamole",
        "phone": "6196402727",
        "price": 14.84,
        "type": "Burger",
        "description": "Jalape??o & Black Pepper Crusted Burger with Fries",
        "latitude": 32.7816645,
        "location": {
          "x": -117.1304171,
          "y": 32.7816645,
          "type": "Point"
        },
        "longitude": -117.1304171
      },
      {

        "companyName": "Narumi Sushi",
        "image": "6228155ad3600eb13257a5c7c1e26d19.png",
        "ingredients": "Inside: Crab, Avocado, & Cucumber. Top: Boiled, Shrimp, Salmon, Pico De Gallo, Ponzu Sauce, & Masago.",
        "name": "Ceviche Roll",
        "phone": "(619) 461-1151",
        "price": 9.25,
        "type": "Sushi Roll",
        "description": "Ceviche Roll",
        "latitude": 32.7932392,
        "location": {
          "x": -117.003242,
          "y": 32.7932392,
          "type": "Point"
        },
        "longitude": -117.003242
      },
      {

        "companyName": "Estrada's Mexican Food",
        "image": "844119788bb36c5c69ed1140d7423401.jpeg",
        "ingredients": "Carne Asada, French Fries, Cheese and Wrapped in a Quesadilla",
        "name": "Robin's Burrito (Mini)",
        "phone": "(619) 449-2103",
        "price": 5,
        "type": "Burrito",
        "description": "Burrito Wrapped in a Quesadilla",
        "latitude": 32.8451255,
        "location": {
          "x": -116.9987078,
          "y": 32.8451255,
          "type": "Point"
        },
        "longitude": -116.9987078
      },
      {

        "companyName": "Chaba Thai Kitchen",
        "image": "a4bb6345caffa08f305ae3e3bcde2dbe.png",
        "ingredients": "Our Famous Traditionally cooked rice noodles stir-fried with an egg in a special home made sauce and served with your choice of meat, green onion, tofu, and bean sprouts with rushed peanuts and lime on the side.",
        "name": "Chicken Pad Thai",
        "phone": "(858) 503-7777",
        "price": 6.95,
        "type": "Pad Thai",
        "description": "Chaba Thai Chicken",
        "latitude": 32.8331843,
        "location": {
          "x": -117.1499945,
          "y": 32.8331843,
          "type": "Point"
        },
        "longitude": -117.1499945
      },
      {

        "companyName": "Sala Thai",
        "image": "ccbedd9f3843ceeef59b66acd011cb9d.png",
        "ingredients": "Stir fried wide rice noodles, our house special chili sauce, bean sprouts and basil",
        "name": "Spicy Noodles",
        "phone": "(619) 229-9050",
        "price": 9.95,
        "type": "Noodles",
        "description": "Sala Thai",
        "latitude": 32.7618942,
        "location": {
          "x": -117.0646365,
          "y": 32.7618942,
          "type": "Point"
        },
        "longitude": -117.0646365
      },
      {

        "companyName": "Bahn Thai",
        "image": "c780b5dfb8bc2dd8bb18db545fc1bc92.png",
        "ingredients": "Chicken with sweet, peanuty curry with potatoes, onions, peanuts, coconut milk and brown rice",
        "name": "Massaman Curry",
        "phone": "(619) 299-6363",
        "price": 10.95,
        "type": "Curry",
        "description": "Bahn Thai",
        "latitude": 32.7618987,
        "location": {
          "x": -117.1464648,
          "y": 32.7618987,
          "type": "Point"
        },
        "longitude": -117.1464648
      },
      {

        "companyName": "The Original Sab-E-Lee",
        "image": "09c92c6a9d63e05f575110ba0533a584.png",
        "ingredients": "W/ Eggs, Onions, Basil, Carrots, and Bell Peppers",
        "name": "Spicy Fried Rice",
        "phone": "(858) 850-6868",
        "price": 8.5,
        "type": "Fried Rice",
        "description": "Sab-E-Lee",
        "latitude": 32.7844085,
        "location": {
          "x": -117.1709351,
          "y": 32.7844085,
          "type": "Point"
        },
        "longitude": -117.1709351
      },
      {

        "companyName": "Juice Crafters",
        "image": "c50aff8ea7fd53170badf39bf2a2dac1.jpeg",
        "ingredients": "Maca, cacao nibs, banana, almond butter, dates, coconut butter, almond milk, bee pollen & royal jelly (16 oz).",
        "name": "Pacific Love (Meal Replacement Smoothie)",
        "phone": "(619) 231-4329",
        "price": 8.99,
        "type": "Smoothie",
        "description": "Juice Crafters",
        "latitude": 32.7235376,
        "location": {
          "x": -117.1685919,
          "y": 32.7235376,
          "type": "Point"
        },
        "longitude": -117.1685919
      },
      {

        "companyName": "The Wrap Shack",
        "image": "a319f9bd681b52ad6369819a224c13fa.jpeg",
        "ingredients": "Chicken Breast, Glazed Walnuts, Gorgonazola Crumbles, Cranberries and Mandarin Oranges",
        "name": "Balsamic Chicken Salad",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Chicken Salad",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "The Wrap Shack",
        "image": "89bf83cfc01e739338e1f2294940eaf9.jpeg",
        "ingredients": "Tri-Tip, Bleu Cheese, Cheddar, Lettuce, Tomato, Horseradish Spread",
        "name": "Black & Bleu Tri-Tip",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Tri-Tip Wrap",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "The Wrap Shack",
        "image": "ef8c2fb8dc13d60888ca6784a31262c5.jpeg",
        "ingredients": "Buffalo Chicken Tenders, Bleu Cheese, Avocado, Celery, Tomatoes",
        "name": "Buffalo Chicken Salad",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Buffalo Chicken Salad",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "Taqueria Guerrro Style",
        "image": "d40fee56605fcd0e15e51f913b76ba70.jpeg",
        "ingredients": "Carne Asada, Jack Cheese, Guacamole, Cilantro, Onion, Green Sauce, Flour Tortilla",
        "name": "Naked California Burrito",
        "phone": "(714) 702-5592",
        "price": 7.5,
        "type": "California Burrito",
        "description": "Foodsup",
        "latitude": 33.7581107,
        "location": {
          "x": -118.0251995,
          "y": 33.7581107,
          "type": "Point"
        },
        "longitude": -118.0251995
      },
      {

        "companyName": "Bunz",
        "image": "5bf0551d999853ad3e91c4a6c80f2da3.png",
        "ingredients": "Beef, Cheese, Lettuce, Buns\r\nHours: Mon -  Sun 9AM - 8PM",
        "name": "Cheeseburger",
        "phone": "(714) 766-7060",
        "price": 3.99,
        "type": "Cheeseburger",
        "description": "eatcheapwithpete",
        "latitude": 33.7340312,
        "location": {
          "x": -117.9978986,
          "y": 33.7340312,
          "type": "Point"
        },
        "longitude": -117.9978986
      },
      {

        "companyName": "PT Noodles",
        "image": "10b03268c4140ae6b72701a2b18fe83a.jpeg",
        "ingredients": "Beef and Pork hot and spicy soup",
        "name": "Hot and Spicy Noodle Soup",
        "phone": "(623) 936-7633",
        "price": 9.99,
        "type": "Soup",
        "description": "Avondale, Arizona",
        "latitude": 33.4632546,
        "location": {
          "x": -112.3550121,
          "y": 33.4632546,
          "type": "Point"
        },
        "longitude": -112.3550121,
        "printerId": "NA"
      },
      {

        "companyName": "Friendly Donuts",
        "image": "f6bfff7caa1ea5492f6ffca025848805.jpeg",
        "ingredients": "Awesome Ube donut",
        "name": "Ube Donut",
        "phone": "\u202D+1 (714) 538-4942\u202C",
        "price": 1.5,
        "type": "Ube Donut",
        "description": "Donutkillmyvibe",
        "latitude": 33.7875201,
        "location": {
          "x": -117.8059327,
          "y": 33.7875201,
          "type": "Point"
        },
        "longitude": -117.8059327,
        "printerId": "NA"
      },
      {

        "companyName": "Black Bear Diner",
        "image": "e19878c5d0be3e8f45b51f8f9774d8fc.jpeg",
        "ingredients": "Triple-decker stacked with roasted turkey breast, thick-cut hickory & applewood smoked bacon, smoked ham, tomato, lettuce and mayonnaise with your choose of a side",
        "name": "Turkey Club",
        "phone": "(562) 513-7001",
        "price": 11.99,
        "type": "Sandwich",
        "description": "Long Beach, CA",
        "latitude": 33.8041076,
        "location": {
          "x": -118.1689969,
          "y": 33.8041076,
          "type": "Point"
        },
        "longitude": -118.1689969,
        "printerId": "NA"
      },
      {

        "address": "1402 S Priest Dr, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Phill",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FCD4B7A8F-827F-4FF9-B9F5-E8BBAFF9A18F.jpeg?alt=media&token=fe28e7ea-50fc-4ef1-9904-c5e6f5dd48f1",
        "ingredients": "Grilled or fried chicken, buffalo sauce, spring mix, tomatoes, red onion & shredded cheddar.  Pictured with no tomato and ranch.",
        "instagram": "Foodsupapp",
        "lat": 33.41293160000001,
        "name": "1/2 Buffalo Chicken Salad",
        "phone": "(480) 968-6612",
        "price": "7.99",
        "rating": 4.2,
        "review": "3.8",
        "type": "Salad",
        "lng": -111.9611453
      },
      {

        "address": "715 S Rural Rd #107, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Mcalister",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FE21489B8-0A1C-4B9A-BB6D-87131315A049.jpeg?alt=media&token=eacabf07-d2b5-43e8-99d6-f00c1be13328",
        "ingredients": "Any half sandwich and half salad for $7.99 and comes with a pickle.  I chose the spicy turkey melt with smoked turkey, bacon, pepper jack, avocado, chipotle ranch, spring mix and tomato on a toasted baguette.  Side salad was a Caesar.",
        "instagram": "Foodsupapp",
        "lat": 33.4231625,
        "name": "Half Salad and Half Sandwich",
        "phone": "(480) 699-3600",
        "price": "7.99",
        "rating": 4.3,
        "review": "3.4",
        "type": "Deli, Lunch, Sandwich",
        "lng": -111.92582449999998
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taq",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FBurrito%20Macho.png?alt=media&token=4d41b78b-0ef9-45fd-be25-8e0fab192033",
        "ingredients": "Three types of meat, (steak, chicken, and pork) with onions, cilantro, and hot sauce. ",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Macho Burrito",
        "phone": "(714) 702-5592",
        "price": "12",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578549683784
      },
      {

        "address": "31 W Market St, Rhinebeck, NY 12572, USA",
        "appAdd": true,
        "companyName": "Rhine beck bagel",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFA702EBD-F575-44BF-A56A-4B2351F681DF.jpeg?alt=media&token=901a8748-3fc7-4921-9ec8-95f61f3b0c26",
        "ingredients": "Chicken, tomato, lettuce ",
        "instagram": "#kureyourkravings",
        "lat": 41.927085,
        "name": "Chicken Sandwich ",
        "phone": "(845) 876-8025",
        "price": "$7.00",
        "rating": 4.6,
        "review": "Delicious!!",
        "type": "Sandwich ",
        "lng": -73.91378499999996
      },
      {

        "address": "20265 Valley Blvd Suite Q, Walnut, CA 91789, USA",
        "appAdd": true,
        "companyName": "aroma cr",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7355.JPG?alt=media&token=ec724bb9-85ce-4c7b-8f5e-dec028065ad1",
        "ingredients": "Smoked Salmon, Hollandaise Sause, Muffin, Egg",
        "instagram": "",
        "lat": 34.0094261,
        "name": "Smoked Salmon Benedict",
        "phone": "(909) 869-0001",
        "price": "14",
        "rating": 4.6,
        "review": "Perfect brunch item on the go. I usually don't go for egg Benedict but this one was so well put together perfect to start your day!",
        "type": "breakfast, brunch",
        "lng": -117.86041740000002,
        "insertDate": 1571685359539
      },
      {

        "address": "Big Bear Lake, CA 92315, USA",
        "appAdd": true,
        "companyName": "Copper q ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F2DDD3D7D-A6C4-4193-9F79-753386A0DC48.jpeg?alt=media&token=ccdf18cd-14c0-4c1d-8b96-abd0faf7becd",
        "ingredients": "Shots of espresso poured over ice",
        "instagram": "",
        "lat": 34.2411131,
        "name": "Iced Americano - Medium",
        "price": "2.95",
        "rating": 5,
        "review": "One of the smoothest iced americanos I have ever had.  Would definitely get this again.",
        "type": "Coffee",
        "lng": -116.911385,
        "insertDate": 1571746985524
      },
      {

        "address": "1537 W Broadway Rd Suite 104, Tempe, AZ, 85282",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F31B454EC-4903-4CCA-849A-165ECC36C389.jpeg?alt=media&token=b2ff4cd5-3d4a-4146-8e97-cb1cd4d91f22",
        "ingredients": "Choice of meat (Lamb, Chicken, Steak, Al Pastor, Filet Mignon +$1), onions, cilantro and sauce",
        "instagram": "",
        "lat": 32.7157,
        "name": "Greek Tacos",
        "phone": "4805903484",
        "price": "4.00",
        "rating": 4,
        "review": "This place has great tacos! Only $1 each",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1588976451106,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {
        "_id": "46WJNRWERbt3eQBrr",
        "address": "9580 W Garden Grove Blvd #300, Garden Grove, CA 92844, USA",
        "appAdd": true,
        "companyName": "Ariran",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F39E035DD-9948-4B56-822D-857B64EFA7FC.jpeg?alt=media&token=4eebcb41-e303-40ab-a18e-aec0733f8be8",
        "ingredients": "Sashimi, greens, masago, furikake, seaweed salad, onion, onion, pickled radish",
        "instagram": "#koreanketofoodie",
        "lat": 33.7727332,
        "name": "Sashimi salad",
        "phone": "(714) 539-2703",
        "price": "$8.99",
        "rating": 4.1,
        "review": "Such a fresh bowl for a good price!!! Easy way to stay keto when your on the go ",
        "type": "Keto poke salad"
      },
      {
        "_id": "SZ4Enobn8wMyStSp4",
        "address": "1817 E Guadalupe Rd, Tempe, AZ 85283, USA",
        "appAdd": true,
        "companyName": "Habit burger guad",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F987F26ED-4B81-402C-BCE0-830F14914FC9.jpeg?alt=media&token=b2ffaefd-c31e-4eb3-9fd9-e4d177ae656d",
        "ingredients": "Fried chicken, cheese, lettuce, tomato, onion with no tomato",
        "instagram": "Azfood",
        "lat": 33.36285,
        "name": "Golden Chicken Sandwich ",
        "phone": "(480) 456-8912",
        "price": "$6.69",
        "rating": 4.4,
        "review": "Good",
        "type": "Fried"
      },
      {
        "_id": "fnbk24ab2G7MY46fn",
        "address": "4908 S Power Rd, Mesa, AZ 85212, USA",
        "appAdd": true,
        "companyName": "Chick",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFC07A86E-B20F-4AEE-ACC3-45292A8BB173.jpeg?alt=media&token=68822a93-b891-4aa2-b5ac-88bdcb3426f9",
        "ingredients": "Spicy fried chicken sandwich with pepper jack cheese, lettuce, onion and tomato. Pictured with no tomato ",
        "instagram": "#gilbert",
        "lat": 33.32712399999999,
        "name": "Spicy Deluxe Sandwich ",
        "phone": "(480) 988-6252",
        "price": "$5.15",
        "rating": 4.5,
        "review": "Pretty good",
        "type": "Fried Chicken"
      },
      {

        "address": "4302 E Ray Rd STE.106, Phoenix, AZ 85044, USA",
        "appAdd": true,
        "companyName": "The Buzzed Goat",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F927CC02E-8137-49CC-9ECD-0AC6FEAE878D.jpeg?alt=media&token=1f114166-1227-477d-930e-8504854d3a0b",
        "ingredients": " \uD83E\uDDCA ?????? Fresh cold brew coffee (16 ounces)",
        "instagram": "",
        "lat": 32.7157,
        "name": "Cold Brew",
        "phone": "4807067411",
        "price": "4.25",
        "rating": 5,
        "review": "This cold brew is fresh and lite for a fair price",
        "type": "Coffee",
        "lng": 117.1611,
        "insertDate": 1593801221261,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.thebuzzedgoat.com"
      },
      {

        "address": "4200 S Arizona Ave #5, Chandler, AZ 85248, USA",
        "appAdd": true,
        "companyName": "Senor taco",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FAEC43F31-E2FC-4156-BCA9-76EBE42B38C6.jpeg?alt=media&token=4fcaec17-30f9-4c36-8ee7-19a97c41a769",
        "ingredients": "Eggs, cheese, ham, sausage, cheese with sour cream. This is no sour cream substitute for refried beans. ",
        "instagram": "",
        "lat": 33.2454986,
        "name": "Hash Brown Breakfast Burrito",
        "phone": "(480) 895-5580",
        "price": "6.99",
        "rating": 4.2,
        "review": "Great burrito! Told the cashier I was only going to eat half and they served it in two pieces. ",
        "type": "Breakfast Burrito",
        "lng": -111.8420557
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taq",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FBreakfast%20Burrito.png?alt=media&token=1b60e277-8195-4214-b882-646dfb5a1c6e",
        "ingredients": "Three eggs, beans, chopped onions, tomatoes with cheese, and salsa",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Breakfast Burrito",
        "phone": "(714) 702-5592",
        "price": "8.50",
        "rating": 4,
        "review": "Amazing Mexican Food for Breakfast",
        "type": "Breakfast,Lunch, and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578549885754
      },
      {

        "address": "777 S Alameda St, Los Angeles, CA 90021, USA",
        "appAdd": true,
        "companyName": "smog",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7112.JPG?alt=media&token=8e6bf4b4-4212-4c20-a59e-0ae1577101eb",
        "ingredients": "oysters",
        "instagram": "",
        "lat": 34.03463359999999,
        "name": "appetizer",
        "phone": "(718) 928-6603",
        "price": "15-20",
        "rating": 4.6,
        "review": "Freshly shucked kumamoto oysters from the ocean YUMMM provided by Jolly Oyster at SMorgasborg",
        "type": "keto appetizer, appetizer",
        "lng": -118.24201149999999,
        "insertDate": 1571018779545
      },
      {

        "address": "3076 e chandler heights rd suite 101, Gilbert, Az, 85298",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F85859F5F-3D7D-4603-B071-EE68501471F6.jpeg?alt=media&token=76cfc36e-d577-40ab-ba47-7490b47efed7",
        "ingredients": "Local beef chorizo, seasoned tots, scrambled eggs, jack cheese and green chili sauce",
        "instagram": "",
        "lat": 32.7157,
        "name": "Arizona Breakfast Burrito",
        "phone": "4805973545",
        "price": "9.00",
        "rating": 5,
        "review": "Amazing every time and massive portions ",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1584582370951,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "companyName": "The Habit Burger Grill",
        "image": "95deb991ce5d1425b2939c709f7a8238.jpeg",
        "ingredients": "Double Cheeseburger with Two Beef Patties, Swiss Cheese, Grilled Onion, Lettuce, Pickles, Mayonnaise",
        "name": "Double Char with Cheese",
        "phone": "(858) 277-1089",
        "price": 5.24,
        "type": "Cheeseburger",
        "description": "Double Cheeseburger",
        "latitude": 32.8186427,
        "location": {
          "x": -117.1812705,
          "y": 32.8186427,
          "type": "Point"
        },
        "longitude": -117.1812705
      },
      {

        "companyName": "Oishii Japanese Thai Restaurant",
        "image": "74fd92855196c3bd76c683ad9915f2f5.png",
        "ingredients": "Caterpillar Sushi Roll with Avocado, Crab, Cucumber",
        "name": "Caterpillar Roll",
        "phone": "(619) 596-4852",
        "price": 10.5,
        "type": "Sushi Roll",
        "description": "Caterpillar Roll",
        "latitude": 32.8547002,
        "location": {
          "x": -116.9736786,
          "y": 32.8547002,
          "type": "Point"
        },
        "longitude": -116.9736786
      },
      {

        "companyName": "Banbu Sushi",
        "image": "3d3eac69f3df8ef99d534934041d18e5.png",
        "ingredients": "Sushi Roll with Salmon, Avocado, Cream Cheese, Tempura Fried with Spicy Mayo, Siracha and a Jalapeno on Top",
        "name": "Banbu Roll",
        "phone": "(619) 589-0071",
        "price": 16,
        "type": "Sushi Roll",
        "description": "Sushi Roll",
        "latitude": 32.7801453,
        "location": {
          "x": -117.014163,
          "y": 32.7801453,
          "type": "Point"
        },
        "longitude": -117.014163
      },
      {

        "companyName": "Islands Mission Valley",
        "image": "beaf49f154e75803052d2230f452cd9e.png",
        "ingredients": "Bleu cheese dressing, lettuce, tomato, red onion, crumbled bleu cheese, fries",
        "name": "Bluenami",
        "phone": "6196402727",
        "price": 12.25,
        "type": "Burger",
        "description": "Blue Cheese Burger, with Fries",
        "latitude": 32.7816645,
        "location": {
          "x": -117.1304171,
          "y": 32.7816645,
          "type": "Point"
        },
        "longitude": -117.1304171
      },
      {

        "companyName": "Yardhouse",
        "image": "7aeab03904c83e5ea7abecb9eef11b65.jpeg",
        "ingredients": "Baby Corn, Bok Choy, Orange Glaze, Jasmine Rice.",
        "name": "Orange Chicken",
        "phone": "(619) 574-0468",
        "price": 17.85,
        "type": "Chinese Food",
        "description": "Orange Chicken",
        "latitude": 32.7659127,
        "location": {
          "x": -117.1557736,
          "y": 32.7659127,
          "type": "Point"
        },
        "longitude": -117.1557736
      },
      {

        "companyName": "Katsu Cafe",
        "image": "ccbe1733fd6b41ed81b4232844f05e5c.jpeg",
        "ingredients": "Tonkatsu ramen Tonkatsu broth, chashu pork, vegetables and a hard boiled egg",
        "name": "Tonkatsu Ramen",
        "phone": "(858) 560-8859",
        "price": 7,
        "type": "Ramen",
        "description": "Tonkatsu Ramen",
        "latitude": 32.8320588,
        "location": {
          "x": -117.1606663,
          "y": 32.8320588,
          "type": "Point"
        },
        "longitude": -117.1606663
      },
      {

        "companyName": "Slanted Door",
        "image": "9a8b05d811e8f32f427c57f4e576ed47.jpeg",
        "ingredients": "8 oz Cubed Filet Mignon, Red Onion, Lime Sauce",
        "name": "Grass-fed Shaking Beef",
        "phone": "(415) 861-8032",
        "price": 41,
        "type": "Beef",
        "description": "miss.augustina",
        "latitude": 37.794883,
        "location": {
          "x": -122.3998137,
          "y": 37.794883,
          "type": "Point"
        },
        "longitude": -122.3998137
      },
      {

        "companyName": "Mr Katsu",
        "image": "e81ba8d11715e3558835ef113a602521.jpeg",
        "ingredients": "Pork Cutlet, Cheese, Butter, Extra Deliciousness",
        "name": "Habanero Pesto",
        "phone": "(714) 986-9888",
        "price": 9,
        "type": "Sandwich",
        "description": "n.nguyeenn",
        "latitude": 33.8893912,
        "location": {
          "x": -117.8701228,
          "y": 33.8893912,
          "type": "Point"
        },
        "longitude": -117.8701228
      },
      {

        "companyName": "Magic Mike's Pizza",
        "image": "d20098a10c94c4c5c2a9e675100d3a1c.jpeg",
        "ingredients": "Fresh Basil, Fresh Mozzarella, Marinara Sauce Sm$9.95 M$11.95 L$14.95",
        "name": "Margherita",
        "phone": "(714) 898-0211",
        "price": 11.95,
        "type": "Pizza",
        "description": "Magic Mike's Pizza",
        "latitude": 33.7738077,
        "location": {
          "x": -118.0246451,
          "y": 33.7738077,
          "type": "Point"
        },
        "longitude": -118.0246451
      },
      {

        "companyName": "Encinitas Ale House",
        "image": "be084fde5943038257a9802288cf872e.png",
        "ingredients": "Melted Gruy??re, Crumbled Gorgonzola, Crispy Onion Straws, Tomato and Baby Greens",
        "name": "New Zealand 100% Grass Fed Kobe Wagyu Burger",
        "phone": "(760) 943 - 7180",
        "price": 16,
        "type": "Cheeseburger",
        "description": "worldismymenu",
        "latitude": 33.0384973,
        "location": {
          "x": -117.2931056,
          "y": 33.0384973,
          "type": "Point"
        },
        "longitude": -117.2931056
      },
      {

        "companyName": "Blue Ribbon Pizzeria",
        "image": "bbecfa5245aa147a69ca0ed1850f9910.png",
        "ingredients": "Tomato Sauce, Fennel Sausage, Heavy Cream, Parmigiano Reggiano & Basil",
        "name": "Staff's Favorite",
        "phone": "(76) 634 - 7671",
        "price": 8,
        "type": "Pizza",
        "description": "Blue Ribbon Pizza",
        "latitude": 33.0410173,
        "location": {
          "x": -117.2926439,
          "y": 33.0410173,
          "type": "Point"
        },
        "longitude": -117.2926439
      },
      {

        "companyName": "Bua Thai",
        "image": "b8a19d09fc59c6aedec575f98cfffc23.png",
        "ingredients": "Perfectly sliced marinated sirloin beef leaving it extremely tender and full of flavor; served with a delicious side sauce that simply pops with flavor.",
        "name": "Crying Tiger",
        "phone": "(858) 679-7073",
        "price": 12.95,
        "type": "Beef Plate",
        "description": "Bua Thai",
        "latitude": 32.9529874,
        "location": {
          "x": -117.0630465,
          "y": 32.9529874,
          "type": "Point"
        },
        "longitude": -117.0630465
      },
      {

        "companyName": "Taco Surf PB",
        "image": "3e09639f086de97c359b9382b32d6dc2.jpeg",
        "ingredients": "Flower tortilla stuffed with carne asada and shrimp, rice, fresh avocado slices, chipotle sauce and salsa fresca",
        "name": "Surf & Turf Burrito",
        "phone": "858-272-3877",
        "price": 10.75,
        "type": "Burrito",
        "description": "Taco Surf PB",
        "latitude": 32.7988885,
        "location": {
          "x": -117.2559985,
          "y": 32.7988885,
          "type": "Point"
        },
        "longitude": -117.2559985
      },
      {

        "companyName": "PDQ Restaurant",
        "image": "c56326f125b6b6f301f7049f780ef840.png",
        "ingredients": "Grilled Chicken with homemade ranch, all-natural bacon, avocado, green leaf lettuce & tomato. Comes with Fries and a Drink\"",
        "name": "Cali Club Meal",
        "phone": "(602) 325-4973",
        "price": 8.99,
        "type": "Chicken Sandwich",
        "description": "arizonabites",
        "latitude": 33.5999154,
        "location": {
          "x": -111.9853104,
          "y": 33.5999154,
          "type": "Point"
        },
        "longitude": -111.9853104,
        "printerId": "NA"
      },
      {

        "companyName": "Tukee's Sports Grille",
        "image": "148a7deee215a755b612cc0e5566dabb.jpeg",
        "ingredients": "Chopped steak seasoned to perfection, chopped grilled onion, bell peppers, provolone cheese, served on a hoagie roll $9.5.  Add Onion rings for $2",
        "name": "Philly Steak",
        "phone": "(480) 307-8680",
        "price": 9.5,
        "type": "Philly Cheesesteak",
        "description": "Ahwatukee, Arizona",
        "latitude": 33.305586,
        "location": {
          "x": -111.9798295,
          "y": 33.305586,
          "type": "Point"
        },
        "longitude": -111.9798295,
        "printerId": "NA"
      },
      {

        "companyName": "EarlyBaker",
        "image": "64f9a0d2944d0437b320b8f4b651db83.jpeg",
        "ingredients": "Savory crepes with sliced smoked turkey, fresh mushroom and melted Swiss cheese. Each order comes with two delicious egg-battered crepes",
        "name": "Turkey & Swiss Crepe",
        "phone": "(480) 316-6334",
        "price": 8.95,
        "type": "Crepe",
        "description": "Ahwatukee, Arizona",
        "latitude": 33.3044587,
        "location": {
          "x": -111.9945187,
          "y": 33.3044587,
          "type": "Point"
        },
        "longitude": -111.9945187,
        "printerId": "NA"
      },
      {

        "companyName": "Slicks Garage",
        "image": "60c7401afa75a44c5a763be0cfa395b1.jpeg",
        "ingredients": "Cajun burger topped with sauteed onions, bleu cheese crumbles, bacon and our famous fire sauce, whoopie! It's a juicer.",
        "name": "Bobber Burger",
        "phone": "(623) 476-7605",
        "price": 11.75,
        "type": "Bacon Cheeseburger",
        "description": "Peoria, AZ",
        "latitude": 33.6355075,
        "location": {
          "x": -112.234839,
          "y": 33.6355075,
          "type": "Point"
        },
        "longitude": -112.234839,
        "printerId": "NA"
      },
      {

        "address": "942 E Broadway Rd, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Jack in the box broadwa",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F4CE10991-4D58-4E59-AE40-587602B5D176.jpeg?alt=media&token=5c1a47fb-bd41-4d27-bb80-a92e72985dd7",
        "ingredients": "Breakfast sandwich with cheese, eggs, ham and bacon in a bun.  ",
        "instagram": "#tempe",
        "lat": 33.4077511,
        "name": "Ultimate Breakfast Sandwich",
        "phone": "(480) 966-9080",
        "price": "$4.99",
        "rating": 3.7,
        "review": "4/5",
        "type": "Breakfast",
        "lng": -111.92482710000002
      },
      {

        "address": "20265 Valley Blvd Suite Q, Walnut, CA 91789, USA",
        "appAdd": true,
        "companyName": "aroma cr",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7314.JPG?alt=media&token=35af2b25-0074-49a1-b44b-905273d9f167",
        "ingredients": "matcha, almond milk",
        "instagram": "",
        "lat": 34.0094261,
        "name": "Matcha Latte",
        "phone": "(909) 869-0001",
        "price": "5",
        "rating": 4.6,
        "review": "Im so picky about my almond milk its hard to find an almond milk latte I would approve of and this seals the deal! Definitely recommend the matcha latte with almond milk. ",
        "type": "pick me up, drink, latte",
        "lng": -117.86041740000002,
        "insertDate": 1573449904384
      },
      {

        "address": "2000 Convict Lake Rd Mammoth Lakes, California, 93425",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F7E790465-723D-45D2-8029-6D012EE03039.jpeg?alt=media&token=3274daff-cc32-4d00-a887-4af256906e9e",
        "ingredients": "2 Beer battered cod tacos withmango salsa, cabbage and fries",
        "instagram": "",
        "lat": 32.7157,
        "name": "Beer Battered Fish Tacos",
        "phone": "7609343800",
        "price": "12.00",
        "rating": 5,
        "review": "Lunch comes with an excellent view!",
        "type": "Lunch or Dinner",
        "lng": 117.1611,
        "insertDate": 1588638003551,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "20265 Valley Blvd Suite Q, Walnut, CA 91789, USA",
        "appAdd": true,
        "companyName": "aroma craf",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7309.JPG?alt=media&token=de1ffeef-8c80-438f-9c57-fe8a77bde89d",
        "ingredients": "espresso, almond milk",
        "instagram": "",
        "lat": 34.0094261,
        "name": "COFFEE",
        "phone": "(909) 869-0001",
        "price": "5",
        "rating": 4.6,
        "review": "Iced Cappuccino with almond milk, Im always picky with my almond milk and this one lived up to my liking.",
        "type": "starter, coffee",
        "lng": -117.86041740000002,
        "insertDate": 1571685750816
      },
      {

        "address": "18601 Airport Way, Santa Ana, CA 92707, USA",
        "appAdd": true,
        "companyName": "Ducks break",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F9F0276EC-7744-4616-AB7D-02935381ED00.jpeg?alt=media&token=96932136-339f-4532-abf6-f6a2ce104b8b",
        "ingredients": "\uD83D\uDD25 Grilled chicken breast on a bunch with spicy sauce, bacon, lettuce, tomato, onion and served with a side of fries. ",
        "instagram": "Foodsupapp",
        "lat": 33.6758651,
        "name": "Spicy Chicken Sandwich add bacon",
        "phone": "(949) 252-5200",
        "price": "15.98",
        "rating": 3.6,
        "review": "6.5",
        "type": "Sandwich",
        "lng": -117.86416180000003
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taquer",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Ftacos.png?alt=media&token=a52ae2ae-68e3-4668-a863-4cc0c76b2e36",
        "ingredients": "Choice of meat, onions, cilantro, and red hot sauce or green mild sauce.",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Tacos",
        "phone": "(714) 702-5592",
        "price": "2.50",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578552889767
      },
      {

        "address": "1420 S Higley Rd, Gilbert, AZ 85296",
        "appAdd": true,
        "companyName": "Backyard Taco",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FE11E3173-2508-4609-998E-C5299994A82E.jpeg?alt=media&token=6ca8bfbe-d45c-40c8-9a4e-88e840127bc4",
        "ingredients": "Two Carne Asada and one Pollo Asada tacos with the fixings. ",
        "instagram": "",
        "lat": 32.7157,
        "name": "Tacos",
        "phone": "4802472775",
        "price": "8.45",
        "rating": 3,
        "review": "A good spot for lunch!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1594927436110,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.backyardtaco.com"
      },
      {

        "address": "930 W Broadway Rd, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Detroit",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FA95A2569-A5EF-4D77-A468-851A98B37804.jpeg?alt=media&token=664e4f6b-eb62-4ab1-9cc1-8b856d4b6c5b",
        "ingredients": "3 beef patties in a bun, two cheese and the works with no mayo and no tomato. ",
        "instagram": "",
        "lat": 33.4078788,
        "name": "Thrilled Cheeseburger",
        "phone": "(480) 219-7430",
        "price": "6.45",
        "rating": 4.5,
        "review": "Dang good every time ",
        "type": "Lunch",
        "lng": -111.95392429999998,
        "insertDate": 1575577396718
      },
      {

        "address": "400 W 8th St, Los Angeles, CA 90014, USA",
        "appAdd": true,
        "companyName": "shake s",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0373.JPG?alt=media&token=7c3f2662-09eb-4f47-a235-b376d5cb4024",
        "ingredients": "cheeseburger, lettuce, applewood bacon, cherry peppers, shack sauce",
        "instagram": "",
        "lat": 34.0444684,
        "name": "burger, lettuce wrap",
        "phone": "(213) 213-5307",
        "price": "7.29",
        "rating": 4.4,
        "review": "If you love a good burger you will LOVE shack shake, haven't tried it? you haven't lived yet.",
        "type": "lunch, dinner",
        "lng": -118.25611809999998,
        "insertDate": 1573793224305
      },
      {

        "address": "1655 S Azusa Ave, Hacienda Heights, CA 91745, USA",
        "appAdd": true,
        "companyName": "tea champ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0477.JPG?alt=media&token=d3a5a477-e81c-4cf7-982c-d9bd6c6cc0b4",
        "ingredients": "milk, tea, agar boba, grass jelly",
        "instagram": "",
        "lat": 33.99208340000001,
        "name": "tea, boba, ",
        "phone": "(626) 977-9990",
        "price": "5.25",
        "rating": 5,
        "review": "Its hard to find a teashop that does not have sugar in their grass jelly but thanks to Tea Champ I can have their grass jelly without the guilt and they have agar boba mini pearl that is a healthier alternative for boba and this drink is too good to pass up.",
        "type": "snack, dessert",
        "lng": -117.93348760000003,
        "insertDate": 1575684215981
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taq",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FMeat%20Nachos.png?alt=media&token=a09cf87b-8d32-4eb3-9095-5cc2ca9af8e0",
        "ingredients": "Nachos Topped with beans, melted cheese, meat of your choice, tomato, guacamole, and sour cream",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Meat Nachos",
        "phone": "(714) 702-5592",
        "price": "11",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578549467636
      },
      {
        "_id": "ATpgLspiE6kcpSewN",
        "address": "3533 E Chapman Ave, Orange, CA 92869, USA",
        "appAdd": true,
        "companyName": "Taco mesa",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F0765619D-6282-4D29-A816-2CF157C92423.jpeg?alt=media&token=c01a7107-4816-47f8-88c7-5660801ae546",
        "ingredients": "Steak, lettuce, guacamole, sour cream, pick de Gallo (beans chips rice on side) ",
        "instagram": "#koreanketofoodie",
        "lat": 33.7883184,
        "name": "King Tostada",
        "phone": "(714) 633-3922",
        "price": "$13",
        "rating": 4.5,
        "review": "So good and healthy eat also so guilt free definitely recommend ",
        "type": "Salad (ketofied)"
      },
      {
        "_id": "JjKe22BZ8NaQDhhwd",
        "address": "4302 E Ray Rd STE.106, Phoenix, AZ 85044, USA",
        "appAdd": true,
        "companyName": "The buzzed",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F2230FD24-C110-4EAD-BE7A-C5837D192C01.jpeg?alt=media&token=180ace83-f10a-41b7-971c-4bf4b8f3b35e",
        "ingredients": "Cold brew, caramel, cream",
        "instagram": "#thebuzzedgoat",
        "lat": 33.3208835,
        "name": "The GOAT",
        "phone": "(480) 706-7411",
        "price": "4.00",
        "rating": 4.8,
        "review": "Customer favorite ",
        "type": "Cold brew coffee"
      },
      {
        "_id": "hHeSAeeqqDpYHYaNL",
        "address": "4302 E Ray Rd STE.106, Phoenix, AZ 85044, USA",
        "appAdd": true,
        "companyName": "The buzzed",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F13A929C9-BDA1-4119-A1CB-910275926811.jpeg?alt=media&token=e013cd0d-2d64-4a5f-832d-f2cffc56da5c",
        "ingredients": "Fresh brewed coffee",
        "instagram": "#thebuzzedgoat",
        "lat": 33.3208835,
        "name": "Large Coffee",
        "phone": "(480) 706-7411",
        "price": "$3.00",
        "rating": 4.8,
        "review": "Great cup of Coffee",
        "type": "Locally roasted drip coffee"
      },
      {

        "address": "7337 e Shea Blvd., suite #105, Scottsdale, AZ 85260",
        "appAdd": true,
        "companyName": "Fate Brewing Co - North",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F7D290D5A-E144-4DA4-B458-DE59E7B96A7D.jpeg?alt=media&token=b1b891b5-538b-4309-b02c-524ef1fc5133",
        "ingredients": "Two Southern chicken tenders, bacon, lettuce, tomato, onion and fries. Pictured with no onion",
        "instagram": "",
        "lat": 32.7157,
        "name": "Bacon Ranch Chicken Sandwich",
        "phone": "4809941275",
        "price": "15.00",
        "rating": 4,
        "review": "Great brewery style chicken sandwich and good brews",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1593810173652,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.fatebrewingco.com"
      },
      {

        "address": "1775 W University Dr Ste 130, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Arizona sandwi",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FC43B32CB-9CA5-46E2-B101-1D73678509E8.jpeg?alt=media&token=b17eb82f-2c94-4b5c-bcaa-ebe32462fefe",
        "ingredients": "White or wheat bread, turkey, bacon, avocado with everything no tomato and no mayo. Lettuce, onion, Italian dressing and cheese",
        "instagram": "",
        "lat": 33.4214524,
        "name": "Sparky Turkey Sandwich",
        "phone": "(480) 829-7827",
        "price": "7.15",
        "rating": 4.5,
        "review": "Great sandwich. I eat this once a week",
        "type": "Sandwich",
        "lng": -111.96920009999997
      },
      {

        "companyName": "Lucha Libre Taco Shop",
        "image": "01100f270949962b60eb96257cd5526e.jpeg",
        "ingredients": "Burrito with Steak, Shrimp, Avocado, French Fries, Cheese, Pico de Gallo, Super Secret Chipotle Sauce",
        "name": "Surfin' California",
        "phone": "(619) 296-8226",
        "price": 9.64,
        "type": "Burrito",
        "description": "Burrito with Shrimp and Steak",
        "latitude": 33.1239521,
        "location": {
          "x": -117.1055059,
          "y": 33.1239521,
          "type": "Point"
        },
        "longitude": -117.1055059
      },
      {

        "companyName": "Butterleaf",
        "image": "f827d19450538ee82883f96d7b4f82cd.png",
        "ingredients": "Packed with quinoa, a bounty of seasonal grilled and saut??ed veggies, sweet potato, crispy avocado, grill sauce",
        "name": "Two Hander Burrito",
        "phone": "(949) 932-0420",
        "price": 9,
        "type": "Veggie Burrito",
        "description": "burritolist",
        "latitude": 33.6762106,
        "location": {
          "x": -117.8554564,
          "y": 33.6762106,
          "type": "Point"
        },
        "longitude": -117.8554564
      },
      {

        "companyName": "Urth Caffe",
        "image": "a96a3bc89c6de6de99d3701aaa1d7c08.jpeg",
        "ingredients": "Rich, Hot Cocoa poured over espresso",
        "name": "Caffe Mocha",
        "phone": "(626) 844-4644",
        "price": 4.75,
        "type": "Coffee",
        "description": "Urth Caffe",
        "latitude": 34.145607,
        "location": {
          "x": -118.1381916,
          "y": 34.145607,
          "type": "Point"
        },
        "longitude": -118.1381916
      },
      {

        "companyName": "Lofty Coffee",
        "image": "8218a632768d757a2e17a84cf8df50f6.jpeg",
        "ingredients": "Cold Brew Iced Coffee",
        "name": "Cold Brew Iced Coffee",
        "phone": "(760) 230-6747",
        "price": 3.77,
        "type": "Cold Brew Coffee",
        "description": "Lofty Coffe Co",
        "latitude": 32.7220998,
        "location": {
          "x": -117.1672365,
          "y": 32.7220998,
          "type": "Point"
        },
        "longitude": -117.1672365
      },
      {

        "companyName": "Juice Crafters",
        "image": "00208c07da58773aae5df666361d0c19.jpeg",
        "ingredients": "Amazonian Acai with guarana, almond granola, banana, strawberries & coconut flakes",
        "name": "Brazilian Super Blend (Acai Bowl)",
        "phone": "(619) 231-4329",
        "price": 9.99,
        "type": "Acai Bowl",
        "description": "Juice Crafters",
        "latitude": 32.7235376,
        "location": {
          "x": -117.1685919,
          "y": 32.7235376,
          "type": "Point"
        },
        "longitude": -117.1685919
      },
      {

        "companyName": "Waterfront Bar and Grill",
        "image": "fc203fc39e09f9c51e038fc0c38686bf.png",
        "ingredients": "Sausage, bacon, ham, cheese, hash browns, avo, eggs, honey chipotle sauce",
        "name": "Deluxe Burrito",
        "phone": "(619) 232-9656",
        "price": 8.95,
        "type": "Breakfast Burrito",
        "description": "food.dude.sd",
        "latitude": 32.7256133,
        "location": {
          "x": -117.1702463,
          "y": 32.7256133,
          "type": "Point"
        },
        "longitude": -117.1702463
      },
      {

        "address": "303 N Spurgeon St, Santa Ana, CA 92701, USA",
        "appAdd": true,
        "companyName": "kaizen ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0475.JPG?alt=media&token=1bc5576e-dc58-4f02-8e7b-d1a4969eea3c",
        "ingredients": "chicken wings, breading, house special ingredient",
        "instagram": "",
        "lat": 33.747279,
        "name": "Wings",
        "phone": "(714) 486-3464",
        "price": "8",
        "rating": 4.6,
        "review": "I love love love wings that have the extra crunch that taste like they just fried it. These wings, not sure exactly what breading and seasoning they use but its totally worth $8!",
        "type": "Appetizer",
        "lng": -117.86541210000001,
        "insertDate": 1577221299120,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {

        "address": "14031 Jeffrey Rd, Irvine, CA 92620, USA",
        "appAdd": true,
        "companyName": "red straw",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0846.JPG?alt=media&token=ff6a5a51-a6f1-4c91-9aa0-bb4e84524368",
        "ingredients": "strawberry, jasmine tea, agar boba",
        "instagram": "",
        "lat": 33.696371,
        "name": "snack, tea, boba",
        "phone": "(949) 336-7527",
        "price": "5.25",
        "rating": 4,
        "review": "Strawberry Jasmine Tea without sugar + agar boba( healthier option than boba) super refreshing and perfect even without sugar.",
        "type": "TEA",
        "lng": -117.76272799999998,
        "insertDate": 1576025154721
      },
      {

        "address": "4542 Beach Blvd, Buena Park, CA 90621, USA",
        "appAdd": true,
        "companyName": "stereo",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_6945.JPG?alt=media&token=b816995d-a64f-4fc8-873b-1d63d90aa872",
        "ingredients": "Left: Vietnameses Cold Brew. ( has condense milk) + Right: Kyoto Cold Brew",
        "instagram": "",
        "lat": 33.8952608,
        "name": "GOOD COFFEE",
        "phone": "(714) 747-5572",
        "price": "About $10 for both",
        "rating": 4.6,
        "review": "Really Really good coffee at stereoscope. I always try to stop by whenever I'm in the area. Love both drinks very much",
        "type": "snack or pick me up",
        "lng": -117.98761179999997
      },
      {

        "address": "12806 Foothill Blvd, Rancho Cucamonga, CA 91739, USA",
        "appAdd": true,
        "companyName": "china rep",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0201.JPG?alt=media&token=3d169e88-307e-4bed-be56-84221dbcd96a",
        "ingredients": "dumpling, shrimp",
        "instagram": "",
        "lat": 34.1066757,
        "name": "Shrimp Har Gow, dim sum",
        "phone": "(909) 899-5245",
        "price": "3.95",
        "rating": 4.399999999999999,
        "review": "Shrimp Har Gow has become one of my favorite dim sum dishes. One bite and you will fall in love. I recently tried dim sum for the first time and I am hooked! Definitely worth my carb day.",
        "type": "lunch, dim sum, appetizer",
        "lng": -117.52578800000003,
        "insertDate": 1573449356049
      },
      {

        "address": "1665 S Dobson Rd, Mesa, AZ 85202, USA",
        "appAdd": true,
        "companyName": "Firat",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FE443ECAF-6084-4D96-9617-A6DDB289D199.jpeg?alt=media&token=12b3e466-1a75-4718-aa19-babc337172db",
        "ingredients": "The Elevated Egg Sandwich Fresh, over-easy cage-free egg* with bacon, Gruyere cheese, fresh smashed avocado, mayo and lemon dressed arugula on a brioche bun. Served with fresh, seasoned potatoes. First Watch on Dobson",
        "instagram": "1070",
        "lat": 33.382991,
        "name": "Elevated Egg Sandwich",
        "phone": "(480) 831-9044",
        "price": "9.29",
        "rating": 4.4,
        "review": "7.8/10 very well proportioned and tasty sandwich. Potatoes were great too ",
        "type": "Brunch",
        "lng": -111.87462800000003,
        "insertDate": 1570989273340
      },
      {

        "address": "7050 W Ray Rd, Chandler, AZ 85226, USA",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F2FD3DEB2-2CC9-41CD-A6C0-BE02F240D1FF.jpeg?alt=media&token=f32aa989-ebc0-4fb3-a8c5-8e54521e64cd",
        "ingredients": "Animal Style with Pepperchinis",
        "instagram": "",
        "lat": 32.7157,
        "name": "3x3",
        "phone": "8007861000",
        "price": "5.95",
        "rating": 5,
        "review": "Amazing",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1589825466933,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "14022 Springdale St, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "Taqueria mexico",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F0F368E1F-2A4B-48F0-85F2-AFB941EF20CD.jpeg?alt=media&token=72043993-c158-4e79-8a74-ed40831e39db",
        "ingredients": "Carne asada, cheese, rice, beans, cilantro, onion and red or green sauce. ",
        "instagram": "FoodsUp",
        "lat": 33.7585744,
        "name": "Carne Asada Burrito ",
        "phone": "(714) 894-5850",
        "price": "7.49",
        "rating": 4.2,
        "review": "8.2",
        "type": "Burrito",
        "lng": -118.02389210000001
      },
      {

        "address": "East Los Angeles, CA 90022, USA",
        "appAdd": true,
        "companyName": "moos ba",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7111.JPG?alt=media&token=35ba6005-ed64-4588-8828-bee067051d27",
        "ingredients": "Half Pound Brisket, Mac & Cheese, Cole Slaw",
        "instagram": "",
        "lat": 34.02244170000001,
        "name": "meal ",
        "phone": "(647) 930-1154",
        "price": "$23",
        "rating": 4.6,
        "review": "This Brisket $13  just melts in your mouth, definitely worth the 30minute wait. It was very well paired with the slaw +$5 Mac&Cheese +$5",
        "type": "Can be the perfect Ketofied if you skip the sides! ",
        "lng": -118.1669736,
        "insertDate": 1571018471598
      },
      {
        "_id": "Sh2tFkfsFJ7qAMLoD",
        "address": "8280 Mira Mesa Blvd Ste C, San Diego, CA 92126, USA",
        "appAdd": true,
        "companyName": "Ding tea mira",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FFE582845-B873-48D1-BAF1-503F1876395C.jpeg?alt=media&token=9ec61ae1-e572-4ba9-bb4d-ae0f4ffe2c54",
        "ingredients": "Brown sugar milk tea with golden boba",
        "instagram": "_sandiegofoodie",
        "lat": 32.9146539,
        "name": "Boba Latte",
        "phone": "(858) 564-8336",
        "price": "4.99",
        "rating": 4.2,
        "review": "Amazing!!",
        "type": "Boba"
      },
      {
        "_id": "A2vMkcwNPRpjfavwf",
        "address": "1402 S Priest Dr, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Phill",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FD052C9CE-2F7C-4060-A329-FCDB9BEDF458.jpeg?alt=media&token=7834860d-9730-4426-b51a-2a15c186e102",
        "ingredients": "Spicy grilled chicken sandwich, bacon, pepperjack cheese, lettuce, tomato, chipotle mayo. Pictured with no tomato. In Tempe off priest and broadway",
        "instagram": "#tempe",
        "lat": 33.41293160000001,
        "name": "Spicy Chicken Sandwich ",
        "phone": "(480) 968-6612",
        "price": "$11.49",
        "rating": 4.2,
        "review": "4/5",
        "type": "Sandwich"
      },
      {
        "_id": "YdraDzAMkXvhgGnJp",
        "address": "1331 S Country Club Dr, Mesa, AZ 85210, USA",
        "appAdd": true,
        "companyName": "QUicktrip country",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F68ADB98D-D9C3-4661-BCAD-C12A9BCD6176.jpeg?alt=media&token=db69833f-78a9-4d12-a4e0-50053a196e17",
        "ingredients": "A refreshing 20 ounce cold brew coffee. Order with the tablet at the counter",
        "instagram": "#mesa",
        "lat": 33.390774,
        "name": "Cold Brew Coffee",
        "phone": "(480) 733-5421",
        "price": "$1.99",
        "rating": 3.9,
        "review": "Best price",
        "type": "Coffee"
      },
      {
        "_id": "weRcvrFnKfhMkZWe2",
        "address": "1817 E Guadalupe Rd, Tempe, AZ 85283, USA",
        "appAdd": true,
        "companyName": "Habit burger",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FED0CA57E-ECCF-4D64-BB84-14B87B7C92AA.jpeg?alt=media&token=f05b86c5-1f83-497c-b2e4-5c3f0413b2d5",
        "ingredients": "GOLDEN FRIED CHICKEN Fresh, filleted chicken breast, hand-breaded with house-made seasoned flour and buttermilk, cooked to a juicy golden brown, topped with creamy, spiced red pepper sauce, lettuce, tomatoes & pickles. Pictured with no tomato",
        "instagram": "#azfood",
        "lat": 33.36285,
        "name": "Golden Fried Chicken Sandwich",
        "phone": "(480) 456-8912",
        "price": "$9.95",
        "rating": 4.4,
        "review": "4 stars",
        "type": "Fried chicken sandwich"
      },
      {

        "address": "222 E University Dr, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Original chop shop",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F5D695333-9E04-421F-9367-6DDBF423FA1D.jpeg?alt=media&token=4a7034c0-8261-48b1-8086-f6862c355150",
        "ingredients": "Kale, cucumber, celery, apple, ginger, parsley, lemon",
        "instagram": "Foodsupapp",
        "lat": 33.4222581,
        "name": "Power Green Juice",
        "phone": "(480) 307-9336",
        "price": "6.00",
        "rating": 4.4,
        "review": "Fast service and a great juice for the price",
        "type": "Juice",
        "lng": -111.93590849999998
      },
      {

        "address": "2300 Carey Ave, Cheyenne, WY 82001",
        "appAdd": true,
        "companyName": "Epic Egg Restaurants Cheyenne",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F3593FD5A-F04F-4EA7-A118-8D24BACB5508.jpeg?alt=media&token=6e986973-5183-4cb4-a144-3c6bf1a6c24b",
        "ingredients": "  tender chicken fried steak topped with our classic house recipe sausage gravy, served with 2 eggs any style, our signature rustic potatoes and whole wheat toast.",
        "instagram": "",
        "lat": 32.7157,
        "name": "CHICKEN FRIED STEAK & EGGS",
        "phone": "3076321002",
        "price": "11.25",
        "rating": 4,
        "review": "Great after race day",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1597600562045,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.epiceggrestaurants.com"
      },
      {

        "address": "930 W Broadway Rd, Tempe, AZ 85282, USA",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F07B20DD6-A777-466D-9C54-2F1E243489AB.png?alt=media&token=2755b19b-82d0-4d19-ab7a-138b416f6e3f",
        "ingredients": "The Works, lettuce, tomatoes, onions, pickles, mayo, mustard, ketchup",
        "instagram": "",
        "lat": 32.7157,
        "name": "Triple Cheeseburger",
        "phone": "4802197430",
        "price": "7.95",
        "rating": 4,
        "review": "Love this place!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1588976093602,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "companyName": "Long Island Mike's Pizza",
        "image": "c4c7508d56d60b20c700a4e9cc2ecd5f.jpeg",
        "ingredients": "Pizza Slices with Chicken, Pesto Sauce, Pepperoni, Sausage, Ricatta, Mozerella and Pizza Dough",
        "name": "Pesto Chicken and Pepperoni Sausage (2 total slices)",
        "phone": "(858) 569-7499",
        "price": 5.98,
        "type": "Pizza",
        "description": "Chicken Pesto and Pepperoni Sausage Lunch Special",
        "latitude": 32.8322612,
        "location": {
          "x": -117.1212231,
          "y": 32.8322612,
          "type": "Point"
        },
        "longitude": -117.1212231
      },
      {

        "companyName": "East Coast Pizza",
        "image": "cfba2e555e4ef3a79a37a123cb2c30a6.jpeg",
        "ingredients": "1 Pizza Slice with Pesto, Artichoke, Marinara and 1 Slice with Chicken, Bacon",
        "name": "2 Pizza Slices and Drink",
        "phone": "(619) 501-3444",
        "price": 6.99,
        "type": "Pizza",
        "description": "2 Slices of Pizza and a Drink",
        "latitude": 32.7480942,
        "location": {
          "x": -117.1609301,
          "y": 32.7480942,
          "type": "Point"
        },
        "longitude": -117.1609301
      },
      {

        "companyName": "Domo Sushi Bar & Grill",
        "image": "8a36f0ae6c756dc4ad6eb61ce05b692e.png",
        "ingredients": "Rainbow Roll Sushi with Inside Crab, Cucumber, Avocado, Spicy Tuna. Outside: 5 different kinds of fish",
        "name": "Spicy Rainbow Roll",
        "phone": "(619) 596-2882",
        "price": 12,
        "type": "Sushi Roll",
        "description": "Spicy Rainbow Roll",
        "latitude": 32.8373392,
        "location": {
          "x": -116.9876939,
          "y": 32.8373392,
          "type": "Point"
        },
        "longitude": -116.9876939
      },
      {

        "companyName": "Lucha Libre Taco Shop",
        "image": "c28ee62a945481cf5288782b1e4eeb09.png",
        "ingredients": "Steak, Shrimp & Avocado topped with Secret Chipotle Sauce & Queso Enchilado",
        "name": "Surf & Turf Tacos",
        "phone": "(619) 296-8226",
        "price": 9,
        "type": "Tacos",
        "description": "Surf & Turf Tacos",
        "latitude": 33.1239521,
        "location": {
          "x": -117.1055059,
          "y": 33.1239521,
          "type": "Point"
        },
        "longitude": -117.1055059
      },
      {

        "companyName": "Ham 'n Scram",
        "image": "0086406a35d19fe757746bb13e6ab420.jpeg",
        "ingredients": "Ham, bacon, egg, hash brown, bell pepper, onion & choice of cheese",
        "name": "The Original Breakfast Burrito",
        "phone": "(714) 899-9100",
        "price": 8.95,
        "type": "Breakfast Burrito",
        "description": "FoodsUp",
        "latitude": 33.7593468,
        "location": {
          "x": -118.0264218,
          "y": 33.7593468,
          "type": "Point"
        },
        "longitude": -118.0264218
      },
      {

        "companyName": "La Guadalajara",
        "image": "26ac04734f1e51f2dfd7b03299d12322.jpeg",
        "ingredients": "Carnitas, Onion, Cilantro, Cream, Avocado, Cheese and Hot Sauce",
        "name": "Super Carnitas Taco",
        "phone": "(415) 469-5480",
        "price": 2.5,
        "type": "Taco",
        "description": "miss.augustina",
        "latitude": 37.7218048,
        "location": {
          "x": -122.4370073,
          "y": 37.7218048,
          "type": "Point"
        },
        "longitude": -122.4370073
      },
      {

        "companyName": "Leo's Taco Shop",
        "image": "10fe0194e88b5f01c202c7e21a1aaa8a.jpeg",
        "ingredients": "Scrambled Eggs, Cheese, Potatoes, Ham, Bacon and Grilled Onions",
        "name": "California Breakfast Burrito",
        "phone": "(619) 562-0021",
        "price": 6.38,
        "type": "Burrito",
        "description": "Leo's Taco Shop",
        "latitude": 32.8556437,
        "location": {
          "x": -116.9729989,
          "y": 32.8556437,
          "type": "Point"
        },
        "longitude": -116.9729989
      },
      {

        "companyName": "Juice Crafters",
        "image": "c3ae96c247c9b91660f8c2273a344b1e.jpeg",
        "ingredients": "Apple, lemon, ginger & cayenne pepper (16 oz)",
        "name": "Alkaline Tonic #13",
        "phone": "(619) 231-4329",
        "price": 7.99,
        "type": "Juice",
        "description": "Juice Crafters",
        "latitude": 32.7235376,
        "location": {
          "x": -117.1685919,
          "y": 32.7235376,
          "type": "Point"
        },
        "longitude": -117.1685919
      },
      {

        "companyName": "Tajima Ramen House Convoy",
        "image": "10da3668ec6970d744a3ba46ad465ce6.jpeg",
        "ingredients": "Tonkotsu soup based mixed with special sesame paste, pork or chicken chashu, ground pork, bean sprouts, 1/2 ramen egg, chives & fried garlic. Recommended with fat noodle",
        "name": "Spicy Sesame Ramen",
        "phone": "(858) 576-7244",
        "price": 10.5,
        "type": "Ramen",
        "description": "Tajima",
        "latitude": 32.8255416,
        "location": {
          "x": -117.1543697,
          "y": 32.8255416,
          "type": "Point"
        },
        "longitude": -117.1543697
      },
      {

        "companyName": "Trujillo's Taco Shop",
        "image": "3813a5ea752bd135303c73ff29e5bcbc.jpeg",
        "ingredients": "Bacon, Ham, Eggs, Fries, Cheese & Sour Cream",
        "name": "#8 Breakfast Burrito",
        "phone": "(619) 583-4182",
        "price": 7.2,
        "type": "Breakfast Burrito",
        "description": "FoodsUp",
        "latitude": 32.7712019,
        "location": {
          "x": -117.0695631,
          "y": 32.7712019,
          "type": "Point"
        },
        "longitude": -117.0695631
      },
      {

        "companyName": "Lofty Coffee",
        "image": "cca3074707a4cb8483d2146e167a5eec.jpeg",
        "ingredients": "Iced Espresso Shots over Ice",
        "name": "Iced American Coffee",
        "phone": "(760) 230-6747",
        "price": 2.75,
        "type": "Iced Coffee",
        "description": "Iced Americano Coffee",
        "latitude": 32.7220998,
        "location": {
          "x": -117.1672365,
          "y": 32.7220998,
          "type": "Point"
        },
        "longitude": -117.1672365
      },
      {

        "companyName": "Soda and Swine",
        "image": "c4b186cd23a12befe9021d43c773f3fb.png",
        "ingredients": "Meatballs, Bacon, Mushroom Cream, Jalapeno, Red Pepper, Parmesan",
        "name": "Dirty Fries",
        "phone": "(619) 610-9168",
        "price": 9,
        "type": "Fries",
        "description": "marvelousmuncher",
        "latitude": 32.7627169,
        "location": {
          "x": -117.1304423,
          "y": 32.7627169,
          "type": "Point"
        },
        "longitude": -117.1304423
      },
      {

        "companyName": "Worth Takeaway",
        "image": "74428446481b0629eeadd47eac44f88e.png",
        "ingredients": "Cripsy chicken breast, house made pickles, Bibb lettuce, Sriracha Honey, Mayo, Ciabatta Bread.",
        "name": "Crispy Chicken",
        "phone": "(480) 833-2180",
        "price": 10.5,
        "type": "Chicken Sandwich",
        "description": "chomp.eat.devour",
        "latitude": 33.4154613,
        "location": {
          "x": -111.8374239,
          "y": 33.4154613,
          "type": "Point"
        },
        "longitude": -111.8374239,
        "printerId": "NA"
      },
      {

        "address": "1050 W Valencia Dr, Fullerton, CA 92833, USA",
        "appAdd": true,
        "companyName": "ziller",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7231.JPG?alt=media&token=ec9cd454-02f9-444a-8651-51d46e865339",
        "ingredients": "tomato sauce, eggs, spices, bacon + bread",
        "instagram": "",
        "lat": 33.86627509999999,
        "name": "Shakshouka",
        "phone": "(714) 626-2122",
        "price": "11",
        "rating": 4.1,
        "review": "I crave this all the time. It is too good. I don't really go out for breakfast but if I do I come here! Highly recommend.",
        "type": "brunch, breakfast",
        "lng": -117.94271830000002,
        "insertDate": 1571345921157
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taq",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F_Chips%C2%A0%26%20Guacamole.png?alt=media&token=c3308a4b-5ba0-4b4b-b1b7-5f724df94c61",
        "ingredients": "Chips & Guacamole",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Chips & Guacamole",
        "phone": "(714) 702-5592",
        "price": "$5",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578541662885
      },
      {

        "address": "149 S Farmer Ave, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Culinary dro",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FB624AF11-EC22-4F4C-AE8A-A3C06EE1CBC5.jpeg?alt=media&token=2a597d7e-a5d5-4860-975c-ed28aa6b5d77",
        "ingredients": "Tavern ham, bacon, havarti cheese, lettuce, tomato and mayo.  Pictured with no tomato or mayo. Served with French Fries.",
        "instagram": "",
        "lat": 33.4289584,
        "name": "Grilled Chicken Club Sandwich",
        "phone": "(480) 240-1601",
        "price": "13.50",
        "rating": 4.399999999999999,
        "review": "Nice grilled chicken patty with think bacon.  The fries were great!",
        "type": "Lunch or Dinner",
        "lng": -111.94395850000001,
        "insertDate": 1572040685458
      },
      {

        "address": "10230 Riverside Dr, Parker, AZ 85344, USA",
        "appAdd": true,
        "companyName": "Mi Tierra Mexican Restaurant",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FEBE24E2C-6503-4400-83C2-2A514A22DF6E.jpeg?alt=media&token=883ba832-4edb-408e-8f47-517f5e651e21",
        "ingredients": "Beans, Rice, Cheese and Chorizo",
        "instagram": "",
        "lat": 32.7157,
        "name": "Chorizo BRC Breakfast Burrito",
        "phone": "9286675954",
        "price": "8.99",
        "rating": 4,
        "review": "This place is great! Best to call ahead",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1597260562023,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": ""
      },
      {

        "address": "2323 N Scottsdale Rd, Scottsdale, AZ 85257, USA",
        "appAdd": true,
        "companyName": "Salad ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F8D382E2E-3425-422D-99ED-7C419D66516F.jpeg?alt=media&token=3bbd775e-279c-4d28-b515-6911986cd4c9",
        "ingredients": "ANTIPASTO  $5.74  Salami, Marinated Artichoke Hearts, Pepperoncini, Fresh Mozzarella, Red Onions, Organic Tomatoes, Kalamata Olives and Romaine GF  380 CAL | 11G SAT FAT | 25G PROTEIN | 16G CARBS | 6G FIBER Paired with Red Wine Vinaigrette (190 CAL) GF DF V",
        "instagram": "",
        "lat": 33.4739401,
        "name": "Antipasto Salad",
        "price": "5.74",
        "rating": 4.5,
        "review": "7/10. Love this restaurant. Always fast, healthy and a great price ",
        "type": "Lunch",
        "lng": -111.92569479999997,
        "insertDate": 1577736200172,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "1755 E Broadway Road, Tempe, AZ, 85282",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F90713A94-3488-4C75-A253-8A0673F5F353.jpeg?alt=media&token=120d19a0-0bab-4e50-81a6-84f279e60161",
        "ingredients": "Broiled Polish Sausage in a bun with your choice of toppings",
        "instagram": "",
        "lat": 32.7157,
        "name": "Polish Dog",
        "phone": "4809686678",
        "price": "4.79",
        "rating": 4,
        "review": "Great dog joint",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1585947826675,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "Taqueria guerrer",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F888649D1-EBBC-4480-AA6F-1A1873FB843D.jpeg?alt=media&token=17b06588-d114-4d0c-98e5-dca50b6bad3e",
        "ingredients": "Deep fried chips, green sauces, 3 eggs, lettuce, tomato, cheese, sour cream and served with a side of beans and rice. ",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Chilaquiles Verde",
        "phone": "(714) 702-5592",
        "price": "11.00",
        "rating": 4,
        "review": "8.5/10 \uD83D\uDD25",
        "type": "Breakfast or Brunch",
        "lng": -118.02520670000001,
        "insertDate": 1577895373022,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "1600 S Azusa Ave Unit 178, City of Industry, CA 91748, USA",
        "appAdd": true,
        "companyName": "Haidilao",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_1257.JPG?alt=media&token=fd7e2052-b661-4efb-8837-4cccb35086a0",
        "ingredients": "Fried pork, ketchup",
        "instagram": "",
        "lat": 33.99448759999999,
        "name": "Sichuan Crispy Pork",
        "phone": "(860) 266-6666",
        "price": "12.98",
        "rating": 4.4,
        "review": "Everyone gets this so if you like pork this would be the perfect snack!",
        "type": "appetizer, lunch, dinner",
        "lng": -117.92693730000002,
        "insertDate": 1578366088858,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {
        "_id": "QfMFqbmA9uiW7GWqY",
        "address": "3220 E Baseline Rd #134, Phoenix, AZ 85042, USA",
        "appAdd": true,
        "companyName": "Filibertos",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F705012C4-21D9-43B5-BAB8-7B8A17F3055C.jpeg?alt=media&token=57ea5c07-1a89-4aa1-8b43-57522ffe7d2f",
        "ingredients": "Breakfast burrito with bacon, eggs and cheese \uD83E\uDD53. Big salsa bar and food comes with chips",
        "instagram": "#laveen ",
        "lat": 33.3788568,
        "name": "Bacon Breakfast Burrito",
        "phone": "(602) 438-9193",
        "price": "$6.52",
        "rating": 4.2,
        "review": "4",
        "type": "Burrito"
      },
      {
        "_id": "SbRk7aQgWuL5ynSK8",
        "address": "1775 W University Dr Ste 130, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Arizona sandwi",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F6A091747-7D4E-447A-9022-CC02E5537538.jpeg?alt=media&token=595d23c1-8037-49ec-b44e-33b4fef69e88",
        "ingredients": "Espresso on ice with soy milk -jmosshol",
        "instagram": "@j_mosssy",
        "lat": 33.4214524,
        "name": "Iced Mocha w/ Soy Milk",
        "phone": "(480) 829-7827",
        "price": "$4.00",
        "rating": 4.5,
        "review": "Great balance",
        "type": "Iced Coffee"
      },
      {

        "address": "1050 W Valencia Dr, Fullerton, CA 92833, USA",
        "appAdd": true,
        "companyName": "ziller",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7230.JPG?alt=media&token=57578ea0-9a70-4e5e-96e0-553672e6ce2a",
        "ingredients": "egg, fried rice, tomato sauce",
        "instagram": "",
        "lat": 33.86627509999999,
        "name": "Omurice",
        "phone": "(714) 626-2122",
        "price": "12",
        "rating": 4.1,
        "review": "Perfect if you want something more filling early in the day. So good, all the flavors combine so well!",
        "type": "lunch, brunch",
        "lng": -117.94271830000002,
        "insertDate": 1571346878600
      },
      {

        "companyName": "Ferny's Mexican Grill",
        "image": "477dfc59b8f46cb1bdc7d419d938e007.png",
        "ingredients": "Steak, guacamole, sour cream, nacho cheese, and hot cheetos",
        "name": "Hot Cheeto Burrito",
        "phone": "(619) 562-1343",
        "price": 7,
        "type": "Burrito",
        "description": "Hot Cheeto Burrito",
        "latitude": 32.8387127,
        "location": {
          "x": -116.9729249,
          "y": 32.8387127,
          "type": "Point"
        },
        "longitude": -116.9729249
      },
      {

        "companyName": "Islands Mission Valley",
        "image": "18f9d44e8af646ecb0b8dfe91468ef5b.png",
        "ingredients": "Fresh pineapple, teriyaki sauce, lettuce, tomato, onion, swiss, mayo, fries",
        "name": "Hawaiian Burger with Fries",
        "phone": "6196402727",
        "price": 12.49,
        "type": "Burger",
        "description": "Swiss Cheese Burger with Fresh Pineapple and Fries",
        "latitude": 32.7816645,
        "location": {
          "x": -117.1304171,
          "y": 32.7816645,
          "type": "Point"
        },
        "longitude": -117.1304171
      },
      {

        "companyName": "La Taqueria",
        "image": "272465eecc9857d9bc6aa0ab84929ef2.jpeg",
        "ingredients": "Carnitas, Onion, Cilantro and Hot Sauce",
        "name": "Carnitas Tacos",
        "phone": "(415) 285-7117",
        "price": 5.85,
        "type": "Tacos",
        "description": "miss.augustina",
        "latitude": 37.7218048,
        "location": {
          "x": -122.4370073,
          "y": 37.7218048,
          "type": "Point"
        },
        "longitude": -122.4370073
      },
      {

        "companyName": "The Original Sab-E-Lee",
        "image": "f66861624256ff3fd29caaa13b07effa.png",
        "ingredients": "Beef W/ Ground Peanuts, Eggs, and Bean Sprouts",
        "name": "Beef Pad Thai",
        "phone": "(858) 850-6868",
        "price": 8.5,
        "type": "Pad Thai",
        "description": "Sab-E-Lee",
        "latitude": 32.7844085,
        "location": {
          "x": -117.1709351,
          "y": 32.7844085,
          "type": "Point"
        },
        "longitude": -117.1709351
      },
      {

        "companyName": "Urth Caffe",
        "image": "cc2d1a4d397e272caaa4ff73de59c810.png",
        "ingredients": "A classic Rueben sandwich with all natural pastrami with Russian dressing, braised green cabbage, imported Swiss cheese on thick slices of marble bread grilled golden brown. Served with a locally grown mixed greens salad and cornichon pickles",
        "name": "The \"New Yorker\" Sandwich",
        "phone": "(626) 844-4644",
        "price": 13.25,
        "type": "Rueben Sandwich",
        "description": "Urth Caffe",
        "latitude": 34.145607,
        "location": {
          "x": -118.1381916,
          "y": 34.145607,
          "type": "Point"
        },
        "longitude": -118.1381916
      },
      {

        "companyName": "The Wrap Shack",
        "image": "49065e5a26bba906a4dec81af08f15ba.jpeg",
        "ingredients": "Oven Roasted Turkey, Ortega Chiles, Pepper Jack, Avocado, Lettuce, Tomato and House Spread",
        "name": "Baja Turkey Wrap",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "Turkey Wrap",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "Nishiki Ramen",
        "image": "556c6c11d6783d89b2958523e19b0f6a.png",
        "ingredients": "White Rice, Minced Beef, Green Onion, Special Sauce",
        "name": "Beef Minced Cashu Bowl",
        "phone": "(858) 987-0222",
        "price": 5.8,
        "type": "Bowl",
        "description": "sdfoodietude",
        "latitude": 32.8196799,
        "location": {
          "x": -117.1500737,
          "y": 32.8196799,
          "type": "Point"
        },
        "longitude": -117.1500737
      },
      {

        "companyName": "Roadrunner Resort Bar",
        "image": "743fd2b16e30312580b850e5b94c8551.jpeg",
        "ingredients": "Sourdough bread, turkey, cheddar cheese, add ortega chili.  Comes with fries or upgrade to onion rings for $1.00.",
        "name": "Turkey Melt with Ortega Chili",
        "phone": "(928 667-4252",
        "price": 7.99,
        "type": "Melt Sandwich",
        "description": "Parker, AZ",
        "latitude": 34.2313021,
        "location": {
          "x": -114.1871835,
          "y": 34.2313021,
          "type": "Point"
        },
        "longitude": -114.1871835,
        "printerId": "NA"
      },
      {

        "address": "1537 W Broadway Rd Suite 101, Tempe, AZ 85284, USA",
        "appAdd": true,
        "companyName": "The buffalo ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F36D240FF-1C37-4A19-9BC1-52B9F1C26F7F.jpeg?alt=media&token=2e211111-036d-4124-b458-bff30d105280",
        "ingredients": "This is a boneless buffalo wing burrito with French Fries!  Select your sauce (picture with Original Hot) and enjoy this awesome meal. This was the Tempe location posted by FoodsUp.",
        "instagram": "Foodsup",
        "lat": 33.4072299,
        "name": "Buffalo Wing Cali Burrito",
        "phone": "(480) 534-1533",
        "price": "5.95",
        "rating": 4.4,
        "review": "8/10 love it every time",
        "type": "Wings in a burrito",
        "lng": -111.96567349999998
      },
      {

        "address": "1439 s 4th Ave, Tucson, AZ 85713",
        "appAdd": true,
        "companyName": "GM 86 Kitchen",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F95C3D06A-44EB-467B-BEF4-EC81FCE3BC76.jpeg?alt=media&token=56e3b0c4-8b89-40b8-ac1d-303a9ef167c1",
        "ingredients": "100% Angus Beef, American cheese, lettuce, red onions, chipotle aioli and bacon on a brioche bun. Served with sweet potato fries",
        "instagram": "",
        "lat": 32.7157,
        "name": "86 Cheeseburger",
        "phone": "5204656161",
        "price": "13.00",
        "rating": 4,
        "review": "Great flippin??? burger",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1607611812875,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.kitchen8six.com"
      },
      {

        "address": "601 W Rio Salado Pkwy #103, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Press ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FE732953E-2F39-47EA-9BD3-569199570A3C.jpeg?alt=media&token=c5eaef25-a7b0-471c-afe2-d2122a1efea3",
        "ingredients": "Toasted English muffin with bacon, eggs and cheese.",
        "instagram": "foodsupapp",
        "lat": 33.4302432,
        "name": "Bacon, Egg and Cheese Breakfast Sandwich",
        "phone": "(480) 794-1107",
        "price": "5.00",
        "rating": 4.5,
        "review": "Pretty big breakfast sandwich.  I will rate this a 3.8",
        "type": "Breakfast Sandwich",
        "lng": -111.94864949999999
      },
      {

        "address": "13238 Jamboree Rd, Irvine, CA 92602, USA",
        "appAdd": true,
        "companyName": "spirite",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7233.JPG?alt=media&token=ac42d6b8-701f-48e8-8af8-511d751e7542",
        "ingredients": "oolong tea, fruit tea",
        "instagram": "",
        "lat": 33.7280519,
        "name": "Tea",
        "phone": "(714) 417-9797",
        "price": "14.45",
        "rating": 4.5,
        "review": "My favorite drink would be the on left: Beauty Oriental Oolong $7.50  Super refreshing and sugar free ( perfect as is) right: Fruitea Combo $6.95. Also refreshing but there's just something so smooth about the beauty oritental I LOVE. but if you want a kick of fruit definitely recommend this one.",
        "type": "drink",
        "lng": -117.78624990000003,
        "insertDate": 1571971873351
      },
      {
        "_id": "44nAgKve2apAgiXRp",
        "address": "Crossroads Towne Center, 2990 E Germann Rd #5, Chandler, AZ 85249, USA",
        "appAdd": true,
        "companyName": "Yc ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F6A229F83-3DBC-4D2A-ACDB-41237EBF7511.jpeg?alt=media&token=2f567097-f2c4-42e6-85fe-ac625b2d8084",
        "ingredients": "All you can fit in your bowl! Pick your choice of meats, veggies and noodles. Choices are Mongolian beef, chicken, pork, shrimp (see availability), bell pepper, onion, zucchini, potato, ramen noodle and create your own spice. Large order is huge and box to take home is $0.50. Off Germann in Chandler. Comes with soda, soup and rice too. ",
        "instagram": "#chandler",
        "lat": 33.2788778,
        "name": "Large Lunch Bowl",
        "phone": "(480) 857-0371",
        "price": "$12.95",
        "rating": 4.4,
        "review": "4.3/5",
        "type": "Mongolian Food"
      },
      {
        "_id": "GzG4FHjazoZZGSiCE",
        "address": "4222 N Marshall Way, Scottsdale, AZ 85251, USA",
        "appAdd": true,
        "companyName": "Schmo",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FC134F2F7-665C-42F3-ACCE-65CE25F5EC3C.jpeg?alt=media&token=e32be84f-2b6e-4b45-b7c3-a3c6e9566ec7",
        "ingredients": "16 ounces of fresh piexoto cold brew. This is a cool co-work space/coffee bar ?????? ",
        "instagram": "#scottsdale",
        "lat": 33.497287,
        "name": "Cold Brew 16 oz",
        "phone": "(480) 999-2822",
        "price": "$4.00",
        "rating": 4.8,
        "review": "3.8",
        "type": "Coffee"
      },
      {
        "_id": "YHCe3z8eC7FHYfCLg",
        "address": "2014 N 7th St, Phoenix, AZ 85006, USA",
        "appAdd": true,
        "companyName": "Nami ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Fimage.jpg?alt=media&token=d97292ac-d081-4c53-b5a8-f25e5bf1588a",
        "ingredients": "12 ounces cold brew coffee off 7th Street in Central Phoenix. ",
        "instagram": "#foodie",
        "lat": 33.469964,
        "name": "Small Cold brew",
        "phone": "(602) 258-6264",
        "price": "$3.00",
        "rating": 4.7,
        "review": "Small, quaint shop",
        "type": "Coffee"
      },
      {
        "_id": "ZvwcgauJzocCN4rMh",
        "address": "920 E Playa Del Norte Dr, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "In n out",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FD5DE6EC1-2551-4A58-8910-1EE1C13DD511.jpeg?alt=media&token=d91e80e1-9d9a-42b4-b4ef-a79e43182dd2",
        "ingredients": "Three beef patties, triple cheese, grilled onion, chopped chili peppers, lettuce and spread. Near ASU",
        "instagram": "#asu",
        "lat": 33.434903,
        "name": "3x3 with Chopped Chili???s \uD83C\uDF36 ",
        "phone": "(800) 786-1000",
        "price": "$5.15",
        "rating": 4.6,
        "review": "4.4",
        "type": "Triple cheeseburger "
      },
      {

        "address": "1561 N Cooper Road #101, Gilbert, AZ 85233",
        "appAdd": true,
        "companyName": "Frankie???s Famous Pizza",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FA04EE5DC-D1E5-470A-B61E-70C9ADDA0668.jpeg?alt=media&token=0a12f8fc-a442-4a21-9217-99a7c2ae67ec",
        "ingredients": "Huge slice of pizza with pepperoni, cheese and marinara.  ",
        "instagram": "",
        "lat": 32.7157,
        "name": "Pepperoni Pizza Slice",
        "phone": "4805077777",
        "price": "3.50",
        "rating": 4,
        "review": "Love this pizza shop! Crust is thin",
        "type": "Pizza Slice",
        "lng": 117.1611,
        "insertDate": 1597433853389,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.frankiesfamouspizza.com"
      },
      {

        "address": "1830 S Central Ave, Phoenix, AZ 85004, USA",
        "appAdd": true,
        "companyName": "Conedor",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FC240B147-FEED-4864-BEE3-A30D50A5AF9C.jpeg?alt=media&token=b1c073a4-c675-442f-a7fc-84edaa5cf8f1",
        "ingredients": "Two green chili enchiladas served covered in cheese and served with beans and rice",
        "instagram": "",
        "lat": 33.4294045,
        "name": "Green Chile Chicken Enchiladas with Cheese",
        "phone": "(602) 253-8299",
        "price": "9.50",
        "rating": 4.5,
        "review": "7.4/10. This is a great lunch and fair price. Food tasted great and service was perfect. ",
        "type": "Lunch",
        "lng": -112.07417429999998,
        "insertDate": 1570735692062
      },
      {

        "address": "1775 W University Dr Ste 130, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Arizona sand",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FCA700F18-00EB-41EA-B396-7E9C1B916CC1.jpeg?alt=media&token=801dddb0-6454-4372-9536-3e8d5c2251ed",
        "ingredients": "White or wheat bread with roast beef, turkey, bacon and avocado with everything on it no tomato and no mayo. ",
        "instagram": "",
        "lat": 33.4214524,
        "name": "Phoenix Sandwich",
        "phone": "(480) 829-7827",
        "price": "7.95",
        "rating": 4.5,
        "review": "6/10. Quick service and a consistent sandwich ",
        "type": "Lunch",
        "lng": -111.96920009999997,
        "insertDate": 1577996413089,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "11130 Del Amo Blvd, Lakewood, CA 90715, USA",
        "appAdd": true,
        "companyName": "Chinitos",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F3F89BD58-6111-4E9D-AF8F-F953C1CA8F87.jpg?alt=media&token=87929a47-8224-478c-a575-cd60e682b3a5",
        "ingredients": "cheese, pasta",
        "instagram": "",
        "lat": 33.8455665,
        "name": "Mac & Cheese",
        "phone": "(562) 403-0343",
        "price": "9",
        "rating": 4.7,
        "review": "Whenever I want some Mac and cheese I think of Chinitos!! Definitely worth my carb up days. IG:@koreanketofoodie",
        "type": "lunch, dinner, snack, appetizer",
        "lng": -118.09628229999998,
        "insertDate": 1578365377245,
        "userId": "hFhC4c47RKWGhcsZW"
      },
      {

        "address": "81-101 London Bridge Rd, Lake Havasu City, AZ 86403, USA",
        "appAdd": true,
        "companyName": "In n out lake ",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F91DAAEB2-5F25-4CF6-80C2-E01E679B1B3E.jpeg?alt=media&token=9d081b63-9ef6-42a3-b73d-ab9c7ba14bd3",
        "ingredients": "Double double with two slices of cheese and a 3x3 animal style with chopped chili???s. Chopped chili???s are \uD83D\uDD25",
        "instagram": "#lakehavasu",
        "lat": 34.4742949,
        "name": "Double Double and 3x3 ",
        "phone": "(800) 786-1000",
        "price": "8.30",
        "rating": 4.6,
        "review": "4.2",
        "type": "Cheeseburger",
        "lng": -114.34733890000001
      },
      {

        "companyName": "Leo's Taco Shop",
        "image": "0888db79d0eda5bd882ec2fa2c9849c3.jpeg",
        "ingredients": "Carne Asada, Guacamole, Cheese, French Fries, Flour Tortilla",
        "name": "California Burrito",
        "phone": "(619) 562-0021",
        "price": 6.45,
        "type": "Burrito",
        "description": "Leo's Taco Shop",
        "latitude": 32.8556437,
        "location": {
          "x": -116.9729989,
          "y": 32.8556437,
          "type": "Point"
        },
        "longitude": -116.9729989
      },
      {

        "companyName": "Napizza",
        "image": "904b2c20a2c3eb6815be807525640a64.jpeg",
        "ingredients": "1 slice of Gluten Free Pepperoni, Sausage and Jalape??o with one slice BBQ Chicken Pizza",
        "name": "2 Slices of Pizza",
        "phone": "(619) 696-0802",
        "price": 11,
        "type": "Pizza",
        "description": "2 Slices of Pizza",
        "latitude": 32.7232141,
        "location": {
          "x": -117.1684753,
          "y": 32.7232141,
          "type": "Point"
        },
        "longitude": -117.1684753
      },
      {

        "companyName": "Mom's & Dom's Pizza",
        "image": "541920d514300a3ec7c716ea1f4bec03.jpeg",
        "ingredients": "Pepperoni Pizza Slice, Ranch Salad and a Drink",
        "name": "Pepperoni Pizza Slice, a Salad And Drink",
        "phone": "(858) 292-1511",
        "price": 6.5,
        "type": "The Daily Special",
        "description": "The Daily Special",
        "latitude": 32.8334929,
        "location": {
          "x": -117.1634356,
          "y": 32.8334929,
          "type": "Point"
        },
        "longitude": -117.1634356
      },
      {

        "companyName": "Chili's Bar & Grill",
        "image": "a11bc014e3fed2aa1705edf41f55dedb.png",
        "ingredients": "Cheeseburger with Cheddar, Bacon, Pickles, Lettuce, Tomato, Red Onion & Chili's Signature Sauce Served with French Fries.",
        "name": "Classic Bacon Cheeseburger",
        "phone": "(619) 258-5811",
        "price": 10.19,
        "type": "Bacon Cheeseburger",
        "description": "Bacon Cheeseburger",
        "latitude": 32.8390361,
        "location": {
          "x": -116.9819251,
          "y": 32.8390361,
          "type": "Point"
        },
        "longitude": -116.9819251
      },
      {

        "companyName": "Banbu Sushi",
        "image": "7e8fc5fe3eabac2f62bf1c4cf4e6ab11.png",
        "ingredients": "Sushi Roll with Shrimp Tempera, Avocado, Cucumber Roll, Topped with Spicy Crab Salad, Eel Sauce, Jalapeflo",
        "name": "After Burner Roll",
        "phone": "(619) 589-0071",
        "price": 13,
        "type": "Sushi Roll",
        "description": "Sushi Roll",
        "latitude": 32.7801453,
        "location": {
          "x": -117.014163,
          "y": 32.7801453,
          "type": "Point"
        },
        "longitude": -117.014163
      },
      {

        "companyName": "Tabu Sushi Bar",
        "image": "b2afb2c8e5289b8f63888809e1be8af8.png",
        "ingredients": "Sushi Roll with Shrimp Tempura, Avocado, Cream Cheese, Wrapped in Shrimp",
        "name": "Big Ed Roll",
        "phone": "(619) 201-8228",
        "price": 17,
        "type": "Sushi Roll",
        "description": "Sushi Roll",
        "latitude": 32.8374945,
        "location": {
          "x": -116.9940765,
          "y": 32.8374945,
          "type": "Point"
        },
        "longitude": -116.9940765
      },
      {

        "companyName": "Islands Mission Valley",
        "image": "9c6f26951ba1a6feefb09eec5b07ae7b.png",
        "ingredients": "Corn tortillas, ,w/premium fried fish, chipotle-white sauce, cabbage, cilantro, diced tomatoes, pico de gallo,ranchero beans, Cotija cheese",
        "name": "2 Fish Tacos",
        "phone": "6196402727",
        "price": 11.64,
        "type": "Tacos",
        "description": "2 Fried Fish Tacos w/ Ranchero Beans",
        "latitude": 32.7816645,
        "location": {
          "x": -117.1304171,
          "y": 32.7816645,
          "type": "Point"
        },
        "longitude": -117.1304171
      },
      {

        "companyName": "Katsu Cafe",
        "image": "bef6ce30064242710ac29a5327ab48a7.jpeg",
        "ingredients": "Ramen, Grilled Chicken, Steamed Bell Pepper, Onions, Green Onion, Carrots, Lettuce, Zuchinni",
        "name": "Banzai Ramen",
        "phone": "(858) 560-8859",
        "price": 8.09,
        "type": "Ramen",
        "description": "Chicken and Veggie Ramen",
        "latitude": 32.8320588,
        "location": {
          "x": -117.1606663,
          "y": 32.8320588,
          "type": "Point"
        },
        "longitude": -117.1606663
      },
      {

        "companyName": "Ham 'n Scram",
        "image": "2d4340f1c7776ea5794bd48312570ff9.jpeg",
        "ingredients": "Ham, Bacon, Egg, Hasbrowns, Cheese, Bell Peppers, Onion",
        "name": "The Original Breakfast Burrito",
        "phone": "(714) 899-9100",
        "price": 8.5,
        "type": "Breakfast Burrito",
        "description": "Ham & Egg Burrito",
        "latitude": 33.7593468,
        "location": {
          "x": -118.0264218,
          "y": 33.7593468,
          "type": "Point"
        },
        "longitude": -118.0264218
      },
      {

        "companyName": "Alberto's Mexican Food",
        "image": "73898500289426c204652a2a8f9f38ac.png",
        "ingredients": "Carne Asada, Grilled Shrimp, Chipotle Sauce, French Fries, Cilantro, Onion",
        "name": "Surf n Turf Cali Burrito",
        "phone": "(951) 340-1467",
        "price": 8.5,
        "type": "California Burrito",
        "description": "burritolist",
        "latitude": 37.7218048,
        "location": {
          "x": -122.4370073,
          "y": 37.7218048,
          "type": "Point"
        },
        "longitude": -122.4370073
      },
      {

        "companyName": "Chaba Thai Kitchen",
        "image": "b23ff0c2551a8066d7f427f032aa687f.png",
        "ingredients": "Grilled Beef seasoned in lime juice and mixed with red onion, cilantro, cucumbers, tomatoes, and topped with Thai Chili Paste",
        "name": "Beef Salad",
        "phone": "(858) 503-7777",
        "price": 9.95,
        "type": "Salad",
        "description": "Chaba Thai Chicken",
        "latitude": 32.8331843,
        "location": {
          "x": -117.1499945,
          "y": 32.8331843,
          "type": "Point"
        },
        "longitude": -117.1499945
      },
      {

        "companyName": "The Wrap Shack",
        "image": "6836cbafbbbe916db07ce19dbac8fee0.jpeg",
        "ingredients": "Oven Roasted Turkey, Bacon, Egg, Avocado, Cucumbers, Blue Cheese, Lettuce, Tomato, Ranch Dressing",
        "name": "The California Cobb Wrap",
        "phone": "(619) 332-8319",
        "price": 8.45,
        "type": "California Wrap",
        "description": "The Wrap Shack",
        "latitude": 32.8480895,
        "location": {
          "x": -116.9838247,
          "y": 32.8480895,
          "type": "Point"
        },
        "longitude": -116.9838247
      },
      {

        "companyName": "Cruiser Taco",
        "image": "74e1855b31edf9826eb7b34cfd9c9b80.png",
        "ingredients": "Citrus-marinated pollo asado, avo, diced onions, cilantro, lettuce and chipotle crema",
        "name": "Big Chicken",
        "phone": "(619) 564-7178",
        "price": 3.49,
        "type": "Taco",
        "description": "Cruiser Taco",
        "latitude": 32.755586,
        "location": {
          "x": -117.1323806,
          "y": 32.755586,
          "type": "Point"
        },
        "longitude": -117.1323806
      },
      {

        "companyName": "Coffee Corner Santee",
        "image": "94a7ae53a4c03d72c53b8cd41d0c8717.jpeg",
        "ingredients": "Organic Acai Sorbet, Granola, Coconut, Honey/Agave, Strawberries, Blueberries with added Peanut Butter",
        "name": "Acai Bowl with Peanut Butter",
        "phone": "(619) 996-9007",
        "price": 6.5,
        "type": "Acai Bowl",
        "description": "Acai Bowl with Peanut Butter",
        "latitude": 32.8413236,
        "location": {
          "x": -116.985885,
          "y": 32.8413236,
          "type": "Point"
        },
        "longitude": -116.985885
      },
      {

        "companyName": "Taqueria Guerrro Style",
        "image": "1f79e246bf92306dea04974d0dae10a6.jpeg",
        "ingredients": "Flour Tortilla, Carne Asada, Cilantro, Onion, Guacamole, Green Sauce",
        "name": "Naked California Burrito",
        "phone": "(714) 702-5592",
        "price": 7.5,
        "type": "California Burrito",
        "description": "Foodsup",
        "latitude": 33.7581107,
        "location": {
          "x": -118.0251995,
          "y": 33.7581107,
          "type": "Point"
        },
        "longitude": -118.0251995
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taqueria",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Fmenudo.png?alt=media&token=22ad48fa-e9d5-4e7e-b54e-5eeadecdab3e",
        "ingredients": "Tripe, lots of spices, and lots of hot sauce.",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Menudo",
        "phone": "(714) 702-5592",
        "price": "10",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578550548508
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683",
        "appAdd": true,
        "companyName": "Taqueria Guerrero Style",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F7E01C1BD-6429-4B9C-9AAA-A40099DF908C.jpeg?alt=media&token=68f8b7c1-544f-4c29-8b15-be138d06c3f3",
        "ingredients": "Birria Tacos with the fixings.  Price is for one taco",
        "instagram": "",
        "lat": 32.7157,
        "name": "Birria Tacos",
        "phone": "7147025592",
        "price": "3.50",
        "rating": 5,
        "review": "Great food always!",
        "type": "Tacos",
        "lng": 117.1611,
        "insertDate": 1595879995443,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.taqueriaguerrerostyle.com"
      },
      {

        "address": "5365 Alton Pkwy Ste M, Irvine, CA 92604, USA",
        "appAdd": true,
        "companyName": "hui la",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0761.JPG?alt=media&token=72df407f-fb68-481f-a954-c9ddc5abe9ac",
        "ingredients": "passion fruit, mango, jelly",
        "instagram": "",
        "lat": 33.67131769999999,
        "name": "cheat meal, drink, passionfruit drink",
        "phone": "(949) 418-7989",
        "price": "7.50",
        "rating": 4.5,
        "review": "This is a unique drink, different crunch to the seeds than basil seeds but the mango and the passionfruit is a good combination !",
        "type": "snack, asian dessert, tawainese dessert",
        "lng": -117.78875310000001,
        "insertDate": 1576025782233
      },
      {

        "address": "5966 Westminster Blvd, Westminster, CA 92683, USA",
        "appAdd": true,
        "companyName": "taq",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FChile%20Relleno.png?alt=media&token=a2b802af-f06f-4e10-beec-0cf695d6a5b2",
        "ingredients": "Chile pasilla filled with cheese, rice, and beans on the side. ",
        "instagram": "",
        "lat": 33.7580768,
        "name": "Chile Relleno",
        "phone": "(714) 702-5592",
        "price": "10.50",
        "rating": 4,
        "review": "Amazing Mexican Food",
        "type": "Lunch and Dinner",
        "lng": -118.0252067,
        "insertDate": 1578541730936
      },
      {

        "address": "14031 Jeffrey Rd, Irvine, CA 92620, USA",
        "appAdd": true,
        "companyName": "redstart",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0847.JPG?alt=media&token=2e3225e7-b77a-4333-aa07-dd4a0df2e5fb",
        "ingredients": "Jade Tea, fresh pineapple juice, hint of cherry and housemate syrup",
        "instagram": "",
        "lat": 33.696371,
        "name": "Tea, Boba",
        "phone": "(949) 336-7527",
        "price": "5.25",
        "rating": 4,
        "review": "If you like the ingredient you see listed I totally recommend this drink. Super tasty and refreshing especially on a hot day!",
        "type": "snack",
        "lng": -117.76272799999998,
        "insertDate": 1576025381911
      },
      {
        "_id": "GRdmzpWychqwSr5s9",
        "address": "7135 E Camelback Rd #195, Scottsdale, AZ 85251, USA",
        "appAdd": true,
        "companyName": "Olive an",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F55AB03E5-396C-4FBF-86D2-578FC7B886F0.jpeg?alt=media&token=f818ec8a-b9f5-4eea-a29f-8cec9891bfb1",
        "ingredients": "Bread, egg, vanilla, cinnamon sugar, berry compote",
        "instagram": "#cinnamonfrenchtoast",
        "lat": 33.50018980000001,
        "name": "Cinnamon French Toast",
        "phone": "(480) 751-2200",
        "price": "11.00",
        "rating": 4.5,
        "review": "Very delicious, tasted just like a churro. Really sweat and high in sugar. ",
        "type": "French Toast"
      },
      {

        "address": "1402 S Priest Dr, Tempe, AZ 85281, USA",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FF16DA092-FDAC-4412-9662-F03D5416C5F2.jpeg?alt=media&token=aaac18bf-2102-42cd-861e-308b1dd879bc",
        "ingredients": "Romaine lettuce, Caesar dressing, grilled or fried chicken, croutons, Parmesan cheese",
        "instagram": "",
        "lat": 32.7157,
        "name": "Chicken Caesar Salad",
        "phone": "4809686612",
        "price": "8.29",
        "rating": 3,
        "review": "Good",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1589238065206,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "8711 E Pinnacle Peak Road, Scottsdale, AZ 85255",
        "appAdd": true,
        "companyName": "Pinnacle Peak Gas Station",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F7C67A18F-31C2-462D-9DD3-F3527C63BDE5.jpeg?alt=media&token=b6c94dfb-cb15-49ea-9d48-3ce8b28f3cb7",
        "ingredients": "\uD83D\uDD25 \uD83C\uDF55 by the slice pepperoni pizza ",
        "instagram": "",
        "lat": 32.7157,
        "name": "Pepperoni Pizza",
        "phone": "4805130707",
        "price": "1.89",
        "rating": 3,
        "review": "You know it???s good when it???s packed with construction workers. Great food",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1593749676941,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "www.pinnaclepeaklocal.com"
      },
      {

        "address": "20265 Valley Blvd Suite Q, Walnut, CA 91789, USA",
        "appAdd": true,
        "companyName": "aroma cr",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_7356.JPG?alt=media&token=6d56ed5c-bf59-4cf9-9a6b-1d622c3fe74a",
        "ingredients": "mousse, crust, coffee flavor, raspberry flavor, lemon flavor ",
        "instagram": "",
        "lat": 34.0094261,
        "name": "Dessert Mousse",
        "phone": "(909) 869-0001",
        "price": "10",
        "rating": 4.6,
        "review": "This mousse trio is definitely a cheat snack! but its light and not too sweet for my taste which I love. There is lemon, coffee, gooey raspberry flavors but I personally loved the raspberry and coffee together in one bite! ",
        "type": "snack, dessert",
        "lng": -117.86041740000002,
        "insertDate": 1571685597381
      },
      {

        "address": "920 E University Dr D-101, Tempe, AZ 85281",
        "appAdd": true,
        "companyName": "Sushi 101",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F75C1DA43-E770-4C47-8AC0-23A0B7EE8274.jpeg?alt=media&token=fe69e381-216f-46ef-ab0a-c07ba04b3cb5",
        "ingredients": "Cooked Unagi Eel on top and avocado, crab, cucumber inside. ",
        "instagram": "",
        "lat": 32.7157,
        "name": "Dragon Roll",
        "phone": "4803170101",
        "price": "12.00",
        "rating": 3,
        "review": "Great quick lunch spot",
        "type": "Sushi Roll",
        "lng": 117.1611,
        "insertDate": 1597440120167,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.sushi101tempe.com"
      },
      {

        "address": "1537 W Broadway Rd #105, Tempe, AZ 85282, USA",
        "appAdd": true,
        "companyName": "Master taco",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F0925AF54-6817-4A9C-B933-A88EDE95D6F0.jpeg?alt=media&token=450bd03c-58d9-42e0-92a2-c2674c78b98f",
        "ingredients": "Bacon, Sausage, Eggs, Cheese, Hashbrowns with Sour Cream.  Pictured without Sour Cream.",
        "instagram": "",
        "lat": 33.4071978,
        "name": "Hashbrown Breakfast Burrito",
        "phone": "(480) 597-4700",
        "price": "7.49",
        "rating": 5,
        "review": "This burrito was made super quick and it is the perfect fix for a greasy breakfast burrito.  ",
        "type": "Breakfast",
        "lng": -111.96546160000003,
        "insertDate": 1572628135847
      },
      {

        "address": "1408 S Higley Rd, Mesa, AZ 85206, USA",
        "appAdd": true,
        "companyName": "Black rock coffee",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F1C3C27CA-7E0F-42D9-A949-DFF1709F681A.jpeg?alt=media&token=859bd0f8-3c62-4a5e-abcd-388572a4eaa7",
        "ingredients": "\uD83D\uDD25 shots of espresso over ice. Small is 16 ounces and $2.00 each",
        "instagram": "#foodsup",
        "lat": 33.3899894,
        "name": "Iced Americano Coffee",
        "phone": "(480) 361-5677",
        "price": "2.00",
        "rating": 4.6,
        "review": "6.8",
        "type": "Coffee",
        "lng": -111.71981340000002
      },
      {

        "address": "2855 W Ray Rd #1, Chandler, AZ 85224, USA",
        "appAdd": true,
        "companyName": "Los taqui",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F6F8C3CC1-EBAE-46B1-93BE-997C65326FBB.jpeg?alt=media&token=5394a4f5-1631-4f77-88ab-6a9f3a295238",
        "ingredients": "Carne Asada, Beans, Onions, Cilantro and Salsa Fresca.  Pictured with no Salsa Fresca.",
        "instagram": "",
        "lat": 33.3199239,
        "name": "Asada Burrito",
        "phone": "(480) 264-4371",
        "price": "5.85",
        "rating": 4.5,
        "review": "The flour tortilla makes this burrito stand out. Carne Asada was great and definitely filled me up. Wish it was bigger though. ",
        "type": "Lunch or Dinner",
        "lng": -111.89050350000002,
        "insertDate": 1571946795008
      },
      {

        "companyName": "Magic Mike's Pizza",
        "image": "f773d8d14bf5abd73142fa07e036df66.jpeg",
        "ingredients": "Large Pizza with Pepperoni, Ham, Sausage, Jalape??o.  Sm $12.95 M$14.95 L$18.95",
        "name": "Meatlovers with Jalape??o",
        "phone": "(714) 898-0211",
        "price": 12.95,
        "type": "Pizza",
        "description": "Magic Mike's Pizza",
        "latitude": 33.7738077,
        "location": {
          "x": -118.0246451,
          "y": 33.7738077,
          "type": "Point"
        },
        "longitude": -118.0246451
      },
      {

        "companyName": "Panda Express",
        "image": "e95eae7368353d60d01cb5db2402882a.jpeg",
        "ingredients": "Orange Chicken, Beijing Beef, Fresh Steamed Veggies, Chow Mein",
        "name": "Two Item Entree",
        "phone": "(619) 562-1089",
        "price": 7.87,
        "type": "Chinese Food",
        "description": "Two Item Entree",
        "latitude": 32.8387166,
        "location": {
          "x": -116.9812271,
          "y": 32.8387166,
          "type": "Point"
        },
        "longitude": -116.9812271
      },
      {

        "companyName": "Tabu Sushi Bar & Grill",
        "image": "49050e2ea316fbcf34b0b5a50081a2d8.png",
        "ingredients": "Sushi Roll with Fresh Salmon, Avocado, Cream Cheese, Fried in Tempura Bater Topped w/ Spicy Mayo and Siracha",
        "name": "Rancho Roll",
        "phone": "(619) 670-8228",
        "price": 11,
        "type": "Sushi Roll",
        "description": "Racho Roll",
        "latitude": 32.740255,
        "location": {
          "x": -116.940958,
          "y": 32.740255,
          "type": "Point"
        },
        "longitude": -116.940958
      },
      {

        "companyName": "Acapulco",
        "image": "1270ddfbdc71ac19e96bc00e3b34212d.png",
        "ingredients": "A Mountain of Warm Corn Tortilla Chips with Picadillo Beef, Shredded Beef, Shredded Chicken or Carnitas, Refried Beans, Melted Jack and Cheddar Cheese, Fresh Jalapenos, Ripe Tomatoes, Sour Cream and Fresh Guacamole",
        "name": "Nachos Ultimos",
        "phone": "(714) 754-6528",
        "price": 6.99,
        "type": "Nachos",
        "description": "Acapulco",
        "latitude": 33.6688471,
        "location": {
          "x": -117.8855618,
          "y": 33.6688471,
          "type": "Point"
        },
        "longitude": -117.8855618
      },
      {

        "companyName": "Ahi Sushi & Grill",
        "image": "0a26faa99928161f1cfaaa3d3db0031a.png",
        "ingredients": "Inside: Imitation Crab, Avo, Cucumber\r\nOutside: Chopped Fish Baked, crunchy",
        "name": "Dynamite Roll",
        "phone": "(619) 337-1388",
        "price": 7.99,
        "type": "Sushi Roll",
        "description": "Dynamite Roll",
        "latitude": 32.8016633,
        "location": {
          "x": -117.0043241,
          "y": 32.8016633,
          "type": "Point"
        },
        "longitude": -117.0043241
      },
      {

        "companyName": "Narumi Sushi",
        "image": "9579d97edad73839e91e6e85ec3b556e.png",
        "ingredients": "Inside: Spicy Crab, Avocado, & Cucumber. Top: Seared Yellowtail, Creamy Teriyaki Sauce, Light Crunch, & scallion",
        "name": "Magic Yellowtail Roll",
        "phone": "(619) 461-1151",
        "price": 9.5,
        "type": "Sushi Roll",
        "description": "Magic Yellowtail Sushi Roll",
        "latitude": 32.7932392,
        "location": {
          "x": -117.003242,
          "y": 32.7932392,
          "type": "Point"
        },
        "longitude": -117.003242
      },
      {

        "companyName": "Stacks Burgers Shakes & Fries",
        "image": "44a1b47c446c1474b22382e718fa1400.png",
        "ingredients": "6-4oz beef, tempura chicken, 7 bacon slices, 7 cheeses, avocado spread, maple bacon and aioli",
        "name": "The 777 Burger",
        "phone": "(253) 941-3307",
        "price": 20,
        "type": "Cheeseburger",
        "description": "burritolist",
        "latitude": 47.3161299,
        "location": {
          "x": -122.3116596,
          "y": 47.3161299,
          "type": "Point"
        },
        "longitude": -122.3116596
      },
      {

        "companyName": "Bangkok Bay",
        "image": "f03222b71612214bb7622f4dd304d62c.png",
        "ingredients": "Shrimp & chicken lightly batter, deep fried, top with our chef three flavor sauce garnished with cashew nuts, steamed broccoli and carrot",
        "name": "Twisted Sister",
        "phone": "(858) 792-2427",
        "price": 16,
        "type": "Bangkok Bay Specialties",
        "description": "Bangkok Bay",
        "latitude": 32.9821072,
        "location": {
          "x": -117.2700747,
          "y": 32.9821072,
          "type": "Point"
        },
        "longitude": -117.2700747
      },
      {

        "companyName": "Urth Caffe",
        "image": "354060861a624985afe6b62bf40d0e12.png",
        "ingredients": "Organic Cold brew iced coffee 20 oz",
        "name": "Cold Brew Iced Coffee",
        "phone": "(626) 844-4644",
        "price": 2.95,
        "type": "Cold Brew Coffee",
        "description": "Urth Caffe",
        "latitude": 34.145607,
        "location": {
          "x": -118.1381916,
          "y": 34.145607,
          "type": "Point"
        },
        "longitude": -118.1381916
      },
      {

        "companyName": "Orenchi Ramen",
        "image": "82712f859c7235df154b8f01aa6bcbf1.png",
        "ingredients": "egg, pork, green onion, bamboo shoot, mushroom, sesame, nori seaweed",
        "name": "Orenchi Ramen (tonkotsu)",
        "phone": "(408) 246-2955",
        "price": 11,
        "type": "Ramen (tonkotsu)",
        "description": "foodcrunch",
        "latitude": 37.7703173,
        "location": {
          "x": -122.4227429,
          "y": 37.7703173,
          "type": "Point"
        },
        "longitude": -122.4227429
      },
      {

        "companyName": "Sam Woo BBQ",
        "image": "219cb93cfa8e1f8ed1b786f27fedc973.png",
        "ingredients": "Braised Green beans",
        "name": "Braised Green Beans",
        "phone": "(626) 927-9848",
        "price": 9.5,
        "type": "Veggies",
        "description": "yummay_eats",
        "latitude": 34.080343,
        "location": {
          "x": -118.0829673,
          "y": 34.080343,
          "type": "Point"
        },
        "longitude": -118.0829673
      },
      {

        "companyName": "Kung Pow Bowl",
        "image": "6d32569c43179e55b82f4b39e90fb4e5.png",
        "ingredients": "Tossed with orange peels, red chili peppers, and scallions for a spicy citrus combination.",
        "name": "Orange Peel Chicken",
        "phone": "(71$) 842-7262",
        "price": 10.5,
        "type": "Orange Chicken",
        "description": "Huntington Beach, CA",
        "latitude": 33.7294652,
        "location": {
          "x": -118.0094651,
          "y": 33.7294652,
          "type": "Point"
        },
        "longitude": -118.0094651,
        "printerId": "NA"
      },
      {

        "companyName": "CK's Tavern & Grill",
        "image": "beae6eac34abbb231226fab54542dabf.jpeg",
        "ingredients": "1/2 lb. beef patty topped with BBQ sauce, thick center-cut bacon, grilled onions, sauteed mushrooms and monterey jack & cheddar cheese.  Served with fries, buffalo fries or onion rings for $.75",
        "name": "BBQ Burger",
        "phone": "(480) 706-5564",
        "price": 10.99,
        "type": "BBQ Bacon Burger",
        "description": "Ahwatukee, Arizona",
        "latitude": 33.3058134,
        "location": {
          "x": -111.9932433,
          "y": 33.3058134,
          "type": "Point"
        },
        "longitude": -111.9932433,
        "printerId": "NA"
      },
      {

        "address": "3618 E Broadway, Long Beach, CA 90803, USA",
        "appAdd": true,
        "companyName": "mana",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2Fd%2BYKNwyyQcOeIMi2NvS9Tw.jpg?alt=media&token=9f50b7ab-7825-48ff-ba4c-60b49421d1cf",
        "ingredients": "chicken wing, tamarind sauce, roasted chilli, shallots, green onions, cilantro",
        "instagram": "#koreanketofoodie",
        "lat": 33.764174,
        "name": "Tamarind Wings",
        "phone": "(562) 433-2574",
        "price": "#10",
        "rating": 4.6,
        "review": "I love love love these wings, it taste so good as is too without the sauce for me and my Keto friends. It is breaded TOO GOOD.",
        "type": "Fried Chicken Wings",
        "lng": -118.1499508
      },
      {

        "address": "55 W Green St, Pasadena, CA 91105, USA",
        "appAdd": true,
        "companyName": "chongqi",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FIMG_0226.JPG?alt=media&token=bef0876f-d639-4f76-be5b-f032232172f6",
        "ingredients": "pork bone broth on the left, tom yum on the right, rib eye, yam noodle, fish ball roe",
        "instagram": "",
        "lat": 34.1447402,
        "name": "Chinese food, hot pot",
        "phone": "(626) 639-3391",
        "price": "60",
        "rating": 4.5,
        "review": "This whole meal is definitely worth going the distance for I drove an hour for this and it was so worth it I went back the next week. Literally the best hot pot I had yet. Highly recommend to anyone looking for a good meal. ",
        "type": "lunch, dinner",
        "lng": -118.15171959999998,
        "insertDate": 1573450503924
      },
      {

        "address": "4222 N Marshall Way, Scottsdale, AZ 85251, USA",
        "appAdd": true,
        "companyName": "Sch",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F9C1FAA28-6774-4A48-8841-8CE784834326.jpeg?alt=media&token=ca219442-ff8b-4bd6-ab55-4c9f1a302786",
        "ingredients": "Fresh Cold Brew",
        "instagram": "",
        "lat": 32.7157,
        "name": "Small Cold Brew",
        "phone": "4809992822",
        "price": "4.00",
        "rating": 3,
        "review": "This cold brew is smooth",
        "type": "Coffee",
        "lng": 117.1611,
        "insertDate": 1594827792659,
        "userId": "b4F7uvYZwMd4PGyLL",
        "website": "Www.schmoozescottsdale.com"
      },
      {

        "address": "1158 W Washington St #105, Tempe, AZ 85281, USA",
        "appAdd": true,
        "companyName": "Deez b",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F4AC67F14-D093-4943-8D24-3440D5A181FA.jpeg?alt=media&token=137bca35-e05a-4dba-a62f-e3619f6d5268",
        "ingredients": "Korean fried chicken ",
        "instagram": "",
        "lat": 33.4424459,
        "name": "Sandwich ",
        "phone": "(602) 267-1715",
        "price": "6",
        "rating": 3.9,
        "review": "Crunchy-deliciousness! ",
        "type": "Lunch, cheat meal, dinner ",
        "lng": -111.95544860000001
      },
      {

        "address": "10230 Riverside Drive, Parker, AZ, 85334",
        "appAdd": true,
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2FBF566495-B75F-4DA8-83AA-697A4D3D5BCE.jpeg?alt=media&token=6edc95cb-0759-4629-953c-210419d75504",
        "ingredients": "Flour Tortilla, Refried Beans, Cheese, Chorizo and Mexican Rice.",
        "instagram": "",
        "lat": 32.7157,
        "name": "Breakfast Burrito - BRC with Chorizo",
        "phone": "9286675954",
        "price": "7.99",
        "rating": 5,
        "review": "Bomb.com \uD83D\uDCA3 ",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1590514013655,
        "userId": "b4F7uvYZwMd4PGyLL"
      },
      {

        "address": "1665 S Dobson Rd, Mesa, AZ 85202, USA",
        "appAdd": true,
        "companyName": "First watch",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-1547172619620.appspot.com/o/images%2F965B8553-28E2-461D-A07A-FF4DF704A4B2.jpeg?alt=media&token=300b2735-5d03-49ea-b283-dccb4c3f1479",
        "ingredients": "The Elevate Egg Sandwich Fresh, over-easy cage-free egg* with bacon, Gruyere cheese, fresh smashed avocado, mayo and lemon dressed arugula on a brioche bun. Served with fresh, seasoned potatoes.",
        "instagram": "Foodsupapp",
        "lat": 33.382991,
        "name": "Elevated Egg Sandwich",
        "phone": "(480) 831-9044",
        "price": "9.89",
        "rating": 4.4,
        "review": "All the flavors of the ingredients came through evenly. 3.6 out of 5",
        "type": "Brunch",
        "lng": -111.87462800000003
      },
      {

        "address": "1753 E Broadway Ave, Tempe, AZ 85281",
        "appAdd": true,
        "companyName": "Pokedon",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F860281A0-33A7-4C42-98B9-3B4C5915BF1E.jpeg?alt=media&token=d2aba636-7568-4553-bb82-eb8e05e1afad",
        "ingredients": "Poke Tuna, Shoyu Tuna, Salad base, jalape??o, cucumber, ginger, onion, seaweed.",
        "instagram": "",
        "lat": 32.7157,
        "name": "Poke Bowl ",
        "phone": "4805561431",
        "price": "11.60",
        "rating": 0,
        "review": "Bomb",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1610146025452,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": ""
      },
      {

        "address": "1402 S Priest Dr, Tempe, AZ 85281",
        "appAdd": true,
        "companyName": "Philly???s sport",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FB3310674-6F28-4428-96E3-F1347B0F839D.jpeg?alt=media&token=6b49bd12-f072-49a7-b8ee-698deb8227a1",
        "ingredients": "Beef patty, bacon, Swiss cheese, mushrooms, lettuce, onion with French fries",
        "instagram": "",
        "lat": 32.7157,
        "name": "Bacon, Mushroom and Swiss Cheeseburger",
        "phone": "4809686612",
        "price": "10.49",
        "rating": 0,
        "review": "\uD83D\uDE4C\uD83C\uDFFB",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1610231272792,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": ""
      },
      {

        "address": "",
        "companyName": "Yvonne's Cafe & Catering, West University Drive, Tempe, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FE4AAC868-63A2-461D-896F-1361FA22F6E8.jpeg?alt=media&token=ea4463b5-c311-485b-96f8-847d0f96d9f6",
        "ingredients": "Beef patty, lettuce, onion, Swiss cheese, mushroom on a bun with fries and onion rings (half and half)",
        "instagram": "",
        "lat": 32.7157,
        "price": "8.49",
        "review": "Amazing",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1610400413499,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\E4AAC868-63A2-461D-896F-1361FA22F6E8.jpeg",
        "foodName": "Mushroom and Swiss Cheeseburger",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Tempe",
        "postal_code": "85281",
        "progress": 100,
        "restaurantName": "Yvonn",
        "route": "West University Drive",
        "selectedFile": {
        },
        "street_number": "1725"
      },
      {

        "address": "",
        "companyName": "Morning Kick, East Chandler Heights Road, Gilbert, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FFB42EA7A-B1A5-4689-A087-478BCD07D1EC.jpeg?alt=media&token=713fad79-2d8a-411d-87c7-fd2444476ed9",
        "ingredients": "Crispy bacon, seasoned tater tots, scrambled eggs, cheddar/Monterey cheese",
        "instagram": "",
        "lat": 32.7157,
        "price": "9.75",
        "review": "Huge burrito!",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1610579496365,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\FB42EA7A-B1A5-4689-A087-478BCD07D1EC.jpeg",
        "foodName": "Cowboy Breakfast Burrito",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Gilbert",
        "postal_code": "85298",
        "progress": 100,
        "restaurantName": "Morning kick",
        "route": "East Chandler Heights Road",
        "selectedFile": {
        },
        "street_number": "3076"
      },
      {

        "address": "",
        "companyName": "Miracle Mile Deli, North 16th Street, Phoenix, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FA4F55919-971E-4DA8-A107-7B2996572102.jpeg?alt=media&token=5fb05826-8468-4290-a435-f37bb842961d",
        "ingredients": "Our Award-winning Pastrami Sandwich that has made us famous Valley wide for over 70 years!  Comes with French Fries",
        "instagram": "",
        "lat": 32.7157,
        "price": "14.50",
        "review": "Looks great!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1610657547054,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\A4F55919-971E-4DA8-A107-7B2996572102.jpeg",
        "foodName": "Pastrami Sandwich with Fries",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Phoenix",
        "postal_code": "85016",
        "progress": 100,
        "restaurantName": "Miracle",
        "route": "North 16th Street",
        "selectedFile": {
        },
        "street_number": "4433"
      },
      {

        "address": "",
        "companyName": "Four Silos Brewery Coffee & Beer House, South Higley Road, Gilbert, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FB056FA00-C42A-429F-98EF-ACA1062B3B25.jpeg?alt=media&token=245ab04d-8312-440e-83ac-22ff5477ca3a",
        "ingredients": "Naan bread, fried egg, provolone cheese and a fresh cold brew coffee",
        "instagram": "",
        "lat": 32.7157,
        "price": "7.88",
        "review": "Great sandwich ",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1610725916169,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\B056FA00-C42A-429F-98EF-ACA1062B3B25.jpeg",
        "foodName": "Magic Breakfast Sandwich and 16 oz cold brew coffee",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Gilbert",
        "postal_code": "85296",
        "progress": 100,
        "restaurantName": "Four si",
        "route": "South Higley Road",
        "selectedFile": {
        },
        "street_number": "143"
      },
      {

        "address": "",
        "companyName": "El Metate Mexican Food, East Main Street, Mesa, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FD4E1F39A-89C5-4F99-8A3A-AB9B46417096.jpeg?alt=media&token=ce9792e6-e58a-4473-9cb2-6bf4836ed574",
        "ingredients": "Beans, cheese, rice and chorizo",
        "instagram": "",
        "lat": 32.7157,
        "price": "8.99",
        "review": "Bomb.com \uD83D\uDCA3 ",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1610989273941,
        "userId": null,
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\D4E1F39A-89C5-4F99-8A3A-AB9B46417096.jpeg",
        "foodName": "BRC with Chorizo Breakfast Burrito",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Mesa",
        "postal_code": "85205",
        "progress": 100,
        "restaurantName": "El metate",
        "route": "East Main Street",
        "selectedFile": {
        },
        "street_number": "6140"
      },
      {

        "address": "",
        "companyName": "Joyride Taco House East, North Gilbert Road, Gilbert, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FD810395A-2957-4F53-9DD2-10FB0CF97DA5.jpeg?alt=media&token=2cb020eb-dce3-4f32-9bb3-6501cf96d855",
        "ingredients": "Carne Asada, Pork Adobada and Crispy Fried Fish Taco With all the fixings ",
        "instagram": "",
        "lat": 32.7157,
        "price": "12.00",
        "review": "Great food ",
        "type": "Brunch",
        "lng": 117.1611,
        "insertDate": 1611004602648,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\D810395A-2957-4F53-9DD2-10FB0CF97DA5.jpeg",
        "foodName": "Carne Asada, Pork Adobada and Crispy Fried Fish Taco",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Gilbert",
        "postal_code": "85233",
        "progress": 100,
        "restaurantName": "Joyride",
        "route": "North Gilbert Road",
        "selectedFile": {
        },
        "street_number": "302"
      },
      {

        "address": "",
        "companyName": "Clever Koi, West Vaughn Avenue, Gilbert, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F95EA9F36-75CA-445A-99A3-E899910BD53B.jpeg?alt=media&token=70d64b87-fea4-453b-91ef-7db0e7fa4aef",
        "ingredients": "Great fried chicken katsu and seasoned fried with pickles",
        "instagram": "",
        "lat": 32.7157,
        "price": "15.00",
        "review": "Great",
        "type": "Dinner",
        "lng": 117.1611,
        "insertDate": 1611194784785,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\95EA9F36-75CA-445A-99A3-E899910BD53B.jpeg",
        "foodName": "Chicken Katsu Sandwich with Fries",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Gilbert",
        "postal_code": "85234",
        "progress": 100,
        "restaurantName": "Clever koi",
        "route": "West Vaughn Avenue",
        "selectedFile": {
        },
        "street_number": "60"
      },
      {

        "address": "",
        "companyName": "Bunker Bar, Lake Havasu City, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F745033AA-30F7-4D8B-A1BF-FC476B0ACC18.jpeg?alt=media&token=6d340026-43d4-4e53-8171-ec219a4f9c89",
        "ingredients": "A basket of Fried chicken tenders and French fries",
        "instagram": "",
        "lat": 32.7157,
        "price": "14.00",
        "review": "\uD83D\uDD25",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1611521089298,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\745033AA-30F7-4D8B-A1BF-FC476B0ACC18.jpeg",
        "foodName": "Chicken Tenders and fries",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Lake Havasu City",
        "postal_code": "86404",
        "progress": 100,
        "restaurantName": "Bunker bar",
        "route": "",
        "selectedFile": {
        },
        "street_number": ""
      },
      {

        "address": "",
        "companyName": "Philly's Sports Grill, South Priest Drive, Tempe, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FDB85F1C0-EE1B-4D7D-A533-1B3CF51CA56E.jpeg?alt=media&token=41d21f1b-abef-4f28-baec-3544e66c4a3b",
        "ingredients": "Small Pepperoni pizza with bone in wings (medium spice) and a side of ranch",
        "instagram": "",
        "lat": 32.7157,
        "price": "8.49",
        "review": "Great every time",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1611691236206,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\DB85F1C0-EE1B-4D7D-A533-1B3CF51CA56E.jpeg",
        "foodName": "Pizza and Wings Lunch Special",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Tempe",
        "postal_code": "85281",
        "progress": 100,
        "restaurantName": "Phillys sport",
        "route": "South Priest Drive",
        "selectedFile": {
        },
        "street_number": "1402"
      },
      {

        "address": "",
        "companyName": "Clever Koi, West Vaughn Avenue, Gilbert, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F40A88D50-FDD4-4369-A089-7AB6CD397367.jpeg?alt=media&token=98696318-1cba-4e54-9bab-b7f129070899",
        "ingredients": " Pork Belly, Kimchi Caulifower and Softshell Crab with all the fixings and super soft buns",
        "instagram": "",
        "lat": 32.7157,
        "price": "13.00",
        "review": "Always order more!",
        "type": "Dinner",
        "lng": 117.1611,
        "insertDate": 1611713017795,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\40A88D50-FDD4-4369-A089-7AB6CD397367.jpeg",
        "foodName": "Steam Buns",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Gilbert",
        "postal_code": "85234",
        "progress": 100,
        "restaurantName": "Clever ",
        "route": "West Vaughn Avenue",
        "selectedFile": {
        },
        "street_number": "60"
      },
      {

        "address": "",
        "companyName": "Allison's Texas BBQ, East Main Street, Mesa, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F337E8B22-FF20-4E37-8C85-16B0C33C3673.jpeg?alt=media&token=62e91f19-83cd-4ce8-884c-8cad9b4d5dc6",
        "ingredients": "Smoked and chopped brisket on Texas toast",
        "instagram": "",
        "lat": 32.7157,
        "price": "12.00",
        "review": "6.8/10",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1611777273055,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\337E8B22-FF20-4E37-8C85-16B0C33C3673.jpeg",
        "foodName": "Chopped Brisket Sandwich",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Mesa",
        "postal_code": "85205",
        "progress": 100,
        "restaurantName": "Allison???s bbq",
        "route": "East Main Street",
        "selectedFile": {
        },
        "street_number": "6750"
      },
      {

        "address": "",
        "companyName": "Allison's Texas BBQ, East Main Street, Mesa, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F337E8B22-FF20-4E37-8C85-16B0C33C3673.jpeg?alt=media&token=62e91f19-83cd-4ce8-884c-8cad9b4d5dc6",
        "ingredients": "Smoked and chopped brisket on Texas toast",
        "instagram": "",
        "lat": 32.7157,
        "price": "12.00",
        "review": "6.8/10",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1611777273057,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\337E8B22-FF20-4E37-8C85-16B0C33C3673.jpeg",
        "foodName": "Chopped Brisket Sandwich",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Mesa",
        "postal_code": "85205",
        "progress": 100,
        "restaurantName": "Allison???s bbq",
        "route": "East Main Street",
        "selectedFile": {
        },
        "street_number": "6750"
      },
      {

        "address": "",
        "companyName": "Gilbert Farmers Market, North Ash Street, Gilbert, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F7673B759-9D49-4213-904A-74DBAB39A041.jpeg?alt=media&token=0567964d-a641-4597-989a-a60dde18323c",
        "ingredients": "Maple* Pork maple sausage & egg SCRAMBLE + shredded cheddar + maple syrup drizzle + side of oven baked potatoes  Added avocado for $1",
        "instagram": "",
        "lat": 32.7157,
        "price": "10.00",
        "review": "Great",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1612032644083,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\7673B759-9D49-4213-904A-74DBAB39A041.jpeg",
        "foodName": "Curbside Crepes - Maple ",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Gilbert",
        "postal_code": "85234",
        "progress": 100,
        "restaurantName": "Gilbert farmer",
        "route": "North Ash Street",
        "selectedFile": {
        },
        "street_number": "222"
      },
      {

        "address": "",
        "companyName": "The Red Onion, McCulloch Boulevard North, Lake Havasu City, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FD05EA91D-F94A-405C-9C25-3D74D0A51620.jpeg?alt=media&token=9f99db15-3b61-439d-8bc9-8e357a1a4cd4",
        "ingredients": "We take a flour tortilla, spread some salsa and sprinkle some cheese, then we lay two over easy eggs on top, cover with more cheese, lettuce, tomato, black olives, and sour cream. Not your traditional Rancheros, but definitely a favorite!",
        "instagram": "",
        "lat": 32.7157,
        "price": "9.95",
        "review": "Different but good ",
        "type": "Breakfast",
        "lng": 117.1611,
        "insertDate": 1612197483652,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\D05EA91D-F94A-405C-9C25-3D74D0A51620.jpeg",
        "foodName": "Huevos Rancheros",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Lake Havasu City",
        "postal_code": "86403",
        "progress": 100,
        "restaurantName": "The red onion lake",
        "route": "McCulloch Boulevard North",
        "selectedFile": {
        },
        "street_number": "2013"
      },
      {

        "address": "",
        "companyName": "California Fish Grill, South Stapley Drive, Mesa, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FB68C1084-FD23-4E05-8B73-155716CA7D7A.jpeg?alt=media&token=c8fe3ae9-0f82-422b-b4d9-9e920eb1b215",
        "ingredients": "Fried fish, cabbage, white sauce and tomato salsa",
        "instagram": "",
        "lat": 32.7157,
        "price": "7.50",
        "review": "Great!",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1612295235511,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\B68C1084-FD23-4E05-8B73-155716CA7D7A.jpeg",
        "foodName": "Battered Fish Tacos",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Mesa",
        "postal_code": "85204",
        "progress": 100,
        "restaurantName": "California fish grill",
        "route": "South Stapley Drive",
        "selectedFile": {
        },
        "street_number": "1855"
      },
      {

        "address": "",
        "companyName": "Yvonne's Cafe & Catering, West University Drive, Tempe, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2F59646F1E-4E36-44D8-88F7-7A5DDB416E85.jpeg?alt=media&token=b61b28f7-ab5f-46dd-8336-7290406ed237",
        "ingredients": "Reuben in rye with sauerkraut, sweet potato fries and a side of ranch",
        "instagram": "",
        "lat": 32.7157,
        "price": "8.99",
        "review": "Best food on university ",
        "type": "Lunch",
        "lng": 117.1611,
        "insertDate": 1612408264491,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\59646F1E-4E36-44D8-88F7-7A5DDB416E85.jpeg",
        "foodName": "Reuben with Sweet Potato Fries \uD83C\uDF60 \uD83C\uDF5F ",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Tempe",
        "postal_code": "85281",
        "progress": 100,
        "restaurantName": "Yvonnes caf",
        "route": "West University Drive",
        "selectedFile": {
        },
        "street_number": "1725"
      },
      {

        "address": "",
        "companyName": "Schmooze, North Marshall Way, Scottsdale, AZ, USA",
        "image": "https://firebasestorage.googleapis.com/v0/b/foodsup-dev.appspot.com/o/images%2FD6EA5E5E-E809-424F-9CF2-1C91CF7AC171.jpeg?alt=media&token=3fbf9156-d6fb-451d-8d29-a2a7c834e81f",
        "ingredients": "16 ounce cold brew coffee black",
        "instagram": "",
        "lat": 32.7157,
        "price": "4.00",
        "review": "Not bad!",
        "type": "Coffee",
        "lng": 117.1611,
        "insertDate": 1612543242232,
        "userId": "DQthYS4TnMkT3xEZ8",
        "website": "",
        "administrative_area_level_1": "AZ",
        "country": "United States",
        "fileUpload": "C:\\fakepath\\D6EA5E5E-E809-424F-9CF2-1C91CF7AC171.jpeg",
        "foodName": "Cold Brew Coffee",
        "imageUrl": "",
        "loaded": 0,
        "locality": "Scottsdale",
        "postal_code": "85251",
        "progress": 100,
        "restaurantName": "Schmooz",
        "route": "North Marshall Way",
        "selectedFile": {
        },
        "street_number": "4222"
      }
    ].forEach(insertMeal)
  }
});
