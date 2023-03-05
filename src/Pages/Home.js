import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../Components/AddBook';
import Card from '../Components/Card';

const Home = () => {
    const allBooks = useSelector(state => state.addBooks)
    return (
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div className="order-2 xl:-order-1">
                    <div className="flex items-center justify-between mb-12">
                        <h4 className="mt-2 text-xl font-bold">Book List</h4>

                        <div className="flex items-center space-x-4">
                            <button className="filter-btn active-filter" id="lws-filterAll">All</button>
                            <button className="filter-btn" id="lws-filterFeatured">Featured</button>
                        </div>
                    </div>
                    <div className="lws-bookContainer">
                        {allBooks && allBooks.map(book => <Card key={book.id} book={book}></Card>)}
                    </div>
                </div>
                <div>
                    <AddBook></AddBook>
                </div>
            </div>
        </main>
    );
};

export default Home;