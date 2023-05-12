import { AllBooks } from "../../sections/allBooks";
import { Navbar } from "../../components/navbar";
import { Container, InputExternal, SearchButton, SuperiorContent, Input } from "./styles";
import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { Typography } from "@mui/material";
import { BasicModal } from "../../components/modal";
import { BiSearchAlt } from "react-icons/bi";

interface IData {
  urlImg: string;
  idBook: number;
  authorName: string;
  bookName: string;
  price: number;
  gender?: string;
  sale?: boolean;
};

type DataTypes = IData[];

const Books = () => {
  const [data, setData] = useState<DataTypes>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState<DataTypes>([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('https://localhost:7104/api/books')
        .then(response => response.json())
        .then(response => {
          setData(response);
          setIsLoading(false);
          console.log(response);
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  const searchBooks = () => {
    const searchedBooks = data.filter((book) =>
      book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedBooks(searchedBooks);
  };

  return (
    <Container>
      <Navbar />
      <SuperiorContent>
        <Typography fontSize="21px" color="#000000" fontFamily="space grotesk">
          All books
        </Typography>
        <InputExternal>
          <Input
            placeholder="Search a book"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton onClick={searchBooks}>
            <BiSearchAlt size={20} />
          </SearchButton>
        </InputExternal>
        <BasicModal />
      </SuperiorContent>
      {isLoading ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px" }}>
          <Loading />
        </div>
      ) : (
        searchedBooks.length > 0 ? (
          <AllBooks data={searchedBooks} />
        ) : (
          <AllBooks data={data} />
        ))}
    </Container>
  );
};


export { Books };