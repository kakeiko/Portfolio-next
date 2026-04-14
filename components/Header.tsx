"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="absolute top-1 w-full h-16 flex items-center justify-between px-4 bg-orange-100 rounded-b-2xl animate-fade-down animate-duration-1500 animate-ease-in-out">
            <h1 className="text-xl text-neutral-800 font-bold">Portfolio - Guilherme</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-neutral-800 font-bold hover:animate-bounce hover:animate-infinite hover:animate-ease-out inline-block">Início</Link>
                        <hr
                            className={`w-full h-1 bg-red-600 transition-transform duration-300 origin-left ${
                                pathname === "/" ? "scale-x-100" : "scale-x-0"
                            }`}
                        />
                    </li>
                    
                    <li>
                        <Link href="/projetos" className="hover:animate-bounce hover:animate-infinite hover:animate-ease-out text-neutral-800 font-bold inline-block">Projetos</Link>
                        <hr
                            className={`w-full h-1 bg-red-600 transition-transform duration-300 origin-left ${
                                pathname === "/projetos" ? "scale-x-100" : "scale-x-0"
                            }`}
                        />    
                    </li>

                    <li>
                        <Link href="/educacao" className="text-neutral-800 font-bold hover:animate-bounce hover:animate-infinite hover:animate-ease-out inline-block">Educação</Link>
                        <hr
                            className={`w-full h-1 bg-red-600 transition-transform duration-300 origin-left ${
                                pathname === "/educacao" ? "scale-x-100" : "scale-x-0"
                            }`}
                        />
                    </li>

                    <li>
                        <Link href="/contatos" className="text-neutral-800 font-bold hover:animate-bounce hover:animate-infinite hover:animate-ease-out inline-block">Contatos</Link>
                        <hr
                            className={`w-full h-1 bg-red-600 transition-transform duration-300 origin-left ${
                                pathname === "/contatos" ? "scale-x-100" : "scale-x-0"
                            }`}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
}