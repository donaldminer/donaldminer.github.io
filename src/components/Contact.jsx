export default function Contact() {
  /*
   *
   * */
  return (
    <div>
      <form
        action="https://getform.io/f/byvpjmla"
        method="POST"
        className="flex w-full flex-col bg-black bg-opacity-65 p-2 backdrop-blur-sm"
      >
        <h1 className="place-self-center text-xl font-bold">Contact</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-md border-2 bg-black bg-opacity-0 p-2 focus:outline-white"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="my-2 rounded-md border-2 bg-black bg-opacity-0 p-2 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          className="mb-4 rounded-md border-2 bg-black bg-opacity-0 p-2 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-block w-max place-self-center rounded-md bg-black px-6 py-3 text-center text-base font-medium text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}
