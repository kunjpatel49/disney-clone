import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Overlay from 'react-image-overlay';import { ImageOverlay } from 'react-image-overlay-effect';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <ImageOverlay
                    src="/images/Black Widow.jfif"
                    description={<img src={"/images/Black Widow_title.png"} alt={""}/>} />
            </Wrap>
            <Wrap>
                <ImageOverlay
                    src="/images/Jungle Cruise.jfif"
                    description={<img src={"/images/Jungle Cruise_title.png"} alt={""}/>} />
            </Wrap>
            <Wrap>
                <ImageOverlay
                    src="/images/Monsters at work.jfif"
                    description={<img src={"/images/Monsters at work_title.png"} style={{width:430, height:242, left: 0}} alt={""}/>} />
            </Wrap>
            <Wrap>
                <ImageOverlay
                    src="/images/Bad Batch.jfif"
                    description={<img src={"/images/Bad Batch_title.png"} style={{width:430, height:242}} alt={""}/>} />
            </Wrap>
            <Wrap>
                <ImageOverlay
                    src="/images/Spiderman and amazing friends.jfif"
                    description={<img src={"/images/Spiderman and amazing friends_title.png"} alt={""}/>}
                />
            </Wrap>
            <Wrap>
                <ImageOverlay
                    src="/images/Stuntman.jfif"
                    description={<img src={"/images/Stuntman_title.png"} alt={""}/>} />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }


`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
      

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);

        }

    }
    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }
  
`
