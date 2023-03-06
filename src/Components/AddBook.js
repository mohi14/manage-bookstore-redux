import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooks, editBooks } from '../redux/addBooks/action';
import addedBooks from '../redux/addBooks/thunk/addedBooks';
import editedBooks from '../redux/addBooks/thunk/editedBooks';

const AddBook = ({ editedItem, setEditedItem }) => {
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const author = form.author.value;
        const thumbnail = form.thumbnail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const featured = form.featured.checked;

        const data = {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        }
        dispatch(addedBooks(data))
        form.reset()
    }

    const handleEditSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const author = form.author.value;
        const thumbnail = form.thumbnail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const featured = form.featured.checked;

        const data = {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        }
        dispatch(editedBooks(editedItem.id, data))
        form.reset()
        setEditedItem(null)

    }

    return (
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            {
                editedItem ?
                    <form className="book-form" onSubmit={handleEditSubmit}>
                        <div className="space-y-2">
                            <label for="name">Book Name</label>
                            <input required className="text-input" type="text" id="input-Bookname" name="name" Value={editedItem.name} />
                        </div>

                        <div className="space-y-2">
                            <label for="category">Author</label>
                            <input required className="text-input" type="text" id="input-Bookauthor" name="author" Value={editedItem.author} />
                        </div>

                        <div className="space-y-2">
                            <label for="image">Image Url</label>
                            <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" Value={editedItem.thumbnail} />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label for="price">Price</label>
                                <input required className="text-input" type="number" id="input-Bookprice" name="price" Value={editedItem.price} />
                            </div>

                            <div className="space-y-2">
                                <label for="quantity">Rating</label>
                                <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" Value={editedItem.rating} />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" defaultChecked={editedItem.featured === true ? true : false} />
                            <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="submit">Update Book</button>
                    </form>
                    :
                    <form className="book-form" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label for="name">Book Name</label>
                            <input required className="text-input" type="text" id="input-Bookname" name="name" />
                        </div>

                        <div className="space-y-2">
                            <label for="category">Author</label>
                            <input required className="text-input" type="text" id="input-Bookauthor" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label for="image">Image Url</label>
                            <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label for="price">Price</label>
                                <input required className="text-input" type="number" id="input-Bookprice" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label for="quantity">Rating</label>
                                <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            {!editedItem && <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />}
                            <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="submit">Add Book</button>
                    </form>
            }
        </div>
    );
};

export default AddBook;