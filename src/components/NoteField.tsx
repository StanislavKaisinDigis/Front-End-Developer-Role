import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setNote } from "../store/reducers/notesSlice";

const NoteField: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useAppDispatch();
  const note = useAppSelector((state) => state.note.note);

  const [inputValue, setInputValue] = useState(note);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value;
    setInputValue(newNote);
    if (newNote.length > 200) {
      setErrorMessage("Note cannot exceed 200 characters");
    } else {
      dispatch(setNote(newNote));
      setErrorMessage("");
    }
  };

  return (
    <div className="w-full grid sm:grid-cols-1 gap-4">
      <textarea
        className="rounded-md border
         border-gray-300 py-2 px-3 
          resize-none"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your notes here..."
        rows={5}
      />
      {errorMessage && (
        <p className="w-full max-w-sm text-red-500 text-sm overflow-wrap break-words">
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  );
};

export default NoteField;
