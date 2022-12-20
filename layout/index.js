import Head from 'next/head'
import favicon from '../favicon.ico'
import { EstiloGlobal } from '../styles/global'
import { Container } from './styles'

export function Layout({ children }){
    return (
        <>
            <Head>
                <title>Clone da NetFlix</title>
                <link rel='icon' href={favicon.src}/>
                <link rel='preconnect' href='https://fonts.googleapis.com'/>
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'/>
                <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' rel='stylesheet'/>
            </Head>
            <EstiloGlobal/>
            <Container>{children}</Container>
        </>
    )
}