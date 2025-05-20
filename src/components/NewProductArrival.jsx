import Each from "./utils/Each"
import { priceFormat } from "./utils/helper"
import Icon from "./utils/Icon"
const PRODUCT = [
    {
        thumbnail: "/images/hero-image.png",
        title: "Bakpia Oleh-Oleh",
        description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
        price: 50000
    },
    {
        thumbnail: "/images/product-2.png",
        title: "Bakpia Coklat 2",
        description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
        price: 50000
    },
    {
        thumbnail: "/images/product-2.png",
        title: "Bakpia Coklat 3",
        description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
        price: 100000
    }
]

const NewProductArrival = () => {

    const onCreateOrder = (product) => {
        // Request API create order
        // API/order
        console.log("Order Produk :", product);
    }

    return (
        <div id="new-product-arrival" className="justify-center bg-green-100">
            <section className="flex flex-col md:flex-row bg-green-100 mx-auto">
                <div className="bg-green-100 flex-shrink-0 text-white flex items-center justify-center p-10 w-full md:w-[415px] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-center md:text-left z-10 ml-0 md:ml-14 max-w-[80%]">
                        BARU HADIR DI KURNIA SARI
                    </h2>
                    <Icon icon="new-product-overlay" className="w-full absolute -top-5 h-[65%] hidden md:block" />
                </div>

                <div className="flex overflow-x-scroll md:max-w-[84vw] no-scrollbar bg-green-100 pb-10 md:pb-0 px-4 md:px-0">
                    <Each
                        data={PRODUCT}
                        render={product => (
                            <div style={{ backgroundImage: `url('${product.thumbnail}')` }} className={`bg-cover bg-center shadow-md flex-shrink-0 min-w-[300px] md:min-w-[342px]  min-h-[515px] md:w-auto relative`}>
                                <div className="p-4 absolute bottom-0 text-white bg-gradient-to-t from-slate-900 to-transparent">
                                    <h3 className="font-bold mb-1">{product.title}</h3>
                                    <p className="text-sm mb-4 leading-5">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm">Rp {priceFormat(product.price)}</p>
                                        <a href="#buat-pesanan" onClick={() => onCreateOrder(product)} className="text-sm bg-red-600 text-white px-3 py-1 rounded">Buat Pesanan</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </section>
        </div>
    )
}

export default NewProductArrival