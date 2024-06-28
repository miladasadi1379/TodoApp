'use client'
import { createClient } from '@/utils/supabase/client';
import { Checkbox } from '@mui/material';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function CheckBox({ id, item }) {
    const route = useRouter()
    const supabase = createClient()


    // update title from db
    async function updateCheckBox(e) {

        const { data: note, error } = await supabase
            .from('notes')
            .select('done')
            .eq('id', e.target.value)
        console.log(note[0])

        if (note[0].done === true) {
            const { data, error } = await supabase
                .from('notes')
                .update({ done: false })
                .eq('id', e.target.value)
                .select()

            if (data) {
                route.refresh()
            } else {
                toast.error('مشکلی رخ داد')
            }

        } else if (note[0].done === false) {
            const { data, error } = await supabase
                .from('notes')
                .update({ done: true })
                .eq('id', e.target.value)
                .select()

            if (data) {
                route.refresh()
            } else {
                toast.error('مشکلی رخ داد')
            }
        }
    }
    return (
        <>

            <Checkbox
                defaultChecked={item === true ? true : false}
                onChange={updateCheckBox}
                value={id}
            />
        </>
    )
}