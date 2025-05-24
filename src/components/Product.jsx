import { useState } from "react";
import Each from "./utils/Each";
import { priceFormat } from "./utils/helper";
import Icon from "./utils/Icon";
import { useEffect } from "react";
import Button from "./utils/Button";

const PRODUCT_CATEGORIES = [
    {
        label: "Bakpia Premium",
        value: "bakpia-premium"
    },
    {
        label: "Bakpia Spesial",
        value: "bakpia-spesial"
    },
    {
        label: "Bakpia Klasik",
        value: "bakpia-klasik"
    },
    {
        label: "Paket Oleh-oleh",
        value: "paket-oleh-oleh"
    },
]

const PRODUCT = {
    "bakpia-premium": [
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
    ],
    "bakpia-spesial": [
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat Spesial",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        }
    ],
    "bakpia-klasik": [
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat Klasik",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        }
    ],
    "paket-oleh-oleh": [
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Oleh-Oleh",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        },
        {
            thumbnail: "./images/hero-image.png",
            title: "Bakpia Coklat",
            description: "Bakpia dengan isian kacang hijau pilihan yang legit dan manis.",
            price: 50000
        }
    ]
}

const Product = () => {

    const [productData, setProductData] = useState([])
    const [selectedProductCategory, setSelectedProductCategory] = useState({
        label: "Bakpia Premium",
        value: "bakpia-premium"
    })

    const onShowAllProduct = () => {
        // Request to API for get all product
        // API/products/?show=all
        // Set response to state : setSelectedProductCategory
        console.log("Lihat Semua Produk");
    }

    const onCreateOrder = (product) => {
        // Request API create order
        // API/order
        console.log("Order Produk :", product);
    }

    const onSelectProductCategory = (productCategory) => {
        setSelectedProductCategory(productCategory)
        console.log("Selected Product Category :", productCategory);
    }

    useEffect(() => {
        // Request API Here filter by product category
        // API/products/?cat=bakpia-premium&show=6
        setProductData(PRODUCT[selectedProductCategory.value])
    }, [selectedProductCategory])

    return (
        <section id="produk" className="py-12 container mx-auto">
            <h2 className="text-center text-2xl font-normal mb-8 text-black">Varian Bakpia Kami</h2>

            <div className="md:flex md:justify-center overflow-x-scroll no-scrollbar h-12 font-normal pl-4">
                <nav className="text-sm whitespace-nowrap">
                    {
                        <Each
                            data={PRODUCT_CATEGORIES}
                            render={category => {
                                const selected = category.value === selectedProductCategory.value ? "text-green border-green" : "text-black border-transparent"
                                return <a href={`#${category.value}`} onClick={() => onSelectProductCategory(category)} className={`${selected} hover:text-green hover:border-green border-b-2  pb-1.5 transition-colors text-md duration-150 mr-5`}>{category.label}</a>
                            }}
                        />
                    }
                </nav>
            </div>

            <div className="flex gap-7 mt-4 overflow-x-auto no-scrollbar xl:justify-center xl:flex-wrap">
                <Each
                    data={productData}
                    render={product => (
                        <div className="product-item overflow-hidden mb-6 min-w-[295px] max-w-[295px] flex-shrink-0">
                            <img src={product.thumbnail} alt="Bakpia Coklat" className="w-full h-40 object-cover rounded-lg" />
                            <div className="pt-4">
                                <h3 className="font-normal mb-2 text-black">{product.title}</h3>
                                <p className="text-sm text-gray-600 mb-5 leading-5">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-black font-semibold">Rp {priceFormat(product.price)}</p>
                                    <a href="#buat-pesanan" onClick={() => onCreateOrder(product)} className="text-md text-red-600 inline-block">Buat Pesanan</a>
                                </div>
                            </div>
                        </div>
                    )}
                />

            </div>

            <div className="text-center flex justify-center mt-10">
                <Button
                    href={"#lihat-semua-produk"}
                    className="inline-flex items-center bg-green text-white"
                    onClick={onShowAllProduct}
                >
                    Lihat Semua Produk
                </Button>
            </div>
        </section>
    )
}

export default Product