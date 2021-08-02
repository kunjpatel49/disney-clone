import React from 'react'
import styled from 'styled-components'

function Viewers() {
    function handleOnMouseOver(e) {
        e.currentTarget.play();
    }

    function handleOnMouseOut(e) {
        e.currentTarget.pause();
    }

    return (
        <Container>
            <Wrap>
                <div className="border" />
                <img src={"/images/viewers-disney.png"}  alt={""}/>
                <video
                    loop
                    preload='none'
                    muted // Needs to be there to be able to play
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                >
                    <source src={"https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4"} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <div className="border" />
                <img src={"/images/viewers-pixar.png"}  alt={""}/>
                <video
                    loop
                    preload='none'
                    muted // Needs to be there to be able to play
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                >
                    <source src={"https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4"} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <div className="border" />
                <img src={"/images/viewers-marvel.png"} alt='logo' />
                <video
                    loop
                    preload='none'
                    muted // Needs to be there to be able to play
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                >
                    <source src={"https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4"} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <div className="border" />
                <img src={"/images/viewers-starwars.png"}  alt={""}/>
                <video
                    loop
                    preload='none'
                    muted // Needs to be there to be able to play
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                >
                    <source src={"https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229455-star-wars.mp4"} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <div className="border" />
                <img src={"/images/viewers-national.png"}  alt={""}/>
                <video
                    loop
                    preload='none'
                    muted // Needs to be there to be able to play
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                >
                    <source src={"https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4"} type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

`

const Wrap = styled.div`
  --border-radius: 0.7rem;
  --transition-time: 0.3s;
  position: relative;
  padding-top: 56.25%;
  background: linear-gradient(0deg, #1e1f2a 0%, #2f313d 67%);
  box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 16px 17px -5px #000000;
  cursor: pointer;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);
  :hover {
    transform: scale(1.05);
    .border {
      border: 3px solid rgba(255, 255, 255, 0.7);
    }
    video {
      opacity: 100;
    }
  }
  .border {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #42444f;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    background-clip: border-box;
    z-index: 10;
    transition: all var(--transition-time);
    pointer-events: none;
  }
  img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none;
  }
  video {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    border-radius: var(--border-radius);
  }
`



