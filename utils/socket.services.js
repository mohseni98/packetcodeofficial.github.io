import io from "socket.io-client";
import { siteConfig } from '../variables/config';
import { getToken, pathMaker } from "./useful";
// import { bindActionCreators } from 'redux';
// import { connect, Provider } from 'react-redux';
import * as actions from '../stores/actionsList';
import store from '../stores/storeConfig';
// import HttpService from './Http.services';

// const store = configureStore();

// console.log("SOCKET")
let socket = null
let userId
let acticeTopics = {}
// let promises = []
// let token

// promises.push(new Promise(async (resolve,reject)=>{
//    token = await getToken()
// })

// promises.push
// console.log("HERE ")

// getToken((token) => {

// function callAPI(name, value) {
//     return {
//         type: 'CHANGE_SETTING',
//         name,
//         value
//     }
// }

// async function getMyId() {
//     // let user = await AsyncStorage.getItem('user')
//     user = JSON.parse(user)
//         // console.warn(user._id)
//     userId = user._id
// }

// getMyId()


function addTopic(moduleId, id, type, settings, updateFunction) {

    if (!acticeTopics[type + '-' + id]) {
        acticeTopics[type + '-' + id] = { id, type }
        subscribeTopic({ id, type, settings })

        if (!acticeTopics[type + '-' + id].modules) {
            acticeTopics[type + '-' + id].modules = {}
        }
    }

    acticeTopics[type + '-' + id].modules[moduleId] = { id: moduleId, settings, updateFunction }

}


function removeTopic(moduleId, id, type, settings) {

    if (acticeTopics[type + '-' + id] && acticeTopics[type + '-' + id].modules) {

        delete acticeTopics[type + '-' + id].modules[moduleId]

        if (Object.keys(acticeTopics[type + '-' + id].modules).length == 0) {
            delete acticeTopics[type + '-' + id]
            unsubscribeTopic({ id, type, settings })
        }
    }

    // console.log(acticeTopics)
}




function subscribeVisitor(moduleId, token, type, settings, updateFunction) {
    if (socket) {

        console.log(token)

        socket.emit('subscribeVisitor', { token, type, settings }, (id) => {

            console.log(id)

            console.log("FEEDBACK")

            if (!acticeTopics[type + '-' + id]) {
                acticeTopics[type + '-' + id] = { id, type }




                if (!acticeTopics[type + '-' + id].modules) {
                    acticeTopics[type + '-' + id].modules = {}
                }
            }

            acticeTopics[type + '-' + id].modules[moduleId] = { id: moduleId, settings, updateFunction }

        })
    }
}



function subscribeTopic(topic) {
    if (socket) {
        socket.emit('subscribeTopic', topic, () => {
            // console.log("FEEDBACK")
        })
    }
}


function unsubscribeTopic(topic) {
    if (socket) {
        socket.emit('unsubscribeTopic', topic, () => {
            // console.log("FEEDBACK")
        })
    }
}


function initTopic() {
    // console.log("initTopic")
    Object.values(acticeTopics).forEach(acticeTopic => {
        subscribeTopic(acticeTopic)
    });
}



function closeSocket() {
    if (socket) {
        // console.log("CLOSE SOCKET")
        socket.disconnect()
        socket.close()
        socket = null
    }
}
let openSocket = false
let disconnected = false

async function initSocket() {
    // console.log("INITSOCKET")

    // store.dispatch(store.dispatch)
    // console.log(store.dispatch())
    // console.log(store.getState())

    closeSocket()

    // if (!openSocket) {
    openSocket = true

    let token = await getToken()

    const opts = {
        'path': '/users',
        'reconnection': true,
        'reconnectionDelay': 3000,
        'reconnectionDelayMax': 5000,
        'reconnectionAttempts': 5,
        // 'pingTimeout': 5000,
        // 'pingInterval': 8000,
        // secure: true, reconnection: true, rejectUnauthorized: false,
        // transport : ['websocket'] ,
        // transports: ['websocket', 'polling', 'flashsocket'],
        // transports: ['websocket'], upgrade: false,
        extraHeaders: {
            'authorization': 'bearer ' + token,
        },
    }

    socket = io(siteConfig.socketDomain, opts);

    socket.on("connect", () => {
        // console.log("CONNCT");

        // console.log(socket.id);
        initTopic()
    });

    socket.on("message", (message, cb) => {
        console.log(message);
        if (cb) {
            cb('OK!!!')
        }
    });

    socket.on("disconnect", () => {
        console.log("DISCONNECT"); // undefined
    })

    socket.on('reconnect', () => {
        console.log("reconnect"); // undefined
    })

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    })

    socket.on("logout", (cb) => {
        console.log("FORCE LOG OUT")
        store.dispatch(actions.logoutUser())
        store.dispatch(actions.addNotif({ type: 'error', title: '{{lang}}errors.forceLogout', description: '{{lang}}errors.forceLogoutDesc' }))
        setTimeout(() => {
            // window.location = pathMaker('/login')
        }, 500);
        cb("OK")
    })



    socket.on("changeBalance", (message) => {
        console.log("changeBalance")
        store.dispatch(actions.changeBalance(message))

    })

    socket.on("changebalance", (message) => {
        console.log("changeBalance")
        store.dispatch(actions.changeBalance(message))

    })



    socket.on("updateTopic", (message) => {
        console.log("updateTopic")
        // console.log(acticeTopics)
        console.log(message.type + '-' + message.id)
        if (acticeTopics[message.type + '-' + message.id] && acticeTopics[message.type + '-' + message.id].modules) {
            // console.log(acticeTopics[message.type + '-' + message.id].updateFunction);
            Object.values(acticeTopics[message.type + '-' + message.id].modules).forEach(module => {

                module.updateFunction(message.data, message.id)

            });
        }
    });



    socket.on("newMsg", (info) => {
        let message = info?.data?.message
        store.dispatch(actions.appendMessages(message.messenger, [message]))
        store.dispatch(actions.addNotification(message.messenger))
    });


    socket.on("msgSeen", (info) => {
        // console.log("msgSeen")
        store.dispatch(actions.messageSeen(info?.data?.messenger, info?.data?.message))

    });



    // socket.emit('heartbeat', 'alive', () => {
    //     console.log("FEEDBACK")
    // })
    // socket.emit('heartbeat', { name: 'alive' })


    // }

}


// function sendHeartBeat() {

//     setTimeout(() => {
//         // console.log("EMIT")
//         socket.emit('heartbeat', 'alive', () => {
//             console.log("FEEDBACK")
//         })
//         sendHeartBeat()
//     }, 1000);
// }


// function getMessengers(isUpdating, cb) {
//     store.dispatch(actions.changeSetting('socketStatus', "updading"))
//         // this.setState({ isLoading: true })
//     console.log("ISUPDATING")
//     HttpService.request('getMessengers', { isUpdating }, (fetchResult, fetchError) => {
//         // console.warn(fetchError)
//         store.dispatch(actions.changeSetting('socketStatus', false))

//         // console.warn(fetchResult)

//         // this.setState({ isLoading: false })

//         if (fetchError) { this.setState({ error: fetchError.message }); return }

//         store.dispatch(actions.addMessengers(fetchResult.info, true)) //.then(()=>{

//         if (fetchResult.messages) {
//             for (const [key, value] of Object.entries(fetchResult.messages)) {
//                 store.dispatch(actions.addMessages(key, value))
//             }
//         }

//         setTimeout(() => {
//             fetchResult.info.forEach(messenger => {
//                 // console.log("TRY")
//                 messenger.participants.forEach(participant => {
//                     if (participant === userId) {
//                         // console.warn("CHANGE")
//                         store.dispatch(actions.changeLastSeen(messenger._id, (messenger.lastSeen ? messenger.lastSeen[participant] : null)))
//                     }
//                 });
//             })
//         }, 500);



//     });

//     // })



//     // this.setState({ data: fetchResult.info })
//     // })
// }



// })


// const mapStateToProps = state => ({ settings: state.settings, user: state.user, resource: state.resource });
// const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

// export const mysocket = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(socket);

// export const myinitSocket = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(initSocket);


export { socket, initSocket, subscribeVisitor, closeSocket, addTopic, removeTopic }