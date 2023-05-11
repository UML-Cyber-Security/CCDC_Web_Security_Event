import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {
 return (
 <div className="footer-container">
 <section className="social-media">
 <div class="footer-links">
 <div className="footer-link-wrapper">
 <div class="footer-link-items">
 <h2>Fishing Links</h2>
 <Link
 to={{
 pathname:
 "https://www.takemefishing.org/",
 }}
 target="_blank"
 >
 Take Me Fishing
 </Link>
 <Link
 to={{
 pathname:
 "https://www.bassmaster.com/",
 }}
 target="_blank"
 >
 Bassmaster
 </Link>
 <Link
 to={{
 pathname:
 "https://www.saltwatersportsman.com/",
 }}
 target="_blank"
 >
 Salt Water Sportsman
 </Link>
 </div>
 </div>
 <div className="footer-link-wrapper">
 <div class="footer-link-items">
 <h2>Fishing Gear</h2>
 <Link to={{ pathname: "https://www.basspro.com/"}} target="_blank">Bass Pro Shops</Link>
 <Link to={{ pathname: "https://www.cabelas.com/"}} target="_blank">Cabela's</Link>
 <Link to={{ pathname: "https://www.tacklewarehouse.com/"}} target="_blank">Tackle Warehouse</Link>
 </div>
 <div class="footer-link-items">
 <h2>Fishing Tips</h2>
 <Link to={{ pathname: "https://www.fieldandstream.com/fishing"}} target="_blank">Field & Stream</Link>
 <Link to={{ pathname: "https://www.outdoorlife.com/fishing/"}} target="_blank">Outdoor Life</Link>
 </div>
 </div>
 </div>
 <div className="social-media-wrap">
 <small className="website-rights">
 © Bait & Tackle Bazaar - 2023
 </small>
 </div>
 </section>
 </div>
 );
}

export default Footer;