import { Row, Col } from 'antd'
import Search from '../NewsDetail/Search';
import Review from '../RoomDetail/Review';
import LastestContent from '../NewsDetail/LastestContent';

function Content() {
  return (
    <>
      <div className='!px-40'>  
        <Row gutter={[20, 20]}>
          {/* col 1 */}
          <Col span={24} lg={17}>
            <div className="bg-[url('/news-summary/1.jpg')] bg-center bg-cover w-full h-[500px] rounded-[10px]"></div>

            <div className='border-b border-gray-300 !my-10 !pb-5'>
              <h1 className="text-3xl">Trải nghiệm đỉnh cao ẩm thực vi cá - bào ngư</h1>
              <p className='text-base'>Không gian sang trọng, phòng VIP riêng biệt, thực đơn phong phú với nguyên liệu tuyển chọn nhập khẩu, Holo là điểm đến yêu thích của giới doanh nhân và thực khách sành ăn. Đặc biệt, nhà hàng còn có dịch vụ giao món tận nơi, đóng gói kỹ lưỡng, phù hợp làm quà biếu cao cấp hoặc dùng ngay tại văn phòng.<br></br> <br></br>

                Holo là sự giao thoa tinh hoa ẩm thực giữa các nền văn hóa phong phú Singapore, Triều Châu và Thái Lan. Với vị cay nồng của Singapore, đậm đà của Triều Châu và chua cay của Thái Lan. Kim chỉ nam của Holo luôn hướng đến chính là những món ngon phong phú, đậm đà mà vẫn mang đến lợi ích sức khỏe cho thực khách.<br /> <br />

                Với xu hướng quan tâm đến sức khỏe như hiện nay, Holo là lựa chọn phù hợp với thực đơn hơn 50 món ngon đa dạng và phong phú.</p>
            </div>

            <Review />
          </Col>

          {/* col 2 */}
          <Col span={24} lg={7}>
            <Search />
            <LastestContent />

          </Col>

        </Row>
      </div>
    </>
  )
}
export default Content