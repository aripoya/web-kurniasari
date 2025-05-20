
import { useRef } from "react";
import Icon from "./utils/Icon";
import Each from "./utils/Each";
import { scrollToId } from "./utils/helper";

const MENUS = [
    {
        url: "produk",
        link: "Produk"
    },
    {
        url: "lokasi",
        link: "Lokasi"
    },
    {
        url: "pemesanan",
        link: "Pemesanan"
    },
    {
        url: "kontak",
        link: "Kontak"
    },
]

const Header = () => {

    const btnMenuRef = useRef()
    const btnCloseMenuRef = useRef()
    const mobileMenuRef = useRef()

    const onOpenMobileMenu = () => {
        btnMenuRef.current.classList.add('hidden')
        btnCloseMenuRef.current.classList.remove('hidden')
        mobileMenuRef.current.classList.remove('hidden')
        mobileMenuRef.current.classList.remove('fade-out')
        mobileMenuRef.current.classList.add('fade-in')
    }

    const onCloseMobileMenu = () => {
        btnCloseMenuRef.current.classList.add('hidden')
        btnMenuRef.current.classList.remove('hidden')
        mobileMenuRef.current.classList.remove('fade-in');
        mobileMenuRef.current.classList.add('fade-out');
    }

    const onClickMenuHandler = (e, id) => {
        e.preventDefault();
        onCloseMobileMenu()
        scrollToId(id);
    }

    const onOrderNowHandler = () => {
        console.log("Order Now");
    }


    return <>
        <header id="header" className="py-2 px-4 fixed w-full bg-white z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex justify-between items-center gap-10">
                    <a href="/" onClick={e => onClickMenuHandler(e, "home")}>
                        <Icon icon={'logo'} />
                    </a>
                    <nav className="space-x-12 hidden md:flex text-sm">
                        <Each
                            data={MENUS}
                            render={menu => <a href={menu.url} onClick={e => onClickMenuHandler(e, menu.url)} className="hover:text-green transition-all duration-300 text-black">{menu.link}</a>}
                        />
                    </nav>
                </div>
                <a
                    href="#pesan-sekarang"
                    className="hidden sm:inline-flex items-center bg-red text-white px-4 py-2 rounded-sm text-sm gap-2 whitespace-nowrap transition-all duration-300 h-[37px] w-[136px] hover:w-[158px] group"
                >
                    <span>Pesan Sekarang</span>
                    <Icon icon="arrow" className="w-[15px] h-[15px] hidden group-hover:block" />
                </a>
                <button ref={btnMenuRef} onClick={onOpenMobileMenu} className="sm:hidden">
                    <Icon icon="bar-3" className="w-[36px] h-[36px] text-gray-400" />
                </button>
                <button ref={btnCloseMenuRef} onClick={onCloseMobileMenu} className="hidden">
                    <Icon icon="x-mark" className="w-[36px] h-[36px] text-gray-400" />
                </button>
            </div>
        </header>

        <div className="h-26"></div>

        {/* Mobile Menu */}
        <div ref={mobileMenuRef} className="md:hidden h-full w-full z-20 fixed bg-white -mt-1 px-4 hidden top-[84px] pt-[30px]">
            <nav className="space-x-12 text-sm flex flex-col gap-6 mb-6">
                <Each
                    data={MENUS}
                    render={menu => <a href={menu.url} onClick={(e) => onClickMenuHandler(e, menu.url)} className="hover:text-green transition-all duration-300 text-black">{menu.link}</a>}
                />
            </nav>
            <a href="#pesan-sekarang" onClick={onOrderNowHandler} className="bg-red text-white px-4 py-2 rounded-sm text-sm text-center w-full inline-block">
                Pesan Sekarang
            </a>
        </div>
    </>
}

export default Header