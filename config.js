/*
  Session Config
*/
const SESSION_SECRET = process.env.GS_SESSION_SECRET || 'some nice key'

const SessionStoreType = {
  MEMORY: 'memory',
  REDIS: 'redis',
}
const SESSION_STORE = process.env.GS_SESSION_STORE || SessionStoreType.REDIS

const REDIS_SOCKET = (() => {
  // used by docker-compose
  if (process.env.GS_REDIS_TCP_ADDR)
    return `redis://${process.env.GS_REDIS_TCP_ADDR}:6379`

  if (process.env.GS_REDIS_URL)
    return process.env.GS_REDIS_URL

  if (process.env.REDISCLOUD_URL)
    return process.env.REDISCLOUD_URL

  return 'redis://localhost:6379/0'
})()

/*
  GraphQL Config
*/
const APP_PORT = process.env.PORT || 5000
const APP_URL = process.env.GS_APP_URL || `http://localhost:${APP_PORT}`
const GRAPHQL_URL = process.env.GS_GRAPHQL_URL || ''

const OAUTH_PROVIDER = process.env.GS_OAUTH_PROVIDER || 'auth0'

const OAUTH2_AUTHORIZATION_URL = process.env.GS_OAUTH2_AUTHORIZATION_URL || '/some-url'
const OAUTH2_TOKEN_URL = process.env.GS_OAUTH2_TOKEN_URL || '/some-url'
const OAUTH2_CLIENT_ID = process.env.GS_OAUTH2_CLIENT_ID || 'a-token'
const OAUTH2_CLIENT_SECRET = process.env.GS_OAUTH2_CLIENT_SECRET || 'a-token'
const OAUTH2_CALLBACK_URL = `${APP_URL}/auth/callback`

const AUTH0_DOMAIN = process.env.GS_AUTH0_DOMAIN
const AUTH0_CLIENT_ID = process.env.GS_AUTH0_CLIENT_ID || 'a-token'
const AUTH0_CLIENT_SECRET = process.env.GS_AUTH0_CLIENT_SECRET || 'a-token'
const AUTH0_CALLBACK_URL = `${APP_URL}/auth/callback`
const AUTH0_AUDIENCE = process.env.GS_AUTH0_AUDIENCE
const AUTH0_CONNECTION = process.env.GS_AUTH0_CONNECTION

module.exports = {
  SESSION_SECRET,
  SessionStoreType,
  SESSION_STORE,
  REDIS_SOCKET,
  APP_PORT,
  GRAPHQL_URL,

  OAUTH2_AUTHORIZATION_URL,
  OAUTH2_TOKEN_URL,
  OAUTH2_CLIENT_ID,
  OAUTH2_CLIENT_SECRET,
  OAUTH2_CALLBACK_URL,

  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  AUTH0_AUDIENCE,
  AUTH0_CONNECTION,

  OAUTH_PROVIDER
}
