import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// @ts-ignore
import Dashboard from './page/Dashboard/Dashboard';
import { Faq } from './page/faqPage/faq';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Team from './page/team/Team';
import Contacts from './page/contact/Contact';
import Invoices from './page/invoices/Invoices';
import Form from './page/form/form';
import Calendar from './page/calendar/Calendar';
import Bar from './page/barChart/Bar';
import { Pie } from './page/PieChart/Pie';
import Line from './page/LineChart/Line';
import Geography from './page/geography/Geography';
import NotFound from './page/notFound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/bar' element={<Bar />} />
      <Route path='/pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='geography' element={<Geography />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
