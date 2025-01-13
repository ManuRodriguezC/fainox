interface Location {
  latitud?: string,
  longitud?: string,
  googleMapsUrl: string,
}

export default function Map({ googleMapsUrl, longitud, latitud }: Location) {

  const redirectUrl = `https://www.google.com/maps?q=${latitud},${longitud}&z=15`;

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