'use client'
import Host from '@/components/Host/Host'
import Notification from '@/components/Notification/Notification'
import Comment from '@/components/comment/Comment'

export default function Home() {
  return (
    <>
      <Comment />
      <Host />
      <Notification />
    </>
  )
}
