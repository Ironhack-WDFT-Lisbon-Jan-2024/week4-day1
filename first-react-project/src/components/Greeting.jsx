/* eslint-disable react/prop-types */

function Greeting(props){
  // 2) With React, we can embed objects.
  // const student = { firstName: "Michael", lastName: "Jordan" };
  return (
    <h3
      style={{ color: `rgb(${props.rgb[0]}, ${props.rgb[1]}, ${props.rgb[2]})` }}
    >
      Hello, {props.student.firstName} {props.student.lastName}
    </h3>
  );
}

export default Greeting