import React from 'react';
import TitlebarComponent from "../../components/layouts/Titlebar.component";
import GalleryComponent from "../../components/gallery/Gallery.component";

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <TitlebarComponent />
            <div>
                <GalleryComponent />
            </div>
        </div>
    );
};

export default HomePage;