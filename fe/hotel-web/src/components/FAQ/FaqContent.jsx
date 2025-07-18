
import { Collapse, Col, Row} from 'antd';


const collapseClass = 'text-center flex-1 [&_.ant-collapse-item]:hover:!bg-[#E7BE95] [&_.ant-collapse-header]:hover:text-white [&_.ant-collapse-item-active_.ant-collapse-header]:!bg-[#E7BE95] [&_.ant-collapse-item-active_.ant-collapse-header]:font-bold [&_.ant-collapse-content-box]:!bg-orange-50 transiton-all duration-300 '


const item1 = [
  {
    key: '1',
    label: <p>Khách sạn có phục vụ bữa sáng miễn phí không?</p>,
    children: <p>Có, chúng tôi phục vụ bữa sáng miễn phí hàng ngày cho tất cả khách lưu trú tại nhà hàng tầng trệt từ 6:30 đến 9:30 sáng.</p>,
  },
  {
    key: '2',
    label: <p>Tôi có thể hủy phòng miễn phí trước bao lâu?</p>,
    children: <p>Bạn có thể hủy phòng miễn phí trước 48 giờ so với giờ nhận phòng. Sau thời gian này, phí hủy sẽ được áp dụng.</p>,
  },
  {
    key: '3',
    label: <p>Khách sạn có chỗ đậu xe không? Có tính phí không?</p>,
    children: <p>Chúng tôi có bãi đậu xe miễn phí cho khách lưu trú, không cần đặt chỗ trước.</p>,
  },
    {
    key: '4',
    label: <p >Trẻ em có được ở cùng phòng miễn phí không?</p>,
    children: <p>Trẻ em dưới 6 tuổi được ở miễn phí cùng bố mẹ nếu không cần giường phụ.</p>,
  },
  {
    key: '5',
    label: <p >Có cần đặt cọc khi nhận phòng không?</p>,
    children: <p>Có, quý khách cần đặt cọc tiền mặt hoặc thẻ tín dụng để đảm bảo các chi phí phát sinh trong thời gian lưu trú..</p>,
  },
  {
    key: '6',
    label: <p >Khách sạn có hồ bơi / phòng gym không?</p>,
    children: <p>Khách sạn có hồ bơi ngoài trời và phòng gym miễn phí cho khách lưu trú.</p>,
  },
];

const item2 = [
  {
    key: '1',
    label: <p>Tôi có thể nhận phòng sớm hoặc trả phòng trễ không?</p>,
    children: <p>Bạn có thể yêu cầu nhận phòng sớm hoặc trả phòng trễ tùy theo tình trạng phòng. Vui lòng liên hệ trước với lễ tân để được hỗ trợ.</p>,
  },
  {
    key: '2',
    label: <p>Khách sạn có dịch vụ đưa đón sân bay không?</p>,
    children: <p>Có, chúng tôi cung cấp dịch vụ đưa đón sân bay với mức phí hợp lý. Vui lòng liên hệ đặt trước ít nhất 24 giờ.</p>,
  },
  {
    key: '3',
    label: <p>Có quy định về việc mang theo thú cưng không?</p>,
    children: <p>Rất tiếc, khách sạn không nhận thú cưng để đảm bảo vệ sinh và an toàn cho khách khác.</p>,
  },
  {
    key: '4',
    label:  <p>Có dịch vụ giặt ủi tại khách sạn không?</p>,
    children: <p>Có, khách sạn có dịch vụ giặt ủi nhanh chóng, lấy trong ngày. Vui lòng liên hệ lễ tân để sử dụng dịch vụ.</p>  
  },
  {
    key: '5',
    label:  <p>Có hỗ trợ thuê xe hoặc tour du lịch tại khách sạn không?</p>,
    children: <p>Có, chúng tôi có dịch vụ hỗ trợ đặt xe và các tour du lịch địa phương.</p>,
  },
  {
    key: '6',
    label:  <p>Chính sách hoàn tiền khi hủy phòng như thế nào?</p>,
    children: <p>Chúng tôi hoàn tiền 100% nếu hủy trước 48 giờ. Nếu sau thời gian này, phí hủy sẽ là 50% hoặc toàn bộ tiền phòng tùy thời điểm hủy.</p>,
  },
];


function FaqContent() {
  return (
    <>
      <div className='!px-30 !py-30 '>
        <Row gutter={[20,20]} className="items-stretch">
          <Col span={24} md={12} className="flex flex-col h-full group">
            <Collapse accordion items={item1}  className={collapseClass}  defaultActiveKey={['1']}  />
          </Col>

          <Col  span={24} md={12} className="flex flex-col h-full group">
            <Collapse accordion items={item2}  className={collapseClass}  defaultActiveKey={['1']} />
          </Col>
        </Row>
      </div>
    </>
  )
}
export default FaqContent