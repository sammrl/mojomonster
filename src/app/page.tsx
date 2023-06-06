import Image from 'next/image'

export default function Home() {
  const bgimage = './images/aether_desktop.svg'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover" style={{backgroundImage: "url(" + bgimage + ")" }}>
      <div className='container mt-10'>
        <div className='mt-10'>
          <p className="text-3xl max-w-[400px]">Drag and Drop your Monstrum into a JOOSE cauldron to create a new monster!</p>
        </div>
        <div className='mb-10'>
          <Image width={300} height={300} src="./images/petri_dish.svg" alt="Petri Dish"  className='mx-auto mb-[-370px]'/>
          <div className='mx-auto w-[400px]' >
            <Image width={400} height={400} src="./images/blue_spore.svg" alt="Blue Spore"  className='flex'/>
          </div>
        </div>
        <div className='flex grid grid-cols-7 mx-auto mt-10'>
          <div className='col-start-3 mx-4 cursor-pointer'>
            <Image width={200} height={200} src="./images/red_cauldron.svg" alt="Red Cauldron" className='mx-auto hover:scale-110 transition' />
          </div>
          <div className='mx-4 cursor-pointer'>
            <Image width={200} height={200} src="./images/blue_cauldron.svg" alt="Red Cauldron" className='mx-auto hover:scale-110 transition' />
          </div>
          <div className='mx-4 cursor-pointer'>
            <Image width={200} height={200} src="./images/green_cauldron.svg" alt="Red Cauldron" className='mx-auto hover:scale-110 transition' />
          </div>
        </div>
      </div>
    </main>
  )
}
