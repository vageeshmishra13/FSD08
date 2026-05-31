import Header from "./component/Header";
import Footer from "./component/Footer";
function App() {
  return (
    <div className=" d-flex flex-column gap-2">
      {Header()}
      <div id="div1">This is my First React App</div>

      <p className=" bg-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam
        accusamus eos, sapiente, sit necessitatibus nesciunt ratione laudantium
        libero maxime expedita porro tenetur officiis, quidem harum accusantium
        minus quod dolorem!
      </p>
      {Footer()}
    </div>
  );
}
export default App;
