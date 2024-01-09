import ColorTabs from "../components/Tabs/ColorTabs";

const Body = () => {
  return (
    <main className="p-6 w-full min-h-[100dvh]">
      <div className="border-2 border-gray-300 rounded-2xl min-h-[100vh] bg-slate-100 overflow-hidden">
        {/* tab component */}
        <ColorTabs />
      </div>
    </main>
  );
};

export default Body;
