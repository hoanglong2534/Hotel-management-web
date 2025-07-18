import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import LoginContent from '../components/Login/LoginContent';
import RegisterContent from '../components/Login/RegisterContent';

function Login({ isRegister }) {

  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: <NavLink to="/login">Đăng nhập</NavLink>,
      children: <LoginContent />,
    },
    {
      key: '2',
      label: <NavLink to="/register">Đăng ký</NavLink>,
      children: <RegisterContent/>
    },
  ]

  return (
    <>
      <div className='inset-0 fixed bg-gray-100 h-[100vh] z-10 '></div>
      <div className='md:!px-50 lg:!px-100 sm:!px-30 !px-10 relative !py-30 z-20'>
        <Tabs defaultActiveKey={isRegister ? "2" : "1"} centered items={items} onChange={onChange} className='bg-white min-h-[450px] shadow w-full lg:!px-20 !px-10  rounded-[10px] sm:!px-6 md:!px-10 ' />
      </div>
    </>
  )
}
export default Login