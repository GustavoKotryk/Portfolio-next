import Image from "next/image";

export default function Sobre() {
    return(
        <div>
            <h1 className="text-3x1 font-bold mb-4">Sobre mim</h1>
            <p className="text-lg mb-2">
                Sou fotógrafo há 25 anos
            </p>
            <p className="text-lg mb-2">
                Meu estilo é fotografia. Gosto de tirar fotos
            </p>
            <Image src="/pansudu.jfif" alt="pansudu"
            width={200}
            height={200}/>

            <h2 className="text-2x1 font-semibold mt-6 mb-2">Equipamento</h2>
            <ul className="list-disc list-inside">
                <li>Câmera: De foto</li>
                <li>Lente: 50mm f</li>
                <li>Editor: Lightroom</li>
            </ul>

            <h2>Contato</h2>
            <p>Email: fotografo@gmail.components</p>
        </div>
    );
}