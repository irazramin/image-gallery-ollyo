import React from 'react';
import NavbarComponent from "../../components/layouts/Navbar.component";
import GalleryComponent from "../../components/gallery/Gallery.component";

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <NavbarComponent />
            <div>
                <GalleryComponent />
            </div>
        </div>
    );
};

export default HomePage;