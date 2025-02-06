import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DiaryHomePage from '../app/page'
import DiaryDetailPage from '../app/detail/[id]/page'
import DiaryEmotionLinkPage from '../app/emotions/page'
import DiaryEmotionPage from '../app/emotions/[emotion]/page'
import { ROUTE_TYPE } from '../app/constants/routes'

export type DiaryRouterPath = '/' | `/detail/${string}` | '/emotions' | `/emotions/${string}`
const diaryRouter = createBrowserRouter(
    [
        {
            path: ROUTE_TYPE.HOME,
            element: <DiaryHomePage />,
        },
        {
            path: ROUTE_TYPE.DIARY_DETAIL,
            element: <DiaryDetailPage />,
        },
        {
            path: ROUTE_TYPE.EMOTIONS,
            element: <DiaryEmotionLinkPage />,
        },
        {
            path: ROUTE_TYPE.EMOTIONS_DETAIL,
            element: <DiaryEmotionPage />,
        },
    ],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        },
    }
)

export const DiaryRouter = () => <RouterProvider router={diaryRouter} />
