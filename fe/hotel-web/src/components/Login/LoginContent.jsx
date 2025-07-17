import { Button, Divider } from "antd"
import { NavLink } from "react-router-dom"

function LoginContent() {
  return (
    <>
      <div>
        <div className="!mt-5">
          <div><label className="font-bold">Tên đăng nhập</label></div>
          <input type="text" placeholder="Tên đăng nhập" className="!border !border-gray-300 w-full h-10 rounded !p-2" />
        </div>

        <div className="!mt-5">
          <div><label className="font-bold">Mật khẩu</label></div>
          <input type="password" placeholder="Tên đăng nhập" className="!border !border-gray-300 w-full h-10 rounded !p-2" />
        </div>

        <div className="!mt-5">
          <Button type="primary" block size='large'>
            Đăng nhập
          </Button>
        </div>

        <div >
          <NavLink to="/"><p >Quên mật khẩu</p></NavLink>
        </div>
        <Divider variant="dotted" style={{ borderColor: 'black' }}>
          Hoặc
        </Divider>
        <div>
          <Button color="primary" block variant="dashed" className="hover:!border-transparent">
            Đăng nhập bằng email
          </Button>
        </div>


      </div>
    </>
  )
}
export default LoginContent