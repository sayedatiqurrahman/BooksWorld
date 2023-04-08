import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'
import BookDetails from './components/bookDetails'
import Loading from './components/Loading'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    // errorElement: <ErrorPage />,
    children: [

      {
        path: '/',
        element: <Home></Home>,
      }, {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch('../book.json'),
      }, {
        path: 'book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      }, {
        path: 'about',
        element: <About></About>,
      }, {
        path: 'loading',
        element: <Loading />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
