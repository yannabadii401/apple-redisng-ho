import Head from "next/head";
import Image from "next/image";
import Apple from "../public/apple logo 1.png";
import Link from "next/link";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { useMediaQuery } from "react-responsive"; // we install this by click on npm install react-responsive
import { useSession } from "next-auth/react";

function Success() {
  const router = useRouter();
  const { session_id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  {
    /*const subtotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  );
  const formattedSubtotal = numeral(subtotal).format('0,0.00');*/
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  // showOrderSummary always true for desktop but only conditionally true for mobile
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

  const handleShowOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };

  // const { date: session } = useSession();

  return (
    <div>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto max-w-xl">
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden">
            <Image src={Apple} alt="logo" layout="fill" objectFit="contain" />
          </div>
        </Link>
      </header>

      <main>
        <section className="lg:max-0 order-2 mx-auto max-w-xl pb-12 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/">
            <div className="relative ml-14 h-24 w-12 cursor-pointer transition lg:inline-flex">
              <Image src={Apple} alt="logo" layout="fill" objectFit="contain" />
            </div>
          </Link>

          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <CheckIcon className="h-8 w-8" />
            </div>
            <div>
              <p>Order #{session_id?.slice(-5)}</p>
              <h4 className="text-lg">Thank you</h4>
            </div>
          </div>

          <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Your order is confirmed</p>
              <p className="text-sm text-gray-600">
                We’ve accepted your order, and we’re getting it ready. Come back
                to this page for updates on your shipment status.
              </p>
            </div>

            <div className="pt-3 text-sm">
              <p className="font-medium text-gray-600">
                Other tracking number:
              </p>
              <p>CNB21441622</p>
            </div>
          </div>

          <div className="mx-4 my-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14">
            <p>Order updates</p>
            <p className="text-sm text-gray-600">
              You’ll get shipping and delivery updates by email and text.
            </p>
          </div>

          <div className="mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row">
            <p className="hidden lg:inline">Need help? Contact us</p>
            {mounted && (
              <Button
                title="Continue Shopping"
                onClick={() => router.push("/")}
                width={isTabletOrMobile ? "w-full" : undefined}
                padding="py-4"
              />
            )}
          </div>
        </section>

        {mounted && (
          <section>
            <div
              className={`w-full ${
                showOrderSummaryCondition && "border-b"
              } border-gray-500 text-sm lg:hidden`}
            >
              <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6">
                <button
                  onClick={handleShowOrderSummary}
                  className="flex items-center space-x-2"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  <p>Show order summary</p>
                  {showOrderSummaryCondition ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>

                {/* <p>Subtotal: {formattedSubtotal}</p> */}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Success;
