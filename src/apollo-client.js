import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core"
import { onError } from "@apollo/client/link/error"
import { logErrorMessages } from "@vue/apollo-util"

// temporary
const HASURA_SECRET = '1234';

const httpLink = new HttpLink({
    uri: "https://test-ntw.herokuapp.com/v1/graphql",
    fetch: (uri, options) => {
        options.headers = {
          'x-hasura-admin-secret': HASURA_SECRET
        }
        return fetch(uri, options)
    },
})

const errorLink = onError((error) => {
    if (process.env.NODE_ENV !== "production") {
        logErrorMessages(error)
    }
})

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: errorLink.concat(httpLink),
})