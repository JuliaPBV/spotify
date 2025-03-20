import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-9">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Favoritas
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album com uma criança de coroa e com balão"
              />
              <strong>Anti</strong>
              <button className="w-12 h-12 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album com uma criança de coroa e com balão"
              />
              <strong>Anti</strong>
              <button className="w-12 h-12 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album com uma criança de coroa e com balão"
              />
              <strong>Anti</strong>
              <button className="w-12 h-12 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album com uma criança de coroa e com balão"
              />
              <strong>Anti</strong>
              <button className="w-12 h-12 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album com uma criança de coroa e com balão"
              />
              <strong>Anti</strong>
              <button className="w-12 h-12 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album com uma criança de coroa e com balão"
              />
              <strong>Anti</strong>
              <button className="w-12 h-12 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Top Brasil</h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/hiphop.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa do album escrita e homem fazenso show"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">L7NNON</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/hiphop.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa do album escrita e homem fazenso show"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">L7NNON</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/hiphop.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa do album escrita e homem fazenso show"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">L7NNON</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/hiphop.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa do album escrita e homem fazenso show"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">L7NNON</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/hiphop.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa do album escrita e homem fazenso show"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">L7NNON</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 botder-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/capa.jpg"
            width={56}
            height={56}
            alt="capa album homem pixando algo"
          />
          <div className="flex flex-col gap-3">
            <strong className="font-normal">Da onde eu venho</strong>
            <span className="text-xs text-zinc-400">Filipe Ret</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <Shuffle />
            <SkipBack />
            <Play />
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
}
