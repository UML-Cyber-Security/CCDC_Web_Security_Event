import React, { useState } from "react";

const products = [
 { id: 1, name: "Fishing Rod", price: 19.99 },
 { id: 2, name: "Fishing Reel", price: 29.99 },
 { id: 3, name: "Fishing Line", price: 9.99 },
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
 <ul>
 {searchResults.map((product) => (
 <li key={product.id} dangerouslySetInnerHTML={{ __html: product.name }} />
 ))}
 </ul>
 </div>
 );
}

export default ShopInterface;