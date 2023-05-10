import { Card } from "../../components/card";
import { Typography } from "@mui/material";
import { CardContainer, Cards, Container, Input, InputExternal, SearchButton, SuperiorContent } from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { BasicModal } from "../../components/modal";

interface IData {
    data: Array<{
        id: number;
        img: string;
        name: string;
        author: string;
        price: number;
        gender: string;
        sale: boolean;
    }>;
};

type ValueTypes = Array<IData>;

// logica search pra procurar um livro
// logica para editar e deletar livro
// logica pra adicionar um livro com input controlled

const AllBooks = ({ data }: IData) => {
    // const [inputValue, setInputValue] = useState("");
    // const [searchResults, setSearchResults] = useState<IData[]>([]);

    // function handleSearch() {
    //     const filteredResults = characters.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    //     setSearchResults(filteredResults);
    //   }
    
    return (
        <Container>
            <SuperiorContent>
                <Typography fontSize="21px" color="#000000" fontFamily="space grotesk">
                    All books
                </Typography>
                <InputExternal>
                    <Input placeholder="Search a book" />
                    <SearchButton>
                        <BiSearchAlt size={20} />
                    </SearchButton>
                </InputExternal>
                <BasicModal />
            </SuperiorContent>
            <Cards>
                {data.map((book) => (
                    <CardContainer>
                        <Card
                            key={book.id}
                            src={book.img}
                            title={book.name}
                            author={book.author}
                            price={book.price}
                            more={true}
                        />
                    </CardContainer>
                ))}
            </Cards>
        </Container>
    )
};

export { AllBooks };