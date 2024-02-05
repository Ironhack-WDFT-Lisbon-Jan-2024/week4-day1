// Import is a keyword to kind of download other files into this component.
import './App.css'; 

import Greeting from  "./components/Greeting";

function App() {

  // 1) With React, we can embed variables with HTML (JSX)
  const reactHeading = <h1 id="js-heading">This is my first React Project!</h1>;

  return (
    <div>
      {/* JS Heading */ reactHeading}
      <Greeting
        student={{ firstName: "Michael", lastName: "Jordan" }}
        rgb={[255, 160, 122]}
      />
      <Greeting
        student={{ firstName: "Tomás", lastName: "Bastos" }}
        rgb={[255, 160, 122]}
      />
      <Greeting
        student={{ firstName: "Diana", lastName: "Ramos" }}
        rgb={[255, 160, 122]}
      />
    </div>
  );
}

export default App
