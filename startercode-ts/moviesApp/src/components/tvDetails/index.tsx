import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import MovieIcon from "@mui/icons-material/Movie";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TVDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const TVDetails: React.FC<TVDetailsProps> = (tvShow) => {

    const [drawerOpen, setDrawerOpen] = useState(false); // New

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {tvShow.overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {tvShow.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}
                {/* <a href={tvShow.homepage}>
                    <MovieIcon color="info"  fontSize="large"/>
                </a> */}
            </Paper>
            {/* <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<AccessTimeIcon />} label={`${tvShow.runtime} min.`} />
                <Chip
                    icon={<MonetizationIcon />}
                    label={`${tvShow.revenue.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${tvShow.vote_average} (${tvShow.vote_count}`}
                />
                <Chip label={`Released: ${tvShow.release_date}`} />
            </Paper> */}
            {/* <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab> */}
            {/* <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews {...tvShow} />
            </Drawer> */}
        </>
    );
};
export default TVDetails;