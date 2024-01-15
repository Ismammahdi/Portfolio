import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import img from "../../src/assets/keen-_1.avif"
import img2 from "../assets/keen_2.avif"
import img3 from "../assets/keen_3.avif"
import img4 from "../assets/keen_4.avif"
import img5 from "../assets/keen5.avif"
import img6 from "../assets/keen6.avif"

const carousel = (slider) => {
    const z = 300
    function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
    })
    slider.on("detailsChanged", rotate)
  }

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )
    
      return (
        <div className="wrapper mt-[10%]">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1 ">
                <img className="w-full object-cover h-[100%]" src={img} alt="" />
              </div>
              <div className="carousel__cell number-slide2">
                <img className="w-fit object-cover h-[100%] " src={img2} alt="nai" />
              </div>
              <div className="carousel__cell number-slide3">
              <img className="w-fit object-cover h-[100%] " src={img3} alt="nai" />
              </div>
              <div className="carousel__cell number-slide4">
              <img className="w-fit object-cover h-[100%] " src={img4} alt="nai" />
              </div>
              <div className="carousel__cell number-slide5">
              <img className="w-fit object-cover h-[100%] " src={img5} alt="nai" />
              </div>
              <div className="carousel__cell number-slide6">
              <img className="w-fit object-cover h-[100%] " src={img6} alt="nai" />
              </div>
            </div>
          </div>
        </div>
      )
};

export default Banner;