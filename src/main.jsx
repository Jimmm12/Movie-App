/* eslint-disable react-refresh/only-export-components */
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import HomePage from '@/pages/HomePage.jsx'
// import MovieDetail from '@/pages/MovieDetail.jsx'
// import TVshowDetail from '@/pages/TVshowDetail'
// import PeoplePage from '@/pages/PeoplePage'
import RootLayout from '@/pages/RootLayout.jsx'
import ModalProvider from '@/context/ModalProvider'
import { lazy } from 'react'
import SearchPage from '@/pages/SearchPage'

const HomePage = lazy(() => import("@/pages/HomePage"))
const MovieDetail = lazy(() => import("@/pages/MovieDetail"))
const TVshowDetail = lazy(() => import("@/pages/TVshowDetail"))
const PeoplePage = lazy(() => import("@/pages/PeoplePage"))
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />
      },
      {
        path: '/tv/:id',
        element: <TVshowDetail />
      }, 
      {
        path: '/people/:id',
        element: <PeoplePage />,
        loader: async ({params}) => {
         const res =  await fetch(`https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          }
         )
         return res
        }
      },
      {
        path: '/search',
        element: <SearchPage />
      }, 
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>
)
