import { GetServerSideProps } from "next"

interface HomeProps {
  count: number
}

export default function Home({count}: HomeProps) {
  return (
  <h1>Contagem: {count}</h1>    
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/pools/count')
  const data = await res.json()

  return {
    props: {
      count: data.count
    }
  }
}
