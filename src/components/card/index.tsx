import { Typography } from "@mui/material";
import { Container, InfoContent } from "./styles";
import { Image } from "../../components/image";

import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

type CardTypes = {
    src: string;
    title: string;
    author: string;
    price: number;
    more?: boolean;
};

const Card = ({ src, title, author, price, more = false }: CardTypes) => {
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
                {more === true &&
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button>
                            <BiEditAlt size={20} />
                        </button>
                        <button>
                            <MdDelete size={20} />
                        </button>
                    </div>
                }
            </InfoContent>
        </Container>
    )
};

export { Card };