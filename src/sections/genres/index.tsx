import { HorizontalTabs } from "../../components/horizontalTabs";
import { Container, Typography } from "./styles";

const mock = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/81jbivNEVML.jpg",
        name: "Harry Potter e a Camara Filosofal",
        author: "J.K Rowling",
        price: 69.90,
        gender: "adventure",
        sale: false,
    },
    {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Maze_runner.jpg/250px-Maze_runner.jpg",
        name: "Maze Runner - Correr ou Morrer",
        author: "James Dashner",
        price: 19.90,
        gender: "ficction",
        sale: true,
    },
    {
        id: 3,
        img: "https://a-static.mlcdn.com.br/1500x1500/livro-orgulho-e-preconceito/namastebooks/9800345886/060519930fae9dcacbc0f919164bbb1d.jpg",
        name: "Orgulho e Preconceito",
        author: "Jane Austen",
        price: 49.90,
        gender: "romance",
        sale: false,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/91b0Lr-6RwL.jpg",
        name: "Tudo Nela Brilha E Queima",
        author: "Ryane Leão",
        price: 9.90,
        gender: "poetry",
        sale: true,
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/91tOJgXRfzL.jpg",
        name: "Diário de Anne Frank",
        author: "Anne Frank",
        price: 49.90,
        gender: "biography",
        sale: false,
    },
    {
        id: 6,
        img: "https://m.media-amazon.com/images/I/91tOJgXRfzL.jpg",
        name: "Diário de Anne Frank",
        author: "Anne Frank",
        price: 49.90,
        gender: "biography",
        sale: false,
    },
];

const Genres = () => {
    return (
        <Container>
            <Typography variant="h2" fontFamily="space grotesk" fontSize="46px">
                Browse Genres
            </Typography>
            <HorizontalTabs data={mock} />
        </Container>
    )
};

export { Genres };