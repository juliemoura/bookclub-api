import { Card } from "../../components/card";
import { CardContainer, Cards, Container } from "./styles";

// logica para editar
// logica para excluir
// logica pra adicionar o campo promocao em algum livro
// exportar em excel
// verificar o codigo e tirar os comentarios

interface IData {
    data: Array<{
        urlImg: string;
        idBook: number;
        authorName: string;
        bookName: string;
        price: number;
        gender?: string;
        sale?: boolean;
    }>;
};

const AllBooks = ({ data }: IData) => {
    return (
        <Container>
            <Cards>
                {data
                    .sort((a, b) => a.bookName.localeCompare(b.bookName))
                    .map((book) => (
                        <CardContainer key={book.idBook}>
                            <Card
                                src={book.urlImg}
                                title={book.bookName}
                                author={book.authorName}
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