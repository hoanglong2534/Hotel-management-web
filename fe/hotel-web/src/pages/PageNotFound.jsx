import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
    return (
        <>
            <Result
                status="404"
                title={<div className="text-7xl font-bold">404</div>}
                subTitle={<div className="text-2xl">Trang không tồn tại</div>}
                extra={<NavLink to="/"><Button  color="primary" variant="filled">Về trang chủ</Button></NavLink>}
            />
        </>
    )
}
export default PageNotFound