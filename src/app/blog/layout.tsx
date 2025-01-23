import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

const LandingLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="bg-brand-light-grey">
    <Header variant="light" />
    {children}
    <Footer />
  </main>
)

export default LandingLayout
