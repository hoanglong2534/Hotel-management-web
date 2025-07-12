import { Row, Col } from 'antd'

function Gallery() {

  return (
    <>
      <div>
        <div className="text-center !my-10">
          <b className="text-[#E7BE95] font-semibold uppercase tracking-wide">BỘ SƯU TẬP</b>
          <h1 className="text-2xl md:text-3xl my-1 font-serif font-bold leading-tight text-black">
            KHÁM PHÁ SẢN PHẨM CỦA CHÚNG TÔI
          </h1>
        </div>

        <div className='!px-20 md:!px-50 !mb-30'>
          <Row gutter={[20, 20]}>

            <Col span={24} lg={12}>
              <div>
                <Row gutter={[20,20]}>
                  <Col span={24}>
                    <div className={`relative bg-[url('/gallery/1.jpg')] bg-center bg-cover h-[300px] w-full rounded-[10px] hover:scale-104 transition-all duration-200 ` }></div>
                  </Col>
                  <Col span={24} md={12}>
                    <div className="bg-[url('/gallery/2.jpg')] bg-center bg-cover h-[300px] w-full rounded-[10px] hover:scale-104 transition-all duration-200"></div>
                  </Col>
                  <Col span={24} md={12}>
                    <div className="bg-[url('/gallery/3.jpg')] bg-center bg-cover h-[300px] w-full rounded-[10px] hover:scale-104 transition-all duration-200"></div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col span={24} lg={12}>
              <div className="bg-[url('/gallery/4.jpg')] bg-center bg-cover h-[620px] w-full rounded-[10px] hover:scale-104 transition-all duration-200"></div>
            </Col>

          </Row>
        </div>
      </div>
    </>
  )
}
export default Gallery