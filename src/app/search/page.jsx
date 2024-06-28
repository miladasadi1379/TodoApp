'use client'
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import CheckBox from '@/compontents/CheckBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteTask from '@/compontents/DeleteTask';
import CircularProgress from '@mui/material/CircularProgress';

export default function Search() {
    const supabase = createClient()

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)


    function handleChange(e) {
        e.preventDefault()
        setQuery(e.target.value)
        setData('')
    }

    // get data
    async function getData() {
        setLoading(true)
        const { data, error } = await supabase
            .from('notes')
            .select('')
            .textSearch('name', query, {
                type: 'phrase',
                config: 'english'
            })
        if (data) {
            setLoading(false)
            setData(data)
        } else {
            setLoading(false)
            console.log(error.message)
        }
    }


    // show data
    function ShowData() {
        return (
            <>

                {
                    query.length !== 0 && data.length === 0 ? (
                        <Grid
                            style={{
                                placeItems: 'center',
                                placeContent: 'center',
                                display: 'flex',
                                minHeight: '25rem'
                            }}
                        >
                            <Typography
                                variant='h5'
                            >
                                موردی یافت نشد
                            </Typography>
                        </Grid>
                    ) :
                        data?.map((item, key) => (
                            <Grid container key={key}>
                                <Grid
                                    xs={12}
                                    md={12}
                                    style={{
                                        padding: '1rem',
                                        marginBlock: '.5rem',
                                        display: 'flex',
                                        placeItems: 'end',
                                        marginInline: 'auto'

                                    }}
                                    border={1}
                                    borderRadius={'.5rem'}
                                    my={2}
                                >
                                    {/* content */}
                                    <Grid
                                        xs={10}
                                        md={6}
                                        style={{
                                            display: 'flex'
                                        }}
                                    >
                                        <form
                                            style={{ display: "flex" }}
                                        >
                                            <CheckBox
                                                item={item.done}
                                                id={item.id}
                                            />
                                            <Typography
                                                style={{
                                                    textDecorationLine: item.done === true ? 'line-through' : ''
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
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
                                        <Link href={`/${item.id}`}>
                                            <Button
                                                color='inherit'
                                                variant='text'
                                            >
                                                <EditIcon />
                                            </Button>
                                        </Link>
                                        <DeleteTask id={item.id} />
                                    </Grid>

                                </Grid>
                            </Grid>
                        ))
                }

            </>
        )
    }

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
                            variant='h5'
                            textAlign='center'
                        >
                            جستجوی تسک
                        </Typography>
                        <Box>
                            <Grid
                                container
                                style={{
                                    placeContent: 'space-between'
                                }}
                            >
                                <Grid
                                    xs={12}
                                    sm={12}
                                    md={5}
                                    style={{
                                        display: 'inline-flex',
                                    }}
                                    id='grid-query'
                                >
                                    <TextField
                                        id='input-query'
                                        variant="filled"
                                        placeholder='جستجو'
                                        aria-label='search'
                                        name='search'
                                        fullWidth
                                        onChange={handleChange}

                                    />
                                    <Button
                                        onClick={getData}
                                        type='submit'
                                        color='primary'
                                        variant='contained'
                                    >
                                        <SearchIcon />
                                    </Button>
                                </Grid>

                                <Grid
                                    xs={12}
                                    sm={12}
                                    md={5}
                                    sx={{
                                        marginBlock: '4rem'
                                    }}
                                >
                                    <Link href={'/'}>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            style={{
                                                height: '3rem'
                                            }}
                                            id='btn-query'

                                            color='primary'
                                        >
                                            بازگشت
                                        </Button>
                                    </Link>

                                </Grid>
                            </Grid>
                        </Box>
                        {
                            loading == true ? (
                                <Grid
                                    style={{
                                        display: "flex",
                                        placeContent: 'center',
                                        placeItems: 'center',
                                        minHeight: '60vh',
                                        margin: 'auto',
                                    }}
                                >
                                    <CircularProgress />
                                </Grid>
                            ) : query.length === 0 ? (
                                <>
                                    <Grid
                                        style={{
                                            placeItems: 'center',
                                            placeContent: 'center',
                                            display: 'flex',
                                            minHeight: '25rem'
                                        }}
                                    >
                                        <Typography
                                            variant='h5'
                                        >
                                            فیلدی را جستجو نمایید
                                        </Typography>
                                    </Grid>
                                </>
                            ) : ShowData()
                        }

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}