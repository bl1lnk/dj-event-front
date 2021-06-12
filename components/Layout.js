import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from './Header' 
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'

export default function Layout({title, keywords, description, children}) {
    const router = useRouter()
    return (
        <>
            <div>
                <title> {title}</title>
                <meta name='description' content={description} />
                <name name='keywords' content={keywords} />
            </div>

            <Header />

           {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </>
    )
}


Layout.defaultProps ={
    title: 'DJ Events | Find the hottest parties ',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj'
}
