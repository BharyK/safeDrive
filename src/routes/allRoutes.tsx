/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { RoutesPath, PrivateRoutesPath } from './Route.Name';

import Container from '../components/Hoc/container';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {RoutesPath.map((item: any, index: number) => {
            return (
              <Route
              path={item.path}
              key={index}
              element={
                <Suspense
                  fallback={
                    <div className="globle_loader">
                      <CircularProgress />
                    </div>
                  }
                >
                  {<item.element />}
                </Suspense>
              }
            />
          );
        })}
           </Route> 
        <Route element={<Container />}>
          {PrivateRoutesPath.map((item: any, index: number) => {
            return (
              <Route
                    path={item.path}
                    key={index}
                    element={
                      <Suspense
                        fallback={
                          <div className="globle_loader">
                            <CircularProgress />
                          </div>
                        }
                      >
                        {<item.element />}
                      </Suspense>
                    }
                  />
                );
              })}
            </Route>
        <Route element={<div>404 page</div>}>
          <Route
            path="*"
            element={
              <h1
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  marginTop: 70,
                  fontWeight: 700,
                }}
              >
                Under Development
              </h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
