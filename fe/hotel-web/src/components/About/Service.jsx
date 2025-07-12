import { Row, Col } from "antd"

const img1 = "bg-[url('/ab-img/1.avif')]"
const img2 = "bg-[url('/ab-img/2.jpg')]"
const img3 = "bg-[url('/ab-img/3.jpg')]"
const imgClass = "relative bg-cover bg-center h-[500px] rounded-[10px] group"
const titleClass = "absolute !text-red-100 group-hover:top-100 text-2xl w-full !pl-5 hidden group-hover:block transition-all duration-200"
const overlayBG = "absolute inset-0 !bg-black/20 group-hover:!bg-black/50 transition-all duration-200"


function Service() {
  return (
    <>

      <Row className='md:!px-40 !mb-10 gap-10' >
        <Col span={24} lg={7} >
          <div className={`${img1} ${imgClass} `}>
            <div className={overlayBG}></div>
            <h1 className={titleClass}>Dịch vụ nhà hàng</h1>
          </div>
        </Col>

        <Col span={24} lg={7} >
          <div className={`${img2} ${imgClass} `}>
            <div className={overlayBG}></div>
            <h1 className={titleClass}>Du lịch và cắm trại</h1>
          </div>
        </Col>

        <Col span={24} lg={7} >
          <div className={`${img3} ${imgClass} `}>
            <div className={overlayBG}></div>
            <h1 className={titleClass}>Sự kiện</h1>
          </div>
        </Col>
      </Row>

    </>
  )
}
export default Service