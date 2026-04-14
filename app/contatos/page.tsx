'use client';
import Image from "next/image";
import { useLanyard, type LanyardData } from '@/hooks/useLanyard';
import Link from "next/link";

const DISCORD_USER_ID = "367908560530571274";

type DiscordStatus = LanyardData['discord_status'];

const statusConfig: Record<DiscordStatus, { color: string; label: string }> = {
  online:  { color: 'bg-green-500',  label: 'Online' },
  dnd:     { color: 'bg-red-500',    label: 'Não perturbe' },
  idle:    { color: 'bg-yellow-500', label: 'Ausente' },
  offline: { color: 'bg-gray-500',   label: 'Offline' },
};

export default function DiscordCard() {
  const data = useLanyard(DISCORD_USER_ID);

  if (!data) return (
    <div className="bg-neutral-800 h-max w-full flex flex-col justify-center items-center gap-12">
      <p className="text-gray-400 text-sm mt-12">Carregando...</p>
    </div>
  );

  const status = statusConfig[data.discord_status];
  const activity = data.activities?.find((a) => a.type === 0);

  return (
    <div className='bg-neutral-800 h-max w-full flex flex-col justify-center items-center'>
      
      <section className='mt-12 mb-4 px-4 w-3xl animate-jump-in animate-once animate-duration-500 animate-delay-500 animate-ease-linear'>
        <h1 className="text-3xl text-orange-100 font-bold text-start ">
          Discord
        </h1>
        <p className="text-md text-orange-100 font-normal text-start mt-2 mb-4">
          Informações sobre minha atividade no Discord.
        </p>
        <div className="flex flex-col gap-4 w-3xl animate-jump-in animate-once animate-duration-300 animate-delay-1000 animate-ease-linear">
          <div className="group relative h-40 w-170 mb-8 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300">
            <div className="absolute -inset-0.5 bg-linear-to-r bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                <div className="relative m-12 rounded-full">
                  <img
                    src={`https://cdn.discordapp.com/avatars/${DISCORD_USER_ID}/${data.discord_user.avatar}.png`}
                    className="w-20 h-20 rounded-full"
                    alt="Avatar do Discord"
                  />
                  <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-neutral-800 ${status.color}`} />
                </div>
                  <div className="flex flex-col ">
                    <h3 className="text-2xl font-bold text-orange-100 ml-4">
                      {data.discord_user.global_name ?? data.discord_user.username}
                    </h3>
                    <p className="text-md text-orange-100 ml-4 mr-16 mb-4">
                      {status.label}
                    </p>
                    <div className="flex items-center gap-2 ml-4">
                      {activity && (
                        <p className="text-md text-neutral-500 font-normal">
                          {activity.name}{activity?.details ? `: ${activity.details}` : ''}
                        </p>
                      )}
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section className='py-4 px-4 w-3xl'>
        <h2 className="text-3xl text-orange-100 font-bold text-start animate-jump-in animate-once animate-duration-300 animate-delay-1200 animate-ease-linear">
          Minhas redes sociais
        </h2>
        <div className="mt-8 flex flex-wrap gap-7 w-3xl">
          <Link href='https://github.com/kakeiko' target="_blanck">
            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1400 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300  hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-black rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/contacts/2111432.png"
                      alt="Logo do Github"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      Github
                    </span>
                  </div>
              </div>
            </div>
          </Link>

          <Link href='https://www.linkedin.com/in/guilherme-dutra-55559625a/' target="_blanck">
            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1400 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300  hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-sky-700 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/contacts/linkedin-app-icon.webp"
                      alt="Logo do Linkedin"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      Linkedin
                    </span>
                  </div>
              </div>
            </div>
          </Link>

          <Link href='https://wa.me/5522988341441' target="_blanck">
            <div className="animate-jump-in animate-once animate-duration-300 animate-delay-1400 animate-ease-linear mb-2">
              <div className="group relative h-12 w-48 bg-neutral-800 flex items-center justify-start rounded-lg transition-all duration-300  hover:animate-wiggle hover:animate-infinite hover:animate-duration-1500 hover:animate-ease-in-out">
      
                <div className="absolute -inset-0.5 bg-green-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

                  <div className="relative flex items-center w-full h-full bg-neutral-800 rounded-lg">
                    <Image
                      src="/contacts/WhatsApp_icon.png"
                      alt="Logo do WhatsApp"
                      width={30}
                      height={30}
                      className="ml-4"
                    />
                    <span className="text-lg text-orange-100 ml-4 font-medium">
                      WhatsApp
                    </span>
                  </div>
              </div>
            </div>
          </Link>
        </div>     
      </section>
    </div>
  );
}