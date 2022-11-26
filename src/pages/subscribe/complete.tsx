import { type NextPage } from "next";
import { useRouter } from "next/router";
import Button from "../../components/Form/Button";
import Header from "../../components/Header";

const Page: NextPage = () => {
  const router = useRouter();
  const { pay } = router.query;
  return (
    <>
      <main className="flex min-h-screen flex-col items-center text-white">
        <Header />
        <div className="text-3xl">Thank you for joining!</div>
        <div></div>
        <div className="mt-3 text-center text-gray-300">
          <p>We will send you updates on the product.</p>
          {pay && (
            <p className="text-xs text-green-400">
              {
                "*We didn't charge the $5. But when the product is ready, we will give you the option for the benefit."
              }
            </p>
          )}
        </div>
        <div className="mt-10" />
        <Button href="/">BACK TO TOP</Button>
      </main>
    </>
  );
};

export default Page;
