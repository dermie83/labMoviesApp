import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { MovieImage, MovieDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';


interface TemplateMoviePageProps {
    movie: MovieDetailsProps;
    children: React.ReactElement;
}


const TemplateMoviePage: React.FC<TemplateMoviePageProps> = ({movie, children}) => {
    const { data, error, isLoading, isError } = useQuery<MovieImage[], Error>(
        ["images", movie.id],
        () => getMovieImages(movie.id)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error

        ).message}</h1>;
    }

    const images = data as MovieImage[];

    return (
        <>
            <MovieHeader {...movie} />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={8} md={6}>
                            <ImageList variant="masonry" cols={3} gap={8}>
                                {images.slice(0, 3).map((image: MovieImage) => (
                                <ImageListItem key={image.file_path}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={'../../images/film-poster-placeholder.png'}
                                        loading="lazy"
                                        />
                                </ImageListItem>
                                ))}
                            </ImageList>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        {children}
                    </Grid>
                </Grid>
        </>
    );
};

export default TemplateMoviePage;