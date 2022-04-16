import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HeaderContainer from './containers/common/HeaderContainer';
const PlacesListPage = React.lazy(() => import('./pages/PlacesListPage'));
const MyPage = React.lazy(() => import('./pages/MyPage'));
const DetailPage = React.lazy(() => import('./pages/DetailPage'));

const App = () => {
  return (
    <Routes>
      <Route element={<HeaderContainer />}>
        <Route path="/" element={<MainPage />}>
          <Route
            path="places/:category/:region_1/"
            element={
              <React.Suspense fallback={<>...</>}>
                <PlacesListPage />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="detail/:placeId"
          element={
            <React.Suspense fallback={<>...</>}>
              <DetailPage />
            </React.Suspense>
          }
        />
        <Route
          path="myPage"
          element={
            <React.Suspense fallback={<>...</>}>
              <MyPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />{' '}
      </Route>
    </Routes>
  );
};

export default App;
