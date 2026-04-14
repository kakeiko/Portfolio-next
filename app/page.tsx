import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-neutral-800 h-max w-full flex flex-col justify-center items-center gap-6">
      <section className='py-12 px-4 w-3xl animate-jump-in animate-once animate-duration-500 animate-delay-500 animate-ease-linear'
      >
        <h1 className="text-3xl text-orange-100 font-bold text-start">
          Bem vindo, Me chamo Guilherme
        </h1>
        <p className="text-lg text-orange-100 text-start mt-4">
          Sou um Desenvolvedor Back-End em formação e acadêmico de Engenharia de Software, com paixão por construir soluções robustas utilizando Python, Django e PostgreSQL. Possuo experiência prática em projetos pessoais focados em APIs REST, arquitetura de sistemas e automações, demonstrando habilidades em CRUD, controle de permissões e deploy de aplicações.
        </p>
      </section>

      <section className='py-4 px-4 w-3xl'>
          <h2 className="text-3xl text-orange-100 font-bold text-start animate-jump-in animate-once animate-duration-300 animate-delay-1000 animate-ease-linear">
            Minhas Tecnologias e ferramentas
          </h2>
          <div className="mt-8 flex flex-wrap gap-7 w-3xl">

            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1200 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300  hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r from-[#3776AB] to-[#FFD43B] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/Python-logo-notext.svg.png"
                      alt="Logo do Python"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      Python
                    </span>
                  </div>
              </div>
            </div>

            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1250 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300  hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-emerald-900 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/django-icon.svg"
                      alt="Logo do Django"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      Django
                    </span>
                  </div>
              </div>
            </div>

            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1300 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-sky-700 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/Postgresql_elephant.svg.png"
                      alt="Logo do PostgreSQL"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      PostgreSQL
                    </span>
                  </div>
              </div>
            </div>

            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1350 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-yellow-300 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/js-icon-transparent-background-free-png.webp"
                      alt="Logo do JavaScript"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      JavaScript
                    </span>
                  </div>
              </div>
            </div>

            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1400 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-neutral-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/nextjs.png"
                      alt="Logo do Next.Js"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      Next.Js
                    </span>
                  </div>
              </div>
            </div>

            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1450 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-violet-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/Csharp_Logo.png"
                      alt="Logo do C#"
                      width={33}
                      height={33}

                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      C#
                    </span>
                  </div>
              </div>
            </div>
            
            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1500 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-rose-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/n8n-color.png"
                      alt="Logo do N8N"
                      width={33}
                      height={33}

                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      N8N
                    </span>
                  </div>
              </div>
            </div>
            
            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1550 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-red-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/java-programming-language-logo-transparent-o1g0nwlhyeu1en7s-o1g0nwlhyeu1en7s.webp"
                      alt="Logo do Java"
                      width={33}
                      height={33}

                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      Java
                    </span>
                  </div>
              </div>
            </div>
            
            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1600 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-linear-to-r bg-cyan-700 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/home/5968313.png"
                      alt="Logo do MySQL"
                      width={33}
                      height={33}

                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      MySQL
                    </span>
                  </div>
              </div>
            </div>

          </div>
      </section>
      
      <section className='py-4 px-4 w-3xl mb-20'>
        <h2 className="text-3xl text-orange-100 font-bold text-start animate-jump-in animate-once animate-duration-300 animate-delay-2000 animate-ease-linear">
          Meu Último Projeto
        </h2>
        <Link href="https://github.com/kakeiko/ControlPlay" target="_blank">
          <div className="mt-8 flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-2300 animate-ease-linear">
            <div className="group relative h-48 w-170 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-in">
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
      </section>
    </div> 
  );
}