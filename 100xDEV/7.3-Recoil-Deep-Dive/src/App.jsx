import {useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

const App = () => {
  return (
      <MainApp />
  )
}

const MainApp = () => {

  const networkNotification = useRecoilValue(networkAtom)
  const jobsNotification = useRecoilValue(jobsAtom)
  const notificationNotification = useRecoilValue(notificationAtom)
  const [messagingNotification, setMessagingNotification] = useRecoilState(messagingAtom)

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotification >= 100 ? "99+" : networkNotification})</button>
      <button>Jobs ({jobsNotification >= 100 ? "99+" : jobsNotification})</button>
      <button>Messaging ({notificationNotification >= 100 ? "99+" : notificationNotification})</button>
      <button>Notification ({messagingNotification >= 100 ? "99+" : messagingNotification})</button>
      <button
      onClick={
        function(){
          setMessagingNotification(messagingNotification+1)
        }
      }>Me</button>
    </div>
  )
}

export default App