import Image from "next/image";
import foto from '../public/oi-posso-falar.png'

export default function Inicio(){
    return(
        <div className="text-center min-h-[80vh] flex flex-col itens-center justify-center">
            <h1 className="text-3xl font-bold mb-4"> Olá, bem vindo ao meu portfólio</h1>
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
            <p className="text-lg">Fotógrafo profissional em registrar cachorrinhos.</p>
        </div>
    );
}

