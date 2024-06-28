'use client'
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';

export default function EditTodo({ params }) {
    const supabase = createClient()
    const route = useRouter()

    const [title, setTitle] = useState('')
    const [done, setDone] = useState('')
    const [loading, setLoading] = useState(false)

    function changeInput(e) {
        setTitle(e.target.value);
    }

    useEffect(() => {
        async function getData() {
            const { data, error } = await supabase
                .from('notes')
                .select()
                .eq('id', params.slug)
            if (error) {
                toast.error('مشکلی رخ داد', {
                    className: "toast-message-error",
                    icon: <DoNotDisturbOnTotalSilenceIcon />
                })
                console.log(error.message)
            } else if (data) {
                setDone(data[0].done)
                setTitle(data[0].name)
                route.refresh()
            }
        }
        getData()
    }, [])

    async function updateTodo() {
        setLoading(true)
        const { data, error } = await supabase
            .from('notes')
            .update({
                name: title,
            })
            .eq('id', params.slug)
            .select()
        if (error) {
            toast.error('مشکلی رخ داد', {
                className: "toast-message-error",
                icon: <DoNotDisturbOnTotalSilenceIcon />
            })
            console.log(error.message)
            setLoading(false)
        } else if (data) {
            toast.success('ویرایش شد', {
                className: "toast-message",
                icon: <DoneOutlineIcon />
            })
            setLoading(false)
            route.push('/')
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
                xs={11}
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
                >ویرایش تسک</Typography>
                <TextField
                    id="outlined-basic"
                    name='title'
                    variant="outlined"
                    fullWidth
                    size='medium'
                    onChange={changeInput}
                    defaultValue={title}
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
                    onClick={updateTodo}
                    disabled={title.length > 5 ? false : true}
                >
                    ذخیره
                </LoadingButton>

            </Grid>

        </Grid>
    )
}