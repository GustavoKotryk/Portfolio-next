import Image from "next/image";

const fotos = [
    {id: 1, src: "/nseisefalo.jfif", alt: "Foto 1"},
    {id: 2, src: "/pansudu.jfif", alt: "Foto 2"},
    {id: 3, src: "/possofalaaligato.jpg", alt: "Foto 3"},
    {id: 4, src: "/possofalapx.jfif", alt: "Foto 4"},
    {id: 5, src: "/sosabooqfalo.jfif", alt: "Foto 5"},
];

export default function Portfolio() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Meu Portfólio</h1>
      <p className="text-lg mb-8">Confira algumas das minhas fotos favoritas:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {fotos.map((foto) => (
          <div key={foto.id} className="overflow-hidden rounded-lg shadow-mg">
            <Image
              src={foto.src}
              alt={foto.alt}
              width={400}
              height={300}
              className="w-full h-80 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
