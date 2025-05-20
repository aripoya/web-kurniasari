import { useRef } from "react";
import Icon from "./utils/Icon";
import { useEffect } from "react";

const WHATSAPP_OUT_OF_TOWN = "620928282" // Please start with country code number
const WHATSAPP_IN_THE_TOWN = "6209282822323" // Please start with country code number

const SOCIAL = {
    phone: {
        label: "0274-0233424",
        value: "#"
    },
    email: {
        label: "bakpiakurniasari@gmail.com",
        value: "mailto:bakpiakurniasari@email.com"
    },
    whatsapp: {
        label: "08223346678",
        value: "https://wa.me/08223346678"
    },
    instagram: {
        label: "@bakpiakurniasari",
        value: "https://instagram.com/bakpiakurniasari.official"
    },
    facebook: {
        label: "Bakpia Kurniasari",
        value: "https://facebook.com/bakpiakurniasari"
    },
    tiktok: {
        label: "@bakpiakurniasari",
        value: "https://www.tiktok.com/search?q=bakpia%20kurnia%20sari%20jogja&t=1747749187095"
    }
}

const Footer = () => {
    const whatsappServiceRef = useRef(null)
    const whatsappServiceWrapRef = useRef(null)

    const onToggleWhatsappService = () => {
        const ref = whatsappServiceRef.current;
        const isVisible = ref.classList.contains("fade-in");

        ref.classList.toggle("fade-in", !isVisible);
        ref.classList.toggle("fade-out", isVisible);
    }

    const onSubscribeHandler = () => {
        console.log("Subscribe Email");
    }


    useEffect(() => {
        const onOutsideClick = (ev) => {
            const wSWref = whatsappServiceWrapRef.current;
            const wSref = whatsappServiceRef.current;

            if (!wSWref?.contains(ev.target)) {
                wSref.classList.toggle("fade-in", false);
                wSref.classList.toggle("fade-out", true);
            }
        }

        document.addEventListener("mousedown", onOutsideClick)
        return () => {
            document.removeEventListener("mousedown", onOutsideClick)
        }

    }, [])

    return (
        <footer id="kontak" className="bg-green-100 text-white pt-8 relative">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                <div className="px-6 mb-4">
                    <h3 className="font-semibold mb-4">Hubungi Kami</h3>
                    <ul className="space-y-3">
                        <li className="grid grid-cols-[30px_auto] items-center" target="_blank">
                            <Icon icon="footer-phone" />
                            <a href={SOCIAL.phone.value}>{SOCIAL.phone.label}</a>
                        </li>
                        <li className="grid grid-cols-[30px_auto] items-center" target="_blank">
                            <Icon icon="footer-email" />
                            <a href={SOCIAL.email.value} target="__blank" >{SOCIAL.email.label}</a>
                        </li>
                        <li className="grid grid-cols-[30px_auto] items-center" target="_blank">
                            <Icon icon="footer-whatsapp" />
                            <a href={SOCIAL.whatsapp.value} target="__blank" >{SOCIAL.whatsapp.label}</a>
                        </li>
                    </ul>
                </div>
                <div className="text-md mb-4 px-6">
                    <h3 className="font-semibold mb-4">Ikuti Kami</h3>
                    <ul className="space-y-3">
                        <li className="grid grid-cols-[30px_auto] items-center" target="_blank">
                            <Icon icon="footer-instagram" />
                            <a href={SOCIAL.instagram.value} target="__blank" >{SOCIAL.instagram.label}</a>
                        </li>
                        <li className="grid grid-cols-[30px_auto] items-center" target="_blank">
                            <Icon icon="footer-facebook" />
                            <a href={SOCIAL.facebook.value} target="__blank" >{SOCIAL.facebook.label}</a>
                        </li>
                        <li className="grid grid-cols-[30px_auto] items-center" target="_blank">
                            <Icon icon="footer-tiktok" />
                            <a href={SOCIAL.tiktok.value} target="__blank" >{SOCIAL.tiktok.label}</a>
                        </li>
                    </ul>
                </div>
                <div className="px-6 mb-4">
                    <h3 className="font-semibold mb-3">Subscribe Newsletter</h3>
                    <form className="flex relative" onSubmit={onSubscribeHandler}>
                        <input type="email" placeholder="email@example.com" className="w-full px-2 py-2 text-gray-900 bg-white rounded-l-md text-sm" />
                        <button type="submit" className="flex bg-red-600 px-4 py-1 rounded-r-md  text-sm gap-3 text-nowrap items-center">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-brown mt-6 h-[64px] flex justify-center items-center">
                <p className="text-center text-sm">© {(new Date()).getFullYear()} - Kurnia Sari</p>
            </div>
            <div
                ref={whatsappServiceWrapRef}
                onClick={onToggleWhatsappService}
                className="fixed bottom-5 md:bottom-10 right-3 md:right-8 rounded-full w-[52px] h-[52px] bg-[#25D366] flex justify-center items-center border-4 border-white shadow-lg z-50 cursor-pointer">

                <div ref={whatsappServiceRef} className="fade-out bg-white border-1 border-gray-300 rounded-md absolute w-50 p-3 text-black text-sm -right-1 bottom-14">
                    <h3 className="font-semibold mb-4">Layanan Whatsapp</h3>
                    <ul className="space-y-3">
                        <li className="grid grid-cols-[25px_auto]  hover:text-green transition-all duration-150">
                            <Icon icon="delivery-moto" />
                            <a href={`https://wa.me/${WHATSAPP_IN_THE_TOWN}`} target="__blank">Pesanan Dalam Kota</a>
                        </li>
                        <li className="grid grid-cols-[25px_auto] hover:text-green transition-all duration-">
                            <Icon icon="delivery-car" />
                            <a href={`https://wa.me/${WHATSAPP_OUT_OF_TOWN}`} target="__blank">Pesanan Luar Kota</a>
                        </li>
                    </ul>
                </div>

                <Icon icon="footer-whatsapp" className="w-[30px] h-[30px]" />
            </div>
        </footer>
    )
}

export default Footer