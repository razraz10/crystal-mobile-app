import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function HomePage() {

    return (
        <div className='flex flex-col justify-between  items-center h-full px-3'>

            <div className='mt-2 flex justify-between   items-center w-full '>
    <div className='flex  '>
                    <div className=''>
                        <Image
                            src={'/hatal_logo.svg'}
                            width='40'
                            height='100'
                            alt='hatal' />
                    </div>
                    <div className=''>
                        <Image
                            src={'/nasa_logo.svg'}
                            width='60'
                            height='100'
                            alt='nasa' />
                    </div>
                </div>
                <div className=' '>
                    <Image
                        src={'/emet_logo.svg'}
                        width='60'
                        height='80'
                        alt='emet' />
                </div>

            

            </div>
            <div className=' left-47 font-open-sans  font-extrabold text-5xl  tracking-tighter text-center  text-black'>
                מערכת דיווחי   <br />   משימות 
                <div className='mt-2 font-open-sans font-semibold tracking-tighter text-2xl  text-center'>
                יחידת נס"א
            </div>
            </div>

           
           

            <div className='  items-center '>
                <Image
                    src={'/enter_page.svg'}
                    width='270'
                    height='270'
                    alt='jars icon'
                />
            </div>

            <div className='  text-white text-1xl flex items-center justify-center'>
                <Link href={'/reporting'}>
                    <button className=' rounded-xl bg-black px-6 py-2'>להתחברות דרך אתר צה"ל</button>
                </Link>
            </div>

             <footer className="p-3 bottom-5 ">
                <p className='font-open-sans font-normal text-xs tracking-tighter  text-center'>
                    פותח ע”י קודקוד במסגרת אמ”ת ומדור תו”פ נס”א
                </p>
            </footer> 
        </div>
    )
}