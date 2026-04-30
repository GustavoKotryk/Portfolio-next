import Image from "next/image";

export default function Sobre() {
    return(
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold mb-4">Sobre mim</h1>
            <div className="flex flex-col md:flex-row gap-8 itens-center">
                <Image src="/pansudu.jfif" alt="pansudu" width={200} height={200} />
            <p className="text-lg">
                Sou fotógrafo há 25 anos. Meu estilo é fotografia. Gosto de tirar fotos
            </p>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Equipamento</h2>
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