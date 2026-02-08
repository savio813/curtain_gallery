import emailjs from "emailjs-com";

export default function EnquiryForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_id",
      "template_id",
      e.target,
      "public_key"
    );

    alert("Enquiry sent successfully!");
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4">
      <input name="name" placeholder="Name" className="input" required />
      <input name="phone" placeholder="Phone" className="input" required />
      <textarea name="message" placeholder="Message" className="input" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
}
