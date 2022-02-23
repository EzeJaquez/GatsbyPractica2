import * as React from 'react'
import { Link , useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    contenido,
    navCont,
} from './css/layout.module.css'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                  title
                }
            }
        }
    `);
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <div className={navCont}>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Inicio</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>sobre nosotros</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                        Blog
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                <div className={contenido}>{children}</div>
            </main>

        </div>
    )
}

export default Layout