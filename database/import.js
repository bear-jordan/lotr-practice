import * as d3 from "d3"
import Surreal from "surrealdb.js"
import { characters } from "./data/characters.js"
import { fellowship } from "./data/fellowship-quotes.js"
import { movies } from "./data/movies.js"
import { rotk } from "./data/return-of-the-king-quotes.js"
import { two_towers } from "./data/two-towers-quotes.js"


const db = new Surreal("http://localhost:8000/rpc")
const character_list = characters[0].docs
const fellowship_list = fellowship[0].docs
const movies_list = movies[0].docs
const rotk_list = rotk[0].docs
const two_towers_list = two_towers[0].docs

async function main() {

    await db.signin({
        user: 'root',
        pass: 'root',
    })

    await db.use('lotr', 'oneapi')

    character_list.map(d => {
        db.create("characters", d)
    })

    fellowship_list.map(d => {
        db.create("fellowship_quotes", d)
    })

    movies_list.map(d => {
        db.create("movies", d)
    })

    rotk_list.map(d => {
        db.create("rotk_quotes", d)
    })

    two_towers_list.map(d => {
        db.create("two_towers_quotes", d)
    })

} 

main()