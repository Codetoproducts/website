const ContactForm = () => {
  return (
    <div className="p-5 bg-slate-800 rounded-lg lg:p-10">
      <h2 className="text-emerald-500 text-2xl">Let's Work Together</h2>
      <p className="text-white my-5">
        We are always looking for talented developers to join our team and are
        ready to take on exciting new projects. If you are interested in working
        with us, please fill out the form below.
      </p>
      <div className="flex flex-col gap-5 xl:grid-cols-2 xl:grid mt-5">
        <input
          type="text"
          className="text-white bg-slate-900 p-2 rounded-md w-full"
          placeholder="First Name"
        />
        <input
          type="text"
          className="text-white bg-slate-900 p-2 rounded-md w-full"
          placeholder="Last Name"
        />
      </div>
      <div className="flex flex-col gap-5 xl:grid-cols-2 xl:grid mt-5">
        <input
          type="email"
          className="text-white bg-slate-900 p-2 rounded-md w-full"
          placeholder="Email Address"
        />
        <input
          type="phone"
          className="text-white bg-slate-900 p-2 rounded-md w-full"
          placeholder="Phone Number"
        />
      </div>
      <div className="flex flex-col mt-5">
        <select className="text-white bg-slate-900 p-2 rounded-md w-full">
          <option disabled={true}>Select a Service</option>
          <option>Software Development</option>
          <option>Web Development</option>
          <option>Mobile App Development</option>
          <option>SEO</option>
        </select>
      </div>
      <div className="flex flex-col mt-5">
        <textarea
          className="text-white bg-slate-900 p-2 rounded-md w-full resize-none h-48"
          placeholder="Type your message here ..."
        ></textarea>
      </div>
      <button className="bg-emerald-500 text-slate-900 px-5 py-2 rounded-full hover:bg-emerald-400 mt-5">
        send
      </button>
    </div>
  );
};

export default ContactForm;
