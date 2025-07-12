
import { Rate, Button } from 'antd';
import { NavLink } from 'react-router-dom';

export function RoomInfo() {

    return (
        <>
            <div>
                {/* info */}
                <div className='border-b border-gray-200 !pb-10 !mb-10'>
                    <div className="bg-[url('/room-summary/family-room.jpg')] bg-center bg-cover w-full h-[450px]"></div>
                    <div className='flex justify-between items-center !mb-5'>
                        <div>
                            <h1 className='text-3xl !m-0'>Phòng cao cấp</h1>
                            <div className='text-xl'><span className='!text-[#E7BE95]  font-bold text-3xl !m-0'>2M</span>/Đêm</div>
                        </div>
                        <div>
                            <Rate disabled defaultValue={3} />
                        </div>
                    </div>

                    <div className="flex gap-10 text-base !mb-5">
                        <div>
                            <div className='!mb-2'>Diện tích:</div>
                            <div className='!mb-2'>Sức chứa tối đa:</div>
                            <div className='!mb-2'>Dịch vụ:</div>
                        </div>

                        <div className='font-semibold'>
                            <div className='!mb-2'>30 m²</div>
                            <div className='!mb-2'>5 người</div>
                            <div className='!mb-2'>TV, Điều hòa, Giặt ủi,...</div>
                        </div>
                    </div>

                    <div className='text-base'> Phòng Cao Cấp Giường King mang đến không gian rộng rãi và tiện nghi, lý tưởng cho gia đình hoặc nhóm bạn lên đến 5 người. Với diện tích 30m², phòng được trang bị giường King cỡ lớn, nội thất hiện đại, và các tiện ích như wifi tốc độ cao, tivi, và phòng tắm riêng đầy đủ tiện nghi. Đây là lựa chọn hoàn hảo để nghỉ dưỡng và tận hưởng kỳ nghỉ thoải mái, sang trọng.</div>
                </div>

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
            </div>
        </>
    )
}