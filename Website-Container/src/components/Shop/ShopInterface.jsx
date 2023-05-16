import React, { useState } from "react";

const products = [
    { id: 1, name: "Fishing Rod", price: 19.99 },
    { id: 2, name: "Fishing Reel", price: 29.99 },
    { id: 3, name: "Fishing Line", price: 9.99 },
    { id: 4, name: "Fishing Lures", price: 4.99 },
    { id: 5, name: "Fishing Hooks", price: 2.99 },
    { id: 6, name: "Bobbers", price: 1.99 },
    { id: 7, name: "Sinkers", price: 1.99 },
    { id: 8, name: "Swivels", price: 0.99 },
    { id: 9, name: "Fishing Pliers", price: 14.99 },
    { id: 10, name: "Tackle Box", price: 24.99 },
    { id: 11, name: "Fishing Net", price: 19.99 },
    { id: 12, name: "Fishing Hat", price: 14.99 },
    { id: 13, name: "Waders", price: 59.99 },
    { id: 14, name: "Fillet Knife", price: 19.99 },
    { id: 15, name: "Rod Holder", price: 9.99 },
    { id: 16, name: "Undergraduate Degree", price: 120000.00 },
    { id: 17, name: "PHD", price: "Your soul" }
];


function ShopInterface() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (event) => {
      event.preventDefault();
      setSearchResults(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };
  
    return (
      <div>
        <h1>Bait & Tackle Bazaar</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {searchResults.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                {product.name} -{" "}
                {typeof product.price === "string"
                  ? product.price
                  : `$${product.price.toFixed(2)}`}
              </li>
            ))}
          </ul>
        )}
        {/* XSS vulnerability introduced here */}
        <div dangerouslySetInnerHTML={{ __html: searchTerm }} />
      </div>
    );
  }
  
  export default ShopInterface;