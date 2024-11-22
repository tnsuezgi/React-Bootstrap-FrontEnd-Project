import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import images from "../assets/images";
import Icons from "../assets/icons";

const MapArea = () => {
    const [hoveredLocation, setHoveredLocation] = useState(null);
    const [currentCount, setCurrentCount] = useState(0);

    const countAnimation = useSpring({
        number: 11658467,
        from: { number: currentCount },
        config: { duration: 2000 },
        onRest: () => setCurrentCount(100000),
    });

    const locations = [
        {id: 1, name: "", top: window.innerWidth > 768 ? "40%" : "230px", left: "25%", image: images.mapPicture},
        {id: 2, name: "", top: window.innerWidth > 768 ? "30%" : "150px", left: "35%", image: images.mapPicture},
        {id: 3, name: "", top: window.innerWidth > 768 ? "60%" : "180px", left: "65%", image: images.mapPicture},
        {id: 4, name: "", top: window.innerWidth > 768 ? "70%" : "250px", left: "75%", image: images.mapPicture},
        {id: 5, name: "", top: window.innerWidth > 768 ? "20%" : "280px", left: "32%", image: images.mapPicture},
        {id: 6, name: "", top: window.innerWidth > 768 ? "30%" : "310px", left: "55%", image: images.mapPicture}
    ];

    return (
        <div className="body-area-6 py-7 position-relative">
            <div
                className="world-map"
                style={{
                    backgroundImage: `url(${images.worldMap})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: window.innerWidth > 768 ? "600px" : "450px",
                    width: "100%",
                    position: "relative",
                }}
            >
                {locations.map((location) => (
                    <div
                        key={location.id}
                        className="location-marker"
                        onMouseEnter={() => setHoveredLocation(location.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                        style={{
                            position: "absolute",
                            top: location.top,
                            left: location.left,
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                            zIndex: 2,
                        }}
                    >

                        {/*{hoveredLocation === location.id && <img src={Icons.locationActive} alt="Location Active" className="me-3"/>}*/}
                        {hoveredLocation !== location.id && <img src={Icons.locationPassive} alt="Location Pasive" className="me-3"/>}

                        {hoveredLocation === location.id && (
                            <div
                                className="tooltip-location"
                                style={{
                                    position: "absolute",
                                    top: "-230px",
                                    left: "-10px",
                                    transform: "translateX(-50%)",
                                    color: "#fff",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    fontSize: "0.9rem",
                                    textAlign: "center",
                                    zIndex: 3,
                                }}
                            >
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    style={{
                                        width: "256px",
                                        height: "auto",
                                        marginBottom: "5px",
                                    }}
                                />
                                {location.name}
                            </div>
                        )}
                    </div>
                ))}

                <div
                    className="access-count"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "#fff",
                        //backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        zIndex: 1,
                    }}
                >
                    <animated.div style={{fontSize: window.innerWidth <= 768 ? "40px" : "76px", fontWeight: "bold"}}>
                        {countAnimation.number.to((n) =>
                            new Intl.NumberFormat("en-US").format(Math.floor(n))
                        )}
                    </animated.div>
                    <div style={{fontSize:  window.innerWidth <= 768 ? "18px" : "36px", fontWeight: "bold", zIndex: 999}}>
                        Shoes Collected
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapArea;
