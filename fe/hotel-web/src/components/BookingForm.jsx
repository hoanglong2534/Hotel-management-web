
import { Button, Form, DatePicker, Select } from 'antd';
import { NavLink } from 'react-router-dom';

const { RangePicker } = DatePicker;
function BookingForm() {

  const [form] = Form.useForm();
  const numberAdults = ['1 người', '2 người', '3 người', '4 người', '5 người']
  const numberRooms = ['1 phòng', '2 phòng', '3 phòng', '4 phòng', '5 phòng']
  return (
    <>
      <div >
        <Form
          layout='vertical'
          form={form}
          style={{ maxWidth: 'vertical' === 'inline' ? 'none' : 350 }}
          className='border rounded-sm border-[#E7BE95] !px-4 !py-8 '
        >
          <h1 className="w-full text-center text-4xl ">ĐẶT PHÒNG</h1>
          <Form.Item label="Ngày nhận phòng và trả phòng:">
            <RangePicker size='middle' className='w-full'></RangePicker>
          </Form.Item>

          <div className="flex flex-col">
            <Form.Item label="Số lượng người lớn:">
              <Select
                className='w-full'
                defaultValue={numberAdults[0]}
            
                options={numberAdults.map(number => ({ label: number, value: number }))}
              />
            </Form.Item>
            <Form.Item label="Số phòng:">
              <Select
                className='w-full'
                defaultValue={numberRooms[0]}
                options={numberRooms.map(number => ({ label: number, value: number }))}
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" block className="!bg-[#E7BE95] !text-black hover:!bg-black hover:!text-[#E7BE95]">
              <NavLink to="/booking" className="font-bold  ">Đặt phòng</NavLink>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
export default BookingForm