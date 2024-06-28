'use client'
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function AddTodo() {
    const route = useRouter()
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(false)

    function changeInput(e) {
        setTitle(e.target.value);
    }

    // create new todo
    async function createTodo() {
        const supabase = createClient()
        setLoading(true)
        const { error, status } = await supabase
            .from('notes')
            .insert({
                name: title,
                done: false
            })
        if (error) {
            toast.error('مشکلی رخ داد', {
                className: "toast-message-error",
                icon: <DoNotDisturbOnTotalSilenceIcon />
            })
            console.log(error.message)
            setLoading(false)
        } else if (status === 201) {
            toast.success('با موفقیت ساخته شد', {
                className: "toast-message",
                icon: <DoneOutlineIcon />
            })
            setLoading(false)
            route.push('/')
            route.refresh()
        }

    }

    return (
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
                md={10}
                boxShadow={4}
                borderRadius={'1rem'}
                style={{ padding: '4rem' }}
            >
                <Typography
                    variant='h6'
                    textAlign={'center'}
                    color={'InactiveCaptionText'}
                    style={{ marginBlock: '1rem' }}
                >افزودن تسک</Typography>
                <TextField
                    id="outlined-basic"
                    name='title'
                    label="چیزی بنویسید"
                    variant="outlined"
                    fullWidth
                    size='medium'
                    onChange={changeInput}
                />
                <LoadingButton
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                    fullWidth
                    style={{
                        padding: '1rem',
                        marginBlock: '1rem'
                    }}
                    size='large'
                    onClick={createTodo}
                    disabled={title.length > 5 ? false : true}
                >
                    ذخیره
                </LoadingButton>

            </Grid>

        </Grid>
    )
}