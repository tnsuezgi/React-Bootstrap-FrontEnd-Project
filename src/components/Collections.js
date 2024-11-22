import React, { useState } from "react";
import images from "../assets/images";
import Icons from "../assets/icons";

const Collections = () => {
    const [activeButton, setActiveButton] = useState(1);

    const getImageStyle = (isActive) => {
        const isMobile = window.innerWidth <= 768;

        return {
            transition: "transform 0.6s ease, opacity 0.6s ease",
            transform: isActive
                ? (isMobile ? "translate(0, 40px) scale(1)" : "translate(0, 100px) scale(1)")
                : (isMobile ? "translate(-60px, 0) scale(0.9)" : "translate(-140px, 0) scale(0.9)"),
            zIndex: isActive ? 2 : 1,
            position: "absolute",
            right: isMobile ? 30 : 50,
            top: isMobile ? -20 : -30,
        };
    };

    return (
        <div className="body-area-5 pt-2 pt-md-5 position-relative">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-12 d-flex flex-column mb-4">
                        <div className="col-12 col-md-12 d-flex flex-row justify-content-center justify-content-md-start">
                            <h4 className="fs-1 text-center text-md-start fw-bolder py-4">
                                Grow your collection</h4>
                        </div>
                        <div className={"col-12 col-md-12 d-flex flex-row justify-content-end text-center text-md-start"}>
                            <p>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
                                pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                                Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum
                                quam tellus.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 d-flex flex-column flex-md-row mb-4 ">
                        <div className="col-12 col-md-3 d-flex flex-row flex-md-column mb-5 mb-md-4 mobil-col-buttons">
                            <button
                                className={`btn btn-collection font-size-16 py-2 text-start my-2 ${
                                    activeButton === 1 ? "btn-active" : ""
                                }`}
                                onClick={() => setActiveButton(1)}
                            >
                                <i className="bi bi-search me-3"></i>
                                Bibendum tellus
                                <i className="bi bi-arrow-right mx-3"></i>
                            </button>
                            <button
                                className={`btn btn-collection font-size-16 py-2 text-start my-2 ${
                                    activeButton === 2 ? "btn-active" : ""
                                }`}
                                onClick={() => setActiveButton(2)}
                            >
                                <img src={Icons.shieldCheck} alt="Shield Check" className="me-3"/>
                                Cras eget
                                {activeButton === 2 && <i className="bi bi-arrow-right mx-3"></i>}
                            </button>
                            <button
                                className={`btn btn-collection font-size-16 py-2 text-start my-2 ${
                                    activeButton === 3 ? "btn-active" : ""
                                }`}
                                onClick={() => setActiveButton(3)}
                            >
                                <img src={Icons.rocket} alt="Rocket" className="me-3"/>
                                Dolor pharetra
                                {activeButton === 3 && <i className="bi bi-arrow-right mx-3"></i>}
                            </button>
                            <button
                                className={`btn btn-collection font-size-16 py-2 text-start my-2 ${
                                    activeButton === 4 ? "btn-active" : ""
                                }`}
                                onClick={() => setActiveButton(4)}
                            >
                                <img src={Icons.screen} alt="Screen" className="me-3"/>
                                Amet, fringilla
                                {activeButton === 4 && <i className="bi bi-arrow-right mx-3"></i>}
                            </button>
                            <button
                                className={`btn btn-collection font-size-16 py-2 text-start my-2 ${
                                    activeButton === 5 ? "btn-active" : ""
                                }`}
                                onClick={() => setActiveButton(5)}
                            >
                                <img src={Icons.podcast} alt="podcast" className="me-3"/>
                                Amet nibh
                                {activeButton === 5 && <i className="bi bi-arrow-right mx-3"></i>}
                            </button>
                            <button
                                className={`btn btn-collection font-size-16 py-2 text-start my-2 ${
                                    activeButton === 6 ? "btn-active" : ""
                                }`}
                                onClick={() => setActiveButton(6)}
                            >
                                <img src={Icons.settingsAlt} alt="settingsAlt" className="me-3"/>
                                Sed velit
                                {activeButton === 6 && <i className="bi bi-arrow-right mx-3"></i>}
                            </button>
                        </div>
                        <div className="desktop-area col-12 col-md-9 d-flex flex-column mb-4 align-items-end position-relative">
                            <img
                                src={images.desktop2}
                                alt="desktop2"
                                className={"collection-img"}
                                style={getImageStyle(activeButton === 1)}
                            />
                            <img
                                src={images.desktop}
                                alt="desktop"
                                className={"collection-img"}
                                style={getImageStyle(activeButton === 2)}
                            />
                            <img
                                src={images.desktop2}
                                alt="desktop2"
                                className={"collection-img"}
                                style={getImageStyle(activeButton === 3)}
                            />
                            <img
                                src={images.desktop}
                                alt="desktop"
                                className={"collection-img"}
                                style={getImageStyle(activeButton === 4)}
                            />
                            <img
                                src={images.desktop2}
                                alt="desktop2"
                                className={"collection-img"}
                                style={getImageStyle(activeButton === 5)}
                            />
                            <img
                                src={images.desktop}
                                alt="desktop"
                                className={"collection-img"}
                                style={getImageStyle(activeButton === 6)}
                            />
                            <div className={"collection-fix-pic"}>
                                <img
                                    src={images.collectionFixPic}
                                    alt="collectionFixPic"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
