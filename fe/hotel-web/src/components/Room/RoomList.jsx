import { Card } from 'antd';
import { Pagination } from "antd";
import { Row, Col } from 'antd'
import RoomSummary from '../Home/RoomSummary';

const { Meta } = Card;

var card = <Card
  hoverable
  style={{ width: 370 }}
  cover={<img alt="example" src="/room-summary/deluxe-room.jpg" className='h-[300px] bg-center bg-cover' />}
>
  <Meta title="Phòng Cao cấp" description="www.instagram.com" />
</Card>

function RoomList() {
  return (
    <>
      <div >
        <RoomSummary />
        <RoomSummary />
      </div>
      <Pagination align="center" defaultCurrent={1} total={50} className='!mb-10' />

    </>
  )
}
export default RoomList