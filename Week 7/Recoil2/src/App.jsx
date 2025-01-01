import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { networkAtom, jobsAtom,notificationAtom,messagingAtom, totalNotificationSelector } from './atoms'
import { useMemo } from 'react'

function App() {
 return <RecoilRoot>
  <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  
  const networkNotificationCount=useRecoilValue(networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom)
  const notificationAtomCount=useRecoilValue(notificationAtom)
  const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)
  
  // selector can be used to do this 
  // const totalNotificationCount= useMemo(()=>{
  //   return networkNotificationCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
  // }, [networkNotificationCount,jobsAtomCount,notificationAtomCount,messagingAtomCount])

  return (
    <>
      <button>Home</button>

      <button>My network {networkNotificationCount >=100 ? "99+" : networkNotificationCount}</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messanging {messagingAtomCount}</button>
      <button>Notification {notificationAtomCount}</button>

      <button>Me {totalNotificationCount}</button>
    </>
  )
}
export default App
