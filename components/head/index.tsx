import Head from 'next/head'

type Props = {
    title:string;
    keywordsContent:string;
}
const index = ({title,keywordsContent}:Props) => {
  return (
    
    <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywordsContent}/>
    </Head>
    
  )
}

export default index