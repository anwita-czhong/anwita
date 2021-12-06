import { useState } from "react";
import ReactModal from "react-modal";
import Image from "next/image";

ReactModal.setAppElement("#__next");

const peopleCardClasses = "flex-initial w-52 m-2 flex flex-col justify-center text-center items-center bg-gray-200 rounded p-2 hover:bg-gray-400";

const modalStyling = {
  position: "relative",
  width: "90%",
  maxWidth: "800px",
  maxHeight: "95vh",
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "0.25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const overlayStyling = {
  position: "fixed",
  top: 0,
  left: 0,
  inset: 0,
  height: "100vh",
  display: "flex",
  overflow: "auto",
  zIndex: "1000",
  backgroundColor: "rgba(54, 58, 69, 0.5)",
  justifyContent: "center",
  alignItems: "center",
};

export const Person = (props) => {

  const [modalActive, setModalActive] = useState(false);

  const handleClick = () => {
    setModalActive(!modalActive);
  };

  return (
    <div>
      <button className={peopleCardClasses} onClick={handleClick}>
        <div className='w-full h-full overflow-hidden object-contain pb-3'>
          <Image src={`/assets/people/${props.fname}-sq.webp`} width="200" height="200" layout="responsive" alt={`${props.name}'s picture'`}/>
        </div>
        <p className='font-bold'>
          {props.name}, {props.titles}<br/>
          {props.position}
        </p>
      </button>

      <ReactModal
        isOpen={modalActive}
        className='modal'
        overlayClassName='modal-overlay'
        style={{
          overlay: overlayStyling,
          content: modalStyling,
        }}
      >
        <h1 className='font-bold text-xl'>{props.name}, {props.titles}</h1>
        <h1 className='font-bold text-xl'>{props.position}</h1>
        <hr className='my-3'/>
        <div className='overflow-y-auto overflow-x-hidden flex flex-col gap-4'>
          {props.bio.map(function(text, index) {
            return <div key={ index }>
              <p>{text}</p>
            </div>;
          })}
        </div>
        <hr className='my-3'/>
        <button onClick={() => setModalActive(!modalActive)} className='place-self-end mt-3 rounded bg-red-600 text-white p-2'>Close</button>
      </ReactModal>
    </div>
  );
};
