import React from "react";
import { Button, Group } from '@mantine/core';
import { Link } from "react-router-dom";

import "./style.css";
import "../../App.css";

function HeroSection() {
 return (
 <div className="hero-container">
 <div className="hero-text-container">
 <h1>Welcome to the Bait & Tackle Bazaar!</h1>

 <h3>The one-stop-shop for all your fishing needs</h3>
 <Group my="lg">
 <Link to="/about">
 <Button color="lighter-dark" size="md">Learn More</Button>
 </Link>
 <Button variant="filled" size="md" href="/shop" component={Link}>Start Shopping</Button>
 </Group>
 </div>
 </div>
 );
}

export default HeroSection;