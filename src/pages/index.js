//step 1
import * as React from "react"
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'
//step 2
const IndexPage = () => {
  return (
    <Layout pageTitle="Inicio">
      <p>La perseverancia del agua erosiona la roca</p>
      <p><b>-The Ocean</b></p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/bjj-inicio.webp"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage