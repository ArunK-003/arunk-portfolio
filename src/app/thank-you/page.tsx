export default function ThankYouPage() {
return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#120222] to-[#191132] text-white px-4 text-center">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-teal-400">
        Thank You!
    </h1>
    <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8">
        Your message has been sent successfully. I’ll get back to you shortly.
    </p>
    <a
        href="/#contact"
        className="inline-block px-6 py-3 text-sm font-semibold rounded-full bg-teal-600 hover:bg-teal-500 text-white transition duration-300"
    >
        Back to Home
    </a>
    </div>
);
}
