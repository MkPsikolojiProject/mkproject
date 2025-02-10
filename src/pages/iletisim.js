import Head from "next/head";
import Layout from "./components/layout";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const iletisim = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1560); // 768px altındaki genişlikleri mobil olarak kabul ediyoruz
    };

    // İlk yüklemede ekran genişliğini kontrol et
    handleResize();

    // Ekran boyutu değiştiğinde tetiklenecek
    window.addEventListener("resize", handleResize);

    // Component unmount olduğunda event listener'ı kaldır
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const Href = () => {
    // İlk olarak uygulamanın yüklü olup olmadığını kontrol eder.
    const instagramAppUri = "instagram://user?username=mk.psikoloji"; // Instagram URI
    const instagramWebUri = "https://www.instagram.com/mk.psikoloji"; // Web URI

    // Uygulamayı açmayı dene
    window.location.href = instagramAppUri;

    // Eğer uygulama yüklü değilse, birkaç saniye içinde web versiyonuna yönlendir
    setTimeout(() => {
      window.location.href = instagramWebUri;
    }, 150); // 500ms (yarım saniye) bekle ve sonra web sürümüne yönlendir
  };
  const WorkImages = [
    {
      Id: 1,
      src: "Yorumlar (1).png",
    },
    {
      Id: 2,
      src: "Yorumlar (2).png",
    },
    {
      Id: 3,
      src: "Yorumlar (3).png",
    },
    {
      Id: 4,
      src: "Yorumlar (4).png",
    },
    {
      Id: 5,
      src: "Yorumlar (5).png",
    },
    {
      Id: 6,
      src: "Yorumlar (6).png",
    },
    {
      Id: 7,
      src: "Yorumlar (7).png",
    },
  ];
  const handleNavigation = () => {
    const lat = temp.lat; // Kendi enlem boylamınızı kullanın
    const lng = temp.lng;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    );
  };
  return (
    <>
      <Head>
        <title>İletişim</title>
        <meta name="description" content="MK Psikolojik Danışma Merkezi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/redmkLogo.ico" />
      </Head>
      <Layout>
        <Row className="mt-3">
          <Col xl={3}>
            {WorkImages.map((x) => {
              if (x.Id <= 4 && isMobile !== true) {
                return (
                  <Col className="d-flex justify-content-center mb-2" xl={12}>
                    <Image
                      style={{ height: "20vh", width: 400, borderRadius: 15 }}
                      className="responsive-image"
                      key={x.Id}
                      src={x.src}
                    ></Image>
                  </Col>
                );
              }
            })}
          </Col>
          <Col className="justify-content-center" lg={12} xl={6}>
            <Row xl={12}>
              <Col className="d-flex justify-content-center" xl={12}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.378981771138!2d32.853258269657786!3d39.885079727293515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f5b42a84343%3A0xd19c0710f534d1fa!2sMK%20Psikolojik%20Dan%C4%B1%C5%9Fma%20Merkezi!5e0!3m2!1str!2str!4v1727193069931!5m2!1str!2str"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
            <Row className="mt-3" xl={12}>
              <Col
                className="d-flex justify-content-left mb-2"
                xl={{ span: 8, offset: 2 }}
              >
                <a href="https://www.google.com/maps?ll=39.885079,32.853902&z=18&t=m&hl=tr&gl=TR&mapclient=embed&cid=15103955019708551674">
                  <i
                    class="bi bi-house-door"
                    style={{ fontSize: 30, paddingRight: 10, paddingLeft: 10 }}
                  ></i>
                  Aziziye, Hoşdere Cd. No:199 D:6, 06090 Çankaya/Ankara
                </a>
              </Col>
              <Col
                className="d-flex justify-content-left mb-2"
                xl={{ span: 8, offset: 2 }}
              >
                <a href="tel:+905050254400">
                  <i
                    class="bi bi-telephone"
                    style={{ fontSize: 30, paddingRight: 10, paddingLeft: 10 }}
                  ></i>
                  05050254400
                </a>
              </Col>
              <Col
                className="d-flex justify-content-left mb-2"
                xl={{ span: 8, offset: 2 }}
              >
                <a href="mailto:info@mkpsikoloji.com.tr">
                  <i
                    class="bi bi-envelope"
                    style={{ fontSize: 30, paddingRight: 10, paddingLeft: 10 }}
                  ></i>
                  info@mkpsikoloji.com.tr
                </a>
              </Col>
            </Row>
          </Col>
          <Col xl={3}>
            {WorkImages.map((x) => {
              if (x.Id > 4 && isMobile !== true) {
                return (
                  <Col className="d-flex justify-content-center mb-2" xl={12}>
                    <Image
                      style={{ height: "20vh", width: 400, borderRadius: 15 }}
                      className="responsive-image"
                      key={x.Id}
                      src={x.src}
                    ></Image>
                  </Col>
                );
              }
            })}
          </Col>
        </Row>
        {isMobile == true ? (
          <Row>
            {WorkImages.map((x) => {
              return (
                <Col className="d-flex justify-content-center mb-2" xl={12}>
                  <Image
                    style={{ height: "20vh", width: 400 }}
                    className="responsive-image"
                    key={x.Id}
                    src={x.src}
                  ></Image>
                </Col>
              );
            })}
          </Row>
        ) : (
          <></>
        )}
      </Layout>
    </>
  );
};

export default iletisim;
