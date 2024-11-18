import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full flex  pt-5 px-5 fixed top-0 z-50">
        <nav className="bg-black-100 bg-opacity-50 flex gap-6 lg:ml-auto lg:mr-0 mr-auto ml-auto py-[10px] px-[30px] rounded-full">
            <Link href="/"><p className="nav-text">Home</p></Link>
            <Link href="/about"><p className="nav-text">About</p></Link>
            <Link href="/services"><p className="nav-text">Services</p></Link>
            <Link href="/contact"><p className="nav-text">Contact</p></Link>
        </nav>
    </div>
  )
}

export default Navbar