import React from "react";
import {BookType} from "@/tyeps/aboutBook";
import BookDetail from "./BookDetail";
import { MdClose } from "react-icons/md";
interface ModalProps {
    book: BookType | null; 
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ book, onClose }) => {
  if (!book) return null; // 모달이 열리지 않은 경우 렌더링 안 함

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">

        <h2 className="text-xl font-semibold mb-4 flex flex-row justify-end">
            <button
          className="text-2xl "
          onClick={onClose}
        >
          <MdClose/>
        </button>    
        </h2>

        <p className="text-gray-700 mb-6">
            <BookDetail book={book}/>
            </p>
      </div>
    </div>
  );
};

export default Modal;
