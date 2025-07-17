import { Row, Col, Button } from 'antd'

function RegisterContent() {
    return (
        <>
            <div>
                <div >
                    <div><label className="font-bold">Họ và tên</label></div>
                    <input type="text" placeholder="Họ và tên" className="!border !border-gray-300 w-full h-10 rounded !p-2" />
                </div>
                <Row gutter={[20, 20]}>
                    <Col span={12} >
                        <div className="!mt-1">
                            <div><label className="font-bold">Email</label></div>
                            <input type="text" placeholder="Email" className="!border !border-gray-300 w-full h-10 rounded !p-2" />
                        </div>

                    </Col>
                    <Col span={12}>
                        <div className="!mt-1">
                            <div><label className="font-bold">Địa chỉ</label></div>
                            <input type="text" placeholder="Địa chỉ" className="!border !border-gray-300 w-full h-10 rounded !p-2" />
                        </div>
                    </Col>
                </Row>
                <div className="!mt-1">
                    <div><label className="font-bold">Tên đăng nhập</label></div>
                    <input type="text" placeholder="Tên đăng nhập" className="!border !border-gray-300 w-full h-10 rounded !p-2" />
                </div>
                <div className="!mt-1">
                    <div><label className="font-bold">Mật khẩu</label></div>
                    <input type="password" placeholder="Mật khẩu" className="!border !border-gray-300 w-full h-10 rounded !p-2" />
                </div>
                <div className="!mt-5">
                    <Button type="primary" block size='large'>
                        Đăng ký 
                    </Button>
                </div>
            </div>
        </>
    )
}
export default RegisterContent