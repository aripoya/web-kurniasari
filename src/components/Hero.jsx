import Icon from "./utils/Icon"

const Hero = () => {

    const onShowProduct = () => {
        console.log("Lihat Produk");
    }

    return (
        <div className="container mx-auto px-4 xl:px-0 pt-10">
            <section className="bg-green-100 rounded-xl h-[420px] md:h-[485px] relative overflow-hidden text-white">
                <div className="absolute h-full top-0">
                    <div className="flex gap-6 justify-center items-center md:items-start h-full flex-col px-[51px] max-w-full md:max-w-[65%] text-center md:text-left py-4">
                        <h1 className="text-[32px] md:text-[3em] font-bold text-wrap text-shadow-md">
                            <span className="text-green">Bakpia Kekinian</span>, Cita Rasa Asli Jogja
                        </h1>
                        <p className="leading-7">Nikmati kelezatan bakpia premium dengan berbagai varian rasa yang unik dan menggugah selera</p>

                        <a
                            href="#lihat-produk"
                            className="inline-flex items-center bg-green text-white px-4 py-2 rounded-sm text-sm gap-2 whitespace-nowrap transition-all duration-300 h-[37px] w-[111px] hover:w-[135px] group"
                            onClick={onShowProduct}
                        >
                            <span>Lihat Produk</span>
                            <Icon icon="arrow" className="w-[15px] h-[15px] hidden group-hover:block" />
                        </a>
                    </div>
                </div>

                <div className="bg-[url('./images/hero-image.png')] bg-cover bg-center w-[45%] clip-hero h-full -right-1 absolute hidden md:block"></div>

                <Icon icon="hero-overlay" className="w-full h-[80%]" />
            </section>
        </div>
    )
}

export default Hero