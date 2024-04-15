import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

function PersonCard(props) {
  return (
    <button className="flex-initial w-52 m-2 flex flex-col justify-center text-center items-center bg-gray-200 rounded p-2 hover:bg-gray-400" onClick={props.handleClick}>
      <div className="w-full h-full overflow-hidden object-contain pb-3">
        <Image src={props.image_path} width={200} height={200} alt={`${props.name}`}/>
      </div>
      <ReactMarkdown className="font-bold">
        {props.name + ", " + props.qualifications}
      </ReactMarkdown>
      <ReactMarkdown className="font-bold">
        {props.position}
      </ReactMarkdown>
    </button>
  );
}

export default class People extends React.Component {
  modalElement = null;

  constructor(props) {
    super(props);
    this.state = { openedPerson: null };
  }

  componentDidMount() {
    this.modalElement = document.querySelector("#person-modal");
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  handlePersonClick(event, clickedPerson) {
    event.preventDefault();
    disableBodyScroll(this.modalElement);
    this.setState({ openedPerson: clickedPerson });
  }

  closePersonModal(event) {
    event.preventDefault();
    enableBodyScroll(this.modalElement);
    this.setState({ openedPerson: null });
  }

  render() {
    return (
      <div className='flex flex-row items-start flex-wrap justify-center'>
        {this.props.people.map((person) => {
          const { id, ...other } = person;
          return <PersonCard key={person.id} handleClick={(event) => this.handlePersonClick(event, person)} {...other} />;
        })}
        <div
          className="fixed flex items-center justify-center w-full h-full top-0 left-0 bg-gray-800/[.5] z-50"
          style={{ display: this.state.openedPerson ? "" : "none" }}
          onClick={(event) => this.closePersonModal(event)}
        >
          <div id="person-modal" className="p-8 bg-white rounded flex flex-col justify-center max-h-screen m-4" role="dialog" aria-modal="true" tabIndex={-1}>
            <h1 className="font-bold text-xl">{this.state.openedPerson?.name}</h1>
            <hr className='my-3 text-gray-300'/>
            { this.state.openedPerson &&
              <ReactMarkdown className="max-w-prose overflow-y-auto overflow-x-hidden">
                {this.state.openedPerson?.biography}
              </ReactMarkdown>
            }
            <hr className='my-3 text-gray-300'/>
            <button onClick={(event) => this.closePersonModal(event)} className='place-self-end mt-3 rounded bg-red-600 text-white p-2'>Close</button>
          </div>
        </div>
      </div>
    );
  }
};
