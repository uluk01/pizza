import React from "react";
import {Categories, PizzaItem, Sort} from "../components";

function Home() {
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name) => console.log(name)}
                            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <Sort items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <PizzaItem/>
            </div>
        </div>
    )
}
export default Home;