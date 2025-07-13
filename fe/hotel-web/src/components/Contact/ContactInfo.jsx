function ContactInfo() {
    return (
        <>
            <div>
                <h1 className="text-3xl">Thông tin liên hệ</h1>

                <div className="flex gap-10 text-base">

                    <div>
                        <div>Số điện thoại:</div>
                        <div>Email:</div>
                        <div>Địa chỉ:</div>
                    </div>

                    <div className="font-semibold">
                        <div>(+84) 912 345 678</div>
                        <div>info@holohotel.vn</div>
                        <div>68 Tràng Thi, Quận Hoàn Kiếm, Hà Nội</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactInfo