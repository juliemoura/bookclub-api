import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiAddCircleLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Input } from "../input";
import { AddButton, CancelButton } from "./styles";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                <RiAddCircleLine size={20} color="#000" />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily="space grotesk">
                        Add a new book
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Input label="Url Image" />
                        <Input label="Title" />
                        <Input label="Author" />
                        <Input label="Price" />
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <AddButton>
                            Add
                        </AddButton>
                        <CancelButton onClick={handleClose}>
                            Cancel
                        </CancelButton>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export { BasicModal };