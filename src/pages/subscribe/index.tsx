import { type NextPage } from "next";
import Button from "../../components/Form/Button";
import Checkbox from "../../components/Form/Checkbox";
import TextField from "../../components/Form/TextField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "../../utils/trpc";
import { useState } from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  pay: z.boolean(),
});

type Schema = z.infer<typeof schema>;

const Page: NextPage = () => {
  const router = useRouter();
  const [commonError, setCommonError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const subscribe = trpc.mailer.subscribe.useMutation();

  const handleValid = async (data: Schema) => {
    try {
      setCommonError(null);
      await subscribe.mutateAsync(data);
      await router.replace(`/subscribe/complete${data.pay ? "?pay=true" : ""}`);
    } catch {
      setCommonError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center text-white">
        <Header />
        <div className="mb-10" />
        <div className="w-full bg-[#15052F] p-6 shadow-[0px_0px_10px_5px_#7C3AEDAA] md:w-[50%] md:rounded-lg">
          <form onSubmit={handleSubmit(handleValid)}>
            <div className="text-center">JOIN OUR WAITING LIST</div>
            {commonError && (
              <div className="mt-2 text-center text-xs text-red-500">
                {commonError}
              </div>
            )}
            <TextField
              label="Name"
              {...register("name")}
              error={errors.name?.message}
            />
            <TextField
              label="Email"
              {...register("email")}
              error={errors.email?.message}
            />
            <Checkbox id="test" {...register("pay")}>
              Pre-pay a one time fee of $5 and get a lifetime double storage
              increase in you free plan account.
            </Checkbox>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="text" href="/" disabled={isSubmitting}>
                CANCEL
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {watch("pay") ? "PAY AND JOIN " : "JOIN"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;
