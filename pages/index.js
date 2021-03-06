import React from 'react'
import Page from '../components/page'
import Head from 'next/head'
import Link from 'next/link'
import parseURL from '../helpers/parseurl'
require('isomorphic-fetch');

export default class extends React.Component {
  static async getInitialProps ({req}) {
    const res = await fetch(parseURL(req, '/leagueTable'))
    const data = await res.json()
    return { data: data }
  }

  componentDidMount () {
    if(!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', JSON.stringify(this.props.data))
  }

  render () {
    return (
      <Page>
        <Head>
            <title>League Table</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
        </Head>
        <div className="pure-u-1-3"></div>
        <div className="pure-u-1-3">
          <h1>Barclays Premier League</h1>
          <table className="pure-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>P</th>
                <th>GL</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.props.data.standing.map((standing, i) => {
              const oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
              return (
                  <tr key={i} className={oddOrNot}>
                    <td>{standing.position}</td>
                    <td><img style={{ margin: 'auto', height: '50px'}} className="pure-img logo" src={standing.crestURI}/></td>
                    <td>{standing.points}</td>
                    <td>{standing.goals}</td>
                    <td>{standing.wins}</td>
                    <td>{standing.draws}</td>
                    <td>{standing.losses}</td>
                    <td><Link href={`/details?id=${standing.position}`}>More...</Link></td>
                  </tr>
                );
            })}
            </tbody>
          </table>
        </div>
        <div className="pure-u-1-3"></div>
      </Page>
    );
  }
}
