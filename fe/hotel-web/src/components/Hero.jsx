import { Carousel } from 'antd';
import { Button } from 'antd';
import BookingForm from './BookingForm';

const bgList = [
  "bg-[url('/hero/hero1.jpg')]",
  "bg-[url('/hero/hero2.jpg')]",
  "bg-[url('/hero/hero3.jpg')]",
  "bg-[url('/hero/hero4.jpg')]",
];

const baseStyle = "h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-700";

function Hero() {

  return (
    <div className="relative h-screen w-full overflow-hidden ">

      <Carousel
        autoplay
        autoplaySpeed={4000}
        effect="fade"
        dots={false}
        className="h-screen"
      >
        {bgList.map((bg, idx) => (
          <div key={idx}>
            <div className={`${baseStyle} ${bg}`}></div>
          </div>
        ))}
      </Carousel>

      {/* tối nền */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className='flex z-20 inset-0 absolute justify-center gap-10 items-center w-full h-full md:!px-10 flex-col lg:flex-row !px-4'>
        <div>
          <h1 className="text-2xl md:text-5xl lg:text-7xl  font-serif font-bold leading-tight text-white drop-shadow-lg">
            HOLO - Khách sạn sang trọng
          </h1>
          <p className="mt-6 text-lg md:text-xl text-sm drop-shadow text-white font-light">
            Đặt phòng khách sạn dễ dàng, giá tốt, dịch vụ chuyên nghiệp và tiện nghi hiện đại.
          </p>
          <Button
            size=" small sm:medium md:large"
            className= "px-8 py-2 bg-white font-semibold hover:!text-[#E7BE95] transition"
          >
            ĐẶT PHÒNG NGAY
          </Button>
        </div>

        <div className='hidden lg:block'>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
export default Hero;