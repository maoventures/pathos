export default function Contact() {
  return (
    <div className="w-full h-screen font-sans bg-warmGray-800 text-offWhite">
    <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
            <div className="leading-loose">
                <form className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded-xl shadow-xl" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="apikey" value="9c1fa46e-ce14-468b-b9c2-7c8d5e600b30"/>
                  <input type="hidden" name="ccemail" value="hannah@pathos.asia"/>
                  <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                  <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                  <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
                  <input type="checkbox" name="botcheck" id="" class="hidden" />
                    <p className="mb-8 text-2xl font-light text-center text-white">
                        Contact Us
                    </p>
                    <div className="mb-2">
                        <div className="relative ">
                          <label for="name">Your Name
                            <input type="text" name="name" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-transparent" placeholder="John Doe"/></label>
                            </div>
                        </div>
                    <div className="mb-2">
                        <div className="relative ">
                          <label for="email">Your Email
                            <input type="email" name="email" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-transparent" placeholder="john@acme.inc"/></label>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="relative ">
                              <label for="message">Your Message
                                <input type="textarea" name="message" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-transparent" placeholder="Hi, I'd like to collaborate"/></label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pathBlue rounded-lg shadow-md hover:bg-pathBlueker">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
}
