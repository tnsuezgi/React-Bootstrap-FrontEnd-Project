import React, {useRef, useState} from 'react';
import images from '../assets/images';
import Icons from '../assets/icons';
import ShoesVideo from '../assets/videos/shoes-video.mp4';
import Comments from './Comments';
import Collections from './Collections';
import MapArea from './MapArea';
const BodyContent = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="body-content">
            {/*<div className={"trio-backg"}></div>*/}
            {/* <div className="trio-backg">
                <div className="triangle"></div>
            </div>*/}
            <div className="body-top-area">
                <div className="triangle"></div>
                <div className="container slider-container">
                    <div className="row d-flex align-items-center h-100 ">
                        <div className="col-md-6 caption-container z-1 d-flex align-items-center align-items-md-start mb-3 mb-md-0">
                            <h5 className="fs-1 my-4 ">Collectible Sneakers</h5>
                            <p className="fs-6 text-center text-md-start px-2">
                                Sit elit feugiat turpis sed integer
                                integer accumsan turpis. Sed suspendisse nec lorem
                                mauris.
                                Pharetra, eu imperdiet ipsum ultrices amet.</p>
                            <div className="d-flex">
                                <button className="btn btn-outline-custom btn-border-color-brown font-size-16 me-2">Sign
                                    up now
                                </button>
                                <button className="btn btn-outline-not-border d-flex align-items-center font-size-16">
                                    {/*<i className="bi bi-play-circle me-1" style={{fontSize: "20px"}}></i>*/}
                                    <img src={Icons.play} alt="Play" className="me-1"/>
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 image-container d-flex justify-content-center justify-content-md-end z-1">
                            <div className="img-area">
                                <img src={images.singleShoe} height={388} alt="Single Shoe"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*///////*/}
                <div className="container py-5 mobil-kupa-back">
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center justify-content-md-start">
                            <div className="card shadow-sm spec-area d-flex align-items-center align-items-md-start">
                                <div className="icon-spec mb-3 position-relative">
                                    <div className="icon-top position-absolute placement-icon">
                                        <img src={images.kupaUcgen} height={25} alt="Kupa Ucgen"/>
                                    </div>
                                    <div className="icon-bottom position-absolute">
                                        <img src={images.kupa} height={50} alt="Kupa"/>
                                    </div>
                                </div>
                                <h3 className="mb-2 fs-5 font-weight-500">Nibh viverra</h3>
                                <p className={"fs-6 text-center text-md-start"}>Sit bibendum donec dolor fames neque vulputate non sit
                                    aliquam. Consequat turpis natoque leo, massa. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center justify-content-md-start">
                            <div className="card spec-area d-flex align-items-center align-items-md-start">
                                <div className="icon-spec mb-3 position-relative">
                                    <div className="icon-top position-absolute placement-icon">
                                        <img src={images.tatliYuzTop} height={30} alt="Kupa Ucgen"/>
                                    </div>
                                    <div className="icon-bottom position-absolute">
                                        <img src={images.tatliYuz} height={50} alt="Kupa"/>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-start fs-5 font-weight-500">Cursus amet</h3>
                                <p className={"text-center text-md-start fs-6"}>Sit bibendum donec dolor fames neque vulputate non sit
                                    aliquam. Consequat turpis natoque leo, massa. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center justify-content-md-start">
                            <div className="card shadow-sm spec-area d-flex align-items-center align-items-md-start">
                                <div className="icon-spec mb-3 position-relative">
                                    <div className="icon-top position-absolute placement-icon">
                                        <img src={images.tvTop} height={25} alt="Kupa Ucgen"/>
                                    </div>
                                    <div className="icon-bottom position-absolute">
                                        <img src={images.tv} height={50} alt="Kupa"/>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-start fs-5 font-weight-500">Ipsum fermentum</h3>
                                <p className={"text-center text-md-start fs-6"}>Sit bibendum donec dolor fames neque vulputate non sit
                                    aliquam. Consequat turpis natoque leo, massa. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*///////*/}
            <div className="body-area-2 background-color-lac">
                <div className="col-md-12 py-5 d-flex flex-column">
                    <div className="container pb-5 d-flex flex-column flex-md-row align-items-center">
                        <div className="col-12 col-md-8">
                            <h4 className="fs-1 text-center text-md-start fw-bolder mb-4 mb-md-0"
                                style={{color: "#fff"}}>
                                The best of the best</h4>
                        </div>
                        <div className="col-12 col-md-4 text-white text-center text-md-end">
                            <button className="btn btn-outline-custom
                                btn-border-color-white font-size-16 text-white">
                                Sign up now
                            </button>
                        </div>
                    </div>
                    <div className={"w-100  position-relative"}> {/*background-body-area-2*/}
                        <div className={"area-back"}>
                            <img src={window.innerWidth > 768 ? images.backlights : images.backlightsMobil} alt="backlights" className="background-body-area-2"/>
                        </div>
                        <div
                            className={"container col-md-12 d-flex flex-column flex-md-row justify-content-around padding-top-bot"}>
                            <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
                                <div className="card h-100">
                                    <img
                                        src={images.picture1}
                                        className="card-img-top"
                                        alt="Card 1"
                                        height={220}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-start">Title</h5>
                                        <p className="card-text text-start">
                                            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                        </p>
                                        <button
                                            className="btn btn-outline-custom
                                                    btn-border-color-white w-100">
                                            <img src={Icons.basket} alt="Basket" className="me-3"/>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Kart 2 */}
                            <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
                                <div className="card h-100">
                                    <img
                                        src={images.picture2}
                                        className="card-img-top"
                                        alt="Card 2"
                                        height={220}
                                        style={{objectFit: "cover", height: "100%", width: "100%"}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-center text-md-start">Title</h5>
                                        <p className="card-text text-center text-md-start">
                                            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                        </p>
                                        <button
                                            className="btn btn-outline-custom
                                                    btn-border-color-white w-100">
                                            <img src={Icons.basket} alt="Basket" className="me-3"/>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Kart 3 */}
                            <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
                                <div className="card h-100">
                                    <img
                                        src={images.picture3}
                                        className="card-img-top"
                                        alt="Card 3"
                                        height={220}
                                        style={{objectFit: "cover", height: "100%"}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-center text-md-start">Title</h5>
                                        <p className="card-text text-center text-md-start">
                                            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                        </p>
                                        <button
                                            className="btn btn-outline-custom
                                                    btn-border-color-white w-100">
                                            <img src={Icons.basket} alt="Basket" className="me-3"/>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*///////*/}
            <div className="body-area-3">
                <div className="container background-body-area-3">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6 custom-col-12 d-flex flex-column align-items-center align-items-md-start">
                            <h4 className="fs-1 text-center text-md-start fw-bolder py-2">
                                Why join us</h4>
                            <ul className={"text-start list-unstyled py-2"}>
                                <li className={"py-1"}><i className="bi bi-check"
                                                          style={{color: "rgba(21, 128, 61, 1)"}}></i> Est et in
                                    pharetra magna adipiscing ornare aliquam.
                                </li>
                                <li className={"py-1"}><i className="bi bi-check"
                                                          style={{color: "rgba(21, 128, 61, 1)"}}></i> Tellus arcu
                                    sed consequat ac velit ut eu blandit.
                                </li>
                                <li className={"py-1"}><i className="bi bi-check"
                                                          style={{color: "rgba(21, 128, 61, 1)"}}></i> Ullamcorper
                                    ornare in et egestas dolor orci.
                                </li>
                            </ul>
                            <button className="btn btn-outline-custom btn-border-color-brown
                                font-size-16 me-2 py-2">Sign up now
                            </button>
                        </div>
                        <div className="col-12 col-md-6 custom-col-12 right-area d-flex justify-content-end" style={{margin: "50px 0"}}>
                            <div className={"video-back"}>
                                <img src={images.videoBack} alt="video back" className="video-back"/>
                            </div>
                            <div className="video-area position-relative">
                                <div className="video-wrapper position-relative">
                                    <video
                                        className="video-element"
                                        controls
                                        ref={videoRef}
                                        poster={images.videoPoster}
                                        onPlay={() => setIsPlaying(true)} // Video oynarken durumu güncelle
                                        onPause={() => setIsPlaying(false)} // Video durduğunda durumu güncelle
                                    >
                                        <source src={ShoesVideo} type="video/mp4"/>
                                        Tarayıcınız bu videoyu desteklemiyor.
                                    </video>
                                    <div onClick={togglePlayPause}>
                                        <img src={Icons.circles} alt="Circles" className=" video-icon-2"/>
                                        <div className={"video-icon-2"}></div>
                                        <img
                                            src={isPlaying ? Icons.videoPause : Icons.videoPlay}
                                            alt={isPlaying ? "Pause" : "Play"}
                                            className={isPlaying ? "pause-icon" : "play-icon"}
                                        />
                                    </div>

                                </div>
                                <div className={"video-icon-3"}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/*///////*/}
            <Comments/>
            {/*///////*/}
            <Collections/>
            {/*///////*/}
            <MapArea/>
            {/*///////*/}
        </div>
    );
};

export default BodyContent;