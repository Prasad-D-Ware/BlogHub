export const Quote = ({ quote }: { quote: string }) => {
  return (
    <div className="h-screen bg-slate-200 flex justify-center flex-col ">
      <div className="flex justify-center">
        <div className="max-w-lg ">
          <div className="text-3xl font-bold">{quote}</div>
          <div className="max-w-md text-xl font-semibold mt-3">Prasad Ware</div>
          <div className="max-w-md  text-sm font-light text-slate-400">
            Developer | BlogHub
          </div>
        </div>
      </div>
    </div>
  );
};
