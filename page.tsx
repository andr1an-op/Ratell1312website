import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import logo from '@/public/logo.png'
import kota from '@/public/kota.jpg'
import bg from '@/public/gambar.jpg'


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 ">
      <div className="mt-4 flex grow flex-col gap-3 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >
            <strong>Welcome to 1312.</strong> This is the 1312 Archive{' '}
           <a href="https://www.instagram.com/ratell1312?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-red-700">
              click here
            </a>
          </p>
          <div/>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-gray-200 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-900 hover:text-white md:text-base"
          >
            <span>Masuk</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
         <Image 
         className='rounded-lg'
          src={logo}
          alt='logo'
          height={0}
          width={0}
         />
        </div>
      </div>
    </main>
  );
}
