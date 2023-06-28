import "./ButtonStart.css"

function ButtonStart({restapiPost}) {
  return (
    <>
      <button className="btn-start" onClick={restapiPost}>Start</button>
    </>
  );
}

export default ButtonStart;
