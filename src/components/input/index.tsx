import { Container, Label, StyledInput } from "./styles";

interface IInput {
    label: string;
}

const Input = ({ label }: IInput) => {
    return (
        <Container>
            <Label>{label}</Label>
            <StyledInput />
        </Container>
    )
}

export { Input };