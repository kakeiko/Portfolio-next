import Image from "next/image";

export default function Education() {
  return (
    <div className="bg-neutral-800 h-max w-full flex flex-col justify-center items-center">
      <section className='mt-12 mb-4 px-4 w-3xl animate-jump-in animate-once animate-duration-500 animate-delay-500 animate-ease-linear'>
        <h1 className="text-3xl text-orange-100 font-bold text-start">
          Minha Educação
        </h1>
        <p className="text-md text-orange-100 font-normal text-start mt-2">
          Informações sobre minha formação acadêmica.
        </p>
      </section>

      <section className='py-4 px-4 w-3xl'>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-orange-100 font-bold text-start animate-jump-in animate-once animate-duration-300 animate-delay-1000 animate-ease-linear'">
            Faculdade:
          </h2>
          <div className="flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-1200 animate-ease-linear">
            <div className="group relative h-48 w-170 mb-8 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-in">
              <div className="absolute -inset-0.5 bg-linear-to-r bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                  <Image
                    src="/education/estacio-logo-1.png"
                    alt="Logo do Estacio"
                    width={100}
                    height={100}
                    className="ml-8 mr-5 hover:animate-rotate-y"
                  />
                    <div className="flex flex-col ">
                      <h3 className="text-2xl font-bold text-orange-100 ml-4 mb-4">
                        Estácio
                      </h3>
                      <p className="text-md text-orange-100 ml-4 mr-16 mb-4">
                        Engenharia de Software
                      </p>
                      <div className="flex items-center gap-2 ml-4">
                        <p className="text-md text-neutral-500 font-normal">Janeiro/2025 - Dezembro/2029</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4 px-4 w-3xl'>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-orange-100 font-bold text-start animate-jump-in animate-once animate-duration-300 animate-delay-1300 animate-ease-linear'">
            Cursos:
          </h2>

          <div className="flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-1400 animate-ease-linear">
            <div className="group relative h-48 w-170 mb-8 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-in">
              <div className="absolute -inset-0.5 bg-linear-to-r bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                  <Image
                    src="/education/images.jpg"
                    alt="Logo do Alura"
                    width={100}
                    height={100}
                    className="ml-8 mr-5 hover:animate-rotate-y"
                  />
                    <div className="flex flex-col ">
                      <h3 className="text-2xl font-bold text-orange-100 ml-4 mb-4">
                        Alura
                      </h3>
                      <p className="text-md text-orange-100 ml-4 mr-16 mb-4">
                        IA, Back-end, Frontend, DevOps e muito mais.
                      </p>
                      <div className="flex items-center gap-2 ml-4">
                        <p className="text-md text-neutral-500 font-normal">março/2024 - março/2025</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-1500 animate-ease-linear">
            <div className="group relative h-48 w-170 mb-8 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300 hover:animate-jump hover:animate-once hover:animate-duration-1000 hover:animate-ease-in">
              <div className="absolute -inset-0.5 bg-linear-to-r bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                  <Image
                    src="/education/Logo-Google-G.png"
                    alt="Logo do Google"
                    width={100}
                    height={100}
                    className="ml-8 mr-5 hover:animate-rotate-y"
                  />
                    <div className="flex flex-col ">
                      <h3 className="text-2xl font-bold text-orange-100 ml-4 mb-4">
                        Cybersecurity - Google
                      </h3>
                      <p className="text-md text-orange-100 ml-4 mr-16 mb-4">
                        Ciber segurança
                      </p>
                      <div className="flex items-center gap-2 ml-4">
                        <p className="text-md text-neutral-500 font-normal">março/2025 - maio/2025</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}