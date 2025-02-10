import Head from "next/head";
import Layout from "./components/layout";
import { Button, Card, Col, Collapse, Row } from "react-bootstrap";
import { useTheme } from "next-themes";
import { useState } from "react";

const hizmetlerimiz = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  return (
    <>
      <Head>
        <title>hizmetlerimiz</title>
        <meta name="description" content="MK Psikolojik Danışma Merkezi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/redmkLogo.ico" />
      </Head>
      <Layout>
        <Row className="d-flex justify-content-center">
          <Col className="mt-2" xl={3}>
            <Card
              bg={resolvedTheme}
              text={resolvedTheme === "light" ? "dark" : "light"}
              style={{ position: "inherit" }}
            >
              <Card.Img
                style={{ maxHeight: "50vh",minHeight:"50vh" }}
                variant="top"
                src="DikkatHizmetler.jpeg"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Dikkat Geliştirme
                </Card.Title>
                <Collapse in={open1}>
                  <div id="dikkatGelistirmeText">
                    <Card.Text className="d-flex justify-content-center">
                      Dikkat beynin en karmaşık fonksiyonlarından biridir. Bu
                      fonksiyon bilgiyi işleyen ve bir konu üzerinde odaklanmayı
                      sağlayan bir fonksiyondur. Dikkat: “Duygularla düşünceyi
                      bir şey üzerinde toplama, uyanıklık halini ifade
                      eder.(TDK) CheckUp (Yapılandırılmış Dikkat Programı)
                      bireylerin eylemelere odaklanması, sürdürmesi, istenilen
                      eylemi seçebilmesi, etkinlikler arasında geçiş yapabilmesi
                      ve aynı anda birden fazla etkinliğin yapılabilmesi için
                      dikkatin tüm alt unsurlarını barındıran etkinlik ve
                      yönerge sisteminden oluşmaktadır. Danışmanlık Merkezimizde
                      Check Up -Yapılandırılmış dikkat programı uygulanmaktadır.
                    </Card.Text>
                  </div>
                </Collapse>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={() => setOpen1(!open1)}
                    aria-controls="dikkatGelistirmeText"
                    aria-expanded={open1}
                    variant={open1 ? "danger" : "primary"}
                  >
                    {open1 ? "Detayları Kapat" : "Detayları Göster"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-2" xl={3}>
            <Card
              bg={resolvedTheme}
              text={resolvedTheme === "light" ? "dark" : "light"}
              style={{ position: "inherit" }}
            >
              <Card.Img
                style={{ maxHeight: "50vh" }}
                variant="top"
                src="BireyselHizmetler.jpeg"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Bireysel Danışma
                </Card.Title>
                <Collapse in={open2}>
                  <div id="bireyselDanismaText">
                    <Card.Text className="d-flex justify-content-center">
                      MK Psikolojik Danışma Merkezimizde bireysel danışma
                      hizmeti sunmaktayız.
                    </Card.Text>
                  </div>
                </Collapse>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={() => setOpen2(!open2)}
                    aria-controls="bireyselDanismaText"
                    aria-expanded={open2}
                    variant={open2 ? "danger" : "primary"}
                  >
                    {open2 ? "Detayları Kapat" : "Detayları Göster"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-2" xl={3}>
            <Card
              bg={resolvedTheme}
              text={resolvedTheme === "light" ? "dark" : "light"}
              style={{ position: "inherit" }}
            >
              <Card.Img
                style={{ maxHeight: "50vh" }}
                variant="top"
                src="AileHizmetler.jpeg"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Aile Danışmanlığı
                </Card.Title>
                <Collapse in={open3}>
                  <div id="aileDanismanligiText">
                    <Card.Text className="d-flex justify-content-center">
                      MK Psikolojik Danışma Merkezimizde aile danışmanlığı, çift
                      danışmanlığı, evlilik ve boşanma danışmanlığı hizmeti
                      sunmaktayız.
                    </Card.Text>
                  </div>
                </Collapse>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={() => setOpen3(!open3)}
                    aria-controls="aileDanismanligiText"
                    aria-expanded={open3}
                    variant={open3 ? "danger" : "primary"}
                  >
                    {open3 ? "Detayları Kapat" : "Detayları Göster"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row  className="d-flex justify-content-center mb-5">
          <Col className="mt-2" xl={3}>
            <Card
              bg={resolvedTheme}
              text={resolvedTheme === "light" ? "dark" : "light"}
              style={{ position: "inherit" }}
            >
              <Card.Img
                style={{ maxHeight: "50vh" }}
                variant="top"
                src="OyunlarHizmetler.jpeg"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Oyun Terapisi
                </Card.Title>
                <Collapse in={open4}>
                  <div id="oyunTerapisiText">
                    <Card.Text className="d-flex justify-content-center">
                      MK Psikolojik Danışma Merkezimizde çocukların iç dünyasını
                      anlamlandırmak ve onların problemlerine eğilmek amacıyla
                      çocuk merkezli oyun terapisi, yönlendirilmiş oyun terapisi
                      ve bdt ile oyun terapi modellerini uygulayarak hizmet
                      sunmaktayız.
                    </Card.Text>
                  </div>
                </Collapse>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={() => setOpen4(!open4)}
                    aria-controls="oyunTerapisiText"
                    aria-expanded={open4}
                    variant={open4 ? "danger" : "primary"}
                  >
                    {open4 ? "Detayları Kapat" : "Detayları Göster"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-2" xl={3}>
            <Card
              bg={resolvedTheme}
              text={resolvedTheme === "light" ? "dark" : "light"}
              style={{ position: "inherit" }}
            >
              <Card.Img
                variant="top"
                style={{ maxHeight: "50vh" }}
                src="MasallarHizmetler.jpeg"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Masal Terapisi
                </Card.Title>
                <Collapse in={open5}>
                  <div id="masalTerapisiText">
                    <Card.Text className="d-flex justify-content-center">
                      MK Psikolojik Danışma Merkezimizde çocukların iç dünyasını
                      anlamlandırmak ve onların problemlerine eğilmek amacıyla
                      masal terapisi hizmet sunmaktayız.
                    </Card.Text>
                  </div>
                </Collapse>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={() => setOpen5(!open5)}
                    aria-controls="masalTerapisiText"
                    aria-expanded={open5}
                    variant={open5 ? "danger" : "primary"}
                  >
                    {open5 ? "Detayları Kapat" : "Detayları Göster"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-2" xl={3}>
            <Card
              bg={resolvedTheme}
              text={resolvedTheme === "light" ? "dark" : "light"}
              style={{ position: "inherit" }}
            >
              <Card.Img
                style={{ maxHeight: "50vh" }}
                variant="top"
                src="ÖzelEgitimHizmetler.jpeg"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Özel Eğitim
                </Card.Title>
                <Collapse in={open6}>
                  <div id="ozelEgitimText">
                    <Card.Text className="d-flex justify-content-center">
                      MK Psikolojik Danışmanlık Merkezimizde özel gereksinimli
                      çocuklarımızın engelsiz bir yaşam sürdürebilmesi için
                      farklı alanlarda bireysel eğitim sağlıyoruz. Otizm,
                      asperger, a tipik otizm, zeka geriliği ve özgül öğrenme
                      güçlükleri gibi tanı grupları ile sosyal duygusal beceri
                      gelişimi, sosyal etkinlikler, dil ve konuşma terapisi,
                      davranış terapisi ve özel eğitim dersleri vererek özel
                      eğitim alanında da geniş bir hizmet yelpazesi sunmaktayız.
                    </Card.Text>
                  </div>
                </Collapse>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={() => setOpen6(!open6)}
                    aria-controls="ozelEgitimText"
                    aria-expanded={open6}
                    variant={open6 ? "danger" : "primary"}
                  >
                    {open6 ? "Detayları Kapat" : "Detayları Göster"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default hizmetlerimiz;
