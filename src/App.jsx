import './App.css'
import AlbumCover from '../src/assets/peach.jpg'
import Logo from '../src/assets/LogoTwo.png'

const App = () => {
  return (
    <main className="main flex flex-col items-center justify-between w-[540px] h-[540px]">
      <article className='flex flex-col items-center mt-2 mb-2'>
        <section className="logo-container w-[500px] flex justify-center mb-1">
          <img src={Logo} className='logo w-[475px] h-[125px] mb-5 mt-2'></img>
        </section>
        <h2 className="plays text-4xl">Plays</h2>
        <h1 className="eat-a-peach text-7xl">Eat A Peach</h1>
        <h2 className='and-other text-4xl'>And Other</h2>
        <h2 className='and-other text-4xl'>Allman Brothers Classics</h2>
      </article>
      <article className='flex flex-col items-center mb-5'>
        <h2 className="date text-5xl">June 13 2025 7pm</h2>
        <h2 className="venue text-5xl">At the Cadieux Cafe</h2>
        <h2 className="price text-5xl">$20</h2>
      </article>
    </main>
  )
}

export default App