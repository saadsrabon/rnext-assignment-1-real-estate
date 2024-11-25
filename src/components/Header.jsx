const Buttons= ({title})=> <a
href="signin.html"
className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
>
{title}
</a>
export default function Header() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Pricing", link: "#pricing" },
    { name: "Blog" },
  ];

  

  return (
    // <!-- ====== Navbar Section Start -->

    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img
                src="assets/images/logo/logo.svg"
                alt="logo"
                className="header-logo h-12"
              />
            </a>

            <ul className="hidden lg:flex ">
              {navItems.map((item, index) => (
                <li className="group relative" key={index}>
                  <a
                    href={item?.link}
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                  >
                    {item?.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="sm:flex ">
            <Buttons title="SignUp"/>
            <Buttons title="Sign in"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- ====== Navbar Section End -->
  );
}
