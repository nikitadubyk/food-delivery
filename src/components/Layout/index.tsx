import { Helmet } from 'react-helmet'

interface LayoutProps {
    content: string
    title: string | undefined
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, content, children }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={content} />
                <link
                    rel='icon'
                    type='image/png'
                    href='favicon.ico'
                    sizes='16x16'
                />
            </Helmet>
            {children}
        </>
    )
}

export default Layout
