import Status from "./components/Status";

const App = () => {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Central de Atendimento FlowPay
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <Status />
      </div>
    </section>
  );
};

export default App;
