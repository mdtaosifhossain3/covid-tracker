import { Header, Main, Sidebar } from "@/Components/index";

export default function Home() {
  return (
    <main>
      {/* -----Header------- */}
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row mb-12 mt-8">
        {/*----- Main -------*/}
        <Main />
        {/* ------------Sidebar------- */}
        <Sidebar />
      </div>
    </main>
  );
}
