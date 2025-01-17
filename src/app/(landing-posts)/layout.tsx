import { Footer } from '@app/layout/Footer/Footer'

const LandingLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <Footer />
  </>
)

export default LandingLayout
