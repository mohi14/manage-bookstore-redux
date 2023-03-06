import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from '../Components/AddBook';
import Card from '../Components/Card';
import { filterBooks } from '../redux/addBooks/action';
import fetchBooks from '../redux/addBooks/thunk/fetchBooks';
import { featuredFilter } from '../redux/fillter/action';

const Home = () => {
    const allBooks = useSelector(state => state.addBooks)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleStatusChanged = (status) => {
        dispatch(featuredFilter(status))
    }



    const handleFeatured = (book) => {
        const { status } = filter;
        switch (status) {
            case true:
                return book.featured;
            case "ALL":
                return true
            default:
                return true;
        }
    }

    const handleSearch = (book) => {
        const { searchText } = filter;
        if (searchText) {
            // const searchValue = searchText.toLowerCase()
            // const bookName = book.name.toLowerCase()
            // return searchValue && bookName.startsWith(searchValue)
            return book.name.toLowerCase().includes(searchText.toLowerCase())
        }
        else {
            return true
        }
    }

    useState(() => { dispatch(fetchBooks) }, [dispatch])

    const [editedItem, setEditedItem] = useState(null)
    return (
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div className="order-2 xl:-order-1">
                    <div className="flex items-center justify-between mb-12">
                        <h4 className="mt-2 text-xl font-bold">Book List</h4>

                        <div className="flex items-center space-x-4">
                            <button className={`filter-btn ${filter.status === "ALL" && "active-filter"}`} id="lws-filterAll" onClick={() => handleStatusChanged("ALL")}>All</button>
                            <button className={`filter-btn ${filter.status === true && "active-filter"}`} id="lws-filterFeatured" onClick={() => handleStatusChanged(true)}>Featured</button>
                        </div>
                    </div>
                    <div className="lws-bookContainer">
                        {allBooks && allBooks.filter(handleFeatured).filter(handleSearch).map(book => <Card key={book.id} book={book} setEditedItem={setEditedItem}></Card>)}
                    </div>
                </div>
                <div>
                    <AddBook editedItem={editedItem} setEditedItem={setEditedItem}></AddBook>
                </div>
            </div>
        </main>
    );
};

export default Home;