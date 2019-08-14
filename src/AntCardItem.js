import React, {Component} from  'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import {ReduceEvent} from './reducer'
import {createStore} from 'redux'

const {Meta} = Card

class AntCardItem extends Component {
    static prototypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }
    

    state = {
    }
    
    componentDidMount(){
        
        // this.props.er.subscrbe(() => {
        //     console.log("asdf")
        // })
        // eventReducer.subscribe(()=>{
        //   console.log("abcd")
        //   const movies = eventReducer.getState()
        //   console.log(JSON.stringify(movies))
        //   items = movies.data.map(movie =>
        //     <Card
        //         hoverable
        //         style={{ width: 240 }}
        //         cover={<img alt={movie.alt} src={movie.medium_cover_image} />}
        //     >
        //     <Meta title={movie.title} description={movie.synopsis} />
        //     </Card>) 
        // })

        // 
    }

    _renderData = () => {
        let ss = this.props.er.getState()
        console.log(JSON.stringify(ss))
        return ss.data.map(movie => {
            return (<Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={movie.alt} src={movie.medium_cover_image} />}
                    >
            <Meta title={movie.title} description={movie.genres.join('-')} />
            </Card>)
        })
    }

    render(){
        let ss = this.props.er.getState()
        let movies = ss ? this._renderData() : "Loading"        
        
        //     let movies = ss.map(movie => {
        //         return (<Card
        //             hoverable
        //             style={{ width: 240 }}
        //             cover={<img alt={movie.alt} src={movie.medium_cover_image} />}
        //         >
        // <Meta title={movie.title} description={movie.genres.join('-')} />
        // </Card>)})
        return(movies)
    }
}

export default AntCardItem