import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Contact/Welcome";
import { Row, Col } from "antd"
import ContactInfo from "../components/Contact/ContactInfo";
import ClientInfo from "../components/Contact/Clientinfo";

function Contact() {
  return (
    <>
      <Header />
      <Welcome />
      <div className="!px-40">
        <Row gutter={[20, 20]}>
          <Col span={24} lg={12}>
            <ContactInfo />
          </Col>

          <Col span={24} lg={12}>
            <ClientInfo />
          </Col>
        </Row>
      </div>

      <div className="!px-40 !mb-20">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.292401303918!2d105.7848415750301!3d20.980912980656466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1752382462071!5m2!1svi!2s" className="w-full h-[500px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Footer />
    </>
  )
}

export default Contact