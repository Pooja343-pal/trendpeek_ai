"use client";

export default function Dashboard() {

  return (

    <div className="flex min-h-screen bg-[#0f172a] text-white">

      {/* Sidebar */}
      <div className="w-64 bg-[#020617] p-6 flex flex-col">

        <h1 className="text-xl font-bold mb-10">
          TrendPeek AI
        </h1>

        <nav className="space-y-4">

          <div className="text-blue-400 cursor-pointer">
            Profile
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Analytics
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Trends
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Linked Accounts
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Settings
          </div>

        </nav>

      </div>


      {/* Main Content */}
      <div className="flex-1 p-10">


        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-10">

          <input
            type="text"
            placeholder="Search trends or products..."
            className="bg-[#1e293b] px-4 py-2 rounded-lg w-96"
          />

          <div className="flex items-center gap-4">

            <button className="bg-blue-500 px-4 py-2 rounded-lg">
              Discover
            </button>

            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>

          </div>

        </div>


        {/* Profile Card */}
        <div className="bg-[#1e293b] p-6 rounded-xl mb-8 flex justify-between items-center">

          <div>

            <h2 className="text-xl font-semibold">
              Amogh
            </h2>

            <p className="text-gray-400">
              admin@test.com
            </p>

            <p className="text-gray-500 text-sm">
              Member since 2024
            </p>

          </div>

          <button className="bg-blue-500 px-4 py-2 rounded-lg">
            Edit Profile
          </button>

        </div>


        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-[#1e293b] p-6 rounded-xl">

            <p className="text-gray-400">
              Products Analyzed
            </p>

            <h2 className="text-3xl mt-2">
              1,284
            </h2>

          </div>


          <div className="bg-[#1e293b] p-6 rounded-xl">

            <p className="text-gray-400">
              Products Saved
            </p>

            <h2 className="text-3xl mt-2">
              42
            </h2>

          </div>


          <div className="bg-[#1e293b] p-6 rounded-xl">

            <p className="text-gray-400">
              AI Tokens Used
            </p>

            <h2 className="text-3xl mt-2">
              61K
            </h2>

          </div>

        </div>

      </div>

    </div>

  );
}