import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Head from './components/Head';
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';



const appRouter= createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      },
      {
        path: "search",
        element : <SearchPage/>
      }
    ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className='h-screen'>
     <Head/>
    <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
