import { Carousel } from 'antd';

function CustomerReview() {
  const contentStyle = " h-[400px] !px-6 !py-4 rounded-lg text-gray-800 lg:text-3xl text-xl font-medium  grid place-content-center";
  const nameClass = "text-right text-base text-gray-600"

  return (
    <>
      <div className="text-center !my-10">
        <b className="text-[#E7BE95] font-semibold uppercase tracking-wide">CẢM NHẬN CỦA KHÁCH HÀNG</b>
        <h1 className="text-2xl md:text-3xl my-1 font-serif font-bold leading-tight text-black">
          KHÁCH HÀNG CỦA HOLO NÓI GÌ?
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between lg:!px-30 lg:gap-10 md:!px-10 !pb-10 bg-[#EBE9E6] !py-10">

        <div className="w-full max-w-[600px] aspect-[3/2] rounded shadow-md border-4 border-blue-200 overflow-hidden">
          <div className="bg-[url('/customer/1.webp')] bg-cover bg-center w-full h-full hover:scale-110 transition-all duration-300" />
        </div>

        <div className="w-full md:max-w-[600px] h-[400px]  ">
          <Carousel
            autoplay={{ dotDuration: true }}
            autoplaySpeed={10000}
            dots
          >
            <div className={contentStyle}>
              <p >
                Tôi thật sự bất ngờ với chất lượng dịch vụ tại HOLO. Phòng ốc
                sạch sẽ, tiện nghi hiện đại, đặc biệt nhân viên cực kỳ thân
                thiện và chuyên nghiệp.
              </p>
              <p className={nameClass}> - Nguyễn Văn A -</p>

            </div>

            <div className={contentStyle}>
              <p>
                Ấn tượng từ lúc bước vào sảnh đến khi trả phòng. Mọi chi tiết
                đều được chăm chút kỹ lưỡng. Đáng giá từng đồng!
              </p>
              <p className={nameClass}>- Nguyễn Văn B -</p>

            </div>
            <div className={contentStyle}>
              <p >
                Khách sạn có vị trí thuận tiện, gần trung tâm nhưng vẫn rất
                riêng tư. Dịch vụ phòng nhanh chóng và chu đáo.
              </p>
              <p className={nameClass}> - Nguyễn Văn C - </p>

            </div>

            <div className={contentStyle}>
              <p >
                Không gian yên tĩnh, nội thất tinh tế, rất phù hợp cho một kỳ
                nghỉ thư giãn. Tôi đã có một trải nghiệm tuyệt vời tại đây!
              </p>
              <p className={nameClass}>Nguyễn Văn D</p>

            </div>


          </Carousel>

        </div>
      </div>
    </>
  );
}

export default CustomerReview;
