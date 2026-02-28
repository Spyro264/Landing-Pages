import YogaNavbar from './components/YogaNavbar'
import YogaHeroPage from './pages/YogaHeroPage'

const App = () => {
  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto  md:px-0 lg:px-16 xl:px-24'>
       <YogaNavbar />
      <YogaHeroPage />
    </div>
  )
}

export default App