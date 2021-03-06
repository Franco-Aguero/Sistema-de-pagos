export function MainLayout({ children }) {
    return (
      <>
        <header className="flex items-center h-14 bg-indigo-600 w-full fixed top-0 z-10">
          <h2 translate='no' className="mx-auto text-gray-50 text-2xl font-semibold md:ml-8">SKILLIFY</h2>
        </header>
        <main className="flex flex-col mt-14 pt-10">{children}</main>
      </>
    )
  }
  
  export function getLayout(element) {
    return <MainLayout>{element}</MainLayout>
  }