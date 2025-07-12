import { Rate, Button} from 'antd';
import { NavLink } from 'react-router-dom';

function Review() {
	return (
		<>
			{/* reviews */}
			<div className='border-b border-gray-200 !pb-10 !mb-10'>
				<h1 className='text-2xl !mb-2'>Đánh giá</h1>

				<div className='!mb-10'>
					<div className='border rounded-[10px] border-gray-200 !p-2 !mb-2'>
						<div className='flex justify-between'>
							<div className='!text-[#E7BE95] font-semibold'>02-07-2025</div>
							<Rate disabled defaultValue={3} />
						</div>

						<b>Nguyễn Văn A</b>
						<p>Không gian rất thoáng mát</p>
					</div>

					<div className='border rounded-[10px] border-black/10 !p-2'>
						<div className='flex justify-between'>
							<div className='!text-[#E7BE95] font-semibold'>03-07-2025</div>
							<Rate disabled defaultValue={3} />
						</div>

						<b>Nguyễn Thị B</b>
						<p>View nhìn ra biển đẹp tuyệt, rất đáng quay lại</p>
					</div>
				</div>
			</div>

			{/*add reviews */}
			<h1 className='text-2xl !mb-2'>Thêm Đánh giá</h1>
			<div className='flex flex-col md:flex-row w-full justify-between'>
				<div>
					<label>Nhập tên của bạn:</label>
					<input type="text" placeholder='Nhập tên' className='h-10 w-full !border !border-gray-300 !px-2 ' />
				</div>

				<div>
					<label>Nhập email của bạn:</label>
					<input type="text" placeholder='Nhập email' className='h-10 w-full !border !border-gray-300 !px-2 ' />
				</div>

			</div>
			{/* add rating and cmt */}
			<div className='flex items-center gap-10 !my-5'>
				<label>Chọn số sao</label>
				<Rate defaultValue={3} />
			</div>
			<div>
				<label>Nhập nội dung bình luận</label>
				<textarea type="text" className='w-full h-20 !border-1 !border-gray-300 !pl-2' placeholder='Nhập nội dung bình luận' />
			</div>

			<Button type="primary" className="!bg-[#E7BE95] !text-black hover:!bg-black hover:!text-[#E7BE95] !my-10  ">
				<NavLink to="/" className="font-bold  ">Gửi đánh giá</NavLink>
			</Button>
		</>
	)
}
export default Review