import { Button } from "antd"
import { NavLink } from "react-router-dom"
function ClientInfo() {
  return (
    <>
      <div>
        <div className="!my-5">
          <label>Nhập tên của bạn:</label>
          <input type="text" placeholder='Nhập tên' className='h-10 w-full !border !border-gray-300 !px-2 ' />
        </div>

        <div className="!my-5">
          <label>Nhập email của bạn:</label>
          <input type="text" placeholder='Nhập email' className='h-10 w-full !border !border-gray-300 !px-2 ' />
        </div>

        <div>
          <label>Nhập nội dung bình luận</label>
          <textarea type="text" className='w-full h-20 !border-1 !border-gray-300 !pl-2' placeholder='Nhập nội dung bình luận' />
        </div>

        <Button type="primary" block className="!bg-[#E7BE95] !text-black hover:!bg-black hover:!text-[#E7BE95] !my-10  ">
          <NavLink to="/" className="font-bold  ">Gửi</NavLink>
        </Button>

      </div>
    </>
  )
}
export default ClientInfo