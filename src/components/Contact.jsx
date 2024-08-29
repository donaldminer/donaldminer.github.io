export default function Contact() {
  return (
    <div className="flex h-full w-full">
      <form
        action="https://getform.io/f/byvpjmla"
        target="_blank"
        method="POST"
        className="flex w-full flex-col bg-black bg-opacity-75 p-2 backdrop-blur-sm"
      >
        <h1 className="place-self-center text-xl font-bold">Contact</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-md border-2 bg-black bg-opacity-0 px-2 py-2 focus:outline-white sm:py-0 md:py-0"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="my-2 rounded-md border-2 bg-black bg-opacity-0 px-2 py-2 focus:outline-white sm:py-0 md:py-0"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="mb-4 h-full rounded-md border-2 bg-black bg-opacity-0 px-2 py-2 focus:outline-white sm:py-0 md:py-0"
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
