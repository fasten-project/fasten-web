// import * as MockXMLHttpRequest from 'mock-xmlhttprequest'
// import { sendRequest } from './utils'
// import { APIResponseError } from './errors'
// import config from '/config'
//
// describe('Request utils tests', () => {
//     it('throws an API error on network error', async () => {
//         /**
//          * Monkey-patch XMLHttpRequest to simulate a network error everytime
//          * an AJAX call is made.
//          */
//         MockXMLHttpRequest.MockXhr.onCreate = (xhr) => {
//             xhr.setNetworkError()
//         }
//         const mockServer = MockXMLHttpRequest.newServer()
//         mockServer.install()
//
//         try {
//             const endpoint = new URL('/some-resource', config.api).href
//             await sendRequest('get', endpoint, (data: any): data is '' => data === '')
//         } catch (error) {
//             expect(error).toBeInstanceOf(APIResponseError)
//         }
//
//         mockServer.remove()
//     })
// })
