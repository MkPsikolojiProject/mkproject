import { ThemeProvider, useTheme } from "next-themes";
import NavbarComponent from "../navbar";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { Row, Button, Col } = require("react-bootstrap");

const Layout = (props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  // Ensure the component is mounted before rendering the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  const changeTheme = () => {
    if (theme != "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const Instagram = () => {
    // İlk olarak uygulamanın yüklü olup olmadığını kontrol eder.
    const instagramAppUri = 'instagram://user?username=mk.psikoloji'; // Instagram URI
    const instagramWebUri = 'https://www.instagram.com/mk.psikoloji'; // Web URI

    // Uygulamayı açmayı dene
    window.location.href = instagramAppUri;

    // Eğer uygulama yüklü değilse, birkaç saniye içinde web versiyonuna yönlendir
    setTimeout(() => {
      window.location.href = instagramWebUri;
    }, 150); // 500ms (yarım saniye) bekle ve sonra web sürümüne yönlendir
  };
  if (!mounted) return null; // Prevents rendering until mounted
  return (
    <>
      <Row className="justify-content-center" xl={12}>
        <Row
          xl={12}
          style={{position:'fixed',top:0, height: "max-content", backgroundColor: "#ce9035",zIndex:0 }}
        >
          {/* Sol tarafta telefon butonu */}
          <Col
            xs={8}
            sm={8}
            lg={{ span: 6, offset: 0 }}
            xl={{ span: 4, offset: 2 }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              href="tel:+905050254400"
              style={{
                display: "flex",
                justifyContent:'center',
                height: 40,
                padding: 2,
                backgroundColor: "transparent",
                color:'#f0f2f5',
                border: "none",
              }}
            >
              <i
                style={{ fontSize: 20 }}
                className="top-button bi bi-telephone-outbound"
              ></i>
              <p className="top-button" style={{marginLeft: 3, fontSize: "1.0em",paddingTop:3}}>
                0(505) 025 44 00
              </p>
            </Button>
          </Col>

          {/* Sağ tarafta e-posta butonu */}
          <Col
            xs={4}
            sm={4}
            lg={{ span: 6, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Button
              variant={resolvedTheme}
              href="mailto:info@mkpsikoloji.com.tr"
              style={{
                display: "flex",
                height: 40,
                padding: 2,
                backgroundColor: "transparent",
                border: "none",
                color:'#f0f2f5',
              }}
            >
              <i style={{ fontSize: 20 }} className="top-button bi bi-envelope"></i>
              <p className="top-button d-none d-xl-block" style={{ marginLeft: 3, fontSize: "1.0em",paddingTop:3 }}>
              info@mkpsikoloji.com.tr
              </p>
            </Button>
          </Col>
        </Row>
        <NavbarComponent theme={theme} />
        <Row className="justify-content-center" style={{marginTop:150}} xl={12}>
          <Row className="m-0 p-0" xl={12}>
            <Col className="m-0 p-0" xl={12} lg={12}>
              {props.children}
            </Col>
          </Row>
        </Row>
      </Row>
      <Button
        variant={resolvedTheme}
        className="d-xl-none"
        onClick={changeTheme}
        style={{
          position: "fixed",
          bottom: "33px",
          left: "20px",
          zIndex: "1000",
          width: 55,
          borderRadius: 99,
        }}
      >
        {resolvedTheme != "dark" ? (
          <i style={{ fontSize: 25 }} class="bi bi-sun"></i>
        ) : (
          <i style={{ fontSize: 25 }} class="bi bi-moon-fill"></i>
        )}
      </Button>
      <Button
  className="d-xl-none"
  onClick={Instagram}
  style={{
    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    position: "fixed",
    bottom: "120px",
    right: "33px",
    zIndex: "1000",
    width: 55,
    height: 55,  // Butonun boyutunu daha yuvarlak hale getirmek için
    borderRadius: 99,
    border:'none',
    animation: 'pulse 1.5s infinite'
  }}
>
        {resolvedTheme != "dark" ? (
          <i style={{ fontSize: 25 }} class="bi bi-instagram"></i>
        ) : (
          <i style={{ fontSize: 25 }} class="bi bi-instagram"></i>
        )}
      </Button>
      <FloatingWhatsApp
        style={{ color: "black" }}
        chatboxStyle={{ color: "black" }}
        statusMessage=""
        avatar="Avatar.jpeg"
        placeholder="Mesaj gönderin..."
        accountName="Mk Psikoloji"
        chatMessage="Merhabalar, size nasıl yardımcı olabilirim ?" // İlk mesajı boş bırakarak chatbox'u boşaltabilirsiniz
        allowClickAway // Bu da kapatma butonunu etkisiz hale getirir
        notification // Eğer bildirim sesi veya animasyonu kullanıyorsanız
        notificationDelay={60000} // Bildirimin ne kadar sürede görüneceği
        autoOpen={false} // Chatbox'un otomatik açılmasını kapatır
        phoneNumber="+905050254400"
      />
    </>
  );
};
export default Layout;
