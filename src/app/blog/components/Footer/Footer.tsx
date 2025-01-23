import { SettleLogo } from '@components/SettleLogo/SettleLogo'

export const Footer = () => (
  <footer className="bg-brand-dark-teal py-14 text-brand-light-teal md:py-L xl:py-22">
    <div className="container">
      <hr className="border-b-px mb-7 mt-3 border-solid border-brand-pine-green" />
      <div className="flex flex-col gap-x-4 gap-y-4 lg:flex-row">
        <div>
          <SettleLogo width="83" height="24" />
        </div>
      </div>

      <hr className="border-b-px mb-6 mt-6 border-solid border-brand-pine-green" />

      <article className="space-y-3 ">
        <span className="text-left text-sm text-brand-forest-green">© {new Date().getFullYear()} Settle</span>
      </article>
    </div>
  </footer>
)
