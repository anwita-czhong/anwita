import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Dialog } from "radix-ui";

export interface Person {
  id: string;
  name: string;
  imageURL: string;
  qualifications: string;
  position: string;
  biography: string;
}
const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-initial w-52 m-2 flex-col justify-center text-center items-center bg-gray-200 rounded p-2 hover:bg-gray-400">
        <div className="inset-0 overflow-hidden object-contain pb-3 rounded-sm">
          <Image src={person.imageURL} width={200} height={200} alt={person.name} />
        </div>
        <div className="font-bold">
          <ReactMarkdown>
            {`${person.name}, ${person.qualifications}`}
          </ReactMarkdown>
        </div>
        <div className="font-bold">
          <ReactMarkdown>
            {person.position}
          </ReactMarkdown>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-800/50" />
        <Dialog.Content className="p-8 bg-white text-blue-900 rounded flex flex-col justify-center max-h-screen m-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="font-bold text-xl">{person.name}</Dialog.Title>
          <hr className='my-3 text-gray-300' />
          <Dialog.Description asChild>
            <div className="max-w-prose overflow-y-auto overflow-x-hidden">
              <ReactMarkdown>{person.biography}</ReactMarkdown>
            </div>
          </Dialog.Description>
          <hr className='my-3 text-gray-300' />
          <Dialog.Close asChild>
            <button className="place-self-end mt-3 rounded bg-red-600 text-white p-2">Close</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const People: React.FC<{ people: Person[] }> = ({ people }) => {
  return (
    <div className="flex flex-row items-start flex-wrap justify-center">
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};

export default People;
