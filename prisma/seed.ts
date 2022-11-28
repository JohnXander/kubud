import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      username: 'John',
      email: 'john@john',
      password: 'john123'
    }
  })

  await prisma.ingredient.create({
    data: {
      name: 'sugar',
      userId: 1
    }
  })

  await prisma.backFillMeal.createMany({
    data: [
        {
            name: 'Apple Frangipan Tart',
            img: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
            ingredients: [
                'digestive biscuits',
                'butter',
                'Bramley apples',
                'butter, softened',
                'caster sugar',
                'free-range eggs, beaten',
                'ground almonds',
                'almond extract',
                'flaked almonds'
            ]
        },
        {
            name: 'Apple & Blackberry Crumble',
            img: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
            ingredients: [
                'Plain Flour',
                'Caster Sugar',
                'Butter',
                'Braeburn Apples',
                'Butter',
                'Demerara Sugar',
                'Blackberrys',
                'Cinnamon',
                'Ice Cream'
            ]
        },
        {
            name: 'Apam balik',
            img: 'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
            ingredients: [
                'Milk',
                'Oil',
                'Eggs',
                'Flour',
                'Baking Powder',
                'Salt',
                'Unsalted Butter',
                'Sugar',
                'Peanut Butter'
            ]
        },
        {
            name: 'Ayam Percik',
            img: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
            ingredients: [
                'Chicken Thighs', 'Challots',
                'Ginger', 'Garlic Clove',
                'Cayenne Pepper', 'Turmeric',
                'Cumin', 'Coriander',
                'Fennel', 'Tamarind Paste',
                'Coconut Milk', 'Sugar',
                'Water'
            ]
        },
        {
            name: 'Bakewell tart',
            img: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
            ingredients: [
                'plain flour',
                'chilled butter',
                'cold water',
                'raspberry jam',
                'butter',
                'caster sugar',
                'ground almonds',
                'free-range egg, beaten',
                'almond extract',
                'flaked almonds'
            ]
        },
        {
            name: 'Bread and Butter Pudding',
            img: 'https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg',
            ingredients: [
                'butter',
                'bread',
                'sultanas',
                'cinnamon',
                'milk',
                'double cream',
                'eggs',
                'sugar',
                'nutmeg'
            ]
        },
        {
            name: 'Beef Wellington',
            img: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
            ingredients: [
                'mushrooms',
                'English Mustard',
                'Olive Oil',
                'Beef Fillet',
                'Parma ham',
                'Puff Pastry',
                'Flour',
                'Egg Yolks'
            ]
        },
        {
            name: 'Baingan Bharta',
            img: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
            ingredients: [
                'Aubergine',
                'Onion',
                'Tomatoes',
                'Garlic',
                'Green Chili',
                'Red Chili Powder',
                'Oil',
                'Coriander Leaves',
                'salt'
            ]
        },
        {
            name: 'Beef Brisket Pot Roast',
            img: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
            ingredients: [
                'Beef Brisket', 'Salt',
                'Onion', 'Garlic',
                'Thyme', 'Rosemary',
                'Bay Leaves', 'beef stock',
                'Carrots', 'Mustard',
                'Potatoes'
            ]
        },
        {
            name: 'Beef Sunday Roast',
            img: 'https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg',
            ingredients: [
                'Beef',
                'Broccoli',
                'Potatoes',
                'Carrots',
                'plain flour',
                'Eggs',
                'milk',
                'sunflower oil'
            ]
        },
        {
            name: 'Braised Beef Chilli',
            img: 'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg',
            ingredients: [
                'Beef', 'Onions',
                'Garlic', 'Olive oil',
                'Chorizo', 'Cumin',
                'All spice', 'Cloves',
                'Cinnamon stick', 'Bay Leaves',
                'Oregano', 'Ancho Chillies',
                'Balsamic Vinegar', 'Plum Tomatoes',
                'Tomato Ketchup', 'Dark Brown Sugar',
                'Borlotti Beans'
            ]
        },
        {
            name: 'Beef stroganoff',
            img: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',
            ingredients: [
                'Olive Oil',
                'Onions',
                'Garlic',
                'Butter',
                'Mushrooms',
                'Beef Fillet',
                'Plain Flour',
                'Creme Fraiche',
                'English Mustard',
                'Beef Stock',
                'Parsley'
            ]
        },
        {
            name: 'Broccoli & Stilton soup',
            img: 'https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg',
            ingredients: [
                'Rapeseed Oil',
                'Onion',
                'Celery',
                'Leek',
                'Potatoes',
                'Butter',
                'Vegetable Stock',
                'Broccoli',
                'Stilton Cheese'
            ]
        },
        {
            name: 'Bean & Sausage Hotpot',
            img: 'https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg',
            ingredients: [
                'Sausages',
                'Tomato Sauce',
                'Butter Beans',
                'Black Treacle',
                'English Mustard'
            ]
        },
        {
            name: 'Banana Pancakes',
            img: 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
            ingredients: [
                'Banana',
                'Eggs',
                'Baking Powder',
                'Vanilla Extract',
                'Oil',
                'Pecan Nuts',
                'Raspberries'
            ]
        },
        {
            name: 'Beef Dumpling Stew',
            img: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
            ingredients: [
                'Olive Oil', 'Butter',
                'Beef', 'Plain Flour',
                'Garlic', 'Onions',
                'Celery', 'Carrots',
                'Leek', 'Swede',
                'Red Wine', 'Beef Stock',
                'Bay Leaf', 'Thyme',
                'Parsley', 'Plain Flour',
                'Baking Powder', 'Suet',
                'Water'
            ]
        },
        {
            name: 'Beef and Mustard Pie',
            img: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
            ingredients: [
                'Beef', 'Plain Flour',
                'Rapeseed Oil', 'Red Wine',
                'Beef Stock', 'Onion',
                'Carrots', 'Thyme',
                'Mustard', 'Egg Yolks',
                'Puff Pastry', 'Green Beans',
                'Butter', 'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Beef and Oyster pie',
            img: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
            ingredients: [
                'Beef', 'Olive Oil',
                'Shallots', 'Garlic',
                'Bacon', 'Thyme',
                'Bay Leaf', 'Stout',
                'Beef Stock', 'Corn Flour',
                'Oysters', 'Plain Flour',
                'Salt', 'Butter',
                'Eggs'
            ]
        },
        {
            name: 'Blackberry Fool',
            img: 'https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg',
            ingredients: [
                'Hazlenuts', 'Butter',
                'Caster Sugar', 'Lemon',
                'Plain Flour', 'Baking Powder',
                'Blackberrys', 'Sugar',
                'Caster Sugar', 'Lemon Juice',
                'Double Cream', 'Yogurt',
                'Mint'
            ]
        },
        {
            name: 'Battenberg Cake',
            img: 'https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg',
            ingredients: [
                'Butter', 'Caster Sugar',
                'Self-raising Flour', 'Almonds',
                'Baking Powder', 'Eggs',
                'Vanilla Extract', 'Almond Extract',
                'Butter', 'Caster Sugar',
                'Self-raising Flour', 'Almonds',
                'Baking Powder', 'Eggs',
                'Vanilla Extract', 'Almond Extract',
                'Pink Food Colouring', 'Apricot',
                'Marzipan', 'Icing Sugar'
            ]
        },
        {
            name: 'Beef Bourguignon',
            img: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg',
            ingredients: [
                'Goose Fat', 'Beef Shin',
                'Bacon', 'Challots',
                'Chestnut Mushroom', 'Garlic Clove',
                'Bouquet Garni', 'Tomato Puree',
                'Red Wine', 'Celeriac',
                'Olive Oil', 'Thyme',
                'Rosemary', 'Bay Leaf',
                'Cardamom'
            ]
        },
        {
            name: 'Brie wrapped in prosciutto & brioche',
            img: 'https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg',
            ingredients: [
                'Plain Flour',
                'Caster Sugar',
                'Yeast',
                'Milk',
                'Eggs',
                'Eggs',
                'Butter',
                'Brie',
                'Prosciutto'
            ]
        },
        {
            name: 'Boulangère Potatoes',
            img: 'https://www.themealdb.com/images/media/meals/qywups1511796761.jpg',
            ingredients: ['Onions', 'Thyme', 'Olive Oil', 'Potatoes', 'Vegetable Stock']
        },
        {
            name: 'BeaverTails',
            img: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
            ingredients: [
                'Water', 'Yeast',
                'Sugar', 'Milk',
                'Butter', 'Eggs',
                'Salt', 'Flour',
                'Oil', 'Lemon',
                'Sugar', 'Cinnamon'
            ]
        },
        {
            name: 'Brown Stew Chicken',
            img: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
            ingredients: [
                'Chicken', 'Tomato',
                'Onions', 'Garlic Clove',
                'Red Pepper', 'Carrots',
                'Lime', 'Thyme',
                'Allspice', 'Soy Sauce',
                'Cornstarch', 'Coconut Milk',
                'Vegetable Oil'
            ]
        },
        {
            name: 'Beef Lo Mein',
            img: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
            ingredients: [
                'Beef', 'Salt',
                'Pepper', 'Sesame Seed Oil',
                'Egg', 'Starch',
                'Oil', 'Noodles',
                'Onion', 'Minced Garlic',
                'Ginger', 'Bean Sprouts',
                'Mushrooms', 'Water',
                'Oyster Sauce', 'Sugar',
                'Soy Sauce'
            ]
        },
        {
            name: 'Baked salmon with fennel & tomatoes',
            img: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
            ingredients: [
                'Fennel',
                'Parsley',
                'Lemon',
                'Cherry Tomatoes',
                'Olive Oil',
                'Salmon',
                'Black Olives'
            ]
        },
        {
            name: 'Budino Di Ricotta',
            img: 'https://www.themealdb.com/images/media/meals/1549542877.jpg',
            ingredients: [
                'Ricotta',
                'Eggs',
                'Flour',
                'Sugar',
                'Cinnamon',
                'Lemons',
                'Dark Rum',
                'Icing Sugar'
            ]
        },
        {
            name: 'Breakfast Potatoes',
            img: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
            ingredients: [
                'Potatoes',
                'Olive Oil',
                'Bacon',
                'Garlic Clove',
                'Maple Syrup',
                'Parsley',
                'Salt',
                'Pepper',
                'Allspice'
            ]
        },
        {
            name: 'Bitterballen (Dutch meatballs)',
            img: 'https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg',
            ingredients: [
                'Butter', 'Flour',
                'Beef Stock', 'Onion',
                'Parsley', 'Beef',
                'Salt', 'Pepper',
                'Nutmeg', 'Flour',
                'Eggs', 'Breadcrumbs'
            ]
        },
        {
            name: 'BBQ Pork Sloppy Joes',
            img: 'https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg',
            ingredients: [
                'Potatoes', 'Red Onions',
                'Garlic', 'Lime',
                'Bread', 'Pork',
                'Barbeque Sauce', 'Hotsauce',
                'Tomato Ketchup', 'Sugar',
                'Vegetable Oil', 'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
            img: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
            ingredients: [
                'Rice',
                'Onion',
                'Lime',
                'Garlic Clove',
                'Cucumber',
                'Carrots',
                'Ground Beef',
                'Soy Sauce'
            ]
        },
        {
            name: 'Big Mac',
            img: 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg',
            ingredients: [
                'Minced Beef',
                'Olive Oil',
                'Sesame Seed Burger Buns',
                'Onion',
                'Iceberg Lettuce',
                'Cheese',
                'Dill Pickles',
                'Mayonnaise',
                'White Wine Vinegar',
                'Pepper',
                'Mustard',
                'Onion Salt',
                'Garlic Powder',
                'Paprika'
            ]
        },
        {
            name: 'Bigos (Hunters Stew)',
            img: 'https://www.themealdb.com/images/media/meals/md8w601593348504.jpg',
            ingredients: [
                'Bacon', 'Kielbasa',
                'Pork', 'Flour',
                'Garlic', 'Onion',
                'Mushrooms', 'Cabbage',
                'Sauerkraut', 'Red Wine',
                'Bay Leaf', 'Basil',
                'Marjoram', 'Paprika',
                'Caraway Seed', 'Hotsauce',
                'Beef Stock', 'Tomato Puree',
                'Diced Tomatoes', 'Worcestershire Sauce'
            ]
        },
        {
            name: 'Boxty Breakfast',
            img: 'https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg',
            ingredients: [
                'Potatoes',
                'Spring Onions',
                'Plain Flour',
                'Egg White',
                'Milk',
                'Bicarbonate Of Soda',
                'Butter',
                'Vegetable Oil',
                'Cherry Tomatoes',
                'Bacon',
                'Egg'
            ]
        },
        {
            name: 'Beef Rendang',
            img: 'https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg',
            ingredients: [
                'Beef', 'Vegetable Oil',
                'Cinnamon Stick', 'Cloves',
                'Star Anise', 'Cardamom',
                'Coconut Cream', 'Water',
                'Tamarind Paste', 'Lime',
                'Sugar', 'Challots'
            ]
        },
        {
            name: 'Burek',
            img: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
            ingredients: ['Filo Pastry', 'Minced Beef', 'Onion', 'Oil', 'Salt', 'Pepper']
        },
        {
            name: 'Chocolate Gateau',
            img: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
            ingredients: [
                'Plain chocolate',
                'Butter',
                'Milk',
                'Eggs',
                'Granulated Sugar',
                'Flour'
            ]
        },
        {
            name: 'Chicken Enchilada Casserole',
            img: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
            ingredients: [
                'Enchilada sauce',
                'shredded Monterey Jack cheese',
                'corn tortillas',
                'chicken breasts'
            ]
        },
        {
            name: 'Cream Cheese Tart',
            img: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
            ingredients: [
                'Flour', 'Butter',
                'Egg', 'Salt',
                'Cheese', 'Milk',
                'Eggs', 'Parmesan Cheese',
                'Plum tomatoes', 'White Vinegar',
                'Honey', 'Basil'
            ]
        },
        {
            name: 'Christmas Pudding Flapjack',
            img: 'https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg',
            ingredients: [
                'salted butter',
                'dark soft brown sugar',
                'golden syrup',
                'orange',
                'rolled oats',
                'Christmas pudding'
            ]
        },
        {
            name: 'Chicken Handi',
            img: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
            ingredients: [
                'Chicken', 'Onion',
                'Tomatoes', 'Garlic',
                'Ginger paste', 'Vegetable oil',
                'Cumin seeds', 'Coriander seeds',
                'Turmeric powder', 'Chilli powder',
                'Green chilli', 'Yogurt',
                'Cream', 'fenugreek',
                'Garam masala', 'Salt'
            ]
        },
        {
            name: 'Chicken Alfredo Primavera',
            img: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
            ingredients: [
                'Butter', 'Olive Oil',
                'Chicken', 'Salt',
                'Squash', 'Broccoli',
                'mushrooms', 'Pepper',
                'onion', 'garlic',
                'red pepper flakes', 'white wine',
                'milk', 'heavy cream',
                'Parmesan cheese', 'bowtie pasta',
                'Salt', 'Pepper',
                'Parsley'
            ]
        },
        {
            name: 'Chicken Fajita Mac and Cheese',
            img: 'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
            ingredients: [
                'macaroni',
                'chicken stock',
                'heavy cream',
                'fajita seasoning',
                'salt',
                'chicken breast',
                'olive oil',
                'onion',
                'red pepper',
                'garlic',
                'cheddar cheese',
                'parsley'
            ]
        },
        {
            name: 'Cajun spiced fish tacos',
            img: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
            ingredients: [
                'cajun',
                'cayenne pepper',
                'white fish',
                'vegetable oil',
                'flour tortilla',
                'avocado',
                'little gem lettuce',
                'spring onion',
                'salsa',
                'sour cream',
                'lemon',
                'garlic'
            ]
        },
        {
            name: 'Crock Pot Chicken Baked Tacos',
            img: 'https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg',
            ingredients: [
                'Chicken Breasts',
                'Vinaigrette Dressing',
                'Cumin',
                'Smoked Paprika',
                'Garlic',
                'Refried Beans',
                'Hard Taco Shells',
                'Shredded Mexican Cheese',
                'Grape Tomatoes',
                'Jalapeno',
                'Avocado',
                'Green Salsa',
                'Sour Cream',
                'Milk'
            ]
        },
        {
            name: 'Chicken Karaage',
            img: 'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',
            ingredients: [
                'Chicken thigh',
                'Ginger',
                'Garlic',
                'Soy sauce',
                'Sake',
                'Granulated sugar',
                'Potato starch',
                'Vegetable oil',
                'Lemon'
            ]
        },
        {
            name: 'Coq au vin',
            img: 'https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg',
            ingredients: [
                'Olive Oil', 'Bacon',
                'Shallots', 'Chicken Legs',
                'Chicken Thighs', 'Chicken Breasts',
                'Garlic', 'Brandy',
                'Red Wine', 'Chicken Stock',
                'tomato puree', 'thyme',
                'Rosemary', 'bay leaves',
                'parsley', 'chestnut mushroom',
                'plain flour', 'butter'
            ]
        },
        {
            name: 'Chilli prawn linguine',
            img: 'https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg',
            ingredients: [
                'Linguine Pasta', 'Sugar Snap Peas',
                'Olive Oil', 'Garlic Clove',
                'Red Chilli', 'King Prawns',
                'Cherry Tomatoes', 'Basil Leaves',
                'Lettuce', 'Bread',
                'Fromage Frais', 'Lime',
                'Caster Sugar'
            ]
        },
        {
            name: 'Clam chowder',
            img: 'https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg',
            ingredients: [
                'Clams', 'Butter',
                'Bacon', 'Onion',
                'Thyme', 'Bay Leaf',
                'Plain Flour', 'Milk',
                'Double Cream', 'Potatoes',
                'Parsley'
            ]
        },
        {
            name: 'Creamy Tomato Soup',
            img: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg',
            ingredients: [
                'Olive Oil',
                'Onions',
                'Celery',
                'Carrots',
                'Potatoes',
                'Bay Leaf',
                'Tomato Puree',
                'Sugar',
                'White Vinegar',
                'Chopped Tomatoes',
                'Passata',
                'Vegetable Stock Cube',
                'Whole Milk'
            ]
        },
        {
            name: 'Chicken & mushroom Hotpot',
            img: 'https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg',
            ingredients: [
                'Butter',
                'Onion',
                'Mushrooms',
                'Plain Flour',
                'Chicken Stock Cube',
                'Nutmeg',
                'Mustard Powder',
                'Chicken',
                'Sweetcorn',
                'Potatoes',
                'Butter'
            ]
        },
        {
            name: 'Chicken Couscous',
            img: 'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
            ingredients: [
                'Olive Oil',
                'Onion',
                'Chicken Breast',
                'Ginger',
                'Harissa Spice',
                'Dried Apricots',
                'Chickpeas',
                'Couscous',
                'Chicken Stock',
                'Coriander'
            ]
        },
        {
            name: 'Chocolate Avocado Mousse',
            img: 'https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg',
            ingredients: [
                'Banana',
                'Cacao',
                'Avocado',
                'Honey',
                'Lemon Juice',
                'Vanilla',
                'Water',
                'Sea Salt'
            ]
        },
        {
            name: 'Choc Chip Pecan Pie',
            img: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
            ingredients: [
                'Plain Flour',
                'Butter',
                'Cream Cheese',
                'Icing Sugar',
                'Butter',
                'Maple Syrup',
                'Light Brown Soft Sugar',
                'Dark Brown Soft Sugar',
                'Eggs',
                'Vanilla Extract',
                'Pecan Nuts',
                'Dark Chocolate Chips'
            ]
        },
        {
            name: 'Chocolate Raspberry Brownies',
            img: 'https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg',
            ingredients: [
                'Dark Chocolate',
                'Milk Chocolate',
                'Salted Butter',
                'Light Brown Soft Sugar',
                'Eggs',
                'Plain Flour',
                'Cocoa',
                'Raspberries'
            ]
        },
        {
            name: 'Chickpea Fajitas',
            img: 'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
            ingredients: [
                'Chickpeas', 'Olive Oil',
                'Paprika', 'Tomatoes',
                'Red Onions', 'Red Wine Vinegar',
                'Avocado', 'Lime',
                'Lime', 'Sour Cream',
                'Harissa Spice', 'Corn Tortillas',
                'Coriander'
            ]
        },
        {
            name: 'Chicken Ham and Leek Pie',
            img: 'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg',
            ingredients: [
                'Chicken Stock',
                'Chicken Breast',
                'Butter',
                'Leek',
                'Garlic',
                'Plain Flour',
                'Milk',
                'White Wine',
                'Double Cream',
                'Ham',
                'Sea Salt',
                'Pepper',
                'Plain Flour',
                'Butter',
                'Free-range Egg, Beaten',
                'Cold Water',
                'Free-range Egg, Beaten'
            ]
        },
        {
            name: 'Chicken Parmentier',
            img: 'https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg',
            ingredients: [
                'Potatoes', 'Butter',
                'Double Cream', 'Egg Yolks',
                'Butter', 'Shallots',
                'Carrots', 'Celery',
                'Garlic Clove', 'White Wine',
                'Tomato Puree', 'Tinned Tomatos',
                'Chicken Stock', 'Chicken',
                'Black Olives', 'Parsley',
                'Gruyere cheese'
            ]
        },
        {
            name: 'Carrot Cake',
            img: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
            ingredients: [
                'Vegetable Oil',
                'Plain Flour',
                'Bicarbonate Of Soda',
                'Sugar',
                'Eggs',
                'Salt',
                'Cinnamon',
                'Carrots',
                'Walnuts',
                'Cream Cheese',
                'Caster Sugar',
                'Butter'
            ]
        },
        {
            name: 'Chelsea Buns',
            img: 'https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg',
            ingredients: [
                'White Flour', 'Salt',
                'Yeast', 'Milk',
                'Butter', 'Eggs',
                'Vegetable Oil', 'Butter',
                'Brown Sugar', 'Cinnamon',
                'Dried Fruit', 'Milk',
                'Caster Sugar'
            ]
        },
        {
            name: 'Chocolate Souffle',
            img: 'https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg',
            ingredients: [
                'Single Cream', 'Caster Sugar',
                'Dark Chocolate', 'Butter',
                'Butter', 'Caster Sugar',
                'Dark Chocolate', 'Double Cream',
                'Egg Yolks', 'Egg White',
                'Double Cream', 'Icing Sugar'
            ]
        },
        {
            name: 'Chinon Apple Tarts',
            img: 'https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg',
            ingredients: [
                'Puff Pastry',
                'Dark Brown Soft Sugar',
                'Braeburn Apples',
                'Red Wine Jelly',
                'Creme Fraiche',
                'Icing Sugar',
                'Cardamom'
            ]
        },
        {
            name: 'Chicken Marengo',
            img: 'https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg',
            ingredients: [
                'Olive Oil',
                'Mushrooms',
                'Chicken Legs',
                'Passata',
                'Chicken Stock Cube',
                'Black Olives',
                'Parsley'
            ]
        },
        {
            name: 'Canadian Butter Tarts',
            img: 'https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg',
            ingredients: [
                'Shortcrust Pastry',
                'Eggs',
                'Muscovado Sugar',
                'Raisins',
                'Vanilla Extract',
                'Butter',
                'Single Cream',
                'Walnuts'
            ]
        },
        {
            name: 'Chicken Basquaise',
            img: 'https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg',
            ingredients: [
                'Chicken', 'Butter',
                'Olive Oil', 'Red Onions',
                'Red Pepper', 'Chorizo',
                'Sun-Dried Tomatoes', 'Garlic',
                'Basmati Rice', 'Tomato Puree',
                'Paprika', 'Bay Leaves',
                'Thyme', 'Chicken Stock',
                'Dry White Wine', 'Lemons',
                'Black Olives', 'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Callaloo Jamaican Style',
            img: 'https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg',
            ingredients: [
                'Kale',
                'Bacon',
                'Garlic',
                'Onion',
                'Paprika',
                'Thyme',
                'Tomato',
                'Red Pepper',
                'Banana',
                'Vegetable Oil'
            ]
        },
        {
            name: 'Chicken Congee',
            img: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
            ingredients: [
                'Chicken',
                'Salt',
                'Pepper',
                'Ginger Cordial',
                'Ginger',
                'Spring Onions',
                'Rice',
                'Water',
                'Coriander'
            ]
        },
        {
            name: 'Chocolate Caramel Crispy',
            img: 'https://www.themealdb.com/images/media/meals/1550442508.jpg',
            ingredients: ['Mars Bar', 'Butter', 'Rice Krispies', 'Milk Chocolate']
        },
        {
            name: 'Chakchouka ',
            img: 'https://www.themealdb.com/images/media/meals/gpz67p1560458984.jpg',
            ingredients: [
                'Tomatoes', 'Olive Oil',
                'Onion', 'Red Pepper',
                'Green Pepper', 'Garlic',
                'Cumin', 'Paprika',
                'Salt', 'Chili Powder',
                'Eggs'
            ]
        },
        {
            name: 'Cashew Ghoriba Biscuits',
            img: 'https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg',
            ingredients: [
                'Cashew Nuts',
                'Icing Sugar',
                'Egg Yolks',
                'Orange Blossom Water',
                'Icing Sugar',
                'Almonds'
            ]
        },
        {
            name: 'Corba',
            img: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
            ingredients: [
                'Lentils',
                'Onion',
                'Carrots',
                'Tomato Puree',
                'Cumin',
                'Paprika',
                'Mint',
                'Thyme',
                'Black Pepper',
                'Red Pepper Flakes',
                'Vegetable Stock',
                'Water',
                'Sea Salt'
            ]
        },
        {
            name: 'Christmas Pudding Trifle',
            img: 'https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg',
            ingredients: [
                'Orange',
                'Demerara Sugar',
                'Grand Marnier',
                'Christmas Pudding',
                'Custard',
                'Mascarpone',
                'Double Cream',
                'Flaked Almonds',
                'Dark Chocolate'
            ]
        },
        {
            name: 'Classic Christmas pudding',
            img: 'https://www.themealdb.com/images/media/meals/1d85821576790598.jpg',
            ingredients: [
                'Almonds',
                'Bramley Apples',
                'Candied Peel',
                'Nutmeg',
                'Raisins',
                'Plain Flour',
                'Breadcrumbs',
                'Muscovado Sugar',
                'Eggs',
                'Brandy',
                'Butter'
            ]
        },
        {
            name: 'Christmas cake',
            img: 'https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg',
            ingredients: [
                'Butter', 'Muscovado Sugar',
                'Plain Flour', 'Eggs',
                'Ground Almonds', 'Sherry',
                'Candied Peel', 'Glace Cherry',
                'Raisins', 'Currants',
                'Pecan Nuts', 'Lemon',
                'Mixed Spice', 'Rose water',
                'Vanilla Extract', 'Baking Powder'
            ]
        },
        {
            name: 'Corned Beef and Cabbage',
            img: 'https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg',
            ingredients: ['Beef Brisket', 'Small Potatoes', 'Carrots', 'Cabbage']
        },
        {
            name: 'Crispy Sausages and Greens',
            img: 'https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg',
            ingredients: [
                'Kale',
                'Italian Fennel Sausages',
                'Cabbage',
                'Garlic Clove',
                'Onion',
                'Shiitake Mushrooms',
                'Chicken Stock',
                'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Chicken Quinoa Greek Salad',
            img: 'https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg',
            ingredients: [
                'Quinoa',
                'Butter',
                'Red Chilli',
                'Garlic',
                'Chicken Breast',
                'Olive Oil',
                'Black Olives',
                'Red Onions',
                'Feta',
                'Mint',
                'Lemon'
            ]
        },
        {
            name: 'Chick-Fil-A Sandwich',
            img: 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
            ingredients: [
                'Chicken Breast',
                'Pickle Juice',
                'Egg',
                'Milk',
                'Flour',
                'Icing Sugar',
                'Paprika',
                'Salt',
                'Black Pepper',
                'Garlic Powder',
                'Celery Salt',
                'Cayenne Pepper',
                'Olive Oil',
                'Sesame Seed Burger Buns'
            ]
        },
        {
            name: 'Coddled pork with cider',
            img: 'https://www.themealdb.com/images/media/meals/7vpsfp1608588991.jpg',
            ingredients: [
                'Butter',
                'Pork Chops',
                'Bacon',
                'Potatoes',
                'Carrots',
                'Swede',
                'Cabbage',
                'Bay Leaf',
                'Cider',
                'Chicken Stock'
            ]
        },
        {
            name: 'Cevapi Sausages',
            img: 'https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg',
            ingredients: [
                'Minced Beef',
                'Minced Pork',
                'Onion',
                'Garlic',
                'Parsley',
                'Paprika',
                'Baking Powder',
                'Breadcrumbs',
                'Water',
                'Vegetable Stock Cube',
                'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Croatian lamb peka',
            img: 'https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg',
            ingredients: [
                'Potatoes', 'Courgettes',
                'Carrots', 'Green Pepper',
                'Aubergine', 'Onion',
                'Lamb Shoulder', 'Garlic Sauce',
                'Tomato Puree', 'Olive Oil',
                'Thyme', 'White Wine',
                'Pepper'
            ]
        },
        {
            name: 'Croatian Bean Stew',
            img: 'https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg',
            ingredients: [
                'Cannellini Beans',
                'Vegetable Oil',
                'Tomatoes',
                'Challots',
                'Garlic',
                'Parsley',
                'Chorizo'
            ]
        },
        {
            name: 'Chivito uruguayo',
            img: 'https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg',
            ingredients: [
                'Beef Brisket', 'Bread',
                'Lettuce', 'Tomato',
                'Ham', 'Mozzarella',
                'Bacon', 'Egg',
                'Onion', 'Pepper'
            ]
        },
        {
            name: 'Dal fry',
            img: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
            ingredients: [
                'Toor dal', 'Water',
                'Salt', 'Turmeric',
                'Ghee', 'Chopped tomatoes',
                'Cumin seeds', 'Mustard Seeds',
                'Bay Leaf', 'Green Chili',
                'Ginger', 'Cilantro',
                'Red Pepper', 'Salt',
                'Sugar', 'Garam Masala'
            ]
        },
        {
            name: 'Dundee cake',
            img: 'https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg',
            ingredients: [
                'Almonds', 'Butter',
                'Muscovado Sugar', 'Orange',
                'Apricot Jam', 'Plain Flour',
                'Baking Powder', 'Eggs',
                'Ground Almonds', 'Milk',
                'Dried Fruit', 'Glace Cherry',
                'Milk', 'Caster Sugar'
            ]
        },
        {
            name: 'Duck Confit',
            img: 'https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg',
            ingredients: [
                'Sea Salt',
                'Bay Leaf',
                'Garlic',
                'Thyme',
                'Duck Legs',
                'White Wine'
            ]
        },
        {
            name: 'Eton Mess',
            img: 'https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg',
            ingredients: [
                'strawberries',
                'double cream',
                'meringue nests',
                'ginger cordial',
                'Mint'
            ]
        },
        {
            name: 'Eccles Cakes',
            img: 'https://www.themealdb.com/images/media/meals/wtqrqw1511639627.jpg',
            ingredients: [
                'Butter', 'Plain Flour',
                'Lemon', 'Butter',
                'Currants', 'Mixed Peel',
                'Muscovado Sugar', 'Cinnamon',
                'Ginger', 'Allspice',
                'Lemon', 'Eggs',
                'Sugar'
            ]
        },
        {
            name: 'English Breakfast',
            img: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
            ingredients: [
                'Sausages',
                'Bacon',
                'Mushrooms',
                'Tomatoes',
                'Black Pudding',
                'Eggs',
                'Bread'
            ]
        },
        {
            name: 'Escovitch Fish',
            img: 'https://www.themealdb.com/images/media/meals/1520084413.jpg',
            ingredients: [
                'Red Snapper', 'Vegetable Oil',
                'Garlic', 'Ginger',
                'Thyme', 'Bay Leaf',
                'Red Pepper', 'Yellow Pepper',
                'Onion', 'Carrots',
                'Sugar', 'Allspice',
                'Worcestershire Sauce', 'Scotch Bonnet',
                'Lime', 'Malt Vinegar',
                'Pepper'
            ]
        },
        {
            name: 'Egg Drop Soup',
            img: 'https://www.themealdb.com/images/media/meals/1529446137.jpg',
            ingredients: [
                'Chicken Stock',
                'Salt',
                'Sugar',
                'Pepper',
                'Sesame Seed Oil',
                'Peas',
                'Mushrooms',
                'Cornstarch',
                'Water',
                'Spring Onions'
            ]
        },
        {
            name: 'Egyptian Fatteh',
            img: 'https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg',
            ingredients: [
                'Beef', 'Onion',
                'Chicken Stock Cube', 'Tomatoes',
                'Garlic Clove', 'Tomato Puree',
                'Rice', 'Noodles',
                'Butter', 'Olive Oil',
                'Pita Bread', 'Cumin',
                'White Wine Vinegar', 'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Fish pie',
            img: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
            ingredients: [
                'Floury Potatoes',
                'Olive Oil',
                'Semi-skimmed Milk',
                'White Fish Fillets',
                'Plain flour',
                'Nutmeg',
                'Double Cream',
                'Jerusalem Artichokes',
                'Leek',
                'Prawns',
                'Parsley',
                'Dill',
                'Lemon',
                'Gruyère',
                'Lemon'
            ]
        },
        {
            name: 'French Lentils With Garlic and Thyme',
            img: 'https://www.themealdb.com/images/media/meals/vwwspt1487394060.jpg',
            ingredients: [
                'Olive Oil',
                'Onion',
                'Garlic',
                'Carrot',
                'French Lentils',
                'Thyme',
                'Bay Leaf',
                'Salt',
                'Celery'
            ]
        },
        {
            name: 'Fettucine alfredo',
            img: 'https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg',
            ingredients: [
                'Clotted Cream',
                'Butter',
                'Corn Flour',
                'Parmesan Cheese',
                'Nutmeg',
                'Fettuccine',
                'Parsley'
            ]
        },
        {
            name: 'Full English Breakfast',
            img: 'https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg',
            ingredients: [
                'Sausages',
                'Bacon',
                'Mushrooms',
                'Tomatoes',
                'Black Pudding',
                'Eggs',
                'Bread',
                'Baked Beans'
            ]
        },
        {
            name: 'French Onion Soup',
            img: 'https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg',
            ingredients: [
                'Butter',
                'Olive Oil',
                'Onion',
                'Sugar',
                'Garlic Clove',
                'Plain Flour',
                'Dry White Wine',
                'Beef Stock',
                'Bread',
                'Gruyère'
            ]
        },
        {
            name: 'Flamiche',
            img: 'https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg',
            ingredients: [
                'Butter', 'Leek',
                'Salt', 'Creme Fraiche',
                'Egg', 'Egg Yolks',
                'Nutmeg', 'Plain Flour',
                'Salt', 'Butter',
                'Lard', 'Cheddar Cheese',
                'Water'
            ]
        },
        {
            name: 'French Omelette',
            img: 'https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg',
            ingredients: [
                'Eggs',
                'Butter',
                'Parmesan',
                'Tarragon',
                'Parsley',
                'Chives',
                'Gruyère'
            ]
        },
        {
            name: 'Fish Stew with Rouille',
            img: 'https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg',
            ingredients: [
                'Prawns', 'Olive Oil',
                'Dry White Wine', 'Fish Stock',
                'Fennel', 'Onion',
                'Garlic', 'Potatoes',
                'Orange', 'Star Anise',
                'Bay Leaf', 'Harissa Spice',
                'Tomato Puree', 'Chopped Tomatoes',
                'Mussels', 'White Fish',
                'Thyme', 'Bread'
            ]
        },
        {
            name: 'Fennel Dauphinoise',
            img: 'https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg',
            ingredients: [
                'Potatoes',
                'Fennel',
                'Garlic',
                'Milk',
                'Double Cream',
                'Butter',
                'Parmesan Cheese'
            ]
        },
        {
            name: 'Fruit and Cream Cheese Breakfast Pastries',
            img: 'https://www.themealdb.com/images/media/meals/1543774956.jpg',
            ingredients: [
                'Cream Cheese',
                'Sugar',
                'Vanilla Extract',
                'Flour',
                'Puff Pastry',
                'Strawberries',
                'Raspberries',
                'Blackberries'
            ]
        },
        {
            name: 'French Onion Chicken with Roasted Carrots & Mashed Potatoes',
            img: 'https://www.themealdb.com/images/media/meals/b5ft861583188991.jpg',
            ingredients: [
                'Chicken Breasts',
                'Carrots',
                'Small Potatoes',
                'Onion',
                'Beef Stock',
                'Mozzarella',
                'Sour Cream',
                'Butter',
                'Sugar',
                'Vegetable Oil',
                'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Ful Medames',
            img: 'https://www.themealdb.com/images/media/meals/lvn2d51598732465.jpg',
            ingredients: [
                'Broad Beans',
                'Parsley',
                'Olive Oil',
                'Lemons',
                'Garlic Clove',
                'Cumin'
            ]
        },
        {
            name: 'Feteer Meshaltet',
            img: 'https://www.themealdb.com/images/media/meals/9f4z6v1598734293.jpg',
            ingredients: ['Flour', 'Water', 'Salt', 'Unsalted Butter', 'Olive Oil']
        },
        {
            name: 'Fish fofos',
            img: 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
            ingredients: [
                'Haddock', 'Potatoes',
                'Green Chilli', 'Coriander',
                'Cumin Seeds', 'Pepper',
                'Garlic', 'Ginger',
                'Flour', 'Eggs',
                'Breadcrumbs', 'Vegetable Oil'
            ]
        },
        {
            name: 'Fresh sardines',
            img: 'https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg',
            ingredients: ['Sardines', 'Vegetable Oil', 'Flour', 'Salt']
        },
        {
            name: 'Fettuccine Alfredo',
            img: 'https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg',
            ingredients: [
                'Fettuccine',
                'Heavy Cream',
                'Butter',
                'Parmesan',
                'Parsley',
                'Black Pepper'
            ]
        },
        {
            name: 'Garides Saganaki',
            img: 'https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg',
            ingredients: [
                'Raw king prawns',
                'Olive oil',
                'Chopped onion',
                'Freshly chopped parsley',
                'White wine',
                'Chopped tomatoes',
                'Minced garlic',
                'Cubed Feta cheese'
            ]
        },
        {
            name: 'Grilled Mac and Cheese Sandwich',
            img: 'https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg',
            ingredients: [
                'Macaroni', 'Plain Flour',
                'Mustard Powder', 'Garlic powder',
                'Kosher salt', 'Black pepper',
                'Cayenne pepper', 'Butter',
                'Whole Milk', 'Heavy Cream',
                'Monterey Jack Cheese', 'Butter',
                'garlic powder', 'Bread',
                'Cheddar Cheese', 'Colby Jack Cheese',
                'Butter'
            ]
        },
        {
            name: "General Tso's Chicken",
            img: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
            ingredients: [
                'Chicken Breast', 'Plain Flour',
                'Egg', 'Starch',
                'Baking Powder', 'Salt',
                'Onion Salt', 'Garlic Powder',
                'Water', 'Chicken Stock',
                'Duck Sauce', 'Soy Sauce',
                'Honey', 'Rice Vinegar',
                'Sesame Seed Oil', 'Gochujang',
                'Starch', 'Garlic',
                'Spring Onions', 'Ginger'
            ]
        },
        {
            name: 'Gigantes Plaki',
            img: 'https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg',
            ingredients: [
                'Butter Beans',
                'Olive Oil',
                'Onion',
                'Garlic Clove',
                'Tomato Puree',
                'Tomatoes',
                'Sugar',
                'Dried Oregano',
                'Cinnamon',
                'Chopped Parsley'
            ]
        },
        {
            name: 'Gołąbki (cabbage roll)',
            img: 'https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg',
            ingredients: [
                'Cabbage', 'Butter',
                'Onion', 'Ground Beef',
                'Ground Pork', 'Rice',
                'Garlic', 'Salt',
                'Black Pepper', 'Tomato Puree'
            ]
        },
        {
            name: 'Grilled Portuguese sardines',
            img: 'https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg',
            ingredients: [
                'Sardines',
                'Olive Oil',
                'Garlic',
                'Paprika',
                'Lemon',
                'Rosemary',
                'Red Chilli'
            ]
        },
        {
            name: 'Honey Teriyaki Salmon',
            img: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
            ingredients: ['Salmon', 'Olive oil', 'Soy Sauce', 'Sake', 'Sesame Seed']
        },
        {
            name: 'Hot Chocolate Fudge',
            img: 'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg',
            ingredients: [
                'Chocolate Chips',
                'Heavy Cream',
                'Condensed Milk',
                'Vanilla Extract',
                'White Chocolate Chips',
                'Miniature Marshmallows'
            ]
        },
        {
            name: 'Hot and Sour Soup',
            img: 'https://www.themealdb.com/images/media/meals/1529445893.jpg',
            ingredients: [
                'Mushrooms', 'Wood Ear Mushrooms',
                'Tofu', 'Pork',
                'Chicken Stock', 'Salt',
                'Sugar', 'Sesame Seed Oil',
                'Pepper', 'Hotsauce',
                'Vinegar', 'Soy Sauce',
                'Cornstarch', 'Water',
                'Spring Onions'
            ]
        },
        {
            name: 'Home-made Mandazi',
            img: 'https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg',
            ingredients: ['Self-raising Flour', 'Sugar', 'Eggs', 'Milk']
        },
        {
            name: 'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
            img: 'https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg',
            ingredients: [
                'Potatoes',
                'Broccoli',
                'Garlic',
                'Chicken Breast',
                'Balsamic Vinegar',
                'Honey',
                'Chicken Stock',
                'Butter',
                'Vegetable Oil',
                'Olive Oil'
            ]
        },
        {
            name: 'Honey Yogurt Cheesecake',
            img: 'https://www.themealdb.com/images/media/meals/y2irzl1585563479.jpg',
            ingredients: [
                'Digestive Biscuits',
                'Almonds',
                'Butter',
                'Greek Yogurt',
                'Mascarpone',
                'Eggs',
                'Lemon',
                'Orange',
                'Honey',
                'Fruit Mix'
            ]
        },
        {
            name: 'Ham hock colcannon',
            img: 'https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg',
            ingredients: [
                'Floury Potatoes',
                'Butter',
                'Garlic Clove',
                'Cabbage',
                'Spring Onions',
                'Double Cream',
                'Mustard',
                'Ham',
                'Eggs'
            ]
        },
        {
            name: 'Irish stew',
            img: 'https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg',
            ingredients: [
                'whole wheat',
                'lamb loin chops',
                'olive oil',
                'shallots',
                'carrots',
                'turnips',
                'celeriac',
                'charlotte potatoes',
                'white wine',
                'caster sugar',
                'fresh thyme',
                'oregano',
                'chicken stock'
            ]
        },
        {
            name: 'Jam Roly-Poly',
            img: 'https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg',
            ingredients: [
                'Butter',
                'Self-raising Flour',
                'Vanilla',
                'Suet',
                'Milk',
                'Raspberry Jam',
                'Custard'
            ]
        },
        {
            name: 'Jerk chicken with rice & peas',
            img: 'https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg',
            ingredients: [
                'Chicken Thighs', 'Lime',
                'Spring Onions', 'Ginger',
                'Garlic', 'Onion',
                'Red Chilli', 'Thyme',
                'Lime', 'Soy Sauce',
                'Vegetable Oil', 'Brown Sugar',
                'Allspice', 'Basmati Rice',
                'Coconut Milk', 'Spring Onions',
                'Thyme', 'Garlic',
                'Allspice', 'Kidney Beans'
            ]
        },
        {
            name: 'Jamaican Beef Patties',
            img: 'https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg',
            ingredients: [
                'Plain Flour', 'Salt',
                'Curry Powder', 'Butter',
                'Water', 'Minced Beef',
                'Allspice', 'Black Pepper',
                'Vegetable Oil', 'Onions',
                'Red Pepper', 'Garlic',
                'Thyme', 'Salt',
                'Tomato Ketchup', 'Water',
                'Onions', 'Egg',
                'Water', 'Water'
            ]
        },
        {
            name: 'Japanese gohan rice',
            img: 'https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg',
            ingredients: ['Sushi Rice', 'Mirin', 'Pickle Juice', 'Spring Onions']
        },
        {
            name: 'Japanese Katsudon',
            img: 'https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg',
            ingredients: [
                'Vegetable Oil',
                'Onion',
                'Pork',
                'Vegetable Stock',
                'Soy Sauce',
                'Mirin',
                'Sugar',
                'Eggs',
                'Sushi Rice',
                'Chives'
            ]
        },
        {
            name: 'Kapsalon',
            img: 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg',
            ingredients: [
                'Fries',
                'Doner Meat',
                'Garlic sauce',
                'Hotsauce',
                'Lettuce',
                'Tomato',
                'Cucumber',
                'Gouda cheese'
            ]
        },
        {
            name: 'Kentucky Fried Chicken',
            img: 'https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg',
            ingredients: [
                'Chicken', 'Oil',
                'Egg White', 'Flour',
                'Brown Sugar', 'Salt',
                'paprika', 'onion salt',
                'chili powder', 'black pepper',
                'celery salt', 'sage',
                'garlic powder', 'allspice',
                'oregano', 'basil',
                'marjoram'
            ]
        },
        {
            name: 'Katsu Chicken curry',
            img: 'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
            ingredients: [
                'chicken breast', 'plain flour',
                'egg', 'breadcrumbs',
                'vegetable oil', 'sunflower oil',
                'onions', 'garlic',
                'carrot', 'plain flour',
                'curry powder', 'chicken stock',
                'honey', 'soy sauce',
                'bay leaf', 'garam masala'
            ]
        },
        {
            name: 'Key Lime Pie',
            img: 'https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg',
            ingredients: [
                'Digestive Biscuits',
                'Butter',
                'Condensed Milk',
                'Egg Yolks',
                'Lime',
                'Double Cream',
                'Icing Sugar',
                'Lime'
            ]
        },
        {
            name: 'Kidney Bean Curry',
            img: 'https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg',
            ingredients: [
                'Vegetable Oil',
                'Onion',
                'Garlic',
                'Ginger',
                'Coriander',
                'Cumin',
                'Paprika',
                'Garam Masala',
                'Chopped Tomatoes',
                'Kidney Beans',
                'Basmati Rice'
            ]
        },
        {
            name: 'Kedgeree',
            img: 'https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg',
            ingredients: [
                'Smoked Haddock',
                'Bay Leaves',
                'Milk',
                'Eggs',
                'Parsley',
                'Coriander',
                'Vegetable Oil',
                'Onion',
                'Coriander',
                'Curry Powder',
                'Rice'
            ]
        },
        {
            name: 'Kung Pao Chicken',
            img: 'https://www.themealdb.com/images/media/meals/1525872624.jpg',
            ingredients: [
                'Sake', 'Soy Sauce',
                'Sesame Seed Oil', 'Corn Flour',
                'Water', 'Chicken',
                'Chilli Powder', 'Rice Vinegar',
                'Brown Sugar', 'Spring Onions',
                'Garlic Clove', 'Water Chestnut',
                'Peanuts'
            ]
        },
        {
            name: 'Kung Po Prawns',
            img: 'https://www.themealdb.com/images/media/meals/1525873040.jpg',
            ingredients: [
                'Prawns', 'Soy Sauce',
                'Tomato Puree', 'Corn Flour',
                'Caster Sugar', 'Sunflower Oil',
                'Peanuts', 'Chilli',
                'Brown Sugar', 'Garlic Clove',
                'Water Chestnut', 'Ginger'
            ]
        },
        {
            name: 'Kafteji',
            img: 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg',
            ingredients: [
                'Potatoes',
                'Olive Oil',
                'Green Pepper',
                'Onions',
                'Ras el hanout',
                'Pumpkin',
                'Eggs',
                'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Keleya Zaara',
            img: 'https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg',
            ingredients: [
                'Olive Oil', 'Lamb',
                'Saffron', 'Onion',
                'Water', 'Parsley',
                'Butter', 'Lemon'
            ]
        },
        {
            name: 'Kumpir',
            img: 'https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg',
            ingredients: [
                'Potatoes',
                'Butter',
                'Cheese',
                'Onion',
                'Red Pepper',
                'Red Chile Flakes'
            ]
        },
        {
            name: 'Krispy Kreme Donut',
            img: 'https://www.themealdb.com/images/media/meals/4i5cnx1587672171.jpg',
            ingredients: [
                'Yeast', 'Water',
                'Water', 'Sugar',
                'Salt', 'Eggs',
                'Shortening', 'Flour',
                'Canola Oil', 'Milk',
                'Sugar', 'Vanilla',
                'Boiling Water', 'Butter'
            ]
        },
        {
            name: 'Koshari',
            img: 'https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg',
            ingredients: [
                'Brown Lentils',
                'Rice',
                'Coriander',
                'Macaroni',
                'Chickpeas',
                'Onion',
                'Salt',
                'Vegetable Oil'
            ]
        },
        {
            name: 'Lamb tomato and sweet spices',
            img: 'https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg',
            ingredients: [
                'olive oil', 'ginger',
                'garlic', 'tomatoes',
                'lemon juice', 'caster sugar',
                'vine leaves', 'fennel bulb',
                'lamb mince', 'onion',
                'potato', 'basmati rice',
                'chopped parsley', 'coriander',
                'lemon juice', 'garlic',
                'clove', 'cinnamon',
                'tomatoes'
            ]
        },
        {
            name: 'Lamb Biryani',
            img: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
            ingredients: [
                'Cashew nuts', 'Khus khus',
                'Cumin seeds', 'Onions',
                'Ginger garlic paste', 'Garlic',
                'Mint', 'Cilantro',
                'Saffron', 'Ghee',
                'Basmati rice', 'Full fat yogurt',
                'Cumin Seeds', 'Bay leaf',
                'Cinnamon', 'Cloves',
                'Cardamom', 'Lamb',
                'Red Chilli powder', 'Biryani masala'
            ]
        },
        {
            name: 'Lamb Rogan josh',
            img: 'https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg',
            ingredients: [
                'Onion', 'Sunflower Oil',
                'Garlic', 'Ginger',
                'Madras Paste', 'Paprika',
                'cinnamon stick', 'Cardamom',
                'Clove', 'Bay Leaf',
                'Tomato Purée', 'Lamb',
                'Greek yogurt', 'Coriander'
            ]
        },
        {
            name: 'Laksa King Prawn Noodles',
            img: 'https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg',
            ingredients: [
                'Olive Oil',
                'red chili',
                'Thai red curry paste',
                'vegetable stock cube',
                'coconut milk',
                'fish sauce',
                'rice noodles',
                'lime',
                'king prawns',
                'coriander'
            ]
        },
        {
            name: 'Lamb Tagine',
            img: 'https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg',
            ingredients: [
                'Olive Oil',
                'Onion',
                'Carrots',
                'Lamb Leg',
                'Garlic',
                'Cumin',
                'Ginger',
                'Saffron',
                'Cinnamon',
                'Honey',
                'Apricot',
                'Vegetable Stock Cube',
                'Butternut Squash',
                'Couscous',
                'Parsley'
            ]
        },
        {
            name: 'Lasagne',
            img: 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
            ingredients: [
                'Olive Oil', 'Bacon',
                'Onion', 'Celery',
                'Carrots', 'Garlic',
                'Minced Beef', 'Tomato Puree',
                'Chopped Tomatoes', 'Honey',
                'Lasagne Sheets', 'Creme Fraiche',
                'Mozzarella Balls', 'Parmesan Cheese',
                'Basil Leaves'
            ]
        },
        {
            name: 'Lamb and Potato pie',
            img: 'https://www.themealdb.com/images/media/meals/sxrpws1511555907.jpg',
            ingredients: [
                'Lamb Shoulder',
                'Flour',
                'Vegetable Oil',
                'Onion',
                'Carrots',
                'Vegetable Stock',
                'Potatoes',
                'Shortcrust Pastry',
                'Eggs'
            ]
        },
        {
            name: 'Lancashire hotpot',
            img: 'https://www.themealdb.com/images/media/meals/uttrxw1511637813.jpg',
            ingredients: [
                'Butter',
                'Lamb',
                'Lamb Kidney',
                'Onions',
                'Carrots',
                'Plain Flour',
                'Worcestershire Sauce',
                'Chicken Stock',
                'Bay Leaves',
                'Potatoes'
            ]
        },
        {
            name: 'Leblebi Soup',
            img: 'https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg',
            ingredients: [
                'Olive Oil',
                'Onion',
                'Chickpeas',
                'Vegetable Stock',
                'Cumin',
                'Garlic',
                'Salt',
                'Harissa Spice',
                'Pepper',
                'Lime'
            ]
        },
        {
            name: 'Lasagna Sandwiches',
            img: 'https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg',
            ingredients: [
                'Sour Cream',
                'Chopped Onion',
                'Dried Oregano',
                'Salt',
                'Bread',
                'Bacon',
                'Tomato',
                'Mozzarella',
                'Butter'
            ]
        },
        {
            name: 'Lamb and Lemon Souvlaki',
            img: 'https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg',
            ingredients: [
                'Garlic',
                'Sea Salt',
                'Olive Oil',
                'Lemon',
                'Dill',
                'Lamb Leg',
                'Pita Bread'
            ]
        },
        {
            name: 'Lamb Tzatziki Burgers',
            img: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg',
            ingredients: [
                'Bulgur Wheat', 'Lamb Mince',
                'Cumin', 'Coriander',
                'Paprika', 'Garlic',
                'Olive Oil', 'Bun',
                'Cucumber', 'Greek Yogurt',
                'Mint'
            ]
        },
        {
            name: 'Mediterranean Pasta Salad',
            img: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
            ingredients: [
                'mozzarella balls',
                'baby plum tomatoes',
                'fresh basil',
                'farfalle',
                'extra virgin olive oil',
                'Green Olives',
                'tuna',
                'salt',
                'pepper'
            ]
        },
        {
            name: 'Massaman Beef curry',
            img: 'https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg',
            ingredients: [
                'Peanuts',
                'Coconut cream',
                'Massaman curry paste',
                'Beef',
                'Potatoes',
                'Onion',
                'Lime',
                'Cinnamon stick',
                'Tamarind paste',
                'Brown sugar',
                'Fish Sauce',
                'chilli',
                'Jasmine Rice'
            ]
        },
        {
            name: 'Mushroom & Chestnut Rotolo',
            img: 'https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg',
            ingredients: [
                'Mushrooms', 'Chestnuts',
                'Challots', 'Garlic',
                'Rosemary', 'Wild Mushrooms',
                'Soy Sauce', 'White Wine',
                'Lasagne Sheets', 'Breadcrumbs',
                'Sage', 'Truffle Oil'
            ]
        },
        {
            name: 'Matar Paneer',
            img: 'https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg',
            ingredients: [
                'Sunflower Oil', 'Paneer',
                'Ginger', 'Cumin',
                'Turmeric', 'Coriander',
                'Green Chilli', 'Tomato',
                'Peas', 'Garam Masala',
                'Coriander', 'Naan Bread'
            ]
        },
        {
            name: 'Minced Beef Pie',
            img: 'https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg',
            ingredients: [
                'Vegetable Oil',
                'Minced Beef',
                'Onion',
                'Tomato Puree',
                'Plain Flour',
                'Mushrooms',
                'Beef Stock',
                'Worcestershire Sauce',
                'Shortcrust Pastry',
                'Egg Yolks'
            ]
        },
        {
            name: 'McSinghs Scotch pie',
            img: 'https://www.themealdb.com/images/media/meals/vssrtx1511557680.jpg',
            ingredients: [
                'Cumin', 'Rapeseed Oil',
                'Red Onions', 'Garlic Clove',
                'Green Chilli', 'Red Pepper',
                'Nutmeg', 'Coriander',
                'Lamb Mince', 'Pepper',
                'Coriander', 'Plain Flour',
                'Salt', 'Milk',
                'Lard', 'Egg Yolks'
            ]
        },
        {
            name: 'Madeira Cake',
            img: 'https://www.themealdb.com/images/media/meals/urtqut1511723591.jpg',
            ingredients: [
                'Butter',
                'Caster Sugar',
                'Eggs',
                'Self-raising Flour',
                'Milk',
                'Lemon',
                'Mixed Peel'
            ]
        },
        {
            name: 'Montreal Smoked Meat',
            img: 'https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg',
            ingredients: [
                'Beef Brisket', 'Salt',
                'Black Pepper', 'Coriander',
                'Sugar', 'Bay Leaf',
                'Cloves', 'Black Pepper',
                'Coriander', 'Paprika',
                'Garlic', 'Onion',
                'Dill', 'English Mustard',
                'Celery Salt', 'Red Pepper Flakes'
            ]
        },
        {
            name: 'Ma Po Tofu',
            img: 'https://www.themealdb.com/images/media/meals/1525874812.jpg',
            ingredients: [
                'Tofu', 'Minced Beef',
                'Sesame Seed Oil', 'Doubanjiang',
                'Fermented Black Beans', 'Pepper',
                'Salt', 'Sichuan pepper',
                'Soy Sauce', 'Water',
                'Olive Oil', 'Scallions',
                'Spring Onions', 'Garlic',
                'Ginger', 'Water',
                'Cornstarch'
            ]
        },
        {
            name: 'Mbuzi Choma (Roasted Goat)',
            img: 'https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg',
            ingredients: [
                'Goat Meat',
                'Corn Flour',
                'Tomatoes',
                'Salt',
                'Onion',
                'Green Chilli',
                'Coriander Leaves'
            ]
        },
        {
            name: 'Mince Pies',
            img: 'https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg',
            ingredients: [
                'Butter',
                'Plain Flour',
                'Caster Sugar',
                'Mincemeat',
                'Egg',
                'Icing Sugar'
            ]
        },
        {
            name: 'Moussaka',
            img: 'https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg',
            ingredients: [
                'Beef',
                'Aubergine',
                'Greek Yogurt',
                'Egg',
                'Parmesan',
                'Tomato',
                'Tomato Puree',
                'Potatoes'
            ]
        },
        {
            name: 'Mulukhiyah',
            img: 'https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg',
            ingredients: [
                'Mulukhiyah',
                'Onion',
                'Beef',
                'Salt',
                'Water',
                'Garlic Clove',
                'Olive Oil'
            ]
        },
        {
            name: 'Mustard champ',
            img: 'https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg',
            ingredients: [
                'Potatoes',
                'Milk',
                'Butter',
                'Mustard',
                'Spring Onions',
                'Spring Onions'
            ]
        },
        {
            name: 'Moroccan Carrot Soup',
            img: 'https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg',
            ingredients: [
                'Carrots',
                'Onion',
                'Garlic Clove',
                'Cumin',
                'Coriander',
                'Olive Oil',
                'Garam Masala',
                'Lemon Juice'
            ]
        },
        {
            name: 'Mee goreng mamak',
            img: 'https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg',
            ingredients: [
                'Peanuts', 'Chilli',
                'Prawns', 'Oil',
                'Water', 'Tamarind Paste',
                'Potatoes', 'Red Onions',
                'Garlic Clove', 'Cabbage',
                'Chinese Broccoli', 'Tofu',
                'Soy Sauce', 'Noodles',
                'Egg'
            ]
        },
        {
            name: 'Mushroom soup with buckwheat',
            img: 'https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg',
            ingredients: [
                'Mushrooms',
                'Buckwheat',
                'Vegetable Oil',
                'Onion',
                'Garlic',
                'Bay Leaf',
                'Vegetable Stock Cube',
                'Sour Cream',
                'White Wine Vinegar',
                'Parsley'
            ]
        },
        {
            name: 'Nutty Chicken Curry',
            img: 'https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg',
            ingredients: [
                'Red Chilli',
                'Ginger',
                'Garlic',
                'Coriander',
                'Sunflower Oil',
                'Chicken Breasts',
                'Peanut Butter',
                'Chicken Stock',
                'Greek Yogurt'
            ]
        },
        {
            name: 'New York cheesecake',
            img: 'https://www.themealdb.com/images/media/meals/swttys1511385853.jpg',
            ingredients: [
                'Butter', 'Sour Cream',
                'Sugar', 'Cream Cheese',
                'Caster Sugar', 'Plain Flour',
                'Lemon Juice', 'Eggs',
                'Sour Cream', 'Sour Cream',
                'Caster Sugar', 'Lemon Juice'
            ]
        },
        {
            name: 'Nanaimo Bars',
            img: 'https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg',
            ingredients: [
                'Custard',
                'Caster Sugar',
                'Cocoa',
                'Egg',
                'Digestive Biscuits',
                'Desiccated Coconut',
                'Almonds',
                'Butter',
                'Double Cream',
                'Custard Powder',
                'Icing Sugar',
                'Dark Chocolate',
                'Butter'
            ]
        },
        {
            name: 'Nasi lemak',
            img: 'https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg',
            ingredients: [
                'Coconut Milk', 'Water',
                'Ginger Paste', 'Ginger',
                'Bay Leaf', 'Rice',
                'Eggs', 'Cucumber',
                'Peanuts', 'Anchovy Fillet',
                'Vegetable Oil', 'Onion',
                'Garlic', 'Shallots',
                'Chilli Powder', 'Anchovy Fillet',
                'Sugar', 'Tamarind Paste'
            ]
        },
        {
            name: 'Osso Buco alla Milanese',
            img: 'https://www.themealdb.com/images/media/meals/wwuqvt1487345467.jpg',
            ingredients: [
                'Veal', 'Flour',
                'Olive Oil', 'Butter',
                'Onion', 'Carrot',
                'Celery', 'Fennel',
                'Garlic', 'Orange Zest',
                'Marjoram', 'Bay Leaf',
                'Dry White Wine', 'Chicken Stock',
                'Tomatoes', 'Parsley',
                'Garlic', 'Lemon Zest'
            ]
        },
        {
            name: 'Oxtail with broad beans',
            img: 'https://www.themealdb.com/images/media/meals/1520083578.jpg',
            ingredients: [
                'Oxtail', 'Onion',
                'Spring Onions', 'Garlic',
                'Ginger', 'Scotch Bonnet',
                'Soy Sauce', 'Fresh Thyme',
                'Vegetable Oil', 'Water',
                'Broad Beans', 'Corn Flour',
                'Water'
            ]
        },
        {
            name: 'Pad See Ew',
            img: 'https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg',
            ingredients: [
                'rice stick noodles',
                'dark soy sauce',
                'oyster sauce',
                'soy sauce',
                'white vinegar',
                'sugar',
                'water',
                'peanut oil',
                'garlic',
                'Chicken',
                'Egg',
                'Chinese broccoli'
            ]
        },
        {
            name: 'Potato Gratin with Chicken',
            img: 'https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg',
            ingredients: [
                'Potatoes',
                'Onions',
                'Olive Oil',
                'Chicken Stock',
                'Creme Fraiche',
                'Parmesan',
                'Chicken Breasts',
                'Bacon',
                'Spinach',
                'Peas'
            ]
        },
        {
            name: 'Poutine',
            img: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
            ingredients: ['Vegetable Oil', 'Beef Gravy', 'Potatoes', 'Cheese Curds']
        },
        {
            name: 'Pilchard puttanesca',
            img: 'https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg',
            ingredients: [
                'Spaghetti',
                'Olive Oil',
                'Onion',
                'Garlic',
                'Red Chilli',
                'Tomato Puree',
                'Pilchards',
                'Black Olives',
                'Parmesan'
            ]
        },
        {
            name: 'Pork Cassoulet',
            img: 'https://www.themealdb.com/images/media/meals/wxuvuv1511299147.jpg',
            ingredients: [
                'Goose Fat', 'Pork',
                'Onion', 'Garlic',
                'Carrots', 'Fennel Seeds',
                'Red Wine Vinegar', 'Vegetable Stock',
                'Tomato Puree', 'Rosemary',
                'Parsley', 'Haricot Beans',
                'Breadcrumbs', 'Oil',
                'Bread', 'Broccoli'
            ]
        },
        {
            name: 'Pancakes',
            img: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg',
            ingredients: [
                'Flour',
                'Eggs',
                'Milk',
                'Sunflower Oil',
                'Sugar',
                'Raspberries',
                'Blueberries'
            ]
        },
        {
            name: 'Pumpkin Pie',
            img: 'https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg',
            ingredients: [
                'Pumpkin',
                'Shortcrust Pastry',
                'Plain Flour',
                'Caster Sugar',
                'Salt',
                'Nutmeg',
                'Cinnamon',
                'Eggs',
                'Butter',
                'Milk',
                'Icing Sugar'
            ]
        },
        {
            name: 'Peanut Butter Cheesecake',
            img: 'https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg',
            ingredients: [
                'Butter',
                'Peanut Cookies',
                'Gelatine Leafs',
                'Ricotta',
                'Peanut Butter',
                'Golden Syrup',
                'Milk',
                'Double Cream',
                'Light Brown Soft Sugar',
                'Peanut Brittle'
            ]
        },
        {
            name: 'Peach & Blueberry Grunt',
            img: 'https://www.themealdb.com/images/media/meals/ssxvup1511387476.jpg',
            ingredients: [
                'Corn Flour',
                'Orange',
                'Orange',
                'Caster Sugar',
                'Peaches',
                'Blueberries',
                'Self-raising Flour',
                'Butter',
                'Muscovado Sugar',
                'Cinnamon',
                'Milk'
            ]
        },
        {
            name: 'Parkin Cake',
            img: 'https://www.themealdb.com/images/media/meals/qxuqtt1511724269.jpg',
            ingredients: [
                'Butter',
                'Egg',
                'Milk',
                'Golden Syrup',
                'Black Treacle',
                'Brown Sugar',
                'Oatmeal',
                'Self-raising Flour',
                'Ground Ginger'
            ]
        },
        {
            name: 'Pear Tarte Tatin',
            img: 'https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg',
            ingredients: [
                'Pears',
                'Caster Sugar',
                'Butter',
                'Star Anise',
                'Cardamom',
                'Cinnamon',
                'Brandy',
                'Puff Pastry'
            ]
        },
        {
            name: 'Provençal Omelette Cake',
            img: 'https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg',
            ingredients: [
                'Eggs', 'Olive Oil',
                'Courgettes', 'Spring Onions',
                'Red Pepper', 'Garlic Clove',
                'Red Chilli', 'Cream Cheese',
                'Milk', 'Chives',
                'Basil', 'Rocket',
                'Parmesan'
            ]
        },
        {
            name: 'Prawn & Fennel Bisque',
            img: 'https://www.themealdb.com/images/media/meals/rtwwvv1511799504.jpg',
            ingredients: [
                'Tiger Prawns',
                'Olive Oil',
                'Onion',
                'Fennel',
                'Carrots',
                'Dry White Wine',
                'Brandy',
                'Chopped Tomatoes',
                'Fish Stock',
                'Paprika',
                'Double Cream',
                'Prawns'
            ]
        },
        {
            name: 'Pate Chinois',
            img: 'https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg',
            ingredients: [
                'Potatoes', 'Butter',
                'Milk', 'Minced Beef',
                'Onion', 'Creamed Corn',
                'Paprika', 'Parsley',
                'Salt', 'Pepper'
            ]
        },
        {
            name: 'Pouding chomeur',
            img: 'https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg',
            ingredients: [
                'Butter',
                'Sugar',
                'Eggs',
                'Vanilla Extract',
                'Flour',
                'Baking Powder',
                'Milk',
                'Maple Syrup',
                'Brown Sugar',
                'Single Cream',
                'Butter'
            ]
        },
        {
            name: 'Peanut Butter Cookies',
            img: 'https://www.themealdb.com/images/media/meals/1544384070.jpg',
            ingredients: ['Peanut Butter', 'Sugar', 'Egg']
        },
        {
            name: 'Pizza Express Margherita',
            img: 'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg',
            ingredients: [
                'Water', 'Sugar',
                'Yeast', 'Plain Flour',
                'Salt', 'Olive Oil',
                'Passata', 'Mozzarella',
                'Oregano', 'Basil',
                'Black Pepper'
            ]
        },
        {
            name: 'Paszteciki (Polish Pasties)',
            img: 'https://www.themealdb.com/images/media/meals/c9a3l31593261890.jpg',
            ingredients: [
                'Flour', 'Salt',
                'Egg', 'Egg',
                'Butter', 'Butter',
                'Onion', 'Swede',
                'Beef Brisket', 'Eggs',
                'Salt', 'Pepper'
            ]
        },
        {
            name: 'Pierogi (Polish Dumplings)',
            img: 'https://www.themealdb.com/images/media/meals/45xxr21593348847.jpg',
            ingredients: [
                'Butter', 'Chopped Onion',
                'Sauerkraut', 'Butter',
                'Chopped Onion', 'Potatoes',
                'Eggs', 'Sour Cream',
                'Flour', 'Salt',
                'Baking Powder'
            ]
        },
        {
            name: 'Polskie Naleśniki (Polish Pancakes)',
            img: 'https://www.themealdb.com/images/media/meals/58bkyo1593350017.jpg',
            ingredients: [
                'Flour', 'Eggs',
                'Milk', 'Water',
                'Salt', 'Sugar',
                'Butter'
            ]
        },
        {
            name: 'Piri-piri chicken and slaw',
            img: 'https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg',
            ingredients: [
                'Chicken', 'Red Chilli',
                'Garlic', 'Ginger',
                'Dried Oregano', 'Coriander',
                'Paprika', 'Red Wine Vinegar',
                'Oil', 'Red Onions',
                'Carrots', 'Beetroot',
                'Cabbage', 'Mayonnaise',
                'Greek Yogurt', 'Red Wine Vinegar',
                'Cumin Seeds'
            ]
        },
        {
            name: 'Portuguese prego with green piri-piri',
            img: 'https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg',
            ingredients: [
                'Garlic', 'Beef Fillet',
                'Olive Oil', 'Vinegar',
                'Parsley', 'Ciabatta',
                'Rocket', 'Basil Leaves',
                'Parsley', 'Jalapeno',
                'Vinegar', 'Spring Onions',
                'Garlic', 'Caster Sugar'
            ]
        },
        {
            name: 'Portuguese barbecued pork (Febras assadas)',
            img: 'https://www.themealdb.com/images/media/meals/cybyue1614349443.jpg',
            ingredients: [
                'Pork',
                'White Wine',
                'Paprika',
                'Lemon',
                'Lemon Juice',
                'Olive Oil',
                'Mayonnaise',
                'Potatoes',
                'Vegetable Oil'
            ]
        },
        {
            name: 'Portuguese fish stew (Caldeirada de peixe)',
            img: 'https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg',
            ingredients: [
                'Onions', 'Red Pepper',
                'Coriander', 'Red Chilli',
                'Garlic', 'Dry White Wine',
                'Saffron', 'Bay Leaf',
                'Potatoes', 'Plum Tomatoes',
                'Cod', 'Squid',
                'Tiger Prawns', 'Clams',
                'Mussels', 'Baguette'
            ]
        },
        {
            name: 'Portuguese custard tarts',
            img: 'https://www.themealdb.com/images/media/meals/vmz7gl1614350221.jpg',
            ingredients: [
                'Plain Flour', 'Icing Sugar',
                'Puff Pastry', 'Caster Sugar',
                'Lemon Zest', 'Cinnamon',
                'Eggs', 'Egg Yolks',
                'Corn Flour', 'Whole Milk',
                'Vanilla', 'Cinnamon'
            ]
        },
        {
            name: 'Rigatoni with fennel sausage sauce',
            img: 'https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg',
            ingredients: [
                'olive oil',
                'Italian fennel sausages',
                'onion',
                'fennel bulb',
                'smoky paprika',
                'garlic',
                'fennel seeds',
                'red wine',
                'chopped tomatoes',
                'caster sugar',
                'pitted black olives',
                'rigatoni',
                'pecorino',
                'anchovy fillet',
                'garlic',
                'olive oil',
                'basil leaves'
            ]
        },
        {
            name: 'Rocky Road Fudge',
            img: 'https://www.themealdb.com/images/media/meals/vtxyxv1483567157.jpg',
            ingredients: [
                'Miniature Marshmallows',
                'Chocolate Chips',
                'Peanut Butter',
                'Vanilla Extract',
                'Peanuts'
            ]
        },
        {
            name: 'Recheado Masala Fish',
            img: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
            ingredients: [
                'Mackerel', 'Red Chili',
                'Ginger', 'Garlic',
                'Pepper', 'Cumin',
                'Turmeric', 'Cinnamon stick',
                'Clove', 'Cardamom',
                'Sugar', 'Tamarind ball',
                'Vinegar', 'Oil'
            ]
        },
        {
            name: 'Ribollita',
            img: 'https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg',
            ingredients: [
                'Olive Oil', 'Onion',
                'Carrot', 'Celery',
                'Garlic', 'Cannellini Beans',
                'Canned tomatoes', 'Water',
                'Rosemary', 'Thyme',
                'Kale', 'Wholegrain Bread',
                'Red Onion', 'Parmesan'
            ]
        },
        {
            name: 'Roasted Eggplant With Tahini, Pine Nuts, and Lentils',
            img: 'https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg',
            ingredients: [
                'Olive Oil',
                'Carrots',
                'Celery',
                'Onion',
                'Garlic',
                'Brown Lentils',
                'Bay Leaves',
                'Water',
                'Salt',
                'Apple Cider Vinegar',
                'Pepper',
                'Egg Plants',
                'Rosemary',
                'Pine nuts',
                'Parsley'
            ]
        },
        {
            name: 'Rock Cakes',
            img: 'https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg',
            ingredients: [
                'Self-raising Flour',
                'Caster Sugar',
                'Baking Powder',
                'Butter',
                'Dried Fruit',
                'Eggs',
                'Milk',
                'Vanilla Extract'
            ]
        },
        {
            name: 'Ratatouille',
            img: 'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg',
            ingredients: [
                'Aubergine',
                'Courgettes',
                'Yellow Pepper',
                'Tomato',
                'Olive Oil',
                'Basil',
                'Onion',
                'Garlic Clove',
                'Red Wine Vinegar',
                'Sugar'
            ]
        },
        {
            name: 'Rappie Pie',
            img: 'https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg',
            ingredients: [
                'Butter',
                'Onions',
                'Chicken Stock',
                'Chicken Breast',
                'Potatoes',
                'Salt',
                'Black Pepper'
            ]
        },
        {
            name: 'Red Peas Soup',
            img: 'https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg',
            ingredients: [
                'Kidney Beans', 'Carrots',
                'Spring Onions', 'Thyme',
                'Onion', 'Black Pepper',
                'Red Pepper', 'Garlic Clove',
                'Allspice', 'Beef',
                'Water', 'Potatoes',
                'Plain Flour', 'Water',
                'Coconut Milk'
            ]
        },
        {
            name: 'Roast fennel and aubergine paella',
            img: 'https://www.themealdb.com/images/media/meals/1520081754.jpg',
            ingredients: [
                'Baby Aubergine', 'Fennel',
                'Red Pepper', 'Courgettes',
                'Onion', 'Paella Rice',
                'Paprika', 'Saffron',
                'White Wine', 'Vegetable Stock',
                'Frozen Peas', 'Lemon',
                'Parsley', 'Salt',
                'Black Pepper'
            ]
        },
        {
            name: 'Rosół (Polish Chicken Soup)',
            img: 'https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg',
            ingredients: [
                'Chicken Legs', 'Onions',
                'Carrots', 'Leek',
                'Celery', 'Cabbage',
                'Cloves', 'Allspice',
                'Bay Leaf', 'Parsley',
                'Dill', 'Pepper',
                'Salt'
            ]
        },
        {
            name: 'Rogaliki (Polish Croissant Cookies)',
            img: 'https://www.themealdb.com/images/media/meals/7mxnzz1593350801.jpg',
            ingredients: [
                'Butter',
                'Egg Yolks',
                'Cream Cheese',
                'Baking Powder',
                'Flour',
                'Jam'
            ]
        },
        {
            name: 'Roti john',
            img: 'https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg',
            ingredients: [
                'Minced Beef',
                'Onion',
                'Eggs',
                'Chilli',
                'Baguette',
                'Salt',
                'Pepper',
                'Mayonnaise'
            ]
        },
        {
            name: 'Spaghetti Bolognese',
            img: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
            ingredients: [
                'onions',
                'olive oil',
                'garlic',
                'lean minced beef',
                'mushrooms',
                'dried oregano',
                'tomatoes',
                'hot beef stock',
                'tomato puree',
                'worcestershire sauce',
                'spaghetti',
                'parmesan'
            ]
        },
        {
            name: 'Spicy Arrabiata Penne',
            img: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
            ingredients: [
                'penne rigate',
                'olive oil',
                'garlic',
                'chopped tomatoes',
                'red chile flakes',
                'italian seasoning',
                'basil',
                'Parmigiano-Reggiano'
            ]
        },
        {
            name: 'Smoky Lentil Chili with Squash',
            img: 'https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg',
            ingredients: [
                'Olive Oil', 'Onion',
                'Leek', 'Garlic',
                'Cumin', 'Coriander',
                'Smoked Paprika', 'Cinnamon',
                'Chili Powder', 'Cocoa',
                'Dried Oregano', 'Diced Tomatoes',
                'Water', 'Carrots',
                'Brown Lentils', 'Sea Salt',
                'Squash', 'Cashews',
                'Apple Cider Vinegar'
            ]
        },
        {
            name: 'Sticky Toffee Pudding Ultimate',
            img: 'https://www.themealdb.com/images/media/meals/xrptpq1483909204.jpg',
            ingredients: [
                'Medjool dates',
                'water',
                'vanilla extract',
                'self-raising flour',
                'bicarbonate of soda',
                'eggs',
                'butter',
                'demerara sugar',
                'black treacle',
                'milk',
                'ice cream',
                'muscovado sugar',
                'butter',
                'double cream',
                'black treacle'
            ]
        },
        {
            name: 'Spicy North African Potato Salad',
            img: 'https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg',
            ingredients: [
                'Small Potatoes',
                'Harissa Spice',
                'olive oil',
                'Lemon',
                'Spring onions',
                'Rocket',
                'Feta',
                'Mint',
                'Pine nuts',
                'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt',
            img: 'https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg',
            ingredients: [
                'Olive Oil',
                'Egg Plants',
                'Harissa',
                'Chickpeas',
                'Cherry Tomatoes',
                'Greek yogurt',
                'Ground cumin',
                'Parsley'
            ]
        },
        {
            name: 'Salmon Prawn Risotto',
            img: 'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',
            ingredients: [
                'butter',
                'onion',
                'rice',
                'white wine',
                'vegetable stock',
                'lemon',
                'King Prawns',
                'salmon',
                'asparagus',
                'black pepper',
                'Parmesan'
            ]
        },
        {
            name: 'Salted Caramel Cheescake',
            img: 'https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg',
            ingredients: [
                'Digestive Biscuits',
                'Pretzels',
                'Butter',
                'Cream Cheese',
                'Vanilla Extract',
                'Icing Sugar',
                'Caramel',
                'Sea Salt',
                'Double Cream',
                'Caramel Sauce',
                'Toffee Popcorn',
                'Pretzels'
            ]
        },
        {
            name: 'Seafood fideuà',
            img: 'https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg',
            ingredients: [
                'Mussels', 'Prawns',
                'Saffron', 'Vermicelli',
                'Olive Oil', 'Onions',
                'Garlic', 'Paprika',
                'Monkfish', 'Baby Squid',
                'Fish Stock', 'Tomatoes',
                'Lemon', 'Parsley'
            ]
        },
        {
            name: 'Spinach & Ricotta Cannelloni',
            img: 'https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg',
            ingredients: [
                'Olive Oil', 'Garlic',
                'Caster Sugar', 'Red Wine Vinegar',
                'Chopped Tomatoes', 'Basil Leaves',
                'Mascarpone', 'Milk',
                'Parmesan', 'Mozzarella',
                'Spinach', 'Parmesan',
                'Ricotta', 'Nutmeg',
                'Cannellini Beans'
            ]
        },
        {
            name: 'Squash linguine',
            img: 'https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg',
            ingredients: [
                'Butternut Squash',
                'Garlic',
                'Olive Oil',
                'Linguine Pasta',
                'Sage'
            ]
        },
        {
            name: 'Spanish Tortilla',
            img: 'https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg',
            ingredients: [
                'Onion',
                'Olive Oil',
                'Butter',
                'Potatoes',
                'Garlic',
                'Eggs',
                'Parsley',
                'Baguette',
                'Vine Tomatoes',
                'Olive Oil'
            ]
        },
        {
            name: 'Steak and Kidney Pie',
            img: 'https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg',
            ingredients: [
                'Puff Pastry',
                'Egg White',
                'Egg Yolks',
                'Vegetable Oil',
                'Beef',
                'Lamb Kidney',
                'Onions',
                'Plain Flour',
                'Beef Stock',
                'Salt',
                'Pepper',
                'Worcestershire Sauce'
            ]
        },
        {
            name: 'Sticky Toffee Pudding',
            img: 'https://www.themealdb.com/images/media/meals/xqqqtu1511637379.jpg',
            ingredients: [
                'Butter',
                'Muscovado Sugar',
                'Eggs',
                'Self-raising Flour',
                'Baking Powder',
                'Bicarbonate Of Soda',
                'Black Treacle',
                'Milk',
                'Double Cream',
                'Butter',
                'Muscovado Sugar',
                'Black Treacle',
                'Double Cream',
                'Vanilla Extract'
            ]
        },
        {
            name: 'Spotted Dick',
            img: 'https://www.themealdb.com/images/media/meals/xqvyqr1511638875.jpg',
            ingredients: [
                'Self-raising Flour',
                'Salt',
                'Suet',
                'Currants',
                'Caster Sugar',
                'Lemon',
                'Orange',
                'Milk',
                'Custard'
            ]
        },
        {
            name: 'Summer Pudding',
            img: 'https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg',
            ingredients: [
                'Strawberries',
                'Blackberries',
                'Redcurrants',
                'Raspberries',
                'Caster Sugar',
                'Bread'
            ]
        },
        {
            name: 'Summer Pistou',
            img: 'https://www.themealdb.com/images/media/meals/rqtxvr1511792990.jpg',
            ingredients: [
                'Rapeseed Oil',
                'Leek',
                'Courgettes',
                'Vegetable Stock',
                'Cannellini Beans',
                'Green Beans',
                'Tomatoes',
                'Garlic Clove',
                'Basil',
                'Parmesan'
            ]
        },
        {
            name: 'Split Pea Soup',
            img: 'https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg',
            ingredients: [
                'Ham',
                'Peas',
                'Onions',
                'Carrots',
                'Bay Leaves',
                'Celery',
                'Frozen Peas',
                'Bread'
            ]
        },
        {
            name: 'Sugar Pie',
            img: 'https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg',
            ingredients: [
                'Brown Sugar',
                'Butter',
                'Eggs',
                'Vanilla Extract',
                'Salt',
                'Plain Flour',
                'Milk'
            ]
        },
        {
            name: 'Steak Diane',
            img: 'https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg',
            ingredients: [
                'Canola Oil', 'Beef Fillet',
                'Beef Stock', 'Butter',
                'Garlic', 'Challots',
                'Mushrooms', 'Brandy',
                'Heavy Cream', 'Dijon Mustard',
                'Worcestershire Sauce', 'Tabasco Sauce',
                'Parsley', 'Chives',
                'Salt', 'Pepper'
            ]
        },
        {
            name: 'Saltfish and Ackee',
            img: 'https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg',
            ingredients: [
                'Salt Cod', 'Ackee',
                'Onion', 'Paprika',
                'Curry Powder', 'Jerusalem Artichokes',
                'Hotsauce', 'Red Pepper',
                'Yellow Pepper', 'Tomatoes',
                'Salt', 'Pepper',
                'Self-raising Flour', 'Suet',
                'Salt', 'Olive Oil'
            ]
        },
        {
            name: 'Sweet and Sour Pork',
            img: 'https://www.themealdb.com/images/media/meals/1529442316.jpg',
            ingredients: [
                'Pork', 'Egg',
                'Water', 'Salt',
                'Sugar', 'Soy Sauce',
                'Starch', 'Tomato Puree',
                'Vinegar', 'Coriander'
            ]
        },
        {
            name: 'Szechuan Beef',
            img: 'https://www.themealdb.com/images/media/meals/1529443236.jpg',
            ingredients: [
                'Beef', 'Salt',
                'Sesame Seed Oil', 'Pepper',
                'Egg White', 'Starch',
                'Oil', 'Ginger',
                'Garlic', 'Onion',
                'Carrots', 'Green Pepper',
                'Celery', 'Mushrooms',
                'Cooking wine', 'Water',
                'Oyster Sauce', 'Hotsauce',
                'Sugar', 'Soy Sauce'
            ]
        },
        {
            name: 'Shrimp Chow Fun',
            img: 'https://www.themealdb.com/images/media/meals/1529445434.jpg',
            ingredients: [
                'Rice Stick Noodles', 'Prawns',
                'Egg', 'Pepper',
                'Sesame Seed Oil', 'Cornstarch',
                'Oil', 'Minced Garlic',
                'Ginger', 'Onion',
                'Bean Sprouts', 'Spring Onions',
                'Cooking wine', 'Oyster Sauce',
                'Sugar', 'Vinegar',
                'Soy Sauce'
            ]
        },
        {
            name: 'Salmon Avocado Salad',
            img: 'https://www.themealdb.com/images/media/meals/1549542994.jpg',
            ingredients: [
                'Salmon', 'Avocado',
                'Cucumber', 'Spinach',
                'Mint', 'Lime',
                'Honey', 'Olive Oil'
            ]
        },
        {
            name: 'Salmon Eggs Eggs Benedict',
            img: 'https://www.themealdb.com/images/media/meals/1550440197.jpg',
            ingredients: [
                'Eggs',
                'White Wine Vinegar',
                'English Muffins',
                'Butter',
                'Smoked Salmon',
                'Lemon Juice',
                'White Wine Vinegar',
                'Egg',
                'Unsalted Butter'
            ]
        },
        {
            name: 'Shakshuka',
            img: 'https://www.themealdb.com/images/media/meals/g373701551450225.jpg',
            ingredients: [
                'Olive Oil',
                'Red Onions',
                'Red Chilli',
                'Garlic',
                'Coriander',
                'Cherry Tomatoes',
                'Caster Sugar',
                'Eggs',
                'Feta'
            ]
        },
        {
            name: 'Smoked Haddock Kedgeree',
            img: 'https://www.themealdb.com/images/media/meals/1550441275.jpg',
            ingredients: [
                'Butter', 'Onion',
                'Cardamom', 'Turmeric',
                'Cinnamon Stick', 'Bay Leaf',
                'Basmati Rice', 'Chicken Stock',
                'Smoked Haddock', 'Eggs',
                'Parsley', 'Lemon'
            ]
        },
        {
            name: 'Stamppot',
            img: 'https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg',
            ingredients: [
                'Potatoes', 'Bay Leaf',
                'Shallots', 'Butter',
                'Kale', 'Sausages',
                'Milk', 'Nutmeg',
                'Salt', 'Pepper'
            ]
        },
        {
            name: 'Snert (Dutch Split Pea Soup)',
            img: 'https://www.themealdb.com/images/media/meals/9ptx0a1565090843.jpg',
            ingredients: [
                'Water',
                'Peas',
                'Pork',
                'Vegetable Stock Cube',
                'Celery',
                'Carrots',
                'Potatoes',
                'Onion',
                'Leek',
                'Celeriac',
                'Sausages'
            ]
        },
        {
            name: 'Spaghetti alla Carbonara',
            img: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
            ingredients: [
                'Spaghetti',
                'Egg Yolks',
                'Salt',
                'Bacon',
                'Pecorino',
                'Black Pepper'
            ]
        },
        {
            name: 'Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots',
            img: 'https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg',
            ingredients: [
                'Potatoes', 'Carrots',
                'Scallions', 'Garlic',
                'Bread', 'Garlic Powder',
                'Soy Sauce', 'Ground Beef',
                'Vegetable Oil', 'Sugar',
                'Butter'
            ]
        },
        {
            name: 'Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini',
            img: 'https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg',
            ingredients: [
                'Potatoes',
                'Apples',
                'Garlic',
                'Lemon',
                'Pork',
                'Zucchini',
                'Chicken Stock',
                'Vegetable Oil',
                'Sugar',
                'Butter'
            ]
        },
        {
            name: 'Strawberry Rhubarb Pie',
            img: 'https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg',
            ingredients: [
                'Flour', 'Salt',
                'Sugar', 'Butter',
                'Water', 'Rhubarb',
                'Strawberries', 'Cornstarch',
                'Sugar', 'Cinnamon',
                'Lemon Juice', 'Unsalted Butter',
                'Milk', 'Sugar'
            ]
        },
        {
            name: 'Stuffed Lamb Tomatoes',
            img: 'https://www.themealdb.com/images/media/meals/u55lbp1585564013.jpg',
            ingredients: [
                'Tomatoes', 'Sugar',
                'Olive Oil', 'Onion',
                'Garlic Clove', 'Lamb',
                'Cinnamon', 'Tomato Puree',
                'Rice', 'Chicken Stock',
                'Dill', 'Chopped Parsley',
                'Mint'
            ]
        },
        {
            name: 'Sledz w Oleju (Polish Herrings)',
            img: 'https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg',
            ingredients: ['Herring', 'Onion', 'Olive Oil', 'Allspice', 'Pepper', 'Bay Leaf']
        },
        {
            name: 'Shawarma',
            img: 'https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg',
            ingredients: [
                'Chicken Thighs', 'Coriander',
                'Cumin', 'Cardamom',
                'Cayenne Pepper', 'Paprika',
                'Lemon Juice', 'Olive Oil',
                'Greek Yogurt', 'Garlic Clove',
                'Cumin', 'Lemon Juice',
                'Lettuce', 'Tomato',
                'Pita Bread'
            ]
        },
        {
            name: 'Spring onion and prawn empanadas',
            img: 'https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg',
            ingredients: [
                'Spring Onions',
                'Olive Oil',
                'Red Chilli',
                'Garlic',
                'Prawns',
                'Feta',
                'Butter',
                'Plain Flour',
                'Egg',
                'White Wine Vinegar'
            ]
        },
        {
            name: 'Seri muka kuih',
            img: 'https://www.themealdb.com/images/media/meals/6ut2og1619790195.jpg',
            ingredients: [
                'Rice',
                'Coconut Milk',
                'Water',
                'Salt',
                'Corn Flour',
                'Flour',
                'Eggs',
                'Coconut Cream',
                'Sugar'
            ]
        },
        {
            name: 'Sushi',
            img: 'https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',
            ingredients: [
                'Sushi Rice',
                'Rice wine',
                'Caster Sugar',
                'Mayonnaise',
                'Rice wine',
                'Soy Sauce',
                'Cucumber'
            ]
        },
        {
            name: 'Teriyaki Chicken Casserole',
            img: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
            ingredients: [
                'soy sauce',
                'water',
                'brown sugar',
                'ground ginger',
                'minced garlic',
                'cornstarch',
                'chicken breasts',
                'stir-fry vegetables',
                'brown rice'
            ]
        },
        {
            name: 'Tandoori chicken',
            img: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
            ingredients: [
                'lemons', 'paprika',
                'red onions', 'chicken thighs',
                'vegetable oil', 'Greek yogurt',
                'ginger', 'garlic clove',
                'garam masala', 'ground cumin',
                'chilli powder', 'turmeric'
            ]
        },
        {
            name: 'Thai Green Curry',
            img: 'https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg',
            ingredients: [
                'potatoes',
                'green beans',
                'sunflower oil',
                'garlic',
                'Thai green curry paste',
                'coconut milk',
                'Thai fish sauce',
                'Sugar',
                'Chicken',
                'lime',
                'basil',
                'Rice'
            ]
        },
        {
            name: 'Toad In The Hole',
            img: 'https://www.themealdb.com/images/media/meals/ytuvwr1503070420.jpg',
            ingredients: [
                'sausages',
                'vegetable oil',
                'plain flour',
                'eggs',
                'horseradish',
                'milk',
                'cherry tomatoes'
            ]
        },
        {
            name: 'Turkey Meatloaf',
            img: 'https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg',
            ingredients: [
                'Olive Oil',
                'Onion',
                'Garlic',
                'Worcestershire Sauce',
                'Tomato Puree',
                'Turkey Mince',
                'Eggs',
                'Breadcrumbs',
                'Barbeque Sauce',
                'Cannellini Beans',
                'Parsley'
            ]
        },
        {
            name: 'Tuna Nicoise',
            img: 'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg',
            ingredients: [
                'Potatoes',
                'Olive Oil',
                'Eggs',
                'Red Wine Vinegar',
                'Capers',
                'Sunflower Oil',
                'Red Onions',
                'Spinach',
                'Tuna'
            ]
        },
        {
            name: 'Tahini Lentils',
            img: 'https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg',
            ingredients: [
                'Tahini',
                'Lemon',
                'Olive Oil',
                'Red Onions',
                'Garlic',
                'Yellow Pepper',
                'Green Beans',
                'Courgettes',
                'Kale',
                'Lentils'
            ]
        },
        {
            name: 'Three Fish Pie',
            img: 'https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg',
            ingredients: [
                'Potatoes', 'Butter',
                'Milk', 'Gruyère',
                'Butter', 'Leek',
                'Plain Flour', 'White Wine',
                'Milk', 'Parsley',
                'Salmon', 'Haddock',
                'Smoked Haddock', 'Eggs'
            ]
        },
        {
            name: 'Treacle Tart',
            img: 'https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg',
            ingredients: [
                'Plain Flour',
                'Butter',
                'Golden Syrup',
                'Breadcrumbs',
                'Lemons',
                'Eggs'
            ]
        },
        {
            name: 'Tarte Tatin',
            img: 'https://www.themealdb.com/images/media/meals/ryspuw1511786688.jpg',
            ingredients: [
                'Puff Pastry',
                'Plain Flour',
                'Braeburn Apples',
                'Caster Sugar',
                'Butter',
                'Creme Fraiche'
            ]
        },
        {
            name: 'Three-cheese souffles',
            img: 'https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg',
            ingredients: [
                'Butter',
                'Parmesan',
                'Milk',
                'Bay Leaves',
                'Plain Flour',
                'English Mustard',
                'Cayenne Pepper',
                'Gruyère',
                'Eggs',
                'Goats Cheese',
                'Double Cream',
                'Spinach'
            ]
        },
        {
            name: 'Tourtiere',
            img: 'https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg',
            ingredients: [
                'Potatoes',
                'Sunflower Oil',
                'Minced Pork',
                'Onion',
                'Garlic Clove',
                'Cinnamon',
                'Allspice',
                'Nutmeg',
                'Vegetable Stock',
                'Shortcrust Pastry',
                'Egg'
            ]
        },
        {
            name: 'Timbits',
            img: 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
            ingredients: [
                'Flour',
                'Sugar',
                'Baking Powder',
                'Salt',
                'Egg',
                'Milk',
                'Oil',
                'Oil',
                'Icing Sugar'
            ]
        },
        {
            name: 'Tunisian Orange Cake',
            img: 'https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg',
            ingredients: [
                'Orange',
                'Caster Sugar',
                'Olive Oil',
                'Flour',
                'Baking Powder',
                'Eggs',
                'Vanilla Extract'
            ]
        },
        {
            name: 'Tunisian Lamb Soup',
            img: 'https://www.themealdb.com/images/media/meals/t8mn9g1560460231.jpg',
            ingredients: [
                'Lamb Mince', 'Garlic',
                'Onion', 'Spinach',
                'Tomato Puree', 'Cumin',
                'Chicken Stock', 'Harissa Spice',
                'Chickpeas', 'Lemon Juice',
                'Macaroni', 'Salt',
                'Pepper'
            ]
        },
        {
            name: 'Tuna and Egg Briks',
            img: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg',
            ingredients: [
                'Olive Oil', 'Spring Onions',
                'Spinach', 'Filo Pastry',
                'Tuna', 'Eggs',
                'Hotsauce', 'Tomatoes',
                'Cucumber', 'Lemon Juice',
                'Apricot Jam'
            ]
        },
        {
            name: 'Tamiya',
            img: 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
            ingredients: [
                'Broad Beans',
                'Spring Onions',
                'Garlic Clove',
                'Parsley',
                'Cumin',
                'Baking Powder',
                'Cayenne Pepper',
                'Flour',
                'Vegetable Oil'
            ]
        },
        {
            name: 'Tonkatsu pork',
            img: 'https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg',
            ingredients: [
                'Pork Chops',
                'Flour',
                'Eggs',
                'Breadcrumbs',
                'Vegetable Oil',
                'Tomato Ketchup',
                'Worcestershire Sauce',
                'Oyster Sauce',
                'Caster Sugar'
            ]
        },
        {
            name: 'Traditional Croatian Goulash',
            img: 'https://www.themealdb.com/images/media/meals/n1hcou1628770088.jpg',
            ingredients: [
                'Beef', 'Onions',
                'Carrots', 'Garlic',
                'Bay Leaf', 'Red Wine',
                'Water', 'Mustard',
                'Salt', 'Pepper',
                'Paprika', 'Vegetable Oil'
            ]
        },
        {
            name: 'Vegan Lasagna',
            img: 'https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg',
            ingredients: [
                'green red lentils',
                'carrot',
                'onion',
                'zucchini',
                'coriander',
                'spinach',
                'lasagne sheets',
                'vegan butter',
                'flour',
                'soya milk',
                'mustard',
                'vinegar'
            ]
        },
        {
            name: 'Vegan Chocolate Cake',
            img: 'https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg',
            ingredients: [
                'self raising flour',
                'coco sugar',
                'cacao',
                'baking powder',
                'flax eggs',
                'almond milk',
                'vanilla',
                'water'
            ]
        },
        {
            name: 'Vietnamese Grilled Pork (bun-thit-nuong)',
            img: 'https://www.themealdb.com/images/media/meals/qqwypw1504642429.jpg',
            ingredients: [
                'Pork', 'Rice Vermicelli',
                'Egg Rolls', 'Challots',
                'Garlic', 'Sugar',
                'Fish Sauce', 'Soy sauce',
                'Pepper', 'Olive Oil',
                'Cucumber', 'Mint',
                'Peanuts'
            ]
        },
        {
            name: 'Venetian Duck Ragu',
            img: 'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
            ingredients: [
                'Olive Oil', 'Duck Legs',
                'Onions', 'Garlic',
                'Cinnamon', 'Plain Flour',
                'Red Wine', 'Chopped Tomatoes',
                'Chicken Stock Cube', 'Rosemary',
                'Bay Leaves', 'Sugar',
                'Milk', 'Paccheri Pasta',
                'Parmesan Cheese'
            ]
        },
        {
            name: 'Vegetarian Casserole',
            img: 'https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg',
            ingredients: [
                'Rapeseed Oil',
                'Onion',
                'Garlic',
                'Paprika',
                'Cumin',
                'Thyme',
                'Carrots',
                'Celery',
                'Red Pepper',
                'Yellow Pepper',
                'Tomato',
                'Vegetable Stock Cube',
                'Courgettes',
                'Thyme',
                'Lentils'
            ]
        },
        {
            name: 'Vegetarian Chilli',
            img: 'https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg',
            ingredients: [
                'Roasted Vegetables',
                'Kidney Beans',
                'Chopped Tomatoes',
                'Mixed Grain'
            ]
        },
        {
            name: "Vegetable Shepherd's Pie",
            img: 'https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg',
            ingredients: [
                'Potatoes', 'Small Potatoes',
                'Salted Butter', 'Mushrooms',
                'Brown Lentils', 'Garlic',
                'Kosher Salt', 'Onion',
                'Tomato Puree', 'Bay Leaves',
                'Olive Oil', 'Dry White Wine',
                'Vegetable Stock', 'Cornstarch',
                'Soy Sauce', 'Rosemary',
                'Parsley', 'Sage',
                'Chives'
            ]
        },
        {
            name: 'White chocolate creme brulee',
            img: 'https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg',
            ingredients: [
                'Double Cream',
                'White Chocolate Chips',
                'Vanilla',
                'Egg Yolks',
                'Caster Sugar',
                'Caster Sugar'
            ]
        },
        {
            name: 'Wontons',
            img: 'https://www.themealdb.com/images/media/meals/1525876468.jpg',
            ingredients: [
                'Pork',
                'Garlic Clove',
                'Ginger',
                'Soy Sauce',
                'Sesame Seed Oil',
                'Carrots',
                'Celery',
                'Spring Onions',
                'Wonton Skin',
                'Oil',
                'Water'
            ]
        },
        {
            name: 'Walnut Roll Gužvara',
            img: 'https://www.themealdb.com/images/media/meals/u9l7k81628771647.jpg',
            ingredients: [
                'Flour', 'Caster Sugar',
                'Yeast', 'Salt',
                'Milk', 'Eggs',
                'Butter', 'Walnuts',
                'Butter', 'Brown Sugar',
                'Cinnamon', 'Milk',
                'Icing Sugar'
            ]
        },
        {
            name: 'Yaki Udon',
            img: 'https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg',
            ingredients: [
                'Udon Noodles',
                'Sesame Seed Oil',
                'Onion',
                'Cabbage',
                'Shiitake Mushrooms',
                'Spring Onions',
                'Mirin',
                'Soy Sauce',
                'Caster Sugar',
                'Worcestershire Sauce'
            ]
        }
    ]
})

  await prisma.backFillIngredient.createMany({
    data: [
        { name: 'digestive biscuits', quantity: 1 },
        { name: 'butter', quantity: 1 },
        { name: 'bramley apples', quantity: 1 },
        { name: 'butter, softened', quantity: 1 },
        { name: 'caster sugar', quantity: 1 },
        { name: 'free-range eggs, beaten', quantity: 1 },
        { name: 'ground almonds', quantity: 1 },
        { name: 'almond extract', quantity: 1 },
        { name: 'flaked almonds', quantity: 1 },
        { name: 'plain flour', quantity: 1 },
        { name: 'braeburn apples', quantity: 1 },
        { name: 'demerara sugar', quantity: 1 },
        { name: 'blackberrys', quantity: 1 },
        { name: 'cinnamon', quantity: 1 },
        { name: 'ice cream', quantity: 1 },
        { name: 'milk', quantity: 1 },
        { name: 'oil', quantity: 1 },
        { name: 'eggs', quantity: 1 },
        { name: 'flour', quantity: 1 },
        { name: 'baking powder', quantity: 1 },
        { name: 'salt', quantity: 1 },
        { name: 'unsalted butter', quantity: 1 },
        { name: 'sugar', quantity: 1 },
        { name: 'peanut butter', quantity: 1 },
        { name: 'chicken thighs', quantity: 1 },
        { name: 'challots', quantity: 1 },
        { name: 'ginger', quantity: 1 },
        { name: 'garlic clove', quantity: 1 },
        { name: 'cayenne pepper', quantity: 1 },
        { name: 'turmeric', quantity: 1 },
        { name: 'cumin', quantity: 1 },
        { name: 'coriander', quantity: 1 },
        { name: 'fennel', quantity: 1 },
        { name: 'tamarind paste', quantity: 1 },
        { name: 'coconut milk', quantity: 1 },
        { name: 'water', quantity: 1 },
        { name: 'chilled butter', quantity: 1 },
        { name: 'cold water', quantity: 1 },
        { name: 'raspberry jam', quantity: 1 },
        { name: 'free-range egg, beaten', quantity: 1 },
        { name: 'bread', quantity: 1 },
        { name: 'sultanas', quantity: 1 },
        { name: 'double cream', quantity: 1 },
        { name: 'nutmeg', quantity: 1 },
        { name: 'mushrooms', quantity: 1 },
        { name: 'english mustard', quantity: 1 },
        { name: 'olive oil', quantity: 1 },
        { name: 'beef fillet', quantity: 1 },
        { name: 'parma ham', quantity: 1 },
        { name: 'puff pastry', quantity: 1 },
        { name: 'egg yolks', quantity: 1 },
        { name: 'aubergine', quantity: 1 },
        { name: 'onion', quantity: 1 },
        { name: 'tomatoes', quantity: 1 },
        { name: 'garlic', quantity: 1 },
        { name: 'green chili', quantity: 1 },
        { name: 'red chili powder', quantity: 1 },
        { name: 'coriander leaves', quantity: 1 },
        { name: 'beef brisket', quantity: 1 },
        { name: 'thyme', quantity: 1 },
        { name: 'rosemary', quantity: 1 },
        { name: 'bay leaves', quantity: 1 },
        { name: 'beef stock', quantity: 1 },
        { name: 'carrots', quantity: 1 },
        { name: 'mustard', quantity: 1 },
        { name: 'potatoes', quantity: 1 },
        { name: 'beef', quantity: 1 },
        { name: 'broccoli', quantity: 1 },
        { name: 'sunflower oil', quantity: 1 },
        { name: 'onions', quantity: 1 },
        { name: 'chorizo', quantity: 1 },
        { name: 'all spice', quantity: 1 },
        { name: 'cloves', quantity: 1 },
        { name: 'cinnamon stick', quantity: 1 },
        { name: 'oregano', quantity: 1 },
        { name: 'ancho chillies', quantity: 1 },
        { name: 'balsamic vinegar', quantity: 1 },
        { name: 'plum tomatoes', quantity: 1 },
        { name: 'tomato ketchup', quantity: 1 },
        { name: 'dark brown sugar', quantity: 1 },
        { name: 'borlotti beans', quantity: 1 },
        { name: 'creme fraiche', quantity: 1 },
        { name: 'parsley', quantity: 1 },
        { name: 'rapeseed oil', quantity: 1 },
        { name: 'celery', quantity: 1 },
        { name: 'leek', quantity: 1 },
        { name: 'vegetable stock', quantity: 1 },
        { name: 'stilton cheese', quantity: 1 },
        { name: 'sausages', quantity: 1 },
        { name: 'tomato sauce', quantity: 1 },
        { name: 'butter beans', quantity: 1 },
        { name: 'black treacle', quantity: 1 },
        { name: 'banana', quantity: 1 },
        { name: 'vanilla extract', quantity: 1 },
        { name: 'pecan nuts', quantity: 1 },
        { name: 'raspberries', quantity: 1 },
        { name: 'swede', quantity: 1 },
        { name: 'red wine', quantity: 1 },
        { name: 'bay leaf', quantity: 1 },
        { name: 'suet', quantity: 1 },
        { name: 'green beans', quantity: 1 },
        { name: 'pepper', quantity: 1 },
        { name: 'shallots', quantity: 1 },
        { name: 'bacon', quantity: 1 },
        { name: 'stout', quantity: 1 },
        { name: 'corn flour', quantity: 1 },
        { name: 'oysters', quantity: 1 },
        { name: 'hazlenuts', quantity: 1 },
        { name: 'lemon', quantity: 1 },
        { name: 'lemon juice', quantity: 1 },
        { name: 'yogurt', quantity: 1 },
        { name: 'mint', quantity: 1 },
        { name: 'self-raising flour', quantity: 1 },
        { name: 'almonds', quantity: 1 },
        { name: 'pink food colouring', quantity: 1 },
        { name: 'apricot', quantity: 1 },
        { name: 'marzipan', quantity: 1 },
        { name: 'icing sugar', quantity: 1 },
        { name: 'goose fat', quantity: 1 },
        { name: 'beef shin', quantity: 1 },
        { name: 'chestnut mushroom', quantity: 1 },
        { name: 'bouquet garni', quantity: 1 },
        { name: 'tomato puree', quantity: 1 },
        { name: 'celeriac', quantity: 1 },
        { name: 'cardamom', quantity: 1 },
        { name: 'yeast', quantity: 1 },
        { name: 'brie', quantity: 1 },
        { name: 'prosciutto', quantity: 1 },
        { name: 'chicken', quantity: 1 },
        { name: 'tomato', quantity: 1 },
        { name: 'red pepper', quantity: 1 },
        { name: 'lime', quantity: 1 },
        { name: 'allspice', quantity: 1 },
        { name: 'soy sauce', quantity: 1 },
        { name: 'cornstarch', quantity: 1 },
        { name: 'vegetable oil', quantity: 1 },
        { name: 'sesame seed oil', quantity: 1 },
        { name: 'egg', quantity: 1 },
        { name: 'starch', quantity: 1 },
        { name: 'noodles', quantity: 1 },
        { name: 'minced garlic', quantity: 1 },
        { name: 'bean sprouts', quantity: 1 },
        { name: 'oyster sauce', quantity: 1 },
        { name: 'cherry tomatoes', quantity: 1 },
        { name: 'salmon', quantity: 1 },
        { name: 'black olives', quantity: 1 },
        { name: 'ricotta', quantity: 1 },
        { name: 'lemons', quantity: 1 },
        { name: 'dark rum', quantity: 1 },
        { name: 'maple syrup', quantity: 1 },
        { name: 'breadcrumbs', quantity: 1 },
        { name: 'red onions', quantity: 1 },
        { name: 'pork', quantity: 1 },
        { name: 'barbeque sauce', quantity: 1 },
        { name: 'hotsauce', quantity: 1 },
        { name: 'rice', quantity: 1 },
        { name: 'cucumber', quantity: 1 },
        { name: 'ground beef', quantity: 1 },
        { name: 'minced beef', quantity: 1 },
        { name: 'sesame seed burger buns', quantity: 1 },
        { name: 'iceberg lettuce', quantity: 1 },
        { name: 'cheese', quantity: 1 },
        { name: 'dill pickles', quantity: 1 },
        { name: 'mayonnaise', quantity: 1 },
        { name: 'white wine vinegar', quantity: 1 },
        { name: 'onion salt', quantity: 1 },
        { name: 'garlic powder', quantity: 1 },
        { name: 'paprika', quantity: 1 },
        { name: 'kielbasa', quantity: 1 },
        { name: 'cabbage', quantity: 1 },
        { name: 'sauerkraut', quantity: 1 },
        { name: 'basil', quantity: 1 },
        { name: 'marjoram', quantity: 1 },
        { name: 'caraway seed', quantity: 1 },
        { name: 'diced tomatoes', quantity: 1 },
        { name: 'worcestershire sauce', quantity: 1 },
        { name: 'spring onions', quantity: 1 },
        { name: 'egg white', quantity: 1 },
        { name: 'bicarbonate of soda', quantity: 1 },
        { name: 'star anise', quantity: 1 },
        { name: 'coconut cream', quantity: 1 },
        { name: 'filo pastry', quantity: 1 },
        { name: 'toor dal', quantity: 1 },
        { name: 'ghee', quantity: 1 },
        { name: 'chopped tomatoes', quantity: 1 },
        { name: 'cumin seeds', quantity: 1 },
        { name: 'mustard seeds', quantity: 1 },
        { name: 'cilantro', quantity: 1 },
        { name: 'garam masala', quantity: 1 },
        { name: 'muscovado sugar', quantity: 1 },
        { name: 'orange', quantity: 1 },
        { name: 'apricot jam', quantity: 1 },
        { name: 'dried fruit', quantity: 1 },
        { name: 'glace cherry', quantity: 1 },
        { name: 'sea salt', quantity: 1 },
        { name: 'duck legs', quantity: 1 },
        { name: 'white wine', quantity: 1 },
        { name: 'plain chocolate', quantity: 1 },
        { name: 'granulated sugar', quantity: 1 },
        { name: 'enchilada sauce', quantity: 1 },
        { name: 'green beans', quantity: 1 },
        { name: 'pepper', quantity: 1 },
        { name: 'shallots', quantity: 1 },
        { name: 'bacon', quantity: 1 },
        { name: 'stout', quantity: 1 },
        { name: 'corn flour', quantity: 1 },
        { name: 'oysters', quantity: 1 },
        { name: 'hazlenuts', quantity: 1 },
        { name: 'lemon', quantity: 1 },
        { name: 'lemon juice', quantity: 1 },
        { name: 'yogurt', quantity: 1 },
        { name: 'mint', quantity: 1 },
        { name: 'self-raising flour', quantity: 1 },
        { name: 'almonds', quantity: 1 },
        { name: 'pink food colouring', quantity: 1 },
        { name: 'apricot', quantity: 1 },
        { name: 'marzipan', quantity: 1 },
        { name: 'icing sugar', quantity: 1 },
        { name: 'goose fat', quantity: 1 },
        { name: 'beef shin', quantity: 1 },
        { name: 'chestnut mushroom', quantity: 1 },
        { name: 'bouquet garni', quantity: 1 },
        { name: 'tomato puree', quantity: 1 },
        { name: 'celeriac', quantity: 1 },
        { name: 'cardamom', quantity: 1 },
        { name: 'yeast', quantity: 1 },
        { name: 'brie', quantity: 1 },
        { name: 'prosciutto', quantity: 1 },
        { name: 'chicken', quantity: 1 },
        { name: 'tomato', quantity: 1 },
        { name: 'red pepper', quantity: 1 },
        { name: 'lime', quantity: 1 },
        { name: 'allspice', quantity: 1 },
        { name: 'soy sauce', quantity: 1 },
        { name: 'cornstarch', quantity: 1 },
        { name: 'vegetable oil', quantity: 1 },
        { name: 'sesame seed oil', quantity: 1 },
        { name: 'egg', quantity: 1 },
        { name: 'starch', quantity: 1 },
        { name: 'noodles', quantity: 1 },
        { name: 'minced garlic', quantity: 1 },
        { name: 'bean sprouts', quantity: 1 },
        { name: 'oyster sauce', quantity: 1 },
        { name: 'cherry tomatoes', quantity: 1 },
        { name: 'salmon', quantity: 1 },
        { name: 'black olives', quantity: 1 },
        { name: 'ricotta', quantity: 1 },
        { name: 'lemons', quantity: 1 },
        { name: 'dark rum', quantity: 1 },
        { name: 'maple syrup', quantity: 1 },
        { name: 'breadcrumbs', quantity: 1 },
        { name: 'red onions', quantity: 1 },
        { name: 'pork', quantity: 1 },
        { name: 'barbeque sauce', quantity: 1 },
        { name: 'hotsauce', quantity: 1 },
        { name: 'rice', quantity: 1 },
        { name: 'cucumber', quantity: 1 },
        { name: 'ground beef', quantity: 1 },
        { name: 'minced beef', quantity: 1 },
        { name: 'sesame seed burger buns', quantity: 1 },
        { name: 'iceberg lettuce', quantity: 1 },
        { name: 'cheese', quantity: 1 },
        { name: 'dill pickles', quantity: 1 },
        { name: 'mayonnaise', quantity: 1 },
        { name: 'white wine vinegar', quantity: 1 },
        { name: 'onion salt', quantity: 1 },
        { name: 'garlic powder', quantity: 1 },
        { name: 'paprika', quantity: 1 },
        { name: 'kielbasa', quantity: 1 },
        { name: 'cabbage', quantity: 1 },
        { name: 'sauerkraut', quantity: 1 },
        { name: 'basil', quantity: 1 },
        { name: 'marjoram', quantity: 1 },
        { name: 'caraway seed', quantity: 1 },
        { name: 'diced tomatoes', quantity: 1 },
        { name: 'worcestershire sauce', quantity: 1 },
        { name: 'spring onions', quantity: 1 },
        { name: 'egg white', quantity: 1 },
        { name: 'bicarbonate of soda', quantity: 1 },
        { name: 'star anise', quantity: 1 },
        { name: 'coconut cream', quantity: 1 },
        { name: 'filo pastry', quantity: 1 },
        { name: 'toor dal', quantity: 1 },
        { name: 'ghee', quantity: 1 },
        { name: 'chopped tomatoes', quantity: 1 },
        { name: 'cumin seeds', quantity: 1 },
        { name: 'mustard seeds', quantity: 1 },
        { name: 'cilantro', quantity: 1 },
        { name: 'garam masala', quantity: 1 },
        { name: 'muscovado sugar', quantity: 1 },
        { name: 'orange', quantity: 1 },
        { name: 'apricot jam', quantity: 1 },
        { name: 'dried fruit', quantity: 1 },
        { name: 'glace cherry', quantity: 1 },
        { name: 'sea salt', quantity: 1 },
        { name: 'duck legs', quantity: 1 },
        { name: 'white wine', quantity: 1 },
        { name: 'plain chocolate', quantity: 1 },
        { name: 'granulated sugar', quantity: 1 },
        { name: 'enchilada sauce', quantity: 1 },
        { name: 'custard', quantity: 1 },
        { name: 'mascarpone', quantity: 1 },
        { name: 'candied peel', quantity: 1 },
        { name: 'sherry', quantity: 1 },
        { name: 'currants', quantity: 1 },
        { name: 'mixed spice', quantity: 1 },
        { name: 'rose water', quantity: 1 },
        { name: 'small potatoes', quantity: 1 },
        { name: 'italian fennel sausages', quantity: 1 },
        { name: 'shiitake mushrooms', quantity: 1 },
        { name: 'quinoa', quantity: 1 },
        { name: 'feta', quantity: 1 },
        { name: 'pickle juice', quantity: 1 },
        { name: 'celery salt', quantity: 1 },
        { name: 'pork chops', quantity: 1 },
        { name: 'cider', quantity: 1 },
        { name: 'minced pork', quantity: 1 },
        { name: 'courgettes', quantity: 1 },
        { name: 'lamb shoulder', quantity: 1 },
        { name: 'garlic sauce', quantity: 1 },
        { name: 'cannellini beans', quantity: 1 },
        { name: 'mozzarella', quantity: 1 },
        { name: 'strawberries', quantity: 1 },
        { name: 'meringue nests', quantity: 1 },
        { name: 'mixed peel', quantity: 1 },
        { name: 'black pudding', quantity: 1 },
        { name: 'red snapper', quantity: 1 },
        { name: 'yellow pepper', quantity: 1 },
        { name: 'scotch bonnet', quantity: 1 },
        { name: 'malt vinegar', quantity: 1 },
        { name: 'peas', quantity: 1 },
        { name: 'pita bread', quantity: 1 },
        { name: 'floury potatoes', quantity: 1 },
        { name: 'semi-skimmed milk', quantity: 1 },
        { name: 'white fish fillets', quantity: 1 },
        { name: 'jerusalem artichokes', quantity: 1 },
        { name: 'prawns', quantity: 1 },
        { name: 'dill', quantity: 1 },
        { name: 'gruyère', quantity: 1 },
        { name: 'carrot', quantity: 1 },
        { name: 'french lentils', quantity: 1 },
        { name: 'clotted cream', quantity: 1 },
        { name: 'fettuccine', quantity: 1 },
        { name: 'baked beans', quantity: 1 },
        { name: 'lard', quantity: 1 },
        { name: 'parmesan', quantity: 1 },
        { name: 'tarragon', quantity: 1 },
        { name: 'chives', quantity: 1 },
        { name: 'fish stock', quantity: 1 },
        { name: 'mussels', quantity: 1 },
        { name: 'blackberries', quantity: 1 },
        { name: 'broad beans', quantity: 1 },
        { name: 'haddock', quantity: 1 },
        { name: 'sardines', quantity: 1 },
        { name: 'sesame seed', quantity: 1 },
        { name: 'chocolate chips', quantity: 1 },
        { name: 'condensed milk', quantity: 1 },
        { name: 'white chocolate chips', quantity: 1 },
        { name: 'miniature marshmallows', quantity: 1 },
        { name: 'wood ear mushrooms', quantity: 1 },
        { name: 'tofu', quantity: 1 },
        { name: 'vinegar', quantity: 1 },
        { name: 'greek yogurt', quantity: 1 },
        { name: 'fruit mix', quantity: 1 },
        { name: 'raw king prawns', quantity: 1 },
        { name: 'chopped onion', quantity: 1 },
        { name: 'freshly chopped parsley', quantity: 1 },
        { name: 'cubed feta cheese', quantity: 1 },
        { name: 'kosher salt', quantity: 1 },
        { name: 'monterey jack cheese', quantity: 1 },
        { name: 'colby jack cheese', quantity: 1 },
        { name: 'duck sauce', quantity: 1 },
        { name: 'rice vinegar', quantity: 1 },
        { name: 'gochujang', quantity: 1 },
        { name: 'dried oregano', quantity: 1 },
        { name: 'chopped parsley', quantity: 1 },
        { name: 'ground pork', quantity: 1 },
        { name: 'whole wheat', quantity: 1 },
        { name: 'lamb loin chops', quantity: 1 },
        { name: 'turnips', quantity: 1 },
        { name: 'charlotte potatoes', quantity: 1 },
        { name: 'fresh thyme', quantity: 1 },
        { name: 'kidney beans', quantity: 1 },
        { name: 'curry powder', quantity: 1 },
        { name: 'sushi rice', quantity: 1 },
        { name: 'mirin', quantity: 1 },
        { name: 'vine leaves', quantity: 1 },
        { name: 'fennel bulb', quantity: 1 },
        { name: 'lamb mince', quantity: 1 },
        { name: 'potato', quantity: 1 },
        { name: 'clove', quantity: 1 },
        { name: 'khus khus', quantity: 1 },
        { name: 'ginger garlic paste', quantity: 1 },
        { name: 'saffron', quantity: 1 },
        { name: 'full fat yogurt', quantity: 1 },
        { name: 'lamb', quantity: 1 },
        { name: 'red chilli powder', quantity: 1 },
        { name: 'biryani masala', quantity: 1 },
        { name: 'madras paste', quantity: 1 },
        { name: 'tomato purée', quantity: 1 },
        { name: 'red chili', quantity: 1 },
        { name: 'thai red curry paste', quantity: 1 },
        { name: 'fish sauce', quantity: 1 },
        { name: 'rice noodles', quantity: 1 },
        { name: 'lamb leg', quantity: 1 },
        { name: 'butternut squash', quantity: 1 },
        { name: 'lasagne sheets', quantity: 1 },
        { name: 'mozzarella balls', quantity: 1 },
        { name: 'lamb kidney', quantity: 1 },
        { name: 'bulgur wheat', quantity: 1 },
        { name: 'bun', quantity: 1 },
        { name: 'fries', quantity: 1 },
        { name: 'doner meat', quantity: 1 },
        { name: 'gouda cheese', quantity: 1 },
        { name: 'sage', quantity: 1 },
        { name: 'smoked haddock', quantity: 1 },
        { name: 'water chestnut', quantity: 1 },
        { name: 'peanuts', quantity: 1 },
        { name: 'chilli', quantity: 1 },
        { name: 'ras el hanout', quantity: 1 },
        { name: 'pumpkin', quantity: 1 },
        { name: 'red chile flakes', quantity: 1 },
        { name: 'shortening', quantity: 1 },
        { name: 'canola oil', quantity: 1 },
        { name: 'boiling water', quantity: 1 },
        { name: 'brown lentils', quantity: 1 },
        { name: 'desiccated coconut', quantity: 1 },
        { name: 'custard powder', quantity: 1 },
        { name: 'anchovy fillet', quantity: 1 },
        { name: 'baby plum tomatoes', quantity: 1 },
        { name: 'fresh basil', quantity: 1 },
        { name: 'farfalle', quantity: 1 },
        { name: 'extra virgin olive oil', quantity: 1 },
        { name: 'green olives', quantity: 1 },
        { name: 'tuna', quantity: 1 },
        { name: 'massaman curry paste', quantity: 1 },
        { name: 'jasmine rice', quantity: 1 },
        { name: 'chestnuts', quantity: 1 },
        { name: 'wild mushrooms', quantity: 1 },
        { name: 'truffle oil', quantity: 1 },
        { name: 'paneer', quantity: 1 },
        { name: 'naan bread', quantity: 1 },
        { name: 'doubanjiang', quantity: 1 },
        { name: 'fermented black beans', quantity: 1 },
        { name: 'sichuan pepper', quantity: 1 },
        { name: 'scallions', quantity: 1 },
        { name: 'goat meat', quantity: 1 },
        { name: 'mincemeat', quantity: 1 },
        { name: 'mulukhiyah', quantity: 1 },
        { name: 'chinese broccoli', quantity: 1 },
        { name: 'buckwheat', quantity: 1 },
        { name: 'veal', quantity: 1 },
        { name: 'orange zest', quantity: 1 },
        { name: 'lemon zest', quantity: 1 },
        { name: 'oxtail', quantity: 1 },
        { name: 'rice stick noodles', quantity: 1 },
        { name: 'dark soy sauce', quantity: 1 },
        { name: 'peanut oil', quantity: 1 },
        { name: 'spinach', quantity: 1 },
        { name: 'beef gravy', quantity: 1 },
        { name: 'cheese curds', quantity: 1 },
        { name: 'spaghetti', quantity: 1 },
        { name: 'pilchards', quantity: 1 },
        { name: 'fennel seeds', quantity: 1 },
        { name: 'haricot beans', quantity: 1 },
        { name: 'blueberries', quantity: 1 },
        { name: 'peanut cookies', quantity: 1 },
        { name: 'gelatine leafs', quantity: 1 },
        { name: 'peanut brittle', quantity: 1 },
        { name: 'peaches', quantity: 1 },
        { name: 'oatmeal', quantity: 1 },
        { name: 'ground ginger', quantity: 1 },
        { name: 'pears', quantity: 1 },
        { name: 'rocket', quantity: 1 },
        { name: 'tiger prawns', quantity: 1 },
        { name: 'creamed corn', quantity: 1 },
        { name: 'beetroot', quantity: 1 },
        { name: 'ciabatta', quantity: 1 },
        { name: 'cod', quantity: 1 },
        { name: 'squid', quantity: 1 },
        { name: 'baguette', quantity: 1 },
        { name: 'smoky paprika', quantity: 1 },
        { name: 'pitted black olives', quantity: 1 },
        { name: 'rigatoni', quantity: 1 },
        { name: 'pecorino', quantity: 1 },
        { name: 'mackerel', quantity: 1 },
        { name: 'tamarind ball', quantity: 1 },
        { name: 'canned tomatoes', quantity: 1 },
        { name: 'wholegrain bread', quantity: 1 },
        { name: 'red onion', quantity: 1 },
        { name: 'apple cider vinegar', quantity: 1 },
        { name: 'egg plants', quantity: 1 },
        { name: 'pine nuts', quantity: 1 },
        { name: 'baby aubergine', quantity: 1 },
        { name: 'paella rice', quantity: 1 },
        { name: 'frozen peas', quantity: 1 },
        { name: 'jam', quantity: 1 },
        { name: 'lean minced beef', quantity: 1 },
        { name: 'hot beef stock', quantity: 1 },
        { name: 'penne rigate', quantity: 1 },
        { name: 'italian seasoning', quantity: 1 },
        { name: 'parmigiano-reggiano', quantity: 1 },
        { name: 'cashews', quantity: 1 },
        { name: 'medjool dates', quantity: 1 },
        { name: 'harissa', quantity: 1 },
        { name: 'ground cumin', quantity: 1 },
        { name: 'asparagus', quantity: 1 },
        { name: 'pretzels', quantity: 1 },
        { name: 'caramel', quantity: 1 },
        { name: 'caramel sauce', quantity: 1 },
        { name: 'toffee popcorn', quantity: 1 },
        { name: 'vermicelli', quantity: 1 },
        { name: 'monkfish', quantity: 1 },
        { name: 'baby squid', quantity: 1 },
        { name: 'vine tomatoes', quantity: 1 },
        { name: 'redcurrants', quantity: 1 },
        { name: 'dijon mustard', quantity: 1 },
        { name: 'tabasco sauce', quantity: 1 },
        { name: 'salt cod', quantity: 1 },
        { name: 'ackee', quantity: 1 },
        { name: 'cooking wine', quantity: 1 },
        { name: 'english muffins', quantity: 1 },
        { name: 'smoked salmon', quantity: 1 },
        { name: 'apples', quantity: 1 },
        { name: 'zucchini', quantity: 1 },
        { name: 'rhubarb', quantity: 1 },
        { name: 'herring', quantity: 1 },
        { name: 'rice wine', quantity: 1 },
        { name: 'green red lentils', quantity: 1 },
        { name: 'vegan butter', quantity: 1 },
        { name: 'soya milk', quantity: 1 },
        { name: 'self raising flour', quantity: 1 },
        { name: 'coco sugar', quantity: 1 },
        { name: 'flax eggs', quantity: 1 },
        { name: 'almond milk', quantity: 1 },
        { name: 'rice vermicelli', quantity: 1 },
        { name: 'egg rolls', quantity: 1 },
        { name: 'paccheri pasta', quantity: 1 },
        { name: 'roasted vegetables', quantity: 1 },
        { name: 'mixed grain', quantity: 1 },
        { name: 'stir-fry vegetables', quantity: 1 },
        { name: 'brown rice', quantity: 1 },
        { name: 'thai green curry paste', quantity: 1 },
        { name: 'thai fish sauce', quantity: 1 },
        { name: 'horseradish', quantity: 1 },
        { name: 'turkey mince', quantity: 1 },
        { name: 'capers', quantity: 1 },
        { name: 'tahini', quantity: 1 },
        { name: 'goats cheese', quantity: 1 },
        { name: 'udon noodles', quantity: 1 },
        { name: 'wonton skin', quantity: 1 }
    ]
})

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })