import { priceFormat } from "./utils/helper"
import Icon from "./utils/Icon"

const IN_THE_TOWN = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delivery_estimate: "1 Hari",
    price: {
        from: 50000,
        to: 250000
    },
    min_order: "10pcs"
}

const OUT_OF_TOWN = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delivery_estimate: "1 Hari - 3 Hari kerja",
    warranty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
}

const Delivery = () => {
    const onShowOrderGuide = () => {
        // Go to Link of order guide
        console.log("Lihat panduan pemesanan");
    }
    const onShowHoToOrder = () => {
        // Go to Link of how to order
        console.log("Lihat cara pemesanan");
    }

    return (
        <section id="delivery" className="pb-14 pt-20 px-4 container mx-auto text-black">
            <h2 className="text-center text-2xl font-normal mb-10 block leading-normal">
                Nikmati Bakpia Kurnia Sari di Rumah Anda
            </h2>
            <div className="h-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
                <div className="flex justify-center items-center">
                    <Icon icon="motorcycle-delivery" className="w-[14rem]" />
                </div>
                <div className="border-b border-gray-200 pb-8 md:pb-12 mt-8">
                    <h2 className="font-semibold text-lg mb-3">Pesan Antar Dalam Kota</h2>
                    <p className="text-gray-500">{IN_THE_TOWN.description}</p>
                    <div className="mt-5">
                        <h3 className="text-sm font-semibold mb-1">Estimasi Waktu Pengiriman</h3>
                        <p className="text-gray-500">{IN_THE_TOWN.delivery_estimate}</p>
                        <h3 className="text-sm font-semibold mt-3 mb-1">Biaya Pengiriman</h3>
                        <p className="text-gray-500">Rp {priceFormat(IN_THE_TOWN.price.from)},- Rp {priceFormat(IN_THE_TOWN.price.to)},-</p>
                        <h3 className="text-sm font-semibold mt-3 mb-1">Minimal Pemesanan</h3>
                        <p className="text-gray-500">{IN_THE_TOWN.min_order}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
                <div className="flex justify-center items-center">
                    <Icon icon="car-delivery" className="h-[95%] md:h-[10rem] lg:h-[14rem]" />
                </div>
                <div className="mt-8">
                    <h2 className="font-semibold text-lg mb-3">Pesan Antar Luar Kota</h2>
                    <p className="text-gray-500">{OUT_OF_TOWN.description}</p>
                    <div className="mt-5">
                        <h3 className="text-sm font-semibold mb-1">Jasa Ekspedisi</h3>
                        <div className="flex gap-5 my-2">
                            <Icon icon="logo-jnt" className="h-4" />
                            <Icon icon="logo-jne" className="h-5" />
                            <Icon icon="logo-anter-aja" className="h-5" />
                        </div>

                        <h3 className="text-sm font-semibold mt-3 mb-1">Estimasi Waktu Pengiriman</h3>
                        <p className="text-gray-500">{OUT_OF_TOWN.delivery_estimate}</p>

                        <h3 className="text-sm font-semibold mt-3 mb-1">Garansi Keamanan Produk</h3>
                        <p className="text-gray-500">{OUT_OF_TOWN.warranty}</p>

                        <a href="#lihat-panduan-pemesanan" onClick={onShowOrderGuide} className="text-red mt-6 inline-block">Lihat Panduan Pengemasan Khusus</a>
                    </div>
                </div>
            </div>

            <div className="text-center flex justify-center mt-20">
                <a
                    onClick={onShowHoToOrder}
                    href="#lihat-cara-pemesanan"
                    className="items-center bg-green text-white px-4 py-2 rounded-sm text-sm gap-2 whitespace-nowrap transition-all duration-300 h-[37px] w-[173px] hover:w-[199px] group"
                >
                    <span>Lihat Cara Pemesanan</span>
                    <Icon icon="arrow" className="w-[15px] h-[15px] hidden group-hover:block" />
                </a>
            </div>
        </section>
    )
}

export default Delivery