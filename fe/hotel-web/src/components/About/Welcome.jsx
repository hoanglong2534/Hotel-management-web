import { Breadcrumb, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { TiTick } from "react-icons/ti";

function Welcome() {
  return (
    <>
      <div className="!p-25 text-center">
        <div className="text-4xl font-bold">VỀ CHÚNG TÔI</div>
        <Breadcrumb
          items={[
            {
              title: <NavLink to="/">Trang chủ</NavLink>,
            },
            {
              title: "Về chúng tôi",
            },
          ]}
          className="flex justify-center text-base"
        />
      </div>

      <div className="!px-30 !mb-20">
        <Row gutter={[0, 24]}>
          <Col span={24} lg={12} className="lg:!pr-20 text-center">
            <p className="text-4xl">Chào mừng đến với HOLO.</p>
            <p className="text-base text-gray-800 text-lg">
              Khách sạn nằm ngay trung tâm Hà Nội, thuận tiện để khám phá các điểm du lịch nổi tiếng của thành phố. Các phòng nghỉ được thiết kế trang nhã, tạo cảm giác thoải mái và dễ chịu cho du khách.
            </p>
          </Col>

          <Col span={24} lg={12} className="flex justify-center lg:justify-start lg:!pl-50">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex items-center gap-2">
                <TiTick className="text-[26px] text-[#E7BE95]" />
                <p className="text-base text-gray-800 text-lg">Ưu đãi 20% cho dịch vụ lưu trú</p>
              </div>

              <div className="flex items-center gap-2">
                <TiTick className="text-[26px] text-[#E7BE95]" />
                <p className="text-base text-gray-800 text-lg">Bữa sáng miễn phí mỗi ngày</p>
              </div>

              <div className="flex items-center gap-2">
                <TiTick className="text-[26px] text-[#E7BE95]" />
                <p className="text-base text-gray-800 text-lg">Miễn phí 3 món giặt là mỗi ngày</p>
              </div>

              <div className="flex items-center gap-2">
                <TiTick className="text-[26px] text-[#E7BE95]" />
                <p className="text-base text-gray-800 text-lg">Wifi tốc độ cao miễn phí</p>
              </div>

              <div className="flex items-center gap-2">
                <TiTick className="text-[26px] text-[#E7BE95]" />
                <p className="text-base text-gray-800 text-lg">Giảm 20% cho dịch vụ ăn uống (F&B)</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Welcome;
