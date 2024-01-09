"use client";

import {
  SafeAuthPack,
  AuthKitSignInData,
  SafeAuthUserInfo,
  SafeAuthInitOptions,
} from "@safe-global/auth-kit";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Input, Typography } from "@ensdomains/thorin";
import { GoogleIcon } from "@/components/Icons/Google";
import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { SigningInPage } from "@/components/SigningInPage";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [isSigning, setIsSigning] = useState(false);
  const [safeAuthPack, setSafeAuthPack] = useState<SafeAuthPack>();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!safeAuthPack?.isAuthenticated
  );
  const [safeAuthSignInResponse, setSafeAuthSignInResponse] =
    useState<AuthKitSignInData | null>(null);
  const [userInfo, setUserInfo] = useState<SafeAuthUserInfo | null>(null);

  useEffect(() => {
    // @ts-expect-error - Missing globals
    const params = new URL(window.document.location).searchParams;
    const chainId = params.get("chainId");

    (async () => {
      const options: SafeAuthInitOptions = {
        enableLogging: true,
        buildEnv: "production",
        chainConfig: {
          chainId: chainId || "0x64",
          rpcTarget: "https://gnosis.drpc.org",
        },
      };
      import("@safe-global/auth-kit").then(async ({ SafeAuthPack }) => {
        const authPack = new SafeAuthPack();

        await authPack.init(options);

        setSafeAuthPack(authPack);

        authPack.subscribe("accountsChanged", async (accounts) => {
          if (authPack.isAuthenticated) {
            const signInInfo = await authPack?.signIn();

            setSafeAuthSignInResponse(signInInfo);
            setIsAuthenticated(true);
          }
        });
      });
    })();
  }, []);

  useEffect(() => {
    if (!safeAuthPack || !isAuthenticated) return;
    (async () => {
      const userInfo = await safeAuthPack.getUserInfo();

      setUserInfo(userInfo);
    })();
  }, [isAuthenticated, safeAuthPack]);

  const login = async () => {
    setIsSigning(true);
    try {
      const signInInfo = (await safeAuthPack?.signIn()) || null;
      setSafeAuthSignInResponse(signInInfo);
      setIsAuthenticated(true);
    } catch (err) {
    } finally {
      setIsSigning(false);
    }
  };

  const logout = async () => {
    if (isAuthenticated) {
      await safeAuthPack?.signOut();

      setSafeAuthSignInResponse(null);
      setIsAuthenticated(false);
      setUserInfo(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {isSigning && <SigningInPage />}
      <div className="w-screen h-screen fixed">
        <div className="flex relative h-2/3 w-full mb-28">
          {isAuthenticated && userInfo && (
            <ArrowLeft
              className="absolute left-5 top-10 z-10"
              onClick={logout}
            />
          )}
          <Image src="/img/background-image.png" alt="Unicorn" fill />
        </div>
        <div className="absolute bg-white bottom-0 left-0 right-0 border-b rounded-t-[32px] py-12 px-4 min-h-[40%]">
          <div className="flex flex-col gap-10">
            <Image
              src="/img/unicorn-eth.png"
              alt="Unicorn"
              width={170}
              height={48}
              className="mx-auto"
            />
            <div className="flex flex-col gap-6">
              {isSigning ? "Loading..." : ""}
              {userInfo ? (
                <>
                  <Typography fontVariant="extraLarge">
                    Choose your wallet name.
                  </Typography>
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    label=""
                    name="username"
                    placeholder="username"
                    suffix=".unicorn.eth"
                  />
                  <Button disabled={!userName}>Next</Button>
                </>
              ) : (
                <>
                  {" "}
                  <Typography fontVariant="extraLarge">
                    Go to your wallet.
                  </Typography>
                  <button className="border-2 border-border-secondary rounded-2xl py-3 p-4 flex items-center gap-2">
                    <GoogleIcon />
                    <Typography fontVariant="body" onClick={login}>
                      Sign in with Google
                    </Typography>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
