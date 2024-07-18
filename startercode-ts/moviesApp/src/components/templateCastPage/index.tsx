// import React from "react";
// import MovieHeader from "../headerMovie";
// import Grid from "@mui/material/Grid";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { getCastMember } from "../../api/tmdb-api";
// import { CastMembers, CastMember } from "../../types/interfaces";
// import { useQuery } from "react-query";
// import Spinner from '../spinner';

// const styles = {
//     gridListRoot: {
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-around",
//     },
//     gridListTile: {
//         width: 450,
//         height: '100vh',
//     },
// };

// interface TemplateCastPageProps {
//     castmember: CastMembers;
//     children: React.ReactElement;
// }


// const TemplateCastPage: React.FC<TemplateCastPageProps> = ({castmember, children}) => {
//     const { data, error, isLoading, isError } = useQuery<CastMember[], Error>(
//         ["cast member", castmember.id],
//         () => getCastMember(castmember.id)
//     );

//     if (isLoading) {
//         return <Spinner />;
//     }

//     if (isError) {
//         return <h1>{(error

//         ).message}</h1>;
//     }

//     const castBio = data as CastMember[];

//     return (
//         <>
//             {/* <MovieHeader {...castmember} /> */}

//             <Grid container spacing={5} style={{ padding: "15px" }}>
//                 <Grid item xs={3}>
//                     <div>
//                         <ImageList cols={1}>
//                             {castBio.map((castBio: CastMember) => (
//                                 <ImageListItem
//                                     key={castBio.biography}
//                                     sx={styles.gridListTile}
//                                     cols={1}
//                                 >
//                                     {/* <img
//                                         src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
//                                         alt={'Image alternative'}
//                                     /> */}
//                                 </ImageListItem>
//                             ))}
//                         </ImageList>
//                     </div>
//                 </Grid>

//                 <Grid item xs={9}>
//                     {children}
//                 </Grid>
//             </Grid>
//         </>
//     );
// };

// export default TemplateCastPage;