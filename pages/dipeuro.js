import DipNumbers from "@components/DipNumbers";

function Dip() {
  return (
    <div>

      <h4>5 of 50</h4>
      <DipNumbers max={50} amount={5}></DipNumbers>
      <h4>2 of 12</h4>
      <DipNumbers max={12} amount={2}></DipNumbers>
      <div></div>
    </div>
  );
}

export default Dip;
