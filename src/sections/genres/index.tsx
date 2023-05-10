import { HorizontalTabs }  from "../../components/horizontalTabs";
import { Container, Typography } from "./styles";

const Genres = () => {
    return (
        <Container>
            <Typography variant="h2" fontFamily="space grotesk" fontSize="46px">
                Browse Genres
            </Typography>
            <HorizontalTabs />
        </Container>
    )
};

export { Genres };