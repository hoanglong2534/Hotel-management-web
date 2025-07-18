
 const h1Class="text-2xl text-black !font-bold"
 const pClass = "text-xl"

function Content() {
	return (
		<>
			<div className="md:!px-50 !px-20 !mb-20">
				<p className={pClass}>
					Khi quý khách đặt phòng trực tuyến qua điện thoại hoặc email , quý khách nên đọc kỹ và chấp nhận điều kiện đặt phòng của chúng tôi. Các điều khoản và điều kiện có thể thay đổi bất cứ lúc nào , và quý khách có trách nhiệm kiểm tra các điều khoản và điều kiện thường xuyên trong trường hợp có bất kỳ thay đổi nào . Xin vui lòng đọc các điều khoản dưới đây của chúng tôi một cách kỹ lưỡng:
				</p>

				<div>
					<h1 className={h1Class}>1. Đặt phòng :</h1>

					<p className={pClass}>	Tất cả các dịch vụ cần được đặt thông qua trụ sở chính của chúng tôi ở Hà Nội theo địa chỉ liên lạc và số điện thoại / fax dưới đây :</p>
					<p className={pClass}>	KHÁCH SẠN HOLO</p>
					<p className={pClass}>	Địa chỉ: 68 Tràng Thi, Quận Hoàn Kiếm, Hà Nội , Việt Nam </p>
					<p className={pClass}>	Website : www.holohotel.com</p>
					<p className={pClass}>	Hòm thư: iinfo@holohotel.vn</p>
					<p className={pClass}>Điện Thoại : (+84) 912 345 678</p>
				</div>

				<div>
					<h1 className={h1Class}>2. Xác nhận thông tin đặt phòng :</h1>

					<p className={pClass}>	Sau khi nhận được yêu cầu của quý khách , nhân viên của khách sạn HOLO sẽ kiểm tra và thông báo cho quý khách sớm nhất có thể.</p>

				</div>

				<div>
					<h1 className={h1Class}>3 . Hóa đơn thanh toán:</h1>

					<p className={pClass}>Hóa đơn thanh toán sẽ được cấp cho quý khách sau khi chúng tôi nhận được xác nhận cuối cùng của quý khách .</p>
				</div>


				<div>
					<h1 className={h1Class}>4 . Đảm bảo:</h1>

					<p className={pClass}>Trong một số trường hợp , để giữ phòng cho quý khách , khách sạn của chúng tôi sẽ yêu cầu các chi tiết thẻ tín dụng hoặc bảo lãnh. Chúng tôi sẽ gửi cho quý khách một biên bản thông báo ủy quyền thẻ tín dụng . Để xác nhận bảo lãnh , quý khách sẽ phải điền đầy đủ  các thông tin cần thiết và gửi lại cho chúng tôi bằng fax hoặc email .</p>
				</div>

				<div>
					<h1 className={h1Class}>5 . Tiền đặt cọc:</h1>

					<p className={pClass}>Quý khách phải đặt cọc tối thiểu 25% ( phụ thuộc vào mỗi đặt phòng ) cho chúng tôi. Tiền đặt cọc này có thể chuyển vào tài khoản ngân hàng của khách sạn chúng tôi dưới đây . Và phần còn lại của số tiền có thể được thanh toán khi khách hàng đến Hà Nội bằng tiền mặt hoặc các loại thẻ tín dụng như Visa, Master , American Express ….</p>
				</div>


				<div>
					<h1 className={h1Class}>6 . Hình thức thanh toán :</h1>

					<p className={pClass}>Thanh toán có thể được thực hiện bằng cách chuyển tiền vào tài khoản ngân hàng của chúng tôi. Khách sạn sẽ chịu các chi phí dịch vụ ngân hàng.</p>
					<p className={pClass}>Tên của người thụ hưởng: thông báo khi trả tiền .</p>
					<p className={pClass}>Địa chỉ cá nhân của người thụ hưởng : thông báo khi trả tiền .</p>
					<p className={pClass}>Tên của Ngân hàng thụ hưởng: Vietcombank Hà Nội ( NGÂN HÀNG NGOẠI THƯƠNG VIỆT NAM – CHI NHÁNH HÀ NỘI )</p>
					<p className={pClass}>Địa chỉ của Ngân hàng thụ hưởng: 123 abc, Quận xya , Hà Nội , Việt Nam .</p>
					<p className={pClass}>Số tài khoản người hưởng: 1234565678</p>
				</div>


			</div>
		</>
	)
}

export default Content