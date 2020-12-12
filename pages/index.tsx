import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Agile Import - Home</title>
      </Head>
      <Layout>
        <Container>
          <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 pt-12 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
            <div className="container px-5 py-12 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-800 mb-20">
                Customs Declaration System for UK traders.
                <br className="block" />
              </h1>
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
                      Submissions and Notifications
                    </h2>
                    <p className="leading-relaxed text-base">
                      Enter the required details to declare your shipments to
                      HMRC's new Customs Declaration Service (CDS).
                      <br className="hidden sm:block" />
                      Get notifications from HMRC, regarding the declarations
                      you have made.
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
                      Constant Availability
                    </h2>
                    <p className="leading-relaxed text-base">
                      Store all your customs information in our cloud database,
                      that is available to you wherever you are.
                      <br className="hidden sm:block" />
                      Use your laptop, tablet or smartphone to access this
                      platform.
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
                      Accuracy and Speed
                    </h2>
                    <p className="leading-relaxed text-base">
                      A clever system that will warn its users of potential
                      mistakes, before the declaration is submitted.
                      <br className="hidden sm:block" />
                      Reusing previously submitted declarations to save time and
                      be consistent.
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
