import Image from "next/image";
import { UnicornIcon } from "../Icons/Unicorn";
import { Typography } from "@ensdomains/thorin";

export const SigningInPage = () => {
  return (
    <div className="fixed h-screen w-screen bg-white flex justify-center items-center z-20">
      <Image src="/img/circles.svg" alt="Circles" width={360} height={360} />
      <div className="absolute flex flex-col justify-center items-center">
        <UnicornIcon className="mb-6" />
        <Typography weight="bold">Signing in</Typography>
        <Typography color="grey" className="text-center mt-2">
          This may take a minute or so,
          <br /> {`please don't close this window`}
        </Typography>
      </div>
    </div>
  );
};
