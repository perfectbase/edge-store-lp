import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Form/Button";
import Responsive from "../components/Responsive";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Easily handle images in your app - Edge Store"}</title>
        <meta
          name="description"
          content="A simple image storage for all project sizes. Easily integrate with your existing projects. Fast, reliable and secure."
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center text-white">
        <div className="flex w-full flex-col items-center justify-center bg-[radial-gradient(#1F0B3E,#000000)] py-28 px-3">
          <h1 className="pb-3 text-center text-5xl md:text-7xl">EDGE STORE</h1>
          <h2 className="pb-3 text-center text-lg text-gray-300 md:text-2xl">
            The image storage all developers dream of.
          </h2>
          <h3 className="pb-6 text-center text-sm text-gray-300 md:text-base">
            Working with images should be easy.
          </h3>
          <JoinButton />
        </div>
        <div className="flex w-full justify-center bg-[#1F0B3E] py-10 px-3 text-center">
          <div className="max-w-4xl">
            <p className="pb-4 text-xl font-bold">Why Edge Store?</p>
            <p>
              Edge Store is a simple image store for all project sizes. It is
              designed to be easy to use and easy to integrate into your
              project. It is built leveraging s3, cloudfront and lambda@edge to
              give you a fast, reliable and secure image store.
            </p>
          </div>
        </div>
        <div className="my-20 flex w-full max-w-4xl flex-wrap justify-center px-6 md:justify-between">
          <TechCard
            title="Easy to use"
            description="Use our server side and client side libraries to easily integrate Edge Store into your project."
          />
          <TechCard
            title="Fast"
            description="All your images are served from the edge, so they are fast to load."
          />
          <TechCard
            title="Secure"
            description="Have full control over who can access your images with a JWT based access control system that works on the Edge."
          />
          <TechCard
            title="Reliable"
            description="It leverages AWS serverless technologies that are known and trusted by millions of developers."
          />
          <TechCard
            title="Free for small projects"
            description="Just create an account and start using Edge Store for free."
          />
          <TechCard
            title="Pay as you grow"
            description="As your project grows, you can upgrade your plan to get more storage and more bandwidth."
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-6 text-3xl font-bold">Examples</p>
          <div className="relative">
            <div className="absolute top-6 left-16">Client</div>
            <Responsive
              desktop={
                <Image
                  src="/images/edge-store_client.png"
                  alt="Edge Store Client"
                  width={800}
                  height={600}
                />
              }
              mobile={
                <Image
                  src="/images/edge-store_client_mobile.png"
                  alt="Edge Store Client"
                  width={800}
                  height={600}
                />
              }
            />
          </div>
          <div className="relative">
            <div className="absolute top-6 left-16">Server</div>
            <Responsive
              desktop={
                <Image
                  src="/images/edge-store_server.png"
                  alt="Edge Store Server"
                  width={800}
                  height={600}
                />
              }
              mobile={
                <Image
                  src="/images/edge-store_server_mobile.png"
                  alt="Edge Store Server"
                  width={800}
                  height={600}
                />
              }
            />
          </div>
          <div className="relative">
            <div className="absolute top-6 left-16">React</div>
            <Responsive
              desktop={
                <Image
                  src="/images/edge-store_react.png"
                  alt="Edge Store React"
                  width={800}
                  height={600}
                />
              }
              mobile={
                <Image
                  src="/images/edge-store_react_mobile.png"
                  alt="Edge Store React"
                  width={800}
                  height={600}
                />
              }
            />
          </div>
        </div>
        <div className="mb-16">
          <JoinButton />
        </div>
        <div className="h-14 w-full bg-[#1A1A1A]"></div>
      </main>
    </>
  );
};

export default Home;

const TechCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="my-4 min-h-[170px] w-[90%] rounded-lg p-6 shadow-[0px_0px_19px_3px_#7C3AED60] md:w-[30%]">
      <p className="mb-2 text-lg font-bold">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const JoinButton: React.FC = () => {
  return <Button href="/subscribe">JOIN OUR WAITING LIST</Button>;
};
