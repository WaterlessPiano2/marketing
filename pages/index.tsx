import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <Head>
        <title>Agile Import - Uk Customs Declaration Software</title>
      </Head>
      <Layout>
        <Container>
          <section className="text-gray-700 body-font">
            <div className="container mx-auto flex pt-2 items-center justify-center flex-row">
              <div className="w-2/6 mr-20">
                <Intro pageName={"Agile Customs"} />
                <p className="leading-relaxed text-base text-center">
                  Lets create your ideal customs declaration software together!
                </p>
              </div>
              <Image
                className="inline w-2/6 mb-2 object-cover object-center rounded"
                src="/assets/home/boat.jpg"
                alt="Hero Image"
                width={500}
                height={400}
              />
            </div>
            <div className="container px-5 py-12 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-800 mb-2">
                Help us create the ideal customs declatation software for you
                <br className="block" />
              </h1>
              <p className="leading-relaxed text-base text-center mb-20">
                Tell us about your past experiences declaring customs, so we can
                design the best solution tailored to you.
              </p>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4  lg:w-1/3 md:mb-0 mb-6 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-200 text-green-300 mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strlinecapoke-="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                      Declarations and Notifications
                    </h2>
                    <p className="leading-relaxed text-base">
                      Submit your import declarations to HMRC. Stay informed about
                      your goods at the border.
                    </p>
                  </div>
                </div>
                <div className="p-4  lg:w-1/3 md:mb-0 mb-6 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-200 text-green-600 mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                      Always Available
                    </h2>
                    <p className="leading-relaxed text-base">
                      Store your declarations data securely backed up in the
                      cloud, so they are always available to you, on any device.
                    </p>
                  </div>
                </div>
                <div className="p-4  lg:w-1/3 md:mb-0 mb-6 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-200 text-blue-700 mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                      Accuracte and Fast
                    </h2>
                    <p className="leading-relaxed text-base">
                      Pre-populate customs forms with templates to save time and
                      reduce errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
