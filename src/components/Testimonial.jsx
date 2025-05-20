import Each from "./utils/Each"
import Icon from "./utils/Icon"

const TESTIMONIALS = [
    {
        name: "Azizah Aisha",
        image_profile: "images/testimonial-1.png",
        content: "Rasanya legit, isian melimpah, dan selalu fresh! Bakpia Kurnia Sari jadi oleh-oleh wajib tiap kali ke Jogja. Nggak pernah mengecewakan!",
        created_at: "3 April 2025",
        rating: 4
    },
    {
        name: "Azizah Aisha",
        image_profile: "images/testimonial-1.png",
        content: "Rasanya legit, isian melimpah, dan selalu fresh! Bakpia Kurnia Sari jadi oleh-oleh wajib tiap kali ke Jogja. Nggak pernah mengecewakan!",
        created_at: "3 April 2025",
        rating: 3
    },
    {
        name: "Azizah Aisha",
        image_profile: "images/testimonial-1.png",
        content: "Rasanya legit, isian melimpah, dan selalu fresh! Bakpia Kurnia Sari jadi oleh-oleh wajib tiap kali ke Jogja. Nggak pernah mengecewakan!",
        created_at: "3 April 2025",
        rating: 5
    },
    {
        name: "Azizah Aisha",
        image_profile: "images/testimonial-1.png",
        content: "Rasanya legit, isian melimpah, dan selalu fresh! Bakpia Kurnia Sari jadi oleh-oleh wajib tiap kali ke Jogja. Nggak pernah mengecewakan!",
        created_at: "3 April 2025",
        rating: 3
    },
]

const Testimonial = () => {
    return (
        <section className="bg-green text-white py-14">
            <h2 className="text-center text-2xl font-normal mb-4 px-4 block leading-normal">
                Testimoni Dari Pelanggan Kami
            </h2>
            <p className="text-center px-6 max-w-xl mx-auto">Nikmati kelezatan bakpia premium dengan berbagai varian rasa yang unik dan menggugah selera</p>

            <div className="flex justify-center">
                <div className="mt-10 flex gap-4 mx-auto px-6 overflow-x-auto no-scrollbar">
                    <Each
                        data={TESTIMONIALS}
                        render={testimoni => (
                            <div className="bg-white text-gray-800 p-4 rounded-lg flex-shrink-0 w-2/2 md:w-[350px] border-l-8 border-green-100">
                                <div className="flex justify-start gap-1">
                                    <img src={testimoni.image_profile} alt={testimoni.name} className="w-15 h-15 rounded-full mr-2" />
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold">{testimoni.name}</span>
                                            <span className="text-gray-400">{testimoni.created_at}</span>
                                        </div>
                                        <p className="text-gray-500">{testimoni.content}</p>
                                        <div className="flex gap-2 items-center mt-4">
                                            <Each
                                                data={[...Array(testimoni.rating)]}
                                                render={() => <Icon icon="star-full" />}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>

            </div>

        </section>
    )
}

export default Testimonial