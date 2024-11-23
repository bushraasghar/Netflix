import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-black">
      <h1 className="font-bold text-2xl text-center text-red-700  pt-5 sm:text-[25px] md:text-[50px] lg:[70px] ">NETFLIX</h1>
      <div className="flex items-center justify-center min-h-screen container mx-auto pt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="rounded-xl shadow-lg bg-white">
            <div className="p-5 flex flex-col ">
              <div className="rounded overflow-hidden">
                <img src="./strangerthings.jpg"/>
              </div>
              <h5><a href="https://youtu.be/b9EkMc79ZSU?si=ajOyrjTlU5vaIPWN" className="flex justify-center items-center text-black text-2x1 md:text-3xl mt-3 bg-red-700 py-2 rounded-lg font-bold hover:bg-red-800 focus:scale-95 transition-all duration-200 ease-out">Watch Trailer</a></h5>
              <h5 className="text-lg text-center font-serif font-bold">Stranger Things</h5>
              <p className="text-lg text-center font-serif">Horror, sci-fiction, thriller</p>
            </div>
          </div>

          <div className="rounded-xl shadow-lg bg-white">
            <div className="p-5 flex flex-col ">
              <div className="rounded overflow-hidden">
                <img src="./sqgame.jpg"/>
              </div>
              <h5><a href="https://youtu.be/oqxAJKy0ii4?si=iBBKp3kXnRz8sarg" className="flex justify-center items-center text-black text-2x1 md:text-3xl mt-3 bg-red-700 py-2 rounded-lg font-bold hover:bg-red-800 focus:scale-95 transition-all duration-200 ease-out">Watch Trailer</a></h5>
              <h5 className="text-lg text-center font-bold font-serif">Squid Game</h5>
              <p className="text-lg text-center font-serif">Horror, crime, thriller</p>
            </div>
          </div>

          <div className="rounded-xl shadow-lg bg-white">
            <div className="p-5 flex flex-col ">
              <div className="rounded overflow-hidden">
                <img src="./mh1.jpg"/>
              </div>
              <h5><a href="https://youtu.be/_InqQJRqGW4?si=_S_8cOICfOZTmbX7" className="flex justify-center items-center text-black text-2x1 md:text-3xl mt-3 bg-red-700 py-2 rounded-lg font-bold hover:bg-red-800 focus:scale-95 transition-all duration-200 ease-out">Watch Trailer</a></h5>
              <h5 className="text-lg text-center font-bold font-serif">Money Heist</h5>
              <p className="text-lg text-center font-serif">suspense, crime, thriller</p>
            </div>
          </div>

          <div className="rounded-xl shadow-lg bg-white">
            <div className="p-5 flex flex-col ">
              <div className="rounded overflow-hidden">
                <img src="./the-dark-poster.jpg"/>
              </div>
              <h5><a href="https://youtu.be/ESEUoa-mz2c?si=jqbRSAnU4UI3131J" className="flex justify-center items-center text-black text-2x1 md:text-3xl mt-3 bg-red-700 py-2 rounded-lg font-bold hover:bg-red-800 focus:scale-95 transition-all duration-200 ease-out">Watch Trailer</a></h5>
              <h5 className="text-lg text-center font-bold font-serif">Dark</h5>
              <p className="text-lg text-center font-serif">Horror, sci-fiction, thriller</p>
            </div>
          </div>

          <div className="rounded-xl shadow-lg bg-white">
            <div className="p-5 flex flex-col ">
              <div className="rounded overflow-hidden">
                <img src="./dared1.jpg"/>
              </div>
              <h5><a href="https://youtu.be/n83s6NO1NE0?si=eXkYamLSnmQegsPc" className="flex justify-center items-center text-black text-2x1 md:text-3xl mt-3 bg-red-700 py-2 rounded-lg font-bold hover:bg-red-800 focus:scale-95 transition-all duration-200 ease-out">Watch Trailer</a></h5>
              <h5 className="text-lg text-center font-bold font-serif">The DareDevil</h5>
              <p className="text-lg text-center font-serif">Horror, suspense, thriller</p>
            </div>
          </div>

          <div className="rounded-xl shadow-lg bg-white">
            <div className="p-5 flex flex-col ">
              <div className="rounded overflow-hidden">
                <img src="./allofusdead.jpg"/>
              </div>
              <h5><a href="https://youtu.be/IN5TD4VRcSM?si=CCipIACBcrXKbrJx" className="flex justify-center items-center text-black text-2x1 md:text-3xl mt-3 bg-red-700 py-2 rounded-lg font-bold hover:bg-red-800 focus:scale-95 transition-all duration-200 ease-out">Watch Trailer</a></h5>
              <h5 className="text-lg text-center font-bold font-serif">All Of Us Are Dead</h5>
              <p className="text-lg text-center font-serif">Horror, sci-fiction, thriller</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
