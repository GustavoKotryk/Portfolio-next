import Image from "next/image";
import foto from '../public/oi-posso-falar.png'

export default function Inicio(){
    return(
        <div className="text-center">
            <h1 className="text-3x1 font-bold mb-4"> Olá, bem vindo ao meu portfólio</h1>
            <div className="flex justify-center mb-6">
                <Image
                src={foto}
                alt="Foto"
                width={200}
                height={200}
                className="rounded-full"
                priority
                />
            </div>
            <p className="text-lg">Fotógrafo profissional em registrar momentos.</p>
        </div>
    );
}

