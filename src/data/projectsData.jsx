import projectImg1 from '../components/screens/home/section3/assets/1.jpeg'
import projectImg2 from '../components/screens/home/section3/assets/2.jpeg'
import projectImg3 from '../components/screens/home/section3/assets/3.jpeg'
import projectImg4 from '../components/screens/home/section3/assets/4.png'
import projectImg5 from '../components/screens/home/section3/assets/5.png'
import projectImg6 from '../components/screens/home/section3/assets/6.png'
import projectImg7 from '../components/screens/home/section3/assets/7.png'
import projectImg8 from '../components/screens/home/section3/assets/8.jpeg'


const greyBackground = 'var(--color-secundary)'
const whiteBackground = 'var(--color-terciary)'

export const projectsData = [

    { id: 1, name: 'Ecommerce', category: 'React', description: 'Ecommerce de productos tecnológicos con diseño frontal intuitivo. Destaca por permitir valoraciones post-compra, favoritos, filtros por categoría y precio. Implementado con las últimas tecnologías frontend, ofrece una experiencia de usuario fluida y móvil. Esta creación resalta mi habilidad para diseñar soluciones atractivas y funcionales que mejoran la experiencia de compra en línea.', image: projectImg1, link: 'https://ecommerce-gamer.netlify.app/', backgroundColor: greyBackground },

    { id: 2, name: 'QRIDs', category: 'Javascript', description: 'Generador y Lector de Códigos QR. Diseñé una interfaz amigable para generar códigos QR y leerlos mediante la cámara. Una característica única es la opción de imprimir un PDF con el QR, creando tarjetas personalizadas.', update: 'USUARIO: prueba-developer@hotmail.com | CONTRASEÑA: prueba-developer', image: projectImg3, link: 'https://qrids.netlify.app/', backgroundColor: greyBackground },

    { id: 3, name: 'Netflix Clon', category: 'React', description: 'Aplicación web de streaming de películas y series que utiliza la API de TMDB para ofrecer un catálogo diverso y actualizado. La peculiaridad radica en que la API de TMDB proporciona videos de YouTube que solo son utilizables con la etiqueta iFrame, lo que significa que en lugar de reproducir la película, verás un video en su lugar. Sin embargo, si está disponible, la aplicación también ofrecerá un video de YouTube en una ventana emergente para brindar una experiencia de visualización más flexible. Esta plataforma está desarrollada con ReactJS y Firebase para una experiencia de usuario fluida y segura, y utiliza i18nreact para proporcionar traducciones en varios idiomas, haciendo que la plataforma sea accesible para audiencias globales.',
    update: 'Aún continúo trabajando en este proyecto', image: projectImg8, link: 'https://netflix-clon-correa.netlify.app/', backgroundColor: greyBackground },

    { id: 4, name: 'Conversor', category: 'Javascript', description: 'Conversor de divisas USD Blue a peso argentino y viceversa. Diseñé una interfaz intuitiva que permite a los usuarios ingresar montos en dólares o pesos argentinos y obtener conversiones instantáneas.', image: projectImg4, link: 'https://correeee.github.io/Conversor/', backgroundColor: whiteBackground },

    { id: 5, name: 'Website: Imagine Architecture', category: 'HTML/CSS/JS', description: 'Sitio web creado para un estudiante de arquitectura.', image: projectImg7, link: 'https://correeee.github.io/ArquitectoVenturaHerrera/', backgroundColor: whiteBackground },

    { id: 6, name: 'MercadoLibre | Precios a USD', category: 'Javascript', description: 'Extensión: conversor de precios de los productos de Mercadolibre.com.ar a USD BLUE.', image: projectImg5, link: 'https://drive.google.com/drive/folders/1oHUXHGXLh6vQ1uLm4WGb6Hr4jkD5i4Lf?usp=drive_link', backgroundColor: greyBackground },

    { id: 7, name: 'Despegar | Precios a USD', category: 'Javascript', description: 'Extensión: conversor de precios de los productos de Despegar.com.ar a USD BLUE.', image: projectImg6, link: 'https://drive.google.com/drive/folders/13UWLRCc1kI9L_Th0y8hfkUnw9FdYdhnz?usp=drive_link', backgroundColor: whiteBackground }

]