import Image from 'next/image'
import Link from 'next/link'

export default function Fluffy() {
  const bgimage = './images/sky_desktop.png'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover" style={{backgroundImage: "url(" + bgimage + ")" }}>
      <div className='absolute top-5 left-5 text-black'>
        <p className='text-4xl'>
          "Fluff Trusty"
        </p>
        <p className='text-center opacity-50'>
          Born on June 7 2023
        </p>
      </div>
      <div className='container mt-10'>
        <div className='mb-[150px]'>
          <Image width={300} height={300} src="./images/care_island.svg" alt="island"  className='mx-auto mb-[-490px]'/>
          <div className='mx-auto w-[150px]' >
            <Image width={150} height={150} src="./images/monster.svg" alt="Monster"  className='flex'/>
          </div>
        </div>
        <div className='flex z-10 relative'>
          <div className='bg-white mx-auto rounded-3xl px-5 py-4'>
            <p className='text-black mb-5 text-xl ml-2'>Monster #6723</p>
            <div className='grid grid-cols-4'>
              <div>
                <Image width={75} height={75} src="./images/hamburger.svg" alt="Red Cauldron" className='mx-auto hover:scale-110 transition' />
              </div>
              <div>
                <Image width={90} height={90} src="./images/controller.svg" alt="Red Cauldron" className='mx-auto hover:scale-110 transition' />
              </div>
              <div>
                <Image width={85} height={85} src="./images/text.svg" alt="Red Cauldron" className='mx-auto hover:scale-110 transition' />
              </div>
              <div>
                <Image width={65} height={65} src="./images/aid.svg" alt="Red Cauldron" className='mx-auto hover:scale-110 transition' />
              </div>
            </div>

            <div className='mt-5'>
              <div>
                <Link href="/mingle" className='uppercase bg-[#5FB0FF] px-10 py-2 rounded-xl float-left text-xl hover:scale-110 transition shadow-lg'>Mingle</Link>
              </div>
              <div>
                <Link href="#" className='uppercase bg-[#747474] px-10 py-2 rounded-xl float-right text-xl hover:scale-110 transition shadow-lg'>Trade</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <p className='text-black text-center max-w-[350px] mx-auto'>Keep your monster healthy and entertained. As they age, they’ll help take care of others.</p>
        </div>
      </div>
    </main>
  )
}
