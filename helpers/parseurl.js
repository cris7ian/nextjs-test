export default (req, url) => !!req ? `http://api.football-data.org/v1/competitions/426/${url}` : `/api${url}`
