import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Index from '@/pages/Index';
import Workspace from '@/pages/Workspace';
import ModelsConfig from '@/pages/ModelsConfig';

// 创建路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/modelsConfig',
        element: <ModelsConfig />,
      },
    ],
  },
  {
    path: '/workspace',
    element: <Workspace />,
  },
]);

// 路由提供者组件
export const Router = () => {
  return <RouterProvider router={router} />;
};

// 导出路由配置
export default router;