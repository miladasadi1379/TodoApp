import { createClient } from '@/utils/supabase/server'
import { Box, Button, Grid, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckBox from '@/compontents/CheckBox'
import Link from 'next/link';
import DeleteTask from '@/compontents/DeleteTask'
import SearchIcon from '@mui/icons-material/Search';
import Paginate from '@/compontents/Paginate'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const revalidate = 60

export default async function Home({ searchParams }) {
  const supabase = createClient()
  let start = searchParams.s
  let end = searchParams.e

  // get data from db
  const { data: task } = await supabase
    .from('notes')
    .select()
    .order('created_at', { ascending: false })

  // slice data for show data
  const data = task.slice(
    start === undefined ? 0 : start,
    end === undefined ? 5 : end
  )

  // show data
  function ShowData() {
    return (
      data?.map((item, key) => (
        <Grid container key={key}>
          <Grid
            xs={12}
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
              xs={9}
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
    )
  }

  // get timezone
  let options = { month: 'long', day: 'numeric', weekday: 'long' };
  let today = new Date().toLocaleDateString('fa-IR', options);
  let year = new Date().toLocaleDateString('fa-IR', { year: 'numeric' })


  return (
    <>
      <Grid
        container
        style={{
          display: "flex",
          placeContent: 'center',
          placeItems: 'center',
          minHeight: '100vh',
          marginBlock: '1rem'

        }}
      >
        <Grid
          xs={12}
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
              style={{ marginBlock: '1rem' }}
            >
              تسک های روزانه
            </Typography>

            <Box>
              <Grid
                container
                style={{
                  placeContent: 'space-between'
                }}
              >
                <Grid
                  xs={5}
                  md={5}
                >
                  <Link href={'/search'}>
                    <Button
                      fullWidth
                      variant='contained'
                      style={{
                        height: '3rem'
                      }}
                      color='primary'
                    >
                      جستجو
                      <SearchIcon fontSize='small' />
                    </Button>
                  </Link>

                </Grid>
                <Grid
                  xs={5}
                  md={5}
                >
                  <Link href={'/addtodo'}>
                    <Button
                      fullWidth
                      variant='contained'
                      style={{
                        height: '3rem'
                      }}
                      color='primary'
                    >
                      افزودن تسک
                      <AddCircleOutlineIcon fontSize='small' />
                    </Button>
                  </Link>
                </Grid>

                <Grid
                  container
                  style={{
                    placeContent: 'space-between',
                    marginBlock: '1rem'
                  }}
                >
                  <Grid
                    md={5}

                  >
                    <Typography variant='body1' display={'flex'} textAlign='right' color={'black'}>
                      <CalendarMonthIcon />
                      {today}
                      {year}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            {ShowData()}

          </Box>
          <Grid
            xs={12}
            style={{
              margin: 'auto',
              display: 'flex',
              placeContent: 'center'
            }}>
            <Paginate notes={task.length} />
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}
