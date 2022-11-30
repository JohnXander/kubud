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
            ],
            youtube: 'https://www.youtube.com/watch?v=rp8Slv4INLk'
          } ,
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
            ],
            youtube: 'https://www.youtube.com/watch?v=4vhcOwVBDO4'
          } ,
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
            ],
            youtube: 'https://www.youtube.com/watch?v=6R8ffRRJcrg'
          } ,
          {
            name: 'Ayam Percik',
            img: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
            ingredients: [
              'Chicken Thighs', 'Challots',
              'Ginger',         'Garlic Clove',
              'Cayenne Pepper', 'Turmeric',
              'Cumin',          'Coriander',
              'Fennel',         'Tamarind Paste',
              'Coconut Milk',   'Sugar',
              'Water'
            ],
            youtube: 'https://www.youtube.com/watch?v=9ytR28QK6I8'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=1ahpSTf_Pvk'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Vz5W1-BmOE4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=FS8u1RBdf6I'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=-84Zz2EP4h4'
      } ,
      {
        name: 'Beef Brisket Pot Roast',
        img: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
        ingredients: [
          'Beef Brisket', 'Salt',
          'Onion',        'Garlic',
          'Thyme',        'Rosemary',
          'Bay Leaves',   'beef stock',
          'Carrots',      'Mustard',
          'Potatoes'
        ],
        youtube: 'https://www.youtube.com/watch?v=gh48wM6bPWQ'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=2l3-dBdNehY'
      } ,
      {
        name: 'Braised Beef Chilli',
        img: 'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg',
        ingredients: [
          'Beef',             'Onions',
          'Garlic',           'Olive oil',
          'Chorizo',          'Cumin',
          'All spice',        'Cloves',
          'Cinnamon stick',   'Bay Leaves',
          'Oregano',          'Ancho Chillies',
          'Balsamic Vinegar', 'Plum Tomatoes',
          'Tomato Ketchup',   'Dark Brown Sugar',
          'Borlotti Beans'
        ],
        youtube: 'https://www.youtube.com/watch?v=z4kSoJgsu6Y'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=PQHgQX1Ss74'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=_HgVLpmNxTY'
      } ,
      {
        name: 'Bean & Sausage Hotpot',
        img: 'https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg',
        ingredients: [
          'Sausages',
          'Tomato Sauce',
          'Butter Beans',
          'Black Treacle',
          'English Mustard'
        ],
        youtube: 'https://www.youtube.com/watch?v=B0YX0yPX4Wo'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=kSKtb2Sv-_U'
      } ,
      {
        name: 'Beef Dumpling Stew',
        img: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
        ingredients: [
          'Olive Oil',     'Butter',
          'Beef',          'Plain Flour',
          'Garlic',        'Onions',
          'Celery',        'Carrots',
          'Leek',          'Swede',
          'Red Wine',      'Beef Stock',
          'Bay Leaf',      'Thyme',
          'Parsley',       'Plain Flour',
          'Baking Powder', 'Suet',
          'Water'
        ],
        youtube: 'https://www.youtube.com/watch?v=6NgheY-r5t0'
      } ,
      {
        name: 'Beef and Mustard Pie',
        img: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
        ingredients: [
          'Beef',         'Plain Flour',
          'Rapeseed Oil', 'Red Wine',
          'Beef Stock',   'Onion',
          'Carrots',      'Thyme',
          'Mustard',      'Egg Yolks',
          'Puff Pastry',  'Green Beans',
          'Butter',       'Salt',
          'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=nMyBC9staMU'
      } ,
      {
        name: 'Beef and Oyster pie',
        img: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
        ingredients: [
          'Beef',       'Olive Oil',
          'Shallots',   'Garlic',
          'Bacon',      'Thyme',
          'Bay Leaf',   'Stout',
          'Beef Stock', 'Corn Flour',
          'Oysters',    'Plain Flour',
          'Salt',       'Butter',
          'Eggs'
        ],
        youtube: 'https://www.youtube.com/watch?v=ONX74yP6JnI'
      } ,
      {
        name: 'Blackberry Fool',
        img: 'https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg',
        ingredients: [
          'Hazlenuts',    'Butter',
          'Caster Sugar', 'Lemon',
          'Plain Flour',  'Baking Powder',
          'Blackberrys',  'Sugar',
          'Caster Sugar', 'Lemon Juice',
          'Double Cream', 'Yogurt',
          'Mint'
        ],
        youtube: 'https://www.youtube.com/watch?v=kniRGjDLFrQ'
      } ,
      {
        name: 'Battenberg Cake',
        img: 'https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg',
        ingredients: [
          'Butter',              'Caster Sugar',
          'Self-raising Flour',  'Almonds',
          'Baking Powder',       'Eggs',
          'Vanilla Extract',     'Almond Extract',
          'Butter',              'Caster Sugar',
          'Self-raising Flour',  'Almonds',
          'Baking Powder',       'Eggs',
          'Vanilla Extract',     'Almond Extract',
          'Pink Food Colouring', 'Apricot',
          'Marzipan',            'Icing Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=aB41Q7kDZQ0'
      } ,
      {
        name: 'Beef Bourguignon',
        img: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg',
        ingredients: [
          'Goose Fat',         'Beef Shin',
          'Bacon',             'Challots',
          'Chestnut Mushroom', 'Garlic Clove',
          'Bouquet Garni',     'Tomato Puree',
          'Red Wine',          'Celeriac',
          'Olive Oil',         'Thyme',
          'Rosemary',          'Bay Leaf',
          'Cardamom'
        ],
        youtube: 'https://www.youtube.com/watch?v=SQnr4Z-7rok'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=FzNPPD8lbWg'
      } ,
      {
        name: 'Boulangère Potatoes',
        img: 'https://www.themealdb.com/images/media/meals/qywups1511796761.jpg',
        ingredients: [ 'Onions', 'Thyme', 'Olive Oil', 'Potatoes', 'Vegetable Stock' ],
        youtube: 'https://www.youtube.com/watch?v=gcXPruv1Mjg'
      } ,
      {
        name: 'BeaverTails',
        img: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
        ingredients: [
          'Water',  'Yeast',
          'Sugar',  'Milk',
          'Butter', 'Eggs',
          'Salt',   'Flour',
          'Oil',    'Lemon',
          'Sugar',  'Cinnamon'
        ],
        youtube: 'https://www.youtube.com/watch?v=2G07UOqU2e8'
      } ,
      {
        name: 'Brown Stew Chicken',
        img: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
        ingredients: [
          'Chicken',       'Tomato',
          'Onions',        'Garlic Clove',
          'Red Pepper',    'Carrots',
          'Lime',          'Thyme',
          'Allspice',      'Soy Sauce',
          'Cornstarch',    'Coconut Milk',
          'Vegetable Oil'
        ],
        youtube: 'https://www.youtube.com/watch?v=_gFB1fkNhXs'
      } ,
      {
        name: 'Beef Lo Mein',
        img: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
        ingredients: [
          'Beef',         'Salt',
          'Pepper',       'Sesame Seed Oil',
          'Egg',          'Starch',
          'Oil',          'Noodles',
          'Onion',        'Minced Garlic',
          'Ginger',       'Bean Sprouts',
          'Mushrooms',    'Water',
          'Oyster Sauce', 'Sugar',
          'Soy Sauce'
        ],
        youtube: 'https://www.youtube.com/watch?v=ZT9LSsNXXe0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=xvPR2Tfw5k0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=6dzd6Ra6sb4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=BoD0TIO9nE4'
      } ,
      {
        name: 'Bitterballen (Dutch meatballs)',
        img: 'https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg',
        ingredients: [
          'Butter',     'Flour',
          'Beef Stock', 'Onion',
          'Parsley',    'Beef',
          'Salt',       'Pepper',
          'Nutmeg',     'Flour',
          'Eggs',       'Breadcrumbs'
        ],
        youtube: 'https://www.youtube.com/watch?v=q8AKfYUtDuM'
      } ,
      {
        name: 'BBQ Pork Sloppy Joes',
        img: 'https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg',
        ingredients: [
          'Potatoes',       'Red Onions',
          'Garlic',         'Lime',
          'Bread',          'Pork',
          'Barbeque Sauce', 'Hotsauce',
          'Tomato Ketchup', 'Sugar',
          'Vegetable Oil',  'Salt',
          'Pepper'
        ],
        youtube: ''
      } ,
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
        ],
        youtube: ''
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=C5J39YnnPsg'
      } ,
      {
        name: 'Bigos (Hunters Stew)',
        img: 'https://www.themealdb.com/images/media/meals/md8w601593348504.jpg',
        ingredients: [
          'Bacon',          'Kielbasa',
          'Pork',           'Flour',
          'Garlic',         'Onion',
          'Mushrooms',      'Cabbage',
          'Sauerkraut',     'Red Wine',
          'Bay Leaf',       'Basil',
          'Marjoram',       'Paprika',
          'Caraway Seed',   'Hotsauce',
          'Beef Stock',     'Tomato Puree',
          'Diced Tomatoes', 'Worcestershire Sauce'
        ],
        youtube: 'https://www.youtube.com/watch?v=Oqg_cO4s8ik'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=80W0mCFDIP0'
      } ,
      {
        name: 'Beef Rendang',
        img: 'https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg',
        ingredients: [
          'Beef',           'Vegetable Oil',
          'Cinnamon Stick', 'Cloves',
          'Star Anise',     'Cardamom',
          'Coconut Cream',  'Water',
          'Tamarind Paste', 'Lime',
          'Sugar',          'Challots'
        ],
        youtube: 'https://www.youtube.com/watch?v=Ot-dmfBaZrA'
      } ,
      {
        name: 'Burek',
        img: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
        ingredients: [ 'Filo Pastry', 'Minced Beef', 'Onion', 'Oil', 'Salt', 'Pepper' ],
        youtube: 'https://www.youtube.com/watch?v=YsJXZwE5pdY'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=dsJtgmAhFF4'
      } ,
      {
        name: 'Chicken Enchilada Casserole',
        img: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
        ingredients: [
          'Enchilada sauce',
          'shredded Monterey Jack cheese',
          'corn tortillas',
          'chicken breasts'
        ],
        youtube: 'https://www.youtube.com/watch?v=EtVkwVKLc_M'
      } ,
      {
        name: 'Cream Cheese Tart',
        img: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
        ingredients: [
          'Flour',         'Butter',
          'Egg',           'Salt',
          'Cheese',        'Milk',
          'Eggs',          'Parmesan Cheese',
          'Plum tomatoes', 'White Vinegar',
          'Honey',         'Basil'
        ],
        youtube: 'https://www.youtube.com/watch?v=UhQPwO4uymo'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=OaqvGvEiwzU'
      } ,
      {
        name: 'Chicken Handi',
        img: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
        ingredients: [
          'Chicken',         'Onion',
          'Tomatoes',        'Garlic',
          'Ginger paste',    'Vegetable oil',
          'Cumin seeds',     'Coriander seeds',
          'Turmeric powder', 'Chilli powder',
          'Green chilli',    'Yogurt',
          'Cream',           'fenugreek',
          'Garam masala',    'Salt'
        ],
        youtube: 'https://www.youtube.com/watch?v=IO0issT0Rmc'
      } ,
      {
        name: 'Chicken Alfredo Primavera',
        img: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
        ingredients: [
          'Butter',            'Olive Oil',
          'Chicken',           'Salt',
          'Squash',            'Broccoli',
          'mushrooms',         'Pepper',
          'onion',             'garlic',
          'red pepper flakes', 'white wine',
          'milk',              'heavy cream',
          'Parmesan cheese',   'bowtie pasta',
          'Salt',              'Pepper',
          'Parsley'
        ],
        youtube: 'https://www.youtube.com/watch?v=qCIbq8HywpQ'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=bwTSmLTZKNg'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=N4EdUt0Ou48'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=oqL0mLDBzS4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=XivddFddthc'
      } ,
      {
        name: 'Coq au vin',
        img: 'https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg',
        ingredients: [
          'Olive Oil',      'Bacon',
          'Shallots',       'Chicken Legs',
          'Chicken Thighs', 'Chicken Breasts',
          'Garlic',         'Brandy',
          'Red Wine',       'Chicken Stock',
          'tomato puree',   'thyme',
          'Rosemary',       'bay leaves',
          'parsley',        'chestnut mushroom',
          'plain flour',    'butter'
        ],
        youtube: 'https://www.youtube.com/watch?v=_ise46LADBs'
      } ,
      {
        name: 'Chilli prawn linguine',
        img: 'https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg',
        ingredients: [
          'Linguine Pasta',  'Sugar Snap Peas',
          'Olive Oil',       'Garlic Clove',
          'Red Chilli',      'King Prawns',
          'Cherry Tomatoes', 'Basil Leaves',
          'Lettuce',         'Bread',
          'Fromage Frais',   'Lime',
          'Caster Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=SC17Mc70Db0'
      } ,
      {
        name: 'Clam chowder',
        img: 'https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg',
        ingredients: [
          'Clams',        'Butter',
          'Bacon',        'Onion',
          'Thyme',        'Bay Leaf',
          'Plain Flour',  'Milk',
          'Double Cream', 'Potatoes',
          'Parsley'
        ],
        youtube: 'https://www.youtube.com/watch?v=fEN_fm6kX6k'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=lBhwjjUiFk4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=bXKWu4GojNI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=GZQGy9oscVk'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=wuZffe60q4M'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=fDpoT0jvg4Y'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Pi89PqsAaAg'
      } ,
      {
        name: 'Chickpea Fajitas',
        img: 'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
        ingredients: [
          'Chickpeas',     'Olive Oil',
          'Paprika',       'Tomatoes',
          'Red Onions',    'Red Wine Vinegar',
          'Avocado',       'Lime',
          'Lime',          'Sour Cream',
          'Harissa Spice', 'Corn Tortillas',
          'Coriander'
        ],
        youtube: 'https://www.youtube.com/watch?v=LGY3V7EGpT0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=xr-CpPE_lNk'
      } ,
      {
        name: 'Chicken Parmentier',
        img: 'https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg',
        ingredients: [
          'Potatoes',       'Butter',
          'Double Cream',   'Egg Yolks',
          'Butter',         'Shallots',
          'Carrots',        'Celery',
          'Garlic Clove',   'White Wine',
          'Tomato Puree',   'Tinned Tomatos',
          'Chicken Stock',  'Chicken',
          'Black Olives',   'Parsley',
          'Gruyere cheese'
        ],
        youtube: 'https://www.youtube.com/watch?v=tiG-xlmeyjg'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=asjZ7iTrGKA'
      } ,
      {
        name: 'Chelsea Buns',
        img: 'https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg',
        ingredients: [
          'White Flour',   'Salt',
          'Yeast',         'Milk',
          'Butter',        'Eggs',
          'Vegetable Oil', 'Butter',
          'Brown Sugar',   'Cinnamon',
          'Dried Fruit',   'Milk',
          'Caster Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=i_zemP3yBKw'
      } ,
      {
        name: 'Chocolate Souffle',
        img: 'https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg',
        ingredients: [
          'Single Cream',   'Caster Sugar',
          'Dark Chocolate', 'Butter',
          'Butter',         'Caster Sugar',
          'Dark Chocolate', 'Double Cream',
          'Egg Yolks',      'Egg White',
          'Double Cream',   'Icing Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=FWqfkUEWOTg'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=5dAW9HQgtCk'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=U33HYUr-0Fw'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=WUpaOGghOdo'
      } ,
      {
        name: 'Chicken Basquaise',
        img: 'https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg',
        ingredients: [
          'Chicken',            'Butter',
          'Olive Oil',          'Red Onions',
          'Red Pepper',         'Chorizo',
          'Sun-Dried Tomatoes', 'Garlic',
          'Basmati Rice',       'Tomato Puree',
          'Paprika',            'Bay Leaves',
          'Thyme',              'Chicken Stock',
          'Dry White Wine',     'Lemons',
          'Black Olives',       'Salt',
          'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=emfm6TwsVhg'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=bCr3GasJWwE'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=kqEfk801E94'
      } ,
      {
        name: 'Chocolate Caramel Crispy',
        img: 'https://www.themealdb.com/images/media/meals/1550442508.jpg',
        ingredients: [ 'Mars Bar', 'Butter', 'Rice Krispies', 'Milk Chocolate' ],
        youtube: 'https://www.youtube.com/watch?v=qsk_At_gjv0'
      } ,
      {
        name: 'Chakchouka ',
        img: 'https://www.themealdb.com/images/media/meals/gpz67p1560458984.jpg',
        ingredients: [
          'Tomatoes',     'Olive Oil',
          'Onion',        'Red Pepper',
          'Green Pepper', 'Garlic',
          'Cumin',        'Paprika',
          'Salt',         'Chili Powder',
          'Eggs'
        ],
        youtube: 'https://www.youtube.com/watch?v=EHKNu93MSx4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=IqXEZUk4hWI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=VVnZd8A84z4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=jRfyNQs5qhU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Pb_lJxL1vtk'
      } ,
      {
        name: 'Christmas cake',
        img: 'https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg',
        ingredients: [
          'Butter',          'Muscovado Sugar',
          'Plain Flour',     'Eggs',
          'Ground Almonds',  'Sherry',
          'Candied Peel',    'Glace Cherry',
          'Raisins',         'Currants',
          'Pecan Nuts',      'Lemon',
          'Mixed Spice',     'Rose water',
          'Vanilla Extract', 'Baking Powder'
        ],
        youtube: 'https://www.youtube.com/watch?v=34yeL8TstO0'
      } ,
      {
        name: 'Corned Beef and Cabbage',
        img: 'https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg',
        ingredients: [ 'Beef Brisket', 'Small Potatoes', 'Carrots', 'Cabbage' ],
        youtube: ''
      } ,
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
        ],
        youtube: ''
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=akcrkXYr61M'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=1WDesu7bUDM'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=ftn_4mc-65o'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=_MpSxSgS7f8'
      } ,
      {
        name: 'Croatian lamb peka',
        img: 'https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg',
        ingredients: [
          'Potatoes',      'Courgettes',
          'Carrots',       'Green Pepper',
          'Aubergine',     'Onion',
          'Lamb Shoulder', 'Garlic Sauce',
          'Tomato Puree',  'Olive Oil',
          'Thyme',         'White Wine',
          'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=K0ipnz4fwJI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=mrjnQal3S1A'
      } ,
      {
        name: 'Chivito uruguayo',
        img: 'https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg',
        ingredients: [
          'Beef Brisket', 'Bread',
          'Lettuce',      'Tomato',
          'Ham',          'Mozzarella',
          'Bacon',        'Egg',
          'Onion',        'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=0PXbbL1QdaA&ab_channel=D%C3%ADadeCocina'
      },
      {
        name: 'Dal fry',
        img: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
        ingredients: [
          'Toor dal',    'Water',
          'Salt',        'Turmeric',
          'Ghee',        'Chopped tomatoes',
          'Cumin seeds', 'Mustard Seeds',
          'Bay Leaf',    'Green Chili',
          'Ginger',      'Cilantro',
          'Red Pepper',  'Salt',
          'Sugar',       'Garam Masala'
        ],
        youtube: 'https://www.youtube.com/watch?v=J4D855Q9-jg'
      } ,
      {
        name: 'Dundee cake',
        img: 'https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg',
        ingredients: [
          'Almonds',         'Butter',
          'Muscovado Sugar', 'Orange',
          'Apricot Jam',     'Plain Flour',
          'Baking Powder',   'Eggs',
          'Ground Almonds',  'Milk',
          'Dried Fruit',     'Glace Cherry',
          'Milk',            'Caster Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=4hEXsfpeMQE'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=MHhLJqghY-o'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=43WgiNq54L8'
      } ,
      {
        name: 'Eccles Cakes',
        img: 'https://www.themealdb.com/images/media/meals/wtqrqw1511639627.jpg',
        ingredients: [
          'Butter',          'Plain Flour',
          'Lemon',           'Butter',
          'Currants',        'Mixed Peel',
          'Muscovado Sugar', 'Cinnamon',
          'Ginger',          'Allspice',
          'Lemon',           'Eggs',
          'Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=xV0QCJ0GD5w'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=FXjYU2Ensck'
      } ,
      {
        name: 'Escovitch Fish',
        img: 'https://www.themealdb.com/images/media/meals/1520084413.jpg',
        ingredients: [
          'Red Snapper',          'Vegetable Oil',
          'Garlic',               'Ginger',
          'Thyme',                'Bay Leaf',
          'Red Pepper',           'Yellow Pepper',
          'Onion',                'Carrots',
          'Sugar',                'Allspice',
          'Worcestershire Sauce', 'Scotch Bonnet',
          'Lime',                 'Malt Vinegar',
          'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=nF6DOtGE6k8'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=9XpzHm9QpZg'
      } ,
      {
        name: 'Egyptian Fatteh',
        img: 'https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg',
        ingredients: [
          'Beef',               'Onion',
          'Chicken Stock Cube', 'Tomatoes',
          'Garlic Clove',       'Tomato Puree',
          'Rice',               'Noodles',
          'Butter',             'Olive Oil',
          'Pita Bread',         'Cumin',
          'White Wine Vinegar', 'Salt',
          'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=WLuOHkDE4A4'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=2sX4fCgg-UI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=CrlTS1mJQMA'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=FLEnwZvGzOE'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=FXjYU2Ensck'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=-DLDMQucqDI'
      } ,
      {
        name: 'Flamiche',
        img: 'https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg',
        ingredients: [
          'Butter', 'Leek',
          'Salt',   'Creme Fraiche',
          'Egg',    'Egg Yolks',
          'Nutmeg', 'Plain Flour',
          'Salt',   'Butter',
          'Lard',   'Cheddar Cheese',
          'Water'
        ],
        youtube: 'https://www.youtube.com/watch?v=vT0q5c880Rg'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=qXPhVYpQLPA'
      } ,
      {
        name: 'Fish Stew with Rouille',
        img: 'https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg',
        ingredients: [
          'Prawns',         'Olive Oil',
          'Dry White Wine', 'Fish Stock',
          'Fennel',         'Onion',
          'Garlic',         'Potatoes',
          'Orange',         'Star Anise',
          'Bay Leaf',       'Harissa Spice',
          'Tomato Puree',   'Chopped Tomatoes',
          'Mussels',        'White Fish',
          'Thyme',          'Bread'
        ],
        youtube: 'https://www.youtube.com/watch?v=fp9Lqx2EUco'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=tXBzZm2kkh8'
      } ,
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
        ],
        youtube: ''
      } ,
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
        ],
        youtube: ''
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=ixpCabILuxw'
      } ,
      {
        name: 'Feteer Meshaltet',
        img: 'https://www.themealdb.com/images/media/meals/9f4z6v1598734293.jpg',
        ingredients: [ 'Flour', 'Water', 'Salt', 'Unsalted Butter', 'Olive Oil' ],
        youtube: 'https://www.youtube.com/watch?v=-mW1unsVhFU'
      } ,
      {
        name: 'Fish fofos',
        img: 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
        ingredients: [
          'Haddock',      'Potatoes',
          'Green Chilli', 'Coriander',
          'Cumin Seeds',  'Pepper',
          'Garlic',       'Ginger',
          'Flour',        'Eggs',
          'Breadcrumbs',  'Vegetable Oil'
        ],
        youtube: 'https://www.youtube.com/watch?v=YXUZHK2PrV8'
      } ,
      {
        name: 'Fresh sardines',
        img: 'https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg',
        ingredients: [ 'Sardines', 'Vegetable Oil', 'Flour', 'Salt' ],
        youtube: 'https://www.youtube.com/watch?v=DDaZoXP1Mdc'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=LPPcNPdq_j4'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=uO0ejc85zSE'
      } ,
      {
        name: 'Grilled Mac and Cheese Sandwich',
        img: 'https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg',
        ingredients: [
          'Macaroni',             'Plain Flour',
          'Mustard Powder',       'Garlic powder',
          'Kosher salt',          'Black pepper',
          'Cayenne pepper',       'Butter',
          'Whole Milk',           'Heavy Cream',
          'Monterey Jack Cheese', 'Butter',
          'garlic powder',        'Bread',
          'Cheddar Cheese',       'Colby Jack Cheese',
          'Butter'
        ],
        youtube: 'https://www.youtube.com/watch?v=PYq31xLj-DY'
      } ,
      {
        name: "General Tso's Chicken",
        img: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
        ingredients: [
          'Chicken Breast',  'Plain Flour',
          'Egg',             'Starch',
          'Baking Powder',   'Salt',
          'Onion Salt',      'Garlic Powder',
          'Water',           'Chicken Stock',
          'Duck Sauce',      'Soy Sauce',
          'Honey',           'Rice Vinegar',
          'Sesame Seed Oil', 'Gochujang',
          'Starch',          'Garlic',
          'Spring Onions',   'Ginger'
        ],
        youtube: 'https://www.youtube.com/watch?v=wWGwz0iBmvU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=e-2K2iyPASA'
      } ,
      {
        name: 'Gołąbki (cabbage roll)',
        img: 'https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg',
        ingredients: [
          'Cabbage',      'Butter',
          'Onion',        'Ground Beef',
          'Ground Pork',  'Rice',
          'Garlic',       'Salt',
          'Black Pepper', 'Tomato Puree'
        ],
        youtube: 'https://www.youtube.com/watch?v=rBrTkDdoPYg'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=JYtMjKa6cdY'
      },
      {
        name: 'Honey Teriyaki Salmon',
        img: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
        ingredients: [ 'Salmon', 'Olive oil', 'Soy Sauce', 'Sake', 'Sesame Seed' ],
        youtube: 'https://www.youtube.com/watch?v=4MpYuaJsvRw'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=oJvbsVSblfk'
      } ,
      {
        name: 'Hot and Sour Soup',
        img: 'https://www.themealdb.com/images/media/meals/1529445893.jpg',
        ingredients: [
          'Mushrooms',     'Wood Ear Mushrooms',
          'Tofu',          'Pork',
          'Chicken Stock', 'Salt',
          'Sugar',         'Sesame Seed Oil',
          'Pepper',        'Hotsauce',
          'Vinegar',       'Soy Sauce',
          'Cornstarch',    'Water',
          'Spring Onions'
        ],
        youtube: 'https://www.youtube.com/watch?v=KgV9Zq3aSTo'
      } ,
      {
        name: 'Home-made Mandazi',
        img: 'https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg',
        ingredients: [ 'Self-raising Flour', 'Sugar', 'Eggs', 'Milk' ],
        youtube: ''
      } ,
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
        ],
        youtube: ''
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=JE8crtueXs8'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=aQJAU2iJ730'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=kYH2qJXnSMo'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=5ZYWVQ8imVA'
      } ,
      {
        name: 'Jerk chicken with rice & peas',
        img: 'https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg',
        ingredients: [
          'Chicken Thighs', 'Lime',
          'Spring Onions',  'Ginger',
          'Garlic',         'Onion',
          'Red Chilli',     'Thyme',
          'Lime',           'Soy Sauce',
          'Vegetable Oil',  'Brown Sugar',
          'Allspice',       'Basmati Rice',
          'Coconut Milk',   'Spring Onions',
          'Thyme',          'Garlic',
          'Allspice',       'Kidney Beans'
        ],
        youtube: 'https://www.youtube.com/watch?v=qfchrS2D_v4'
      } ,
      {
        name: 'Jamaican Beef Patties',
        img: 'https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg',
        ingredients: [
          'Plain Flour',    'Salt',
          'Curry Powder',   'Butter',
          'Water',          'Minced Beef',
          'Allspice',       'Black Pepper',
          'Vegetable Oil',  'Onions',
          'Red Pepper',     'Garlic',
          'Thyme',          'Salt',
          'Tomato Ketchup', 'Water',
          'Onions',         'Egg',
          'Water',          'Water'
        ],
        youtube: 'https://www.youtube.com/watch?v=ypQjoiZiTac'
      } ,
      {
        name: 'Japanese gohan rice',
        img: 'https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg',
        ingredients: [ 'Sushi Rice', 'Mirin', 'Pickle Juice', 'Spring Onions' ],
        youtube: 'https://www.youtube.com/watch?v=rZO86_-MIp0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=voE-MBJqBVk'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=UIcuiU1kV8I'
      } ,
      {
        name: 'Kentucky Fried Chicken',
        img: 'https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg',
        ingredients: [
          'Chicken',       'Oil',
          'Egg White',     'Flour',
          'Brown Sugar',   'Salt',
          'paprika',       'onion salt',
          'chili powder',  'black pepper',
          'celery salt',   'sage',
          'garlic powder', 'allspice',
          'oregano',       'basil',
          'marjoram'
        ],
        youtube: 'https://www.youtube.com/watch?v=PTUxCvCz8Bc'
      } ,
      {
        name: 'Katsu Chicken curry',
        img: 'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
        ingredients: [
          'chicken breast', 'plain flour',
          'egg',            'breadcrumbs',
          'vegetable oil',  'sunflower oil',
          'onions',         'garlic',
          'carrot',         'plain flour',
          'curry powder',   'chicken stock',
          'honey',          'soy sauce',
          'bay leaf',       'garam masala'
        ],
        youtube: 'https://www.youtube.com/watch?v=MWzxDFRtVbc'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=q4Rz7tUkX9A'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Tp_PMWvIKzo'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=_Pw1I1-SItE'
      } ,
      {
        name: 'Kung Pao Chicken',
        img: 'https://www.themealdb.com/images/media/meals/1525872624.jpg',
        ingredients: [
          'Sake',            'Soy Sauce',
          'Sesame Seed Oil', 'Corn Flour',
          'Water',           'Chicken',
          'Chilli Powder',   'Rice Vinegar',
          'Brown Sugar',     'Spring Onions',
          'Garlic Clove',    'Water Chestnut',
          'Peanuts'
        ],
        youtube: 'https://www.youtube.com/watch?v=QqdcCHQlOe0'
      } ,
      {
        name: 'Kung Po Prawns',
        img: 'https://www.themealdb.com/images/media/meals/1525873040.jpg',
        ingredients: [
          'Prawns',         'Soy Sauce',
          'Tomato Puree',   'Corn Flour',
          'Caster Sugar',   'Sunflower Oil',
          'Peanuts',        'Chilli',
          'Brown Sugar',    'Garlic Clove',
          'Water Chestnut', 'Ginger'
        ],
        youtube: 'https://www.youtube.com/watch?v=ysiuZm9FIxs'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=-TFf-Zu-xQU'
      } ,
      {
        name: 'Keleya Zaara',
        img: 'https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg',
        ingredients: [
          'Olive Oil', 'Lamb',
          'Saffron',   'Onion',
          'Water',     'Parsley',
          'Butter',    'Lemon'
        ],
        youtube: 'https://www.youtube.com/watch?v=u_OSIChzuL0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=IEDEtZ4UVtI'
      } ,
      {
        name: 'Krispy Kreme Donut',
        img: 'https://www.themealdb.com/images/media/meals/4i5cnx1587672171.jpg',
        ingredients: [
          'Yeast',         'Water',
          'Water',         'Sugar',
          'Salt',          'Eggs',
          'Shortening',    'Flour',
          'Canola Oil',    'Milk',
          'Sugar',         'Vanilla',
          'Boiling Water', 'Butter'
        ],
        youtube: 'https://www.youtube.com/watch?v=SamYg6IUGOI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=y0d2ZMZBW4Y'
      },
      {
        name: 'Lamb tomato and sweet spices',
        img: 'https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg',
        ingredients: [
          'olive oil',       'ginger',
          'garlic',          'tomatoes',
          'lemon juice',     'caster sugar',
          'vine leaves',     'fennel bulb',
          'lamb mince',      'onion',
          'potato',          'basmati rice',
          'chopped parsley', 'coriander',
          'lemon juice',     'garlic',
          'clove',           'cinnamon',
          'tomatoes'
        ],
        youtube: 'https://www.youtube.com/watch?v=vaZb1MnFBgA'
      } ,
      {
        name: 'Lamb Biryani',
        img: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
        ingredients: [
          'Cashew nuts',         'Khus khus',
          'Cumin seeds',         'Onions',
          'Ginger garlic paste', 'Garlic',
          'Mint',                'Cilantro',
          'Saffron',             'Ghee',
          'Basmati rice',        'Full fat yogurt',
          'Cumin Seeds',         'Bay leaf',
          'Cinnamon',            'Cloves',
          'Cardamom',            'Lamb',
          'Red Chilli powder',   'Biryani masala'
        ],
        youtube: 'https://www.youtube.com/watch?v=r7SYVSG5nxo'
      } ,
      {
        name: 'Lamb Rogan josh',
        img: 'https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg',
        ingredients: [
          'Onion',          'Sunflower Oil',
          'Garlic',         'Ginger',
          'Madras Paste',   'Paprika',
          'cinnamon stick', 'Cardamom',
          'Clove',          'Bay Leaf',
          'Tomato Purée',   'Lamb',
          'Greek yogurt',   'Coriander'
        ],
        youtube: 'https://www.youtube.com/watch?v=NZVo32n7iS8'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=OcarztU8cYo'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=bR5Cqu84S_k'
      } ,
      {
        name: 'Lasagne',
        img: 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
        ingredients: [
          'Olive Oil',        'Bacon',
          'Onion',            'Celery',
          'Carrots',          'Garlic',
          'Minced Beef',      'Tomato Puree',
          'Chopped Tomatoes', 'Honey',
          'Lasagne Sheets',   'Creme Fraiche',
          'Mozzarella Balls', 'Parmesan Cheese',
          'Basil Leaves'
        ],
        youtube: 'https://www.youtube.com/watch?v=gfhfsBPt46s'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=NCyPaaUNYUk'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=w6TS5J8YRA4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=BgRifcCwinY'
      } ,
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
        ],
        youtube: ''
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=krR4rhjR75Y'
      } ,
      {
        name: 'Lamb Tzatziki Burgers',
        img: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg',
        ingredients: [
          'Bulgur Wheat', 'Lamb Mince',
          'Cumin',        'Coriander',
          'Paprika',      'Garlic',
          'Olive Oil',    'Bun',
          'Cucumber',     'Greek Yogurt',
          'Mint'
        ],
        youtube: 'https://www.youtube.com/watch?v=s7_TF4ZHjPc'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=e52IL8zYmaE'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=mVxgZSCU9_g'
      } ,
      {
        name: 'Mushroom & Chestnut Rotolo',
        img: 'https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg',
        ingredients: [
          'Mushrooms',      'Chestnuts',
          'Challots',       'Garlic',
          'Rosemary',       'Wild Mushrooms',
          'Soy Sauce',      'White Wine',
          'Lasagne Sheets', 'Breadcrumbs',
          'Sage',           'Truffle Oil'
        ],
        youtube: 'https://www.youtube.com/watch?v=GNN7_ZSJ5YE'
      } ,
      {
        name: 'Matar Paneer',
        img: 'https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg',
        ingredients: [
          'Sunflower Oil', 'Paneer',
          'Ginger',        'Cumin',
          'Turmeric',      'Coriander',
          'Green Chilli',  'Tomato',
          'Peas',          'Garam Masala',
          'Coriander',     'Naan Bread'
        ],
        youtube: 'https://www.youtube.com/watch?v=wlseYNqwLNs'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=QY47h-uqq5g'
      } ,
      {
        name: 'McSinghs Scotch pie',
        img: 'https://www.themealdb.com/images/media/meals/vssrtx1511557680.jpg',
        ingredients: [
          'Cumin',        'Rapeseed Oil',
          'Red Onions',   'Garlic Clove',
          'Green Chilli', 'Red Pepper',
          'Nutmeg',       'Coriander',
          'Lamb Mince',   'Pepper',
          'Coriander',    'Plain Flour',
          'Salt',         'Milk',
          'Lard',         'Egg Yolks'
        ],
        youtube: 'https://www.youtube.com/watch?v=1nArqhRyszw'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=-YDh4WEmK_E'
      } ,
      {
        name: 'Montreal Smoked Meat',
        img: 'https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg',
        ingredients: [
          'Beef Brisket', 'Salt',
          'Black Pepper', 'Coriander',
          'Sugar',        'Bay Leaf',
          'Cloves',       'Black Pepper',
          'Coriander',    'Paprika',
          'Garlic',       'Onion',
          'Dill',         'English Mustard',
          'Celery Salt',  'Red Pepper Flakes'
        ],
        youtube: 'https://www.youtube.com/watch?v=g5oCDoyxbBk'
      } ,
      {
        name: 'Ma Po Tofu',
        img: 'https://www.themealdb.com/images/media/meals/1525874812.jpg',
        ingredients: [
          'Tofu',                  'Minced Beef',
          'Sesame Seed Oil',       'Doubanjiang',
          'Fermented Black Beans', 'Pepper',
          'Salt',                  'Sichuan pepper',
          'Soy Sauce',             'Water',
          'Olive Oil',             'Scallions',
          'Spring Onions',         'Garlic',
          'Ginger',                'Water',
          'Cornstarch'
        ],
        youtube: 'https://www.youtube.com/watch?v=IhwPQL9dFYc'
      } ,
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
        ],
        youtube: ''
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=PnXft7lQNJE'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=8U_29i9Qp5U'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=vWc5JzgAkIQ'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=_iKllHSC978'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=7tDWOpnIhok'
      } ,
      {
        name: 'Mee goreng mamak',
        img: 'https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg',
        ingredients: [
          'Peanuts',          'Chilli',
          'Prawns',           'Oil',
          'Water',            'Tamarind Paste',
          'Potatoes',         'Red Onions',
          'Garlic Clove',     'Cabbage',
          'Chinese Broccoli', 'Tofu',
          'Soy Sauce',        'Noodles',
          'Egg'
        ],
        youtube: 'https://www.youtube.com/watch?v=pOJEmDBgtSk'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=M1ok7mG9-Qc'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=nSQNfZxOdeU'
      } ,
      {
        name: 'New York cheesecake',
        img: 'https://www.themealdb.com/images/media/meals/swttys1511385853.jpg',
        ingredients: [
          'Butter',       'Sour Cream',
          'Sugar',        'Cream Cheese',
          'Caster Sugar', 'Plain Flour',
          'Lemon Juice',  'Eggs',
          'Sour Cream',   'Sour Cream',
          'Caster Sugar', 'Lemon Juice'
        ],
        youtube: 'https://www.youtube.com/watch?v=tspdJ6hxqnc'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=MMrE4I1ZtWo'
      } ,
      {
        name: 'Nasi lemak',
        img: 'https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg',
        ingredients: [
          'Coconut Milk',  'Water',
          'Ginger Paste',  'Ginger',
          'Bay Leaf',      'Rice',
          'Eggs',          'Cucumber',
          'Peanuts',       'Anchovy Fillet',
          'Vegetable Oil', 'Onion',
          'Garlic',        'Shallots',
          'Chilli Powder', 'Anchovy Fillet',
          'Sugar',         'Tamarind Paste'
        ],
        youtube: 'https://www.youtube.com/watch?v=IUIs4C86Ilo'
      },
      {
        name: 'Osso Buco alla Milanese',
        img: 'https://www.themealdb.com/images/media/meals/wwuqvt1487345467.jpg',
        ingredients: [
          'Veal',           'Flour',
          'Olive Oil',      'Butter',
          'Onion',          'Carrot',
          'Celery',         'Fennel',
          'Garlic',         'Orange Zest',
          'Marjoram',       'Bay Leaf',
          'Dry White Wine', 'Chicken Stock',
          'Tomatoes',       'Parsley',
          'Garlic',         'Lemon Zest'
        ],
        youtube: 'https://www.youtube.com/watch?v=9GUTC2Qwrf0'
      } ,
      {
        name: 'Oxtail with broad beans',
        img: 'https://www.themealdb.com/images/media/meals/1520083578.jpg',
        ingredients: [
          'Oxtail',        'Onion',
          'Spring Onions', 'Garlic',
          'Ginger',        'Scotch Bonnet',
          'Soy Sauce',     'Fresh Thyme',
          'Vegetable Oil', 'Water',
          'Broad Beans',   'Corn Flour',
          'Water'
        ],
        youtube: 'https://www.youtube.com/watch?v=DIhxk-98Hz8'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Ohy1DELF4is'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=p3u8eiy3yHI'
      } ,
      {
        name: 'Poutine',
        img: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
        ingredients: [ 'Vegetable Oil', 'Beef Gravy', 'Potatoes', 'Cheese Curds' ],
        youtube: 'https://www.youtube.com/watch?v=UVAMAoA2_WU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=wqZzLAPmr9k'
      } ,
      {
        name: 'Pork Cassoulet',
        img: 'https://www.themealdb.com/images/media/meals/wxuvuv1511299147.jpg',
        ingredients: [
          'Goose Fat',        'Pork',
          'Onion',            'Garlic',
          'Carrots',          'Fennel Seeds',
          'Red Wine Vinegar', 'Vegetable Stock',
          'Tomato Puree',     'Rosemary',
          'Parsley',          'Haricot Beans',
          'Breadcrumbs',      'Oil',
          'Bread',            'Broccoli'
        ],
        youtube: 'https://www.youtube.com/watch?v=MEdHMTD0VCA'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=LWuuCndtJr0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=hpapqEeb36k'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=QSTsturcyL0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=SNeO28BCpsc'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=k1lG4vk2MQA'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=8U1tKWKDeWA'
      } ,
      {
        name: 'Provençal Omelette Cake',
        img: 'https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg',
        ingredients: [
          'Eggs',       'Olive Oil',
          'Courgettes', 'Spring Onions',
          'Red Pepper', 'Garlic Clove',
          'Red Chilli', 'Cream Cheese',
          'Milk',       'Chives',
          'Basil',      'Rocket',
          'Parmesan'
        ],
        youtube: 'https://www.youtube.com/watch?v=B7isFo2uP2k'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=4thpMbDakgM'
      } ,
      {
        name: 'Pate Chinois',
        img: 'https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg',
        ingredients: [
          'Potatoes', 'Butter',
          'Milk',     'Minced Beef',
          'Onion',    'Creamed Corn',
          'Paprika',  'Parsley',
          'Salt',     'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=QRFqnLkEv3I'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=WFvj71RZYPc'
      } ,
      {
        name: 'Peanut Butter Cookies',
        img: 'https://www.themealdb.com/images/media/meals/1544384070.jpg',
        ingredients: [ 'Peanut Butter', 'Sugar', 'Egg' ],
        youtube: ''
      } ,
      {
        name: 'Pizza Express Margherita',
        img: 'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg',
        ingredients: [
          'Water',        'Sugar',
          'Yeast',        'Plain Flour',
          'Salt',         'Olive Oil',
          'Passata',      'Mozzarella',
          'Oregano',      'Basil',
          'Black Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=Mt5lgUZRoUg'
      } ,
      {
        name: 'Paszteciki (Polish Pasties)',
        img: 'https://www.themealdb.com/images/media/meals/c9a3l31593261890.jpg',
        ingredients: [
          'Flour',        'Salt',
          'Egg',          'Egg',
          'Butter',       'Butter',
          'Onion',        'Swede',
          'Beef Brisket', 'Eggs',
          'Salt',         'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=qANmR6BBJpQ'
      } ,
      {
        name: 'Pierogi (Polish Dumplings)',
        img: 'https://www.themealdb.com/images/media/meals/45xxr21593348847.jpg',
        ingredients: [
          'Butter',        'Chopped Onion',
          'Sauerkraut',    'Butter',
          'Chopped Onion', 'Potatoes',
          'Eggs',          'Sour Cream',
          'Flour',         'Salt',
          'Baking Powder'
        ],
        youtube: 'https://www.youtube.com/watch?v=lyqDmUroZrI'
      } ,
      {
        name: 'Polskie Naleśniki (Polish Pancakes)',
        img: 'https://www.themealdb.com/images/media/meals/58bkyo1593350017.jpg',
        ingredients: [
          'Flour',  'Eggs',
          'Milk',   'Water',
          'Salt',   'Sugar',
          'Butter'
        ],
        youtube: 'https://www.youtube.com/watch?v=EZS4ev2crHc'
      } ,
      {
        name: 'Piri-piri chicken and slaw',
        img: 'https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg',
        ingredients: [
          'Chicken',       'Red Chilli',
          'Garlic',        'Ginger',
          'Dried Oregano', 'Coriander',
          'Paprika',       'Red Wine Vinegar',
          'Oil',           'Red Onions',
          'Carrots',       'Beetroot',
          'Cabbage',       'Mayonnaise',
          'Greek Yogurt',  'Red Wine Vinegar',
          'Cumin Seeds'
        ],
        youtube: 'https://www.youtube.com/watch?v=_RKwKjskopk'
      } ,
      {
        name: 'Portuguese prego with green piri-piri',
        img: 'https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg',
        ingredients: [
          'Garlic',    'Beef Fillet',
          'Olive Oil', 'Vinegar',
          'Parsley',   'Ciabatta',
          'Rocket',    'Basil Leaves',
          'Parsley',   'Jalapeno',
          'Vinegar',   'Spring Onions',
          'Garlic',    'Caster Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=FbIKfcDEPLA'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=tVpsZaejyYU'
      } ,
      {
        name: 'Portuguese fish stew (Caldeirada de peixe)',
        img: 'https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg',
        ingredients: [
          'Onions',       'Red Pepper',
          'Coriander',    'Red Chilli',
          'Garlic',       'Dry White Wine',
          'Saffron',      'Bay Leaf',
          'Potatoes',     'Plum Tomatoes',
          'Cod',          'Squid',
          'Tiger Prawns', 'Clams',
          'Mussels',      'Baguette'
        ],
        youtube: 'https://www.youtube.com/watch?v=utv-GpSJypk'
      } ,
      {
        name: 'Portuguese custard tarts',
        img: 'https://www.themealdb.com/images/media/meals/vmz7gl1614350221.jpg',
        ingredients: [
          'Plain Flour', 'Icing Sugar',
          'Puff Pastry', 'Caster Sugar',
          'Lemon Zest',  'Cinnamon',
          'Eggs',        'Egg Yolks',
          'Corn Flour',  'Whole Milk',
          'Vanilla',     'Cinnamon'
        ],
        youtube: 'https://www.youtube.com/watch?v=lWLCxui1Mw8'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=45dpOfESxr8'
      } ,
      {
        name: 'Rocky Road Fudge',
        img: 'https://www.themealdb.com/images/media/meals/vtxyxv1483567157.jpg',
        ingredients: [
          'Miniature Marshmallows',
          'Chocolate Chips',
          'Peanut Butter',
          'Vanilla Extract',
          'Peanuts'
        ],
        youtube: 'https://www.youtube.com/watch?v=N1aJ3nEYXyg'
      } ,
      {
        name: 'Recheado Masala Fish',
        img: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
        ingredients: [
          'Mackerel', 'Red Chili',
          'Ginger',   'Garlic',
          'Pepper',   'Cumin',
          'Turmeric', 'Cinnamon stick',
          'Clove',    'Cardamom',
          'Sugar',    'Tamarind ball',
          'Vinegar',  'Oil'
        ],
        youtube: 'https://www.youtube.com/watch?v=FXtCris37nE'
      } ,
      {
        name: 'Ribollita',
        img: 'https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg',
        ingredients: [
          'Olive Oil',       'Onion',
          'Carrot',          'Celery',
          'Garlic',          'Cannellini Beans',
          'Canned tomatoes', 'Water',
          'Rosemary',        'Thyme',
          'Kale',            'Wholegrain Bread',
          'Red Onion',       'Parmesan'
        ],
        youtube: 'https://www.youtube.com/watch?v=BiQUYTBb6eQ'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=HkywCtna9t0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=tY3taZO3Aro'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=BFdQUgAFtGU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Ys2kZnTVXAM'
      } ,
      {
        name: 'Red Peas Soup',
        img: 'https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg',
        ingredients: [
          'Kidney Beans',  'Carrots',
          'Spring Onions', 'Thyme',
          'Onion',         'Black Pepper',
          'Red Pepper',    'Garlic Clove',
          'Allspice',      'Beef',
          'Water',         'Potatoes',
          'Plain Flour',   'Water',
          'Coconut Milk'
        ],
        youtube: 'https://www.youtube.com/watch?v=1ogCfDXotMw'
      } ,
      {
        name: 'Roast fennel and aubergine paella',
        img: 'https://www.themealdb.com/images/media/meals/1520081754.jpg',
        ingredients: [
          'Baby Aubergine', 'Fennel',
          'Red Pepper',     'Courgettes',
          'Onion',          'Paella Rice',
          'Paprika',        'Saffron',
          'White Wine',     'Vegetable Stock',
          'Frozen Peas',    'Lemon',
          'Parsley',        'Salt',
          'Black Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=H5SmjR-fxUs'
      } ,
      {
        name: 'Rosół (Polish Chicken Soup)',
        img: 'https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg',
        ingredients: [
          'Chicken Legs', 'Onions',
          'Carrots',      'Leek',
          'Celery',       'Cabbage',
          'Cloves',       'Allspice',
          'Bay Leaf',     'Parsley',
          'Dill',         'Pepper',
          'Salt'
        ],
        youtube: 'https://www.youtube.com/watch?v=AU60fxyxXGw'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=VAR10T9mfhU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=cl4YH8wblRs'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=-gF8d-fitkU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=1IszT_guI08'
      } ,
      {
        name: 'Smoky Lentil Chili with Squash',
        img: 'https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg',
        ingredients: [
          'Olive Oil',           'Onion',
          'Leek',                'Garlic',
          'Cumin',               'Coriander',
          'Smoked Paprika',      'Cinnamon',
          'Chili Powder',        'Cocoa',
          'Dried Oregano',       'Diced Tomatoes',
          'Water',               'Carrots',
          'Brown Lentils',       'Sea Salt',
          'Squash',              'Cashews',
          'Apple Cider Vinegar'
        ],
        youtube: 'https://www.youtube.com/watch?v=pKmqawK2Tqs'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=hKq6RbxJHBo'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=zxBzwJvTK4g'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=uYB-1xJp4lg'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=V2PMvBv52IE'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=q5dQp3qpmI4'
      } ,
      {
        name: 'Seafood fideuà',
        img: 'https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg',
        ingredients: [
          'Mussels',    'Prawns',
          'Saffron',    'Vermicelli',
          'Olive Oil',  'Onions',
          'Garlic',     'Paprika',
          'Monkfish',   'Baby Squid',
          'Fish Stock', 'Tomatoes',
          'Lemon',      'Parsley'
        ],
        youtube: 'https://www.youtube.com/watch?v=itsFEc8W468'
      } ,
      {
        name: 'Spinach & Ricotta Cannelloni',
        img: 'https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg',
        ingredients: [
          'Olive Oil',        'Garlic',
          'Caster Sugar',     'Red Wine Vinegar',
          'Chopped Tomatoes', 'Basil Leaves',
          'Mascarpone',       'Milk',
          'Parmesan',         'Mozzarella',
          'Spinach',          'Parmesan',
          'Ricotta',          'Nutmeg',
          'Cannellini Beans'
        ],
        youtube: 'https://www.youtube.com/watch?v=rYGaEJjyLQA'
      } ,
      {
        name: 'Squash linguine',
        img: 'https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg',
        ingredients: [
          'Butternut Squash',
          'Garlic',
          'Olive Oil',
          'Linguine Pasta',
          'Sage'
        ],
        youtube: 'https://www.youtube.com/watch?v=xHZ-PoGwTLQ'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=JceGMNG7rpU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=oTw5tPt4KmA'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Wytv3bjqJII'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=fu15XOF-ros'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=akJIO6UhXtA'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=fyeqZJKEXp0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=qdhWz7qAaCU'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=uVQ66jiL-Dc'
      } ,
      {
        name: 'Steak Diane',
        img: 'https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg',
        ingredients: [
          'Canola Oil',           'Beef Fillet',
          'Beef Stock',           'Butter',
          'Garlic',               'Challots',
          'Mushrooms',            'Brandy',
          'Heavy Cream',          'Dijon Mustard',
          'Worcestershire Sauce', 'Tabasco Sauce',
          'Parsley',              'Chives',
          'Salt',                 'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=9rWZNHkrsNg'
      } ,
      {
        name: 'Saltfish and Ackee',
        img: 'https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg',
        ingredients: [
          'Salt Cod',           'Ackee',
          'Onion',              'Paprika',
          'Curry Powder',       'Jerusalem Artichokes',
          'Hotsauce',           'Red Pepper',
          'Yellow Pepper',      'Tomatoes',
          'Salt',               'Pepper',
          'Self-raising Flour', 'Suet',
          'Salt',               'Olive Oil'
        ],
        youtube: 'https://www.youtube.com/watch?v=nbfNyZbdn2I'
      } ,
      {
        name: 'Sweet and Sour Pork',
        img: 'https://www.themealdb.com/images/media/meals/1529442316.jpg',
        ingredients: [
          'Pork',    'Egg',
          'Water',   'Salt',
          'Sugar',   'Soy Sauce',
          'Starch',  'Tomato Puree',
          'Vinegar', 'Coriander'
        ],
        youtube: 'https://www.youtube.com/watch?v=mdaBIhgEAMo'
      } ,
      {
        name: 'Szechuan Beef',
        img: 'https://www.themealdb.com/images/media/meals/1529443236.jpg',
        ingredients: [
          'Beef',            'Salt',
          'Sesame Seed Oil', 'Pepper',
          'Egg White',       'Starch',
          'Oil',             'Ginger',
          'Garlic',          'Onion',
          'Carrots',         'Green Pepper',
          'Celery',          'Mushrooms',
          'Cooking wine',    'Water',
          'Oyster Sauce',    'Hotsauce',
          'Sugar',           'Soy Sauce'
        ],
        youtube: 'https://www.youtube.com/watch?v=SQGZqZYz7Ms'
      } ,
      {
        name: 'Shrimp Chow Fun',
        img: 'https://www.themealdb.com/images/media/meals/1529445434.jpg',
        ingredients: [
          'Rice Stick Noodles', 'Prawns',
          'Egg',                'Pepper',
          'Sesame Seed Oil',    'Cornstarch',
          'Oil',                'Minced Garlic',
          'Ginger',             'Onion',
          'Bean Sprouts',       'Spring Onions',
          'Cooking wine',       'Oyster Sauce',
          'Sugar',              'Vinegar',
          'Soy Sauce'
        ],
        youtube: 'https://www.youtube.com/watch?v=wzaTcpoFEaY'
      } ,
      {
        name: 'Salmon Avocado Salad',
        img: 'https://www.themealdb.com/images/media/meals/1549542994.jpg',
        ingredients: [
          'Salmon',   'Avocado',
          'Cucumber', 'Spinach',
          'Mint',     'Lime',
          'Honey',    'Olive Oil'
        ],
        youtube: 'https://www.youtube.com/watch?v=FJiu2S0Xap0'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Woiiet4vQ58'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=C-3_jYrfdBU'
      } ,
      {
        name: 'Smoked Haddock Kedgeree',
        img: 'https://www.themealdb.com/images/media/meals/1550441275.jpg',
        ingredients: [
          'Butter',         'Onion',
          'Cardamom',       'Turmeric',
          'Cinnamon Stick', 'Bay Leaf',
          'Basmati Rice',   'Chicken Stock',
          'Smoked Haddock', 'Eggs',
          'Parsley',        'Lemon'
        ],
        youtube: 'https://www.youtube.com/watch?v=QqdzDCWS4gQ'
      } ,
      {
        name: 'Stamppot',
        img: 'https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg',
        ingredients: [
          'Potatoes', 'Bay Leaf',
          'Shallots', 'Butter',
          'Kale',     'Sausages',
          'Milk',     'Nutmeg',
          'Salt',     'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=hTrSXryX31A'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=5YV0sJLtLt8'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=_T6jkRvhlkk'
      } ,
      {
        name: 'Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots',
        img: 'https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg',
        ingredients: [
          'Potatoes',      'Carrots',
          'Scallions',     'Garlic',
          'Bread',         'Garlic Powder',
          'Soy Sauce',     'Ground Beef',
          'Vegetable Oil', 'Sugar',
          'Butter'
        ],
        youtube: ''
      } ,
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
        ],
        youtube: ''
      } ,
      {
        name: 'Strawberry Rhubarb Pie',
        img: 'https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg',
        ingredients: [
          'Flour',        'Salt',
          'Sugar',        'Butter',
          'Water',        'Rhubarb',
          'Strawberries', 'Cornstarch',
          'Sugar',        'Cinnamon',
          'Lemon Juice',  'Unsalted Butter',
          'Milk',         'Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=tGw5Pwm4YA0'
      } ,
      {
        name: 'Stuffed Lamb Tomatoes',
        img: 'https://www.themealdb.com/images/media/meals/u55lbp1585564013.jpg',
        ingredients: [
          'Tomatoes',     'Sugar',
          'Olive Oil',    'Onion',
          'Garlic Clove', 'Lamb',
          'Cinnamon',     'Tomato Puree',
          'Rice',         'Chicken Stock',
          'Dill',         'Chopped Parsley',
          'Mint'
        ],
        youtube: 'https://www.youtube.com/watch?v=KfJp-QfrCz4'
      } ,
      {
        name: 'Sledz w Oleju (Polish Herrings)',
        img: 'https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg',
        ingredients: [ 'Herring', 'Onion', 'Olive Oil', 'Allspice', 'Pepper', 'Bay Leaf' ],
        youtube: 'https://www.youtube.com/watch?v=v6I3GZlBkOM'
      } ,
      {
        name: 'Shawarma',
        img: 'https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg',
        ingredients: [
          'Chicken Thighs', 'Coriander',
          'Cumin',          'Cardamom',
          'Cayenne Pepper', 'Paprika',
          'Lemon Juice',    'Olive Oil',
          'Greek Yogurt',   'Garlic Clove',
          'Cumin',          'Lemon Juice',
          'Lettuce',        'Tomato',
          'Pita Bread'
        ],
        youtube: 'https://www.youtube.com/watch?v=3lxUIeKDgic'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=Q24haJU-1dI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=_NJtCfqgaBo'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=ub68OxEypaY'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s'
      } ,
      {
        name: 'Tandoori chicken',
        img: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
        ingredients: [
          'lemons',        'paprika',
          'red onions',    'chicken thighs',
          'vegetable oil', 'Greek yogurt',
          'ginger',        'garlic clove',
          'garam masala',  'ground cumin',
          'chilli powder', 'turmeric'
        ],
        youtube: 'https://www.youtube.com/watch?v=-CKvt1KNU74'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=LIbKVpBQKJI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=t1dWkDrC330'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=mTvlmY4vCug'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=3_UAxkx0u6U'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=8kRlmz8pW0I'
      } ,
      {
        name: 'Three Fish Pie',
        img: 'https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg',
        ingredients: [
          'Potatoes',       'Butter',
          'Milk',           'Gruyère',
          'Butter',         'Leek',
          'Plain Flour',    'White Wine',
          'Milk',           'Parsley',
          'Salmon',         'Haddock',
          'Smoked Haddock', 'Eggs'
        ],
        youtube: 'https://www.youtube.com/watch?v=Ds1Jb8H5Sg8'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=YMmgKCNcqwI'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=8xDM8U6h9Pw'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=mS_gbQpBvZo'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=A96hbwobKKs'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=fFLn1h80AGQ'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=rCUxg866Ea4'
      } ,
      {
        name: 'Tunisian Lamb Soup',
        img: 'https://www.themealdb.com/images/media/meals/t8mn9g1560460231.jpg',
        ingredients: [
          'Lamb Mince',    'Garlic',
          'Onion',         'Spinach',
          'Tomato Puree',  'Cumin',
          'Chicken Stock', 'Harissa Spice',
          'Chickpeas',     'Lemon Juice',
          'Macaroni',      'Salt',
          'Pepper'
        ],
        youtube: 'https://www.youtube.com/watch?v=w1qgTQmLRe4'
      } ,
      {
        name: 'Tuna and Egg Briks',
        img: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg',
        ingredients: [
          'Olive Oil',   'Spring Onions',
          'Spinach',     'Filo Pastry',
          'Tuna',        'Eggs',
          'Hotsauce',    'Tomatoes',
          'Cucumber',    'Lemon Juice',
          'Apricot Jam'
        ],
        youtube: 'https://www.youtube.com/watch?v=C5n1fN8TGHs'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=mulqW-J3Yy4'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=aASr5x0d3Ys'
      } ,
      {
        name: 'Traditional Croatian Goulash',
        img: 'https://www.themealdb.com/images/media/meals/n1hcou1628770088.jpg',
        ingredients: [
          'Beef',     'Onions',
          'Carrots',  'Garlic',
          'Bay Leaf', 'Red Wine',
          'Water',    'Mustard',
          'Salt',     'Pepper',
          'Paprika',  'Vegetable Oil'
        ],
        youtube: 'https://www.youtube.com/watch?v=ipEz5u2T7KM'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=VU8cXvlGbvc'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=C3pAgB7pync'
      } ,
      {
        name: 'Vietnamese Grilled Pork (bun-thit-nuong)',
        img: 'https://www.themealdb.com/images/media/meals/qqwypw1504642429.jpg',
        ingredients: [
          'Pork',       'Rice Vermicelli',
          'Egg Rolls',  'Challots',
          'Garlic',     'Sugar',
          'Fish Sauce', 'Soy sauce',
          'Pepper',     'Olive Oil',
          'Cucumber',   'Mint',
          'Peanuts'
        ],
        youtube: 'https://www.youtube.com/watch?v=Q3qcQcENzbU'
      } ,
      {
        name: 'Venetian Duck Ragu',
        img: 'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
        ingredients: [
          'Olive Oil',          'Duck Legs',
          'Onions',             'Garlic',
          'Cinnamon',           'Plain Flour',
          'Red Wine',           'Chopped Tomatoes',
          'Chicken Stock Cube', 'Rosemary',
          'Bay Leaves',         'Sugar',
          'Milk',               'Paccheri Pasta',
          'Parmesan Cheese'
        ],
        youtube: 'https://www.youtube.com/watch?v=oWQDVgjB_Lw'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=oHmKE9mWtWM'
      } ,
      {
        name: 'Vegetarian Chilli',
        img: 'https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg',
        ingredients: [
          'Roasted Vegetables',
          'Kidney Beans',
          'Chopped Tomatoes',
          'Mixed Grain'
        ],
        youtube: 'https://www.youtube.com/watch?v=D0bFRVH_EqU'
      } ,
      {
        name: "Vegetable Shepherd's Pie",
        img: 'https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg',
        ingredients: [
          'Potatoes',        'Small Potatoes',
          'Salted Butter',   'Mushrooms',
          'Brown Lentils',   'Garlic',
          'Kosher Salt',     'Onion',
          'Tomato Puree',    'Bay Leaves',
          'Olive Oil',       'Dry White Wine',
          'Vegetable Stock', 'Cornstarch',
          'Soy Sauce',       'Rosemary',
          'Parsley',         'Sage',
          'Chives'
        ],
        youtube: ''
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
        ],
        youtube: 'https://www.youtube.com/watch?v=LmJ0lsPLHDc'
      } ,
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
        ],
        youtube: 'https://www.youtube.com/watch?v=9h9No18ZyCI'
      } ,
      {
        name: 'Walnut Roll Gužvara',
        img: 'https://www.themealdb.com/images/media/meals/u9l7k81628771647.jpg',
        ingredients: [
          'Flour',       'Caster Sugar',
          'Yeast',       'Salt',
          'Milk',        'Eggs',
          'Butter',      'Walnuts',
          'Butter',      'Brown Sugar',
          'Cinnamon',    'Milk',
          'Icing Sugar'
        ],
        youtube: 'https://www.youtube.com/watch?v=Q_akngSJVrQ'
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
        ],
        youtube: 'https://www.youtube.com/watch?v=5Iy0MCowSvA'
      } ,
    ]
})

  await prisma.backFillIngredient.createMany({
    data: [
      { name: 'digestive biscuits' },
      { name: 'butter' },
      { name: 'bramley apples' },
      { name: 'butter, softened' },
      { name: 'caster sugar' },
      { name: 'free-range eggs, beaten' },
      { name: 'ground almonds' },
      { name: 'almond extract' },
      { name: 'flaked almonds' },
      { name: 'plain flour' },
      { name: 'braeburn apples' },
      { name: 'demerara sugar' },
      { name: 'blackberrys' },
      { name: 'cinnamon' },
      { name: 'ice cream' },
      { name: 'milk' },
      { name: 'oil' },
      { name: 'eggs' },
      { name: 'flour' },
      { name: 'baking powder' },
      { name: 'salt' },
      { name: 'unsalted butter' },
      { name: 'sugar' },
      { name: 'peanut butter' },
      { name: 'chicken thighs' },
      { name: 'challots' },
      { name: 'ginger' },
      { name: 'garlic clove' },
      { name: 'cayenne pepper' },
      { name: 'turmeric' },
      { name: 'cumin' },
      { name: 'coriander' },
      { name: 'fennel' },
      { name: 'tamarind paste' },
      { name: 'coconut milk' },
      { name: 'water' },
      { name: 'chilled butter' },
      { name: 'cold water' },
      { name: 'raspberry jam' },
      { name: 'free-range egg, beaten' },
      { name: 'bread' },
      { name: 'sultanas' },
      { name: 'double cream' },
      { name: 'nutmeg' },
      { name: 'mushrooms' },
      { name: 'english mustard' },
      { name: 'olive oil' },
      { name: 'beef fillet' },
      { name: 'parma ham' },
      { name: 'puff pastry' },
      { name: 'egg yolks' },
      { name: 'aubergine' },
      { name: 'onion' },
      { name: 'tomatoes' },
      { name: 'garlic' },
      { name: 'green chili' },
      { name: 'red chili powder' },
      { name: 'coriander leaves' },
      { name: 'beef brisket' },
      { name: 'thyme' },
      { name: 'rosemary' },
      { name: 'bay leaves' },
      { name: 'beef stock' },
      { name: 'carrots' },
      { name: 'mustard' },
      { name: 'potatoes' },
      { name: 'beef' },
      { name: 'broccoli' },
      { name: 'sunflower oil' },
      { name: 'onions' },
      { name: 'chorizo' },
      { name: 'all spice' },
      { name: 'cloves' },
      { name: 'cinnamon stick' },
      { name: 'oregano' },
      { name: 'ancho chillies' },
      { name: 'balsamic vinegar' },
      { name: 'plum tomatoes' },
      { name: 'tomato ketchup' },
      { name: 'dark brown sugar' },
      { name: 'borlotti beans' },
      { name: 'creme fraiche' },
      { name: 'parsley' },
      { name: 'rapeseed oil' },
      { name: 'celery' },
      { name: 'leek' },
      { name: 'vegetable stock' },
      { name: 'stilton cheese' },
      { name: 'sausages' },
      { name: 'tomato sauce' },
      { name: 'butter beans' },
      { name: 'black treacle' },
      { name: 'banana' },
      { name: 'vanilla extract' },
      { name: 'pecan nuts' },
      { name: 'raspberries' },
      { name: 'swede' },
      { name: 'red wine' },
      { name: 'bay leaf' },
      { name: 'suet' },
      { name: 'green beans' },
  { name: 'pepper' },
  { name: 'shallots' },
  { name: 'bacon' },
  { name: 'stout' },
  { name: 'corn flour' },
  { name: 'oysters' },
  { name: 'hazlenuts' },
  { name: 'lemon' },
  { name: 'lemon juice' },
  { name: 'yogurt' },
  { name: 'mint' },
  { name: 'self-raising flour' },
  { name: 'almonds' },
  { name: 'pink food colouring' },
  { name: 'apricot' },
  { name: 'marzipan' },
  { name: 'icing sugar' },
  { name: 'goose fat' },
  { name: 'beef shin' },
  { name: 'chestnut mushroom' },
  { name: 'bouquet garni' },
  { name: 'tomato puree' },
  { name: 'celeriac' },
  { name: 'cardamom' },
  { name: 'yeast' },
  { name: 'brie' },
  { name: 'prosciutto' },
  { name: 'chicken' },
  { name: 'tomato' },
  { name: 'red pepper' },
  { name: 'lime' },
  { name: 'allspice' },
  { name: 'soy sauce' },
  { name: 'cornstarch' },
  { name: 'vegetable oil' },
  { name: 'sesame seed oil' },
  { name: 'egg' },
  { name: 'starch' },
  { name: 'noodles' },
  { name: 'minced garlic' },
  { name: 'bean sprouts' },
  { name: 'oyster sauce' },
  { name: 'cherry tomatoes' },
  { name: 'salmon' },
  { name: 'black olives' },
  { name: 'ricotta' },
  { name: 'lemons' },
  { name: 'dark rum' },
  { name: 'maple syrup' },
  { name: 'breadcrumbs' },
  { name: 'red onions' },
  { name: 'pork' },
  { name: 'barbeque sauce' },
  { name: 'hotsauce' },
  { name: 'rice' },
  { name: 'cucumber' },
  { name: 'ground beef' },
  { name: 'minced beef' },
  { name: 'sesame seed burger buns' },
  { name: 'iceberg lettuce' },
  { name: 'cheese' },
  { name: 'dill pickles' },
  { name: 'mayonnaise' },
  { name: 'white wine vinegar' },
  { name: 'onion salt' },
  { name: 'garlic powder' },
  { name: 'paprika' },
  { name: 'kielbasa' },
  { name: 'cabbage' },
  { name: 'sauerkraut' },
  { name: 'basil' },
  { name: 'marjoram' },
  { name: 'caraway seed' },
  { name: 'diced tomatoes' },
  { name: 'worcestershire sauce' },
  { name: 'spring onions' },
  { name: 'egg white' },
  { name: 'bicarbonate of soda' },
  { name: 'star anise' },
  { name: 'coconut cream' },
  { name: 'filo pastry' },
  { name: 'plain chocolate' },
  { name: 'granulated sugar' },
  { name: 'enchilada sauce' },
  { name: 'shredded monterey jack cheese' },
  { name: 'corn tortillas' },
  { name: 'chicken breasts' },
  { name: 'parmesan cheese' },
  { name: 'white vinegar' },
  { name: 'honey' },
  { name: 'salted butter' },
  { name: 'dark soft brown sugar' },
  { name: 'golden syrup' },
  { name: 'orange' },
  { name: 'rolled oats' },
  { name: 'christmas pudding' },
  { name: 'ginger paste' },
  { name: 'cumin seeds' },
      { name: 'coriander seeds' },
      { name: 'turmeric powder' },
      { name: 'chilli powder' },
      { name: 'green chilli' },
      { name: 'cream' },
      { name: 'fenugreek' },
      { name: 'garam masala' },
      { name: 'squash' },
      { name: 'red pepper flakes' },
      { name: 'white wine' },
      { name: 'heavy cream' },
      { name: 'bowtie pasta' },
      { name: 'macaroni' },
      { name: 'chicken stock' },
      { name: 'fajita seasoning' },
      { name: 'chicken breast' },
      { name: 'cheddar cheese' },
      { name: 'cajun' },
      { name: 'white fish' },
      { name: 'flour tortilla' },
      { name: 'avocado' },
      { name: 'little gem lettuce' },
      { name: 'spring onion' },
      { name: 'salsa' },
      { name: 'sour cream' },
      { name: 'vinaigrette dressing' },
      { name: 'smoked paprika' },
      { name: 'refried beans' },
      { name: 'hard taco shells' },
      { name: 'shredded mexican cheese' },
      { name: 'grape tomatoes' },
      { name: 'jalapeno' },
      { name: 'green salsa' },
      { name: 'chicken thigh' },
      { name: 'sake' },
      { name: 'potato starch' },
      { name: 'chicken legs' },
      { name: 'brandy' },
      { name: 'linguine pasta' },
      { name: 'sugar snap peas' },
      { name: 'red chilli' },
      { name: 'king prawns' },
      { name: 'basil leaves' },
      { name: 'lettuce' },
      { name: 'fromage frais' },
      { name: 'clams' },
      { name: 'chopped tomatoes' },
      { name: 'passata' },
      { name: 'vegetable stock cube' },
      { name: 'whole milk' },
      { name: 'chicken stock cube' },
      { name: 'mustard powder' },
      { name: 'sweetcorn' },
      { name: 'harissa spice' },
      { name: 'dried apricots' },
      { name: 'chickpeas' },
      { name: 'couscous' },
      { name: 'cacao' },
      { name: 'vanilla' },
      { name: 'sea salt' },
      { name: 'cream cheese' },
      { name: 'light brown soft sugar' },
      { name: 'dark brown soft sugar' },
      { name: 'dark chocolate chips' },
      { name: 'dark chocolate' },
      { name: 'milk chocolate' },
      { name: 'cocoa' },
      { name: 'red wine vinegar' },
      { name: 'ham' },
      { name: 'tinned tomatos' },
      { name: 'gruyere cheese' },
      { name: 'walnuts' },
      { name: 'white flour' },
      { name: 'brown sugar' },
      { name: 'dried fruit' },
      { name: 'single cream' },
      { name: 'red wine jelly' },
      { name: 'shortcrust pastry' },
      { name: 'muscovado sugar' },
      { name: 'raisins' },
      { name: 'sun-dried tomatoes' },
      { name: 'basmati rice' },
      { name: 'dry white wine' },
      { name: 'kale' },
      { name: 'ginger cordial' },
      { name: 'mars bar' },
      { name: 'rice krispies' },
      { name: 'green pepper' },
      { name: 'chili powder' },
      { name: 'cashew nuts' },
      { name: 'orange blossom water' },
      { name: 'lentils' },
      { name: 'black pepper' },
      { name: 'grand marnier' },
      { name: 'custard' },
      { name: 'mascarpone' },
      { name: 'candied peel' },
      { name: 'sherry' },
      { name: 'glace cherry' },
      { name: 'currants' },
      { name: 'mixed spice' },
      { name: 'rose water' },
  { name: 'small potatoes' },
  { name: 'italian fennel sausages' },
  { name: 'shiitake mushrooms' },
  { name: 'quinoa' },
  { name: 'feta' },
  { name: 'pickle juice' },
  { name: 'celery salt' },
  { name: 'pork chops' },
  { name: 'cider' },
  { name: 'minced pork' },
  { name: 'courgettes' },
  { name: 'lamb shoulder' },
  { name: 'garlic sauce' },
  { name: 'cannellini beans' },
  { name: 'mozzarella' },
  { name: 'toor dal' },
  { name: 'ghee' },
  { name: 'mustard seeds' },
  { name: 'cilantro' },
  { name: 'apricot jam' },
  { name: 'duck legs' },
  { name: 'strawberries' },
  { name: 'meringue nests' },
  { name: 'mixed peel' },
  { name: 'black pudding' },
  { name: 'red snapper' },
  { name: 'yellow pepper' },
  { name: 'scotch bonnet' },
  { name: 'malt vinegar' },
  { name: 'peas' },
  { name: 'pita bread' },
  { name: 'floury potatoes' },
  { name: 'semi-skimmed milk' },
  { name: 'white fish fillets' },
  { name: 'jerusalem artichokes' },
  { name: 'prawns' },
  { name: 'dill' },
  { name: 'gruyère' },
  { name: 'carrot' },
  { name: 'french lentils' },
  { name: 'clotted cream' },
  { name: 'fettuccine' },
  { name: 'baked beans' },
  { name: 'lard' },
  { name: 'parmesan' },
  { name: 'tarragon' },
  { name: 'chives' },
  { name: 'fish stock' },
  { name: 'mussels' },
  { name: 'blackberries' },
  { name: 'broad beans' },
  { name: 'haddock' },
  { name: 'sardines' },
  { name: 'raw king prawns' },
  { name: 'chopped onion' },
  { name: 'freshly chopped parsley' },
  { name: 'cubed feta cheese' },
  { name: 'kosher salt' },
  { name: 'monterey jack cheese' },
  { name: 'colby jack cheese' },
  { name: 'duck sauce' },
  { name: 'rice vinegar' },
  { name: 'gochujang' },
  { name: 'dried oregano' },
  { name: 'chopped parsley' },
  { name: 'ground pork' },
  { name: 'sesame seed' },
  { name: 'chocolate chips' },
  { name: 'condensed milk' },
  { name: 'white chocolate chips' },
  { name: 'miniature marshmallows' },
  { name: 'wood ear mushrooms' },
  { name: 'tofu' },
  { name: 'vinegar' },
  { name: 'greek yogurt' },
  { name: 'fruit mix' },
  { name: 'whole wheat' },
  { name: 'lamb loin chops' },
  { name: 'turnips' },
  { name: 'charlotte potatoes' },
  { name: 'fresh thyme' },
  { name: 'kidney beans' },
  { name: 'curry powder' },
  { name: 'sushi rice' },
  { name: 'mirin' },
  { name: 'fries' },
  { name: 'doner meat' },
  { name: 'gouda cheese' },
  { name: 'sage' },
  { name: 'smoked haddock' },
  { name: 'water chestnut' },
  { name: 'peanuts' },
  { name: 'chilli' },
  { name: 'ras el hanout' },
  { name: 'pumpkin' },
  { name: 'lamb' },
  { name: 'saffron' },
  { name: 'red chile flakes' },
      { name: 'shortening' },
      { name: 'canola oil' },
      { name: 'boiling water' },
      { name: 'brown lentils' },
      { name: 'vine leaves' },
      { name: 'fennel bulb' },
      { name: 'lamb mince' },
      { name: 'potato' },
      { name: 'clove' },
      { name: 'khus khus' },
      { name: 'ginger garlic paste' },
      { name: 'full fat yogurt' },
      { name: 'red chilli powder' },
      { name: 'biryani masala' },
      { name: 'madras paste' },
      { name: 'tomato purée' },
      { name: 'red chili' },
      { name: 'thai red curry paste' },
      { name: 'fish sauce' },
      { name: 'rice noodles' },
      { name: 'lamb leg' },
      { name: 'butternut squash' },
      { name: 'lasagne sheets' },
      { name: 'mozzarella balls' },
      { name: 'lamb kidney' },
      { name: 'bulgur wheat' },
      { name: 'bun' },
      { name: 'baby plum tomatoes' },
      { name: 'fresh basil' },
      { name: 'farfalle' },
      { name: 'extra virgin olive oil' },
      { name: 'green olives' },
      { name: 'tuna' },
      { name: 'massaman curry paste' },
      { name: 'jasmine rice' },
      { name: 'chestnuts' },
      { name: 'wild mushrooms' },
      { name: 'truffle oil' },
      { name: 'paneer' },
      { name: 'naan bread' },
      { name: 'doubanjiang' },
      { name: 'fermented black beans' },
      { name: 'sichuan pepper' },
      { name: 'scallions' },
      { name: 'goat meat' },
      { name: 'mincemeat' },
      { name: 'mulukhiyah' },
      { name: 'chinese broccoli' },
      { name: 'buckwheat' },
      { name: 'desiccated coconut' },
      { name: 'custard powder' },
      { name: 'anchovy fillet' },
      { name: 'veal' },
      { name: 'orange zest' },
      { name: 'lemon zest' },
      { name: 'oxtail' },
      { name: 'rice stick noodles' },
      { name: 'dark soy sauce' },
      { name: 'peanut oil' },
      { name: 'spinach' },
      { name: 'beef gravy' },
      { name: 'cheese curds' },
      { name: 'spaghetti' },
      { name: 'pilchards' },
      { name: 'fennel seeds' },
      { name: 'haricot beans' },
      { name: 'blueberries' },
      { name: 'peanut cookies' },
      { name: 'gelatine leafs' },
      { name: 'peanut brittle' },
      { name: 'peaches' },
      { name: 'oatmeal' },
      { name: 'ground ginger' },
      { name: 'pears' },
      { name: 'rocket' },
      { name: 'tiger prawns' },
      { name: 'creamed corn' },
      { name: 'beetroot' },
      { name: 'ciabatta' },
      { name: 'cod' },
      { name: 'squid' },
      { name: 'baguette' },
      { name: 'smoky paprika' },
      { name: 'pitted black olives' },
      { name: 'rigatoni' },
      { name: 'pecorino' },
      { name: 'mackerel' },
      { name: 'tamarind ball' },
      { name: 'canned tomatoes' },
      { name: 'wholegrain bread' },
      { name: 'red onion' },
      { name: 'apple cider vinegar' },
      { name: 'egg plants' },
      { name: 'pine nuts' },
      { name: 'baby aubergine' },
      { name: 'paella rice' },
      { name: 'frozen peas' },
      { name: 'jam' },
      { name: 'lean minced beef' },
      { name: 'hot beef stock' },
      { name: 'penne rigate' },
      { name: 'italian seasoning' },
  { name: 'parmigiano-reggiano' },
  { name: 'cashews' },
  { name: 'medjool dates' },
  { name: 'harissa' },
  { name: 'ground cumin' },
  { name: 'asparagus' },
  { name: 'pretzels' },
  { name: 'caramel' },
  { name: 'caramel sauce' },
  { name: 'toffee popcorn' },
  { name: 'vermicelli' },
  { name: 'monkfish' },
  { name: 'baby squid' },
  { name: 'vine tomatoes' },
  { name: 'redcurrants' },
  { name: 'dijon mustard' },
  { name: 'tabasco sauce' },
  { name: 'salt cod' },
  { name: 'ackee' },
  { name: 'cooking wine' },
  { name: 'english muffins' },
  { name: 'smoked salmon' },
  { name: 'apples' },
  { name: 'zucchini' },
  { name: 'rhubarb' },
  { name: 'herring' },
  { name: 'rice wine' },
  { name: 'stir-fry vegetables' },
  { name: 'brown rice' },
  { name: 'thai green curry paste' },
  { name: 'thai fish sauce' },
  { name: 'horseradish' },
  { name: 'turkey mince' },
  { name: 'capers' },
  { name: 'tahini' },
  { name: 'goats cheese' },
  { name: 'green red lentils' },
  { name: 'vegan butter' },
  { name: 'soya milk' },
  { name: 'self raising flour' },
  { name: 'coco sugar' },
  { name: 'flax eggs' },
  { name: 'almond milk' },
  { name: 'rice vermicelli' },
  { name: 'egg rolls' },
  { name: 'paccheri pasta' },
  { name: 'roasted vegetables' },
  { name: 'mixed grain' },
  { name: 'wonton skin' },
      { name: 'udon noodles' },
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