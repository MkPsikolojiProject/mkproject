import Head from "next/head";
import localFont from "next/font/local";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "./components/layout";
import { useTheme } from "next-themes";

import Image from "react-bootstrap/Image";

const Images = [
  {
    Id: 1,
    src: "AnaSayfa2.jpeg",
    srcMobile: "AnaSayfa44.jpeg",
   
  },
  {
    Id: 2,
    src: "AnaSayfa4.jpeg",
    srcMobile: "AnaSayfa222.jpg",
  },
  {
    Id: 3,
    src: "AnaSayfa1.jpeg",
    srcMobile: "AnaSayfa11.jpeg",
  },

  {
    Id: 4,
    src: "AnaSayfa3.jpeg",
    srcMobile: "AnaSayfa33.jpeg",
  },
  { Id: 5, src: "AnaSayfa3.jpeg", srcMobile: "AnaSayfa55.jpeg" },
];
const WorkImages = [
  {
    Id: 1,
    src: "AnaSayfaWork (1).jpeg",
  },
  {
    Id: 2,
    src: "AnaSayfaWork (2).jpeg",
  },
  {
    Id: 3,
    src: "AnaSayfaWork (3).jpeg",
  },
  {
    Id: 4,
    src: "AnaSayfaWork (4).jpeg",
  },
  {
    Id: 5,
    src: "AnaSayfaWork (5).jpeg",
  },
];

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu kontrol eden useEffect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px altındaki genişlikleri mobil olarak kabul ediyoruz
    };

    // İlk yüklemede ekran genişliğini kontrol et
    handleResize();

    // Ekran boyutu değiştiğinde tetiklenecek
    window.addEventListener("resize", handleResize);

    // Component unmount olduğunda event listener'ı kaldır
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [hash, setHash] = useState("home");
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [whichModal, setWhichModal] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleImageClick = (image, modal) => {
    setActiveIndex(image);
    setWhichModal(modal);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  const routerSelect = (index) => {
    router.push(index);
  };
  useEffect(() => {
    setHash(router.asPath.toString());
  }, [router.asPath]);
  return (
    <>
      <Head>
        <title>MK Psikolojik Danışma Merkezi</title>
        <meta name="description" content="MK Psikolojik Danışma Merkezi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/redmkLogo.ico" />
      </Head>
      <Layout>
        {/* <Row className="mb-3">
          <h4
            style={{
              textAlign: "center",
              fontWeight: 450,
            }}
          >
            MK PSİKOLOJİK DANIŞMA MERKEZİ
          </h4>
        </Row> */}
        <Carousel
          style={{ position: "absolute", top: 0, opacity: 0.6, zIndex: -1 }}
          data-bs-theme="dark"
          fade
          indicators={false}
          controls={false}
        >
          {Images.map((x, index) => {
            return (
              <Carousel.Item key={x.Id}>
                <Image
                  onClick={() => handleImageClick(index, "Images")}
                  style={{
                    objectFit: "cover", // Görüntünün taşmasını engeller, alanı doldurur
                    objectPosition: "center", // Görüntüyü ortalar
                    height: "100vh",
                    width: "100%", // Ekran genişliğini doldurur // Tam ekran yüksekliğini ayarlar
                    borderRadius: 20, // Slayt genişliğini doldurur
                  }}
                  className="responsive-image" // Bu sınıf ile mobil uyum sağlar
                  fluid
                  src={isMobile ? x.srcMobile : x.src}
                />
                <Carousel.Caption>
                  <h3 style={{ color: "white", fontWeight: 500 }}>
                    {x.header}
                  </h3>
                  <p style={{ color: "white", fontWeight: 500 }}>{x.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>

        <Row style={{ marginTop: "85vh" }} className=" mb-3">
          <p
            style={{
              textAlign: "center",
              fontWeight: 450,
              fontSize: "1.2em",
            }}
          >
            Belki sen de köklerde bulabileceğini dallarda arıyorsundur. -Rumi
          </p>
        </Row>
        <Row className="d-flex justify-content-center">
          <Row className="mt-2" style={{ textAlign: "center" }}>
            <Row className="m-0 mb-3">
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: 650,
                }}
              >
                Çalışma Alanlarımız
              </h4>
            </Row>
            <Row className="m-0 mb-5">
              <Col xl={{ offset: 3, span: 3 }} lg={12} className="mt-5">
                <Card
                  text={resolvedTheme === "light" ? "dark" : "white"}
                  bg={resolvedTheme}
                  style={{
                    position: "inherit",
                    justifyContent: "center",
                    display: "flex",
                    border: "none",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    variant="top"
                    style={{
                      width: "100%",
                      height: isMobile ? "50vh" : "60vh",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                    src="Bireysel.jpeg"
                  />
                  <Card.Body style={{ justifyContent: "center" }}>
                    <Card.Title>Bireysel Danışma</Card.Title>
                    <Card.Text>
                      <Button
                        href="tel:+905050254400"
                        style={{ backgroundColor: "#ce9035", border: "none" }}
                      >
                        <i
                          style={{ fontSize: 16, paddingRight: 5 }}
                          className="bi bi-telephone-outbound"
                        ></i>
                        Bize Ulaşın
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={12} className="mt-5">
                <Card
                  text={resolvedTheme === "light" ? "dark" : "white"}
                  bg={resolvedTheme}
                  style={{
                    position: "inherit",
                    justifyContent: "center",
                    display: "flex",
                    border: "none",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    variant="top"
                    style={{
                      width: "100%",
                      height: isMobile ? "50vh" : "60vh",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                    src="Oyunlar.jpeg"
                  />
                  <Card.Body style={{ justifyContent: "center" }}>
                    <Card.Title>Özel Eğitim</Card.Title>
                    <Card.Text>
                      <Button
                        href="tel:+905050254400"
                        style={{ backgroundColor: "#ce9035", border: "none" }}
                      >
                        <i
                          style={{ fontSize: 16, paddingRight: 5 }}
                          className="bi bi-telephone-outbound"
                        ></i>
                        Bize Ulaşın
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={{ offset: 3, span: 3 }} lg={12} className="mt-5">
                <Card
                  text={resolvedTheme === "light" ? "dark" : "white"}
                  bg={resolvedTheme}
                  style={{
                    position: "inherit",
                    justifyContent: "center",
                    display: "flex",
                    border: "none",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    variant="top"
                    style={{
                      width: "100%",
                      height: isMobile ? "50vh" : "60vh",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                    src="GriOda.jpeg"
                  />
                  <Card.Body style={{ justifyContent: "center" }}>
                    <Card.Title>Dikkat Geliştirme</Card.Title>
                    <Card.Text>
                      <Button
                        href="tel:+905050254400"
                        style={{ backgroundColor: "#ce9035", border: "none" }}
                      >
                        <i
                          style={{ fontSize: 16, paddingRight: 5 }}
                          className="bi bi-telephone-outbound"
                        ></i>
                        Bize Ulaşın
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={12} className="mt-5">
                <Card
                  text={resolvedTheme === "light" ? "dark" : "white"}
                  bg={resolvedTheme}
                  style={{
                    position: "inherit",
                    justifyContent: "center",
                    display: "flex",
                    border: "none",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    variant="top"
                    style={{
                      width: "100%",
                      height: isMobile ? "50vh" : "60vh",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                    src="AileDanismanligi.jpeg"
                  />
                  <Card.Body style={{ justifyContent: "center" }}>
                    <Card.Title>Aile & Çift Danışmanlığı</Card.Title>
                    <Card.Text>
                      <Button
                        href="tel:+905050254400"
                        style={{ backgroundColor: "#ce9035", border: "none" }}
                      >
                        <i
                          style={{ fontSize: 16, paddingRight: 5 }}
                          className="bi bi-telephone-outbound"
                        ></i>
                        Bize Ulaşın
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={{ offset: 3, span: 3 }} lg={12} className="mt-5">
                <Card
                  text={resolvedTheme === "light" ? "dark" : "white"}
                  bg={resolvedTheme}
                  style={{
                    position: "inherit",
                    justifyContent: "center",
                    display: "flex",
                    border: "none",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    variant="top"
                    style={{
                      width: "100%",
                      height: isMobile ? "50vh" : "60vh",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                    src="OyunAlani.jpeg"
                  />
                  <Card.Body style={{ justifyContent: "center" }}>
                    <Card.Title>Oyun Terapisi & Masal Terapisi</Card.Title>
                    <Card.Text>
                      <Button
                        href="tel:+905050254400"
                        style={{ backgroundColor: "#ce9035", border: "none" }}
                      >
                        <i
                          style={{ fontSize: 16, paddingRight: 5 }}
                          className="bi bi-telephone-outbound"
                        ></i>
                        Bize Ulaşın
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Row>
        {/* Modal Tam Ekran */}
        <Modal show={showModal} onHide={handleClose} size="xl" centered>
          <Modal.Body>
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
              {whichModal === "Images"
                ? Images.map((x, index) => (
                    <Carousel.Item key={x.Id}>
                      <Image
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "100%",
                        }}
                        src={x.src}
                      />
                    </Carousel.Item>
                  ))
                : WorkImages.map((x, index) => (
                    <Carousel.Item key={x.Id}>
                      <Image
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "100%",
                        }}
                        src={x.src}
                      />
                    </Carousel.Item>
                  ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Layout>
    </>
  );
}
