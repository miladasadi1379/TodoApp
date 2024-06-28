'use client'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';

export default function DeleteTask({ id }) {
    const route = useRouter()
    const supabase = createClient()

    // handle Delete
    async function deleteTask(e) {
        const { status, error } = await supabase
            .from('notes')
            .delete()
            .eq('id', e.currentTarget.value)
            .select()

        if (status === 200) {
            toast('با موفقیت پاک شد', {
                className: "toast-message",
                icon: <DoneOutlineIcon />
            })
            route.refresh()
        } else {
            toast.error('مشکلی رخ داد', {
                className: "toast-message-error",
                icon: <DoNotDisturbOnTotalSilenceIcon />
            })
            console.log(error.message)
        }
    }

    return (
        <Button
            color='error'
            variant='text'
            onClick={deleteTask}
            value={id}

        >
            <DeleteIcon />
        </Button>
    )
}