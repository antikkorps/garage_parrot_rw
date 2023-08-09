const HeroSection = () => {
  return (
    <>
      <div
        className="h-[38rem] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80')",
        }}
      >
        <div className="flex h-full w-full items-center justify-center bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Trouvez votre nouvelle
              <span className="text-red-400"> voiture</span> qui vous correspond
            </h1>
            <button className="mt-4 w-full transform rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto">
              C&apos;est ici pour la trouver
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
