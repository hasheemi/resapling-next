import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import TabSection from "@/app/campaign/charity/TabSection";

interface PageProps {
  params: { name: string };
}

export default function Page({ params }: PageProps) {
  const { name } = params;

  return (
    <main className="bg-leaf-50">
      <Navbar />
      <section className="px-6 sm:px-12 flex flex-row w-full min-h-screen">
        <div className="left w-[70%] pb-24">
          <Jumbotron
            imageUrl="/assets/img/item/gemarsorong.jpg"
            title=""
            height="md:h-[60vh]"
            padding="!px-0"
          />

          <TabSection />
        </div>
        <div className="right w-[30%]">
          <div className="main w-[90%] mx-auto min-h-[40vh] bg-[#f7fcf7] my-4 sm:my-8 shadow-lg shadow-green-100/30 border border-green-50 rounded-lg p-6">
            {/* <!-- Progress Section --> */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-green-800 mb-2">
                Dana Terkumpul
              </h2>
              <div className="text-2xl font-bold text-green-700">
                Rp 270.266.246
              </div>
              <div className="text-sm text-gray-600">
                dari target Rp 500.000.000
              </div>

              {/* <!-- Progress Bar --> */}
              <div className="w-full bg-green-200 rounded-full h-2.5 mt-3">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "54%" }}
                ></div>
              </div>

              {/* <!-- Stats --> */}
              <div className="flex justify-between mt-4 text-center">
                <div>
                  <div className="text-xl font-bold text-green-700">536</div>
                  <div className="text-xs text-gray-600">Donasi</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-700">12</div>
                  <div className="text-xs text-gray-600">Bagikan</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-700">50</div>
                  <div className="text-xs text-gray-600">hari lagi</div>
                </div>
              </div>
            </div>

            {/* <!-- Action Buttons --> */}
            <div className="flex flex-col gap-3 mb-6">
              <button className="flex-1 !bg-leaf-700 hover:bg-green-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                <span>Donasi</span>
                <span>😊</span>
              </button>
              <button className="flex-1 bg-white border border-green-600 text-green-700 hover:bg-green-50 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                <span>Bagikan</span>
                <span>🌬</span>
              </button>
            </div>

            {/* <!-- Foundation Info --> */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  H
                </div>
                <h3 className="font-semibold text-green-800">
                  Heka Leka Foundation 😊
                </h3>
              </div>
              <button className="text-green-700 text-sm font-medium flex items-center gap-1">
                Rincian Penggunaan Dana
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Recent Donation --> */}
            <div>
              <h3 className="font-semibold text-green-800 mb-3">Donasi</h3>
              <div className="p-4 bg-white rounded-lg border border-green-100 shadow-sm">
                <div className="text-lg font-bold text-green-700">
                  Rp 1.000.000
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  oleh PT Pelita Teknologi Bangsa • 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
