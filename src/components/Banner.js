import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerImg from '../assets/img/IMG_2933.JPG'
import './Banner.css'


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "mucho limón", "más tomate", "pollo" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

   return(
        <>


                    <div className="banner">
                        <h1 id="h1"> {`Se me antoja una ensalada con `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "mucho limón", "más tomate", "pollo" ]'><span className="wrap">{text}</span></span> </h1>
                    </div>
                    <div className="banner-back">

                    </div>

        </>
    )
}