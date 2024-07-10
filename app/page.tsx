import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-cover bg-center opacity-50 -z-20 -0" style={{ backgroundImage: "url('/images/background.jpeg')" }}>
      </div>
      <div className="absolute inset-0 -z-10 bg-[#c9c3c378]"></div>
      <div className="grid w-[90vw] md:w-[70vw] lg:w-[50vw] h-[80vh] grid-cols-1  ">
        <div className="bg-white text-black flex items-center justify-center flex-col rounded-2xl">
          <div className="my-4">
            <h1 className="text-3xl font-bold text-center justify-center">Sign in to Your Account</h1>
            <p className="mt-2 text-xs text-center justify-center text-slate-400 mx-auto w-3/4">Welcome to a smarter way of managing tasks and products.Our comprehensive suit is designed to streamline your workflow,enhance collaboration.</p>

          </div>
          <form className="w-3/4">
            <Button className="flex items-center w-full px-4 md:px-12 bg-transparet rounded-s-lg gap-1" variant="outline">
              <FcGoogle />
              or Sign in with Google
            </Button>

            <div className=" mt-4 flex items-center mb-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-black">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Label className="mb-4" htmlFor="email">Email</Label>
            <Input className="mt-2 mb-4 w-[100%] bg-transparent rounded-lg  text-slate-400" type="email" id="email" placeholder="Enter your email"></Input>

            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                className="mt-2 mb-4 pr-10 bg-transparent rounded-lg text-slate-400" type="password" id="password" placeholder="Enter your password"
              />
              <IoEyeOutline className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
            </div>

            <div className="mt-0.5 mb-3 text-xs text-right   w-full">Forgot your password?</div>

            <Button type="submit" className="w-full mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-900">
              Sign in
            </Button>
          </form>
        </div>
      </div>

    </main>
  );
}
