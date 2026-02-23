const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Product Data
const products = {
    1: {
        name: "iPhone 15",
        price: "₹79,900",
        brand: "Apple",
        specs: "128GB, A16 Bionic Chip, 48MP Camera",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484f89e9"
    },
    2: {
        name: "Samsung Galaxy S23",
        price: "₹74,999",
        brand: "Samsung",
        specs: "256GB, Snapdragon 8 Gen 2, 50MP Camera",
        image: "https://images.unsplash.com/photo-1678911820864-e7f2c6b4c8c2"
    },
    3: {
        name: "OnePlus 11",
        price: "₹56,999",
        brand: "OnePlus",
        specs: "256GB, Snapdragon 8 Gen 2, 50MP Camera",
        image: "https://images.unsplash.com/photo-1675612463710-2bcb7c6e4f89"
    }
};

// Route for product details
app.get('/product/:id', (req, res) => {
    const product = products[req.params.id];

    if (product) {
        res.send(`
            <html>
            <head>
                <title>${product.name}</title>
            </head>
            <body style="font-family:Arial; text-align:center;">
                <h1>${product.name}</h1>
                <img src="${product.image}" width="300"/>
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Specifications:</strong> ${product.specs}</p>
                <br>
                <a href="/">Go Back</a>
            </body>
            </html>
        `);
    } else {
        res.send("Product not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
