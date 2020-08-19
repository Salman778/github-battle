import React, { Component } from 'react';
import LanguagesNav from './languages-nav/LanguagesNav';
import ReposGrid from '../repos-grid/ReposGrid'
import Loading from '../loading/Loading'
import { fetchPopularRepos } from '../../utils/api'
import './Popular.css'


class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'All',
            error: null,
            repos: {
                All: [],
                JavaScript: [],
                Ruby: [],
                Python: []
            }
        }
        this.updateLanguageHandler = this.updateLanguageHandler.bind(this);
    }

    updateLanguageHandler(language) {
        if (this.state.repos[language].length) {
            this.setState({
                language,
                error: null
            })
            return
        }        
        this.setState({
            language,
            error: null
        })
        
        fetchPopularRepos(language)
        .then(resRepos => {
            const repos = { ...this.state.repos }
            repos[language] = resRepos;
            this.setState({
                language,
                repos,
                error: null
            })
        })
        .catch(error => this.setState({
            error
        })) 
    }
    componentDidMount() {
        const { language } = this.state
        fetchPopularRepos(language)
        .then(resRepos => {
            const repos = { ...this.state.repos }
            repos[language] = resRepos
            this.setState({
                repos,
                error: null
            })
        })
        .catch(error => this.setState({
            error
        }))
    }
    render() {
        const { language, error, repos} = this.state
        return (
            <React.Fragment>
                <ul className='grid space-around'>
                    <LanguagesNav 
                        updateLanguageHandler={this.updateLanguageHandler} 
                        language={this.state.language}
                    />
                </ul>
                { (!error && !repos[language].length) && <Loading text='Fetching Repos' speed={200} /> }
                {error && <pre className='center-text error'>{error.message}</pre>}
                {Boolean(repos[language].length) && <ReposGrid repos={repos[language]} />}
            </React.Fragment>
        )
    }
}


export default Popular;