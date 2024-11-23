import React, {useRef, useState} from 'react';
import images from '../assets/images';
import Icons from '../assets/icons';

const Comments = () => {
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollAmount = 390;

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= scrollAmount;
            setScrollPosition(scrollRef.current.scrollLeft);
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollAmount;
            setScrollPosition(scrollRef.current.scrollLeft);
        }
    };
    return (
        <div className="body-area-4 position-relative">
            <div className={"yellow-area"}></div>
            <div className="background-body-area-3">
                <div className="d-flex flex-column align-items-center">
                    <div className="container d-flex flex-row mb-4">
                        <div className="col-12 col-md-8 d-flex flex-column">
                            <h4 className="fs-1 text-start fw-bolder py-2">
                                Because they love us</h4>
                        </div>
                        <div className={"d-none d-md-flex col-12 col-md-4 d-flex flex-row justify-content-start justify-content-md-end"}>
                            <button className="btn me-1 nb-button" id="prevBtn"
                                    style={{border: "none"}}
                                    disabled={scrollPosition === 0}
                                    onClick={handleScrollLeft}>
                                <img src={Icons.backButton} alt="Back Button" className={""}/>
                            </button>
                            <button className="btn nb-button" id="nextBtn"
                                    style={{border: "none"}}
                                    onClick={handleScrollRight}>
                                <img src={Icons.nextButton} alt="Next Button" className={""}/>
                            </button>
                        </div>
                    </div>
                    <div className="slider-container position-relative scrollable-area">
                        <div className="slider d-flex overflow-hidden scrollable-content" ref={scrollRef}>
                            <div className="card mx-3 flex-shrink-0 ">
                                <div className="card-body text-start">
                                    <img src={images.zoomerLogo} height={25} alt="zoomerLogo" className={"my-4"}/>
                                    <p className="card-text mb-4 text-start font-size-24">
                                        Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra
                                        turpis lorem. Varius a turpis urna id porttitor.
                                    </p>
                                </div>
                                <div className="card-footer card-footer-spec">
                                    <div className={"d-flex flex-row align-items-center card-footer-spec-area"}>
                                        <div className={"col-md-3"}>
                                            <img src={images.commentator1} height={50} alt="commentator1"
                                                 className={"my-4"}/>
                                        </div>
                                        <div className={"col-md-9 d-flex flex-column text-start px-2"}>
                                            <span className={"commName text-500 font-size-18"}>Hellen Jummy</span>
                                            <span className={"comm-pos font-size-18"}>Team Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mx-3 flex-shrink-0">
                                <div className="card-body text-start">
                                    <img src={images.zoomerLogo} height={25} alt="zoomerLogo" className={"my-4"}/>
                                    <p className="card-text mb-4 text-start font-size-24">
                                        Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit
                                        purus venenatis velit semper lectus sed ornare quam nulla.
                                    </p>
                                </div>
                                <div className="card-footer card-footer-spec">
                                    <div className={"d-flex flex-row align-items-center card-footer-spec-area"}>
                                        <div className={"col-md-3"}>
                                            <img src={images.commentator2} height={50} alt="commentator1"
                                                 className={"my-4"}/>
                                        </div>
                                        <div className={"col-md-9 d-flex flex-column text-start px-2"}>
                                            <span className={"commName text-500 font-size-18"}>Hellena John</span>
                                            <span className={"comm-pos font-size-18"}>Co-founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mx-3 flex-shrink-0">
                                <div className="card-body text-start">
                                    <img src={images.shells} height={25} alt="Sub Logo" className={"my-4"}/>
                                    <p className="card-text mb-4 text-start font-size-24">
                                        A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices
                                        a lacus. Pretium vehicula pretium posuere justo sed.
                                    </p>
                                </div>
                                <div className="card-footer card-footer-spec">
                                    <div className={"d-flex flex-row align-items-center card-footer-spec-area"}>
                                        <div className={"col-md-3"}>
                                            <img src={images.commentator3} height={50} alt="commentator1"
                                                 className={"my-4"}/>
                                        </div>
                                        <div className={"col-md-9 d-flex flex-column text-start px-2"}>
                                            <span className={"commName text-500 font-size-18"}>David Oshodi</span>
                                            <span className={"comm-pos font-size-18"}>Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mx-3 flex-shrink-0">
                                <div className="card-body text-start">
                                    <img src={images.artVenue} height={25} alt="Sub Logo" className={"my-4"}/>
                                    <p className="card-text mb-4 text-start font-size-24">
                                        Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam
                                        laoreet aenean metus nibh eu scelerisque.
                                    </p>
                                </div>
                                <div className="card-footer card-footer-spec">
                                    <div className={"d-flex flex-row align-items-center card-footer-spec-area"}>
                                        <div className={"col-md-3"}>
                                            <img src={images.commentator4} height={50} alt="commentator1"
                                                 className={"my-4"}/>
                                        </div>
                                        <div className={"col-md-9 d-flex flex-column text-start px-2"}>
                                            <span className={"commName text-500 font-size-18"}>Hellen Jummy</span>
                                            <span className={"comm-pos font-size-18"}>Team Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mx-3 flex-shrink-0">
                                <div className="card-body text-start">
                                    <img src={images.wa} height={25} alt="Sub Logo" className={"my-4"}/>
                                    <p className="card-text mb-4 text-start font-size-24">
                                        Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra
                                        turpis lorem. Varius a turpis urna id porttitor.
                                    </p>
                                </div>
                                <div className="card-footer card-footer-spec">
                                    <div className={"d-flex flex-row align-items-center card-footer-spec-area"}>
                                        <div className={"col-md-3"}>
                                            <img src={images.commentator1} height={50} alt="commentator1"
                                                 className={"my-4"}/>
                                        </div>
                                        <div className={"col-md-9 d-flex flex-column text-start px-2"}>
                                            <span className={"commName text-500 font-size-18"}>Hellen Jummy</span>
                                            <span className={"comm-pos font-size-18"}>Team Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mx-3 flex-shrink-0">
                                <div className="card-body text-start">
                                    <img src={images.zoomerLogo} height={25} alt="Sub Logo" className={"my-4"}/>
                                    <p className="card-text mb-4 text-start font-size-24">
                                        Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit
                                        purus venenatis velit semper lectus sed ornare quam nulla.
                                    </p>
                                </div>
                                <div className="card-footer card-footer-spec">
                                    <div className={"d-flex flex-row align-items-center card-footer-spec-area"}>
                                        <div className={"col-md-3"}>
                                            <img src={images.commentator2} height={50} alt="commentator1"
                                                 className={"my-4"}/>
                                        </div>
                                        <div className={"col-md-9 d-flex flex-column text-start px-2"}>
                                            <span className={"commName text-500 font-size-18"}>Hellen Jummy</span>
                                            <span className={"comm-pos font-size-18"}>Team Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mx-3 flex-shrink-0">
                                <div className="card-body text-start position-relative">
                                    <img src={images.zoomerLogo} height={25} alt="Sub Logo" className={"my-4"}/>
                                    <p className="card-text mb-4 text-start font-size-24">
                                        A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices
                                        a lacus. Pretium vehicula pretium posuere justo sed.
                                    </p>
                                </div>
                                <div className="card-footer card-footer-spec">
                                    <div className={"d-flex flex-row align-items-center card-footer-spec-area"}>
                                        <div className={"col-md-3"}>
                                            <img src={images.commentator3} height={50} alt="commentator1"
                                                 className={"my-4"}/>
                                        </div>
                                        <div className={"col-md-9 d-flex flex-column text-start px-2"}>
                                            <span className={"commName text-500 font-size-18"}>Hellen Jummy</span>
                                            <span className={"comm-pos font-size-18"}>Team Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Comments;