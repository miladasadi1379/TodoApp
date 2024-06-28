import type { Metadata } from "next";
import "@/ui/globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/ui/theme'
import { Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Footer from '@/compontents/Footer'
export const revalidate = 0
export const fetchCache = 'only-no-store'

export const metadata: Metadata = {
  title: "آپ برنامه روزانه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider options={{
          key: 'css',
          enableCssLayer: true
        }}>
          <ThemeProvider theme={theme}>
            <Grid container>
              <CssBaseline />
              <ToastContainer />
              {children}
              <Footer />
            </Grid>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
