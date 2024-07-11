import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex h-screen items-center relative justify-center p-4 md:p-10  bg-white size-full bg-cover bg-center">
      <Image
      src="/images/background.jpeg"
      width={500}
      height={500}
      alt="Picture of the bg"
      className="absolute h-screen w-screen opacity-30 object-cover "
    />
      <div className="grid w-[90vw] h-[90vh] md:w-[70vw] z-10 lg:w-[50vw] lg:h-[80vh] grid-cols-1">
        <div className="bg-white text-black flex items-center justify-center flex-col rounded-[6px] dark:bg-black dark:text-white">
          <div className="my-4">
            <h1 className="text-1.75xl lg:text-3xl font-bold text-center justify-center">Sign In to Your Account</h1>
            <p className="mt-2 text-sm lg:text-xs  text-center justify-center text-slate-400 mx-auto w-5/6">Welcome to a smarter way of managing tasks and products.Our comprehensive suit is designed to streamline your workflow,enhance collaboration.</p>

          </div>
          <form className="w-3/4">
            <Button className="flex items-center w-full mt-2 px-4 md:px-12 bg-transparet rounded-[6px] gap-1 dark:text-white" variant="outline">
              <FcGoogle />
              Sign in with Google
            </Button>

            <div className=" mt-4 flex items-center mb-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-black dark:text-white">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Label className="mb-4" htmlFor="email">Email</Label>
            <Input className="mt-2 mb-4 w-full bg-transparent rounded-[6px]  text-slate-400" type="email" id="email" placeholder="Enter your email"></Input>

            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                className="mt-2 mb-4 pr-10 bg-transparent rounded-[6px] text-slate-400" type="password" id="password" placeholder="Enter your password"
              />
              <IoEyeOutline className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
            </div>

            <div className="mt-0.5 mb-1 text-xs lg:mb-3 text-right w-full dark:text-white">Forgot your password?</div>

            <Button type="submit" className="w-full mt-6 bg-blue-600 text-white rounded-[6px] hover:bg-blue-900">
              Sign in
            </Button>
          </form>
        </div>
      </div>
      
      {/* <div className="absolute inset-0 -z-10 bg-[#f9f7f79b]"></div> */}

    </main>
  );
}
