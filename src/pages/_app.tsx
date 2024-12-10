import "@/styles/globals.css";
import { ReactQueryProvider } from "@/utils/queryProvider";
import type { AppProps } from "next/app";
import Link from "next/link";
import { ImBooks } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import 'material-react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'material-react-toastify';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export default function App({ Component, pageProps }: AppProps) {
  const [path,setPath] = useState<string[]>([]);
  const router= useRouter();
  useEffect(()=>{
    if(router){
      if(router.pathname==='/'){
        const newPath=['책 목록'];
        setPath(newPath);
        return
      }
      else if(router.pathname.includes('addBook')){
        const newPath = ['새 책 추가'];
        setPath(newPath);
        return
      }
      const newPath=['책 정보 수정', router.query.id+''];
        setPath(newPath);
    }
  },[router])
  return (
    <ReactQueryProvider>
  <div className="w-[100vw] h-[100vh] flex flex-row ">
      <section className="w-[200px] h-full bg-slate-800 text-white flex flex-col justify-start items-start">
        <header className="w-full h-[60px] flex flex-row justify-start items-center border-b-[1px] border-gray-300">
          <Link href={'/'}className="text-lg pl-4 font-semibold font-mono">RGT</Link>
        </header>
        <h1  className="pl-2 py-2">사이트 관리</h1>
        <section className="px-4 w-full grid grid-cols-1 divide-y font-normal ">
        <div className="w-92 py-2 px-1 ">
            <Link href={'/'} className="flex items-center justify-start gap-x-4 hover:-translate-y-0.5 rounded-sm transition delay-100 ease-in-out"><span><ImBooks className="text-xl"/></span><span>책 목록</span></Link>
          </div>
          <div className="w-92 py-2 px-1  ">
            <Link href={'/addBook'} className="flex items-center justify-start gap-x-4 hover:-translate-y-0.5 rounded-sm transition delay-100 ease-in-out"><span><MdAdd  className="text-xl"/></span><span>책 추가</span></Link>
          </div>    
        </section>

      </section>
      <section className="mainSection w-full h-full">
        <nav className="w-full h-[60px] flex flex-row justify-start border-b-[1px] border-gray-300 items-center shadow-md drop-shadow-md">
          <h1 className="text-lg pl-10 text-primary font-semibold font-mono flex justify-start gap-x-1"><span>RGT Bookstore Admin</span>{
            path.map((item,index)=>(
              <span key={index} className="pl-4 pr-4 flex justify-start items-center gap-x-2">{index===0&&<GrNext/>}{item}{index!==path.length-1&&<GrNext/>}</span>
            ))

          }</h1>
        </nav>
        <main className="w-full h-[calc(100%-60px)] overflow-auto">
          <Component {...pageProps} />
        </main>
      </section>
      <ToastContainer position="top-right"/>
    </div>
   
    </ReactQueryProvider>
   
  )
}
