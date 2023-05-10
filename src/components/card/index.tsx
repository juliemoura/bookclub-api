import { Typography } from "@mui/material";
import { Container, InfoContent } from "./styles";
import { Image } from "../../components/image";

interface ICard {
    src: string;
    title: string;
    author: string;
    price: number;
};

const Card = ({ src, title, author, price }: ICard) => {
    return (
        <Container>
            <Image src={src} />
            <InfoContent>
                <Typography fontSize="21px" color="#000000" fontFamily="space grotesk">
                    {title}
                </Typography>
                <Typography fontSize="15px" color="#A7A7A7" fontFamily="inter">
                    {author}
                </Typography>
                <Typography fontSize="18px" color="#2C322F" fontFamily="inter">
                    R$ {price}
                </Typography>
            </InfoContent>
        </Container>
    )
};

export { Card };