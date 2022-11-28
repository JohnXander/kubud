const axios = require('axios')

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
const filteredAlphabet = alphabet.filter(letter => !'quxz'.includes(letter))

const getData = () => {
    filteredAlphabet.map(letter => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then(res => {
                res.data.meals.map(meal => {
                    const ingredients = []

                    for (let i = 1; i <= 20; i++) {
                        ingredients.push(meal[`strIngredient${i}`])
                    }

                    const filteredIng = ingredients.filter(ing => ing !== null && ing !== '')

                    // Display all meals from TheMealDB:

                    // console.log(
                    //     {
                    //         name: meal.strMeal,
                    //         img: meal.strMealThumb,
                    //         ingredients: filteredIng
                    //     }, ','
                    // )

                    // Display all ingredients from TheMealDB:

                    // console.log(filteredIng, ',')
                })
            })
    })
}

getData()