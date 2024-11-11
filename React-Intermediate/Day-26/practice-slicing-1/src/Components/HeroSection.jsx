import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-32 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full">
        {/* Left Large Image */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x600"
            alt="Large Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
            <h2 className="text-xl font-bold">
              Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion
              Week Punya Kejutan Buat Kamu!
            </h2>
            <p className="text-sm mt-2">21 March 2024</p>
          </div>
        </div>

        {/* Right Side - Smaller Images in Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Small Image 1 */}
          <div className="relative col-span-2">
            <img
              src="https://via.placeholder.com/600x200"
              alt="Article 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-lg font-semibold">
                CPO Tokopedia Berbagi Cara Menerapkan Data-Driven Decision
                Making...
              </h3>
            </div>
          </div>
          {/* Small Image 2 */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Article 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-lg font-semibold">
                Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama
                Tokopedia
              </h3>
            </div>
          </div>

          {/* Small Image 3 */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Article 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-lg font-semibold">
                Implementasi AI di Tokopedia, dari Gudang Pintar sampai
                Sistem...
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
