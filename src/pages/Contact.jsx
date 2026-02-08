import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <p className="mb-3">📞 +91 9999999999</p>
        <p className="mb-3">✉️ curtaingallery@gmail.com</p>
        <p className="mb-3">📍 Kerala, India</p>

        <a
          href="https://wa.me/919999999999"
          className="bg-green-600 text-white px-6 py-3 rounded-xl inline-block mt-4"
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <EnquiryForm />
      </div>

    </div>
  );
}
