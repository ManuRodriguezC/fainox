export default function Map() {

  const latitud = "5.026527681928887"
  const longitud = "-73.9850548227405"
  const redirectUrl = `https://www.google.com/maps?q=${latitud},${longitud}&z=15`;
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4744310990823!2d-73.9850548227405!3d5.026527681928887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406e2af6b1fad1%3A0xf33fbc3cd72b77f!2sCl%208%20%2337%20Local%20%23%20100%2C%20Zipaquir%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1736728271088!5m2!1ses-419!2sco"

  return (
    <div className="relative w-full h-full">
      <iframe
        src={googleMapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        title="Google Map"
      ></iframe>

      <a
        href={redirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 left-0 w-full h-full z-10"
      >
      </a>
    </div>
  );
};