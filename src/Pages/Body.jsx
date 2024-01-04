import Accordion from "../components/Accordion/Accordion";

const Body = () => {
  return (
    <main className="p-6 w-full min-h-[100dvh]">
      <div className="border-2 border-gray-300 rounded-2xl min-h-[100vh] bg-slate-100">
        <div className="flex justify-evenly items-center border-b-2 border-orange-400">
          <div className="p-4 border-2 border-orange-400 w-full text-center">
            All calls
          </div>
          <div className="p-4 border-2 border-orange-400 w-full text-center">
            Archived calls
          </div>
        </div>
        <div>
          {Array(3)
            .fill(null)
            .map((item, i) => {
              return (
                <div key={item + i}>
                  <Accordion />
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Body;
