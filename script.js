// const axios = require('axios/dist/browser/axios.cjs');
// async function searchBooksByTitle(bookName) {
//     try {
//         const apiUrl = 'http://openlibrary.org/search.json';
//         const params = {
//             title: bookName,
//         };

//         const response = await axios.get(apiUrl, { params });
//         const data = response.data;

//         // Process the data as per your requirements
//         // For example, you can access book details like this:
//         if (data.docs) {
//             data.docs.forEach((book) => {
//                 // console.log('Title:', book.title);
//                 // console.log('Author:', book.author_name);
//                 // console.log('Cover Image URL:', book.cover_i);
//                 // console.log('Description:', book.description);
//                 // console.log('-----');
//                 console.log(book);
//             });
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// async function searchBooksByTitle(bookName) {
//     try {
//         const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
//         const params = {
//             q: `intitle:${bookName}`,
//         };

//         const response = await axios.get(apiUrl, { params });
//         const data = response.data;

//         // Process the data as per your requirements
//         // For example, you can access book details like this:
//         if (data.items) {
//             data.items.forEach((book) => {
//                 const volumeInfo = book.volumeInfo;
//                 console.log(volumeInfo);
//                 // console.log('Title:', volumeInfo.title);
//                 // console.log('Author:', volumeInfo.authors);
//                 // console.log(
//                 //     'Cover Image URL:',
//                 //     volumeInfo.imageLinks?.thumbnail
//                 // );
//                 // console.log('Description:', volumeInfo.description);
//                 // console.log('-----');
//             });
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// // Example usage
// searchBooksByTitle('Atomic Habits');

// Example usage
// searchBooksByTitle('2 States');

import mongoose from './mongoose';

const uri =
    'mongodb+srv://ayush:ayush@cluster0.hjwbcfm.mongodb.net/Cluster0?retryWrites=true&w=majority';

const connetDB = () => {
    return mongoose.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        () => {
            console.log('Connected');
        }
    );
};

const start = async () => {
    await connetDB();
};

start();
