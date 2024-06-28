import { Box, Grid, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function Loading() {

    return (
        <>
            <Grid
                container
                style={{
                    display: "flex",
                    placeContent: 'center',
                    placeItems: 'center',
                    minHeight: '100vh',
                    margin: 'auto',
                }}
            >
                <Grid
                    xs={11}
                    md={10}
                    boxShadow={4}
                    borderRadius={'1rem'}
                    style={{ padding: '1rem' }}
                >
                    <Box
                        style={{
                            minHeight: '80vh',
                            backgroundColor: '',
                            marginBlock: '1rem'
                        }}

                    >
                        <Typography
                            style={{
                                display: 'flex',
                                placeItems: 'center',
                                placeContent: 'center'
                            }}
                        >
                            <Skeleton variant="rounded" width={150} height={60} />

                        </Typography>
                        <Box>
                            <Grid
                                container
                                style={{
                                    placeContent: 'space-between'
                                }}
                            >
                                <Grid md={5}>
                                    <Skeleton variant="rounded" width={420} height={60} />


                                </Grid>
                                <Grid md={5}>
                                    <Skeleton variant="rounded" width={410} height={60} />

                                </Grid>
                            </Grid>
                        </Box>
                        <br />
                        <Grid container>
                            <Grid
                                md={12}
                                style={{
                                    padding: '1rem',
                                    marginBlock: '.5rem',
                                    display: 'flex',
                                    placeItems: 'end'

                                }}
                                border={1}
                                borderRadius={'.5rem'}
                                my={2}
                            >
                                {/* content */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <form
                                        style={{ display: "flex" }}
                                    >
                                        <Skeleton variant="rounded" width={250} height={40} />

                                    </form>
                                </Grid>

                                {/*  */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex',
                                        placeContent: 'end'
                                    }}
                                >

                                    <Skeleton
                                        variant="rounded"
                                        width={80}
                                        style={{ marginInline: '1rem' }}
                                        height={40}
                                    />
                                    <Skeleton variant="rounded" width={80} height={40} />
                                </Grid>

                            </Grid>

                            <Grid
                                md={12}
                                style={{
                                    padding: '1rem',
                                    marginBlock: '.5rem',
                                    display: 'flex',
                                    placeItems: 'end'

                                }}
                                border={1}
                                borderRadius={'.5rem'}
                                my={2}
                            >
                                {/* content */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <form
                                        style={{ display: "flex" }}
                                    >
                                        <Skeleton variant="rounded" width={250} height={40} />

                                    </form>
                                </Grid>

                                {/*  */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex',
                                        placeContent: 'end'
                                    }}
                                >

                                    <Skeleton
                                        variant="rounded"
                                        width={80}
                                        style={{ marginInline: '1rem' }}
                                        height={40}
                                    />
                                    <Skeleton variant="rounded" width={80} height={40} />
                                </Grid>

                            </Grid>

                            <Grid
                                md={12}
                                style={{
                                    padding: '1rem',
                                    marginBlock: '.5rem',
                                    display: 'flex',
                                    placeItems: 'end'

                                }}
                                border={1}
                                borderRadius={'.5rem'}
                                my={2}
                            >
                                {/* content */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <form
                                        style={{ display: "flex" }}
                                    >
                                        <Skeleton variant="rounded" width={250} height={40} />

                                    </form>
                                </Grid>

                                {/*  */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex',
                                        placeContent: 'end'
                                    }}
                                >

                                    <Skeleton
                                        variant="rounded"
                                        width={80}
                                        style={{ marginInline: '1rem' }}
                                        height={40}
                                    />
                                    <Skeleton variant="rounded" width={80} height={40} />
                                </Grid>

                            </Grid>

                            <Grid
                                md={12}
                                style={{
                                    padding: '1rem',
                                    marginBlock: '.5rem',
                                    display: 'flex',
                                    placeItems: 'end'

                                }}
                                border={1}
                                borderRadius={'.5rem'}
                                my={2}
                            >
                                {/* content */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <form
                                        style={{ display: "flex" }}
                                    >
                                        <Skeleton variant="rounded" width={250} height={40} />

                                    </form>
                                </Grid>

                                {/*  */}
                                <Grid
                                    md={6}
                                    style={{
                                        display: 'flex',
                                        placeContent: 'end'
                                    }}
                                >

                                    <Skeleton
                                        variant="rounded"
                                        width={80}
                                        style={{ marginInline: '1rem' }}
                                        height={40}
                                    />
                                    <Skeleton variant="rounded" width={80} height={40} />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>




        </>
    )
}