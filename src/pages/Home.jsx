import React, {useCallback, useEffect} from "react";
import {Categories, PizzaItem, Sort, PizzaLoadingItem} from "../components";

import {useDispatch, useSelector} from "react-redux";

import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price',order: 'desc'},
    {name: 'алфавиту', type: 'name',order: 'asc'}
];

function Home() {
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category,sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSort = useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}/>
                <Sort items={sortItems} activeSortType={sortBy.type} onCLickSortType={onSelectSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded &&
                items.map(obj => (
                    <PizzaItem
                        onClickAddPizza={handleAddPizzaToCart}
                        key={obj.id}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                        {...obj} />
                ))
                }
                {!isLoaded &&
                Array(items.length <= 0 ? 12 : items.length)
                    .fill(0)
                    .map((_, index) => <PizzaLoadingItem key={index}/>)
                }
            </div>
        </div>
    )
}


export default Home;