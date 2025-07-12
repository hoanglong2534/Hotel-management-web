import { NavLink } from "react-router-dom"

function LastestContent() {
    return (
        <>
            <div className="bg-[#F2F3F5] w-full h-[370px] !p-5 !my-5 rounded-[10px]">
                <h3 className="text-xl">Các bài viết gần đây</h3>

                <div>

                    <div className="!mb-5">
                        <NavLink to="/detail">
                            <div className="flex items-center gap-2 group hover:!bg-[#E7BE95] transition-all duration-200 cursor-pointer">
                                <div className="bg-[url('/news-summary/2.jpg')] bg-center bg-cover w-[70px] h-[70px] group-hover:scale-105 transition-all duration-200"></div>
                                <div className="text-base !text-black group-hover:!text-white transition-all duration-200 w-full">Cẩm nang du lịch Phú Quốc</div>
                            </div>
                        </NavLink>
                    </div>

                    <div className="!mb-5">
                        <NavLink to="/detail">
                            <div className="flex items-center gap-2 group hover:!bg-[#E7BE95] transition-all duration-200 cursor-pointer">
                                <div className="bg-[url('/news-summary/3.jpg')] bg-center bg-cover w-[70px] h-[70px] group-hover:scale-105 transition-all duration-200 "></div>
                                <div className="text-base !text-black group-hover:!text-white transition-all duration-200 w-full">Chuẩn bị gì trước khi đi cắm trại?</div>
                            </div>
                        </NavLink>
                    </div>

                    <div className="!mb-5">
                        <NavLink to="/detail">
                            <div className="flex items-center gap-2 group hover:!bg-[#E7BE95] transition-all duration-200 cursor-pointer">
                                <div className="bg-[url('/news-summary/5.jpg')] bg-center bg-cover w-[70px] h-[70px] group-hover:scale-105 transition-all duration-200"></div>
                                <div className="text-base !text-black group-hover:!text-white transition-all duration-200 w-full">5 bãi biển phải đi trong hè này</div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LastestContent