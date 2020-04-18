import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter()
  return (
    <section className="d-flex flex-row flex-md-column position-fixed sidebar bg-dark-2 min-vh-100 vh-100">
      <div className="d-flex flex-row flex-md-column justify-content-center">
        <Link href="/">
          <div className="logo bg-white border-right px-3 py-3 py-md-4">
            <i className="fas fa-virus fa-lg mx-1"></i>
          </div>
        </Link>
        <Link href="/countries">
          <div className={"d-flex s-menu justify-content-center align-items-center px-3 px-md-0 mt-0 mt-md-3 py-2 py-md-3 " + (router.pathname === "/countries" ? "active" : "")}>
            <i className="fas fa-globe text-white"></i>
          </div>
        </Link>
        <Link href="/">
          <div className={"d-flex s-menu justify-content-center align-items-center px-3 px-md-0 py-2 py-md-3 " + (router.pathname === "/test" ? "active" : "")}>
            <i className="fas fa-info-circle text-white"></i>
          </div>
        </Link>
      </div>
      <style jsx>{`
      .logo{cursor: pointer}
      .s-menu{position: relative;cursor: pointer}
      .s-menu.active:before{content: "";position: absolute;background: #ffffff52;height: 35px;width: 35px;top: 6px;left: 13px;border-radius: 2.5px;}
      .fs-15{font-size: 15px}
      .bg-dark-2{background-color: #000;}
      @media (max-width: 768px){
      .sidebar{position: relative!important;min-height: inherit!important;height: inherit!important;}
      .s-menu.active:before{height: 30px;width: 30px;top: 13px;left: 9px;}
      }
      `}</style>
    </section>
  )
}