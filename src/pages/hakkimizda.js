import Head from "next/head";
import Layout from "./components/layout";
import { Col, Row } from "react-bootstrap";

const hakkimizda = () => {
  return (
    <>
      <Head>
        <title>Hakkımızda</title>
        <meta name="description" content="MK Psikolojik Danışma Merkezi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/redmkLogo.ico" />
      </Head>
      <Layout>
        <Row className="mt-5">
          <h3
            style={{
              textAlign: "center",
              fontWeight: 450,
            }}
          >
            MK PSİKOLOJİK DANIŞMA MERKEZİ
          </h3>
        </Row>
        <Row className="mt-2" style={{ textAlign: "center" }}>
          <Col xl={{ span: 6, offset: 3 }}>
            Çocuk, genç, yetişkin ve çiftlerin psikolojik sorunlarının yanı sıra
            ruh sağlıklarını olumsuz etkileyen faktörler ve yaşamlarındaki diğer
            zorluklarla başa çıkmalarını sağlamak, onlara baş etme becerileri
            kazandırarak yaşam kalitelerini artırmak hedefimizdir. Şeffaf
            yaklaşıma sahip, etiğe duyarlı ve profesyonel olduğu kadar enerjik
            olan MK Psikoloji Merkezi ekibi,klinik psikologlar,odyologlar,dil ve
            konuşma terapistleri , özel eğitim alan uzmanları ve uzman
            psikolojik danışmanlardan oluşmaktadır. Uzman kadromuz ile
            danışanlarımıza en iyi şekilde hizmet vermeye devam ediyoruz.
          </Col>
        </Row>
        <Row className="mt-2" style={{ textAlign: "center" }}>
          <Col xl={{ span: 6, offset: 3 }}>
            MK Psikolojik Danışmanlık Merkezi ekibi olarak, uzman kadromuzla
            çalışmalarımızı Bilişsel Davranışçı Terapi’nin temel ilke ve
            kavramlarına, Çözüm Odaklı Terapi ve Bütüncül ekole dayandırarak;
            Bireysel Psikolojik Danışma, Çift-Evlilik Terapisi, Aile
            Danışmanlığı, Oyun Terapisi, Okul Danışmanlığı, TYT-AYT
            Danışmanlığı,Seminer çalışmaları ve kurumsal danışmanlık konularında
            hizmet sunmaktayız. MK Psikoloji Uzman kadromuz ile danışanlarımıza
            en iyi şekilde hizmet vermeye devam etmektedir.
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default hakkimizda;
