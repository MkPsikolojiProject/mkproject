import Head from "next/head";
import Layout from "./components/layout";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useTheme } from "next-themes";

const uzmanlarimiz = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <>
      <Head>
        <title>Uzmanlarımız</title>
        <meta name="description" content="MK Psikolojik Danışma Merkezi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/redmkLogo.ico" />
      </Head>
      <Layout>
        <Row className="justify-content-center">
          <Col xl={3} className="mt-5 d-flex justify-content-center">
            <Card
              text={resolvedTheme === "light" ? "dark" : "white"}
              bg={resolvedTheme}
              style={{ position: "inherit" }}
            >
              <Image
                variant="top"
                style={{width: "90%", height: "50vh",marginLeft:'5%' }}
                src="MELİSKARAKAYA.jpeg"
              />
              <Card.Body style={{ maxWidth: "350px" }}>
                <Card.Title>​MELİS KARAKAYA</Card.Title>
                <Card.Text>Uzman Psikolojik Danışman /Aile Danışmanı</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} className="mt-5 d-flex justify-content-center">
            <Card
              text={resolvedTheme === "light" ? "dark" : "white"}
              bg={resolvedTheme}
              style={{ position: "inherit" }}
            >
              <Image
                variant="top"
                style={{width: "90%", height: "50vh",marginLeft:'5%' }}
                src="ÜLKERRENÇBER.jpeg"
              />
              <Card.Body style={{ maxWidth: "350px" }}>
                <Card.Title>ÜLKER ​RENÇBER</Card.Title>
                <Card.Text>
                  Oyun Terapisti/Odyoloji ve İşitsel Rehabilitasyon Uzmanı
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} className="mt-5 d-flex justify-content-center mb-5">
            <Card
              text={resolvedTheme === "light" ? "dark" : "white"}
              bg={resolvedTheme}
              style={{ position: "inherit" }}
            >
              <Image
                variant="top"
                style={{width: "90%", height: "50vh",marginLeft:'5%' }}
                src="İSMAİLTAN.jpeg"
              />
              <Card.Body style={{ maxWidth: "350px" }}>
                <Card.Title>İSMAİL TAN</Card.Title>
                <Card.Text>Özel Eğitim Alan Uzmanı / Oyun Terapisti</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={4} className="mt-5 d-flex justify-content-center mb-1">
            <Card
              text={resolvedTheme === "light" ? "dark" : "white"}
              bg={resolvedTheme}
              style={{ position: "inherit", width: "100%" }}
            >
              <Image
                variant="top"
                style={{width: "100%", height: "65vh",borderRadius:5}}
                src="mkKimdir.jpeg"
              />
            
            </Card>
          </Col>
          <Col xl={4} className="mt-5 d-flex justify-content-center mb-5">
          <Card.Body className="justify-content-center">
                <Card.Title style={{fontWeight:600}} className="mt-3 mb-3 d-flex justify-content-center">Kurucu Uzman Melis Karakaya Kimdir ?</Card.Title>
                <Card.Text>
                  Uzman Psikolojik Danışman Melis Karakaya, 2020 yılında TED
                  Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden
                  %100 İngilizce eğitimle mezun olmuştur. 2022 yılında Ufuk
                  Üniversitesi’nde yüksek lisans eğitimini tamamlamıştır.
                  2020-2024 yılları arasında özel gereksinimli çocuklarla Özel
                  Eğitim ve Rehabilitasyon Merkezlerinde çalışmıştır. 2020
                  yılında Ankara Psikoterapi Merkezi’nden Aile Danışmanlığı
                  eğitimi alarak sertifikasını kazanmıştır. Aynı yıl WISC-R Zeka
                  Testi Uygulayıcılığı, Check-Up (yapılandırılmış dikkat
                  programı) ve tüm objektif çocuk testleri eğitimlerini
                  tamamlamıştır. Aile danışmanlığında Bilişsel Davranışçı Terapi
                  (BDT), Kısa Süreli Çözüm Odaklı Terapi ve Oyun Terapisi
                  uygulayıcı eğitimlerine de sahiptir. 2023 yılında Özel Eğitim
                  Alanında Uzman Öğretici Sertifikasını alarak özel gereksinimli
                  çocuklarla daha aktif bir şekilde çalışmaya
                  başlamıştır.Danışma Merkezini kurmuş; uzman ekibiyle birlikte
                  aile&evlilik danışmanlığı, bireysel danışma ve oyun terapisi
                  hizmeti vermektedir. Ayrıca, özel gereksinimli çocuklarla
                  sosyal, duygusal ve dikkat geliştirme programlarını
                  uygulayarak alandaki çalışmalarını sürdürmektedir.
                </Card.Text>
              </Card.Body>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default uzmanlarimiz;
