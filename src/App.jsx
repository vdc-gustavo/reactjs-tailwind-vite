function App() {
  return (
    <>
      <body className="bg-primary-primary-100 h-screen">
        <header className="w-full h-[96px] bg-primary-primary-200 flex">
          <nav className="flex justify-between items-center w-full pr-[390px] pl-[390px]">
            <div className="w-[177px] h-[48px] bg-primary-primary-300"></div>
            <div className="text-primary-primary-500 flex gap-4 text-2xl">
              <a href="#" className="hover:underline">
                Link 1
              </a>
              <a href="#" className="hover:underline">
                Link 2
              </a>
              <a href="#" className="hover:underline">
                Link 3
              </a>
              <a href="#" className="hover:underline">
                Link 4
              </a>
            </div>
          </nav>
        </header>
        <main className="h-[calc(100vh-96px)] pr-[390px] pl-[390px] flex justify-between items-center">
          <div className="flex flex-col gap-7 w-[466px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[40px] text-primary-primary-500 leading-[1.1]">
                Lorem Ipsum is simply dummy text of the
              </h1>
              <p className="text-[24px] text-primary-primary-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Lorem Ipsum is simply"
                className="py-4 text-xl w-[273px] px-2 bg-primary-primary-200"
              />
              <input
                type="button"
                value="Lorem Ipsum"
                className="bg-primary-primary-500 text-primary-primary-100 py-4 w-[193px] text-xl hover:bg-primary-primary-400"
              />
            </form>
          </div>
          <div className="w-[562px] h-[330px] bg-primary-primary-300"></div>
        </main>
      </body>
    </>
  );
}

export default App;
