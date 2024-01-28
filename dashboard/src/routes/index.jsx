import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Chart'));
const AllBlogs = lazy(() => import('../pages/Blogs/AllBlogs'));
const AddBlog = lazy(() => import('../pages/Blogs/AddBlog'));
const Drafts = lazy(() => import('../pages/Blogs/Drafts'));
const Category = lazy(() => import('../pages/Category/Category'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/blogs/all-blogs',
    title: 'Forms Elements',
    component: AllBlogs,
  },
  {
    path: '/blogs/add-blog',
    title: 'Form Layouts',
    component: AddBlog,
  },
  {
    path: '/blogs/drafts',
    title: 'Drafts',
    component: Drafts,
  },
  {
    path: '/category',
    title: 'Category',
    component: Category,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
