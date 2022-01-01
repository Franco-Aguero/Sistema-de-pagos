export function MainLayout({ children }) {
    return (
      <>
        <header className="h-14 bg-indigo-600 w-full fixed top-0 z-10" />
        <main className="flex flex-col mt-14 pt-10">{children}</main>
      </>
    )
  }
  
  export function getLayout(element) {
    return <MainLayout>{element}</MainLayout>
  }