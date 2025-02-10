import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Dropdown, FormSelect, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRouter } from 'next/router';
import classes from './navbar.module.css';
const NavbarComponent = (props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router=useRouter();
  const [navbarBg, setNavbarBg] = useState('transparent');
  
  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.scrollY > 50) {
        setNavbarBg(resolvedTheme);  // Tema değişince güncellenir
      } else {
        setNavbarBg('transparent');
      }
    };
    
    window.addEventListener('scroll', changeNavbarBackground);
    
    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  }, [theme]); 

  useEffect(()=>{
    if (window.scrollY > 5) {
      setNavbarBg(theme);  // Tema değişince güncellenir
    } else {
      setNavbarBg('transparent');
    }
  },[theme])


  // Ensure the component is mounted before rendering the theme
  useEffect(() => {
    setMounted(true);
  }, []);
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
  const Whatsapp = (e) => {
    e.preventDefault(); // Chatbox'un açılmasını engeller
    const whatsappLink = 'https://wa.me/+905050254400?text=""';
    window.open(whatsappLink, '_blank');
  };
  if (!mounted) return null; // Prevents rendering until mounted

  return (

    <Navbar
    bg={navbarBg}
    variant={resolvedTheme}
    data-bs-theme={navbarBg}
    style={{ position:'fixed',top:30}}
    key={'xl'}
    expand={'xl'}
    className=" mb-3 d-flex justify-content-center"
  >
    <Container fluid className="d-flex justify-content-between align-items-center">
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xl'}`} />
   
      <div className="d-flex align-items-center flex-grow-1 ">
        <Image
          className="d-none d-xl-block mt-4" // Mobilde gizle, masaüstünde göster
          style={{marginLeft:50}}
          width={120}
          height={85}
          src={resolvedTheme === 'dark' ? 'redmlLogo.png' : 'goldmkLogo.png'}
        />
      </div>
      <Image
              className="d-xl-none mt-2" // Masaüstünde gizle, mobilde göster
              width={70}
              height={55}

              src={resolvedTheme === 'dark' ? 'redmlLogo.png' : 'goldmkLogo.png'}
            />
      <Navbar.Offcanvas
        variant={resolvedTheme}
        data-bs-theme={resolvedTheme}
        id={`offcanvasNavbar-expand-${'xl'}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
          <Navbar.Collapse className=" d-xl-none d-flex justify-content-center">
            <Nav.Link style={{marginRight:20}} onClick={Instagram}>
              <i style={{ fontSize: 25, color:resolvedTheme==="light" ? '#2b3035' :'#f0f2f5' }} className="bi bi-instagram"></i>
            </Nav.Link>
            <Nav.Link style={{marginRight:20}} onClick={Whatsapp}>
              <i style={{ fontSize: 25, color:resolvedTheme==="light" ? '#2b3035' :'#f0f2f5' }} className="bi bi-whatsapp"></i>
            </Nav.Link>
            <Dropdown className="d-none d-xl-block">
              <Dropdown.Toggle variant={!theme}>
                {resolvedTheme === 'dark' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun"></i>}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setTheme('system')}>
                  <i className="bi bi-circle-half"></i> System
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme('dark')}>
                  <i className="bi bi-moon-fill"></i> Dark
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme('light')}>
                  <i className="bi bi-sun"></i> Light
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <Nav className="justify-content-start flex-grow-1 pe-3">
          <Nav.Link href="./" className={router.asPath.toString() == "/" ? classes.selected : classes.unselected}>Ana Sayfa</Nav.Link>
            <Nav.Link href="hizmetlerimiz" className={router.asPath.toString() == "/hizmetlerimiz" ? classes.selected : classes.unselected}>Hizmetlerimiz</Nav.Link>
            <Nav.Link href="uzmanlarimiz" className={router.asPath.toString() == "/uzmanlarimiz" ? classes.selected : classes.unselected}>Uzmanlarımız</Nav.Link>
            <Nav.Link href="hakkimizda" className={router.asPath.toString() == "/hakkimizda" ? classes.selected : classes.unselected}>Hakkımızda</Nav.Link>
            <Nav.Link href="iletisim" className={router.asPath.toString() == "/iletisim" ? classes.selected : classes.unselected}>İletişim</Nav.Link>
          </Nav>
          <Navbar.Collapse className="d-none d-xl-block d-flex justify-content-start">
            <Nav.Link style={{marginRight:20}} onClick={Instagram}>
              <i style={{ fontSize: 20, color:resolvedTheme==="light" ? '#2b3035' :'#f0f2f5' }} className="bi bi-instagram"></i>
            </Nav.Link>
            <Nav.Link style={{marginRight:20}} onClick={Whatsapp}>
              <i style={{ fontSize: 20, color:resolvedTheme==="light" ? '#2b3035' :'#f0f2f5' }} className="bi bi-whatsapp"></i>
            </Nav.Link>
            <Dropdown className="d-none d-xl-block">
              <Dropdown.Toggle variant={!theme}>
                {resolvedTheme === 'dark' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun"></i>}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setTheme('system')}>
                  <i className="bi bi-circle-half"></i> System
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme('dark')}>
                  <i className="bi bi-moon-fill"></i> Dark
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme('light')}>
                  <i className="bi bi-sun"></i> Light
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  
  
  );
};

export default NavbarComponent;
