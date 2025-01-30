import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-blue-400">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg
      sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        rounded-lg text-white"
              >
                Word Wave
              </span>
            </Link>
          </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title='About'/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href="https://www.usmanghori.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        usmanghori.com
                    </Footer.Link>

                    <Footer.Link
                        href="/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Word Wave Blog
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='Follow Me'/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href="https://www.github.com/SoftwareSuite"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </Footer.Link>

                    <Footer.Link
                        href="tel:+923354262384"             
                    >
                        Whatsapp
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='Legal'/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href="#"
                    >
                        Privacy Policy
                    </Footer.Link>

                    <Footer.Link
                        href="#"             
                    >
                        Terms &amp; Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider/>
      </div>
    </Footer>
  );
}
