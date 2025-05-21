import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import dogImg from '../../../public/hero-dog.webp'
import Image from 'next/image'

export function Hero(){
    return(
        <section className="bg-[#a55a05] text-white relative overflow-hidden" >
                <div>
                    <Image 
                        src={dogImg}
                        alt='Foto do cachorro'
                        fill
                        sizes='100vw'
                        priority
                        className='object-cover opacity-60 lg:hidden '
                    />
                    <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
                </div>
                <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                    <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className='space-y-6'>
                            <h1 className="text-5xl md:text4xl lg:text6xl font-bold leading-12"
                            data-aos="fade-down">Seu pet merece cuidado, carinho e atenção especial.</h1>
                            <p className="lg:text-lg"
                            data-aos="fade-right">Oferecemos os melhores serviços para garantir o bem-estar e a
                                felicidade do seu amigo de quatro patas.
                            </p>

                            <a href={`https://wa.me/5511123456789?text=Olá vim pelo site e gostaria de mais informações!`}
                            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md font-semibold
                            flex items-center justify-center w-fit gap-2"
                            data-aos="fade-up"><WhatsappLogo className='w-5 h-5'/>Contato via whatsapp</a>

                            <div className="mt-8">
                                <p className="text-sm mb-4" data-aos="fade-up">
                                    <b className="bg-black text-white px-2 py-1 rounded-md" >5%</b> de desconto
                                </p>
                            </div>
                        </div>
                        <div className='hidden md:block h-full relative'>
                            <Image 
                            src={dogImg}
                            alt='Foto do dog'
                            className='object-contain hover:scale-110 duration-300'
                            fill
                            sizes='(max-width: 868px) 0px, 50'
                            quality={100}
                            priority
                            />
                        </div>
                    </article>
                </div>
        </section>
    )
}