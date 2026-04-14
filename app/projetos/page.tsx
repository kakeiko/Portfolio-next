import Image from "next/image";
import Link from "next/link";
export default function Project() {
  return (
    <div className="bg-neutral-800 h-max w-full flex flex-col justify-center items-center">
      <section className='mt-12 mb-4 px-4 w-3xl animate-jump-in animate-once animate-duration-500 animate-delay-500 animate-ease-linear'>
        <h1 className="text-3xl text-orange-100 font-bold text-start">
          Meu Projetos
        </h1>
        <p className="text-md text-orange-100 font-normal text-start mt-2">
          Os projetos que eu desenvolvi ou participei.
        </p>
      </section>
      
      <section className='py-4 px-4 w-3xl'>
        <Link href="https://github.com/kakeiko/ControlPlay" target="_blank">
          <div className="flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-1000 animate-ease-linear">
            <div className="group relative h-48 w-170 mb-8 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-in">
              <div className="absolute -inset-0.5 bg-linear-to-r bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                  <Image
                    src="/home/2331846.png"
                    alt="Logo do ControlPlay"
                    width={80}
                    height={80}
                    className="ml-10 mb-20 hover:animate-rotate-y"
                  />
                    <div className="flex flex-col ">
                      <h3 className="text-2xl font-bold text-orange-100 ml-4 mb-4">
                        ControlPlay
                      </h3>
                      <p className="text-md text-orange-100 ml-4 mr-16 mb-4">
                        sistema web para controle e gerenciamento de tempo de uso por dispositivo
                      </p>
                      <div className="flex items-center gap-2 ml-4">
                        <p className="text-md text-orange-100 font-bold">Tecnologias:</p>
                        <Image
                          src="/home/django-icon.svg"
                          alt="Logo do Django"
                          width={25}
                          height={25}
                        />
                        <Image
                          src="/home/Postgresql_elephant.svg.png"
                          alt="Logo do PostgreSQL"
                          width={25}
                          height={25}
                        />
                        <Image
                          src="/home/Celery_logo.png"
                          alt="Logo do Celery"
                          width={25}
                          height={25}
                        />
                        <Image
                          src="/home/redis_original_wordmark_logo_icon_146369.webp"
                          alt="Logo do Redis"
                          width={25}
                          height={25}
                        />
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/kakeiko/API_torneios" target="_blank">
          <div className="flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-1100 animate-ease-linear">
            <div className="group relative h-48 w-170 mb-8 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-in">
              <div className="absolute -inset-0.5 bg-linear-to-r bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                  <Image
                    src="/project/Logo.png"
                    alt="Logo do TTG"
                    width={80}
                    height={80}
                    className="ml-10 mb-20 hover:animate-rotate-y"
                  />
                    <div className="flex flex-col ">
                      <h3 className="text-2xl font-bold text-orange-100 ml-4 mb-4">
                        TTG
                      </h3>
                      <p className="text-md text-orange-100 ml-4 mr-16 mb-4">
                        sistema web para organização, criação e administração de torneios de jogos eletrônicos, com foco em jogos de luta.
                      </p>
                      <div className="flex items-center gap-2 ml-4">
                        <p className="text-md text-orange-100 font-bold">Tecnologias:</p>
                        <Image
                          src="/home/django-icon.svg"
                          alt="Logo do Django"
                          width={25}
                          height={25}
                        />
                        <Image
                          src="/home/Postgresql_elephant.svg.png"
                          alt="Logo do PostgreSQL"
                          width={25}
                          height={25}
                        />
                        <Image
                          src="/home/Celery_logo.png"
                          alt="Logo do Celery"
                          width={25}
                          height={25}
                        />
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/kakeiko/Case_AutoU" target="_blank">
          <div className="flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-1200 animate-ease-linear">
            <div className="group relative h-48 w-170 mb-8 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-in">
              <div className="absolute -inset-0.5 bg-linear-to-r bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                  <Image
                    src="/project/8d338f5acd60bfbc9b5fb1b208c8814f-icone-de-e-mail-com-contorno.webp"
                    alt="Logo do case"
                    width={80}
                    height={80}
                    className="ml-10 mb-20 hover:animate-rotate-y"
                  />
                    <div className="flex flex-col ">
                      <h3 className="text-2xl font-bold text-orange-100 ml-4 mb-4">
                        Sistema de automação de leitura e classificação de e-mails
                      </h3>
                      <p className="text-md text-orange-100 ml-4 mr-16 mb-4">
                        sistema web para automação de leitura e classificação de e-mails e sugestão de respostas.
                      </p>
                      <div className="flex items-center gap-2 ml-4">
                        <p className="text-md text-orange-100 font-bold">Tecnologias:</p>
                        <Image
                          src="/home/django-icon.svg"
                          alt="Logo do Django"
                          width={25}
                          height={25}
                        />
                        <Image
                          src="/home/Postgresql_elephant.svg.png"
                          alt="Logo do PostgreSQL"
                          width={25}
                          height={25}
                        />
                        <Image
                          src="/home/n8n-color.png"
                          alt="Logo do n8n"
                          width={25}
                          height={25}
                        />
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}