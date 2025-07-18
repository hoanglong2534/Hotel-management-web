const h1Class = "text-2xl text-black !font-bold"
const pClass = "text-xl"


function Content() {
  return (
    <>
      <div className="md:!px-50 !px-20 !mb-20">
        <div>
          <h1 className={h1Class}>1. Chính Sách Đặt Phòng</h1>
          <p className={pClass}>Chúng tôi khuyến khích khách hàng đặt phòng qua các kênh chính thức như:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}>Website chính thức của khách sạn.</li>
            <li className={pClass}>Hotline hoặc email liên hệ trực tiếp.</li>
            <li className={pClass}>Các đối tác đại lý uy tín được khách sạn ủy quyền.</li>
          </ul>
          <p className={pClass}>Khi đặt phòng, khách hàng cần cung cấp thông tin cá nhân đầy đủ như họ tên, số điện thoại, email liên hệ, ngày nhận phòng, ngày trả phòng và các yêu cầu đặc biệt (nếu có).</p>
          <p className={pClass}>Một số chương trình khuyến mãi hoặc dịp cao điểm có thể yêu cầu khách hàng thanh toán trước hoặc đặt cọc để giữ phòng. Trong trường hợp này, nhân viên khách sạn sẽ thông báo cụ thể khi xác nhận đơn đặt phòng.</p>
        </div>

        <div>
          <h1 className={h1Class}>2. Chính Sách Hủy Phòng & Hoàn Tiền</h1>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}><span className="font-bold">Hủy miễn phí</span>: Nếu khách hàng thông báo hủy phòng trước ít nhất <b>48 giờ</b> so với giờ nhận phòng.</li>
            <li className={pClass}><span className="font-bold">Hủy trong vòng 48 giờ</span>: Khách sạn sẽ thu phí hủy tương đương <b>50%</b> tổng giá trị đặt phòng.</li>
            <li className={pClass}><span childrenlassName="font-bold">Không đến nhận phòng</span>: Trường hợp khách không đến mà không báo hủy, khách sạn có quyền thu <b>100%</b> tổng giá trị đặt phòng.</li>
          </ul>
          <p className={pClass}>Đối với các đơn đặt phòng đã thanh toán trước, khách sạn sẽ hoàn tiền theo phương thức thanh toán ban đầu. Thời gian hoàn tiền dao động <b>từ 7 - 14 ngày làm việc</b> tùy theo ngân hàng và cổng thanh toán.</p>
        </div>

        <div>
          <h1 className={h1Class}>3. Chính Sách Nhận Phòng & Trả Phòng</h1>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}><span className="font-bold">Giờ nhận phòng</span>: Từ <b>14:00</b> chiều mỗi ngày.</li>
            <li className={pClass}><span className="font-bold">Giờ trả phòng</span>: Trước <b>12:00</b> trưa ngày trả phòng.</li>
          </ul>
          <b>Nhận phòng sớm / trả phòng trễ:</b>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}>Nhận phòng trước 10:00 sáng hoặc trả phòng sau 18:00 sẽ bị tính phí như 1 đêm lưu trú.</li>
            <li className={pClass}>Trả phòng trễ từ 12:00 đến 15:00: phụ thu 30% giá phòng.</li>
            <li className={pClass}>Trả phòng trễ từ 15:00 đến 18:00: phụ thu 50% giá phòng.</li>
          </ul>
          <p className={pClass}>Khách sạn luôn cố gắng hỗ trợ khách hàng nhận phòng sớm hoặc trả phòng muộn tùy theo tình trạng phòng thực tế
          </p>
        </div>

        <div>
          <h1 className={h1Class}>4. Chính Sách Dành Cho Trẻ Em & Giường Phụ</h1>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}>Trẻ em <b>dưới 6 tuổi</b> được miễn phí lưu trú khi ngủ chung giường với bố mẹ.</li>
            <li className={pClass}>Trẻ <b>từ 6 - 11 tuổi</b> có thể bị tính phí phụ thu ăn sáng.</li>
            <li className={pClass}>Trẻ em <b>từ 12 tuổi trở lên</b> được tính như người lớn và cần kê thêm giường phụ nếu yêu cầu.</li>
          </ul>
          <p className={pClass}><b>Phí giường phụ:</b> Áp dụng mức giá riêng tùy từng loại phòng và thời điểm lưu trú.</p>

          <p className={pClass}>Khách sạn không cung cấp nôi trẻ em, vì vậy quý khách vui lòng chủ động trong việc chăm sóc trẻ nhỏ trong thời gian lưu trú.
          </p>
        </div>

        <div>
          <h1 className={h1Class}>5. Chính Sách Vật Nuôi</h1>
          <p className={pClass}>Khách sạn <b>không cho phép vật nuôi</b> vào khuôn viên nhằm đảm bảo sự sạch sẽ, an toàn và tránh gây dị ứng hoặc phiền toái cho các khách hàng khác.
          </p>
        </div>

        <div>
          <h1 className={h1Class}>6. Chính Sách Sử Dụng Tiện Ích & Dịch Vụ</h1>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}><b>Hồ bơi, phòng gym</b>: Miễn phí cho khách lưu trú, hoạt động từ 6:00 đến 20:00 hàng ngày.</li>
            <li className={pClass}><b>Wifi</b>: Miễn phí toàn bộ khách sạn với tốc độ cao.</li>
            <li className={pClass}><b>Dịch vụ giặt ủi</b>: Có thu phí, nhận đồ trước 10:00 sáng để được trả trong ngày.</li>
            <li className={pClass}><b>Dịch vụ đưa đón sân bay</b>: Có tính phí, cần đặt trước ít nhất 24 giờ.</li>
          </ul>
          <p className={pClass}>Khách hàng vui lòng tuân thủ nội quy sử dụng dịch vụ, không gây ồn ào, mất trật tự hoặc làm ảnh hưởng đến các khách khác.</p>
        </div>

        <div>
          <h1 className={h1Class}>7. Chính Sách Thanh Toán</h1>
          <p className={pClass}>Chúng tôi chấp nhận các phương thức thanh toán sau:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}>Tiền mặt (VND).</li>
            <li className={pClass}>Thẻ tín dụng/ghi nợ quốc tế như Visa, Mastercard.</li>
            <li className={pClass}>Chuyển khoản ngân hàng.</li>
          </ul>
          <p className={pClass}>Tất cả các khoản thanh toán sẽ được xuất hóa đơn theo yêu cầu của khách hàng. Với các đơn hàng chuyển khoản hoặc thanh toán online, khách cần lưu lại biên lai hoặc bằng chứng thanh toán.</p>
          <p className={pClass}>Khách sạn có quyền yêu cầu đặt cọc hoặc giữ lại một khoản tín dụng trên thẻ của khách để đảm bảo các chi phí phát sinh trong thời gian lưu trú.</p>
        </div>

        <div>
          <h1 className={h1Class}>8. Chính Sách Bảo Mật Thông Tin Khách Hàng</h1>
          <p className={pClass}>Thông tin cá nhân của quý khách sẽ được bảo mật tuyệt đối và chỉ sử dụng cho các mục đích:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}>Quản lý lưu trú và chăm sóc khách hàng.</li>
            <li className={pClass}>Thông báo các chương trình khuyến mãi, ưu đãi đặc biệt.</li>
            <li className={pClass}>Hỗ trợ khách hàng khi có sự cố liên quan đến dịch vụ.</li>
          </ul>
          <p className={pClass}>Khách hàng có quyền yêu cầu chỉnh sửa hoặc xóa thông tin cá nhân bất kỳ lúc nào bằng cách liên hệ trực tiếp với chúng tôi.</p>
        </div>

        <div>
          <h1 className={h1Class}>9. Quy Định Chung & Điều Khoản Khác</h1>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className={pClass}>Khách sạn không cho phép các hành vi gây rối, vi phạm pháp luật hoặc làm ảnh hưởng đến an ninh trật tự.</li>
            <li className={pClass}>Không hút thuốc tại các khu vực cấm; khách vi phạm có thể bị phạt theo quy định.</li>
            <li className={pClass}>Mọi thiệt hại do khách hàng gây ra đối với tài sản của khách sạn sẽ phải bồi thường toàn bộ giá trị thiệt hại.</li>
            <li className={pClass}>Trong trường hợp thiên tai, dịch bệnh, hoặc các sự kiện bất khả kháng, khách sạn có quyền thay đổi hoặc hủy đặt phòng và sẽ thông báo cho khách hàng trong thời gian sớm nhất.</li>
          </ul>

        </div>
      </div>
    </>
  )
}
export default Content