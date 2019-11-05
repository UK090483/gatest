import React, { Component } from "react"
import { graphql } from "gatsby"
import axios from "axios"

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    allRicksPics {
        nodes {
          message
        }
      }
  }
`

class ClientFetchingExample extends Component {
    state = {
        loading: false,
        error: false,
        img: [],
    }

    componentDidMount() {
        this.fetchRicksPupper()
    }

    render() {

        const { nodes } = this.props.data.allRicksPics
        const { img } = this.state

        return (
            <div style={{ textAlign: "center", width: "600px", margin: "50px auto" }}>
                <h1> With His Pupper</h1>
                <p>Rick & Morty API data loads at build time.</p>
                <p>{nodes[0].message}</p>
                <div >
                    <img
                        src={nodes[0].message}
                        alt={'bla'}
                        style={{ width: 300 }}
                    />
                </div>
                <div>
                    <div  style={{ border:'red solid 1px',width: '100%' ,display: 'grid', gridAutoFlow: 'row dense' }}>
                        {this.renderImg()}
                    </div>

                    <div onClick={() => {
                        this.fetchRicksPupper();
                    }}>Load More</div>
                </div>
            </div>
        )
    }

    renderImg() {
        return this.state.img.map((i, index) => {

            return (
                <div key={index} >
                    <img src={i.url} alt={`cute random `} style={{ maxWidth: '50px', margin:0 }} />
                </div>)
        })
    }

    fetchRicksPupper = () => {
        this.setState({ loading: true })
        axios
            .get(`https://dog.ceo/api/breeds/image/random`)
            .then(pupper => {

                const {
                    data: { message: img },
                } = pupper
                const breed = img.split("/")[4]
                let nextImg = [...this.state.img];
                nextImg.push({ url: img })
                this.setState({
                    loading: false,
                    img: [...nextImg]
                })
            })
            .catch(error => {
                this.setState({ loading: false, error })
            })
    }
}

export default ClientFetchingExample