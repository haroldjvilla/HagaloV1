// import servicios images
import Decorinox1 from "./assets/img/houses/decorinox1.jpg";
import BroncesyLaminas from "./assets/img/houses/broncesyLaminas1.jpg";
import DecorinoxVentanas from "./assets/img/houses/decorinoxVentanas.jpg";
import BroncesPlasma from "./assets/img/houses/plasma1.jpg";
import DecorinoxLogo from "./assets/img/agents/decorinoxLogo.png";
import DecorinoxLogoP from "./assets/img/houses/decorinoxlogo.jpg";
import BroncesyLaminasLogo from "./assets/img/agents/bronces-y-laminasLogo.png";
import AluminezLogo from "./assets/img/houses/aluminezLogo.jpg";
import AluminezLogo1 from "./assets/img/houses/aluminez.png";
import AluminezLg from "./assets/img/houses/20190321_111745-1.jpg";
import JaufLogo from "./assets/img/houses/jaufLogo.jpg";
import JaufLogo1 from "./assets/img/houses/Jauf LOGO.png";

// import images slider

import slider1 from "./assets/img/houses/imageSlider/WhatsApp Image 2023-01-06 at 6.17.36 PM.jpeg";
import slider2 from "./assets/img/houses/imageSlider/WhatsApp Image 2023-01-06 at 6.17.59 PM.jpeg";
import slider3 from "./assets/img/houses/imageSlider/WhatsApp Image 2023-01-06 at 6.18.20 PM.jpeg";
import slider4 from "./assets/img/houses/imageSlider/WhatsApp Image 2023-01-06 at 6.19.19 PM.jpeg";
import slider5 from "./assets/img/houses/imageSlider/WhatsApp Image 2023-01-06 at 6.19.54 PM.jpeg";

// import apartments images

// import apartments large images


export const servicesData = [
  {
    id: 1,
    type: "Profesionales",
    especialidad: "Aluminio",
    name: "Decorinox",
    description:
      "Donde fabricamos tus visiones Nuestro objetivo, cumplir y superar las instrucciones de diseño individuales de cada comprador. Nuestra meta, operar un negocio exitoso con un crecimiento constante, dedicado a mejorar el estándar de nuestros diseños en pasamanos y sistemas livianos disponibles, mientras brindamos un entorno de apoyo a todos nuestros colaboradores.",
    image: DecorinoxLogoP,
    imageLg: DecorinoxVentanas,
    imageSlider: [
      {
        url: slider1,
      },
      {
        url: slider2,
      },
      {
        url: slider3,
      },
      {
        url: slider4,
      },
      {
        url: slider5,
      },
    ],
    ciudad: "Manizales",
    address: "Calle 24 # 13 - 05 – Av. Colón",
    experiencia: "12 Años de experiencia",
    valoracion: "⭐⭐⭐⭐⭐",
    agent: {
      image: DecorinoxLogo,
      name: "Luisa García",
      phone: "(57) 3103642501",
    },
  },
  {
    id: 2,
    type: "Profesionales",
    especialidad: "Aluminio",
    name: "JAUF Construcciones S.A.S",
    description:
      "En JAUF Construcciones S.A.S nos dedicamos a la realización de ventanas y cerramientos de alta calidad en el eje cafetero.",
    image: JaufLogo,
    imageLg: "",
    ciudad: "Manizales",
    telefono: "300 4618782",
    address: "CR 29 A 20 40",
    valoracion: "⭐⭐⭐⭐⭐",
    experiencia: "2 Años de experiencia",
    agent: {
      image: JaufLogo1,
      name: "Miguel Ricardo Agudelo",
      phone: "(57) 300 4618782",
    },
  },
  {
    id: 3,
    type: "Profesionales",
    especialidad: "Aluminio",
    name: "Aluminez S.A.S",
    description:
      "Suministro e Instalación de todo lo relacionado con el Aluminio, Acero y Vidrio. ALUMINEZ S.A.S, fundada el 21 de Septiembre de 2016, cuenta con un gerente y un comercial con más de 21 años en el campo del aluminio, se creó con el objetivo de ofrecer soluciones de diseños innovadores en el suministro e instalación de Aluminio arquitectónico, dirigido a empresas de la construcción y público en general. Su estructura organizacional está conformada por 21 personas, las cuales 3 son administrativos, un auxiliar de SST y los otros 17 son operativos",
    image: AluminezLogo,
    imageLg: AluminezLg,
    ciudad: "Manizales",
    telefono: "8804044",
    address: "Carrera 18 #18-22",
    valoracion: "⭐⭐⭐⭐⭐",
    experiencia: "7 Años de experiencia",
    agent: {
      image: AluminezLogo1,
      name: "Julio Martinez",
      phone: "(57) 311 4315821",
    },
  },
];
