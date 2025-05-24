import { useEffect, useState } from "react"
import Each from "./utils/Each"
import Icon from "./utils/Icon"

const MAPS_URL = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56397.46417654135!2d110.3637552120614!3d-7.788426147543574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f40!2m1!1sbakpia%20kurniasari!5e1!3m2!1sen!2sid!4v1747548783520!5m2!1sen!2sid"
const OUTLETS = [
    {
        name: "Outlet 1",
        address: "Jl. Malioboro No. 45, Suryatmajan, Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213",
        open_hours: "19:00 - 19:00",
        phone: "08133242324",
        maps_url: "https://maps.app.goo.gl/jD8myNQVu5tZP45DA" // Get from Maps by click share button on the maps business profile
    },
    {
        name: "Outlet 1",
        address: "Jl. Malioboro No. 45, Suryatmajan, Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213",
        open_hours: "19:00 - 19:00",
        phone: "08133242324",
        maps_url: "https://maps.app.goo.gl/jD8myNQVu5tZP45DA" // Get from Maps by click share button on the maps business profile
    },
    {
        name: "Outlet 1",
        address: "Jl. Malioboro No. 45, Suryatmajan, Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213",
        open_hours: "19:00 - 19:00",
        phone: "08133242324",
        maps_url: "https://maps.app.goo.gl/jD8myNQVu5tZP45DA" // Get from Maps by click share button on the maps business profile
    },
    {
        name: "Outlet 1",
        address: "Jl. Malioboro No. 45, Suryatmajan, Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213",
        open_hours: "19:00 - 19:00",
        phone: "08133242324",
        maps_url: "https://maps.app.goo.gl/jD8myNQVu5tZP45DA" // Get from Maps by click share button on the maps business profile
    },
    {
        name: "Outlet 1",
        address: "Jl. Malioboro No. 45, Suryatmajan, Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213",
        open_hours: "19:00 - 19:00",
        phone: "08133242324",
        maps_url: "https://maps.app.goo.gl/jD8myNQVu5tZP45DA" // Get from Maps by click share button on the maps business profile
    },
]

const Outlet = () => {
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowIframe(true), 500);
    }, []);

    return (
        <section id="lokasi" className="relative mt-5 md:mt-42 text-black">
            <div className="outlet container mx-auto relative z-10">
                <div className="rounded-lg border-gray-200 border-1 p-6 shadow-lg bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-normal inline-block">
                            Kunjungi Outlet Kami
                        </h2>
                        <button className="hidden md:flex items-center gap-2 text-sm">
                            <Icon icon="filter" className="w-5" />
                            Filter
                        </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {
                            showIframe &&
                            <iframe src={MAPS_URL} className="w-full h-full rounded-lg" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        }
                        <div className="relative">
                            <div className="flex justify-end mb-10 md:mb-0">
                                <button className="md:hidden flex items-center gap-2 text-sm">
                                    <Icon icon="filter" className="w-5" />
                                    Filter
                                </button>
                            </div>
                            <ul>
                                <Each
                                    data={OUTLETS}
                                    render={outlet => (
                                        <li className="mb-4">
                                            <h3 className="font-semibold mb-1 text-black">{outlet.name}</h3>
                                            <p className="text-sm text-gray-500 leading-normal">{outlet.address}</p>
                                            <div className="flex gap-2 my-4">
                                                <span className="border-1 rounded-md border-gray-300 text-gray-400 text-sm flex items-center gap-1 px-2 py-1">
                                                    <Icon icon="clock" />
                                                    {outlet.open_hours}
                                                </span>
                                                <span className="border-1 rounded-md border-gray-300 text-gray-400 text-sm flex items-center gap-1 px-2 py-1">
                                                    <Icon icon="phone" />
                                                    {outlet.phone}
                                                </span>
                                            </div>
                                            <a href={outlet.maps_url} target="__blank" className="text-red font-[400]">Petunjuk Arah</a>
                                        </li>
                                    )}
                                />
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-green h-[68%] w-full absolute bottom-0 block md:hidden" />
            <div className="z-0 hidden md:block bg-red">
                <span id="outlet-ornam-3">
                    <Icon icon="outlet-ornam-3" className="absolute bottom-40 w-full" />
                </span>
                <Icon icon="outlet-ornam-2" className="absolute -bottom-0 w-full" />
                <Icon icon="outlet-ornam-1" className="absolute -bottom-0 w-full" />
            </div>
        </section>
    )
}

export default Outlet