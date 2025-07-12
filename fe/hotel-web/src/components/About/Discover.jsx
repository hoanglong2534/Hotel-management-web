import { FaPlayCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

function Discover() {

  const imgClass = "relative group bg-[url('/discover/img.jpg')] bg-cover w-full h-[400px] bg-center !my-30 flex text-center"
  const overlayBG = "inset-0 absolute bg-black/70"
  const h1Class = "absolute !text-white text-3xl md:text-4xl lg:text-5xl w-full top-20"
  const playButtonClass = "absolute w-full !text-white text-8xl top-40 group-hover:!text-[#E7BE95] cursor-pointer"

  const overlayPopUp = "inset-0 bg-black/70 fixed z-30 w-full h-full"
  const [open, setOpen] = useState(false);

  var openModel = () => {
    setOpen(true);
  }
  var closeModel = () => {
    setOpen(false);
  }

  if (open) {
    var modal =
      <div className={overlayPopUp}>
        <div className="flex justify-center items-center !pt-20">
          <iframe className="relative " width="1000" height="500" src="https://www.youtube.com/embed/TOIqsHrrXGE?si=xeNDlHOLjWFocmlZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>

          <IoCloseCircle className="absolute top-10 text-4xl !text-white z-40 cursor-pointer hover:!text-[#E7BE95]" onClick={closeModel} />
        </div>
      </div>
  }

  return (
    <>
      <div>
        <div className={imgClass}>
          <div className={overlayBG}></div>
          <h1 className={h1Class}>Khám phá khách sạn và dịch vụ của chúng tôi.</h1>
          <FaPlayCircle className={playButtonClass} onClick={openModel} />
          {modal}
        </div>


      </div>
    </>
  )
}
export default Discover