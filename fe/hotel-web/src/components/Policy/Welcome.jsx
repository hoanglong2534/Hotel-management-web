import { Breadcrumb} from "antd";
import { NavLink } from "react-router-dom";


function Welcome() {
  return (
    <>
      <div className="!p-25 text-center">
        <div className="text-4xl font-bold">CHÍNH SÁCH</div>
        <Breadcrumb
          items={[
            {
              title: <NavLink to="/">Trang chủ</NavLink>,
            },
            {
              title: "Chính sách",
            },
          ]}
          className="flex justify-center text-base"
        />
      </div>
    </>
  );
}

export default Welcome;
