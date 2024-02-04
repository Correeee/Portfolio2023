import projectImg1 from '../components/screens/home/section3/assets/1.jpeg'
import projectImg2 from '../components/screens/home/section3/assets/2.jpeg'
import projectImg3 from '../components/screens/home/section3/assets/3.jpeg'
import projectImg4 from '../components/screens/home/section3/assets/4.png'
import projectImg5 from '../components/screens/home/section3/assets/5.png'
import projectImg6 from '../components/screens/home/section3/assets/6.png'
import projectImg7 from '../components/screens/home/section3/assets/7.png'
import projectImg8 from '../components/screens/home/section3/assets/8.jpeg'
import projectImg9 from '../components/screens/home/section3/assets/9.png'
import projectImg10 from '../components/screens/home/section3/assets/10.png'
import projectImg11 from '../components/screens/home/section3/assets/11.png'
import projectImg12 from '../components/screens/home/section3/assets/12.png'
import projectImg13 from '../components/screens/home/section3/assets/13.png'
import projectImg14 from '../components/screens/home/section3/assets/14.png'
import projectImg15 from '../components/screens/home/section3/assets/15.png'
import projectImg16 from '../components/screens/home/section3/assets/16.png'


const greyBackground = 'var(--color-secundary)'
const whiteBackground = 'var(--color-terciary)'

export const projectsData = [

    { id: 1, name: 'Ecommerce', category: 'React', description: 'Ecommerce de productos tecnológicos con diseño frontal intuitivo. Destaca por permitir valoraciones post-compra, favoritos, filtros por categoría y precio. Implementado con las últimas tecnologías frontend, ofrece una experiencia de usuario fluida y móvil. Esta creación resalta mi habilidad para diseñar soluciones atractivas y funcionales que mejoran la experiencia de compra en línea.', image: projectImg1, link: 'https://ecommerce-gamer.netlify.app/', backgroundColor: greyBackground },

    { id: 2, name: 'QRIDs', category: 'Javascript', description: 'Generador y Lector de Códigos QR. Diseñé una interfaz amigable para generar códigos QR y leerlos mediante la cámara. Una característica única es la opción de imprimir un PDF con el QR, creando tarjetas personalizadas.', update: 'USUARIO: prueba-developer@hotmail.com | CONTRASEÑA: prueba-developer', image: projectImg3, link: 'https://qrids.netlify.app/', backgroundColor: greyBackground },

    {
        id: 3, name: 'Netflix Clon', category: 'React', description: 'Aplicación web de streaming de películas y series que utiliza la API de TMDB para ofrecer un catálogo diverso y actualizado. La peculiaridad radica en que la API de TMDB proporciona videos de YouTube que solo son utilizables con la etiqueta iFrame, lo que significa que en lugar de reproducir la película, verás un video en su lugar. Sin embargo, si está disponible, la aplicación también ofrecerá un video de YouTube en una ventana emergente para brindar una experiencia de visualización más flexible. Esta plataforma está desarrollada con ReactJS y Firebase para una experiencia de usuario fluida y segura, y utiliza i18nreact para proporcionar traducciones en varios idiomas, haciendo que la plataforma sea accesible para audiencias globales.',
        update: 'Aún continúo trabajando en este proyecto', image: projectImg8, link: 'https://netflix-clon-correa.netlify.app/', backgroundColor: greyBackground
    },

    { id: 4, name: 'Conversor', category: 'Javascript', description: 'Conversor de divisas USD Blue a peso argentino y viceversa. Diseñé una interfaz intuitiva que permite a los usuarios ingresar montos en dólares o pesos argentinos y obtener conversiones instantáneas.', image: projectImg4, link: 'https://correeee.github.io/Conversor/', backgroundColor: whiteBackground },

    { id: 5, name: 'Website: Imagine Architecture', category: 'HTML/CSS/JS', description: 'Sitio web creado para un estudiante de arquitectura.', image: projectImg7, link: 'https://correeee.github.io/ArquitectoVenturaHerrera/', backgroundColor: whiteBackground },

    { id: 6, name: 'MercadoLibre | Precios a USD', category: 'Javascript', description: 'Extensión: conversor de precios de los productos de Mercadolibre.com.ar a USD BLUE.', image: projectImg5, link: 'https://drive.google.com/drive/folders/1oHUXHGXLh6vQ1uLm4WGb6Hr4jkD5i4Lf?usp=drive_link', backgroundColor: greyBackground },

    { id: 7, name: 'Despegar | Precios a USD', category: 'Javascript', description: 'Extensión: conversor de precios de los productos de Despegar.com.ar a USD BLUE.', image: projectImg6, link: 'https://drive.google.com/drive/folders/13UWLRCc1kI9L_Th0y8hfkUnw9FdYdhnz?usp=drive_link', backgroundColor: whiteBackground },

    { id: 8, name: 'Busta | Productos sustentables', category: 'React', description: "Este proyecto representa un equipo comprometido con la excelencia en la provisión de productos de alta calidad en las categorías de bolsas, packaging y regalos empresariales. La misión central es lograr un crecimiento sostenible, guiado por el respeto y la innovación, al mantenerse informados sobre las tendencias globales. Especializados en ofrecer soluciones para eventos empresariales y regalos, el enfoque principal es promover la conciencia ambiental a través de productos como bolsas, mantas, fundas y artículos de bazar. Con años de experiencia, el equipo opera bajo valores sólidos, dando prioridad a la comunicación efectiva y adoptando principios de economía circular. La constante búsqueda de la innovación se refleja en el acompañamiento activo a empleados, clientes y proveedores.", image: projectImg9, link: 'https://busta.com.ar/', backgroundColor: greyBackground },

    { id: 9, name: 'Tierras Urbanas | Desarrollos', category: 'Wordpress', description: "Para este proyecto, trabajé estrechamente con el equipo de Tierras Urbanas para traducir su visión y valores a una experiencia digital cautivadora. El sitio web no solo refleja la excelencia en sus proyectos, sino que también comunica la misión de la empresa de manera clara y atractiva. Diseñé y desarrollé el sitio utilizando WordPress, aprovechando sus capacidades para crear una plataforma robusta y fácil de gestionar. La navegación intuitiva, la presentación visual de proyectos destacados y la integración de contenido dinámico permiten a los visitantes explorar el impresionante portafolio de Tierras Urbanas de manera fluida y atractiva.", image: projectImg10, link: 'https://tierrasurbanas.com.ar/', backgroundColor: whiteBackground },

    { id: 10, name: 'Kitoks', category: 'Empretienda', description: "Kitoks es mucho más que una tienda de ropa en línea; es una experiencia de compra personalizada. Desarrollada con la potente plataforma Empretienda, esta tienda combina la elegancia de la moda con la funcionalidad sin fisuras. Desde su atractivo diseño hasta su interfaz intuitiva, Kitoks se destaca como un ejemplo de cómo la tecnología puede potenciar la industria de la moda.", image: projectImg11, link: 'https://kitoks.empretienda.com.ar/', backgroundColor: greyBackground },
    { id: 11, name: 'DitaCode', category: 'Wordpress', description: "Desde el desarrollo de software a medida hasta servicios de consultoría tecnológica, explorarás soluciones diseñadas para optimizar procesos y potenciar el crecimiento de tu empresa. Sitio realizado con Wordpress.", image: projectImg12, link: 'https://ditacode.com/', backgroundColor: greyBackground },
    { id: 12, name: 'Webdianoia', category: 'Wordpress', description: "Descarga de dos volúmenes de Filsofía, con pasarela de pagos. Sitio realizado con Wordpress.", image: projectImg13, link: 'https://descargas.webdianoia.com/', backgroundColor: greyBackground },
    { id: 13, name: 'Vinos LaBlue', category: 'Wordpress', description: "Ecommerce de Vinos argentinos. Sitio realizado con Wordpress.", image: projectImg14, link: 'https://lablue.com.ar/', backgroundColor: greyBackground },
    { id: 14, name: 'Elloil', category: 'Wordpress', description: "Sitio de Elloil: soluciones integrales para los sectores Industriales, Oil&Gas, Energéticos y Mineros.", image: projectImg15, link: 'https://lablue.com.ar/', backgroundColor: greyBackground },
    { id: 15, name: 'Ivan Castro', category: 'Wordpress', description: "Sitio del socio estratégico chileno Ivan Castro. Desarrollo de software a medida hasta servicios de consultoría tecnológica.", image: projectImg16, link: 'https://lablue.com.ar/', backgroundColor: greyBackground },
]