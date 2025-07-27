import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      className="w-screen h-screen bg-[#fcf8f8] overflow-hidden"
      style={{
        fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
      }}
    >
      <section
        className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL5y3A6m_RgCbn9To3C-JaAk1Ur4bYHUgO4MzroRMuLyNu8W2f8ZlxlQ9iL4XZHF3Tn0UDSVdjUl72AyMF88FZGlPPODdOd2bHbhNHqSKfMKmerA7t4iVU8fObreDGcbC0P-6bYwaOmXmx6ZMP1-qLMba1mgLCYt8aL8Emn4wRPfkytEZeJTYAi8EkHLbjWIzKU0sZne9_pIxdkTirTOogzPeG4Q8i1xfm3bTXie83_CRid0uVGXf-fLxwAsNoWom2Qsxg8_C7-2Bt")',
        }}
      >
        <div className="text-center text-white space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Welcome to Gourmet Eats
          </h1>
          <h2 className="text-base md:text-lg font-normal">
            Experience the finest dining with our innovative menu and exceptional service.
          </h2>
          <div className="flex justify-center mt-6">
            <Link
              to="/menu"
              className="h-10 md:h-12 px-6 bg-[#e57f19] text-[#1b140e] rounded-xl font-bold text-sm md:text-base flex items-center justify-center"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage ;