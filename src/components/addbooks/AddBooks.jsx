import React, { useState } from 'react';
import "./AddBooks.css"

const AddBookForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [earning, setEarning] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [tags, setTags] = useState([]);
    const [images, setImages] = useState([]);

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        switch (field) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'price':
                setPrice(value);
                // Calculate earning based on a fixed percentage, e.g., 80% of the price
                setEarning(value * 0.8);
                break;
            case 'pickupAddress':
                setPickupAddress(value);
                break;
            case 'tags':
                setTags(value.split(','));
                break;
            case 'images':
                setImages([...e.target.files]);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to the server)
        // Reset the form fields if needed
        setTitle('');
        setDescription('');
        setPrice('');
        setEarning('');
        setPickupAddress('');
        setTags([]);
        setImages([]);
    };

    return (


        <div className='content items-align'>
            <div class='signup-container'>

                <div className="add-book-form">
                    <h2>Add Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Book Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => handleInputChange(e, 'title')}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Book Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => handleInputChange(e, 'description')}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="price">Book Price</label>
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => handleInputChange(e, 'price')}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="earning">User Earning</label>
                            <input type="number" id="earning" value={earning} disabled />
                        </div>
                        <div>
                            <label htmlFor="pickupAddress">Pickup Address</label>
                            <input
                                type="text"
                                id="pickupAddress"
                                value={pickupAddress}
                                onChange={(e) => handleInputChange(e, 'pickupAddress')}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                id="tags"
                                value={tags.join(',')}
                                onChange={(e) => handleInputChange(e, 'tags')}
                            />
                            <small>Separate tags with commas (e.g., fiction, thriller)</small>
                        </div>
                        <div>
                            <label htmlFor="images">Book Images</label>
                            <input
                                type="file"
                                id="images"
                                onChange={(e) => handleInputChange(e, 'images')}
                                multiple
                            />
                        </div>
                        <button type="submit">Add Book</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddBookForm;
