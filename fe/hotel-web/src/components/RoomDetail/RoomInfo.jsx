
import { Rate, Button } from 'antd';
import Review from '../RoomDetail/Review';

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

                <Review/>
               
            </div>
        </>
    )
}