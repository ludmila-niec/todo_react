import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    todoItemContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        listStyle: "none",
        padding: "1rem",
        marginBottom: "1.5rem",
    },
    todoText: {
        maxWidth: "60%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.5rem",
        },
    },
    todoCompleted: {
        textDecoration: "line-through",
        opacity: 0.3,
    },
    icon: {
        fontSize: "1.2rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "2rem",
        },
    },
}));
