import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    formContainer: {
        margin: "3rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "1.5rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",
        },
    },
    icon: {
        fontSize: "2.5rem",
    },
    input: {
        width: "85%",
    },
    input: {
        width: "85%",
    },
}));
