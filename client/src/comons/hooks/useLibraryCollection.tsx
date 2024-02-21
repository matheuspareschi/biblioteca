import axios from "axios";
import { useState } from "react";
import { IBook } from "../interfaces";

interface ILibraryCollection {
    libraryCollection: IBook[],
    privateLibraryCollection: IBook[],
    setBook: React.Dispatch<React.SetStateAction<IBook>>,
    getLibraryCollection: () => void,
    err: string,
    getBookNameFromId: (bookId: number) => string
    getMembersBooks: (owner: string) => void
}

export const useLibraryCollection = (): ILibraryCollection => {
    const [libraryCollection, setLibraryCollection] = useState<IBook[]>();
    const [privateLibraryCollection, setPrivateLibraryCollection] = useState<IBook[]>();
    const [book, setBook] = useState<IBook>();
    const [err, setErr] = useState("");

    const getLibraryCollection = async () => {
        await axios.get("http://localhost:3002/api/getAllBooks")
        .then((data) => { setLibraryCollection(data.data) })
        .catch(() => {setErr("Usuario ou senha inválidos!")});
    }

    const getMembersBooks = (owner: string) => {
      axios.post("http://localhost:3002/api/getBooksFromUser", {owner: owner})
      .then((data) => { setPrivateLibraryCollection(data.data) })
      .catch(() => {setErr("Usuario ou senha inválidos!")});
    }

    const getBookNameFromId =  (bookId: number) => {
      const bookTitle = libraryCollection.find(book => book.idBook === bookId);

      return bookTitle.title
    }


  return (
    {
        libraryCollection,
        setBook,
        getLibraryCollection,
        err,
        getBookNameFromId,
        getMembersBooks,
        privateLibraryCollection
    }
  )
}

