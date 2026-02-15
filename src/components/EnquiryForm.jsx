import emailjs from "emailjs-com";

export default function EnquiryForm() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      alert("✅ Enquiry sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("❌ Failed to send. Try again.");
    });
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4 max-w-md">

      <input
        name="name"
        placeholder="Your Name"
        className="border p-2 w-full"
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="border p-2 w-full"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        className="border p-2 w-full"
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Send Enquiry
      </button>
    </form>
  );
}
