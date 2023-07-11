import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [isMessage, setIsMessage] = useState(false);
  return (
    <div className="bg-primary-3">
      <div className="py-12 max-w-[1400px] mx-auto px-6 xl:px-0">
        <div className="text-primary font-bold text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-primary">Contact Us</h2>
          <span className="block w-12 border-b-2 mx-auto"></span>
        </div>
        <div className="pt-8 space-y-6">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {isMessage ? (
              <div>
                <form className="space-y-4" action="">
                  <h3 className="text-xl md:text-3xl font-normal">
                    Send Message
                  </h3>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md md:text-lg rounded-lg block w-full px-6 py-3"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md md:text-lg rounded-lg block w-full px-6 py-3"
                    placeholder="Email*"
                  />
                  <textarea
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md md:text-lg rounded-lg block w-full px-6 py-3"
                    placeholder="Message"
                    rows="7"
                  />
                  <p className="p-2 text-center text-sm">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </p>
                  <div className="flex justify-center">
                    <button className="text-black font-medium hover:bg-primary-2 bg-primary py-3 px-6 inline-block rounded text-lg uppercase">
                      Send
                    </button>
                    <button
                      onClick={() => setIsMessage(false)}
                      className=" underline py-3 px-6 inline-block rounded text-lg uppercase"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-8">
                <div className="space-y-4">
                  <h4 className="text-[24px] md:text-[28px]">
                    What are you thinking about?
                  </h4>
                  <p className="text-[18px] opacity-80">
                    <span className="block">
                      Have a story idea for us? Would you like to write for us?{" "}
                    </span>
                    Send us a message and let us know what you are thinking
                    about.
                  </p>
                </div>
                <h4 className="text-[24px] md:text-[28px]">Relight news</h4>
                <button
                  onClick={() => setIsMessage(true)}
                  className="text-black font-medium hover:bg-primary-2 bg-primary py-3 w-[200px] inline-block rounded text-lg uppercase"
                >
                  Send Message
                </button>
              </div>
            )}

            <div className={`mx-auto`}>
              <Image
                src="https://img1.wsimg.com/isteam/stock/2888/:/rs=w:1280"
                width="600"
                height="300"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
