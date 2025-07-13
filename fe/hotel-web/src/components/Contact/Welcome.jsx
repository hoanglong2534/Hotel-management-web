import { Breadcrumb} from "antd";
import { NavLink } from "react-router-dom";


function Welcome() {
  return (
    <>
      <div className="!p-25 text-center">
        <div className="text-4xl font-bold">Liên hệ</div>
        <Breadcrumb
          items={[
            {
              title: <NavLink to="/">Trang chủ</NavLink>,
            },
            {
              title: "Liên hệ",
            },
          ]}
          className="flex justify-center text-base"
        />
      </div>
    </>
  );
}

export default Welcome;
